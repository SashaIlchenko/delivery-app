"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[509],{509:function(n,e,r){r.r(e),r.d(e,{default:function(){return un}});var t,o,a,i,c,s,l,u,d,p,x,f,h,g,m,b,Z,v,j=r(168),y=r(885),k=r(791),w=r(993),_=r(413),F=r(627),S=r(33),C=r(705),A=r(686),E=(0,A.Z)(C.l0)(t||(t=(0,j.Z)(["\nwidth: 300px;\nheight: 447px;\npadding: 30px;\nmargin-right:auto;\nmargin-left:auto;\nmargin-top:30px;\nbackground-image: linear-gradient(to bottom, #008080\n0%, #008080 69%, #E0FFFF 100%);\n box-shadow: -3px 7px 21px 0 rgba(0, 0, 0, 0.23);\n border-radius: 21px;\ndisplay: flex;\nflex-direction: column;\ngap: 10px;"]))),N=A.Z.label(o||(o=(0,j.Z)(["\ndisplay: flex;\nflex-direction: column;\ncolor: #fff;\nfont-size:24px;\nfont-weight: 600;"]))),z=(0,A.Z)(C.gN)(a||(a=(0,j.Z)(["\nmargin-top:10px;\npadding-left: 15px;\nborder-radius: 3px;\nborder: none;\nheight: 50px;"]))),P=A.Z.button(i||(i=(0,j.Z)(["\nfont-size:18px;\nfont-weight: 500;\nmargin-top: 10px;\npadding:8px;\nweight: 150px;\ncolor: #fff;\nopacity: 0.7;\nborder: none;\nborder-radius:3px;\nbackground-color: #008080;\n&:hover {\n    opacity: 1;\n}"]))),L=r(984),J=r(184),O={name:"",email:"",phone:"",address:""},B=function(n){var e=n.onSubmit,r=n.isLoaded,t=(0,F.ZP)({callbackName:"YOUR_CALLBACK_NAME"}),o=t.init,a=t.ready,i=t.value,c=t.suggestions,s=c.status,l=c.data,u=t.setValue,d=t.clearSuggestions,p=(0,S.Z)((function(){d()})),x=function(n){var e=n.description;return function(){u(e,!1),d(),(0,F.LM)({address:e}).then((function(n){var e=(0,F.WV)(n[0]),r=e.lat,t=e.lng;console.log({lat:r,lng:t})}))}};return k.useEffect((function(){r&&o()}),[r,o]),(0,J.jsx)(C.J9,{initialValues:O,onSubmit:function(n){e((0,_.Z)({id:(0,L.x0)()},n))},children:(0,J.jsxs)(E,{children:[(0,J.jsxs)(N,{children:["Name",(0,J.jsx)(z,{type:"text",name:"name",pattern:"^[a-zA-Za-\u044f\u0410-\u042f]+(([' -][a-zA-Za-\u044f\u0410-\u042f ])?[a-zA-Za-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Name"})]}),(0,J.jsxs)(N,{children:["Email",(0,J.jsx)(z,{type:"email",name:"email",title:"Email contain @",required:!0,placeholder:"email"})]}),(0,J.jsxs)(N,{children:["Phone",(0,J.jsx)(z,{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"phone"})]}),(0,J.jsxs)("div",{ref:p,children:[(0,J.jsxs)(N,{children:["Adress",(0,J.jsx)(z,{value:i,onChange:function(n){u(n.target.value)},disabled:!a,placeholder:"Where are you going?"})]}),"OK"===s&&(0,J.jsx)("ul",{children:l.map((function(n){var e=n.place_id,r=n.structured_formatting,t=r.main_text,o=r.secondary_text;return(0,J.jsxs)("li",{onClick:x(n),children:[(0,J.jsx)("strong",{children:t})," ",(0,J.jsx)("small",{children:o})]},e)}))})]}),(0,J.jsx)(P,{type:"submit",children:"Add contacts"})]})})},D=r(861),M=r(762),I=r(942),K=r(687),q=r.n(K),R=A.Z.ul(c||(c=(0,j.Z)(["\nmargin-top: 30px;\ndisplay: flex;\nflex-wrap: wrap;\ngap: 48px;\nalign-items:center;\njustify-content: center;\n"]))),V=A.Z.li(s||(s=(0,j.Z)(["\npadding-bottom:36px;\nwidth: 380px;\nlist-style: none;\nbackground-image: linear-gradient(to bottom, #008080\n0%, #008080 69%, #E0FFFF 100%);\n box-shadow: -3px 7px 21px 0 rgba(0, 0, 0, 0.23);\n border-radius: 21px;"]))),W=A.Z.div(l||(l=(0,j.Z)(["\nmargin-bottom: 16px;\npadding: 20px;\nwidth:340px;\nbox-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.25),\ninset 0 3px 3px 0 rgba(251, 248, 255, 0.06),\ninset 0 -2px 3px 0 rgba(174, 123, 227, 0.25);\n "]))),Y=A.Z.img(u||(u=(0,j.Z)(["\nwidth:300px;\nheight:200px;\nborder-radius:16px;\nmargin-left: auto;\nmargin-right:auto;\nborder:8px solid #EBD8FF;\nbox-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.25),\ninset 0 3px 3px 0 rgba(251, 248, 255, 0.06),\ninset 0 -2px 3px 0 rgba(174, 123, 227, 0.25); \n"]))),T=A.Z.p(d||(d=(0,j.Z)(["\nmargin-bottom:16px;\ntext-align: center;\nfont-size: 20px;\nfont-weight: 500;\nline-height:1.2;\ncolor:#EBD8FF;\n"]))),U=A.Z.div(p||(p=(0,j.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n"]))),G=A.Z.button(x||(x=(0,j.Z)(["\n  width: 30px;\n  align-items: center;\n  font-size: 16px;\n  border: none;\n  background-color: transparent;\n  color: #fff;\n  cursor: pointer;\n"]))),X=A.Z.input(f||(f=(0,j.Z)(["\n  text-align: center;\n  width: 30px;\n  font-size: 16px;\n  border: none;\n  background-color: transparent;\n  color:#fff;\n"]))),$=A.Z.button(h||(h=(0,j.Z)(["\nmargin-top:20px;\nwidth: 50px;\nmargin-left: auto;\nmargin-right: auto;\ncolor: #373737;\nbackground-color: #EBD8FF;\nborder-radius: 10.31px;\n&:focus, &:hover {\n  background-color: #008080;\n    cursor: pointer;\n     color: #fff;\n};\n &.active {\n    background-color: #5CD3A8;\n  }\n"]))),H=A.Z.p(g||(g=(0,j.Z)(["\nfont-size:24px;\nfont-weight: 600;\nmargin-top: 30px;\nmargin-bottom: 20px;\ncolor: #373737;"]))),Q=A.Z.button(m||(m=(0,j.Z)(["\nmargin-bottom: 10px;\nwidth: 200px;\ncolor: #373737;\nbackground-color: #EBD8FF;\nborder-radius: 10.31px;\n&:focus, &:hover {\n  background-color: #008080;\n    cursor: pointer;\n     color: #fff;\n}\n &.active {\n    background-color: #008080;\n    cursor: pointer;\n    color: #fff;\n  }"]))),nn=r(313),en=r(218),rn=r(228),tn=function(n){var e=n.user,r=(0,k.useState)([]),t=(0,y.Z)(r,2),o=t[0],a=t[1],i=(0,k.useState)(JSON.parse(localStorage.getItem("count"))||0),c=(0,y.Z)(i,2),s=c[0],l=c[1],u=(0,k.useState)(0),d=(0,y.Z)(u,2),p=d[0],x=d[1],f=(0,k.useState)(!1),h=(0,y.Z)(f,2),g=h[0],m=h[1];(0,k.useEffect)((function(){var n=JSON.parse(localStorage.getItem("order"));a(n)}),[]),(0,k.useEffect)((function(){localStorage.setItem("count",JSON.stringify(s));var n=o.reduce((function(n,e){return Number(n+e.price*s[e._id])}),0);x(n)}),[o,s]);var b=function(n){var e,r=o.filter((function(e){return e._id===n})),t=(0,M.Z)(r);try{for(t.s();!(e=t.n()).done;){var a=e.value;return Number(a.price)*s[n]}}catch(i){t.e(i)}finally{t.f()}},Z=function(){var n=(0,D.Z)(q().mark((function n(){return q().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return",en.Am.error("Please, type all inputs of form"));case 2:return n.prev=2,n.next=5,(0,rn.f)({user:e,currentOrder:o,count:s,totalPrice:p});case 5:a([]),m(!0),l(0),x(0),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(2),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[2,11]])})));return function(){return n.apply(this,arguments)}}();return(0,J.jsxs)("div",{children:[g?(0,J.jsx)("h1",{className:"title",children:'"Please, add products!"'}):(0,J.jsxs)(R,{children:[" ",o.map((function(n){return(0,J.jsxs)(V,{children:[(0,J.jsx)(W,{children:(0,J.jsx)(Y,{src:n.photo,alt:n.title})}),(0,J.jsxs)("div",{children:[(0,J.jsxs)(T,{children:["Price: ",b(n._id)||n.price]}),(0,J.jsx)(T,{children:n.title})]}),(0,J.jsxs)(U,{children:[(0,J.jsx)(G,{type:"button",onClick:function(){return e=n._id,void l((function(n){var r=(n[e]||0)-1;return(0,_.Z)((0,_.Z)({},n),{},(0,I.Z)({},e,r>=0?r:0))}));var e},children:"-"}),(0,J.jsx)(X,{type:"text",name:"counter",value:s[n._id]||0,readOnly:!0}),(0,J.jsx)(G,{type:"button",onClick:function(){return e=n._id,void l((function(n){return(0,_.Z)((0,_.Z)({},n),{},(0,I.Z)({},e,(n[e]||0)+1))}));var e},children:"+"})]}),(0,J.jsx)($,{type:"button",onClick:function(){return function(n){var e=o.filter((function(e){return e._id!==n}));a(e)}(n._id)},children:(0,J.jsx)(nn.Ybf,{})})]},n._id)}))]}),!o.length||(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(H,{children:["Total price: ",p||"Please, select count of all orders"]}),(0,J.jsx)(Q,{type:"submit",onClick:Z,children:"Sumbit"})]}),g&&(0,J.jsxs)("h1",{className:"title",children:["Thank you ",e.name,' for your odrder number "',e.id,'". We will contact you soon.']})]})},on=A.Z.div(b||(b=(0,j.Z)(["\nmargin-top:20px;"]))),an={width:"360px",height:"400px",borderRadius:"10px"},cn=function(n){var e=n.center,r=k.useRef(void 0),t=k.useCallback((function(n){r.current=n}),[]),o=k.useCallback((function(n){r.current=void 0}),[]);return(0,J.jsx)(on,{children:(0,J.jsx)(w.b6,{mapContainerStyle:an,center:e,zoom:10,onLoad:t,onUnmount:o})})},sn={lat:-3.745,lng:-38.523},ln=["places"],un=function(){var n=(0,w.Ji)({id:"google-map-script",googleMapsApiKey:"AIzaSyC0rfEP1KlALoGk5YnZJ605X7ilr83PEes",libraries:ln}).isLoaded,e=(0,k.useState)(null),r=(0,y.Z)(e,2),t=r[0],o=r[1],a=A.Z.div(Z||(Z=(0,j.Z)(["\n    display: flex;\n    align-items: flex-start;"]))),i=A.Z.div(v||(v=(0,j.Z)(["\n    display: flex;\n    flex-direction:column;"])));return(0,J.jsxs)(a,{children:[(0,J.jsx)(tn,{user:t}),(0,J.jsxs)(i,{children:[(0,J.jsx)(B,{onSubmit:function(n){o(n)},isLoaded:n}),n?(0,J.jsx)(cn,{center:sn}):(0,J.jsx)("h1",{children:"Map is loading..."})]})]})}},228:function(n,e,r){r.d(e,{E:function(){return l},f:function(){return d}});var t=r(413),o=r(861),a=r(687),i=r.n(a),c=r(243),s="https://delivery-app-api-7kmw.onrender.com/api";function l(){return u.apply(this,arguments)}function u(){return(u=(0,o.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"/products/"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return p.apply(this,arguments)}function p(){return(p=(0,o.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.post("".concat(s,"/orders/"),(0,t.Z)({},e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=509.312b5a75.chunk.js.map