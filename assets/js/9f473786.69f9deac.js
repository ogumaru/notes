"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[6547],{3905:(I,e,i)=>{i.d(e,{Zo:()=>Z,kt:()=>W});var l=i(7294);function a(I,e,i){return e in I?Object.defineProperty(I,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):I[e]=i,I}function n(I,e){var i=Object.keys(I);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(I);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(I,e).enumerable}))),i.push.apply(i,l)}return i}function t(I){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){a(I,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(I,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(I,e,Object.getOwnPropertyDescriptor(i,e))}))}return I}function m(I,e){if(null==I)return{};var i,l,a=function(I,e){if(null==I)return{};var i,l,a={},n=Object.keys(I);for(l=0;l<n.length;l++)i=n[l],e.indexOf(i)>=0||(a[i]=I[i]);return a}(I,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(I);for(l=0;l<n.length;l++)i=n[l],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(I,i)&&(a[i]=I[i])}return a}var c=l.createContext({}),d=function(I){var e=l.useContext(c),i=e;return I&&(i="function"==typeof I?I(e):t(t({},e),I)),i},Z=function(I){var e=d(I.components);return l.createElement(c.Provider,{value:e},I.children)},r={inlineCode:"code",wrapper:function(I){var e=I.children;return l.createElement(l.Fragment,{},e)}},b=l.forwardRef((function(I,e){var i=I.components,a=I.mdxType,n=I.originalType,c=I.parentName,Z=m(I,["components","mdxType","originalType","parentName"]),b=d(i),W=a,p=b["".concat(c,".").concat(W)]||b[W]||r[W]||n;return i?l.createElement(p,t(t({ref:e},Z),{},{components:i})):l.createElement(p,t({ref:e},Z))}));function W(I,e){var i=arguments,a=e&&e.mdxType;if("string"==typeof I||a){var n=i.length,t=new Array(n);t[0]=b;var m={};for(var c in e)hasOwnProperty.call(e,c)&&(m[c]=e[c]);m.originalType=I,m.mdxType="string"==typeof I?I:a,t[1]=m;for(var d=2;d<n;d++)t[d]=i[d];return l.createElement.apply(null,t)}return l.createElement.apply(null,i)}b.displayName="MDXCreateElement"},6061:(I,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>r,frontMatter:()=>n,metadata:()=>m,toc:()=>d});var l=i(7462),a=(i(7294),i(3905));const n={title:"\u3010JavaScript\u3011Prisma\u306e\u5358\u7d14\u306a\u30ec\u30b3\u30fc\u30c9\u3092\u5024\u306e\u914d\u5217\u3068\u3057\u3066\u53d6\u5f97\u3059\u308b",authors:"ogumaru",tags:["javascript","prisma"]},t=void 0,m={permalink:"/2022/08/13/proxy-prisma-records",source:"@site/blog/2022-08-13-proxy-prisma-records/index.md",title:"\u3010JavaScript\u3011Prisma\u306e\u5358\u7d14\u306a\u30ec\u30b3\u30fc\u30c9\u3092\u5024\u306e\u914d\u5217\u3068\u3057\u3066\u53d6\u5f97\u3059\u308b",description:"\u6982\u8981",date:"2022-08-13T00:00:00.000Z",formattedDate:"2022\u5e748\u670813\u65e5",tags:[{label:"javascript",permalink:"/tags/javascript"},{label:"prisma",permalink:"/tags/prisma"}],readingTime:2.66,hasTruncateMarker:!1,authors:[{name:"ogumaru",title:"ogumaru note owner",url:"https://github.com/ogumaru",imageURL:"https://github.com/ogumaru.png",key:"ogumaru"}],frontMatter:{title:"\u3010JavaScript\u3011Prisma\u306e\u5358\u7d14\u306a\u30ec\u30b3\u30fc\u30c9\u3092\u5024\u306e\u914d\u5217\u3068\u3057\u3066\u53d6\u5f97\u3059\u308b",authors:"ogumaru",tags:["javascript","prisma"]},prevItem:{title:"\u3010Linux\u3011Raspberry Pi 4\u306eSamba\u30b5\u30fc\u30d0\u3078iPhone\u306e\u7d14\u6b63\u30a2\u30d7\u30ea\u304b\u3089\u63a5\u7d9a\u3059\u308b",permalink:"/2022/09/10/samba-on-raspberrypi-from-ios"},nextItem:{title:"\u3010JavaScript\u3011\u30d7\u30ea\u30df\u30c6\u30a3\u30d6\u3067\u306a\u3044\u5024\u3092\u6301\u3064Set\u306b\u3066\u91cd\u8907\u304c\u767a\u751f\u3059\u308b",permalink:"/2022/07/18/duplicated-value-in-set"}},c={authorsImageUrls:[void 0]},d=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2},{value:"\u5b9f\u884c\u74b0\u5883",id:"\u5b9f\u884c\u74b0\u5883",level:2},{value:"\u3084\u308a\u305f\u3044\u3053\u3068",id:"\u3084\u308a\u305f\u3044\u3053\u3068",level:2},{value:"\u5b9f\u969b\u306e\u6319\u52d5",id:"\u5b9f\u969b\u306e\u6319\u52d5",level:2},{value:"Proxy \u3092\u5229\u7528\u3057\u305f\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0",id:"proxy-\u3092\u5229\u7528\u3057\u305f\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0",level:2},{value:"\u7559\u610f\u70b9",id:"\u7559\u610f\u70b9",level:2}],Z={toc:d};function r(I){let{components:e,...n}=I;return(0,a.kt)("wrapper",(0,l.Z)({},Z,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,a.kt)("p",null,"Prisma \u3092\u5229\u7528\u3057\u3066\u3001 1:N \u306e\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u6301\u3064\u5358\u7d14\u306a\u30ec\u30b3\u30fc\u30c9\u306e\u5024\u3092\u914d\u5217\u3068\u3057\u3066\u53d6\u5f97\u3059\u308b\u3002"),(0,a.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Proxy"),"\u3092\u5229\u7528\u3059\u308b\u3002"),(0,a.kt)("h2",{id:"\u5b9f\u884c\u74b0\u5883"},"\u5b9f\u884c\u74b0\u5883"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b9f\u884c\u74b0\u5883"),(0,a.kt)("th",{parentName:"tr",align:null},"\u30d0\u30fc\u30b8\u30e7\u30f3"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"node"),(0,a.kt)("td",{parentName:"tr",align:null},"v16.15.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"prisma"),(0,a.kt)("td",{parentName:"tr",align:null},"4.2.1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@prisma/client"),(0,a.kt)("td",{parentName:"tr",align:null},"4.2.1")))),(0,a.kt)("h2",{id:"\u3084\u308a\u305f\u3044\u3053\u3068"},"\u3084\u308a\u305f\u3044\u3053\u3068"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Leaves\u3068Branches\u306eER\u56f3",src:i(2939).Z,title:"\u5358\u7d14\u306a1:N\u306eER\u56f3",width:"140",height:"251"})),(0,a.kt)("details",null,(0,a.kt)("summary",null,"schema.prisma"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-prisma"},'generator client {\n  provider = "prisma-client-js"\n}\n\ndatasource db {\n  provider = "sqlite"\n  url      = env("DATABASE_URL")\n}\n\nmodel Branches {\n  id     Int      @id @default(autoincrement())\n  leaves Leaves[]\n}\n\nmodel Leaves {\n  id       Int      @id @default(autoincrement())\n  branch   Branches @relation(fields: [branchId], references: [id])\n  branchId Int\n  value    String\n}\n'))),(0,a.kt)("p",null,"\u4e0a\u56f3\u306e\u5358\u7d14\u306a ",(0,a.kt)("inlineCode",{parentName:"p"},"Branches"),":",(0,a.kt)("inlineCode",{parentName:"p"},"Leaves")," = 1:N \u3068\u306a\u308b\u30c6\u30fc\u30d6\u30eb\u306b\u5bfe\u3057\u3066\u3001Prisma \u3067\u53d6\u5f97\u3057\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u5bfe\u3057\u3001"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'console.log(branches.leaves)\n> ["hoge", "huga", ...]\n')),(0,a.kt)("p",null,"\u306e\u3088\u3046\u306b\u30d7\u30ed\u30d1\u30c6\u30a3\u30a2\u30af\u30bb\u30b9\u3067\u5b50\u3068\u306a\u308b\u30ec\u30b3\u30fc\u30c9\u306e\u5024\u306e\u307f\u3092\u53d6\u5f97\u3057\u305f\u3044\u3002"),(0,a.kt)("h2",{id:"\u5b9f\u969b\u306e\u6319\u52d5"},"\u5b9f\u969b\u306e\u6319\u52d5"),(0,a.kt)("p",null,"Prisma \u3067\u306f\u30ec\u30b3\u30fc\u30c9\u306f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u306a\u308b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const select = async () => {\n  const branch = await prisma.branches.findFirstOrThrow({\n    include: { leaves: true },\n  });\n  return branch;\n};\n")),(0,a.kt)("p",null,"\u3068\u3059\u308b\u3068\u4e0b\u8a18\u306e\u3088\u3046\u306a\u5f62\u3067\u30ec\u30b3\u30fc\u30c9\u304c\u8fd4\u3055\u308c\u308b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 1,\n  "leaves": [\n    {\n      "id": 1,\n      "branchId": 1,\n      "value": "hoge"\n    },\n    {\n      "id": 2,\n      "branchId": 1,\n      "value": "huga"\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"proxy-\u3092\u5229\u7528\u3057\u305f\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0"},"Proxy \u3092\u5229\u7528\u3057\u305f\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"leaves"),"\u306b\u5bfe\u3059\u308b\u30a2\u30af\u30bb\u30b9\u3092\u4e0b\u8a18\u306e\u3088\u3046\u306b\u51e6\u7406\u3059\u308b\u3068\u5024\u306e\u914d\u5217\u3068\u3057\u3066\u53d6\u5f97\u3067\u304d\u308b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'interface ILeaf {\n  id: number;\n  value: string;\n}\n\ninterface IBranch {\n  id: number;\n  leaves: Array<ILeaf>;\n}\n\nconst select = async () => {\n  const proxy: ProxyHandler<IBranch> = {\n    get: (obj, prop) => {\n      if (prop === "leaves") {\n        return obj.leaves.map((leaf) => leaf.value);\n      } else {\n        if (Object.hasOwn(obj, prop)) {\n          return obj[prop as keyof IBranch];\n        } else {\n          return undefined;\n        }\n      }\n    },\n  };\n  const branch = await prisma.branches.findFirstOrThrow({\n    include: { leaves: true },\n  });\n  return new Proxy(branch, proxy);\n};\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"leaves"),"\u306f\u5358\u7d14\u306a\u5024\u306e\u914d\u5217\u3068\u306a\u308b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 1,\n  "leaves": ["hoge", "huga"]\n}\n')),(0,a.kt)("h2",{id:"\u7559\u610f\u70b9"},"\u7559\u610f\u70b9"),(0,a.kt)("p",null,"\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u306b\u3059\u308b\u3082\u306e\u3067\u306f\u306a\u3044\u305f\u3081\u3001\u5024\u306e\u66f4\u65b0\u3092\u3059\u308b\u5834\u5408\u306b\u306f\u6ce8\u610f\u304c\u5fc5\u8981\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const records = {\n  private: [\n    { id: 0, value: "secret" },\n    { id: 1, value: "keys" },\n  ],\n};\n\nconst proxy = {\n  get: (obj, prop) => {\n    if (prop === "private") {\n      return obj[prop].map((record) => record.value);\n    } else {\n      return obj[prop];\n    }\n  },\n};\nconst proxied = new Proxy(records, proxy);\n\nconsole.log(proxied.private);\n// > [ { id: 0, value: \'secret\' }, { id: 1, value: \'keys\' } ]\n\nproxied.private = ["hoge", "huga"];\n\nconsole.log(proxied.private);\n// > [ undefined, undefined ]\n')))}r.isMDXComponent=!0},2939:(I,e,i)=>{i.d(e,{Z:()=>l});const l="data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9ImNoYXJ0LXRpdGxlLWdyYXBoLWRpdiBjaGFydC1kZXNjLWdyYXBoLWRpdiIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMTQwIDI1MSIgc3R5bGU9Im1heC13aWR0aDogMTQwcHg7IiBoZWlnaHQ9IjI1MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaWQ9ImdyYXBoLWRpdiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxzdHlsZT5AaW1wb3J0IHVybCgiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTUuMi9jc3MvYWxsLm1pbi5jc3MiKTsnPC9zdHlsZT48dGl0bGUgaWQ9ImNoYXJ0LXRpdGxlLWdyYXBoLWRpdiI+PC90aXRsZT48ZGVzYyBpZD0iY2hhcnQtZGVzYy1ncmFwaC1kaXYiPjwvZGVzYz48c3R5bGU+I2dyYXBoLWRpdiB7Zm9udC1mYW1pbHk6InRyZWJ1Y2hldCBtcyIsdmVyZGFuYSxhcmlhbCxzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNnB4O2ZpbGw6IzMzMzt9I2dyYXBoLWRpdiAuZXJyb3ItaWNvbntmaWxsOiM1NTIyMjI7fSNncmFwaC1kaXYgLmVycm9yLXRleHR7ZmlsbDojNTUyMjIyO3N0cm9rZTojNTUyMjIyO30jZ3JhcGgtZGl2IC5lZGdlLXRoaWNrbmVzcy1ub3JtYWx7c3Ryb2tlLXdpZHRoOjJweDt9I2dyYXBoLWRpdiAuZWRnZS10aGlja25lc3MtdGhpY2t7c3Ryb2tlLXdpZHRoOjMuNXB4O30jZ3JhcGgtZGl2IC5lZGdlLXBhdHRlcm4tc29saWR7c3Ryb2tlLWRhc2hhcnJheTowO30jZ3JhcGgtZGl2IC5lZGdlLXBhdHRlcm4tZGFzaGVke3N0cm9rZS1kYXNoYXJyYXk6Mzt9I2dyYXBoLWRpdiAuZWRnZS1wYXR0ZXJuLWRvdHRlZHtzdHJva2UtZGFzaGFycmF5OjI7fSNncmFwaC1kaXYgLm1hcmtlcntmaWxsOiMzMzMzMzM7c3Ryb2tlOiMzMzMzMzM7fSNncmFwaC1kaXYgLm1hcmtlci5jcm9zc3tzdHJva2U6IzMzMzMzMzt9I2dyYXBoLWRpdiBzdmd7Zm9udC1mYW1pbHk6InRyZWJ1Y2hldCBtcyIsdmVyZGFuYSxhcmlhbCxzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNnB4O30jZ3JhcGgtZGl2IC5lbnRpdHlCb3h7ZmlsbDojRUNFQ0ZGO3N0cm9rZTojOTM3MERCO30jZ3JhcGgtZGl2IC5hdHRyaWJ1dGVCb3hPZGR7ZmlsbDojZmZmZmZmO3N0cm9rZTojOTM3MERCO30jZ3JhcGgtZGl2IC5hdHRyaWJ1dGVCb3hFdmVue2ZpbGw6I2YyZjJmMjtzdHJva2U6IzkzNzBEQjt9I2dyYXBoLWRpdiAucmVsYXRpb25zaGlwTGFiZWxCb3h7ZmlsbDpoc2woODAsIDEwMCUsIDk2LjI3NDUwOTgwMzklKTtvcGFjaXR5OjAuNztiYWNrZ3JvdW5kLWNvbG9yOmhzbCg4MCwgMTAwJSwgOTYuMjc0NTA5ODAzOSUpO30jZ3JhcGgtZGl2IC5yZWxhdGlvbnNoaXBMYWJlbEJveCByZWN0e29wYWNpdHk6MC41O30jZ3JhcGgtZGl2IC5yZWxhdGlvbnNoaXBMaW5le3N0cm9rZTojMzMzMzMzO30jZ3JhcGgtZGl2IDpyb290ey0tbWVybWFpZC1mb250LWZhbWlseToidHJlYnVjaGV0IG1zIix2ZXJkYW5hLGFyaWFsLHNhbnMtc2VyaWY7fTwvc3R5bGU+PGc+PC9nPjxkZWZzPjxtYXJrZXIgb3JpZW50PSJhdXRvIiBtYXJrZXJIZWlnaHQ9IjE4IiBtYXJrZXJXaWR0aD0iMTgiIHJlZlk9IjkiIHJlZlg9IjAiIGlkPSJPTkxZX09ORV9TVEFSVCI+PHBhdGggZD0iTTksMCBMOSwxOCBNMTUsMCBMMTUsMTgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iZ3JheSI+PC9wYXRoPjwvbWFya2VyPjwvZGVmcz48ZGVmcz48bWFya2VyIG9yaWVudD0iYXV0byIgbWFya2VySGVpZ2h0PSIxOCIgbWFya2VyV2lkdGg9IjE4IiByZWZZPSI5IiByZWZYPSIxOCIgaWQ9Ik9OTFlfT05FX0VORCI+PHBhdGggZD0iTTMsMCBMMywxOCBNOSwwIEw5LDE4IiBmaWxsPSJub25lIiBzdHJva2U9ImdyYXkiPjwvcGF0aD48L21hcmtlcj48L2RlZnM+PGRlZnM+PG1hcmtlciBvcmllbnQ9ImF1dG8iIG1hcmtlckhlaWdodD0iMTgiIG1hcmtlcldpZHRoPSIzMCIgcmVmWT0iOSIgcmVmWD0iMCIgaWQ9IlpFUk9fT1JfT05FX1NUQVJUIj48Y2lyY2xlIHI9IjYiIGN5PSI5IiBjeD0iMjEiIGZpbGw9IndoaXRlIiBzdHJva2U9ImdyYXkiPjwvY2lyY2xlPjxwYXRoIGQ9Ik05LDAgTDksMTgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iZ3JheSI+PC9wYXRoPjwvbWFya2VyPjwvZGVmcz48ZGVmcz48bWFya2VyIG9yaWVudD0iYXV0byIgbWFya2VySGVpZ2h0PSIxOCIgbWFya2VyV2lkdGg9IjMwIiByZWZZPSI5IiByZWZYPSIzMCIgaWQ9IlpFUk9fT1JfT05FX0VORCI+PGNpcmNsZSByPSI2IiBjeT0iOSIgY3g9IjkiIGZpbGw9IndoaXRlIiBzdHJva2U9ImdyYXkiPjwvY2lyY2xlPjxwYXRoIGQ9Ik0yMSwwIEwyMSwxOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJncmF5Ij48L3BhdGg+PC9tYXJrZXI+PC9kZWZzPjxkZWZzPjxtYXJrZXIgb3JpZW50PSJhdXRvIiBtYXJrZXJIZWlnaHQ9IjM2IiBtYXJrZXJXaWR0aD0iNDUiIHJlZlk9IjE4IiByZWZYPSIxOCIgaWQ9Ik9ORV9PUl9NT1JFX1NUQVJUIj48cGF0aCBkPSJNMCwxOCBRIDE4LDAgMzYsMTggUSAxOCwzNiAwLDE4IE00Miw5IEw0MiwyNyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJncmF5Ij48L3BhdGg+PC9tYXJrZXI+PC9kZWZzPjxkZWZzPjxtYXJrZXIgb3JpZW50PSJhdXRvIiBtYXJrZXJIZWlnaHQ9IjM2IiBtYXJrZXJXaWR0aD0iNDUiIHJlZlk9IjE4IiByZWZYPSIyNyIgaWQ9Ik9ORV9PUl9NT1JFX0VORCI+PHBhdGggZD0iTTMsOSBMMywyNyBNOSwxOCBRMjcsMCA0NSwxOCBRMjcsMzYgOSwxOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJncmF5Ij48L3BhdGg+PC9tYXJrZXI+PC9kZWZzPjxkZWZzPjxtYXJrZXIgb3JpZW50PSJhdXRvIiBtYXJrZXJIZWlnaHQ9IjM2IiBtYXJrZXJXaWR0aD0iNTciIHJlZlk9IjE4IiByZWZYPSIxOCIgaWQ9IlpFUk9fT1JfTU9SRV9TVEFSVCI+PGNpcmNsZSByPSI2IiBjeT0iMTgiIGN4PSI0OCIgZmlsbD0id2hpdGUiIHN0cm9rZT0iZ3JheSI+PC9jaXJjbGU+PHBhdGggZD0iTTAsMTggUTE4LDAgMzYsMTggUTE4LDM2IDAsMTgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iZ3JheSI+PC9wYXRoPjwvbWFya2VyPjwvZGVmcz48ZGVmcz48bWFya2VyIG9yaWVudD0iYXV0byIgbWFya2VySGVpZ2h0PSIzNiIgbWFya2VyV2lkdGg9IjU3IiByZWZZPSIxOCIgcmVmWD0iMzkiIGlkPSJaRVJPX09SX01PUkVfRU5EIj48Y2lyY2xlIHI9IjYiIGN5PSIxOCIgY3g9IjkiIGZpbGw9IndoaXRlIiBzdHJva2U9ImdyYXkiPjwvY2lyY2xlPjxwYXRoIGQ9Ik0yMSwxOCBRMzksMCA1NywxOCBRMzksMzYgMjEsMTgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iZ3JheSI+PC9wYXRoPjwvbWFya2VyPjwvZGVmcz48cGF0aCBtYXJrZXItc3RhcnQ9InVybCgjWkVST19PUl9NT1JFX1NUQVJUKSIgbWFya2VyLWVuZD0idXJsKCNPTkxZX09ORV9FTkQpIiBmaWxsPSJub25lIiBzdHJva2U9ImdyYXkiIGQ9Ik03MCw4Nkw3MCw5NC4zMzMzMzMzMzMzMzMzM0M3MCwxMDIuNjY2NjY2NjY2NjY2NjcsNzAsMTE5LjMzMzMzMzMzMzMzMzMzLDcwLDEzNkM3MCwxNTIuNjY2NjY2NjY2NjY2NjYsNzAsMTY5LjMzMzMzMzMzMzMzMzM0LDcwLDE3Ny42NjY2NjY2NjY2NjY2Nkw3MCwxODYiIGNsYXNzPSJlciByZWxhdGlvbnNoaXBMaW5lIj48L3BhdGg+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsMTg2ICkiIGlkPSJCcmFuY2hlcyI+PHJlY3QgaGVpZ2h0PSI0NSIgd2lkdGg9IjEwMCIgeT0iMCIgeD0iMCIgc3Ryb2tlPSJncmF5IiBmaWxsLW9wYWNpdHk9IjEwMCUiIGZpbGw9ImhvbmV5ZGV3IiBjbGFzcz0iZXIgZW50aXR5Qm94Ij48L3JlY3Q+PHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAsMTIpIiBzdHlsZT0iZm9udC1mYW1pbHk6ICZxdW90O3RyZWJ1Y2hldCBtcyZxdW90OywgdmVyZGFuYSwgYXJpYWwsIHNhbnMtc2VyaWY7OyBmb250LXNpemU6IDEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHk9IjAiIHg9IjAiIGlkPSJlbnRpdHktQnJhbmNoZXMiIGNsYXNzPSJlciBlbnRpdHlMYWJlbCI+QnJhbmNoZXM8L3RleHQ+PHJlY3QgaGVpZ2h0PSIyMSIgd2lkdGg9IjMzLjY0NDcwNDE4Mjk0MjcxIiB5PSIyNCIgeD0iMCIgc3Ryb2tlPSJncmF5IiBmaWxsLW9wYWNpdHk9IjEwMCUiIGZpbGw9ImhvbmV5ZGV3IiBjbGFzcz0iZXIgYXR0cmlidXRlQm94T2RkIj48L3JlY3Q+PHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNSwzNC41KSIgc3R5bGU9ImZvbnQtZmFtaWx5OiAmcXVvdDt0cmVidWNoZXQgbXMmcXVvdDssIHZlcmRhbmEsIGFyaWFsLCBzYW5zLXNlcmlmOzsgZm9udC1zaXplOiAxMC4ycHgiIHRleHQtYW5jaG9yPSJsZWZ0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB5PSIwIiB4PSIwIiBpZD0iZW50aXR5LUJyYW5jaGVzLWF0dHItMS10eXBlIiBjbGFzcz0iZXIgZW50aXR5TGFiZWwiPkludDwvdGV4dD48cmVjdCBoZWlnaHQ9IjIxIiB3aWR0aD0iMzAuNDExODI0NTQ0MjcwODM2IiB5PSIyNCIgeD0iMzMuNjQ0NzA0MTgyOTQyNzEiIHN0cm9rZT0iZ3JheSIgZmlsbC1vcGFjaXR5PSIxMDAlIiBmaWxsPSJob25leWRldyIgY2xhc3M9ImVyIGF0dHJpYnV0ZUJveE9kZCI+PC9yZWN0Pjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDM4LjY0NDcwNDE4Mjk0MjcxLDM0LjUpIiBzdHlsZT0iZm9udC1mYW1pbHk6ICZxdW90O3RyZWJ1Y2hldCBtcyZxdW90OywgdmVyZGFuYSwgYXJpYWwsIHNhbnMtc2VyaWY7OyBmb250LXNpemU6IDEwLjJweCIgdGV4dC1hbmNob3I9ImxlZnQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHk9IjAiIHg9IjAiIGlkPSJlbnRpdHktQnJhbmNoZXMtYXR0ci0xLW5hbWUiIGNsYXNzPSJlciBlbnRpdHlMYWJlbCI+aWQ8L3RleHQ+PHJlY3QgaGVpZ2h0PSIyMSIgd2lkdGg9IjM1Ljk0MzQ3MTI3Mjc4NjQ2IiB5PSIyNCIgeD0iNjQuMDU2NTI4NzI3MjEzNTUiIHN0cm9rZT0iZ3JheSIgZmlsbC1vcGFjaXR5PSIxMDAlIiBmaWxsPSJob25leWRldyIgY2xhc3M9ImVyIGF0dHJpYnV0ZUJveE9kZCI+PC9yZWN0Pjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDY5LjA1NjUyODcyNzIxMzU1LDM0LjUpIiBzdHlsZT0iZm9udC1mYW1pbHk6ICZxdW90O3RyZWJ1Y2hldCBtcyZxdW90OywgdmVyZGFuYSwgYXJpYWwsIHNhbnMtc2VyaWY7OyBmb250LXNpemU6IDEwLjJweCIgdGV4dC1hbmNob3I9ImxlZnQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHk9IjAiIHg9IjAiIGlkPSJlbnRpdHktQnJhbmNoZXMtYXR0ci0xLWtleSIgY2xhc3M9ImVyIGVudGl0eUxhYmVsIj5QSzwvdGV4dD48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsMjAgKSIgaWQ9IkxlYXZlcyI+PHJlY3QgaGVpZ2h0PSI2NiIgd2lkdGg9IjEwMCIgeT0iMCIgeD0iMCIgc3Ryb2tlPSJncmF5IiBmaWxsLW9wYWNpdHk9IjEwMCUiIGZpbGw9ImhvbmV5ZGV3IiBjbGFzcz0iZXIgZW50aXR5Qm94Ij48L3JlY3Q+PHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAsMTIpIiBzdHlsZT0iZm9udC1mYW1pbHk6ICZxdW90O3RyZWJ1Y2hldCBtcyZxdW90OywgdmVyZGFuYSwgYXJpYWwsIHNhbnMtc2VyaWY7OyBmb250LXNpemU6IDEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHk9IjAiIHg9IjAiIGlkPSJlbnRpdHktTGVhdmVzIiBjbGFzcz0iZXIgZW50aXR5TGFiZWwiPkxlYXZlczwvdGV4dD48cmVjdCBoZWlnaHQ9IjIxIiB3aWR0aD0iMzguNDcwMTQzNjM2MDY3NzEiIHk9IjI0IiB4PSIwIiBzdHJva2U9ImdyYXkiIGZpbGwtb3BhY2l0eT0iMTAwJSIgZmlsbD0iaG9uZXlkZXciIGNsYXNzPSJlciBhdHRyaWJ1dGVCb3hPZGQiPjwvcmVjdD48dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LDM0LjUpIiBzdHlsZT0iZm9udC1mYW1pbHk6ICZxdW90O3RyZWJ1Y2hldCBtcyZxdW90OywgdmVyZGFuYSwgYXJpYWwsIHNhbnMtc2VyaWY7OyBmb250LXNpemU6IDEwLjJweCIgdGV4dC1hbmNob3I9ImxlZnQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHk9IjAiIHg9IjAiIGlkPSJlbnRpdHktTGVhdmVzLWF0dHItMS10eXBlIiBjbGFzcz0iZXIgZW50aXR5TGFiZWwiPkludDwvdGV4dD48cmVjdCBoZWlnaHQ9IjIxIiB3aWR0aD0iMzYuMjExNzgxODE5NjYxNDYiIHk9IjI0IiB4PSIzOC40NzAxNDM2MzYwNjc3MSIgc3Ryb2tlPSJncmF5IiBmaWxsLW9wYWNpdHk9IjEwMCUiIGZpbGw9ImhvbmV5ZGV3IiBjbGFzcz0iZXIgYXR0cmlidXRlQm94T2RkIj48L3JlY3Q+PHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDMuNDcwMTQzNjM2MDY3NzEsMzQuNSkiIHN0eWxlPSJmb250LWZhbWlseTogJnF1b3Q7dHJlYnVjaGV0IG1zJnF1b3Q7LCB2ZXJkYW5hLCBhcmlhbCwgc2Fucy1zZXJpZjs7IGZvbnQtc2l6ZTogMTAuMnB4IiB0ZXh0LWFuY2hvcj0ibGVmdCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgeT0iMCIgeD0iMCIgaWQ9ImVudGl0eS1MZWF2ZXMtYXR0ci0xLW5hbWUiIGNsYXNzPSJlciBlbnRpdHlMYWJlbCI+aWQ8L3RleHQ+PHJlY3QgaGVpZ2h0PSIyMSIgd2lkdGg9IjI1LjMxODA3NDU0NDI3MDgzMiIgeT0iMjQiIHg9Ijc0LjY4MTkyNTQ1NTcyOTE3IiBzdHJva2U9ImdyYXkiIGZpbGwtb3BhY2l0eT0iMTAwJSIgZmlsbD0iaG9uZXlkZXciIGNsYXNzPSJlciBhdHRyaWJ1dGVCb3hPZGQiPjwvcmVjdD48dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3OS42ODE5MjU0NTU3MjkxNywzNC41KSIgc3R5bGU9ImZvbnQtZmFtaWx5OiAmcXVvdDt0cmVidWNoZXQgbXMmcXVvdDssIHZlcmRhbmEsIGFyaWFsLCBzYW5zLXNlcmlmOzsgZm9udC1zaXplOiAxMC4ycHgiIHRleHQtYW5jaG9yPSJsZWZ0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB5PSIwIiB4PSIwIiBpZD0iZW50aXR5LUxlYXZlcy1hdHRyLTEta2V5IiBjbGFzcz0iZXIgZW50aXR5TGFiZWwiPlBLPC90ZXh0PjxyZWN0IGhlaWdodD0iMjEiIHdpZHRoPSIzOC40NzAxNDM2MzYwNjc3MSIgeT0iNDUiIHg9IjAiIHN0cm9rZT0iZ3JheSIgZmlsbC1vcGFjaXR5PSIxMDAlIiBmaWxsPSJob25leWRldyIgY2xhc3M9ImVyIGF0dHJpYnV0ZUJveEV2ZW4iPjwvcmVjdD48dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LDU1LjUpIiBzdHlsZT0iZm9udC1mYW1pbHk6ICZxdW90O3RyZWJ1Y2hldCBtcyZxdW90OywgdmVyZGFuYSwgYXJpYWwsIHNhbnMtc2VyaWY7OyBmb250LXNpemU6IDEwLjJweCIgdGV4dC1hbmNob3I9ImxlZnQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHk9IjAiIHg9IjAiIGlkPSJlbnRpdHktTGVhdmVzLWF0dHItMi10eXBlIiBjbGFzcz0iZXIgZW50aXR5TGFiZWwiPlN0cmluZzwvdGV4dD48cmVjdCBoZWlnaHQ9IjIxIiB3aWR0aD0iMzYuMjExNzgxODE5NjYxNDYiIHk9IjQ1IiB4PSIzOC40NzAxNDM2MzYwNjc3MSIgc3Ryb2tlPSJncmF5IiBmaWxsLW9wYWNpdHk9IjEwMCUiIGZpbGw9ImhvbmV5ZGV3IiBjbGFzcz0iZXIgYXR0cmlidXRlQm94RXZlbiI+PC9yZWN0Pjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDQzLjQ3MDE0MzYzNjA2NzcxLDU1LjUpIiBzdHlsZT0iZm9udC1mYW1pbHk6ICZxdW90O3RyZWJ1Y2hldCBtcyZxdW90OywgdmVyZGFuYSwgYXJpYWwsIHNhbnMtc2VyaWY7OyBmb250LXNpemU6IDEwLjJweCIgdGV4dC1hbmNob3I9ImxlZnQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHk9IjAiIHg9IjAiIGlkPSJlbnRpdHktTGVhdmVzLWF0dHItMi1uYW1lIiBjbGFzcz0iZXIgZW50aXR5TGFiZWwiPnZhbHVlPC90ZXh0PjxyZWN0IGhlaWdodD0iMjEiIHdpZHRoPSIyNS4zMTgwNzQ1NDQyNzA4MzIiIHk9IjQ1IiB4PSI3NC42ODE5MjU0NTU3MjkxNyIgc3Ryb2tlPSJncmF5IiBmaWxsLW9wYWNpdHk9IjEwMCUiIGZpbGw9ImhvbmV5ZGV3IiBjbGFzcz0iZXIgYXR0cmlidXRlQm94RXZlbiI+PC9yZWN0Pjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDc5LjY4MTkyNTQ1NTcyOTE3LDU1LjUpIiBzdHlsZT0iZm9udC1mYW1pbHk6ICZxdW90O3RyZWJ1Y2hldCBtcyZxdW90OywgdmVyZGFuYSwgYXJpYWwsIHNhbnMtc2VyaWY7OyBmb250LXNpemU6IDEwLjJweCIgdGV4dC1hbmNob3I9ImxlZnQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHk9IjAiIHg9IjAiIGlkPSJlbnRpdHktTGVhdmVzLWF0dHItMi1rZXkiIGNsYXNzPSJlciBlbnRpdHlMYWJlbCI+PC90ZXh0PjwvZz48cmVjdCBmaWxsLW9wYWNpdHk9Ijg1JSIgZmlsbD0id2hpdGUiIGhlaWdodD0iMTQiIHdpZHRoPSIzNi43MDMxMjUiIHk9IjEyOSIgeD0iNTEuNjQ4NDM3NSIgY2xhc3M9ImVyIHJlbGF0aW9uc2hpcExhYmVsQm94Ij48L3JlY3Q+PHRleHQgc3R5bGU9ImZvbnQtZmFtaWx5OiAmcXVvdDt0cmVidWNoZXQgbXMmcXVvdDssIHZlcmRhbmEsIGFyaWFsLCBzYW5zLXNlcmlmOzsgZm9udC1zaXplOiAxMnB4IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB5PSIxMzYiIHg9IjcwIiBpZD0icmVsMTIiIGNsYXNzPSJlciByZWxhdGlvbnNoaXBMYWJlbCI+YnJhbmNoPC90ZXh0Pjwvc3ZnPg=="}}]);