"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[7166],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,g=c["".concat(o,".").concat(d)]||c[d]||k[d]||l;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={title:"\u3010YubiKey\u3011PIN\u3092\u9593\u9055\u3048\u305fYubiKey\u306e\u30ed\u30c3\u30af\u3092\u89e3\u9664\u3059\u308b",authors:"ogumaru",tags:["gpg","git","yubikey"]},i=void 0,p={permalink:"/2023/01/15/unlock-yubikey-with-master-pw",source:"@site/blog/2023-01-15-unlock-yubikey-with-master-pw.md",title:"\u3010YubiKey\u3011PIN\u3092\u9593\u9055\u3048\u305fYubiKey\u306e\u30ed\u30c3\u30af\u3092\u89e3\u9664\u3059\u308b",description:"\u6982\u8981",date:"2023-01-15T00:00:00.000Z",formattedDate:"2023\u5e741\u670815\u65e5",tags:[{label:"gpg",permalink:"/tags/gpg"},{label:"git",permalink:"/tags/git"},{label:"yubikey",permalink:"/tags/yubikey"}],readingTime:4.13,hasTruncateMarker:!1,authors:[{name:"ogumaru",title:"ogumaru note owner",url:"https://github.com/ogumaru",imageURL:"https://github.com/ogumaru.png",key:"ogumaru"}],frontMatter:{title:"\u3010YubiKey\u3011PIN\u3092\u9593\u9055\u3048\u305fYubiKey\u306e\u30ed\u30c3\u30af\u3092\u89e3\u9664\u3059\u308b",authors:"ogumaru",tags:["gpg","git","yubikey"]},prevItem:{title:"\u3010Authelia\u3011Traefik\u3068Authelia\u3092\u5229\u7528\u3057\u3066SSO\u3092\u5c0e\u5165\u3059\u308b",permalink:"/2023/04/19/introduce-sso-authelia"},nextItem:{title:"\u3010Docker\u3011EPEL\u7248nginx\u3092Docker Compose\u3078\u79fb\u884c\u3057\u7ba1\u7406\u3059\u308b",permalink:"/2023/01/09/migrate-nginx-docker"}},o={authorsImageUrls:[void 0]},u=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u74b0\u5883",id:"\u74b0\u5883",level:2},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2},{value:"\u524d\u63d0\u77e5\u8b58: YubiKey \u306e\u5165\u529b\u30b3\u30fc\u30c9\u306b\u3064\u3044\u3066",id:"\u524d\u63d0\u77e5\u8b58-yubikey-\u306e\u5165\u529b\u30b3\u30fc\u30c9\u306b\u3064\u3044\u3066",level:2},{value:"\u3060\u3081\u3060\u3063\u305f\u65b9\u6cd5",id:"\u3060\u3081\u3060\u3063\u305f\u65b9\u6cd5",level:2},{value:"ykman",id:"ykman",level:3},{value:"yubico-piv-tool",id:"yubico-piv-tool",level:3},{value:"\u518d\u767a\u9632\u6b62\u306e\u305f\u3081\u306e\u66ab\u5b9a\u7684\u306a\u5bfe\u5fdc",id:"\u518d\u767a\u9632\u6b62\u306e\u305f\u3081\u306e\u66ab\u5b9a\u7684\u306a\u5bfe\u5fdc",level:2}],m={toc:u};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,r.kt)("p",null,"Git \u306e\u30b3\u30df\u30c3\u30c8\u7f72\u540d\u306b\u5229\u7528\u3057\u3066\u3044\u308b YubiKey \u306e PIN \u3092 3 \u56de\u9593\u9055\u3048\u3066\u3057\u307e\u3044\u3001\u30ed\u30c3\u30af\u3055\u308c\u3066\u3057\u307e\u3063\u305f\u3002"),(0,r.kt)("p",null,"\u30ed\u30c3\u30af\u3055\u308c\u305f\u72b6\u614b\u3067",(0,r.kt)("inlineCode",{parentName:"p"},"git commit"),"\u3059\u308b\u3068\u4e0b\u8a18\u306e\u30a8\u30e9\u30fc\u3068\u306a\u3063\u305f\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"error: gpg failed to sign the data",(0,r.kt)("br",{parentName:"p"}),"\n","error: unable to sign the tag")),(0,r.kt)("p",null,"\u89e3\u9664\u30b3\u30fc\u30c9\u3092\u5229\u7528\u3057\u3066\u30ed\u30c3\u30af\u306e\u89e3\u9664\u3092\u884c\u3046\u3002"),(0,r.kt)("h2",{id:"\u74b0\u5883"},"\u74b0\u5883"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u9805\u76ee"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7a2e\u985e / \u30d0\u30fc\u30b8\u30e7\u30f3"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u30ad\u30fc"),(0,r.kt)("td",{parentName:"tr",align:null},"Yubikey 5 NFC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ykman")),(0,r.kt)("td",{parentName:"tr",align:null},"YubiKey Manager (ykman) version: 4.0.7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"yubico-piv-tool")),(0,r.kt)("td",{parentName:"tr",align:null},"yubico-piv-tool 2.2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gpg")),(0,r.kt)("td",{parentName:"tr",align:null},"gpg (GnuPG) 2.2.27")))),(0,r.kt)("p",null,"\u307e\u305f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"git config"),"\u3067\u4e0b\u8a18\u306e\u8a2d\u5b9a\u3092\u3057\u3066\u304a\u308a\u3001\u30b3\u30df\u30c3\u30c8\u306b\u7f72\u540d\u3059\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u308b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"commit.gpgsign=true\nuser.signingkey=********\n")),(0,r.kt)("p",null,"\u4e3b\u9375\u306f\u5225\u9014\u4fdd\u7ba1\u3057\u3001\u526f\u9375\u304b\u3089\u751f\u6210\u3057\u305f\u7f72\u540d\u9375\u3092 YubiKey \u306b\u5165\u308c\u3066\u7ba1\u7406\u3057\u3066\u3044\u308b\u3002"),(0,r.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,r.kt)("p",null,"YubiKey \u306e\u6301\u3064\u6a5f\u80fd\u306e\u5185\u3001GPG \u30b9\u30de\u30fc\u30c8\u30ab\u30fc\u30c9\u3068\u3057\u3066\u306e PIN \u304c\u30ed\u30c3\u30af\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u4e0b\u8a18\u306e\u901a\u308a\u5bfe\u8a71\u7684\u306b GPG \u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u89e3\u9664\u3059\u308b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --card-edit\n")),(0,r.kt)("p",null,"\u30d7\u30ed\u30f3\u30d7\u30c8\u304c ",(0,r.kt)("inlineCode",{parentName:"p"},"gpg/card"),"\u306b\u306a\u3063\u305f\u3089",(0,r.kt)("inlineCode",{parentName:"p"},"admin"),"\u30b3\u30de\u30f3\u30c9\u3067\u7ba1\u7406\u30b3\u30de\u30f3\u30c9\u3092\u6709\u52b9\u5316\u3059\u308b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gpg"},"gpg/card> admin\nAdmin commands are allowed\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"passwd"),"\u30b3\u30de\u30f3\u30c9\u3067",(0,r.kt)("inlineCode",{parentName:"p"},"2"),"\u3092\u9078\u629e\u3057\u3001PIN \u306e\u30d6\u30ed\u30c3\u30af\u3092\u89e3\u9664\u3059\u308b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gpg"},"gpg/card> passwd\ngpg: OpenPGP card no. \u2026 detected\n\n1 - change PIN\n2 - unblock PIN\n3 - change Admin PIN\n4 - set the Reset Code\nQ - quit\n\nYour selection? 2\nPIN unblocked and new PIN set.\n")),(0,r.kt)("p",null,"\u30d6\u30ed\u30c3\u30af\u304c\u89e3\u9664\u3055\u308c\u305f\u3089",(0,r.kt)("inlineCode",{parentName:"p"},"q"),"\u3092\u5165\u529b\u3057\u7d42\u4e86\u3059\u308b\u3002"),(0,r.kt)("h2",{id:"\u524d\u63d0\u77e5\u8b58-yubikey-\u306e\u5165\u529b\u30b3\u30fc\u30c9\u306b\u3064\u3044\u3066"},"\u524d\u63d0\u77e5\u8b58: YubiKey \u306e\u5165\u529b\u30b3\u30fc\u30c9\u306b\u3064\u3044\u3066"),(0,r.kt)("p",null,"YubiKey \u3067\u306f\u4ee5\u4e0b\u306e\u5165\u529b\u30b3\u30fc\u30c9\u304c\u51fa\u3066\u304f\u308b"),(0,r.kt)("p",null,"\u5f53\u521d\u3053\u308c\u3092\u6b63\u3057\u304f\u8a8d\u8b58\u3057\u3066\u304a\u3089\u305a\u3001\u6df7\u4e71\u3057\u305f\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4e3b\u306a\u7528\u9014"),(0,r.kt)("th",{parentName:"tr",align:null},"\u521d\u671f\u5024"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PIN (User PIN)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30e6\u30fc\u30b6\u8a8d\u8a3c (\u3053\u308c\u3092\u9593\u9055\u3048\u3066\u30ed\u30c3\u30af\u3055\u308c\u305f)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"123456"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Admin PIN"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u660e (\u4eca\u56de\u3053\u308c\u3092\u5229\u7528)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"12345678"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PUK"),(0,r.kt)("td",{parentName:"tr",align:null},"PIN \u306e\u30d6\u30ed\u30c3\u30af\u89e3\u9664 (\u4eca\u56de\u5229\u7528\u3057\u306a\u3044)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"12345678"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Management key"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u8a8d\u8a3c (\u4eca\u56de\u5229\u7528\u3057\u306a\u3044)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0102030405060708")," \u306e 3DES")))),(0,r.kt)("p",null,"\u53c2\u8003:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.yubico.com/yesdk/users-manual/application-piv/pin-puk-mgmt-key.html"},"The PIV PIN, PUK, and management key - (docs.yubico.com)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.archlinux.jp/index.php/YubiKey"},"YubiKey - ArchWiki - (wiki.archlinux.jp)"))),(0,r.kt)("h2",{id:"\u3060\u3081\u3060\u3063\u305f\u65b9\u6cd5"},"\u3060\u3081\u3060\u3063\u305f\u65b9\u6cd5"),(0,r.kt)("h3",{id:"ykman"},"ykman"),(0,r.kt)("p",null,"\u8a2d\u5b9a\u6642\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u3044\u305f\u305f\u3081\u3001\u6700\u521d\u3053\u306e\u30c4\u30fc\u30eb\u3067\u306e\u89e3\u9664\u3092\u56f3\u3063\u305f\u3002"),(0,r.kt)("p",null,"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u5185\u304b\u3089",(0,r.kt)("a",{parentName:"p",href:"https://docs.yubico.com/software/yubikey/tools/ykman/PIV_Commands.html#ykman-piv-access-unblock-pin-options"},"Unblock the PIN (using PUK)."),"\u3068\u66f8\u304b\u308c\u3066\u3044\u308b\u3082\u306e\u304c\u3042\u3063\u305f\u305f\u3081\u3053\u308c\u3092\u5b9f\u884c\u3057\u305f\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"WARNING: PC/SC not available. Smart card protocols will not function.")),(0,r.kt)("p",null,"\u306e\u3088\u3046\u306a\u30a8\u30e9\u30fc\u304c\u51fa\u305f\u5834\u5408\u306f",(0,r.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/yubikey/comments/p94xwl/yubikey_wont_register_on_arch_linuxs_desktop_auth/"},"\u3053\u3053"),"\u3092\u53c2\u8003\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"sudo systemctl start pcscd.service"),"\u3059\u308b\u3053\u3068\u3067\u7121\u4e8b\u5b9f\u884c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ykman piv access unblock-pin\n# > Enter PUK:\n# > Enter a new PIN:\n# > PIN unblocked\n")),(0,r.kt)("p",null,"\u3057\u304b\u3057",(0,r.kt)("inlineCode",{parentName:"p"},"git commit"),"\u3092\u5b9f\u884c\u3057\u3066\u3082 PIN \u306e\u30ed\u30c3\u30af\u306f\u89e3\u9664\u3067\u304d\u3066\u3044\u306a\u304b\u3063\u305f\u3002"),(0,r.kt)("h3",{id:"yubico-piv-tool"},"yubico-piv-tool"),(0,r.kt)("p",null,"\u4e0a\u8a18\u3068\u306f",(0,r.kt)("a",{parentName:"p",href:"https://tech.yubion.com/documents/piv/admin_guide/yubikey/change-puk/"},"\u5225\u306e\u30c4\u30fc\u30eb\u304c\u3042\u3063\u305f"),"\u305f\u3081\u3053\u308c\u3092\u5229\u7528\u3057\u3066\u89e3\u9664\u3092\u8a66\u307f\u305f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yubico-piv-tool -a unblock-pin\n# > Enter puk:\n# > Enter new pin:\n# > Verifying - Enter new pin:\n# > Successfully unblocked the pin code.\n")),(0,r.kt)("p",null,"\u82e5\u5e72\u51fa\u529b\u306f\u7570\u306a\u308b\u3082\u306e\u306e\u3001\u6982\u306d",(0,r.kt)("inlineCode",{parentName:"p"},"ykman"),"\u3068\u540c\u69d8\u306e\u51fa\u529b\u3068\u306a\u308a\u3001\u540c\u3058\u304f\u30ed\u30c3\u30af\u306e\u89e3\u9664\u306f\u3067\u304d\u3066\u3044\u306a\u304b\u3063\u305f\u3002"),(0,r.kt)("h2",{id:"\u518d\u767a\u9632\u6b62\u306e\u305f\u3081\u306e\u66ab\u5b9a\u7684\u306a\u5bfe\u5fdc"},"\u518d\u767a\u9632\u6b62\u306e\u305f\u3081\u306e\u66ab\u5b9a\u7684\u306a\u5bfe\u5fdc"),(0,r.kt)("p",null,"\u5927\u6587\u5b57/\u5c0f\u6587\u5b57\u3001\u6253\u3061\u9593\u9055\u3044\u306a\u3069\u3092\u8003\u616e\u3059\u308b\u3068\u30ea\u30c8\u30e9\u30a4\u56de\u6570\u304c 3 \u56de\u3067\u306f\u4e0d\u8db3\u304c\u8003\u3048\u3089\u308c\u305f\u306e\u3067\u3001\u4e0b\u8a18\u306e\u901a\u308a\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u305f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'yubico-piv-tool -a verify -P "${YUBIKEY_PIN}" -a pin-retries --pin-retries=5 --puk-retries=5\n')),(0,r.kt)("p",null,"\u53c2\u8003: ",(0,r.kt)("a",{parentName:"p",href:"https://tech.yubion.com/documents/piv/admin_guide/yubikey/change-retry-count/"},"PIN/PUK \u306e\u30ea\u30c8\u30e9\u30a4\u56de\u6570\u306e\u5909\u66f4 - YubiKey PIV Manual - (tech.yubion.com)")))}k.isMDXComponent=!0}}]);