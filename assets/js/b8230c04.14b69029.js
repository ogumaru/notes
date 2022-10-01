"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[890],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=o(a),m=r,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(k,u(u({ref:t},s),{},{components:a})):n.createElement(k,u({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,u=new Array(l);u[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,u[1]=i;for(var o=2;o<l;o++)u[o]=a[o];return n.createElement.apply(null,u)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2943:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const l={title:"\u3010Linux\u3011Ubuntu 22.04\u3067Wi-Fi\u30c9\u30f3\u30b0\u30eb\u306e\u30c9\u30e9\u30a4\u30d0\u3092Docker\u3067\u30d3\u30eb\u30c9\u3059\u308b",authors:"ogumaru",tags:["ubuntu","linux","wifi"]},u=void 0,i={permalink:"/notes/2022/10/01/build-wifi-dongle-driver",source:"@site/blog/2022-10-01-build-wifi-dongle-driver.md",title:"\u3010Linux\u3011Ubuntu 22.04\u3067Wi-Fi\u30c9\u30f3\u30b0\u30eb\u306e\u30c9\u30e9\u30a4\u30d0\u3092Docker\u3067\u30d3\u30eb\u30c9\u3059\u308b",description:"\u6982\u8981",date:"2022-10-01T00:00:00.000Z",formattedDate:"2022\u5e7410\u67081\u65e5",tags:[{label:"ubuntu",permalink:"/notes/tags/ubuntu"},{label:"linux",permalink:"/notes/tags/linux"},{label:"wifi",permalink:"/notes/tags/wifi"}],readingTime:5.97,hasTruncateMarker:!1,authors:[{name:"ogumaru",title:"ogumaru note owner",url:"https://github.com/ogumaru",imageURL:"https://github.com/ogumaru.png",key:"ogumaru"}],frontMatter:{title:"\u3010Linux\u3011Ubuntu 22.04\u3067Wi-Fi\u30c9\u30f3\u30b0\u30eb\u306e\u30c9\u30e9\u30a4\u30d0\u3092Docker\u3067\u30d3\u30eb\u30c9\u3059\u308b",authors:"ogumaru",tags:["ubuntu","linux","wifi"]},nextItem:{title:"\u3010Linux\u3011Raspberry Pi 4\u306eSamba\u30b5\u30fc\u30d0\u3078iPhone\u306e\u7d14\u6b63\u30a2\u30d7\u30ea\u304b\u3089\u63a5\u7d9a\u3059\u308b",permalink:"/notes/2022/09/10/samba-on-raspberrypi-from-ios"}},p={authorsImageUrls:[void 0]},o=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u74b0\u5883\u30fb\u5229\u7528\u6a5f\u5668",id:"\u74b0\u5883\u5229\u7528\u6a5f\u5668",level:2},{value:"\u30c9\u30e9\u30a4\u30d0\u306e\u30d3\u30eb\u30c9\u30fb\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"\u30c9\u30e9\u30a4\u30d0\u306e\u30d3\u30eb\u30c9\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},{value:"Docker \u30b3\u30f3\u30c6\u30ca\u306e\u8d77\u52d5 (\u30db\u30b9\u30c8\u5074)",id:"docker-\u30b3\u30f3\u30c6\u30ca\u306e\u8d77\u52d5-\u30db\u30b9\u30c8\u5074",level:3},{value:"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb (\u30b3\u30f3\u30c6\u30ca\u5074)",id:"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb-\u30b3\u30f3\u30c6\u30ca\u5074",level:3},{value:"\u30c9\u30e9\u30a4\u30d0\u306e\u30d3\u30eb\u30c9 (\u30b3\u30f3\u30c6\u30ca\u5074)",id:"\u30c9\u30e9\u30a4\u30d0\u306e\u30d3\u30eb\u30c9-\u30b3\u30f3\u30c6\u30ca\u5074",level:3},{value:"\u30c9\u30e9\u30a4\u30d0\u306e\u30c6\u30b9\u30c8 (\u30db\u30b9\u30c8\u5074)",id:"\u30c9\u30e9\u30a4\u30d0\u306e\u30c6\u30b9\u30c8-\u30db\u30b9\u30c8\u5074",level:3},{value:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb (\u30db\u30b9\u30c8\u5074)",id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb-\u30db\u30b9\u30c8\u5074",level:3},{value:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306e\u78ba\u8a8d",id:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306e\u78ba\u8a8d",level:2},{value:"\u30d9\u30f3\u30c0\u30fc ID\u30fb\u30d7\u30ed\u30c0\u30af\u30c8 ID \u306e\u78ba\u8a8d",id:"\u30d9\u30f3\u30c0\u30fc-id\u30d7\u30ed\u30c0\u30af\u30c8-id-\u306e\u78ba\u8a8d",level:3},{value:"\u4eca\u56de\u5229\u7528\u3057\u305f\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",id:"\u4eca\u56de\u5229\u7528\u3057\u305f\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",level:3},{value:"APT \u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",id:"apt-\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",level:3}],s={toc:o};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,r.kt)("p",null,"\u3053\u308c\u307e\u3067 Wi-Fi \u63a5\u7d9a\u7528\u306e USB \u30c9\u30f3\u30b0\u30eb\u3092\u5229\u7528\u3059\u308b\u969b\u306b\u30c9\u30e9\u30a4\u30d0\u306e\u30d3\u30eb\u30c9\u304c\u5fc5\u8981\u306b\u306a\u308b\u3053\u3068\u304c\u3042\u3063\u305f\u305f\u3081\u3001\u4f5c\u696d\u306e\u8a18\u9332\u3082\u517c\u306d\u3066\u307e\u3068\u3081\u3066\u304a\u304f\u3002"),(0,r.kt)("p",null,"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u591a\u3044\u305f\u3081\u3001Docker \u3092\u5229\u7528\u3057\u3066\u30d3\u30eb\u30c9\u3092\u884c\u3046\u3053\u3068\u3068\u3059\u308b\u3002"),(0,r.kt)("h2",{id:"\u74b0\u5883\u5229\u7528\u6a5f\u5668"},"\u74b0\u5883\u30fb\u5229\u7528\u6a5f\u5668"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u74b0\u5883"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30d0\u30fc\u30b8\u30e7\u30f3"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OS"),(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 22.04.1 LTS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"20.10.14, build a224086")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u88fd\u54c1"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.amazon.co.jp/gp/product/B01N44FMI9/"},"\u30a2\u30a4\u30fb\u30aa\u30fc\u30fb\u30c7\u30fc\u30bf\u793e WNPU583B")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.realtek.com/ja/products/communications-network-ics/item/rtl8821ce"},"rtl8821ce"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.amazon.co.jp/gp/product/B00C58G612/"},"\u30a2\u30a4\u30fb\u30aa\u30fc\u30fb\u30c7\u30fc\u30bf\u793e WN-AC867U")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.realtek.com/ja/products/communications-network-ics/item/rtl8812au"},"rtl8812au"))))),(0,r.kt)("p",null,"WNPU583B \u306f Wi-Fi/Bluetooth \u4e21\u65b9\u4f7f\u7528\u3067\u304d\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u3002"),(0,r.kt)("h2",{id:"\u30c9\u30e9\u30a4\u30d0\u306e\u30d3\u30eb\u30c9\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"\u30c9\u30e9\u30a4\u30d0\u306e\u30d3\u30eb\u30c9\u30fb\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)("h3",{id:"docker-\u30b3\u30f3\u30c6\u30ca\u306e\u8d77\u52d5-\u30db\u30b9\u30c8\u5074"},"Docker \u30b3\u30f3\u30c6\u30ca\u306e\u8d77\u52d5 (\u30db\u30b9\u30c8\u5074)"),(0,r.kt)("p",null,"rtl8812au \u306e\u30c9\u30e9\u30a4\u30d0\u304c\u591a\u304f\u8ff7\u3046\u304c\u3001",(0,r.kt)("a",{parentName:"p",href:"https://github.com/search?q=rtl8812au"},"GitHub \u3067\u306e\u300crtl8812au\u300d\u306e\u691c\u7d22\u7d50\u679c"),"\u306e\u4e0a\u4f4d\u306e\u3082\u306e\u3092\u5229\u7528\u3057\u305f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/gnab/rtl8812au.git driver\ndocker run --rm -it -v "$(pwd)/driver:/data" -w "/data" ubuntu:jammy /bin/bash\n')),(0,r.kt)("p",null,"\u5f8c\u8ff0\u3059\u308b\u30ab\u30fc\u30cd\u30eb\u30d8\u30c3\u30c0\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u30db\u30b9\u30c8\u3068\u30b3\u30f3\u30c6\u30ca\u306e OS(\u30c7\u30a3\u30b9\u30c8\u30ea\u30d3\u30e5\u30fc\u30b7\u30e7\u30f3)\u3092\u5408\u308f\u305b\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002"),(0,r.kt)("p",null,"\u6700\u521d",(0,r.kt)("inlineCode",{parentName:"p"},"gcc"),"\u306e\u30b3\u30f3\u30c6\u30ca\u3067\u30d3\u30eb\u30c9\u3057\u3088\u3046\u3068\u3057\u305f\u304c\u3001\u30d9\u30fc\u30b9\u3068\u306a\u308b OS \u304c\u7570\u306a\u308b\u305f\u3081\u3053\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u306a\u304b\u3063\u305f\u3002"),(0,r.kt)("h3",{id:"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb-\u30b3\u30f3\u30c6\u30ca\u5074"},"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb (\u30b3\u30f3\u30c6\u30ca\u5074)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'apt update\napt install build-essential "linux-headers-$(uname -r)"\n')),(0,r.kt)("p",null,"\u306a\u304a\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"linux-headers-*"),"\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u306a\u3044\u3068\u4e0b\u8a18\u306e\u30a8\u30e9\u30fc\u304c\u51fa\u308b\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"make","[1]",": ","*","*","*"," /lib/modules/5.15.0-47-generic/build: No such file or directory.")),(0,r.kt)("h3",{id:"\u30c9\u30e9\u30a4\u30d0\u306e\u30d3\u30eb\u30c9-\u30b3\u30f3\u30c6\u30ca\u5074"},"\u30c9\u30e9\u30a4\u30d0\u306e\u30d3\u30eb\u30c9 (\u30b3\u30f3\u30c6\u30ca\u5074)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make\n")),(0,r.kt)("h3",{id:"\u30c9\u30e9\u30a4\u30d0\u306e\u30c6\u30b9\u30c8-\u30db\u30b9\u30c8\u5074"},"\u30c9\u30e9\u30a4\u30d0\u306e\u30c6\u30b9\u30c8 (\u30db\u30b9\u30c8\u5074)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo insmod driver/8812au.ko\n")),(0,r.kt)("p",null,"\u3053\u306e\u72b6\u614b\u3067\u306f\u518d\u8d77\u52d5\u306e\u969b\u306b\u30e2\u30b8\u30e5\u30fc\u30eb\u3078\u306e\u53c2\u7167\u304c\u89e3\u9664\u3055\u308c\u3066\u3057\u307e\u3046\u3002"),(0,r.kt)("h3",{id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb-\u30db\u30b9\u30c8\u5074"},"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb (\u30db\u30b9\u30c8\u5074)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sudo cp 8812au.ko "/lib/modules/$(uname -r)/kernel/drivers/net/wireless"\nsudo depmod\n')),(0,r.kt)("p",null,"\u4e0a\u8a18\u306e\u307b\u304b\u3001\u30ab\u30fc\u30cd\u30eb\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3092\u3057\u305f\u969b\u306b\u81ea\u52d5\u3067\u30d3\u30eb\u30c9\u3059\u308b\u306b\u306f DKMS \u3092\u5229\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002"),(0,r.kt)("p",null,"\u8a73\u7d30\u306f",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gnab/rtl8812au/"},"\u30ea\u30dd\u30b8\u30c8\u30ea\u306e README"),"\u306b\u66f8\u3044\u3066\u3042\u308b\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"build-essential"),"\u3084",(0,r.kt)("inlineCode",{parentName:"p"},"dkms"),"\u306a\u3069\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5165\u308c\u308b\u5fc5\u8981\u304c\u3042\u308b\u305f\u3081\u3001\u4eca\u56de\u306f\u5bfe\u5fdc\u3057\u306a\u3044\u3053\u3068\u3068\u3059\u308b\u3002"),(0,r.kt)("p",null,"(\u5225\u306e\u6a5f\u4f1a\u306b Docker \u3092\u5229\u7528\u3057\u305f\u65b9\u6cd5\u3092\u8a66\u3057\u305f\u3044\u3002)"),(0,r.kt)("h2",{id:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306e\u78ba\u8a8d"},"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306e\u78ba\u8a8d"),(0,r.kt)("p",null,"\u3053\u3053\u307e\u3067\u3067\u30c9\u30f3\u30b0\u30eb\u306f\u52d5\u4f5c\u3059\u308b\u72b6\u614b\u306b\u306f\u306a\u3063\u305f\u304c\u3001\u88fd\u54c1\u3078\u306e\u5bfe\u5fdc\u72b6\u6cc1\u3092\u78ba\u8a8d\u3059\u308b\u305f\u3081\u3001\u4eca\u56de\u5229\u7528\u3057\u305f\u30ea\u30dd\u30b8\u30c8\u30ea\u3068 APT \u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3092\u6bd4\u8f03\u3057\u3064\u3064\u78ba\u8a8d\u3057\u3066\u307f\u308b\u3002"),(0,r.kt)("h3",{id:"\u30d9\u30f3\u30c0\u30fc-id\u30d7\u30ed\u30c0\u30af\u30c8-id-\u306e\u78ba\u8a8d"},"\u30d9\u30f3\u30c0\u30fc ID\u30fb\u30d7\u30ed\u30c0\u30af\u30c8 ID \u306e\u78ba\u8a8d"),(0,r.kt)("p",null,"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3092\u63a2\u308b\u306b\u3042\u305f\u308a\u3001\u88fd\u54c1\u306e ID \u3092\u78ba\u8a8d\u3059\u308b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"lsusb | grep -i wn\n# > Bus 001 Device 013: ID 0bda:0823 Realtek Semiconductor Corp. WNPU583B\n# > Bus 001 Device 012: ID 04bb:0952 I-O Data Device, Inc. WN-AC867U\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"0bda:0823"),"\u3084",(0,r.kt)("inlineCode",{parentName:"p"},"04bb:0952"),"\u304c\u30d9\u30f3\u30c0\u30fc ID(",(0,r.kt)("inlineCode",{parentName:"p"},"idVendor"),")\u3068\u30d7\u30ed\u30c0\u30af\u30c8 ID(",(0,r.kt)("inlineCode",{parentName:"p"},"idProduct"),")\u306e\u5024\u306e\u305f\u3081\u3001\u3053\u308c\u3092\u5229\u7528\u3057\u3066\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3092\u691c\u7d22\u3059\u308b\u3002\n\u30d9\u30f3\u30c0\u30fc ID \u3092\u542b\u3081\u308b\u3068\u30d2\u30c3\u30c8\u4ef6\u6570\u304c\u591a\u3044\u305f\u3081\u3001\u30d7\u30ed\u30c0\u30af\u30c8 ID \u3092\u5229\u7528\u3057\u3066\u691c\u7d22\u3092\u884c\u3046\u3002"),(0,r.kt)("h3",{id:"\u4eca\u56de\u5229\u7528\u3057\u305f\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9"},"\u4eca\u56de\u5229\u7528\u3057\u305f\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/gnab/rtl8812au.git"},"https://github.com/gnab/rtl8812au.git"),"\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u5185\u304b\u3089\u95a2\u9023\u3059\u308b\u8a18\u8ff0\u3092\u78ba\u8a8d\u3059\u308b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git grep -iP '0x(0823|0952)'\n# > os_dep/linux/usb_intf.c:        {USB_DEVICE(0x04BB, 0x0952),.driver_info = RTL8812}, /* I-O DATA - Edimax */\n# > os_dep/linux/usb_intf.c:        {USB_DEVICE(0x0bda, 0x0823),.driver_info = RTL8821}, /* I-O DATA - WNPU583B */\n")),(0,r.kt)("h3",{id:"apt-\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9"},"APT \u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9"),(0,r.kt)("p",null,"\u30db\u30b9\u30c8\u74b0\u5883\u306e\u8a2d\u5b9a\u3092\u5909\u3048\u305f\u304f\u306a\u304b\u3063\u305f\u306e\u3067\u30b3\u30f3\u30c6\u30ca\u74b0\u5883\u3067\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3092\u53d6\u5f97\u3059\u308b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4f55\u304b\u3057\u3089\u30a8\u30c7\u30a3\u30bf\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\napt install busybox\n\n# deb-src \u306e\u30b3\u30e1\u30f3\u30c8\u30a2\u30a6\u30c8\u3092\u89e3\u9664\u3059\u308b\nbusybox vi /etc/apt/sources.list\napt update\n\n# \u95a2\u9023\u3059\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u691c\u7d22\napt search --names-only 'rtl88[21]{2}'\n# > Sorting... Done\n# > Full Text Search... Done\n# > rtl8812au-dkms/jammy,jammy 4.3.8.12175.20140902+dfsg-0ubuntu15 all\n# >   dkms source for the r8812au network driver\n# >\n# > rtl8821ce-dkms/jammy,jammy 5.5.2.1-0ubuntu10 all\n# >   DKMS source for the Realtek 8821C PCIe Wi-Fi driver\n")),(0,r.kt)("p",null,"\u4e0a\u8a18\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u691c\u7d22\u7d50\u679c\u304b\u3089",(0,r.kt)("inlineCode",{parentName:"p"},"rtl8812au-dkms"),"\u3068",(0,r.kt)("inlineCode",{parentName:"p"},"rtl8821ce-dkms"),"\u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068\u306b\u3059\u308b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\napt source rtl8812au-dkms\n")),(0,r.kt)("p",null,"\u4e0b\u8a18\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u51fa\u3066\u304d\u305f\u304c\u3001\u4eca\u56de\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"apt source"),"\u3067\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u305f\u3082\u306e\u3092\u78ba\u8a8d\u3059\u308b\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Picking 'rtl8812au' as source package instead of 'rtl8812au-dkms'",(0,r.kt)("br",{parentName:"p"}),"\n","NOTICE: 'rtl8812au' packaging is maintained in the 'Git' version control system at:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rsalveti/rtl8812au.git"},"https://github.com/rsalveti/rtl8812au.git"),(0,r.kt)("br",{parentName:"p"}),"\n","Please use:",(0,r.kt)("br",{parentName:"p"}),"\n","git clone ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rsalveti/rtl8812au.git"},"https://github.com/rsalveti/rtl8812au.git"),(0,r.kt)("br",{parentName:"p"}),"\n","to retrieve the latest (possibly unreleased) updates to the package.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt source rtl8821ce-dkms\n")),(0,r.kt)("p",null,"\u4e0b\u8a18\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u51fa\u3066\u304d\u305f\u304c\u3001\u3053\u3061\u3089\u3082",(0,r.kt)("inlineCode",{parentName:"p"},"apt source"),"\u3067\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u305f\u3082\u306e\u3092\u78ba\u8a8d\u3059\u308b\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Picking 'rtl8821ce' as source package instead of 'rtl8821ce-dkms'",(0,r.kt)("br",{parentName:"p"}),"\n","NOTICE: 'rtl8821ce' packaging is maintained in the 'Git' version control system at:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://git.launchpad.net/~canonical-hwe-team/ubuntu/+source/rtl8821ce-dkms/+git/rtl8821ce-dkms"},"https://git.launchpad.net/~canonical-hwe-team/ubuntu/+source/rtl8821ce-dkms/+git/rtl8821ce-dkms"),(0,r.kt)("br",{parentName:"p"}),"\n","Please use:",(0,r.kt)("br",{parentName:"p"}),"\n","git clone ",(0,r.kt)("a",{parentName:"p",href:"https://git.launchpad.net/~canonical-hwe-team/ubuntu/+source/rtl8821ce-dkms/+git/rtl8821ce-dkms"},"https://git.launchpad.net/~canonical-hwe-team/ubuntu/+source/rtl8821ce-dkms/+git/rtl8821ce-dkms"),(0,r.kt)("br",{parentName:"p"}),"\n","to retrieve the latest (possibly unreleased) updates to the package.")),(0,r.kt)("p",null,"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u305f\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u304b\u3089\u95a2\u9023\u3059\u308b\u8a18\u8ff0\u3092\u691c\u7d22\u3059\u308b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u306e\u78ba\u8a8d\nls -1\n# > rtl8812au-4.3.8.12175.20140902+dfsg\n# > rtl8812au_4.3.8.12175.20140902+dfsg-0ubuntu15.debian.tar.xz\n# > rtl8812au_4.3.8.12175.20140902+dfsg-0ubuntu15.dsc\n# > rtl8812au_4.3.8.12175.20140902+dfsg.orig.tar.gz\n# > rtl8821ce-5.5.2.1\n# > rtl8821ce_5.5.2.1-0ubuntu10.debian.tar.xz\n# > rtl8821ce_5.5.2.1-0ubuntu10.dsc\n# > rtl8821ce_5.5.2.1.orig.tar.gz\n\n# \u95a2\u9023\u3059\u308b\u8a18\u8ff0\u3092\u78ba\u8a8d\nfind -name \"*.c\" -print0 | xargs -0 grep -iP '0x(0823|0952)'\n# > ./rtl8812au-4.3.8.12175.20140902+dfsg/.pc/0009-usb_intf-extending-compatible-vendor-list.patch/os_dep/linux/usb_intf.c: {USB_DEVICE(0x04BB, 0x0952),.driver_info = RTL8812}, /* I-O DATA - Edimax */\n# > ./rtl8812au-4.3.8.12175.20140902+dfsg/.pc/0004-Adding-additional-compatible-devices.patch/os_dep/linux/usb_intf.c:  {USB_DEVICE(0x04BB, 0x0952),.driver_info = RTL8812}, /* I-O DATA - Edimax */\n# > ./rtl8812au-4.3.8.12175.20140902+dfsg/os_dep/linux/usb_intf.c:  {USB_DEVICE(0x04BB, 0x0952),.driver_info = RTL8812}, /* I-O DATA - Edimax *\n")),(0,r.kt)("p",null,"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u591a\u304f\u5165\u308c\u305f\u304f\u306a\u3044\u305f\u3081\u78ba\u8a8d\u3057\u3066\u3044\u306a\u3044\u304c\u3001\u4e0a\u8a18\u304b\u3089\u306e\u4e88\u60f3\u3068\u3057\u3066\u3001WN-AC867U \u3067\u3042\u308c\u3070",(0,r.kt)("inlineCode",{parentName:"p"},"rtl8812au"),"\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308c\u3070\u5229\u7528\u3067\u304d\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u3002"),(0,r.kt)("p",null,"WNPU583B \u306b\u95a2\u9023\u3059\u308b\u90e8\u5206\u306f\u30d2\u30c3\u30c8\u3057\u306a\u3044\u305f\u3081\u52d5\u4f5c\u3059\u308b\u304b\u4e0d\u660e\u3002"),(0,r.kt)("p",null,"(\u904e\u53bb\u306e\u7d4c\u9a13\u3067\u306f Kubuntu 20.04 \u306b\u304a\u3044\u3066 ",(0,r.kt)("inlineCode",{parentName:"p"},"rtl8821ce-dkms"),"\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3053\u3068\u3067 Bluetooth \u3060\u3051\u306f\u5229\u7528\u3067\u304d\u305f\u3002)"))}c.isMDXComponent=!0}}]);