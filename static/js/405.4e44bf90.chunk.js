"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[405],{405:function(n,t,r){r.r(t),r.d(t,{default:function(){return N}});var e,o,a,i,c,u,s,p,l=r(982),f=r(861),d=r(885),x=r(687),h=r.n(x),g=r(791),b=r(168),m=r(686),Z=m.Z.div(e||(e=(0,b.Z)(["\ndisplay: flex;\njustify-content: center;\ngap:20px;\nflex-wrap: wrap;"]))),k=m.Z.button(o||(o=(0,b.Z)(["\nmargin-bottom: 10px;\nwidth: 200px;\ncolor: #373737;\nbackground-color: #EBD8FF;\nborder-radius: 10.31px;\n&:focus, &:hover {\n  background-color: #008080;\n    cursor: pointer;\n     color: #fff;\n}\n &.active {\n    background-color: #008080;\n    cursor: pointer;\n    color: #fff;\n  }"]))),v=r(184),w=function(n){var t=n.onClick,r=function(n){t(n.target.innerText),localStorage.setItem("currentShop",JSON.stringify(n.target.innerText))};return(0,v.jsxs)(Z,{children:[(0,v.jsx)(k,{type:"button",onClick:r,children:"MC Pizza"}),(0,v.jsx)(k,{type:"button",onClick:r,children:"MC donny"}),(0,v.jsx)(k,{type:"button",onClick:r,children:"MC Sushi"})]})},y=m.Z.li(a||(a=(0,b.Z)(["\npadding-bottom:36px;\nwidth: 380px;\nlist-style: none;\nbackground-image: linear-gradient(to bottom, #008080\n0%, #008080 69%, #E0FFFF 100%);\n box-shadow: -3px 7px 21px 0 rgba(0, 0, 0, 0.23);\n border-radius: 21px;"]))),j=m.Z.div(i||(i=(0,b.Z)(["\nmargin-bottom: 16px;\npadding: 20px;\nwidth:340px;\nbox-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.25),\ninset 0 3px 3px 0 rgba(251, 248, 255, 0.06),\ninset 0 -2px 3px 0 rgba(174, 123, 227, 0.25);\n "]))),C=m.Z.img(c||(c=(0,b.Z)(["\nwidth:200px;\nheight:150px;\nborder-radius:16px;\nmargin-left: auto;\nmargin-right:auto;\nborder:8px solid #EBD8FF;\nbox-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.25),\ninset 0 3px 3px 0 rgba(251, 248, 255, 0.06),\ninset 0 -2px 3px 0 rgba(174, 123, 227, 0.25); \n"]))),S=m.Z.p(u||(u=(0,b.Z)(["\nmargin-bottom:16px;\ntext-align: center;\ntext-transform: uppercase;\nfont-size: 20px;\nline-height:1.2;\ncolor:#EBD8FF;\n"]))),F=m.Z.button(s||(s=(0,b.Z)(["\nmargin-bottom: 10px;\nwidth: 100px;\nmargin-left: auto;\nmargin-right: auto;\ncolor: #373737;\nbackground-color: #EBD8FF;\nborder-radius: 10.31px;\n&:focus, &:hover {\n  background-color: #008080;\n    cursor: pointer;\n     color: #fff;\n};\n &.active {\n    background-color: #5CD3A8;\n  }\n"]))),E=function(n){var t=n.food,r=n.onClick;return(0,v.jsxs)(y,{children:[(0,v.jsx)(j,{children:(0,v.jsx)(C,{src:t.photo,alt:t.title})}),(0,v.jsx)(S,{children:t.title}),(0,v.jsx)(S,{children:t.price}),(0,v.jsx)(F,{type:"button",onClick:function(){return r(t)},children:"To Cart"})]})},_=m.Z.ul(p||(p=(0,b.Z)(["\nmargin-top: 50px;\ndisplay: flex;\nflex-wrap: wrap;\ngap: 48px;\nalign-items:center;\njustify-content: center;"]))),D=r(218),I=function(n){var t=n.food,r=(n.onClick,(0,g.useState)((function(){return JSON.parse(localStorage.getItem("order"))||[]}))),e=(0,d.Z)(r,2),o=e[0],a=e[1];(0,g.useEffect)((function(){localStorage.setItem("order",JSON.stringify(o))}),[o]);var i=function(n){if(o.find((function(t){return t._id===n._id})))return D.Am.error("Have allready added. Go to your cart, please.");a([].concat((0,l.Z)(o),[n])),localStorage.setItem("order",JSON.stringify(o))};return(0,v.jsx)(_,{children:t.map((function(n){return(0,v.jsx)(E,{food:n,onClick:i},n._id)}))})},J=r(611),N=function(){var n=(0,g.useState)([]),t=(0,d.Z)(n,2),r=t[0],e=t[1],o=(0,g.useState)((function(){return JSON.parse(localStorage.getItem("currentShop"))||""})),a=(0,d.Z)(o,2),i=a[0],c=a[1],u=(0,g.useState)([]),s=(0,d.Z)(u,2),p=s[0],x=s[1];(0,g.useEffect)((function(){function n(){return(n=(0,f.Z)(h().mark((function n(){var t;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,J.E)();case 3:t=n.sent,e((0,l.Z)(t)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,g.useEffect)((function(){var n=r.filter((function(n){return n.shop.toLowerCase()===i.toLowerCase()}));x(n)}),[i,r]);return(0,v.jsxs)("div",{children:[(0,v.jsx)(w,{onClick:function(n){c(n)}}),!i.length&&(0,v.jsx)("div",{children:(0,v.jsx)("h1",{children:"Please, choose shop"})}),p&&(0,v.jsx)(I,{food:p})]})}},611:function(n,t,r){r.d(t,{E:function(){return s},f:function(){return l}});var e=r(413),o=r(861),a=r(687),i=r.n(a),c=r(243),u="http://localhost:3001/api";function s(){return p.apply(this,arguments)}function p(){return(p=(0,o.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/products/"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,o.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.post("".concat(u,"/orders/"),(0,e.Z)({},t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=405.4e44bf90.chunk.js.map