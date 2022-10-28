"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[217],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=n,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3500:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={title:"Staff privileges"},o=void 0,l={unversionedId:"staff/powers",id:"staff/powers",title:"Staff privileges",description:"OCF staff are members of the OCF who contribute their time as volunteers, and",source:"@site/docs/staff/powers.md",sourceDirName:"staff",slug:"/staff/powers",permalink:"/docs/staff/powers",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/staff/powers.md",tags:[],version:"current",frontMatter:{title:"Staff privileges"},sidebar:"tutorialSidebar",previous:{title:"Staff policy",permalink:"/docs/staff/policies/staff-policy"},next:{title:"Additional documentation",permalink:"/docs/staff/private"}},s={},c=[{value:"Staff",id:"staff",level:2},{value:"<code>/root</code> principal",id:"root-principal",level:3},{value:"Technical Managers",id:"technical-managers",level:2},{value:"<code>ocfroot</code> group",id:"ocfroot-group",level:3},{value:"<code>/admin</code> principal",id:"admin-principal",level:3},{value:"Other privileges",id:"other-privileges",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"OCF staff are members of the OCF who contribute their time as volunteers, and\nare given responsibilities and privileges to maintain and improve the OCF's\ninfrastructure. There are many powers granted to staff, which for\nsimplification have been consolidated into a tiered structure."),(0,n.kt)("p",null,"Each tier includes the privileges of the preceding tiers."),(0,n.kt)("p",null,"Staff privileges are distinct from the Board of Directors and Officers, which\nhold legislative and executive powers respectively, although in practice\nvirtually all Directors are staffers."),(0,n.kt)("h2",{id:"staff"},"Staff"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"group ocfstaff")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"receive ",(0,n.kt)("inlineCode",{parentName:"li"},"staff@ocf")," mail (including staff discussions and announcements)"),(0,n.kt)("li",{parentName:"ul"},"can process group account requests"),(0,n.kt)("li",{parentName:"ul"},"can access and process ",(0,n.kt)("a",{parentName:"li",href:"https://rt.ocf.berkeley.edu/"},"Request Tracker"),"\ntickets"),(0,n.kt)("li",{parentName:"ul"},"receive ",(0,n.kt)("inlineCode",{parentName:"li"},"wheel@ocf")," mail (including discussions with technical jargon)"),(0,n.kt)("li",{parentName:"ul"},"can change print quotas"),(0,n.kt)("li",{parentName:"ul"},"can login to all servers"),(0,n.kt)("li",{parentName:"ul"},"can edit shared staff files such as ",(0,n.kt)("inlineCode",{parentName:"li"},"User_Info")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"motd")," (message of the\nday on public servers)"),(0,n.kt)("li",{parentName:"ul"},"can directly edit the OCF website and commit to some other repositories,\nsuch as slackbridge, templates, and utils, and are expected to maintain them"),(0,n.kt)("li",{parentName:"ul"},"must hold ",(0,n.kt)("a",{parentName:"li",href:"/staff-hours"},"staff hours"),", alongside other staffers"),(0,n.kt)("li",{parentName:"ul"},"must join a staffer family")),(0,n.kt)("h3",{id:"root-principal"},(0,n.kt)("inlineCode",{parentName:"h3"},"/root")," principal"),(0,n.kt)("p",null,"In order to reset user passwords, staff must possess a ",(0,n.kt)("inlineCode",{parentName:"p"},"/root")," principal.\nBefore RSOs became able to reset their passwords online in 2015, this principal\nwas widely given out. Since then, it has become much less necessary to have for\nstaff hours. It is now given out as needed."),(0,n.kt)("h2",{id:"technical-managers"},"Technical Managers"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"group ocfroot")),(0,n.kt)("p",null,'The most technical and "on-call" staff members are given sudo access (root\nprivileges) on all servers and the ability to modify LDAP/Kerberos directly.'),(0,n.kt)("p",null,"The Site Manager(s) and Deputy Site Manager(s) are always Technical Managers.\nOther Deputy Managers and the General Manager(s) often happen to be Technical\nManagers as well."),(0,n.kt)("h3",{id:"ocfroot-group"},(0,n.kt)("inlineCode",{parentName:"h3"},"ocfroot")," group"),(0,n.kt)("p",null,"You must be in the ",(0,n.kt)("inlineCode",{parentName:"p"},"ocfroot")," LDAP group in order to use ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo")," on most\nservers, other than desktops and your own staff VM."),(0,n.kt)("p",null,"The ability to become root via sudo on machines other than your staff VM\nrequires the existence of a ",(0,n.kt)("inlineCode",{parentName:"p"},"/root")," principal (see above)."),(0,n.kt)("h3",{id:"admin-principal"},(0,n.kt)("inlineCode",{parentName:"h3"},"/admin")," principal"),(0,n.kt)("p",null,"In order to modify LDAP or Kerberos, staff must possess a ",(0,n.kt)("inlineCode",{parentName:"p"},"/admin")," principal\nand it must be granted ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ocf/puppet/blob/master/modules/ocf_kerberos/files/kadmind.acl"},"Kerberos-editing rights in\nPuppet"),"."),(0,n.kt)("h3",{id:"other-privileges"},"Other privileges"),(0,n.kt)("p",null,"Technical Managers also have the following privileges:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Being in the Admin group in the OCF org on GitHub, which grants the ability\nto directly commit to any repository"),(0,n.kt)("li",{parentName:"ul"},"Access to the RT admin interface"),(0,n.kt)("li",{parentName:"ul"},"Admin privileges to the OCF status blog")),(0,n.kt)("p",null,"Some Technical Managers, particularly the DSMs and SMs, may additionally have\nthe following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Being an Owner of the GitHub OCF org"),(0,n.kt)("li",{parentName:"ul"},"Super admin status on Google Apps"),(0,n.kt)("li",{parentName:"ul"},"Chanop status on IRC"),(0,n.kt)("li",{parentName:"ul"},"Services Root Adminship for Anope"),(0,n.kt)("li",{parentName:"ul"},"Access to the firewall configuration interface"),(0,n.kt)("li",{parentName:"ul"},"Being a Departmental Certificate Administrator for the ",(0,n.kt)("a",{parentName:"li",href:"https://cert-manager.com/customer/incommon"},"InCommon certificate\nservice")),(0,n.kt)("li",{parentName:"ul"},"Knowledge of the root password"),(0,n.kt)("li",{parentName:"ul"},"Access to ",(0,n.kt)("a",{parentName:"li",href:"https://netreg.berkeley.edu/"},"NetReg")),(0,n.kt)("li",{parentName:"ul"},"Access to view Google Analytics data for ocfweb")))}u.isMDXComponent=!0}}]);