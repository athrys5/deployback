(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[202],{2421:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/productSales/[salesSlug]",function(){return n(4439)}])},2405:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var c=n(5893);n(7294);var a=n(7848),s=n.n(a),r=n(8193);function i(e){var t=e.hide;return(0,c.jsx)("div",{children:(0,c.jsx)("div",{className:"modal show fade",style:{display:"block",backgroundColor:"rgba(0,0,0,0.8)"},children:(0,c.jsx)("div",{className:"modal-dialog",children:(0,c.jsxs)("div",{className:"modal-content",children:[(0,c.jsxs)("div",{className:"modal-header",children:[(0,c.jsx)("div",{className:"modal-title",children:(0,c.jsxs)("div",{className:s().title,children:[(0,c.jsx)("h3",{className:s().h3,children:"Added to Cart"}),(0,c.jsx)("div",{className:s().check,children:(0,c.jsx)(r.KP3,{size:25})})]})}),(0,c.jsx)("button",{type:"button",className:"btn-close",onClick:t})]}),(0,c.jsx)("div",{className:"modal-body",children:(0,c.jsx)("p",{children:"Check your cart and proceed with the purchase if you want!"})})]})})})})}},4439:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var c=n(5893),a=n(7294),s=n(71),r=n.n(s),i=n(1163),o=n(2405);function l(){var e=function(e){var t=!1;for(var n in _)_[n].Nome==x[0].nome&&(t=!0,_[n].Quantita+=parseInt(v.current.value));t||_.push({Nome:x[0].nome,Prezzo:x[0].prezzo_scontato,Quantita:parseInt(v.current.value),Vip:!0}),localStorage.setItem("prodotti",JSON.stringify(_)),l(!0)},t=(0,i.useRouter)(),n=(0,a.useState)(!1),s=n[0],l=n[1],d=(0,a.useState)(0),u=d[0],p=d[1],h=(0,a.useState)([]),_=h[0],m=h[1],f=(0,a.useState)([]),x=f[0],N=f[1];(0,a.useEffect)(function(){m(JSON.parse(localStorage.getItem("prodotti"))||[]),fetch("http://localhost:3000/apisalSlug",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:t.query.salesSlug})}).then(function(e){return e.json()}).then(function(e){N(e.data)})},[]);var v=(0,a.useRef)(0);return(0,c.jsx)("div",{className:"container-fluid",style:{marginBottom:"30px"},children:x.map(function(n,a){return(0,c.jsxs)("div",{className:"row",children:[(0,c.jsxs)("div",{className:"col-5 ".concat(r().img),children:[(0,c.jsx)("img",{src:"",width:"500",height:"500",alt:"product on sale image"}),(0,c.jsx)("br",{}),(0,c.jsx)("button",{onClick:function(){return t.back()},className:r().backBtn,children:"Go back"})]}),(0,c.jsx)("div",{className:"col-2"}),(0,c.jsxs)("div",{className:"col ".concat(r().prodinfo),children:[(0,c.jsx)("p",{className:r().title,children:n.nome}),(0,c.jsx)("p",{children:n.description}),(0,c.jsxs)("p",{className:r().price,children:["$",n.prezzo]}),(0,c.jsxs)("p",{className:r().vipPrice,children:["$",n.prezzo_scontato]}),(0,c.jsxs)("div",{className:"row ".concat(r().select),children:[(0,c.jsx)("button",{className:r().decr,onClick:function(){0!=u&&p(u-1)},children:"-"}),(0,c.jsx)("input",{ref:v,type:"text",className:r().quantity,pattern:"[0-9]*",value:u,onChange:function(e){return p(function(t){return e.target.validity.valid?e.target.value:t})},"aria-label":"select product quantity"}),(0,c.jsx)("button",{className:r().incr,onClick:function(){return p(u+1)},children:"+"})]}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("button",{className:r().buttoncart,disabled:0==u,onClick:e,children:"Add to cart"}),!0==s?(0,c.jsx)(o.Z,{hide:function(){return l(!1)}}):""]})]})]},a)})})}},7848:function(e){e.exports={title:"ModalProd_title__6w4fo",h3:"ModalProd_h3__DJAhW",check:"ModalProd_check__1rSSu"}},71:function(e){e.exports={prodinfo:"productSales_prodinfo__uMH2R",title:"productSales_title__3IBJ5",img:"productSales_img__rwunJ",select:"productSales_select__EZMqV",price:"productSales_price__I_tvT",vipPrice:"productSales_vipPrice__iVmvN",buttoncart:"productSales_buttoncart__YesJX",incr:"productSales_incr__n9l6k",decr:"productSales_decr___zKUR",quantity:"productSales_quantity__ff5KB",backBtn:"productSales_backBtn__0O4W0"}},1163:function(e,t,n){e.exports=n(387)}},function(e){e.O(0,[617,774,888,179],function(){return e(e.s=2421)}),_N_E=e.O()}]);