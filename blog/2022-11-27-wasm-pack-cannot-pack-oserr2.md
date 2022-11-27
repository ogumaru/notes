---
title: 【WASM】wasm-pack packがos error 2で失敗する
authors: ogumaru
tags: [javascript, wasm, rust]
---

## 概要

devcontainer 内にて、WebAssembly の npm パッケージを`wasm-pack pack`するとエラーが発生する。

## 結論

Node.js を devcontainer 側にインストールする。

## 環境

| 項目      | バージョン                      |
| --------- | ------------------------------- |
| cargo     | 1.64.0 (387270bc7 2022-09-16)   |
| wasm-pack | 0.10.3                          |
| docker    | version 20.10.14, build a224086 |

## 詳細

`mcr.microsoft.com/vscode/devcontainers/rust:0-bullseye`を元にした devcontainer 内に、下記にて`wasm-pack`をインストールしていた。

```bash
cargo install wasm-pack
```

このコンテナ内で`wasm-pack build`はできるものの、`wasm-pack pack`は下記のエラーが発生した。

> Error: Packaging up your code failed  
> Caused by: No such file or directory (os error 2)

## 対応

公式ドキュメントや Web 上を検索しても情報がなく困ったが、`npm pack`を内部で呼び出しているのかと考え、下記コマンドを利用できるようにしたところ、無事`wasm-pack pack`にて npm パッケージを作成することができた。

- `node`
- `npm`
- `npx`

`npm`とサブコマンドが似ていることから当然といえばそうかもしれないが、気づかずに結構時間を使ってしまった。

なお、`apt`で入るものはバージョンが古いため、(差分が大きいが)下記コミットのようにアーカイブを展開する形で対応した。

[update: devcontainer configuration (ff650765c668002ea1b8e8f056ef8a4907b6a6f8)](https://github.com/ogumaru/wanco/commit/ff650765c668002ea1b8e8f056ef8a4907b6a6f8)

Node.js に関する該当箇所は下記

```dockerfile
FROM busybox:1.34.1 as nodejs
ENV NODEJS_TARBALL_URL="https://nodejs.org/dist/v18.12.1/node-v18.12.1-linux-x64.tar.xz"
USER root
WORKDIR /root/.local
RUN mkdir -p bin/ node/ \
    && wget -O node.tar.xz "${NODEJS_TARBALL_URL}" --no-check-certificate \
    && xz -d -c node.tar.xz | tar xvf - -C node --strip-components 1 \
    && ln -s "/root/.local/node/bin/node" bin/ \
    && ln -s "/root/.local/node/bin/npm" bin/ \
    && ln -s "/root/.local/node/bin/npx" bin/ \
    && rm node.tar.xz
```
