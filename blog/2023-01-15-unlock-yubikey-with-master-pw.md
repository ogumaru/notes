---
title: 【YubiKey】PINを間違えたYubiKeyのロックを解除する
authors: ogumaru
tags: [gpg, git, yubikey]
---

## 概要

Git のコミット署名に利用している YubiKey の PIN を 3 回間違えてしまい、ロックされてしまった。

ロックされた状態で`git commit`すると下記のエラーとなった。

> error: gpg failed to sign the data  
> error: unable to sign the tag

解除コードを利用してロックの解除を行う。

## 環境

| 項目              | 種類 / バージョン                      |
| ----------------- | -------------------------------------- |
| ハードウェアキー  | Yubikey 5 NFC                          |
| `ykman`           | YubiKey Manager (ykman) version: 4.0.7 |
| `yubico-piv-tool` | yubico-piv-tool 2.2.0                  |
| `gpg`             | gpg (GnuPG) 2.2.27                     |

また、`git config`で下記の設定をしており、コミットに署名するようになっている。

```plaintext
commit.gpgsign=true
user.signingkey=********
```

主鍵は別途保管し、副鍵から生成した署名鍵を YubiKey に入れて管理している。

## 結論

YubiKey の持つ機能の内、GPG スマートカードとしての PIN がロックされているため、下記の通り対話的に GPG コマンドを実行して解除する。

```bash
gpg --card-edit
```

プロンプトが `gpg/card`になったら`admin`コマンドで管理コマンドを有効化する。

```gpg
gpg/card> admin
Admin commands are allowed
```

`passwd`コマンドで`2`を選択し、PIN のブロックを解除する。

```gpg
gpg/card> passwd
gpg: OpenPGP card no. … detected

1 - change PIN
2 - unblock PIN
3 - change Admin PIN
4 - set the Reset Code
Q - quit

Your selection? 2
PIN unblocked and new PIN set.
```

ブロックが解除されたら`q`を入力し終了する。

## 前提知識: YubiKey の入力コードについて

YubiKey では以下の入力コードが出てくる

当初これを正しく認識しておらず、混乱した。

| 名称           | 主な用途                                | 初期値                     |
| -------------- | --------------------------------------- | -------------------------- |
| PIN (User PIN) | ユーザ認証 (これを間違えてロックされた) | `123456`                   |
| Admin PIN      | 不明 (今回これを利用)                   | `12345678`                 |
| PUK            | PIN のブロック解除 (今回利用しない)     | `12345678`                 |
| Management key | エンティティの認証 (今回利用しない)     | `0102030405060708` の 3DES |

参考:

- [The PIV PIN, PUK, and management key - (docs.yubico.com)](https://docs.yubico.com/yesdk/users-manual/application-piv/pin-puk-mgmt-key.html)
- [YubiKey - ArchWiki - (wiki.archlinux.jp)](https://wiki.archlinux.jp/index.php/YubiKey)

## だめだった方法

### ykman

設定時にインストールしていたため、最初このツールでの解除を図った。

ドキュメント内から[Unblock the PIN (using PUK).](https://docs.yubico.com/software/yubikey/tools/ykman/PIV_Commands.html#ykman-piv-access-unblock-pin-options)と書かれているものがあったためこれを実行した。

> WARNING: PC/SC not available. Smart card protocols will not function.

のようなエラーが出た場合は[ここ](https://www.reddit.com/r/yubikey/comments/p94xwl/yubikey_wont_register_on_arch_linuxs_desktop_auth/)を参考に`sudo systemctl start pcscd.service`することで無事実行できるようになる。

```bash
ykman piv access unblock-pin
# > Enter PUK:
# > Enter a new PIN:
# > PIN unblocked
```

しかし`git commit`を実行しても PIN のロックは解除できていなかった。

### yubico-piv-tool

上記とは[別のツールがあった](https://tech.yubion.com/documents/piv/admin_guide/yubikey/change-puk/)ためこれを利用して解除を試みた。

```bash
yubico-piv-tool -a unblock-pin
# > Enter puk:
# > Enter new pin:
# > Verifying - Enter new pin:
# > Successfully unblocked the pin code.
```

若干出力は異なるものの、概ね`ykman`と同様の出力となり、同じくロックの解除はできていなかった。

## 再発防止のための暫定的な対応

大文字/小文字、打ち間違いなどを考慮するとリトライ回数が 3 回では不足が考えられたので、下記の通り設定を変更した。

```bash
yubico-piv-tool -a verify -P "${YUBIKEY_PIN}" -a pin-retries --pin-retries=5 --puk-retries=5
```

参考: [PIN/PUK のリトライ回数の変更 - YubiKey PIV Manual - (tech.yubion.com)](https://tech.yubion.com/documents/piv/admin_guide/yubikey/change-retry-count/)
