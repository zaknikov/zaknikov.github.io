"use strict";(self["webpackChunkorbital"]=self["webpackChunkorbital"]||[]).push([[223],{93444:function(e,t,n){n.r(t),n.d(t,{transitionEnter:function(){return r},transitionLeave:function(){return u}});var a=n(58552);const o=-30;function r(e,t){const n=a.p8.timeline({repeat:0,onComplete:t}),r=.2,{parent:u,cubes:i,title:s,slideOverlay:c}=l(e);n.set(i,{scale:1}),n.set(u,{autoAlpha:1}),n.set(c,{x:"-100%"}),n.to(s,{y:o,autoAlpha:0,duration:.5,ease:"back.in(1.7)"},"+="+r),n.to(u,{autoAlpha:0,duration:.8})}function u(e,t){const n=.3,{parent:o,cubes:r,title:u,slideOverlay:s}=l(e),c=a.p8.timeline({repeat:0});c.set(r,{scale:0}),c.set(o,{autoAlpha:0}),c.set(s,{x:"100%"}),c.to(s,{x:0,duration:1.5,ease:"expo.inOut"}),c.to(o,{autoAlpha:1,duration:.3,onComplete:()=>{i(r,t)}},"-="+n),c.to(u,{y:"inherit",autoAlpha:1,duration:.5,ease:"back.out(1.7)"},"-=.1")}function i(e,t){a.p8.to(e,{scale:1,duration:.4,ease:"back.out(4)",onComplete:t})}function l(e){const t=e.querySelector(".p-loader"),n=t.querySelector(".boxes"),a=t.querySelector(".loading-title"),o=e.querySelector(".slide-overlay");return{parent:t,cubes:n,title:a,slideOverlay:o}}},56549:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(73396),o=n(44870),r=n(49242),u=n(91037);const i={class:"position-relative"},l=(0,a._)("div",{class:"slide-overlay"},null,-1),s={class:"h-100"};var c={__name:"NestedPagesLoader",props:{canShow:{type:Boolean,default:!1}},setup(e){return(t,n)=>((0,a.wg)(),(0,a.iD)("div",i,[l,(0,a.wy)((0,a._)("div",s,[(0,a.Wm)((0,o.SU)(u["default"]),{title:"Loading"})],512),[[r.F8,e.canShow]])]))}};const d=c;var p=d},42223:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=n(73396),o=n(44870),r=n(49242),u=n(56549),i=n(93444);const l={class:"list-orbitals"};var s={__name:"OrbitalsList",setup(e){const t=(0,o.iH)(null),n=(0,o.iH)(!1);function s(){(0,i.transitionEnter)(t.value,(()=>{n.value=!1}))}function c(e,a){n.value=!0,(0,i.transitionLeave)(t.value,a)}return(e,i)=>{const d=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",l,[(0,a._)("div",{ref_key:"SubPagesLoader",ref:t},[(0,a.Wm)((0,o.SU)(u["default"]),{"can-show":n.value},null,8,["can-show"])],512),(0,a.Wm)(d,null,{default:(0,a.w5)((({Component:e})=>[(0,a.Wm)(r.uT,{onEnter:s,onLeave:c,css:!1,mode:"out-in"},{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.j4)((0,a.LL)(e)))])),_:2},1024)])),_:1})])}}};const c=s;var d=c}}]);
//# sourceMappingURL=223.9d79b714.js.map