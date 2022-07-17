---
slug: 2022-07-18duplicated-value-in-set
title: 【JavaScript】プリミティブでない値を持つSetにて重複が発生する
authors: ogumaru
tags: [javascript, python]
---

## 概要

TypeScript にて、タプル風(`[T, T]`)の配列があり、これの中身をユニークにしたい場面があった。

`Set`を経由すれば重複排除できると思ったが、見た目上同じオブジェクトの重複は排除されなかった。

## 結論

JavaScript における配列の同値比較が`false`になるため。

厳密にユニークなコレクションを作成する場合は、deepEqual 相当の確認が必要そう。

## 実行環境

| 実行環境 | バージョン      |
| ------------- | --------------------- |
| node        | v16.15.0            |
| python3  | Python 3.10.4 |

## JavaScript の挙動と Python との比較

タプル風の配列リテラルを`add`すると、重複した値がそれぞれが追加されてしまう。

```javascript
const unique = new Set();
unique.add(["hoge", "huga"]);
// Set(1) { [ 'hoge', 'huga' ] }
unique.add(["hoge", "huga"]);
// Set(2) { [ 'hoge', 'huga' ], [ 'hoge', 'huga' ] }
```

Python ではできた気がしたので確認する。

(なお`["hoge", "huga"]`は`Hashable`でないため`set`には追加できない)

```python
unique = set()
unique.add(("hoge", "huga"))
# {('hoge', 'huga')}
unique.add(("hoge", "huga"))
# {('hoge', 'huga')}
```

リテラルのタプルに対して重複排除ができている。

JavaScript でも、オブジェクトが同一になるため、下記では意図した通りに重複が排除される。

```javascript
const unique = new Set();
const tuple = ["hoge", "huga"];
unique.add(tuple);
// Set(1) { [ 'hoge', 'huga' ] }
unique.add(tuple);
// Set(1) { [ 'hoge', 'huga' ] }
```

JavaScript では Python におけるタプル相当のデータ型がないため、上記コードでは実際にはミュータブルな配列となる。

`Object.freeze()`でイミュータブルにしてみたが、結果は変わらなかった。

```javascript
const unique = new Set();
unique.add(Object.freeze(["hoge", "huga"]));
// Set(1) { [ 'hoge', 'huga' ] }
unique.add(Object.freeze(["hoge", "huga"]));
// Set(2) { [ 'hoge', 'huga' ], [ 'hoge', 'huga' ] }
```

## 仕様の確認

MDN の`Set`のページを見ると、`-0`と`+0`について触れられている。

> See "Key equality for -0 and 0" in the browser compatibility table for details.

[Set - JavaScript | MDN (developer.mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#value_equality)

等価比較のページを見ると、

> SameValueZero: used by %TypedArray% and ArrayBuffer constructors, as well as Map and Set operations, and also String.prototype.includes and Array.prototype.includes since ES2016

[Equality comparisons and sameness - JavaScript | MDN (developer.mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

`SameValueZero`の TC39 へリンクされていたのでこちらも確認。

> SameValueZero differs from SameValue only in that it treats +0𝔽 and -0𝔽 as equivalent.

[SameValueZero | ECMAScript® 2023 Language Specification (tc39.es)](https://tc39.es/ecma262/#sec-samevaluezero)

`SameValue`と`+0`と`-0`の比較結果のみ異なるとあるため、[`SameValue`](https://tc39.es/ecma262/#sec-samevalue)を確認すると、

> 1. If Type(x) is different from Type(y), return false.
> 2. If Type(x) is Number, then
>
>    a. Return Number::sameValue(x, y).
>
> 3. If Type(x) is BigInt, then
>
>    a. Return BigInt::sameValue(x, y).
>
> 4. Return SameValueNonNumeric(x, y).

とのことなので[`SameValueNonNumeric`](https://tc39.es/ecma262/#sec-samevaluenonnumeric)を確認。

> 1. Assert: Type(x) is the same as Type(y).
> 2. If Type(x) is Undefined, return true.
> 3. If Type(x) is Null, return true.
> 4. If Type(x) is String, then
>
>    a. If x and y are exactly the same sequence of code units (same length and same code units at corresponding indices), return true; otherwise, return false.
>
> 5. If Type(x) is Boolean, then
>
>    a. If x and y are both true or both false, return true; otherwise, return false.
>
> 6. If Type(x) is Symbol, then
>
>    a. If x and y are both the same Symbol value, return true; otherwise, return false.
>
> 7. If x and y are the same Object value, return true. Otherwise, return false.

タプルの場合`7`にて評価されると思われ、`same Object value`ではないということになるようだ。

## same Object value とは

TC39にはこれ以上のリンクがなかったが、deepEqual相当の比較を行うことで重複の確認はできそう。

修正 PR いただけるとありがたいです。
