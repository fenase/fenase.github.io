import{f as nt,g as P,h as ie,m as ot,n as ne,p as at,u as rt}from"./chunk-EHK27NWS.js";import{a as ae,c as x,d as ct,e as pt,g as mt,i as _t,j as vt,k as yt,m as Se,n as Ae,o as bt,q as It}from"./chunk-H6C56DNL.js";import{b as N,e as lt,f as oe,i as F,j as Te,l as D,p as Ct}from"./chunk-SDPEVNWQ.js";import{c as it,d as be,f as Ie,h as Me}from"./chunk-XAZLOLJU.js";import{a as dt,b as ut,c as gt,d as ft,e as ht,f as xe}from"./chunk-P7MUFZIV.js";import{b as st}from"./chunk-3GXU62WK.js";import{a as Je,b as et,c as ee,d as tt,e as te}from"./chunk-CEA2X6SI.js";import{Ab as Ge,Ba as O,Bb as ve,Cb as C,Db as _,Gb as E,Ib as W,Jb as We,Lb as M,Mb as T,Na as _e,Nb as ye,P as Pe,S,Sa as a,T as y,Ta as I,Ua as Ve,Ub as Y,V as ke,Wa as He,X as k,Xa as H,Y as R,Zb as Ye,_a as Z,_b as qe,aa as u,ab as L,ba as b,bb as Ze,bc as q,ea as je,eb as g,gb as m,hb as r,jc as Q,ka as j,la as B,lb as h,ma as A,mb as s,n as Re,na as w,nb as l,ob as p,pb as U,qb as $,qc as K,rb as Ue,rc as X,sa as Ce,sb as z,sc as J,ta as V,tb as G,tc as Qe,ub as d,uc as Ke,v as Oe,vc as Xe,wa as Be,xb as $e,zb as ze}from"./chunk-YLSOAPSM.js";import"./chunk-EQDQRRRY.js";var Ft=(()=>{class t extends ne{constructor(e,n,o){super(e,n,o)}ngOnDestroy(){this.flush()}static{this.\u0275fac=function(n){return new(n||t)(k(Q),k(P),k(ie))}}static{this.\u0275prov=S({token:t,factory:t.\u0275fac})}}return t})();function Dt(){return new ot}function Rt(t,i,e){return new rt(t,i,e)}var Mt=[{provide:ie,useFactory:Dt},{provide:ne,useClass:Ft},{provide:H,useFactory:Rt,deps:[ee,ne,V]}],we=[{provide:P,useFactory:()=>new at},{provide:O,useValue:"BrowserAnimations"},...Mt],Ot=[{provide:P,useClass:nt},{provide:O,useValue:"NoopAnimations"},...Mt],Tt=(()=>{class t{static withConfig(e){return{ngModule:t,providers:e.disableAnimations?Ot:we}}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=b({type:t})}static{this.\u0275inj=y({providers:we,imports:[te]})}}return t})();function xt(){return Z("NgEagerAnimations"),[...we]}var Pt="@",kt=(()=>{class t{constructor(e,n,o,c,v){this.doc=e,this.delegate=n,this.zone=o,this.animationType=c,this.moduleImpl=v,this._rendererFactoryPromise=null,this.scheduler=R(He,{optional:!0}),this.loadingSchedulerFn=R(jt,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-K73EJLNA.js").then(o=>o),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(e):n=e(),n.catch(o=>{throw new Pe(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:c})=>{this._engine=o(this.animationType,this.doc);let v=new c(this.delegate,this._engine,this.zone);return this.delegate=v,v})}createRenderer(e,n){let o=this.delegate.createRenderer(e,n);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let c=new Le(o);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(v=>{let Nt=v.createRenderer(e,n);c.use(Nt),this.scheduler?.notify(10)}).catch(v=>{c.use(o)}),c}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(n){Ve()}}static{this.\u0275prov=S({token:t,factory:t.\u0275fac})}}return t})(),Le=class{constructor(i){this.delegate=i,this.replay=[],this.\u0275type=1}use(i){if(this.delegate=i,this.replay!==null){for(let e of this.replay)e(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,e){return this.delegate.createElement(i,e)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,e){this.delegate.appendChild(i,e)}insertBefore(i,e,n,o){this.delegate.insertBefore(i,e,n,o)}removeChild(i,e,n){this.delegate.removeChild(i,e,n)}selectRootElement(i,e){return this.delegate.selectRootElement(i,e)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,e,n,o){this.delegate.setAttribute(i,e,n,o)}removeAttribute(i,e,n){this.delegate.removeAttribute(i,e,n)}addClass(i,e){this.delegate.addClass(i,e)}removeClass(i,e){this.delegate.removeClass(i,e)}setStyle(i,e,n,o){this.delegate.setStyle(i,e,n,o)}removeStyle(i,e,n){this.delegate.removeStyle(i,e,n)}setProperty(i,e,n){this.shouldReplay(e)&&this.replay.push(o=>o.setProperty(i,e,n)),this.delegate.setProperty(i,e,n)}setValue(i,e){this.delegate.setValue(i,e)}listen(i,e,n){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(i,e,n)),this.delegate.listen(i,e,n)}shouldReplay(i){return this.replay!==null&&i.startsWith(Pt)}},jt=new ke("");function St(t="animations"){return Z("NgAsyncAnimations"),je([{provide:H,useFactory:(i,e,n)=>new kt(i,e,n,t),deps:[Q,ee,V]},{provide:O,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var re=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=u({type:t,selectors:[["app-landing"]],decls:3,vars:3,template:function(e,n){e&1&&(s(0,"p"),C(1),M(2,"transloco"),l()),e&2&&(a(),_(T(2,1,"landing")))},dependencies:[x]})};var ce=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=u({type:t,selectors:[["app-page-not-found"]],decls:3,vars:3,template:function(e,n){e&1&&(s(0,"p"),C(1),M(2,"transloco"),l()),e&2&&(a(),_(T(2,1,"404pageText")))},dependencies:[x],styles:["p[_ngcontent-%COMP%]{font-size:3em;position:absolute;top:50%;left:50%;margin-right:-50%;transform:translate(-50%,-50%)}"]})};var Bt=[{path:"",component:re},{path:"projects",loadChildren:()=>import("./chunk-OOV2JYY2.js").then(t=>t.ProjectsModule)},{path:"about",loadChildren:()=>import("./chunk-P2BIZYZ6.js").then(t=>t.AboutModule)},{path:"**",pathMatch:"full",component:ce}],pe=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=b({type:t});static \u0275inj=y({imports:[xe.forRoot(Bt),xe]})};function Vt(t,i){if(t&1){let e=z();s(0,"p-button",1),G("onClick",function(){let o=j(e).$implicit,c=d();return B(c.changeLanguage(o.code))}),l()}if(t&2){let e=i.$implicit;r("rounded",!0)("text",!0)("ariaLabel",e.message)("raised",!0)("pTooltip",e.message)}}var me=class t{constructor(i){this.translocoService=i;let e=localStorage.getItem(this.storedLanguageKey);e||(e=mt()),e&&this.languagesList.map(n=>n.code).includes(e)&&this.changeLanguage(e)}storedLanguageKey="lang";languagesList=[{imgUrl:"https://flagcdn.com/gb.svg",code:"en",name:"English",shorthand:"ENG",message:"Switch language to English"},{imgUrl:"https://flagcdn.com/es.svg",code:"es",name:"Spanish",shorthand:"SPA",message:"Cambiar idioma a Espa\xF1ol"}];get availableLanguages(){return this.languagesList.filter(i=>i.code!=this.translocoService.getActiveLang())}changeLanguage(i){this.translocoService.setActiveLang(i),localStorage.setItem(this.storedLanguageKey,i)}static \u0275fac=function(e){return new(e||t)(I(ae))};static \u0275cmp=u({type:t,selectors:[["app-language-selector"]],decls:1,vars:1,consts:[["icon","pi pi-language",3,"rounded","text","ariaLabel","raised","pTooltip","onClick",4,"ngFor","ngForOf"],["icon","pi pi-language",3,"onClick","rounded","text","ariaLabel","raised","pTooltip"]],template:function(e,n){e&1&&g(0,Vt,1,5,"p-button",0),e&2&&r("ngForOf",n.availableLanguages)},dependencies:[X,Ct,yt]})};var Ut=t=>["pi",t];function $t(t,i){if(t&1&&(s(0,"span",7),C(1),l()),t&2){let e=d().$implicit;a(),_(e.shortcut)}}function zt(t,i){if(t&1&&p(0,"i",8),t&2){let e=d().root;r("ngClass",W(1,Ut,e?"pi-angle-down ml-2":"pi-angle-right ml-auto"))}}function Gt(t,i){if(t&1&&(s(0,"a",3),p(1,"span"),s(2,"span",4),C(3),M(4,"transloco"),l(),g(5,$t,2,1,"span",5)(6,zt,1,3,"i",6),l()),t&2){let e=i.$implicit;r("routerLink",e.routerLink),a(),h(e.icon),a(2),_(T(4,6,e.label)),a(2),r("ngIf",e.shortcut),a(),r("ngIf",e.items)}}function Wt(t,i){t&1&&(s(0,"div",9),p(1,"app-language-selector"),l())}var de=class t{constructor(i,e){this.router=i;this.activatedRoute=e}menuItems=[{label:"Home",icon:"pi pi-home",routerLink:"."},{label:"Projects",icon:"pi pi-search",routerLink:"/projects",items:[{label:"Big Excel Creator",icon:"pi pi-bolt",routerLink:"/projects/BigExcelCreator"},{label:"Snowflake Id Generator",icon:"pi pi-server",routerLink:"/projects/404"}]},{label:"aboutMe",icon:"pi pi-envelope",routerLink:"/about"}];static \u0275fac=function(e){return new(e||t)(I(gt),I(dt))};static \u0275cmp=u({type:t,selectors:[["app-topbar"]],decls:4,vars:1,consts:[[3,"model"],["pTemplate","item"],["pTemplate","end"],["routerLinkActive","router-link-active","pRipple","",1,"flex","align-items-center","p-menuitem-link",3,"routerLink"],[1,"ml-2"],["class","ml-auto border-1 surface-border border-round surface-100 text-xs p-1",4,"ngIf"],[3,"ngClass",4,"ngIf"],[1,"ml-auto","border-1","surface-border","border-round","surface-100","text-xs","p-1"],[3,"ngClass"],[1,"flex","align-items-center","gap-2"]],template:function(e,n){e&1&&(s(0,"nav")(1,"p-menubar",0),g(2,Gt,7,8,"ng-template",1)(3,Wt,2,0,"ng-template",2),l()()),e&2&&(a(),r("model",n.menuItems))},dependencies:[K,J,ft,ht,F,bt,me,x]})};var Ee=(()=>{class t extends D{pathId;ngOnInit(){this.pathId="url(#"+N()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=w(t)))(o||t)}})();static \u0275cmp=u({type:t,selectors:[["ExclamationTriangleIcon"]],standalone:!0,features:[L,E],decls:8,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z","fill","currentColor"],["d","M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z","fill","currentColor"],["d","M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(A(),s(0,"svg",0)(1,"g"),p(2,"path",1)(3,"path",2)(4,"path",3),l(),s(5,"defs")(6,"clipPath",4),p(7,"rect",5),l()()()),n&2&&(h(o.getClassNames()),m("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),a(),m("clip-path",o.pathId),a(5),r("id",o.pathId))},encapsulation:2})}return t})();var Ne=(()=>{class t extends D{pathId;ngOnInit(){this.pathId="url(#"+N()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=w(t)))(o||t)}})();static \u0275cmp=u({type:t,selectors:[["InfoCircleIcon"]],standalone:!0,features:[L,E],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(A(),s(0,"svg",0)(1,"g"),p(2,"path",1),l(),s(3,"defs")(4,"clipPath",2),p(5,"rect",3),l()()()),n&2&&(h(o.getClassNames()),m("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),a(),m("clip-path",o.pathId),a(3),r("id",o.pathId))},encapsulation:2})}return t})();var Fe=(()=>{class t extends D{pathId;ngOnInit(){this.pathId="url(#"+N()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=w(t)))(o||t)}})();static \u0275cmp=u({type:t,selectors:[["TimesCircleIcon"]],standalone:!0,features:[L,E],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(A(),s(0,"svg",0)(1,"g"),p(2,"path",1),l(),s(3,"defs")(4,"clipPath",2),p(5,"rect",3),l()()()),n&2&&(h(o.getClassNames()),m("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),a(),m("clip-path",o.pathId),a(3),r("id",o.pathId))},encapsulation:2})}return t})();var qt=(t,i)=>({showTransitionParams:t,hideTransitionParams:i}),Qt=t=>({value:"visible",params:t});function Kt(t,i){if(t&1&&p(0,"span"),t&2){let e=d().$implicit;h("p-message-icon pi "+e.icon),m("data-pc-section","icon")}}function Xt(t,i){t&1&&p(0,"CheckIcon"),t&2&&m("data-pc-section","icon")}function Jt(t,i){t&1&&p(0,"InfoCircleIcon"),t&2&&m("data-pc-section","icon")}function ei(t,i){t&1&&p(0,"TimesCircleIcon"),t&2&&m("data-pc-section","icon")}function ti(t,i){t&1&&p(0,"ExclamationTriangleIcon"),t&2&&m("data-pc-section","icon")}function ii(t,i){if(t&1&&(s(0,"span",10),U(1),g(2,Xt,1,1,"CheckIcon",11)(3,Jt,1,1,"InfoCircleIcon",11)(4,ei,1,1,"TimesCircleIcon",11)(5,ti,1,1,"ExclamationTriangleIcon",11),$(),l()),t&2){let e=d().$implicit;a(2),r("ngIf",e.severity==="success"),a(),r("ngIf",e.severity==="info"),a(),r("ngIf",e.severity==="error"),a(),r("ngIf",e.severity==="warn")}}function ni(t,i){if(t&1&&p(0,"span",14),t&2){let e=d(2).$implicit;r("innerHTML",e.summary,_e),m("data-pc-section","summary")}}function oi(t,i){if(t&1&&p(0,"span",15),t&2){let e=d(2).$implicit;r("innerHTML",e.detail,_e),m("data-pc-section","detail")}}function ai(t,i){if(t&1&&(U(0),g(1,ni,1,2,"span",12)(2,oi,1,2,"span",13),$()),t&2){let e=d().$implicit;a(),r("ngIf",e.summary),a(),r("ngIf",e.detail)}}function ri(t,i){if(t&1&&(s(0,"span",18),C(1),l()),t&2){let e=d(2).$implicit;m("data-pc-section","summary"),a(),_(e.summary)}}function si(t,i){if(t&1&&(s(0,"span",19),C(1),l()),t&2){let e=d(2).$implicit;m("data-pc-section","detail"),a(),_(e.detail)}}function li(t,i){if(t&1&&g(0,ri,2,2,"span",16)(1,si,2,2,"span",17),t&2){let e=d().$implicit;r("ngIf",e.summary),a(),r("ngIf",e.detail)}}function ci(t,i){if(t&1){let e=z();s(0,"button",20),G("click",function(){j(e);let o=d().index,c=d(2);return B(c.removeMessage(o))}),p(1,"TimesIcon",21),l()}if(t&2){let e=d(3);m("aria-label",e.closeAriaLabel)("data-pc-section","closebutton"),a(),r("styleClass","p-message-close-icon"),m("data-pc-section","closeicon")}}function pi(t,i){if(t&1&&(s(0,"div",5)(1,"div",6),g(2,Kt,1,3,"span",7)(3,ii,6,4,"span",8)(4,ai,3,2,"ng-container",3)(5,li,2,2,"ng-template",null,1,ye)(7,ci,2,4,"button",9),l()()),t&2){let e,n=i.$implicit,o=ve(6),c=d(2);h("p-message p-message-"+n.severity),r("@messageAnimation",W(13,Qt,We(10,qt,c.showTransitionOptions,c.hideTransitionOptions))),a(),m("data-pc-section","wrapper")("id",n.id||null),a(),r("ngIf",n.icon),a(),r("ngIf",!n.icon),a(),r("ngIf",!c.escape)("ngIfElse",o),a(3),r("ngIf",c.closable&&((e=n.closable)!==null&&e!==void 0?e:!0))}}function mi(t,i){if(t&1&&(U(0),g(1,pi,8,15,"div",4),$()),t&2){let e=d();a(),r("ngForOf",e.messages)}}function di(t,i){t&1&&Ue(0)}function ui(t,i){if(t&1&&(s(0,"div",22)(1,"div",6),g(2,di,1,0,"ng-container",23),l()()),t&2){let e=d();r("ngClass","p-message p-message-"+e.severity),a(2),r("ngTemplateOutlet",e.contentTemplate)}}var Lt=(()=>{class t{messageService;el;cd;config;set value(e){this.messages=e,this.startMessageLifes(this.messages)}closable=!0;style;styleClass;enableService=!0;key;escape=!0;severity;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";valueChange=new Ce;onClose=new Ce;templates;messages;messageSubscription;clearSubscription;timerSubscriptions=[];contentTemplate;constructor(e,n,o,c){this.messageService=e,this.el=n,this.cd=o,this.config=c}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this.contentTemplate=e.template;break;default:this.contentTemplate=e.template;break}}),this.messageService&&this.enableService&&!this.contentTemplate&&(this.messageSubscription=this.messageService.messageObserver.subscribe(e=>{if(e){Array.isArray(e)||(e=[e]);let n=e.filter(o=>this.key===o.key);this.messages=this.messages?[...this.messages,...n]:[...n],this.startMessageLifes(n),this.cd.markForCheck()}}),this.clearSubscription=this.messageService.clearObserver.subscribe(e=>{e?this.key===e&&(this.messages=null):this.messages=null,this.cd.markForCheck()}))}hasMessages(){let e=this.el.nativeElement.parentElement;return e&&e.offsetParent?this.contentTemplate!=null||this.messages&&this.messages.length>0:!1}clear(){this.messages=[],this.valueChange.emit(this.messages)}removeMessage(e){let n=this.messages[e];this.messages=this.messages?.filter((o,c)=>c!==e),n&&this.onClose.emit(n),this.valueChange.emit(this.messages)}get icon(){let e=this.severity||(this.hasMessages()?this.messages[0].severity:null);if(this.hasMessages())switch(e){case"success":return"pi-check";case"info":return"pi-info-circle";case"error":return"pi-times";case"warn":return"pi-exclamation-triangle";default:return"pi-info-circle"}return null}get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}ngOnDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.timerSubscriptions?.forEach(e=>e.unsubscribe())}startMessageLifes(e){e?.forEach(n=>n.life&&this.startMessageLife(n))}startMessageLife(e){let n=Oe(e.life).subscribe(()=>{this.messages=this.messages?.filter(o=>o!==e),this.timerSubscriptions=this.timerSubscriptions?.filter(o=>o!==n),this.valueChange.emit(this.messages),this.cd.markForCheck()});this.timerSubscriptions.push(n)}static \u0275fac=function(n){return new(n||t)(I(lt,8),I(Be),I(qe),I(oe))};static \u0275cmp=u({type:t,selectors:[["p-messages"]],contentQueries:function(n,o,c){if(n&1&&$e(c,F,4),n&2){let v;ze(v=Ge())&&(o.templates=v)}},hostAttrs:[1,"p-element"],inputs:{value:"value",closable:[2,"closable","closable",q],style:"style",styleClass:"styleClass",enableService:[2,"enableService","enableService",q],key:"key",escape:[2,"escape","escape",q],severity:"severity",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{valueChange:"valueChange",onClose:"onClose"},features:[Ze],decls:4,vars:8,consts:[["staticMessage",""],["escapeOut",""],["role","alert",1,"p-messages","p-component",3,"ngStyle"],[4,"ngIf","ngIfElse"],["role","alert",3,"class",4,"ngFor","ngForOf"],["role","alert"],[1,"p-message-wrapper"],[3,"class",4,"ngIf"],["class","p-message-icon",4,"ngIf"],["class","p-message-close p-link","type","button","pRipple","",3,"click",4,"ngIf"],[1,"p-message-icon"],[4,"ngIf"],["class","p-message-summary",3,"innerHTML",4,"ngIf"],["class","p-message-detail",3,"innerHTML",4,"ngIf"],[1,"p-message-summary",3,"innerHTML"],[1,"p-message-detail",3,"innerHTML"],["class","p-message-summary",4,"ngIf"],["class","p-message-detail",4,"ngIf"],[1,"p-message-summary"],[1,"p-message-detail"],["type","button","pRipple","",1,"p-message-close","p-link",3,"click"],[3,"styleClass"],["role","alert",3,"ngClass"],[4,"ngTemplateOutlet"]],template:function(n,o){if(n&1&&(s(0,"div",2),g(1,mi,2,1,"ng-container",3)(2,ui,3,2,"ng-template",null,0,ye),l()),n&2){let c=ve(3);h(o.styleClass),r("ngStyle",o.style),m("aria-atomic",!0)("aria-live","assertive")("data-pc-name","message"),a(),r("ngIf",!o.contentTemplate)("ngIfElse",c)}},dependencies:()=>[K,X,J,Ke,Qe,_t,Se,Ne,Fe,Ee,Ae],styles:[`@layer primeng{.p-message-wrapper{display:flex;align-items:center}.p-message-close{display:flex;align-items:center;justify-content:center;flex:none}.p-message-close.p-link{margin-left:auto;overflow:hidden;position:relative}.p-messages .p-message.ng-animating{overflow:hidden}}
`],encapsulation:2,data:{animation:[it("messageAnimation",[Me(":enter",[Ie({opacity:0,transform:"translateY(-25%)"}),be("{{showTransitionParams}}")]),Me(":leave",[be("{{hideTransitionParams}}",Ie({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return t})(),Et=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=b({type:t});static \u0275inj=y({imports:[Xe,vt,Se,Ne,Fe,Ee,Ae,Te,Te]})}return t})();function fi(t,i){t&1&&(s(0,"div",3),C(1),M(2,"transloco"),l()),t&2&&(a(),_(T(2,1,"site under construction")))}var ue=class t{title="fenase.github.io";static \u0275fac=function(e){return new(e||t)};static \u0275cmp=u({type:t,selectors:[["app-root"]],decls:5,vars:0,consts:[["severity","error","styleClass","text-center"],["pTemplate",""],[1,"container"],[1,"text-center"]],template:function(e,n){e&1&&(s(0,"p-messages",0),g(1,fi,3,3,"ng-template",1),l(),s(2,"div",2),p(3,"app-topbar")(4,"router-outlet"),l())},dependencies:[ut,de,Lt,F,x]})};var ge=class t{http=R(Je);getTranslation(i){return this.http.get(`/assets/i18n/${i}.json`)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})};var De="en";function hi(t){return function(){return t.setActiveLang(De),Re(t.load(De))}}var fe=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=b({type:t});static \u0275inj=y({providers:[pt({config:{availableLangs:["en","es"],defaultLang:De,reRenderOnLangChange:!0,prodMode:!Ye()},loader:ge}),{provide:Y,multi:!0,deps:[ae],useFactory:hi}],imports:[ct]})};var Ci=t=>()=>{t.ripple=!0},he=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=b({type:t,bootstrap:[ue]});static \u0275inj=y({providers:[St(),et(),xt(),{provide:Y,useFactory:Ci,deps:[oe],multi:!0},st({fullLibraryLoader:()=>import("./chunk-3BT227LN.js"),lineNumbersLoader:()=>import("./chunk-R7PKV3D7.js")})],imports:[te,Tt,pe,It,fe,Et]})};tt().bootstrapModule(he,{ngZoneEventCoalescing:!0}).catch(t=>console.error(t));
