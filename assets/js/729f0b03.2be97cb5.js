"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[7421],{1077:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=t(5893),n=t(1151);const r={title:"Code Server"},i=void 0,c={id:"applications/development-tools/code-server",title:"Code Server",description:"Homepage//code.visualstudio.com/",source:"@site/docs/applications/development-tools/code-server.md",sourceDirName:"applications/development-tools",slug:"/applications/development-tools/code-server",permalink:"/docs/applications/development-tools/code-server",draft:!1,unlisted:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/main/website/docs/applications/development-tools/code-server.md",tags:[],version:"current",frontMatter:{title:"Code Server"},sidebar:"tutorialSidebar",previous:{title:"Development Tools",permalink:"/docs/category/development-tools"},next:{title:"Drone CI",permalink:"/docs/applications/development-tools/drone_ci"}},a={},d=[{value:"Usage",id:"usage",level:2},{value:"Specific Configuration",id:"specific-configuration",level:2}];function l(e){const o={a:"a",code:"code",h2:"h2",p:"p",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:["Homepage: ",(0,s.jsx)(o.a,{href:"https://code.visualstudio.com/",children:"https://code.visualstudio.com/"})]}),"\n",(0,s.jsxs)(o.p,{children:["Code Server: ",(0,s.jsx)(o.a,{href:"https://docs.linuxserver.io/images/docker-code-server",children:"https://docs.linuxserver.io/images/docker-code-server"})]}),"\n",(0,s.jsx)(o.p,{children:"Run VSCode on you NAS, accessible through the browser. This web based IDE works exactly like VSCode Desktop would, but with the freedom of using it from anywhere."}),"\n",(0,s.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(o.p,{children:["Set ",(0,s.jsx)(o.code,{children:"code_server_enabled: true"})," in your ",(0,s.jsx)(o.code,{children:"inventories/<your_inventory>/group_vars/nas.yml"})," file."]}),"\n",(0,s.jsxs)(o.p,{children:["Code Server's web interface can be found at ",(0,s.jsx)(o.a,{href:"http://ansible_nas_host_or_ip:8443",children:"http://ansible_nas_host_or_ip:8443"})]}),"\n",(0,s.jsx)(o.h2,{id:"specific-configuration",children:"Specific Configuration"}),"\n",(0,s.jsxs)(o.p,{children:["Code Server uses the ",(0,s.jsx)(o.code,{children:"code_root"})," folder to store its projects, by default defined as a zfs dataset on ",(0,s.jsx)(o.code,{children:"samba_shares_root"}),"."]})]})}function p(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,o,t)=>{t.d(o,{Z:()=>c,a:()=>i});var s=t(7294);const n={},r=s.createContext(n);function i(e){const o=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);