"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[4501],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,k=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(k,p(p({ref:t},s),{},{components:n})):r.createElement(k,p({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var c=2;c<i;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={title:"\u3010JavaScript\u3011ArcGIS\u3067\u52d5\u7684\u306bMapView\u3092\u914d\u7f6e\u3059\u308b",authors:"ogumaru",tags:["typescript","javascript","arcgis","react"]},p=void 0,l={permalink:"/2022/10/20/arcgis-set-dynamically",source:"@site/blog/2022-10-20-arcgis-set-dynamically.md",title:"\u3010JavaScript\u3011ArcGIS\u3067\u52d5\u7684\u306bMapView\u3092\u914d\u7f6e\u3059\u308b",description:"\u6982\u8981",date:"2022-10-20T00:00:00.000Z",formattedDate:"2022\u5e7410\u670820\u65e5",tags:[{label:"typescript",permalink:"/tags/typescript"},{label:"javascript",permalink:"/tags/javascript"},{label:"arcgis",permalink:"/tags/arcgis"},{label:"react",permalink:"/tags/react"}],readingTime:3.1,hasTruncateMarker:!1,authors:[{name:"ogumaru",title:"ogumaru note owner",url:"https://github.com/ogumaru",imageURL:"https://github.com/ogumaru.png",key:"ogumaru"}],frontMatter:{title:"\u3010JavaScript\u3011ArcGIS\u3067\u52d5\u7684\u306bMapView\u3092\u914d\u7f6e\u3059\u308b",authors:"ogumaru",tags:["typescript","javascript","arcgis","react"]},prevItem:{title:"\u3010React\u3011CalciteSwitch\u3067\u898b\u305f\u76ee\u304c\u5909\u308f\u3089\u306a\u3044",permalink:"/2022/11/27/calcite-switch-state"},nextItem:{title:"\u3010JavaScript\u3011Wayland + Chromium\u74b0\u5883\u3067\u30d5\u30a1\u30a4\u30eb\u306e\u30d5\u30a1\u30a4\u30eb\u30c9\u30ed\u30c3\u30d7\u304c\u305f\u307e\u306b\u5931\u6557\u3059\u308b",permalink:"/2022/10/16/dnd-behavior-on-wayland"}},o={authorsImageUrls:[void 0]},c=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2},{value:"\u74b0\u5883",id:"\u74b0\u5883",level:2},{value:"\u52d5\u7684\u306a\u914d\u7f6e",id:"\u52d5\u7684\u306a\u914d\u7f6e",level:2},{value:"<code>container</code>\u30d7\u30ed\u30d1\u30c6\u30a3",id:"container\u30d7\u30ed\u30d1\u30c6\u30a3",level:2}],s={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developers.arcgis.com/javascript/latest/"},"ArcGIS API for JavaScript")," (",(0,a.kt)("inlineCode",{parentName:"p"},"@arcgis/core"),")\u3067 ",(0,a.kt)("inlineCode",{parentName:"p"},"MapView")," \u3092\u5229\u7528\u3059\u308b\u969b\u3001\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u6642\u306b ",(0,a.kt)("inlineCode",{parentName:"p"},"container")," \u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u30bb\u30ec\u30af\u30bf\u306e\u6587\u5b57\u5217\u304b",(0,a.kt)("inlineCode",{parentName:"p"},"HTMLElement"),"\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3067\u3001\u305d\u3053\u306b\u5730\u56f3\u3092\u8868\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002"),(0,a.kt)("p",null,"React \u3092\u5229\u7528\u3059\u308b\u90fd\u5408\u4e0a\u3001\u9759\u7684\u306a HTML \u3067\u306f\u306a\u304f\u3001\u8868\u793a\u5bfe\u8c61\u3068\u306a\u308b\u8981\u7d20(React \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8)\u304c\u63cf\u753b\u3055\u308c\u305f\u3042\u3068\u3001\u305d\u3053\u306b\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u3057\u305f\u3044\u3002"),(0,a.kt)("p",null,"\u5b9f\u88c5\u306f ES Modules \u304a\u3088\u3073 TypeScript \u3092\u5229\u7528\u3057\u3066\u884c\u3063\u305f\u3002"),(0,a.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useEffect"),"\u5185\u3067",(0,a.kt)("inlineCode",{parentName:"p"},"__esri.Accessor.set()"),"\u304b\u3089",(0,a.kt)("inlineCode",{parentName:"p"},"container"),"\u3092\u6307\u5b9a\u3059\u308b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useEffect } from "react";\nimport MapView from "@arcgis/core/views/MapView";\n\n// \u3053\u3053\u3067\u306f container \u306f\u6307\u5b9a\u3057\u306a\u3044\u3002\n// \u30ec\u30a4\u30e4\u306e\u64cd\u4f5c\u3092\u3059\u308b\u90fd\u5408\u4e0a\u3001\n// export \u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u305f\u3081setup\u5185\u3067\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3067\u304d\u306a\u3044\u3002\nexport const mapView = new MapView({\n  /** \u7565 **/\n});\n\nconst setup = () => {\n  // \u52d5\u7684\u306b container \u3092\u6307\u5b9a\n  mapView.set("container", "viewDiv");\n};\n\nexport const App = () => {\n  useEffect(setup, []);\n  return (\n    <>\n      <div id="viewDiv"></div>\n    </>\n  );\n};\n')),(0,a.kt)("h2",{id:"\u74b0\u5883"},"\u74b0\u5883"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u9805\u76ee"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"React"),(0,a.kt)("td",{parentName:"tr",align:null},"18.2.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ArcGIS API for JavaScript"),(0,a.kt)("td",{parentName:"tr",align:null},"4.24.7")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TypeScript"),(0,a.kt)("td",{parentName:"tr",align:null},"4.8.4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"webpack"),(0,a.kt)("td",{parentName:"tr",align:null},"5.74.0")))),(0,a.kt)("h2",{id:"\u52d5\u7684\u306a\u914d\u7f6e"},"\u52d5\u7684\u306a\u914d\u7f6e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MapView"),"\u304c\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3055\u308c\u305f\u3068\u304d\u306b",(0,a.kt)("inlineCode",{parentName:"p"},"container"),"\u306b\u6307\u5b9a\u3057\u305f\u969b\u3001\u3053\u306e\u6642\u70b9\u3067\u8a72\u5f53\u306e HTML \u8981\u7d20\u304c\u306a\u3044\u5834\u5408\u306f\u5730\u56f3\u304c\u8868\u793a\u3055\u308c\u306a\u3044\u3002"),(0,a.kt)("p",null,"React \u3092\u5229\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u30de\u30a6\u30f3\u30c8\u3055\u308c\u305f\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u63cf\u753b\u3055\u308c\u308b\u3088\u3046\u306b\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect"),"\u5185\u3067",(0,a.kt)("inlineCode",{parentName:"p"},"MapView"),"\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308c\u3070\u554f\u984c\u306a\u304f\u8868\u793a\u304c\u3067\u304d\u308b\u3002"),(0,a.kt)("h2",{id:"container\u30d7\u30ed\u30d1\u30c6\u30a3"},(0,a.kt)("inlineCode",{parentName:"h2"},"container"),"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,a.kt)("p",null,"\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u306a\u3069\u3067\u306f\u4e0b\u8a18\u306e\u3088\u3046\u306b\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u3067",(0,a.kt)("inlineCode",{parentName:"p"},"container"),"\u306b HTML \u8981\u7d20\u306e",(0,a.kt)("inlineCode",{parentName:"p"},"id"),"\u6587\u5b57\u5217\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u304c\u591a\u3044\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const mapView = new MapView({\n  // (\u7565)\n  container: "viewDiv",\n});\n')),(0,a.kt)("p",null,"\u3053\u306e\u3068\u304d\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"container"),"\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u578b\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"string | HTMLDivElement"),"\u3068\u306a\u3063\u3066\u3044\u308b\u305f\u3081\u3001TypeScript \u306e\u578b\u30a8\u30e9\u30fc\u306f\u51fa\u306a\u3044\u3002"),(0,a.kt)("p",null,"(\u30d2\u30f3\u30c8\u306b\u306f",(0,a.kt)("inlineCode",{parentName:"p"},"__esri.DOMContainerProperties.container?: string | HTMLDivElement"),"\u3068\u3067\u308b\u304c\u3001\u8a72\u5f53\u306e\u578b\u306f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u306f\u898b\u3064\u304b\u3089\u306a\u304b\u3063\u305f)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#container"},"MapView | API Reference | ArcGIS API for JavaScript 4.24 | ArcGIS Developers - (developers.arcgis.com)")),(0,a.kt)("p",null,"\u4e00\u65b9\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"MapView"),"\u304c\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3055\u308c\u305f\u5834\u5408\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"container"),"\u30d7\u30ed\u30d1\u30c6\u30a3\u306f",(0,a.kt)("inlineCode",{parentName:"p"},"DOMContainer.container"),"\u3092\u6307\u3057\u3066\u3057\u307e\u3044\u3001\u6307\u5b9a\u3067\u304d\u308b\u306e\u306f",(0,a.kt)("inlineCode",{parentName:"p"},"HTMLDivElement"),"\u306e\u307f\u3068\u306a\u308b\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developers.arcgis.com/javascript/latest/api-reference/esri-views-DOMContainer.html#container"},"DOMContainer | API Reference | ArcGIS API for JavaScript 4.24 | ArcGIS Developers - (developers.arcgis.com)")),(0,a.kt)("p",null,"\u305d\u306e\u305f\u3081\u4e0b\u8a18\u30b3\u30fc\u30c9\u3067\u306f\u578b\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u3066\u3057\u307e\u3046\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const mapView = new MapView(...);\nmapView.container = "viewDiv"\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Type 'string' is not assignable to type 'HTMLDivElement'.ts(2322)")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MapView"),"\u3067\u306f\u306a\u304f\u3001\u3053\u308c\u304c\u7d99\u627f\u3057\u3066\u3044\u308b",(0,a.kt)("inlineCode",{parentName:"p"},"__esri.Accessor"),"\u304c",(0,a.kt)("inlineCode",{parentName:"p"},"set"),"\u30e1\u30bd\u30c3\u30c9\u3092\u6301\u3063\u3066\u304a\u308a\u3001\u3053\u308c\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u3067\u52d5\u7684\u306b",(0,a.kt)("inlineCode",{parentName:"p"},"container"),"\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u305f\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Accessor.html#set"},"Accessor | API Reference | ArcGIS API for JavaScript 4.24 | ArcGIS Developers - (developers.arcgis.com)")))}m.isMDXComponent=!0}}]);