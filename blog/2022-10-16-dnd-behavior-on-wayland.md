---
title: 【JavaScript】Wayland + Chromium環境でファイルのファイルドロップがたまに失敗する
authors: ogumaru
tags: [javascript, linux]
---

## 概要

ウェブブラウザの File API を利用して、ファイルのドラッグ & ドロップを利用した機能を実装している際、ファイルの検証を行っているにもかかわらず、エラーが発生した。

必ず失敗するわけではなく、たまに成功するため、動作の確認を行った。

## 原因

ファイルドロップ時にその中身が変わるのは、Wayland 環境における現状の挙動らしかった。

参照:

- [Cannot drag and drop from nautilus to Chrome or Slack - Ask Ubuntu (askubuntu.com)](https://askubuntu.com/questions/1411629/cannot-drag-and-drop-from-nautilus-to-chrome-or-slack)
- [Bug #1970921 “Drag and drop does not work” : Bugs : nautilus package : Ubuntu (bugs.launchpad.net)](https://bugs.launchpad.net/ubuntu/+source/nautilus/+bug/1970921)

## 挙動の確認

### 環境

| 環境     | バージョン                   |
| -------- | ---------------------------- |
| OS       | Ubuntu 22.04.1 LTS           |
| Chromiun | Chromium 106.0.5249.119 snap |
| Firefox  | Mozilla Firefox 105.0.3      |
| Files    | GNOME nautilus 42.2          |

### 挙動の詳細と確認

デバッガを利用して確認を行った。

下記のようなコードにおいて、`csv.getAsFile()`が`null`になるために例外が発生していた。

体感として失敗する割合のほうが多いように感じる。

<details>
<summary>再現コード</summary>

```javascript
// CSV形式かどうかの確認
const isCSVItem = (item) => {
  const type = item.type;
  const isCSV = [
    type === "text/plain",
    type === "text/csv",
    type === "application/vnd.ms-excel",
    type === "application/octet-stream",
  ].some((result) => result === true);
  return isCSV;
};

document.body.addEventListener("dragover", (event) => {
  event.stopPropagation();
  event.preventDefault();
  if (!event.dataTransfer) return;
  event.dataTransfer.dropEffect = "copy";
});

document.body.addEventListener("drop", (event) => {
  event.stopPropagation();
  event.preventDefault();
  if (!event.dataTransfer) return;

  // item の確認
  // 同じ操作でも異なる結果になる
  for (const item of event.dataTransfer.items) {
    console.log(item);
  }

  Array.from(event.dataTransfer.items)
    .filter((item) => isCSVItem(item))
    // ここで返り値が null になる
    .map((csv) => csv.getAsFile())
    .map((file) => {
      if (!file) throw new Error("Failed to load csv file.");
      const reader = new FileReader();
      // file が たまに null になるため例外が発生する
      reader.readAsDataURL(file);
      reader.addEventListener("load", (event) => {
        // ファイルに対する処理
      });
    });
});
```

</details>

成功する場合と失敗する場合を比較すると、上記コードの`event.dataTransfer.items`の要素(`DataTransferItem`)の中身に違いがあり、下記 2 通りになっていることがわかった。

| 処理 | kind   | type       |
| ---- | ------ | ---------- |
| 成功 | file   | text/csv   |
| 失敗 | string | text/plain |

Firefox ではこの問題は発生せず、`kind: file`なものが取得できるため問題なく動作した。

## 対策

1. ドロップされたデータの`kind`が`file`かどうか判定する
1. `input`要素からファイルを選択して取得する  
   `input[type="file"]`ではこの問題は発生しない
1. ログイン時に [Ubuntu on Xorg] を利用する

今回は 1, 2 の対策を行って実装を行った。
