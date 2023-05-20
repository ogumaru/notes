"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[1620],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),k=a,u=m["".concat(p,".").concat(k)]||m[k]||d[k]||o;return t?r.createElement(u,i(i({ref:n},c),{},{components:t})):r.createElement(u,i({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=k;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},561:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={title:"\u3010Docker\u3011EPEL\u7248nginx\u3092Docker Compose\u3078\u79fb\u884c\u3057\u7ba1\u7406\u3059\u308b",authors:"ogumaru",tags:["docker","docker-compose","nginx","certbot","shiori"]},i=void 0,l={permalink:"/2023/01/09/migrate-nginx-docker",source:"@site/blog/2023-01-09-migrate-nginx-docker/index.md",title:"\u3010Docker\u3011EPEL\u7248nginx\u3092Docker Compose\u3078\u79fb\u884c\u3057\u7ba1\u7406\u3059\u308b",description:"\u6982\u8981",date:"2023-01-09T00:00:00.000Z",formattedDate:"2023\u5e741\u67089\u65e5",tags:[{label:"docker",permalink:"/tags/docker"},{label:"docker-compose",permalink:"/tags/docker-compose"},{label:"nginx",permalink:"/tags/nginx"},{label:"certbot",permalink:"/tags/certbot"},{label:"shiori",permalink:"/tags/shiori"}],readingTime:3.825,hasTruncateMarker:!1,authors:[{name:"ogumaru",title:"ogumaru note owner",url:"https://github.com/ogumaru",imageURL:"https://github.com/ogumaru.png",key:"ogumaru"}],frontMatter:{title:"\u3010Docker\u3011EPEL\u7248nginx\u3092Docker Compose\u3078\u79fb\u884c\u3057\u7ba1\u7406\u3059\u308b",authors:"ogumaru",tags:["docker","docker-compose","nginx","certbot","shiori"]},prevItem:{title:"\u3010YubiKey\u3011PIN\u3092\u9593\u9055\u3048\u305fYubiKey\u306e\u30ed\u30c3\u30af\u3092\u89e3\u9664\u3059\u308b",permalink:"/2023/01/15/unlock-yubikey-with-master-pw"},nextItem:{title:"\u3010WASM\u3011wasm-pack pack\u304cos error 2\u3067\u5931\u6557\u3059\u308b",permalink:"/2022/11/27/wasm-pack-cannot-pack-oserr2"}},p={authorsImageUrls:[void 0]},s=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u74b0\u5883",id:"\u74b0\u5883",level:2},{value:"\u8a73\u7d30",id:"\u8a73\u7d30",level:2},{value:"\u5404\u7a2e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb",id:"\u5404\u7a2e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb",level:2},{value:"<code>docker-compose.yaml</code>",id:"docker-composeyaml",level:3},{value:"nginx \u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb",id:"nginx-\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb",level:3},{value:"Certbot",id:"certbot",level:3},{value:"\u52d5\u4f5c\u78ba\u8a8d",id:"\u52d5\u4f5c\u78ba\u8a8d",level:2}],c={toc:s},m="wrapper";function d(e){let{components:n,...o}=e;return(0,a.kt)(m,(0,r.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,a.kt)("p",null,"Amazon Linux 2 \u306e EPEL \u7248 nginx \u3092 Docker \u306e nginx \u306b\u79fb\u884c\u3059\u308b\u3002"),(0,a.kt)("p",null,"\u4f75\u305b\u3066\u3001Docker \u3067\u7a3c\u50cd\u3059\u308b\u4ed6\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b3\u30f3\u30c6\u30ca\u3082 Docker Compose \u3092\u5229\u7528\u3057\u3066\u540c\u4e00\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306b\u3066\u7ba1\u7406\u3059\u308b\u3002"),(0,a.kt)("h2",{id:"\u74b0\u5883"},"\u74b0\u5883"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u9805\u76ee"),(0,a.kt)("th",{parentName:"tr",align:null},"\u30d0\u30fc\u30b8\u30e7\u30f3 / \u7a2e\u985e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u30bf\u30a4\u30d7"),(0,a.kt)("td",{parentName:"tr",align:null},"t4g.nano")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OS"),(0,a.kt)("td",{parentName:"tr",align:null},"Amazon Linux release 2 (Karoo)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nginx (EPEL)"),(0,a.kt)("td",{parentName:"tr",align:null},"nginx version: nginx/1.12.2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nginx (docker)"),(0,a.kt)("td",{parentName:"tr",align:null},"nginx:1.23.3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Docker"),(0,a.kt)("td",{parentName:"tr",align:null},"Docker version 20.10.13, build a224086")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Docker Compose"),(0,a.kt)("td",{parentName:"tr",align:null},"Docker Compose version v2.14.2")))),(0,a.kt)("h2",{id:"\u8a73\u7d30"},"\u8a73\u7d30"),(0,a.kt)("p",null,"Amazon EC2 \u4e0a\u306b \u30ea\u30d0\u30fc\u30b9\u30d7\u30ed\u30ad\u30b7\u3068\u3057\u3066\u632f\u308b\u821e\u3046 nginx \u306e Web \u30b5\u30fc\u30d0\u304c\u3042\u308a\u3001\u3053\u308c\u3092\u901a\u3058\u3066",(0,a.kt)("a",{parentName:"p",href:"https://github.com/go-shiori/shiori/pkgs/container/shiori"},"Docker \u7248\u306e Shiori"),"\u3092\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u3066\u3044\u308b\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u6982\u8981\u56f3",src:t(8687).Z,title:"\u6982\u8981\u56f3",width:"1010",height:"702"})),(0,a.kt)("p",null,"\u4e0a\u56f3\u5de6\u306e\u901a\u308a\u3001\u79fb\u884c\u524d\u306e\u69cb\u6210\u3067\u306f\u30d1\u30c3\u30b1\u30fc\u30b8\u7248\u306e nginx \u304c\u5916\u90e8\u304b\u3089\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u308b\u3002"),(0,a.kt)("p",null,"\u3053\u306e nginx \u304b\u3089",(0,a.kt)("inlineCode",{parentName:"p"},"proxy_pass"),"\u306b\u3088\u308a\u3001\u5185\u90e8\u3067\u7a3c\u50cd\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b3\u30f3\u30c6\u30ca(",(0,a.kt)("inlineCode",{parentName:"p"},"shiori"),")\u3078\u8ee2\u9001\u3057\u3066\u3044\u308b\u3002"),(0,a.kt)("p",null,"\u79fb\u884c\u5f8c\u306e\u69cb\u6210\u3068\u3057\u3066\u306f\u4e0a\u56f3\u53f3\u306e\u3088\u3046\u306b\u3001\u30db\u30b9\u30c8\u5074\u306e",(0,a.kt)("inlineCode",{parentName:"p"},"443"),"\u756a\u30dd\u30fc\u30c8\u3092 Docker Compose \u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u5185\u3067\u7a3c\u50cd\u3059\u308b nginx \u3078\u63a5\u7d9a\u3057\u3001\u3053\u3053\u3067\u5916\u90e8\u304b\u3089\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u308b\u3002"),(0,a.kt)("p",null,"\u3053\u306e nginx \u304b\u3089",(0,a.kt)("inlineCode",{parentName:"p"},"proxy_pass"),"\u306b\u3088\u308a\u3001\u540c\u3058\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u5185\u306b\u3042\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b3\u30f3\u30c6\u30ca\u3078\u8ee2\u9001\u3059\u308b\u3002"),(0,a.kt)("p",null,"\u5916\u90e8\u3068\u306f Let's Encrypt \u306e\u8a3c\u660e\u66f8\u3092\u5229\u7528\u3057\u305f HTTPS \u63a5\u7d9a\u3092\u884c\u3046\u3002"),(0,a.kt)("p",null,"Certbot \u306f\u3072\u3068\u307e\u305a\u73fe\u884c\u3068\u540c\u3058\u304f EPEL \u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u3082\u306e\u3092\u5229\u7528\u3059\u308b\u3002"),(0,a.kt)("h2",{id:"\u5404\u7a2e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb"},"\u5404\u7a2e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb"),(0,a.kt)("p",null,"\u30d5\u30a1\u30a4\u30eb\u306e\u914d\u7f6e\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3068\u3059\u308b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"\u251c\u2500\u2500 docker-compose.yaml\n\u251c\u2500\u2500 nginx\n\u2502   \u2514\u2500\u2500 conf.d\n\u2502       \u2514\u2500\u2500 shiori.example.com\n\u2514\u2500\u2500 shiori\n    \u251c\u2500\u2500 archive\n    \u251c\u2500\u2500 shiori.db\n    \u2514\u2500\u2500 thumb\n")),(0,a.kt)("h3",{id:"docker-composeyaml"},(0,a.kt)("inlineCode",{parentName:"h3"},"docker-compose.yaml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'version: "3"\n\nservices:\n  nginx:\n    image: nginx:1.23.3\n    container_name: nginx\n    volumes:\n      - /etc/letsencrypt:/etc/letsencrypt:ro\n      - /var/www:/var/www:ro\n      - ./nginx/conf.d:/etc/nginx/conf.d:ro\n    ports:\n      - 80:80\n      - 443:443\n    restart: always\n\n  shiori:\n    image: ghcr.io/go-shiori/shiori:v1.5.3-35-g27c2fc7\n    container_name: shiori\n    volumes:\n      - "${HOME}/shiori:/shiori"\n    environment:\n      - PUID=1000\n      - PGID=1000\n    restart: always\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/etc/letsencrypt"),"\u306f Let's Encrypt \u306e\u8a3c\u660e\u66f8\u95a2\u9023\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u53c2\u7167\u3059\u308b\u305f\u3081\u306b\u30de\u30a6\u30f3\u30c8\u3059\u308b\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/var/www"),"\u306f",(0,a.kt)("inlineCode",{parentName:"p"},"certbot"),"\u306b\u3088\u308b\u8a3c\u660e\u66f8\u66f4\u65b0\u306e\u969b\u3001",(0,a.kt)("inlineCode",{parentName:"p"},".well-known"),"\u3092",(0,a.kt)("inlineCode",{parentName:"p"},"nginx"),"\u304b\u3089\u5916\u90e8\u306b\u516c\u958b\u3059\u308b\u305f\u3081\u306b\u30de\u30a6\u30f3\u30c8\u3059\u308b\u3002"),(0,a.kt)("p",null,"\u3053\u306e\u66f4\u65b0\u306e\u305f\u3081\u306b\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"80"),"\u756a\u30dd\u30fc\u30c8\u3082\u30d0\u30a4\u30f3\u30c9\u3059\u308b\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/nginx/conf.d"),"\u306b\u306f\u5f8c\u8ff0\u3059\u308b\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u914d\u7f6e\u3059\u308b\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"shiori"),"\u306e\u90e8\u5206\u306b\u3064\u3044\u3066\u306f\u3001\u3082\u3068\u3082\u3068\u4e0b\u8a18\u306e\u3088\u3046\u306a\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u7a3c\u50cd\u3057\u3066\u3044\u305f\u3082\u306e\u304b\u3089\u79fb\u884c\u3057\u305f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'docker run --rm -d /\n  --restart=always \\\n  --name shiori \\\n  -v "$(pwd)/shiori:/shiori" \\\n  -u "$(id -u):$(id -g)" \\\n  -p 8080:8080 \\\n  shiori:v1.5.3-35-g27c2fc7\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"nginx"),"\u304c\u540c\u4e00\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306b\u306a\u308b\u305f\u3081\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"shiori"),"\u306e",(0,a.kt)("inlineCode",{parentName:"p"},"8080"),"\u756a\u30dd\u30fc\u30c8\u306f\u5916\u90e8\u306b\u516c\u958b(",(0,a.kt)("inlineCode",{parentName:"p"},"publish"),")\u306f\u3057\u306a\u3044\u3002"),(0,a.kt)("h3",{id:"nginx-\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb"},"nginx \u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb"),(0,a.kt)("p",null,"nginx \u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306f\u4ee5\u4e0b\u306e\u901a\u308a",(0,a.kt)("inlineCode",{parentName:"p"},"https://shiori.example.com"),"\u3067\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u8a2d\u5b9a\u3068\u3059\u308b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},"server {\n        listen 80;\n        server_name shiori.example.com;\n\n        location ^~ /.well-known {\n                alias           /var/www/.well-known;\n        }\n\n        location / {\n                return 301 https://$host$request_uri;\n        }\n}\n\nserver {\n        server_name shiori.example.com;\n        listen 443 http2 ssl;\n        \x3c!-- \u5404\u7a2e\u8a2d\u5b9a --\x3e\n\n        ssl_certificate         /etc/letsencrypt/live/shiori.example.com/fullchain.pem;\n        ssl_certificate_key     /etc/letsencrypt/live/shiori.example.com/privkey.pem;\n\n        location / {\n                proxy_pass      http://shiori:8080/;\n                proxy_set_header HOST $host;\n                proxy_set_header X-Forwarded-Host $host;\n                proxy_set_header X-Real-IP $remote_addr;\n                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n\n                \x3c!-- \u5404\u7a2e\u8a2d\u5b9a --\x3e\n        }\n}\n")),(0,a.kt)("h3",{id:"certbot"},"Certbot"),(0,a.kt)("p",null,"Certbot \u306b\u3088\u308b\u8a3c\u660e\u66f8\u306e\u81ea\u52d5\u66f4\u65b0\u3092",(0,a.kt)("inlineCode",{parentName:"p"},"certbot-renew.timer"),"\u306b\u3066\u884c\u3063\u3066\u3044\u305f\u305f\u3081\u3001Hook \u306e\u8a2d\u5b9a\u3082\u4e0b\u8a18\u306e\u901a\u308a\u5909\u66f4\u3059\u308b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudoedit /etc/letsencrypt/renewal-hooks/post/reload-nginx.sh\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"  #!/bin/bash\n\n- systemctl reload nginx\n+ docker exec nginx nginx -s reload\n")),(0,a.kt)("h2",{id:"\u52d5\u4f5c\u78ba\u8a8d"},"\u52d5\u4f5c\u78ba\u8a8d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u65e2\u5b58\u306eWeb\u30b5\u30fc\u30d0\u306e\u505c\u6b62\nsudo systemctl stop nginx\n\n# \u65e2\u5b58\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b3\u30f3\u30c6\u30ca\u306e\u505c\u6b62\ndocker stop shiori\n\ndocker compose up -d\n\n# \u8a3c\u660e\u66f8\u306e\u66f4\u65b0\u3001Hook\u306e\u78ba\u8a8d\nsudo certbot --dry-run renew\n")))}d.isMDXComponent=!0},8687:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/outline-f05dd25907d1df69d1dff55ca71b3711.png"}}]);