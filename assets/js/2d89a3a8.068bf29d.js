"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[6887],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=p(n),c=r,k=s["".concat(u,".").concat(c)]||s[c]||d[c]||l;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3034:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={title:"\u3010JavaScript\u3011Wayland + Chromium\u74b0\u5883\u3067\u30d5\u30a1\u30a4\u30eb\u306e\u30d5\u30a1\u30a4\u30eb\u30c9\u30ed\u30c3\u30d7\u304c\u305f\u307e\u306b\u5931\u6557\u3059\u308b",authors:"ogumaru",tags:["javascript","linux"]},i=void 0,o={permalink:"/2022/10/16/dnd-behavior-on-wayland",source:"@site/blog/2022-10-16-dnd-behavior-on-wayland.md",title:"\u3010JavaScript\u3011Wayland + Chromium\u74b0\u5883\u3067\u30d5\u30a1\u30a4\u30eb\u306e\u30d5\u30a1\u30a4\u30eb\u30c9\u30ed\u30c3\u30d7\u304c\u305f\u307e\u306b\u5931\u6557\u3059\u308b",description:"\u6982\u8981",date:"2022-10-16T00:00:00.000Z",formattedDate:"2022\u5e7410\u670816\u65e5",tags:[{label:"javascript",permalink:"/tags/javascript"},{label:"linux",permalink:"/tags/linux"}],readingTime:3.155,hasTruncateMarker:!1,authors:[{name:"ogumaru",title:"ogumaru note owner",url:"https://github.com/ogumaru",imageURL:"https://github.com/ogumaru.png",key:"ogumaru"}],frontMatter:{title:"\u3010JavaScript\u3011Wayland + Chromium\u74b0\u5883\u3067\u30d5\u30a1\u30a4\u30eb\u306e\u30d5\u30a1\u30a4\u30eb\u30c9\u30ed\u30c3\u30d7\u304c\u305f\u307e\u306b\u5931\u6557\u3059\u308b",authors:"ogumaru",tags:["javascript","linux"]},prevItem:{title:"\u3010JavaScript\u3011ArcGIS\u3067\u52d5\u7684\u306bMapView\u3092\u914d\u7f6e\u3059\u308b",permalink:"/2022/10/20/arcgis-set-dynamically"},nextItem:{title:"\u3010Linux\u3011Ubuntu Pro beta\u3092\u5229\u7528\u3057\u3066\u307f\u308b",permalink:"/2022/10/06/get-started-ubuntu-pro"}},u={authorsImageUrls:[void 0]},p=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u539f\u56e0",id:"\u539f\u56e0",level:2},{value:"\u6319\u52d5\u306e\u78ba\u8a8d",id:"\u6319\u52d5\u306e\u78ba\u8a8d",level:2},{value:"\u74b0\u5883",id:"\u74b0\u5883",level:3},{value:"\u6319\u52d5\u306e\u8a73\u7d30\u3068\u78ba\u8a8d",id:"\u6319\u52d5\u306e\u8a73\u7d30\u3068\u78ba\u8a8d",level:3},{value:"\u5bfe\u7b56",id:"\u5bfe\u7b56",level:2}],m={toc:p};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,r.kt)("p",null,"\u30a6\u30a7\u30d6\u30d6\u30e9\u30a6\u30b6\u306e File API \u3092\u5229\u7528\u3057\u3066\u3001\u30d5\u30a1\u30a4\u30eb\u306e\u30c9\u30e9\u30c3\u30b0 & \u30c9\u30ed\u30c3\u30d7\u3092\u5229\u7528\u3057\u305f\u6a5f\u80fd\u3092\u5b9f\u88c5\u3057\u3066\u3044\u308b\u969b\u3001\u30d5\u30a1\u30a4\u30eb\u306e\u691c\u8a3c\u3092\u884c\u3063\u3066\u3044\u308b\u306b\u3082\u304b\u304b\u308f\u3089\u305a\u3001\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u3002"),(0,r.kt)("p",null,"\u5fc5\u305a\u5931\u6557\u3059\u308b\u308f\u3051\u3067\u306f\u306a\u304f\u3001\u305f\u307e\u306b\u6210\u529f\u3059\u308b\u305f\u3081\u3001\u52d5\u4f5c\u306e\u78ba\u8a8d\u3092\u884c\u3063\u305f\u3002"),(0,r.kt)("h2",{id:"\u539f\u56e0"},"\u539f\u56e0"),(0,r.kt)("p",null,"\u30d5\u30a1\u30a4\u30eb\u30c9\u30ed\u30c3\u30d7\u6642\u306b\u305d\u306e\u4e2d\u8eab\u304c\u5909\u308f\u308b\u306e\u306f\u3001Wayland \u74b0\u5883\u306b\u304a\u3051\u308b\u73fe\u72b6\u306e\u6319\u52d5\u3089\u3057\u304b\u3063\u305f\u3002"),(0,r.kt)("p",null,"\u53c2\u7167:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://askubuntu.com/questions/1411629/cannot-drag-and-drop-from-nautilus-to-chrome-or-slack"},"Cannot drag and drop from nautilus to Chrome or Slack - Ask Ubuntu (askubuntu.com)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bugs.launchpad.net/ubuntu/+source/nautilus/+bug/1970921"},"Bug #1970921 \u201cDrag and drop does not work\u201d : Bugs : nautilus package : Ubuntu (bugs.launchpad.net)"))),(0,r.kt)("h2",{id:"\u6319\u52d5\u306e\u78ba\u8a8d"},"\u6319\u52d5\u306e\u78ba\u8a8d"),(0,r.kt)("h3",{id:"\u74b0\u5883"},"\u74b0\u5883"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u74b0\u5883"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30d0\u30fc\u30b8\u30e7\u30f3"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OS"),(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 22.04.1 LTS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Chromiun"),(0,r.kt)("td",{parentName:"tr",align:null},"Chromium 106.0.5249.119 snap")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Firefox"),(0,r.kt)("td",{parentName:"tr",align:null},"Mozilla Firefox 105.0.3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Files"),(0,r.kt)("td",{parentName:"tr",align:null},"GNOME nautilus 42.2")))),(0,r.kt)("h3",{id:"\u6319\u52d5\u306e\u8a73\u7d30\u3068\u78ba\u8a8d"},"\u6319\u52d5\u306e\u8a73\u7d30\u3068\u78ba\u8a8d"),(0,r.kt)("p",null,"\u30c7\u30d0\u30c3\u30ac\u3092\u5229\u7528\u3057\u3066\u78ba\u8a8d\u3092\u884c\u3063\u305f\u3002"),(0,r.kt)("p",null,"\u4e0b\u8a18\u306e\u3088\u3046\u306a\u30b3\u30fc\u30c9\u306b\u304a\u3044\u3066\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"csv.getAsFile()"),"\u304c",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"\u306b\u306a\u308b\u305f\u3081\u306b\u4f8b\u5916\u304c\u767a\u751f\u3057\u3066\u3044\u305f\u3002"),(0,r.kt)("p",null,"\u4f53\u611f\u3068\u3057\u3066\u5931\u6557\u3059\u308b\u5272\u5408\u306e\u307b\u3046\u304c\u591a\u3044\u3088\u3046\u306b\u611f\u3058\u308b\u3002"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u518d\u73fe\u30b3\u30fc\u30c9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// CSV\u5f62\u5f0f\u304b\u3069\u3046\u304b\u306e\u78ba\u8a8d\nconst isCSVItem = (item) => {\n  const type = item.type;\n  const isCSV = [\n    type === "text/plain",\n    type === "text/csv",\n    type === "application/vnd.ms-excel",\n    type === "application/octet-stream",\n  ].some((result) => result === true);\n  return isCSV;\n};\n\ndocument.body.addEventListener("dragover", (event) => {\n  event.stopPropagation();\n  event.preventDefault();\n  if (!event.dataTransfer) return;\n  event.dataTransfer.dropEffect = "copy";\n});\n\ndocument.body.addEventListener("drop", (event) => {\n  event.stopPropagation();\n  event.preventDefault();\n  if (!event.dataTransfer) return;\n\n  // item \u306e\u78ba\u8a8d\n  // \u540c\u3058\u64cd\u4f5c\u3067\u3082\u7570\u306a\u308b\u7d50\u679c\u306b\u306a\u308b\n  for (const item of event.dataTransfer.items) {\n    console.log(item);\n  }\n\n  Array.from(event.dataTransfer.items)\n    .filter((item) => isCSVItem(item))\n    // \u3053\u3053\u3067\u8fd4\u308a\u5024\u304c null \u306b\u306a\u308b\n    .map((csv) => csv.getAsFile())\n    .map((file) => {\n      if (!file) throw new Error("Failed to load csv file.");\n      const reader = new FileReader();\n      // file \u304c \u305f\u307e\u306b null \u306b\u306a\u308b\u305f\u3081\u4f8b\u5916\u304c\u767a\u751f\u3059\u308b\n      reader.readAsDataURL(file);\n      reader.addEventListener("load", (event) => {\n        // \u30d5\u30a1\u30a4\u30eb\u306b\u5bfe\u3059\u308b\u51e6\u7406\n      });\n    });\n});\n'))),(0,r.kt)("p",null,"\u6210\u529f\u3059\u308b\u5834\u5408\u3068\u5931\u6557\u3059\u308b\u5834\u5408\u3092\u6bd4\u8f03\u3059\u308b\u3068\u3001\u4e0a\u8a18\u30b3\u30fc\u30c9\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"event.dataTransfer.items"),"\u306e\u8981\u7d20(",(0,r.kt)("inlineCode",{parentName:"p"},"DataTransferItem"),")\u306e\u4e2d\u8eab\u306b\u9055\u3044\u304c\u3042\u308a\u3001\u4e0b\u8a18 2 \u901a\u308a\u306b\u306a\u3063\u3066\u3044\u308b\u3053\u3068\u304c\u308f\u304b\u3063\u305f\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u51e6\u7406"),(0,r.kt)("th",{parentName:"tr",align:null},"kind"),(0,r.kt)("th",{parentName:"tr",align:null},"type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6210\u529f"),(0,r.kt)("td",{parentName:"tr",align:null},"file"),(0,r.kt)("td",{parentName:"tr",align:null},"text/csv")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5931\u6557"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"text/plain")))),(0,r.kt)("p",null,"Firefox \u3067\u306f\u3053\u306e\u554f\u984c\u306f\u767a\u751f\u305b\u305a\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"kind: file"),"\u306a\u3082\u306e\u304c\u53d6\u5f97\u3067\u304d\u308b\u305f\u3081\u554f\u984c\u306a\u304f\u52d5\u4f5c\u3057\u305f\u3002"),(0,r.kt)("h2",{id:"\u5bfe\u7b56"},"\u5bfe\u7b56"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u30c9\u30ed\u30c3\u30d7\u3055\u308c\u305f\u30c7\u30fc\u30bf\u306e",(0,r.kt)("inlineCode",{parentName:"li"},"kind"),"\u304c",(0,r.kt)("inlineCode",{parentName:"li"},"file"),"\u304b\u3069\u3046\u304b\u5224\u5b9a\u3059\u308b"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"input"),"\u8981\u7d20\u304b\u3089\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3057\u3066\u53d6\u5f97\u3059\u308b",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},'input[type="file"]'),"\u3067\u306f\u3053\u306e\u554f\u984c\u306f\u767a\u751f\u3057\u306a\u3044"),(0,r.kt)("li",{parentName:"ol"},"\u30ed\u30b0\u30a4\u30f3\u6642\u306b ","[Ubuntu on Xorg]"," \u3092\u5229\u7528\u3059\u308b")),(0,r.kt)("p",null,"\u4eca\u56de\u306f 1, 2 \u306e\u5bfe\u7b56\u3092\u884c\u3063\u3066\u5b9f\u88c5\u3092\u884c\u3063\u305f\u3002"))}d.isMDXComponent=!0}}]);