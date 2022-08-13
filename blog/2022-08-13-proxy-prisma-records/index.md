---
title: 【JavaScript】Prismaの単純なレコードを値の配列として取得する
authors: ogumaru
tags: [javascript, prisma]
---

## 概要

Prisma を利用して、 1:N のリレーションを持つ単純なレコードの値を配列として取得する。

## 結論

`Proxy`を利用する。

## 実行環境

| 実行環境       | バージョン |
| -------------- | ---------- |
| node           | v16.15.0   |
| prisma         | 4.2.1      |
| @prisma/client | 4.2.1      |

## やりたいこと

![LeavesとBranchesのER図](mermaid-diagram-2022-08-13-123036.svg "単純な1:NのER図")

<details>
<summary>schema.prisma</summary>

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Branches {
  id     Int      @id @default(autoincrement())
  leaves Leaves[]
}

model Leaves {
  id       Int      @id @default(autoincrement())
  branch   Branches @relation(fields: [branchId], references: [id])
  branchId Int
  value    String
}
```

</details>

上図の単純な `Branches`:`Leaves` = 1:N となるテーブルに対して、Prisma で取得したオブジェクトに対し、

```javascript
console.log(branches.leaves)
> ["hoge", "huga", ...]
```

のようにプロパティアクセスで子となるレコードの値のみを取得したい。

## 実際の挙動

Prisma ではレコードはオブジェクトとなる。

```typescript
const select = async () => {
  const branch = await prisma.branches.findFirstOrThrow({
    include: { leaves: true },
  });
  return branch;
};
```

とすると下記のような形でレコードが返される。

```json
{
  "id": 1,
  "leaves": [
    {
      "id": 1,
      "branchId": 1,
      "value": "hoge"
    },
    {
      "id": 2,
      "branchId": 1,
      "value": "huga"
    }
  ]
}
```

## Proxy を利用したルーティング

`leaves`に対するアクセスを下記のように処理すると値の配列として取得できる。

```typescript
interface ILeaf {
  id: number;
  value: string;
}

interface IBranch {
  id: number;
  leaves: Array<ILeaf>;
}

const select = async () => {
  const proxy: ProxyHandler<IBranch> = {
    get: (obj, prop) => {
      if (prop === "leaves") {
        return obj.leaves.map((leaf) => leaf.value);
      } else {
        if (Object.hasOwn(obj, prop)) {
          return obj[prop as keyof IBranch];
        } else {
          return undefined;
        }
      }
    },
  };
  const branch = await prisma.branches.findFirstOrThrow({
    include: { leaves: true },
  });
  return new Proxy(branch, proxy);
};
```

`leaves`は単純な値の配列となる。

```json
{
  "id": 1,
  "leaves": ["hoge", "huga"]
}
```

## 留意点

プロパティをプライベートにするものではないため、値の更新をする場合には注意が必要。

```javascript
const records = {
  private: [
    { id: 0, value: "secret" },
    { id: 1, value: "keys" },
  ],
};

const proxy = {
  get: (obj, prop) => {
    if (prop === "private") {
      return obj[prop].map((record) => record.value);
    } else {
      return obj[prop];
    }
  },
};
const proxied = new Proxy(records, proxy);

console.log(proxied.private);
// > [ { id: 0, value: 'secret' }, { id: 1, value: 'keys' } ]

proxied.private = ["hoge", "huga"];

console.log(proxied.private);
// > [ undefined, undefined ]
```
