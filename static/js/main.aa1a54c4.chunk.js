(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,n,t){e.exports=t.p+"static/media/star.c372e0c9.svg"},18:function(e,n,t){e.exports=t(33)},24:function(e,n,t){},29:function(e,n,t){},30:function(e,n,t){},31:function(e,n,t){},32:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(6),c=t.n(o),i=(t(24),t(16)),l=t(4),u=t(3),s=t(12),m=t.n(s),d=function(e){return 0===Object.keys(e).length&&e.constructor===Object},f=[{name:"login",type:"text",label:"Login"},{name:"password",type:"password",label:"Password"},{name:"firstName",type:"text",label:"First Name"},{name:"lastName",type:"text",label:"Last Name"},{name:"age",type:"number",label:"Age",min:18,max:65},{name:"role",type:"select",options:["1","2","3","4"],label:"Role"},{name:"isActive",type:"checkbox",label:"Active"}],b={1:"Team Lead",2:"Back-end Developer",3:"Front-end Developer",4:"DB Developer"},p=t(5),v={login:"\u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u044b a-z, 0-9, _ \u0438 -",password:"\u0441\u0442\u0440\u043e\u043a\u0430 \u0434\u043b\u0438\u043d\u043e\u0439 \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",firstName:"\u0441\u0442\u0440\u043e\u043a\u0430 \u043e\u0442 3 \u0434\u043e 15 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u0434\u043b\u0438\u043d\u043e\u0439",lastName:"\u0441\u0442\u0440\u043e\u043a\u0430 \u043e\u0442 3 \u0434\u043e 25 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u0434\u043b\u0438\u043d\u043e\u0439",age:"\u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0432 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0435 \u043e\u0442 18 \u0434\u043e 65"},g=function(e){var n={},t="";for(t in e){var a=e[t];switch(t){case"login":/^[a-zA-Z\u0430-\u044f\u0410-\u042f0-9-_]+$/.test(a)||(n[t]=v[t]);break;case"firstName":(a.length<3||a.length>15)&&(n[t]=v[t]);break;case"lastName":(a.length<3||a.length>25)&&(n[t]=v[t]);break;case"password":a.length<6&&(n[t]=v[t]);break;case"age":(a<18||a>65)&&(n[t]=v[t])}}return n},h=t(1),x=t(2),O=t(13),j=t.n(O);function y(){var e=Object(h.a)(['\n  &[type="text"], &[type="password"], &[type="number"] {\n    display: block;\n    position: relative;\n    width: 100%;\n    height: 36px;\n    border-radius: 4px;\n    border: 1px solid #666;\n    padding: 10px 12px;\n    outline: none;\n    transition: border-color .25s;\n    font-size: 14px;\n    color: #666\n\n    :hover {\n      border-color: #999;\n    }\n\n    :focus {\n      border-color: #000;\n    }\n\n    ::placeholder {\n      color: #777;\n    }\n\n    ',"\n    ","\n    ","\n    ","\n    ","\n    ","\n  }\n"]);return y=function(){return e},e}function k(){var e=Object(h.a)(["\n  text-align: right;\n"]);return k=function(){return e},e}function E(){var e=Object(h.a)(["\n  text-align: center;\n"]);return E=function(){return e},e}function w(){var e=Object(h.a)(["\n  color: var(--colorTextButtonDisabled);\n  background-color: var(--backgroundColorButtonDisabled);\n"]);return w=function(){return e},e}function N(){var e=Object(h.a)(["\n  height: 48px;\n"]);return N=function(){return e},e}function S(){var e=Object(h.a)(["\n  font-size: 12px;\n  height: 24px;\n  padding: 5px 12px;\n"]);return S=function(){return e},e}function A(){var e=Object(h.a)(["\n  background-image: url(",");\n  background-position: calc(100% - 8px) 50%;\n  background-repeat: no-repeat;\n  padding-right: 23px;\n"]);return A=function(){return e},e}var D=x.b.input(y(),function(e){return e.isDisabled&&Object(x.a)(w())},function(e){return e.required&&Object(x.a)(A(),j.a)},function(e){return e.large&&Object(x.a)(N())},function(e){return e.small&&Object(x.a)(S())},function(e){return e.center&&Object(x.a)(E())},function(e){return e.right&&Object(x.a)(k())});function T(){var e=Object(h.a)(["\n  font-size: 14px;\n  position: relative;\n  height: 40px;\n  padding: 0 40px;\n  overflow: visible;\n  border: none;\n  border-radius: 3px;\n  background-color: blue;\n  text-align: center;\n  color: white;\n  box-shadow: 0;\n  transition: 0.1s ease-in-out all;\n  cursor: pointer;\n\n  ::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n\n  :hover {\n    box-shadow: 0 8px 16px rgba(0, 13, 38, .1);\n  }\n\n  ","\n  ","\n  ","\n"]);return T=function(){return e},e}function W(){var e=Object(h.a)(["\n  background-color: grey;\n  pointer-events: none;\n  cursor: initial;\n  color: white;\n"]);return W=function(){return e},e}function L(){var e=Object(h.a)(["\n  font-size: 12px;\n  padding: 0 15px;\n  height: 36px;\n"]);return L=function(){return e},e}function M(){var e=Object(h.a)(["\n  width: 100%;\n"]);return M=function(){return e},e}var C=x.b.button(T(),function(e){return e.fullWidth&&Object(x.a)(M())},function(e){return e.small&&Object(x.a)(L())},function(e){return e.disabled&&Object(x.a)(W())}),I=(t(29),function(e){var n={login:"",password:"",firstName:"",lastName:"",age:18,role:1,isActive:!1},t={login:"",password:"",firstName:"",lastName:"",age:""},o=Object(a.useState)(n),c=Object(u.a)(o,2),i=c[0],s=c[1],m=Object(a.useState)(t),v=Object(u.a)(m,2),h=v[0],x=v[1],O=function(e){var n=e.target,t=n.name,a=n.value,r=n.type,o="checkbox"===e.target.type?e.target.checked:null;s(Object(l.a)({},i,Object(p.a)({},t,"checkbox"!==r?a:o)))};return r.a.createElement("form",{className:"form",onSubmit:function(a){a.preventDefault();var r=g(i);d(r)?(e.addTeamMember(i),s(n),x(t)):x(r)}},f.map(function(e){var n={type:e.type,name:e.name,placeholder:e.label,value:i[e.name]};return"number"===e.type&&(n.min=e.min,n.max=e.max),"checkbox"!==e.type?n.value=i[e.name]:n.checked=i[e.name],r.a.createElement("div",{className:"formField",key:"add-form-".concat(e.name)},"select"===e.type?r.a.createElement("select",{name:e.name,value:i.role,onChange:O},e.options&&e.options.map(function(n){return r.a.createElement("option",{key:"add-form-option-".concat(e.name,"-").concat(n),value:n},b[n])})):r.a.createElement(a.Fragment,null,r.a.createElement(D,Object.assign({small:!0,left:!0},n,{onChange:O})),"isActive"===e.name&&r.a.createElement("label",null,"isActive")),r.a.createElement("div",{className:"error"},h[e.name]))}),r.a.createElement(C,{fullWidth:!0},"Add member"))}),z=(t(30),function(e){var n={},t=Object(a.useState)(n),o=Object(u.a)(t,2),c=o[0],i=o[1],s={login:"",password:"",firstName:"",lastName:"",age:""},m=Object(a.useState)(s),v=Object(u.a)(m,2),h=v[0],x=v[1];Object(a.useEffect)(function(){i(e.currentTeamMember)},[e]);var O=function(e){var n=e.target,t=n.name,a=n.value,r=n.type,o="checkbox"===e.target.type?e.target.checked:null;i(Object(l.a)({},c,Object(p.a)({},t,"checkbox"!==r?a:o)))};return r.a.createElement("form",{className:"form",onSubmit:function(t){t.preventDefault();var a=g(c);d(a)?(e.updateTeamMember(c),i(n),x(s)):x(a)}},f.map(function(e){var n={type:e.type,name:e.name,placeholder:e.label,value:c[e.name]};return"number"===e.type&&(n.min=e.min,n.max=e.max),"checkbox"!==e.type?n.value=c[e.name]:n.checked=c[e.name],r.a.createElement("div",{className:"formField",key:"add-form-".concat(e.name)},"select"===e.type?r.a.createElement("select",{name:e.name,value:c.role,onChange:O},e.options&&e.options.map(function(n){return r.a.createElement("option",{key:"add-form-option-".concat(e.name,"-").concat(n),value:n},b[n])})):r.a.createElement(a.Fragment,null,r.a.createElement(D,Object.assign({small:!0,left:!0},n,{onChange:O})),"isActive"===e.name&&r.a.createElement("label",null,"isActive")),r.a.createElement("div",{className:"error"},h[e.name]))}),r.a.createElement(C,{fullWidth:!0},"Edit member"))});function J(){var e=Object(h.a)(["\n  display: block;\n  width: 100%;\n  line-height: 1;\n  opacity: 1;\n  transition: opacity .2s;\n\n  ","\n"]);return J=function(){return e},e}var B=x.b.table(J(),function(e){return e.minWidth&&"\n  min-width: ".concat(e.minWidth,";\n")});function F(){var e=Object(h.a)(["\n  font-size: 12px;\n  font-weight: 600;\n  display: block;\n  position: relative;\n  z-index: 1;\n  background: #ece8e8;\n  border-bottom: 1px solid black;\n\n  tr {\n    border: none;\n  }\n"]);return F=function(){return e},e}var H=x.b.thead(F());function V(){var e=Object(h.a)(["\n  display: block;\n  color: var(--colorText);\n\n  & tr:nth-child(2n) {\n    ","\n\n    &:hover {\n      background-color: var(--background-button-active);\n    }\n  }\n"]);return V=function(){return e},e}var Y=x.b.tbody(V(),function(e){return e.striped&&"\n  color: #ddd;\n"});function $(){var e=Object(h.a)(["\n  font-size: 12px;\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  align-content: center;\n  align-items: stretch;\n  justify-content: space-between;\n  border-top: 1px solid rgba(255, 255, 255, 0);\n  border-right: 1px solid rgba(255, 255, 255, 0);\n  border-bottom: 1px solid #edd0d0;\n  border-left: 1px solid rgba(255, 255, 255, 0);\n\n  ","\n  ","\n  ","\n"]);return $=function(){return e},e}function _(){var e=Object(h.a)(["\n  opacity: .4;\n"]);return _=function(){return e},e}function q(){var e=Object(h.a)(["\n  border-radius: 4px;\n\n  td::after {\n    border-right-color: #edd0d0 !important;\n  }\n"]);return q=function(){return e},e}function P(){var e=Object(h.a)(["\n  :hover {\n    border-radius: 4px;\n    border: #edd0d0;\n  }\n"]);return P=function(){return e},e}var R=x.b.tr($(),function(e){return e.isHovering&&Object(x.a)(P())},function(e){return e.isActive&&Object(x.a)(q())},function(e){return e.isDisabled&&Object(x.a)(_())});function U(){var e=Object(h.a)(["\n  display: flex;\n  position: relative;\n  align-items: center;\n  min-height: 32px;\n  padding: 5px 15px;\n\n  &:first-child {\n    padding: 5px 15px 5px 5px;\n  }\n\n  &:last-child {\n    padding: 5px 5px 5px 15px;\n  }\n\n  &:not(:last-child)::after {\n    content: '';\n    position: absolute;\n    width: 1px;\n    height: 40%;\n    right: 0;\n    border-right: 1px solid #edd0d0;;\n  }\n\n  ","\n\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  ","\n  ","\n\n  ","\n"]);return U=function(){return e},e}function Z(){var e=Object(h.a)(["\n  max-width: ","\n"]);return Z=function(){return e},e}function G(){var e=Object(h.a)(["\n  font-weight: bold;\n  color: var(--font-color);\n  border: none;\n"]);return G=function(){return e},e}function K(){var e=Object(h.a)(["\n  background: #b1b2fd;\n"]);return K=function(){return e},e}function Q(){var e=Object(h.a)(["\n  :hover {\n    background: #d1d1f1;\n  }\n"]);return Q=function(){return e},e}function X(){var e=Object(h.a)(["\n  flex: 1 1 0%;\n  justify-content: center;\n  text-align: center;\n  ","\n"]);return X=function(){return e},e}function ee(){var e=Object(h.a)(["\n  flex: 1 1 0%;\n  justify-content: flex-end;\n  text-align: right;\n  ","\n"]);return ee=function(){return e},e}function ne(){var e=Object(h.a)(["\n  flex: 1 1 0%;\n  justify-content: flex-start;\n  text-align: left;\n  ","\n"]);return ne=function(){return e},e}function te(){var e=Object(h.a)(["\n  flex: 3 0 0%;\n  justify-content: flex-start;\n  text-align: left;\n  ","\n"]);return te=function(){return e},e}function ae(){var e=Object(h.a)(["\n  flex: 0 0 50px;\n  justify-content: center;\n  text-align: center;\n"]);return ae=function(){return e},e}var re=x.b.td(U(),function(e){return e.header&&Object(x.a)(G())},function(e){return"small"===e.type&&Object(x.a)(ae())},function(e){return"basis"===e.type&&Object(x.a)(te(),e.minWidth?"min-width: ".concat(e.minWidth):"")},function(e){return"left"===e.type&&Object(x.a)(ne(),e.minWidth?"min-width: ".concat(e.minWidth):"")},function(e){return"right"===e.type&&Object(x.a)(ee(),e.minWidth?"min-width: ".concat(e.minWidth):"")},function(e){return"center"===e.type&&Object(x.a)(X(),e.minWidth?"min-width: ".concat(e.minWidth):"")},function(e){return e.isHovering&&Object(x.a)(Q())},function(e){return e.isActive&&Object(x.a)(K())},function(e){return e.maxWidth&&Object(x.a)(Z(),e.maxWidth)}),oe=(t(31),[{name:"lastName",type:"left"},{name:"login",type:"left"},{name:"role",type:"left"},{name:"age",type:"center"},{name:"registrationDate",type:"left"},{name:"isActive",type:"center"}]),ce=function(e){var n=function(n){n.preventDefault();var t=n.target.dataset.memberId;e.setCurrentTeamMember(t)},t=function(n){n.preventDefault();var t=n.target.dataset.memberId;e.removeTeamMember(t)},a=function(n){n.preventDefault();var t=n.target.dataset.sortName;e.sortBy({name:t})};return e.teamList.length?r.a.createElement("div",null,r.a.createElement(B,null,r.a.createElement(H,null,r.a.createElement(R,null,oe.map(function(n){return r.a.createElement(re,{key:"td-".concat(n.name),header:!0,isActive:e.sortValue===n.name,isHovering:!0,type:n.type,"data-sort-name":n.name,onClick:a},n.name)}),r.a.createElement(re,{header:!0,type:"right"},"cntrls"))),r.a.createElement(Y,null,e.teamList.map(function(a){if(e.onlyActive&&!a.isActive)return null;var o="isActive ".concat(!0===a.isActive&&"active");return r.a.createElement(R,{key:a.id},r.a.createElement(re,{type:"left"},a.lastName,", ",a.firstName),r.a.createElement(re,{type:"left"},a.login),r.a.createElement(re,{type:"left"},b[a.role]),r.a.createElement(re,{type:"center"},a.age),r.a.createElement(re,{type:"left"},function(e){var n=new Date(e),t=n.getUTCFullYear(),a=n.getDate(),r=n.getMonth()+1;a<10&&(a="0"+a.toString()),r<10&&(r=0+r.toString());var o=t+"-"+r+"-"+a,c=n.getHours(),i=n.getMinutes(),l=n.getSeconds();return c<10&&(c="0"+c),i<10&&(i="0"+i),l<10&&(l="0"+l),o+" "+c+":"+i+":"+l}(a.registrationDate)),r.a.createElement(re,{type:"center",className:o},a.isActive?"Yes":"No"),r.a.createElement(re,{type:"right"},r.a.createElement("button",{"data-member-id":a.id,onClick:n},"Edit"),r.a.createElement("button",{"data-member-id":a.id,onClick:t},"Delete")))})))):r.a.createElement("div",{className:"emptyList"},"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0443\u0441\u0442")},ie=(t(32),function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(!0),s=Object(u.a)(c,2),f=s[0],b=s[1],p=Object(a.useState)("lastName"),v=Object(u.a)(p,2),g=v[0],h=v[1],x=Object(a.useState)(!1),O=Object(u.a)(x,2),j=O[0],y=O[1],k=Object(a.useState)({}),E=Object(u.a)(k,2),w=E[0],N=E[1];Object(a.useEffect)(function(){var e=localStorage.getItem("teamList"),n=localStorage.getItem("alphabetOrder"),t=localStorage.getItem("sortValue"),a=null!==e?JSON.parse(e):[],r=null===n||JSON.parse(n),c=null!==t?JSON.parse(t):"lastName";o(a),b(r),h(c)},[]);var S=function(e){var n=e.name||g,a=!e.name||e.name!==g||!0!==f,r=e.sortTeamList?e.sortTeamList:t;r.sort(function(e,t){return e[n]>t[n]?a?1:-1:e[n]<t[n]?a?-1:1:0}),o(r),b(a),e.name&&h(e.name),localStorage.setItem("sortValue",JSON.stringify(n)),localStorage.setItem("alphabetOrder",JSON.stringify(a)),localStorage.setItem("teamList",JSON.stringify(r))};return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"layout"},r.a.createElement("div",{className:"forms"},r.a.createElement(I,{addTeamMember:function(e){var n=Object(l.a)({},e,{id:m()(),registrationDate:Date.now()}),a=[].concat(Object(i.a)(t),[n]);S({sortTeamList:a})}}),!d(w)&&r.a.createElement(z,{currentTeamMember:w,updateTeamMember:function(e){var n=t.map(function(n){return n.id===e.id?e:n});S({sortTeamList:n}),N({})}})),r.a.createElement("div",{onClick:function(){y(!j)},className:"onlyActive"},"Only Active: ",j?"Yes":"No"," (click Me)"),r.a.createElement(ce,{teamList:t,onlyActive:j,setCurrentTeamMember:function(e){var n=t.findIndex(function(n){return n.id===e});N(t[n])},removeTeamMember:function(e){var n=t.filter(function(n){return n.id!==e});o(n),localStorage.setItem("teamList",JSON.stringify(n))},sortValue:g,sortBy:S})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.aa1a54c4.chunk.js.map