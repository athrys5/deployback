(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[547],{266:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products/productHealth/[healthSlug]",function(){return n(1458)}])},2405:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var a=n(5893);n(7294);var c=n(7848),r=n.n(c),s=n(8193);function i(t){var e=t.hide;return(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"modal show fade",style:{display:"block",backgroundColor:"rgba(0,0,0,0.8)"},children:(0,a.jsx)("div",{className:"modal-dialog",children:(0,a.jsxs)("div",{className:"modal-content",children:[(0,a.jsxs)("div",{className:"modal-header",children:[(0,a.jsx)("div",{className:"modal-title",children:(0,a.jsxs)("div",{className:r().title,children:[(0,a.jsx)("h3",{className:r().h3,children:"Added to Cart"}),(0,a.jsx)("div",{className:r().check,children:(0,a.jsx)(s.KP3,{size:25})})]})}),(0,a.jsx)("button",{type:"button",className:"btn-close",onClick:e})]}),(0,a.jsx)("div",{className:"modal-body",children:(0,a.jsx)("p",{children:"Check your cart and proceed with the purchase if you want!"})})]})})})})}},1458:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u}});var a=n(5893),c=n(7294),r=n(6914),s=n.n(r),i=n(1163),o=n(2405),l=n(8193),d=n(3750);function u(t){t.product;var e=function(t){var e=!1;for(var n in b)b[n].Nome==j[0].nome&&(e=!0,b[n].Quantita+=parseInt(f.current.value));e||b.push({Nome:j[0].nome,Prezzo:j[0].prezzo,Quantita:parseInt(f.current.value),Vip:!1}),localStorage.setItem("prodotti",JSON.stringify(b)),h(!0)},n=(0,i.useRouter)(),r=(0,c.useState)(!1),u=r[0],h=r[1],p=(0,c.useState)(0),_=p[0],m=p[1],f=(0,c.useRef)(0),x=(0,c.useState)([]),j=x[0],N=x[1],v=(0,c.useState)([]),b=v[0],g=v[1];return(0,c.useEffect)(function(){g(JSON.parse(localStorage.getItem("prodotti"))||[]),fetch("http://localhost:3000/apisanSlug",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n.query.healthSlug})}).then(function(t){return t.json()}).then(function(t){N(t.data)})},[]),(0,a.jsx)("div",{className:"container-fluid",style:{marginBottom:"20px"},children:j.map(function(t,c){return(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col-5 ".concat(s().img),children:[(0,a.jsx)("img",{src:"/health.jpg",width:"500",height:"500",alt:"health product image"}),(0,a.jsx)("br",{}),(0,a.jsxs)("button",{onClick:function(){return n.back()},className:s().backBtn,children:["Go back ",(0,a.jsx)(d.CBx,{size:20})]})]}),(0,a.jsx)("div",{className:"col-2"}),(0,a.jsxs)("div",{className:"col ".concat(s().prodinfo),children:[(0,a.jsx)("p",{className:s().title,children:t.nome}),(0,a.jsx)("p",{style:{textTransform:"capitalize",fontSize:"18px"},children:t.description}),(0,a.jsxs)("p",{className:s().price,children:["$",t.prezzo]}),(0,a.jsxs)("div",{className:"row ".concat(s().select),children:[(0,a.jsx)("button",{className:s().decr,onClick:function(){0!=_&&m(_-1)},children:"-"}),(0,a.jsx)("input",{type:"text",ref:f,className:s().quantity,pattern:"[0-9]*",value:_,onChange:function(t){return m(function(e){return t.target.validity.valid?t.target.value:e})},"aria-label":"select product quantity"}),(0,a.jsx)("button",{className:s().incr,onClick:function(){return m(_+1)},children:"+"})]}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("button",{className:s().buttoncart,disabled:0==_,onClick:e,children:["Add to cart ",(0,a.jsx)(l.nxQ,{size:20})]}),!0==u?(0,a.jsx)(o.Z,{hide:function(){return h(!1)}}):""]})]})]},c)})})}},7848:function(t){t.exports={title:"ModalProd_title__6w4fo",h3:"ModalProd_h3__DJAhW",check:"ModalProd_check__1rSSu"}},6914:function(t){t.exports={prodinfo:"productHealth_prodinfo__r3WK9",title:"productHealth_title__kgj_P",img:"productHealth_img__SjlIc",select:"productHealth_select__tqkNc",price:"productHealth_price__WeoDE",buttoncart:"productHealth_buttoncart__u35Mo",incr:"productHealth_incr___WY12",decr:"productHealth_decr__6qtj9",quantity:"productHealth_quantity__vzG34",backBtn:"productHealth_backBtn__03zrt"}},1163:function(t,e,n){t.exports=n(387)}},function(t){t.O(0,[617,774,888,179],function(){return t(t.s=266)}),_N_E=t.O()}]);