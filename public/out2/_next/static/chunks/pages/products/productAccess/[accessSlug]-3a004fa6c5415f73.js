(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[727],{498:function(e,t,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products/productAccess/[accessSlug]",function(){return c(1558)}])},2405:function(e,t,c){"use strict";c.d(t,{Z:function(){return i}});var s=c(5893);c(7294);var n=c(7848),a=c.n(n),r=c(8193);function i(e){var t=e.hide;return(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:"modal show fade",style:{display:"block",backgroundColor:"rgba(0,0,0,0.8)"},children:(0,s.jsx)("div",{className:"modal-dialog",children:(0,s.jsxs)("div",{className:"modal-content",children:[(0,s.jsxs)("div",{className:"modal-header",children:[(0,s.jsx)("div",{className:"modal-title",children:(0,s.jsxs)("div",{className:a().title,children:[(0,s.jsx)("h3",{className:a().h3,children:"Added to Cart"}),(0,s.jsx)("div",{className:a().check,children:(0,s.jsx)(r.KP3,{size:25})})]})}),(0,s.jsx)("button",{type:"button",className:"btn-close",onClick:t})]}),(0,s.jsx)("div",{className:"modal-body",children:(0,s.jsx)("p",{children:"Check your cart and proceed with the purchase if you want!"})})]})})})})}},1558:function(e,t,c){"use strict";c.r(t),c.d(t,{default:function(){return u}});var s=c(5893),n=c(1163),a=c(7294),r=c(6035),i=c.n(r),o=c(2405),l=c(8193),d=c(3750);function u(){var e=function(e){var t=!1;for(var c in N)N[c].Nome==r[0].nome&&(t=!0,N[c].Quantita+=parseInt(b.current.value));t||N.push({Nome:r[0].nome,Prezzo:r[0].prezzo,Quantita:parseInt(b.current.value),Vip:!1}),localStorage.setItem("prodotti",JSON.stringify(N)),_(!0)},t=(0,n.useRouter)(),c=(0,a.useState)([]),r=c[0],u=c[1],p=(0,a.useState)(!1),h=p[0],_=p[1],m=(0,a.useState)(0),f=m[0],x=m[1],j=(0,a.useState)([]),N=j[0],v=j[1];(0,a.useEffect)(function(){v(JSON.parse(localStorage.getItem("prodotti"))||[]),fetch("http://site212242.tw.cs.unibo.it/apiaccessoriSlug",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:t.query.accessSlug})}).then(function(e){return e.json()}).then(function(e){console.log(e),u(e.data)})},[]);var b=(0,a.useRef)(0);return(0,s.jsx)("div",{className:"container-fluid",style:{marginBottom:"20px"},children:r.map(function(c,n){return(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:"col-5 ".concat(i().img),children:[(0,s.jsx)("img",{src:"/cuccia.jpg",width:"500",height:"500",alt:"accessory image"}),(0,s.jsx)("br",{}),(0,s.jsxs)("button",{onClick:function(){return t.back()},className:i().backBtn,children:["Go back ",(0,s.jsx)(d.CBx,{size:20})]})]}),(0,s.jsx)("div",{className:"col-2"}),(0,s.jsxs)("div",{className:"col ".concat(i().prodinfo),children:[(0,s.jsx)("p",{className:i().title,children:c.nome}),(0,s.jsx)("p",{style:{textTransform:"capitalize",fontSize:"18px"},children:c.description}),(0,s.jsxs)("p",{className:i().price,children:["$",c.prezzo]}),(0,s.jsxs)("div",{className:"row ".concat(i().select),children:[(0,s.jsx)("button",{className:i().decr,onClick:function(){0!=f&&x(f-1)},children:"-"}),(0,s.jsx)("input",{ref:b,type:"text",className:i().quantity,pattern:"[0-9]*",value:f,onChange:function(e){return x(function(t){return e.target.validity.valid?e.target.value:t})},"aria-label":"select product quantity"}),(0,s.jsx)("button",{className:i().incr,onClick:function(){return x(f+1)},children:"+"})]}),(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("button",{className:i().buttoncart,disabled:0==f,onClick:e,children:["Add to cart ",(0,s.jsx)(l.nxQ,{size:20})]}),!0==h?(0,s.jsx)(o.Z,{hide:function(){return _(!1)}}):""]})]})]},n)})})}},7848:function(e){e.exports={title:"ModalProd_title__6w4fo",h3:"ModalProd_h3__DJAhW",check:"ModalProd_check__1rSSu"}},6035:function(e){e.exports={prodinfo:"productAccess_prodinfo__uFnLn",title:"productAccess_title__id4m8",img:"productAccess_img__0URx_",select:"productAccess_select__B2Jx9",price:"productAccess_price__QAnv1",buttoncart:"productAccess_buttoncart__9efqb",incr:"productAccess_incr__dhkSc",decr:"productAccess_decr___v2kS",quantity:"productAccess_quantity__RSbG0",backBtn:"productAccess_backBtn__zmelI"}},1163:function(e,t,c){e.exports=c(387)}},function(e){e.O(0,[617,774,888,179],function(){return e(e.s=498)}),_N_E=e.O()}]);