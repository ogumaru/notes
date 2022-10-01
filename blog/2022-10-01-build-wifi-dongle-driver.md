---
title: 【Linux】Ubuntu 22.04でWi-FiドングルのドライバをDockerでビルドする
authors: ogumaru
tags: [ubuntu, linux, wifi]
---

## 概要

これまで Wi-Fi 接続用の USB ドングルを利用する際にドライバのビルドが必要になることがあったため、作業の記録も兼ねてまとめておく。

依存パッケージが多いため、Docker を利用してビルドを行うこととする。

## 環境・利用機器

| 環境   | バージョン              |
| ------ | ----------------------- |
| OS     | Ubuntu 22.04.1 LTS      |
| Docker | 20.10.14, build a224086 |

| 製品                                                                              | コントローラ                                                                               |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [アイ・オー・データ社 WNPU583B](https://www.amazon.co.jp/gp/product/B01N44FMI9/)  | [rtl8821ce](https://www.realtek.com/ja/products/communications-network-ics/item/rtl8821ce) |
| [アイ・オー・データ社 WN-AC867U](https://www.amazon.co.jp/gp/product/B00C58G612/) | [rtl8812au](https://www.realtek.com/ja/products/communications-network-ics/item/rtl8812au) |

WNPU583B は Wi-Fi/Bluetooth 両方使用できることを確認する。

## ドライバのビルド・インストール

### Docker コンテナの起動 (ホスト側)

rtl8812au のドライバが多く迷うが、[GitHub での「rtl8812au」の検索結果](https://github.com/search?q=rtl8812au)の上位のものを利用した。

```bash
git clone https://github.com/gnab/rtl8812au.git driver
docker run --rm -it -v "$(pwd)/driver:/data" -w "/data" ubuntu:jammy /bin/bash
```

後述するカーネルヘッダのパッケージをインストールするためには、ホストとコンテナの OS(ディストリビューション)を合わせる必要がある。

最初`gcc`のコンテナでビルドしようとしたが、ベースとなる OS が異なるためこのパッケージがなかった。

### 依存パッケージのインストール (コンテナ側)

```bash
apt update
apt install build-essential "linux-headers-$(uname -r)"
```

なお、`linux-headers-*`のパッケージをインストールしないと下記のエラーが出る。

> make[1]: \*\*\* /lib/modules/5.15.0-47-generic/build: No such file or directory.

### ドライバのビルド (コンテナ側)

```bash
make
```

### ドライバのテスト (ホスト側)

```bash
sudo insmod driver/8812au.ko
```

この状態では再起動の際にモジュールへの参照が解除されてしまう。

### インストール (ホスト側)

```bash
sudo cp 8812au.ko "/lib/modules/$(uname -r)/kernel/drivers/net/wireless"
sudo depmod
```

上記のほか、カーネルアップデートをした際に自動でビルドするには DKMS を利用する必要がある。

詳細は[リポジトリの README](https://github.com/gnab/rtl8812au/)に書いてある。

`build-essential`や`dkms`などのパッケージを入れる必要があるため、今回は対応しないこととする。

(別の機会に Docker を利用した方法を試したい。)

## ソースコードの確認

ここまででドングルは動作する状態にはなったが、製品への対応状況を確認するため、今回利用したリポジトリと APT リポジトリのソースコードを比較しつつ確認してみる。

### ベンダー ID・プロダクト ID の確認

ソースコードを探るにあたり、製品の ID を確認する。

```bash
lsusb | grep -i wn
# > Bus 001 Device 013: ID 0bda:0823 Realtek Semiconductor Corp. WNPU583B
# > Bus 001 Device 012: ID 04bb:0952 I-O Data Device, Inc. WN-AC867U
```

`0bda:0823`や`04bb:0952`がベンダー ID(`idVendor`)とプロダクト ID(`idProduct`)の値のため、これを利用してソースコードを検索する。
ベンダー ID を含めるとヒット件数が多いため、プロダクト ID を利用して検索を行う。

### 今回利用したリポジトリのソースコード

[https://github.com/gnab/rtl8812au.git](https://github.com/gnab/rtl8812au.git)のソースコード内から関連する記述を確認する。

```bash
git grep -iP '0x(0823|0952)'
# > os_dep/linux/usb_intf.c:        {USB_DEVICE(0x04BB, 0x0952),.driver_info = RTL8812}, /* I-O DATA - Edimax */
# > os_dep/linux/usb_intf.c:        {USB_DEVICE(0x0bda, 0x0823),.driver_info = RTL8821}, /* I-O DATA - WNPU583B */
```

### APT リポジトリのソースコード

ホスト環境の設定を変えたくなかったのでコンテナ環境でソースコードを取得する

```bash
# 何かしらエディタをインストール
apt install busybox

# deb-src のコメントアウトを解除する
busybox vi /etc/apt/sources.list
apt update

# 関連するパッケージを検索
apt search --names-only 'rtl88[21]{2}'
# > Sorting... Done
# > Full Text Search... Done
# > rtl8812au-dkms/jammy,jammy 4.3.8.12175.20140902+dfsg-0ubuntu15 all
# >   dkms source for the r8812au network driver
# >
# > rtl8821ce-dkms/jammy,jammy 5.5.2.1-0ubuntu10 all
# >   DKMS source for the Realtek 8821C PCIe Wi-Fi driver
```

上記のパッケージ検索結果から`rtl8812au-dkms`と`rtl8821ce-dkms`を確認することにする。

```bash
# ソースコードのダウンロード
apt source rtl8812au-dkms
```

下記のメッセージが出てきたが、今回は`apt source`でダウンロードしたものを確認する。

> Picking 'rtl8812au' as source package instead of 'rtl8812au-dkms'  
> NOTICE: 'rtl8812au' packaging is maintained in the 'Git' version control system at:  
> https://github.com/rsalveti/rtl8812au.git  
> Please use:  
> git clone https://github.com/rsalveti/rtl8812au.git  
> to retrieve the latest (possibly unreleased) updates to the package.

```bash
apt source rtl8821ce-dkms
```

下記のメッセージが出てきたが、こちらも`apt source`でダウンロードしたものを確認する。

> Picking 'rtl8821ce' as source package instead of 'rtl8821ce-dkms'  
> NOTICE: 'rtl8821ce' packaging is maintained in the 'Git' version control system at:  
> https://git.launchpad.net/~canonical-hwe-team/ubuntu/+source/rtl8821ce-dkms/+git/rtl8821ce-dkms  
> Please use:  
> git clone https://git.launchpad.net/~canonical-hwe-team/ubuntu/+source/rtl8821ce-dkms/+git/rtl8821ce-dkms  
> to retrieve the latest (possibly unreleased) updates to the package.

ダウンロードしたソースコードから関連する記述を検索する。

```bash
# ダウンロードされたファイルの確認
ls -1
# > rtl8812au-4.3.8.12175.20140902+dfsg
# > rtl8812au_4.3.8.12175.20140902+dfsg-0ubuntu15.debian.tar.xz
# > rtl8812au_4.3.8.12175.20140902+dfsg-0ubuntu15.dsc
# > rtl8812au_4.3.8.12175.20140902+dfsg.orig.tar.gz
# > rtl8821ce-5.5.2.1
# > rtl8821ce_5.5.2.1-0ubuntu10.debian.tar.xz
# > rtl8821ce_5.5.2.1-0ubuntu10.dsc
# > rtl8821ce_5.5.2.1.orig.tar.gz

# 関連する記述を確認
find -name "*.c" -print0 | xargs -0 grep -iP '0x(0823|0952)'
# > ./rtl8812au-4.3.8.12175.20140902+dfsg/.pc/0009-usb_intf-extending-compatible-vendor-list.patch/os_dep/linux/usb_intf.c:	{USB_DEVICE(0x04BB, 0x0952),.driver_info = RTL8812}, /* I-O DATA - Edimax */
# > ./rtl8812au-4.3.8.12175.20140902+dfsg/.pc/0004-Adding-additional-compatible-devices.patch/os_dep/linux/usb_intf.c:	{USB_DEVICE(0x04BB, 0x0952),.driver_info = RTL8812}, /* I-O DATA - Edimax */
# > ./rtl8812au-4.3.8.12175.20140902+dfsg/os_dep/linux/usb_intf.c:	{USB_DEVICE(0x04BB, 0x0952),.driver_info = RTL8812}, /* I-O DATA - Edimax *
```

依存パッケージが多く入れたくないため確認していないが、上記からの予想として、WN-AC867U であれば`rtl8812au`のパッケージをインストールすれば利用できる可能性がある。

WNPU583B に関連する部分はヒットしないため動作するか不明。

(過去の経験では Kubuntu 20.04 において `rtl8821ce-dkms`をインストールすることで Bluetooth だけは利用できた。)
