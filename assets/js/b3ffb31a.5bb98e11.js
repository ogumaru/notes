"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[5908],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>k});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),p=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=p(e.components);return r.createElement(o.Provider,{value:a},e.children)},m="mdxType",b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=n,k=m["".concat(o,".").concat(d)]||m[d]||b[d]||l;return t?r.createElement(k,i(i({ref:a},u),{},{components:t})):r.createElement(k,i({ref:a},u))}));function k(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=d;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9205:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=t(7462),n=(t(7294),t(3905));const l={title:"\u3010Linux\u3011Raspberry Pi 4\u306eSamba\u30b5\u30fc\u30d0\u3078iPhone\u306e\u7d14\u6b63\u30a2\u30d7\u30ea\u304b\u3089\u63a5\u7d9a\u3059\u308b",authors:"ogumaru",tags:["ubuntu","linux","raspberrypi","samba","ios"]},i=void 0,s={permalink:"/2022/09/10/samba-on-raspberrypi-from-ios",source:"@site/blog/2022-09-10-samba-on-raspberrypi-from-ios.md",title:"\u3010Linux\u3011Raspberry Pi 4\u306eSamba\u30b5\u30fc\u30d0\u3078iPhone\u306e\u7d14\u6b63\u30a2\u30d7\u30ea\u304b\u3089\u63a5\u7d9a\u3059\u308b",description:"\u6982\u8981",date:"2022-09-10T00:00:00.000Z",formattedDate:"2022\u5e749\u670810\u65e5",tags:[{label:"ubuntu",permalink:"/tags/ubuntu"},{label:"linux",permalink:"/tags/linux"},{label:"raspberrypi",permalink:"/tags/raspberrypi"},{label:"samba",permalink:"/tags/samba"},{label:"ios",permalink:"/tags/ios"}],readingTime:4.51,hasTruncateMarker:!1,authors:[{name:"ogumaru",title:"ogumaru note owner",url:"https://github.com/ogumaru",imageURL:"https://github.com/ogumaru.png",key:"ogumaru"}],frontMatter:{title:"\u3010Linux\u3011Raspberry Pi 4\u306eSamba\u30b5\u30fc\u30d0\u3078iPhone\u306e\u7d14\u6b63\u30a2\u30d7\u30ea\u304b\u3089\u63a5\u7d9a\u3059\u308b",authors:"ogumaru",tags:["ubuntu","linux","raspberrypi","samba","ios"]},prevItem:{title:"\u3010Linux\u3011Ubuntu 22.04\u3067Wi-Fi\u30c9\u30f3\u30b0\u30eb\u306e\u30c9\u30e9\u30a4\u30d0\u3092Docker\u3067\u30d3\u30eb\u30c9\u3059\u308b",permalink:"/2022/10/01/build-wifi-dongle-driver"},nextItem:{title:"\u3010JavaScript\u3011Prisma\u306e\u5358\u7d14\u306a\u30ec\u30b3\u30fc\u30c9\u3092\u5024\u306e\u914d\u5217\u3068\u3057\u3066\u53d6\u5f97\u3059\u308b",permalink:"/2022/08/13/proxy-prisma-records"}},o={authorsImageUrls:[void 0]},p=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u74b0\u5883",id:"\u74b0\u5883",level:2},{value:"\u6e96\u5099",id:"\u6e96\u5099",level:2},{value:"Samba \u30d1\u30c3\u30b1\u30fc\u30b8",id:"samba-\u30d1\u30c3\u30b1\u30fc\u30b8",level:3},{value:"\u30e6\u30fc\u30b6",id:"\u30e6\u30fc\u30b6",level:3},{value:"\u30d5\u30a1\u30a4\u30a2\u30a6\u30a9\u30fc\u30eb",id:"\u30d5\u30a1\u30a4\u30a2\u30a6\u30a9\u30fc\u30eb",level:3},{value:"Samba \u306e\u8a2d\u5b9a",id:"samba-\u306e\u8a2d\u5b9a",level:2},{value:"\u30b0\u30ed\u30fc\u30d0\u30eb\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb",id:"\u30b0\u30ed\u30fc\u30d0\u30eb\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb",level:3},{value:"\u5171\u6709\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb",id:"\u5171\u6709\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb",level:3},{value:"\u8a2d\u5b9a\u306e\u53cd\u6620",id:"\u8a2d\u5b9a\u306e\u53cd\u6620",level:3},{value:"\u63a5\u7d9a",id:"\u63a5\u7d9a",level:2},{value:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u3064\u3044\u3066",id:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u3064\u3044\u3066",level:2}],u={toc:p},m="wrapper";function b(e){let{components:a,...t}=e;return(0,n.kt)(m,(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,n.kt)("p",null,"Raspberry Pi 4 \u3092\u5229\u7528\u3057\u3066 LAN \u5185\u306b Samba \u30b5\u30fc\u30d0\u3092\u69cb\u7bc9\u3057\u3001iPhone \u306b\u6a19\u6e96\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u300c\u30d5\u30a1\u30a4\u30eb\u300d\u30a2\u30d7\u30ea\u304b\u3089\u306e\u63a5\u7d9a\u3092\u884c\u3046"),(0,n.kt)("h2",{id:"\u74b0\u5883"},"\u74b0\u5883"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u9805\u76ee"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u6a5f\u7a2e"),(0,n.kt)("td",{parentName:"tr",align:null},"iPhone 8 Plus")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8 OS"),(0,n.kt)("td",{parentName:"tr",align:null},"iOS 15.6.1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u30b5\u30fc\u30d0\u6a5f\u7a2e"),(0,n.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 4 Model B")))),(0,n.kt)("p",null,"Raspberry Pi OS \u306f\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u306a\u3044\u3089\u3057\u3044\u305f\u3081\u4e0b\u8a18\u3067\u78ba\u8a8d"),(0,n.kt)("p",null,"(\u30d9\u30fc\u30bf\u7248\u3067\u51fa\u305f 64-bit \u306e OS \u3092\u5165\u308c\u305f\u8a18\u61b6\u304c\u3042\u308b)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"uname -a\n# > Linux raspberrypi 5.10.103-v8+ #1529 SMP PREEMPT Tue Mar 8 12:26:46 GMT 2022 aarch64 GNU/Linux\nlsb_release -a\n# > No LSB modules are available.\n# > Distributor ID: Debian\n# > Description:    Debian GNU/Linux 10 (buster)\n# > Release:    10\n# > Codename:   buster\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"samba --version\n# > Version 4.9.5-Debian\n")),(0,n.kt)("h2",{id:"\u6e96\u5099"},"\u6e96\u5099"),(0,n.kt)("h3",{id:"samba-\u30d1\u30c3\u30b1\u30fc\u30b8"},"Samba \u30d1\u30c3\u30b1\u30fc\u30b8"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install samba\n# iOS \u3084 macOS\u3067\u3082\u5229\u7528\u3059\u308b\u5834\u5408\nsudo apt install samba-vfs-modules\n")),(0,n.kt)("h3",{id:"\u30e6\u30fc\u30b6"},"\u30e6\u30fc\u30b6"),(0,n.kt)("p",null,"\u3053\u3053\u306f",(0,n.kt)("a",{parentName:"p",href:"https://wiki.archlinux.jp/index.php/Samba"},"Samba - ArchWiki (wiki.archlinux.jp)"),"\u3092\u53c2\u8003\u306b\u8a2d\u5b9a\u3057\u305f"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'# Samba\u30e6\u30fc\u30b6\u306e\u8ffd\u52a0\nsudo pdbedit -a "$(whoami)"\n\n# `usershare path` \u3067\u6307\u5b9a\u3059\u308b`/var/lib/samba/usershares` \u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\n# (\u6240\u6709\u8005:\u30b0\u30eb\u30fc\u30d7 \u304c root:sambashare \u306b\u306a\u3063\u3066\u3044\u308b)\nsudo gpasswd sambashare -a "$(whoami)"\n')),(0,n.kt)("p",null,"\u30b0\u30eb\u30fc\u30d7\u8a2d\u5b9a\u3092\u53cd\u6620\u3055\u305b\u308b\u305f\u3081\u518d\u30ed\u30b0\u30a4\u30f3\u3059\u308b"),(0,n.kt)("h3",{id:"\u30d5\u30a1\u30a4\u30a2\u30a6\u30a9\u30fc\u30eb"},"\u30d5\u30a1\u30a4\u30a2\u30a6\u30a9\u30fc\u30eb"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.samba.org/~tpot/articles/firewall.html"},"Firewalling Samba (www.samba.org)"),"\u306b\u3088\u308b\u3068\u3001\u8a31\u53ef\u3059\u308b\u306e\u306f\u4e0b\u8a18"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u30d7\u30ed\u30c8\u30b3\u30eb"),(0,n.kt)("th",{parentName:"tr",align:null},"\u30dd\u30fc\u30c8"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"UDP"),(0,n.kt)("td",{parentName:"tr",align:null},"137")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"UDP"),(0,n.kt)("td",{parentName:"tr",align:null},"138")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TCP"),(0,n.kt)("td",{parentName:"tr",align:null},"139")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TCP"),(0,n.kt)("td",{parentName:"tr",align:null},"445")))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"ufw"),"\u3092\u5229\u7528\u3057\u3066\u3044\u308c\u3070\u4e0b\u8a18"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Samba \u306e\u30eb\u30fc\u30eb\u304c\u3042\u308c\u3070\u5229\u7528\nsudo ufw app list | grep -i samba\nsudo ufw allow samba\n")),(0,n.kt)("h2",{id:"samba-\u306e\u8a2d\u5b9a"},"Samba \u306e\u8a2d\u5b9a"),(0,n.kt)("h3",{id:"\u30b0\u30ed\u30fc\u30d0\u30eb\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb"},"\u30b0\u30ed\u30fc\u30d0\u30eb\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# \u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\nsudo cp -a /etc/samba/smb.conf{,.$(date '+%Y-%m-%d_%H%M%S').bak}\n\n# \u4e0b\u8a18\u5dee\u5206\u3092\u8ffd\u8a18\nsudoedit /etc/samba/smb.conf\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-diff"},"[global]\n+   usershare path = /var/lib/samba/usershares\n+   # For supporting iOS / macOS\n+   vfs objects = fruit streams_xattr\n+   fruit:metadata = stream\n+   fruit:model = MacSamba\n+   fruit:posix_rename = yes\n+   fruit:veto_appledouble = no\n+   fruit:nfs_aces = no\n+   fruit:wipe_intentionally_left_blank_rfork = yes\n+   fruit:delete_empty_adfiles = yes\n")),(0,n.kt)("p",null,"\u4e0a\u8a18\u306e",(0,n.kt)("inlineCode",{parentName:"p"},"vfs"),"\u3084",(0,n.kt)("inlineCode",{parentName:"p"},"fruit"),"\u306e\u8a2d\u5b9a\u304c\u306a\u3044\u3068\u3001\u4fdd\u5b58\u306e\u969b\u306b\u300c\u64cd\u4f5c\u3092\u5b8c\u4e86\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u300d\u300c\u5c5e\u6027\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u300d\u306e\u3088\u3046\u306a\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u308b"),(0,n.kt)("p",null,"VFS \u95a2\u9023\u306e\u8a2d\u5b9a\u5185\u5bb9\u306b\u3064\u3044\u3066\u306f\u4e0b\u8a18\u30da\u30fc\u30b8\u306e\u3082\u306e\u3092\u5229\u7528\u3057\u305f"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://wiki.samba.org/index.php/Configure_Samba_to_Work_Better_with_Mac_OS_X"},"Configure Samba to Work Better with Mac OS X - SambaWiki (wiki.samba.org)")),(0,n.kt)("h3",{id:"\u5171\u6709\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb"},"\u5171\u6709\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'# \u5171\u6709\u3059\u308b\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u4f5c\u6210\nmkdir -p ~/share\n\n# \u5171\u6709\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u4f5c\u6210\nnet usershare add "share" ~/share/ "samba share" "$(whoami):f"\n')),(0,n.kt)("p",null,"\u6a29\u9650\u306e\u8a2d\u5b9a\u306b\u3064\u3044\u3066\u306f\n",(0,n.kt)("a",{parentName:"p",href:"https://www.samba.org/samba/docs/current/man-html/net.8.html"},"net (www.samba.org)"),"\u306a\u3069\u3092\u53c2\u8003\u306b\u6307\u5b9a\u3059\u308b"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'The definition of a user defined share acl is: "user:permission", where user is a valid username on the system and permission can be "F", "R", or "D". "F" stands for "full permissions", ie. read and write permissions. "D" stands for "deny" for a user, ie. prevent this user from accessing this share. "R" stands for "read only", ie. only allow read access to this share (no creation of new files or directories or writing to files).')),(0,n.kt)("h3",{id:"\u8a2d\u5b9a\u306e\u53cd\u6620"},"\u8a2d\u5b9a\u306e\u53cd\u6620"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl reload smbd.service\n")),(0,n.kt)("h2",{id:"\u63a5\u7d9a"},"\u63a5\u7d9a"),(0,n.kt)("p",null,"mDNS \u3067\u540d\u524d\u89e3\u6c7a\u304c\u3067\u304d\u308c\u3070\u3001\u540c\u3058\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306b\u3064\u306a\u3044\u3060\u4e0a\u3067 iOS \u306e\u300c\u30d5\u30a1\u30a4\u30eb\u300d\u304b\u3089"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"[\u30d6\u30e9\u30a6\u30ba]"),(0,n.kt)("li",{parentName:"ol"},"\u53f3\u4e0a\u306e\u4e38\u3067\u56f2\u307e\u308c\u305f\u4e09\u70b9(\u2026)"),(0,n.kt)("li",{parentName:"ol"},"[\u30b5\u30fc\u30d0\u3078\u63a5\u7d9a]"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"raspberrypi.local"),"\u306a\u3069"),(0,n.kt)("li",{parentName:"ol"},"[\u767b\u9332\u30e6\u30fc\u30b6]"," \u3092\u9078\u629e"),(0,n.kt)("li",{parentName:"ol"},"Raspberry Pi \u306e\u30e6\u30fc\u30b6\u60c5\u5831\u3092\u5165\u529b")),(0,n.kt)("p",null,"\u3067\u63a5\u7d9a\u3067\u304d\u308b"),(0,n.kt)("p",null,'\u4f8b\u3048\u3070\u5199\u771f\u306f\u5171\u6709\u304b\u3089\u300c"\u30d5\u30a1\u30a4\u30eb"\u306b\u4fdd\u5b58\u300d\u304b\u3089\u4e0a\u8a18\u30d5\u30a9\u30eb\u30c0\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u3067\u4fdd\u5b58\u3067\u304d\u308b'),(0,n.kt)("p",null,"\u5f53\u521d VFS \u95a2\u9023(",(0,n.kt)("inlineCode",{parentName:"p"},"vfs"),"\u3084",(0,n.kt)("inlineCode",{parentName:"p"},"fruit"),")\u3092\u8a2d\u5b9a\u3057\u3066\u304a\u3089\u305a\u3001\u3053\u3053\u3067\u4fdd\u5b58\u304c\u3067\u304d\u305a\u306b\u56f0\u3063\u3066\u304b\u306a\u308a\u6642\u9593\u3092\u4f7f\u3063\u305f"),(0,n.kt)("h2",{id:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u3064\u3044\u3066"},"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u3064\u3044\u3066"),(0,n.kt)("p",null,"1MB \u306e\u753b\u50cf\u3092\u30b3\u30d4\u30fc\u3059\u308b\u306e\u306b \u4f53\u611f\u3067 1 \u79d2\u7a0b\u5ea6"),(0,n.kt)("p",null,"10MB \u306e\u52d5\u753b\u3092\u30b3\u30d4\u30fc\u3059\u308b\u306e\u306b \u4f53\u611f\u3067 2 \u301c 3 \u79d2\u7a0b\u5ea6"),(0,n.kt)("p",null,"SSD \u3092\u63a5\u7d9a\u3057\u305f USB \u30d6\u30fc\u30c8\u3067\u5229\u7528\u3057\u3066\u3044\u308b\u305f\u3081\u3001Raspberry Pi \u74b0\u5883\u306e\u4e2d\u3067\u306f\u6bd4\u8f03\u7684 I/O \u306f\u65e9\u3044\u306f\u305a"),(0,n.kt)("p",null,"microSD \u74b0\u5883\u3067\u306f\u3082\u3046\u5c11\u3057\u9045\u3044\u304b\u3082\u3057\u308c\u306a\u3044"))}b.isMDXComponent=!0}}]);