---
title: 【Linux】Raspberry Pi 4のSambaサーバへiPhoneの純正アプリから接続する
authors: ogumaru
tags: [ubuntu, linux, raspberrypi, samba, ios]
---

## 概要

Raspberry Pi 4 を利用して LAN 内に Samba サーバを構築し、iPhone に標準でインストールされている「ファイル」アプリからの接続を行う

## 環境

| 項目             | 内容                   |
| ---------------- | ---------------------- |
| クライアント機種 | iPhone 8 Plus          |
| クライアント OS  | iOS 15.6.1             |
| サーバ機種       | Raspberry Pi 4 Model B |

Raspberry Pi OS はバージョンがないらしいため下記で確認

(ベータ版で出た 64-bit の OS を入れた記憶がある)

```bash
uname -a
# > Linux raspberrypi 5.10.103-v8+ #1529 SMP PREEMPT Tue Mar 8 12:26:46 GMT 2022 aarch64 GNU/Linux
lsb_release -a
# > No LSB modules are available.
# > Distributor ID:	Debian
# > Description:	Debian GNU/Linux 10 (buster)
# > Release:	10
# > Codename:	buster
```

```bash
samba --version
# > Version 4.9.5-Debian
```

## 準備

### Samba パッケージ

```bash
sudo apt update
sudo apt install samba
# iOS や macOSでも利用する場合
sudo apt install samba-vfs-modules
```

### ユーザ

ここは[Samba - ArchWiki (wiki.archlinux.jp)](https://wiki.archlinux.jp/index.php/Samba)を参考に設定した

```bash
# Sambaユーザの追加
sudo pdbedit -a "$(whoami)"

# `usershare path` で指定する`/var/lib/samba/usershares` にアクセスするため
# (所有者:グループ が root:sambashare になっている)
sudo gpasswd sambashare -a "$(whoami)"
```

グループ設定を反映させるため再ログインする

### ファイアウォール

[Firewalling Samba (www.samba.org)](https://www.samba.org/~tpot/articles/firewall.html)によると、許可するのは下記

| プロトコル | ポート |
| ---------- | ------ |
| UDP        | 137    |
| UDP        | 138    |
| TCP        | 139    |
| TCP        | 445    |

`ufw`を利用していれば下記

```bash
# Samba のルールがあれば利用
sudo ufw app list | grep -i samba
sudo ufw allow samba
```

## Samba の設定

### グローバル設定ファイル

```bash
# 設定ファイルのバックアップ
sudo cp -a /etc/samba/smb.conf{,.$(date '+%Y-%m-%d_%H%M%S').bak}

# 下記差分を追記
sudoedit /etc/samba/smb.conf
```

```diff
[global]
+   usershare path = /var/lib/samba/usershares
+   # For supporting iOS / macOS
+   vfs objects = fruit streams_xattr
+   fruit:metadata = stream
+   fruit:model = MacSamba
+   fruit:posix_rename = yes
+   fruit:veto_appledouble = no
+   fruit:nfs_aces = no
+   fruit:wipe_intentionally_left_blank_rfork = yes
+   fruit:delete_empty_adfiles = yes
```

上記の`vfs`や`fruit`の設定がないと、保存の際に「操作を完了できませんでした」「属性が見つかりません」のようなエラーメッセージが表示される

VFS 関連の設定内容については下記ページのものを利用した

[Configure Samba to Work Better with Mac OS X - SambaWiki (wiki.samba.org)](https://wiki.samba.org/index.php/Configure_Samba_to_Work_Better_with_Mac_OS_X)

### 共有設定ファイル

```bash
# 共有するディレクトリの作成
mkdir -p ~/share

# 共有設定ファイルの作成
net usershare add "share" ~/share/ "samba share" "$(whoami):f"
```

権限の設定については
[net (www.samba.org)](https://www.samba.org/samba/docs/current/man-html/net.8.html)などを参考に指定する

> The definition of a user defined share acl is: "user:permission", where user is a valid username on the system and permission can be "F", "R", or "D". "F" stands for "full permissions", ie. read and write permissions. "D" stands for "deny" for a user, ie. prevent this user from accessing this share. "R" stands for "read only", ie. only allow read access to this share (no creation of new files or directories or writing to files).

### 設定の反映

```bash
sudo systemctl reload smbd.service
```

## 接続

mDNS で名前解決ができれば、同じネットワークにつないだ上で iOS の「ファイル」から

1. [ブラウズ]
1. 右上の丸で囲まれた三点(…)
1. [サーバへ接続]
1. `raspberrypi.local`など
1. [登録ユーザ] を選択
1. Raspberry Pi のユーザ情報を入力

で接続できる

例えば写真は共有から「"ファイル"に保存」から上記フォルダを選択することで保存できる

当初 VFS 関連(`vfs`や`fruit`)を設定しておらず、ここで保存ができずに困ってかなり時間を使った

## パフォーマンスについて

1MB の画像をコピーするのに 体感で 1 秒程度

10MB の動画をコピーするのに 体感で 2 〜 3 秒程度

SSD を接続した USB ブートで利用しているため、Raspberry Pi 環境の中では比較的 I/O は早いはず

microSD 環境ではもう少し遅いかもしれない
