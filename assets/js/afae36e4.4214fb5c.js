"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[895],{5830:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>u,toc:()=>o});var n=a(7462),l=(a(7294),a(3905));const r={slug:"2022-07-18duplicated-value-in-set",title:"\u3010JavaScript\u3011\u30d7\u30ea\u30df\u30c6\u30a3\u30d6\u3067\u306a\u3044\u5024\u3092\u6301\u3064Set\u306b\u3066\u91cd\u8907\u304c\u767a\u751f\u3059\u308b",authors:"ogumaru",tags:["javascript","python"]},p=void 0,u={permalink:"/notes/2022-07-18duplicated-value-in-set",source:"@site/blog/2022-07-18duplicated-value-in-set.md",title:"\u3010JavaScript\u3011\u30d7\u30ea\u30df\u30c6\u30a3\u30d6\u3067\u306a\u3044\u5024\u3092\u6301\u3064Set\u306b\u3066\u91cd\u8907\u304c\u767a\u751f\u3059\u308b",description:"\u6982\u8981",date:"2022-07-18T00:00:00.000Z",formattedDate:"July 18, 2022",tags:[{label:"javascript",permalink:"/notes/tags/javascript"},{label:"python",permalink:"/notes/tags/python"}],readingTime:4.295,hasTruncateMarker:!1,authors:[{name:"ogumaru",title:"ogumaru note owner",url:"https://github.com/ogumaru",imageURL:"https://github.com/ogumaru.png",key:"ogumaru"}],frontMatter:{slug:"2022-07-18duplicated-value-in-set",title:"\u3010JavaScript\u3011\u30d7\u30ea\u30df\u30c6\u30a3\u30d6\u3067\u306a\u3044\u5024\u3092\u6301\u3064Set\u306b\u3066\u91cd\u8907\u304c\u767a\u751f\u3059\u308b",authors:"ogumaru",tags:["javascript","python"]}},i={authorsImageUrls:[void 0]},o=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2},{value:"\u5b9f\u884c\u74b0\u5883",id:"\u5b9f\u884c\u74b0\u5883",level:2},{value:"JavaScript \u306e\u6319\u52d5\u3068 Python \u3068\u306e\u6bd4\u8f03",id:"javascript-\u306e\u6319\u52d5\u3068-python-\u3068\u306e\u6bd4\u8f03",level:2},{value:"\u4ed5\u69d8\u306e\u78ba\u8a8d",id:"\u4ed5\u69d8\u306e\u78ba\u8a8d",level:2},{value:"same Object value \u3068\u306f",id:"same-object-value-\u3068\u306f",level:2}],s={toc:o};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,l.kt)("p",null,"TypeScript \u306b\u3066\u3001\u30bf\u30d7\u30eb\u98a8(",(0,l.kt)("inlineCode",{parentName:"p"},"[T, T]"),")\u306e\u914d\u5217\u306e\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u304c\u3042\u308a\u3001\u3053\u308c\u306e\u4e2d\u8eab\u3092\u30e6\u30cb\u30fc\u30af\u306b\u3057\u305f\u3044\u5834\u9762\u304c\u3042\u3063\u305f\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Set"),"\u3092\u7d4c\u7531\u3059\u308c\u3070\u91cd\u8907\u6392\u9664\u3067\u304d\u308b\u3068\u601d\u3063\u305f\u304c\u3001\u898b\u305f\u76ee\u4e0a\u540c\u3058\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u91cd\u8907\u306f\u6392\u9664\u3055\u308c\u306a\u304b\u3063\u305f\u3002"),(0,l.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,l.kt)("p",null,"JavaScript \u306b\u304a\u3051\u308b\u914d\u5217\u306e\u540c\u5024\u6bd4\u8f03\u304c",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"\u306b\u306a\u308b\u305f\u3081\u3002"),(0,l.kt)("p",null,"\u53b3\u5bc6\u306b\u30e6\u30cb\u30fc\u30af\u306a\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u5834\u5408\u306f\u3001deepEqual \u76f8\u5f53\u306e\u78ba\u8a8d\u304c\u5fc5\u8981\u305d\u3046\u3002"),(0,l.kt)("h2",{id:"\u5b9f\u884c\u74b0\u5883"},"\u5b9f\u884c\u74b0\u5883"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b9f\u884c\u74b0\u5883"),(0,l.kt)("th",{parentName:"tr",align:null},"\u30d0\u30fc\u30b8\u30e7\u30f3"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node"),(0,l.kt)("td",{parentName:"tr",align:null},"v16.15.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"python3"),(0,l.kt)("td",{parentName:"tr",align:null},"Python 3.10.4")))),(0,l.kt)("h2",{id:"javascript-\u306e\u6319\u52d5\u3068-python-\u3068\u306e\u6bd4\u8f03"},"JavaScript \u306e\u6319\u52d5\u3068 Python \u3068\u306e\u6bd4\u8f03"),(0,l.kt)("p",null,"\u30bf\u30d7\u30eb\u98a8\u306e\u914d\u5217\u30ea\u30c6\u30e9\u30eb\u3092",(0,l.kt)("inlineCode",{parentName:"p"},"add"),"\u3059\u308b\u3068\u3001\u91cd\u8907\u3057\u305f\u5024\u304c\u305d\u308c\u305e\u308c\u304c\u8ffd\u52a0\u3055\u308c\u3066\u3057\u307e\u3046\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const unique = new Set();\nunique.add([\"hoge\", \"huga\"]);\n// Set(1) { [ 'hoge', 'huga' ] }\nunique.add([\"hoge\", \"huga\"]);\n// Set(2) { [ 'hoge', 'huga' ], [ 'hoge', 'huga' ] }\n")),(0,l.kt)("p",null,"Python \u3067\u306f\u3067\u304d\u305f\u6c17\u304c\u3057\u305f\u306e\u3067\u78ba\u8a8d\u3059\u308b\u3002"),(0,l.kt)("p",null,"(\u306a\u304a",(0,l.kt)("inlineCode",{parentName:"p"},'["hoge", "huga"]'),"\u306f",(0,l.kt)("inlineCode",{parentName:"p"},"Hashable"),"\u3067\u306a\u3044\u305f\u3081",(0,l.kt)("inlineCode",{parentName:"p"},"set"),"\u306b\u306f\u8ffd\u52a0\u3067\u304d\u306a\u3044)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"unique = set()\nunique.add((\"hoge\", \"huga\"))\n# {('hoge', 'huga')}\nunique.add((\"hoge\", \"huga\"))\n# {('hoge', 'huga')}\n")),(0,l.kt)("p",null,"\u30ea\u30c6\u30e9\u30eb\u306e\u30bf\u30d7\u30eb\u306b\u5bfe\u3057\u3066\u91cd\u8907\u6392\u9664\u304c\u3067\u304d\u3066\u3044\u308b\u3002"),(0,l.kt)("p",null,"JavaScript \u3067\u3082\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u540c\u4e00\u306b\u306a\u308b\u305f\u3081\u3001\u4e0b\u8a18\u3067\u306f\u610f\u56f3\u3057\u305f\u901a\u308a\u306b\u91cd\u8907\u304c\u6392\u9664\u3055\u308c\u308b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const unique = new Set();\nconst tuple = [\"hoge\", \"huga\"];\nunique.add(tuple);\n// Set(1) { [ 'hoge', 'huga' ] }\nunique.add(tuple);\n// Set(1) { [ 'hoge', 'huga' ] }\n")),(0,l.kt)("p",null,"JavaScript \u3067\u306f Python \u306b\u304a\u3051\u308b\u30bf\u30d7\u30eb\u76f8\u5f53\u306e\u30c7\u30fc\u30bf\u578b\u304c\u306a\u3044\u305f\u3081\u3001\u4e0a\u8a18\u30b3\u30fc\u30c9\u3067\u306f\u5b9f\u969b\u306b\u306f\u30df\u30e5\u30fc\u30bf\u30d6\u30eb\u306a\u914d\u5217\u3068\u306a\u308b\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Object.freeze()"),"\u3067\u30a4\u30df\u30e5\u30fc\u30bf\u30d6\u30eb\u306b\u3057\u3066\u307f\u305f\u304c\u3001\u7d50\u679c\u306f\u5909\u308f\u3089\u306a\u304b\u3063\u305f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const unique = new Set();\nunique.add(Object.freeze([\"hoge\", \"huga\"]));\n// Set(1) { [ 'hoge', 'huga' ] }\nunique.add(Object.freeze([\"hoge\", \"huga\"]));\n// Set(2) { [ 'hoge', 'huga' ], [ 'hoge', 'huga' ] }\n")),(0,l.kt)("h2",{id:"\u4ed5\u69d8\u306e\u78ba\u8a8d"},"\u4ed5\u69d8\u306e\u78ba\u8a8d"),(0,l.kt)("p",null,"MDN \u306e",(0,l.kt)("inlineCode",{parentName:"p"},"Set"),"\u306e\u30da\u30fc\u30b8\u3092\u898b\u308b\u3068\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"-0"),"\u3068",(0,l.kt)("inlineCode",{parentName:"p"},"+0"),"\u306b\u3064\u3044\u3066\u89e6\u308c\u3089\u308c\u3066\u3044\u308b\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},'See "Key equality for -0 and 0" in the browser compatibility table for details.')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#value_equality"},"Set - JavaScript | MDN (developer.mozilla.org)")),(0,l.kt)("p",null,"\u7b49\u4fa1\u6bd4\u8f03\u306e\u30da\u30fc\u30b8\u3092\u898b\u308b\u3068\u3001"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"SameValueZero: used by %TypedArray% and ArrayBuffer constructors, as well as Map and Set operations, and also String.prototype.includes and Array.prototype.includes since ES2016")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness"},"Equality comparisons and sameness - JavaScript | MDN (developer.mozilla.org)")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SameValueZero"),"\u306e TC39 \u3078\u30ea\u30f3\u30af\u3055\u308c\u3066\u3044\u305f\u306e\u3067\u3053\u3061\u3089\u3082\u78ba\u8a8d\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"SameValueZero differs from SameValue only in that it treats +0\ud835\udd3d and -0\ud835\udd3d as equivalent.")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#sec-samevaluezero"},"SameValueZero | ECMAScript\xae 2023 Language\xa0Specification (tc39.es)")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SameValue"),"\u3068",(0,l.kt)("inlineCode",{parentName:"p"},"+0"),"\u3068",(0,l.kt)("inlineCode",{parentName:"p"},"-0"),"\u306e\u6bd4\u8f03\u7d50\u679c\u306e\u307f\u7570\u306a\u308b\u3068\u3042\u308b\u305f\u3081\u3001",(0,l.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#sec-samevalue"},(0,l.kt)("inlineCode",{parentName:"a"},"SameValue")),"\u3092\u78ba\u8a8d\u3059\u308b\u3068\u3001"),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If Type(x) is different from Type(y), return false.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If Type(x) is Number, then"),(0,l.kt)("p",{parentName:"li"},"a. Return Number::sameValue(x, y).")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If Type(x) is BigInt, then"),(0,l.kt)("p",{parentName:"li"},"a. Return BigInt::sameValue(x, y).")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Return SameValueNonNumeric(x, y).")))),(0,l.kt)("p",null,"\u3068\u306e\u3053\u3068\u306a\u306e\u3067",(0,l.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#sec-samevaluenonnumeric"},(0,l.kt)("inlineCode",{parentName:"a"},"SameValueNonNumeric")),"\u3092\u78ba\u8a8d\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Assert: Type(x) is the same as Type(y).")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If Type(x) is Undefined, return true.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If Type(x) is Null, return true.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If Type(x) is String, then"),(0,l.kt)("p",{parentName:"li"},"a. If x and y are exactly the same sequence of code units (same length and same code units at corresponding indices), return true; otherwise, return false.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If Type(x) is Boolean, then"),(0,l.kt)("p",{parentName:"li"},"a. If x and y are both true or both false, return true; otherwise, return false.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If Type(x) is Symbol, then"),(0,l.kt)("p",{parentName:"li"},"a. If x and y are both the same Symbol value, return true; otherwise, return false.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If x and y are the same Object value, return true. Otherwise, return false.")))),(0,l.kt)("p",null,"\u30bf\u30d7\u30eb\u306e\u5834\u5408",(0,l.kt)("inlineCode",{parentName:"p"},"7"),"\u306b\u3066\u8a55\u4fa1\u3055\u308c\u308b\u3068\u601d\u308f\u308c\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"same Object value"),"\u3067\u306f\u306a\u3044\u3068\u3044\u3046\u3053\u3068\u306b\u306a\u308b\u3088\u3046\u3060\u3002"),(0,l.kt)("h2",{id:"same-object-value-\u3068\u306f"},"same Object value \u3068\u306f"),(0,l.kt)("p",null,"TC39\u306b\u306f\u3053\u308c\u4ee5\u4e0a\u306e\u30ea\u30f3\u30af\u304c\u306a\u304b\u3063\u305f\u304c\u3001deepEqual\u76f8\u5f53\u306e\u6bd4\u8f03\u3092\u884c\u3046\u3053\u3068\u3067\u91cd\u8907\u306e\u78ba\u8a8d\u306f\u3067\u304d\u305d\u3046\u3002"),(0,l.kt)("p",null,"\u4fee\u6b63 PR \u3044\u305f\u3060\u3051\u308b\u3068\u3042\u308a\u304c\u305f\u3044\u3067\u3059\u3002"))}m.isMDXComponent=!0}}]);