(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{9048:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Cart",function(){return a(1360)}])},1360:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var s=a(5893),n=a(7294),c=a(1694),r=a.n(c),i=a(1163),l=a(9138),o=a.n(l),d=a(8193);function u(e){var t=e.hide;return(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:"modal show fade",style:{display:"block",backgroundColor:"rgba(0,0,0,0.8)"},children:(0,s.jsx)("div",{className:"modal-dialog",children:(0,s.jsxs)("div",{className:"modal-content",children:[(0,s.jsxs)("div",{className:"modal-header",children:[(0,s.jsx)("div",{className:"modal-title",children:(0,s.jsxs)("div",{className:o().title,children:[(0,s.jsx)("h3",{className:o().h3,children:"Purchase Made"}),(0,s.jsx)("div",{className:o().check,children:(0,s.jsx)(d.KP3,{size:25})})]})}),(0,s.jsx)("button",{type:"button",className:"btn-close",onClick:t})]}),(0,s.jsx)("div",{className:"modal-body",children:(0,s.jsx)("p",{children:"Thank You! You can check the order in your profile."})})]})})})})}var p=a(3750);function m(){var e=function(){f(!1),fetch("http://site212242.tw.cs.unibo.it/apiordersPost",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order:_,email:I.user.email,price:C})}),localStorage.clear(),S(0),E(JSON.parse(localStorage.getItem("prodotti"))||[]),G(!0)},t=function(){if(I.key||0==k.length){var e=[],t={};for(var a in k)t={name:k[a].Nome,price:k[a].Prezzo,quantity:k[a].Quantita},e.push(t),t={};""!=e&&(m(!0),x(e),f(!0),v(!1))}else J.push("/login")},a=(0,n.useState)([]),c=a[0],l=a[1],o=(0,n.useState)(!1),d=o[0],m=o[1],h=(0,n.useState)([]),_=h[0],x=h[1],j=(0,n.useState)(!1),N=j[0],f=j[1],b=(0,n.useState)(!0),y=b[0],v=b[1],g=(0,n.useState)(0),C=g[0],S=g[1],w=(0,n.useState)([]),k=w[0],E=w[1],z=(0,n.useState)(!1),P=z[0],G=z[1],Q=(0,n.useState)({}),I=Q[0],O=Q[1],J=(0,i.useRouter)(),M=new Date;(0,n.useEffect)(function(){fetch("./exist.json",{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){O(e)}),E(JSON.parse(localStorage.getItem("prodotti"))||[]);var e=JSON.parse(localStorage.getItem("prodotti"))||[],t=0;for(var a in e)t=e[a].Quantita*e[a].Prezzo+t;S(t)},[I]),(0,n.useEffect)(function(){I.key&&fetch("http://site212242.tw.cs.unibo.it/dataAccountGet",{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){l(e.data)})},[d,I]);var T=function(e){S(C-e.Prezzo*e.Quantita),k=k.filter(function(t){return t!==e}),localStorage.setItem("prodotti",JSON.stringify(k)),E(JSON.parse(localStorage.getItem("prodotti"))||[])},D=function(e,t){var a=!1;t?(e.Quantita=e.Quantita+1,S(C+e.Prezzo)):e.Quantita-1==0?(T(e),a=!0):(e.Quantita=e.Quantita-1,S(C-e.Prezzo)),a||(localStorage.setItem("prodotti",JSON.stringify(k)),E(JSON.parse(localStorage.getItem("prodotti"))||[]))};return(0,s.jsx)("div",{className:"container-fluid ".concat(r().container),children:(0,s.jsxs)("div",{className:"row justify-content-center",style:{margin:0,padding:0,marginBottom:"10rem"},children:[(0,s.jsxs)("div",{className:"card col-lg-7 col-md-8 col-sm-11 ".concat(r().extcard),children:[(0,s.jsxs)("div",{className:r().cartinfo,children:[(0,s.jsx)("p",{className:r().cardtitle,children:"Shopping Cart"}),(0,s.jsxs)("p",{className:r().itemnumber,children:[k.length," Items"]})]}),(0,s.jsx)("hr",{className:r().hr}),(0,s.jsx)("div",{className:r().cardbodyExt,children:k.map(function(e,t){return(0,s.jsx)("div",{className:"".concat(r().row),children:(0,s.jsxs)("div",{className:"card ".concat(r().card),children:[(0,s.jsxs)("div",{className:"row",style:{padding:"8px"},children:[(0,s.jsx)("p",{className:"col-lg-6 col-md-6 col-sm-2 ".concat(r().prodtitle),children:e.Nome}),(0,s.jsxs)("div",{className:"col-lg-4 col-md-6 col-sm-9 ".concat(r().cardbodyInt),children:[(0,s.jsxs)("p",{children:[(0,s.jsx)("button",{className:r().decr,disabled:d,onClick:function(){0!=e.Quantita&&D(e,!1)},children:"-"}),(0,s.jsx)("input",{type:"text",className:r().quantity,disabled:!0,value:e.Quantita,"aria-label":"define product quantity"}),(0,s.jsx)("button",{className:r().incr,disabled:d,onClick:function(){return D(e,!0)},children:"+"})]}),(0,s.jsxs)("span",{className:r().span,children:["$",e.Prezzo*e.Quantita]})]})]}),(0,s.jsx)("div",{style:{padding:"8px"},children:(0,s.jsxs)("button",{type:"button",disabled:d,className:r().deleteBtn,onClick:function(){return T(e)},children:["Delete ",(0,s.jsx)(p.yvY,{})]})})]})},t)})})]}),(0,s.jsxs)("div",{className:"card col-lg-4 col-md-8 col-sm-10 ".concat(r().summarycard),children:[(0,s.jsx)("p",{className:r().summarytitle,children:"Summary"}),(0,s.jsxs)("div",{className:r().priceinfo,children:[(0,s.jsxs)("p",{children:["Products: $",C]}),(0,s.jsx)("p",{children:"Shipping: free"}),(0,s.jsxs)("p",{children:["Date: ",M.getDate(),"/",M.getMonth()+1,"/",M.getFullYear()]})]}),(0,s.jsx)("hr",{className:"col-lg-10"}),(0,s.jsxs)("div",{className:r().totalprice,children:["Total amount: $",C]}),k.length>0&&(0,s.jsxs)("p",{children:["Expected Shipping Delivery: ",M.getDate()+1,"/",M.getMonth()+1,"/",M.getFullYear()," - ",M.getDate()+3,"/",M.getMonth()+1,"/",M.getFullYear()]}),(0,s.jsxs)("div",{children:[!0==y&&(0,s.jsx)("div",{className:"row justify-content-center",children:(0,s.jsx)("button",{className:r().purchaseBtn,onClick:t,children:"Go to check out"})}),!0==N?(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:r().titledelivery,children:"Delivery Data"}),c.map(function(e,t){return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"row justify-content-center",children:(0,s.jsxs)("div",{className:"input-group mb-3 ".concat(r().inputG),children:[(0,s.jsx)("span",{className:"input-group-text ".concat(r().label),id:"namelabel",children:"First Name"}),(0,s.jsx)("input",{type:"text",className:"form-control",placeholder:e.firstname,"aria-describedby":"namelabel",disabled:!0})]})}),(0,s.jsx)("div",{className:"row justify-content-center",children:(0,s.jsxs)("div",{className:"input-group mb-3 ".concat(r().inputG),children:[(0,s.jsx)("span",{className:"input-group-text ".concat(r().label),id:"snlabel",children:"Second Name"}),(0,s.jsx)("input",{type:"text",className:"form-control",placeholder:e.secondname,"aria-describedby":"snlabel",disabled:!0})]})}),(0,s.jsx)("div",{className:"row justify-content-center",children:(0,s.jsxs)("div",{className:"input-group mb-3 ".concat(r().inputG),children:[(0,s.jsx)("span",{className:"input-group-text ".concat(r().label),id:"statelabel",children:"State"}),(0,s.jsx)("input",{type:"text",className:"form-control",placeholder:e.state,"aria-describedby":"statelabel",disabled:!0})]})}),(0,s.jsx)("div",{className:"row justify-content-center",children:(0,s.jsxs)("div",{className:"input-group mb-3 ".concat(r().inputG),children:[(0,s.jsx)("span",{className:"input-group-text ".concat(r().label),id:"citylabel",children:"City"}),(0,s.jsx)("input",{type:"text",className:"form-control",placeholder:e.city,"aria-describedby":"citylabel",disabled:!0})]})}),(0,s.jsx)("div",{className:"row justify-content-center",children:(0,s.jsxs)("div",{className:"input-group mb-3 ".concat(r().inputG),children:[(0,s.jsx)("span",{className:"input-group-text ".concat(r().label),id:"addresslabel",children:"Address"}),(0,s.jsx)("input",{type:"text",className:"form-control",placeholder:e.address,"aria-describedby":"addresslabel",disabled:!0})]})})]},t)}),(0,s.jsx)("div",{className:"row justify-content-center",children:(0,s.jsx)("button",{className:r().purchaseBtn,onClick:e,children:"Purchase"})})]}):""]})]}),!0==P?(0,s.jsx)(u,{hide:function(){return G(!1)}}):""]})})}},9138:function(e){e.exports={title:"ModalCart_title__avjcx",h3:"ModalCart_h3__E9bwV",check:"ModalCart_check__2G5X7"}},1694:function(e){e.exports={container:"Cart_container__yVdfN",row:"Cart_row__VrfgQ",cartinfo:"Cart_cartinfo__mCN_9",itemnumber:"Cart_itemnumber__Yi2WC",extcard:"Cart_extcard__FSJpg",summarycard:"Cart_summarycard__W9RCh",card:"Cart_card__zwWPz",cardtitle:"Cart_cardtitle__u_MMQ",cardbodyExt:"Cart_cardbodyExt__q6KwE",prodtitle:"Cart_prodtitle__cHglS",cardbodyInt:"Cart_cardbodyInt__EfLhX",span:"Cart_span__4UECN",incr:"Cart_incr__atpaY",decr:"Cart_decr__p_uPJ",deleteBtn:"Cart_deleteBtn__U_1AE",quantity:"Cart_quantity__u1zRF",summarytitle:"Cart_summarytitle__U_Ovv",hr:"Cart_hr__ZACvh",priceinfo:"Cart_priceinfo__quVAp",purchaseBtn:"Cart_purchaseBtn__0A5SC",totalprice:"Cart_totalprice__pkMvq",titledelivery:"Cart_titledelivery__7_ug6",label:"Cart_label__uIY8v",inputG:"Cart_inputG__69cGK"}},1163:function(e,t,a){e.exports=a(387)}},function(e){e.O(0,[617,774,888,179],function(){return e(e.s=9048)}),_N_E=e.O()}]);