"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[3955],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,g=f["".concat(s,".").concat(m)]||f[m]||c[m]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3067:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={},i="Migrating from FreeNAS",l={unversionedId:"further-configuration/migrating-from-freenas",id:"further-configuration/migrating-from-freenas",title:"Migrating from FreeNAS",description:"FreeNAS uses ZFS as it's core storage filesystem. ZFS on Linux is supported natively in Ubuntu, so importing FreeNAS zpools is easy.",source:"@site/docs/further-configuration/migrating-from-freenas.md",sourceDirName:"further-configuration",slug:"/further-configuration/migrating-from-freenas",permalink:"/docs/further-configuration/migrating-from-freenas",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/further-configuration/migrating-from-freenas.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hardware",permalink:"/docs/further-configuration/hardware"},next:{title:"NFS Exports",permalink:"/docs/further-configuration/nfs-exports"}},s={},u=[],p={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"migrating-from-freenas"},"Migrating from FreeNAS"),(0,o.kt)("p",null,"FreeNAS uses ZFS as it's core storage filesystem. ",(0,o.kt)("a",{parentName:"p",href:"https://zfsonlinux.org/"},"ZFS on Linux")," is supported natively in Ubuntu, so importing FreeNAS zpools is easy."),(0,o.kt)("p",null,"Once you have an Ubuntu Server installation up and running:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Ensure you have a working backup of your FreeNAS data."),(0,o.kt)("li",{parentName:"ol"},"Check that the working backup you think you have actually works."),(0,o.kt)("li",{parentName:"ol"},"Shut down your Ubuntu Server, connect the disks, start it back up."),(0,o.kt)("li",{parentName:"ol"},"SSH to the server and run ",(0,o.kt)("inlineCode",{parentName:"li"},"zpool list")," to determine available ZFS pools."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"zpool import <pool_name>")," against each of the pools you want to attach."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"chown -R root:root /mnt/<pool_name>")," to fix the ownership of the data."),(0,o.kt)("li",{parentName:"ol"},"Update your Ansible-NAS configuration to reflect the paths of the ZFS zpools. You'll likely want to point ",(0,o.kt)("inlineCode",{parentName:"li"},"docker_home")," at your ZFS zpools.")))}c.isMDXComponent=!0}}]);