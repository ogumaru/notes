---
title: 【JavaScript】ArcGISで動的にMapViewを配置する
authors: ogumaru
tags: [typescript, javascript, arcgis, react]
---

## 概要

[ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/latest/) (`@arcgis/core`)で `MapView` を利用する際、インスタンス化時に `container` プロパティにセレクタの文字列か`HTMLElement`を指定することで、そこに地図を表示することができる。

React を利用する都合上、静的な HTML ではなく、表示対象となる要素(React コンポーネント)が描画されたあと、そこに表示されるようにしたい。

実装は ES Modules および TypeScript を利用して行った。

## 結論

`useEffect`内で`__esri.Accessor.set()`から`container`を指定する。

```tsx
import { useEffect } from "react";
import MapView from "@arcgis/core/views/MapView";

// ここでは container は指定しない。
// レイヤの操作をする都合上、
// export する必要があるためsetup内でインスタンス化できない。
export const mapView = new MapView({
  /** 略 **/
});

const setup = () => {
  // 動的に container を指定
  mapView.set("container", "viewDiv");
};

export const App = () => {
  useEffect(setup, []);
  return (
    <>
      <div id="viewDiv"></div>
    </>
  );
};
```

## 環境

| 項目                      | 内容   |
| ------------------------- | ------ |
| React                     | 18.2.0 |
| ArcGIS API for JavaScript | 4.24.7 |
| TypeScript                | 4.8.4  |
| webpack                   | 5.74.0 |

## 動的な配置

`MapView`がインスタンス化されたときに`container`に指定した際、この時点で該当の HTML 要素がない場合は地図が表示されない。

React を利用している場合、コンポーネントがマウントされたタイミングで描画されるように、`useEffect`内で`MapView`をインスタンス化すれば問題なく表示ができる。

## `container`プロパティ

サンプルコードなどでは下記のようにコンストラクタで`container`に HTML 要素の`id`文字列を指定することが多い。

```typescript
const mapView = new MapView({
  // (略)
  container: "viewDiv",
});
```

このとき、`container`プロパティの型は `string | HTMLDivElement`となっているため、TypeScript の型エラーは出ない。

(ヒントには`__esri.DOMContainerProperties.container?: string | HTMLDivElement`とでるが、該当の型はドキュメントには見つからなかった)

[MapView | API Reference | ArcGIS API for JavaScript 4.24 | ArcGIS Developers - (developers.arcgis.com)](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#container)

一方、`MapView`がインスタンス化された場合、`container`プロパティは`DOMContainer.container`を指してしまい、指定できるのは`HTMLDivElement`のみとなる。

[DOMContainer | API Reference | ArcGIS API for JavaScript 4.24 | ArcGIS Developers - (developers.arcgis.com)](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-DOMContainer.html#container)

そのため下記コードでは型エラーが発生してしまう。

```typescript
const mapView = new MapView(...);
mapView.container = "viewDiv"
```

> Type 'string' is not assignable to type 'HTMLDivElement'.ts(2322)

`MapView`ではなく、これが継承している`__esri.Accessor`が`set`メソッドを持っており、これを利用することで動的に`container`を指定することができた。

[Accessor | API Reference | ArcGIS API for JavaScript 4.24 | ArcGIS Developers - (developers.arcgis.com)](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Accessor.html#set)
