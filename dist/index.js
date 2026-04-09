"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=s(function(F,d){
function q(){return{mode:"normalize"}}d.exports=q
});var p=s(function(I,f){
var w=require('@stdlib/assert-is-plain-object/dist'),b=require('@stdlib/assert-has-own-property/dist'),h=require('@stdlib/ndarray-base-assert-is-index-mode/dist'),T=require('@stdlib/ndarray-index-modes/dist'),l=require('@stdlib/error-tools-fmtprodmsg/dist');function j(e,r){return w(r)?b(r,"mode")&&(e.mode=r.mode,!h(e.mode))?new TypeError(l('1wR4S',"mode",T().join('", "'),e.mode)):null:new TypeError(l('1wR2V',r));}f.exports=j
});var g=s(function(P,y){
var E=require('@stdlib/array-base-assert-is-mostly-safe-data-type-cast/dist'),x=require('@stdlib/array-base-assert-is-real-data-type/dist'),O=require('@stdlib/array-base-assert-is-complex-floating-point-data-type/dist'),m=require('@stdlib/assert-is-collection/dist'),V=require('@stdlib/array-base-put/dist'),c=require('@stdlib/array-dtype/dist'),k=require('@stdlib/array-convert/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist'),C=v(),D=p();function M(e,r,a){var u,o,t,i;if(!m(e))throw new TypeError(n('1wR2O',e));if(!m(r))throw new TypeError(n('1wR2y',r));if(!m(a))throw new TypeError(n('1wR2l',a));if(u=C(),arguments.length>3&&(o=D(u,arguments[3]),o))throw o;if(t=c(e)||"generic",i=c(a)||"generic",!E(i,t))throw new TypeError(n('1wRFu',i,t));return O(t)&&x(i)&&(a=k(a,t)),V(e,r,a,u.mode)}y.exports=M
});var S=g();module.exports=S;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
