import{e as M,j as U,k as Z,l as G,q,s as Q,t as X,u as ee}from"./chunk-ZMDNU2WR.js";import{e as S}from"./chunk-FDU6CHQW.js";import{j as K}from"./chunk-LAWCVWQS.js";import{d as J,e as Y}from"./chunk-26DKBURJ.js";import{a as H}from"./chunk-Y5WJVSAE.js";import{$ as f,Ab as j,Bb as p,Cb as y,Eb as I,Fb as w,Gb as k,M as T,Na as A,Nb as P,Ob as O,Pb as z,R as L,Ra as s,Sa as h,W as B,db as _,f as D,gb as r,ja as d,ka as m,kb as v,lb as l,lc as $,mb as c,nb as g,ob as N,pb as R,ra as V,rb as b,sb as u,tb as a,tc as W,uc as C}from"./chunk-5S7QP25W.js";function pe(t,n){if(t&1){let e=b();l(0,"div",6)(1,"p-button",7),u("onClick",function(){d(e);let o=a();return m(o.toggleSidebar())}),c()()}if(t&2){let e=a();s(),v(e.classList),r("rounded",!0)("raised",!0)("icon",e.buttonIcon)("disabled",!e.buttonActive)}}function de(t,n){if(t&1&&(l(0,"span",8),p(1),P(2,"transloco"),c()),t&2){let e=n.$implicit;s(),y(O(2,1,e.label))}}function me(t,n){if(t&1){let e=b();l(0,"a",11),u("click",function(){d(e);let o=a(2);return m(o.toggleSidebar(!1))}),g(1,"span"),l(2,"span",12),p(3),P(4,"transloco"),c()()}if(t&2){let e=a().$implicit;r("routerLink",e.routerLink),s(),v(e.icon),s(2),y(O(4,4,e.label))}}function ue(t,n){if(t&1){let e=b();l(0,"a",13),u("click",function(){d(e);let o=a(2);return m(o.toggleSidebar(!1))}),g(1,"span"),l(2,"span",12),p(3),P(4,"transloco"),c(),g(5,"div",14),c()}if(t&2){let e=a().$implicit;r("href",e.url,A),s(),v(e.icon),s(2),y(O(4,4,e.label))}}function _e(t,n){if(t&1&&_(0,me,5,6,"a",9)(1,ue,6,6,"a",10),t&2){let e=n.$implicit;r("ngIf",e.routerLink),s(),r("ngIf",e.url)}}var te=class t{menuItems;possibleClasses=[["sidebar","sidebar-inactive"],["sidebar","sidebar-active"]];possibleButtons=["pi pi-ellipsis-v","pi pi-arrow-left"];classList=this.possibleClasses[0];buttonIcon=this.possibleButtons[0];sidebarActive=!1;buttonActive=!0;toggleSidebar(n){this.buttonActive&&(this.buttonActive=!1,n===!0||n===!1?this.sidebarActive=n:this.sidebarActive=!this.sidebarActive,this.classList=this.possibleClasses[this.sidebarActive?1:0],this.buttonIcon=this.possibleButtons[this.sidebarActive?1:0],setTimeout(()=>{this.buttonActive=!0},150))}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=f({type:t,selectors:[["app-sidebar"]],inputs:{menuItems:"menuItems"},decls:8,vars:9,consts:[[1,"flex","fixed","z-5","pb-8"],["styleClass","w-full h-full",3,"model"],["pTemplate","start"],["pTemplate","submenuheader"],["pTemplate","item"],["size","small","severity","secondary",1,"open-sidebar",3,"onClick","rounded","raised","icon","disabled"],[1,"w-full","inline-flex","justify-content-end","pr-3"],["size","small","severity","secondary",1,"close-sidebar",3,"onClick","rounded","raised","icon","disabled"],[1,"text-primary","font-bold"],["routerLinkActive","router-link-active","pRipple","","class","flex align-items-center p-menuitem-link router-link",3,"routerLink","click",4,"ngIf"],["pRipple","","target","_blank","class","flex align-items-center p-menuitem-link router-link",3,"href","click",4,"ngIf"],["routerLinkActive","router-link-active","pRipple","",1,"flex","align-items-center","p-menuitem-link","router-link",3,"click","routerLink"],[1,"ml-2"],["pRipple","","target","_blank",1,"flex","align-items-center","p-menuitem-link","router-link",3,"click","href"],[1,"pi","pi-external-link","ml-auto","text-xs"]],template:function(e,i){e&1&&(l(0,"div",0)(1,"aside")(2,"nav")(3,"p-menu",1),_(4,pe,2,6,"ng-template",2)(5,de,3,3,"ng-template",3)(6,_e,2,2,"ng-template",4),c()()()(),l(7,"p-button",5),u("onClick",function(){return i.toggleSidebar()}),c()),e&2&&(v(i.classList),s(3),r("model",i.menuItems),s(4),v(i.classList),r("rounded",!0)("raised",!0)("icon",i.buttonIcon)("disabled",!i.buttonActive))},dependencies:[C,J,Y,M,K,q,G],styles:["nav[_ngcontent-%COMP%]{position:sticky;left:0;width:100%;-webkit-user-select:none;user-select:none;transition:transform .4s cubic-bezier(.05,.74,.2,.99),opacity .3s;display:flex;flex-direction:column;flex:0 0 250px;margin-right:2rem;overflow:auto;padding:0 1rem 0 0;flex-grow:1;list-style:none;word-break:break-word;word-wrap:break-word;max-width:fit-content;height:calc(100vh - var(--topPaddingBecauseOfMenu) - 2rem);height:calc(100dvh - var(--topPaddingBecauseOfMenu))}@media print{.sidebar[_ngcontent-%COMP%]{display:none!important}}@media (width < 576px){nav[_ngcontent-%COMP%]{max-width:calc(90vw - 16px);width:calc(90vw - 16px);margin-right:0}}@media (min-width:576px){nav[_ngcontent-%COMP%]{max-width:504px;width:504px}}@media (min-width:768px){nav[_ngcontent-%COMP%]{max-width:296.5px;width:296.5px;top:6rem}}@media (min-width:992px){nav[_ngcontent-%COMP%]{max-width:calc((970px * (4/12)) - 16px);width:calc((970px * (4/12)) - 16px)}}@media (min-width:1200px){nav[_ngcontent-%COMP%]{max-width:276.5px;width:276.5px}}@media screen and (width >=768px){.router-link[_ngcontent-%COMP%]{transition:all .25s ease-in!important}}.router-link[_ngcontent-%COMP%]{border-left:1px solid var(--surface-300)}.router-link-active[_ngcontent-%COMP%]{color:var(--brandStrokeCompoundPressed);border-left-color:var(--brandStrokeCompoundPressed)}@media screen and (width < 768px){@keyframes fadeoutleft{0%{opacity:1;transform:translate(0);transition:transform .12s cubic-bezier(0,0,.2,1),opacity .12s cubic-bezier(0,0,.2,1)}to{opacity:0;transform:translate(-100%)}}div.sidebar.sidebar-inactive[_ngcontent-%COMP%]{visibility:hidden;transition:all .15s;animation:fadeoutleft .15s linear}@keyframes fadeinleft{0%{opacity:0;transform:translate(-100%);transition:transform .12s cubic-bezier(0,0,.2,1),opacity .12s cubic-bezier(0,0,.2,1)}to{opacity:1;transform:translate(0)}}div.sidebar.sidebar-active[_ngcontent-%COMP%]{visibility:visible;transition:all .15s linear;animation:fadeinleft .15s linear}p-button.sidebar[_ngcontent-%COMP%]{display:inherit;box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f;transition:background-color .2s,color .2s,box-shadow .2s,opacity .2s;border-radius:50%}p-button.sidebar.open-sidebar[_ngcontent-%COMP%]{display:flex!important;position:fixed;top:calc(25vh - 5rem);top:25dvh;left:0;z-index:10000}@media (prefers-color-scheme: light){p-button.sidebar.open-sidebar[_ngcontent-%COMP%]{opacity:.7}}@media (prefers-color-scheme: dark){p-button.sidebar.open-sidebar[_ngcontent-%COMP%]{opacity:.7}}p-button.sidebar.open-sidebar[_ngcontent-%COMP%]:hover{opacity:1}p-button.sidebar-active.open-sidebar[_ngcontent-%COMP%]{visibility:hidden!important}p-button.sidebar-active.close-sidebar[_ngcontent-%COMP%]{display:inherit!important}}@media screen and (width >=768px){div.sidebar[_ngcontent-%COMP%]{visibility:visible}p-button.sidebar[_ngcontent-%COMP%]{display:none!important}}div.sidebar[_ngcontent-%COMP%]{overflow-y:auto;height:calc(100vh - var(--topPaddingBecauseOfMenu));height:calc(100dvh - var(--topPaddingBecauseOfMenu))}"]})};function be(t,n){if(t&1&&g(0,"pre",2),t&2){let e=a();r("highlight",e.example)("language",e.language)}}function xe(t,n){t&1&&g(0,"p-skeleton",3)}var re=class t{constructor(n,e){this.translocoService=n;this.httpClient=e}examplePath="";language="";example="";langChangeSubscription;ngOnInit(){this.destroy$=new D,this.langChangeSubscription=this.translocoService.langChanges$.pipe(T(this.destroy$)).subscribe(n=>{this.example="";let e=`assets/examples/${n}/${this.examplePath}.${this.language}`;this.httpClient.get(e,{responseType:"text"}).pipe(T(this.destroy$)).subscribe(i=>{this.example=i})})}ngOnDestroy(){this.destroy$?.next(),this.destroy$?.complete(),this.langChangeSubscription&&this.langChangeSubscription.unsubscribe()}destroy$;static \u0275fac=function(e){return new(e||t)(h(U),h(H))};static \u0275cmp=f({type:t,selectors:[["app-code-example"]],inputs:{examplePath:"examplePath",language:"language"},decls:3,vars:2,consts:[["skeleton",""],[3,"highlight","language",4,"ngIf","ngIfElse"],[3,"highlight","language"],["height","20em"]],template:function(e,i){if(e&1&&_(0,be,1,2,"pre",1)(1,xe,1,0,"ng-template",null,0,z),e&2){let o=j(2);r("ngIf",i.example)("ngIfElse",o)}},dependencies:[C,S,Q],styles:["pre[_ngcontent-%COMP%]{display:block;margin-top:0;margin-bottom:1rem;overflow:auto;font-size:.875em;padding:10.5px;line-height:1.42857143;color:var(--neutralForeground2Rest);word-break:break-all;word-wrap:break-word;background-color:var(--neutralBackground1Rest);border:2px solid var(--neutralStroke1Rest);border-radius:4px}"]})};var F=class{constructor(n,e){this._document=e;let i=this._textarea=this._document.createElement("textarea"),o=i.style;o.position="fixed",o.top=o.opacity="0",o.left="-999em",i.setAttribute("aria-hidden","true"),i.value=n,i.readOnly=!0,(this._document.fullscreenElement||this._document.body).appendChild(i)}copy(){let n=this._textarea,e=!1;try{if(n){let i=this._document.activeElement;n.select(),n.setSelectionRange(0,n.value.length),e=this._document.execCommand("copy"),i&&i.focus()}}catch{}return e}destroy(){let n=this._textarea;n&&(n.remove(),this._textarea=void 0)}},ae=(()=>{class t{constructor(e){this._document=e}copy(e){let i=this.beginCopy(e),o=i.copy();return i.destroy(),o}beginCopy(e){return new F(e,this._document)}static{this.\u0275fac=function(i){return new(i||t)(B($))}}static{this.\u0275prov=L({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function he(t,n){if(t&1){let e=b();l(0,"p-tabPanel",5)(1,"pre"),p(2,"              "),g(3,"span",7),p(4,`
              `),l(5,"div",8),p(6,`
                `),l(7,"p-button",9),u("onClick",function(){d(e);let o=a(4);return m(o.copy())}),c(),p(8,`
              `),c(),p(9,`
            `),c()()}if(t&2){let e=n.$implicit,i=a(3).$implicit,o=a();r("header",e.name),s(3),r("highlight",e.text)("language",e.lang)("classList",e.class),s(4),r("label",i("Copy"))("loading",o.copying)}}function ve(t,n){if(t&1){let e=b();l(0,"p-tabPanel",5)(1,"p-tabView",6),k("activeIndexChange",function(o){d(e);let x=a(3);return w(x.installerFlavorIndex,o)||(x.installerFlavorIndex=o),m(o)}),u("activeIndexChange",function(){d(e);let o=a(3);return m(o.onTabsChange())}),_(2,he,10,6,"p-tabPanel",4),c()()}if(t&2){let e=n.$implicit,i=a(3);r("header",e.name),s(),r("scrollable",!0),I("activeIndex",i.installerFlavorIndex),s(),r("ngForOf",e.instructions)}}function Ce(t,n){if(t&1){let e=b();l(0,"div",2)(1,"p-tabView",3),k("activeIndexChange",function(o){d(e);let x=a(2);return w(x.versionIndex,o)||(x.versionIndex=o),m(o)}),u("activeIndexChange",function(){d(e);let o=a(2);return m(o.onTabsChange())}),_(2,ve,3,4,"p-tabPanel",4),c()()}if(t&2){let e=a(2);s(),I("activeIndex",e.versionIndex),s(),r("ngForOf",e.instructions)}}function ye(t,n){if(t&1){let e=b();l(0,"p-tabPanel",5)(1,"pre"),p(2,"          "),g(3,"span",7),p(4,`
            `),l(5,"div",8),p(6,`
              `),l(7,"p-button",9),u("onClick",function(){d(e);let o=a(3);return m(o.copy())}),c(),p(8,`
            `),c(),p(9,`
          `),c()()}if(t&2){let e=n.$implicit,i=a(2).$implicit,o=a();r("header",e.name),s(3),r("highlight",e.text)("language",e.lang)("classList",e.class),s(4),r("label",i("Copy"))("loading",o.copying)}}function Ie(t,n){if(t&1){let e=b();l(0,"div",2)(1,"p-tabView",6),k("activeIndexChange",function(o){d(e);let x=a(2);return w(x.installerFlavorIndex,o)||(x.installerFlavorIndex=o),m(o)}),u("activeIndexChange",function(){d(e);let o=a(2);return m(o.onTabsChange())}),_(2,ye,10,6,"p-tabPanel",4),c()()}if(t&2){let e=a(2);s(),r("scrollable",!0),I("activeIndex",e.installerFlavorIndex),s(),r("ngForOf",e.instructions[0].instructions)}}function we(t,n){if(t&1&&(N(0),_(1,Ce,3,2,"div",1)(2,Ie,3,3,"div",1),R()),t&2){let e=a();s(),r("ngIf",e.instructions.length>1),s(),r("ngIf",e.instructions.length===1)}}var se=class t{constructor(n){this.clipboard=n}instructions=[];versionIndex=1;versionIndexCnage=new V;installerFlavorIndex=2;installerFlavorIndexChange=new V;copying=!1;ngOnInit(){let n=localStorage.getItem(this.storageKey);if(n){let e=JSON.parse(n);e&&(this.versionIndex=e.versionIndex,this.installerFlavorIndex=e.installerFlavorIndex)}}copy(){this.copying=!0;let n=this.clipboard.beginCopy(this.instructions[this.versionIndex].instructions[this.installerFlavorIndex].text),e=3,i=()=>{!n.copy()&&--e>0?setTimeout(i,100):(n.destroy(),this.copying=!1)};i()}onTabsChange(){let n={versionIndex:this.versionIndex,installerFlavorIndex:this.installerFlavorIndex};this.installerFlavorIndexChange.emit(this.installerFlavorIndex),this.versionIndexCnage.emit(this.versionIndex),localStorage.setItem(this.storageKey,JSON.stringify(n))}storageKey="InstallInstructionsSettings";static \u0275fac=function(e){return new(e||t)(h(ae))};static \u0275cmp=f({type:t,selectors:[["app-install-instructions"]],inputs:{instructions:"instructions",versionIndex:"versionIndex",installerFlavorIndex:"installerFlavorIndex"},outputs:{versionIndexCnage:"versionIndexCnage",installerFlavorIndexChange:"installerFlavorIndexChange"},decls:1,vars:0,consts:[[4,"transloco"],["class","card",4,"ngIf"],[1,"card"],[3,"activeIndexChange","activeIndex"],[3,"header",4,"ngFor","ngForOf"],[3,"header"],[3,"activeIndexChange","scrollable","activeIndex"],[3,"highlight","language","classList"],[1,"copyDiv"],["size","small","icon","pi pi-copy","styleClass","copyDiv",3,"onClick","label","loading"]],template:function(e,i){e&1&&_(0,we,3,2,"ng-container",0)},dependencies:[W,C,M,Z,S,ee,X],styles:['.netCli[_ngcontent-%COMP%]:before{content:"> "}.packageManager[_ngcontent-%COMP%]:before{content:"PM> "}.PackageReference[_ngcontent-%COMP%]:before{content:""}pre[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem;overflow:auto;font-size:.875em;padding:10.5px;line-height:1.42857143;color:var(--neutralForeground2Rest);word-break:break-word;word-wrap:break-word;background-color:var(--neutralBackground1Rest);border:2px solid var(--neutralStroke1Rest);border-radius:4px;display:flex;vertical-align:middle;justify-content:space-between}pre[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{white-space:pre-wrap}.copyButton[_ngcontent-%COMP%]{display:inline-block;font-style:normal;font-weight:400}.copyDiv[_ngcontent-%COMP%]{display:flex}.card[_ngcontent-%COMP%]{padding:.5rem 1rem}@media (width < 576px){.card[_ngcontent-%COMP%]{padding:.2rem .3rem}}']})},le=class{constructor(n,e,i){this.name=n;this.text=e;this.lang=i;switch(this.name){case".NET CLI":this.class="netCli";break;case"Package Manager":this.class="packageManager";break;case"PackageReference":this.class="PackageReference";break}}class};export{te as a,re as b,se as c,le as d};