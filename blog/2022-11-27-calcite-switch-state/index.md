---
title: 【React】CalciteSwitchで見た目が変わらない
authors: ogumaru
tags: [typescript, javascript, react]
---

## 概要

有効/無効の 2 つの状態を持つ要素を利用して、`createContext`で作成した状態を保持・切り替えさせたい。

Calcite Design System の`CalciteSwitch`を利用し、状態をクリックで変更しようとしたが、実際はクリックをしても見た目が有効なまま変わらなかった。

意図した動作としては、選択状態に応じて下の表のようになる。

| スイッチの状態 | 表示                               |
| -------------- | ---------------------------------- |
| 有効           | ![青、右](switch-on.png "青、右")  |
| 無効           | ![白、左](switch-off.png "白、左") |

## 環境

| 項目                           | バージョン |
| ------------------------------ | ---------- |
| @esri/calcite-components-react | 0.32.0     |
| react                          | 18.2.0     |

## 原因・対策

`onClick`でイベントの処理をしつつ`checked={context.isSetAttr}`のように`checked`プロパティで状態管理をすると適切に表示されなくなる。

`checked=true`や`checked`であれば当然青になるが、`checked=false`であっても表示が上の表の「有効」のものになる。

ドキュメントには`checked`は`true`, `false`を持つとあるが、実際には`false`だと意図した通りの表示にならない。

下記コードでは状態に関わらず「有効」のものが表示される。

(`context`は上位コンポーネントより渡しており、`isSetAttr`は`boolean`)

```tsx
<CalciteSwitch
  checked={context.isSetAttr}
  onClick={(e) => {
    const input = e.target as HTMLInputElement;
    context.setIsSetAttr(input.checked);
  }}
/>
```

正しくは下記のように`onCalciteSwitchChange`でイベントの処理をしつつ、`checked`に状態を持たせない。

```tsx
<CalciteSwitch
  onCalciteSwitchChange={(e) => {
    const input = e.target;
    context.setIsSetAttr(input.checked);
  }}
/>
```

> Fires when the `checked` value has changed. **Note:** The event payload is deprecated, use the component's `checked` property instead.

[Switch | Calcite Design System | ArcGIS Developers - (developers.arcgis.com)](https://developers.arcgis.com/calcite-design-system/components/switch/#component-api-events-calciteSwitchChange)

これで意図した表示にはなるが、コンポーネント自体に状態を保持しておらず、複数箇所からの操作がある場合に若干不安がある。
