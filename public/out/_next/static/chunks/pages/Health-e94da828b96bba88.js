(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[933],{1843:function(e,t,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Health",function(){return c(4688)}])},4688:function(e,t,c){"use strict";c.r(t),c.d(t,{__N_SSG:function(){return d},default:function(){return u}});var a=c(5893),r=c(7294),n=c(1664),s=c.n(n),l=c(3090),o=c.n(l),i=c(2585),d=!0;function u(e){var t=e.allHealth,c=function(){if("HighPrice"==n.current.value){function e(e,t){return e.prezzo>t.prezzo?-1:e.prezzo<t.prezzo?1:0}f.sort(e),u(f),p(!0),j("high")}else if("LowPrice"==n.current.value){function e(e,t){return e.prezzo<t.prezzo?-1:e.prezzo>t.prezzo?1:0}f.sort(e),u(f),p(!0),j("low")}else if("AZ"==n.current.value){function e(e,t){return e.nome<t.nome?-1:e.nome>t.nome?1:0}f.sort(e),u(f),p(!0),j("az")}},n=(0,r.useRef)(),l=(0,r.useState)([]),d=l[0],u=l[1],h=(0,r.useState)(!1),_=h[0],p=h[1],m=(0,r.useState)(""),x=m[0],j=m[1],f=t;return(0,a.jsx)("div",{className:"container",style:{marginBottom:"20px"},children:(0,a.jsxs)("div",{className:"row justify-content-center",children:[(0,a.jsxs)("h2",{className:"title row ".concat(o().title),children:["All Products (",t.length,")"]}),(0,a.jsxs)("select",{className:"form-select ".concat(o().select),"aria-label":"product dispaly filter",ref:n,onChange:c,children:[(0,a.jsx)("option",{value:"default",defaultValue:!0,children:"Select a filter"}),(0,a.jsx)("option",{value:"HighPrice",children:"Higher Price"}),(0,a.jsx)("option",{value:"LowPrice",children:"Lower Price"}),(0,a.jsx)("option",{value:"AZ",children:"A-Z"})]}),!_&&(0,a.jsx)("div",{className:"row justify-content-center ".concat(o().cardgroup),children:t.map(function(e){return(0,a.jsxs)("div",{className:"card col-sm-3 ".concat(o().cardlayout),children:[(0,a.jsx)("img",{src:"/health.jpg",width:"auto",height:"200",alt:"health product image"}),(0,a.jsx)("hr",{}),(0,a.jsxs)("div",{className:"card-body ".concat(o().cardbody),children:[(0,a.jsx)(s(),{href:"products/productHealth/".concat(e.slug),children:(0,a.jsx)("button",{className:"stretched-link ".concat(o().button)})}),(0,a.jsx)("h5",{className:"card-title ".concat(o().cardtitle),children:e.nome}),(0,a.jsxs)("div",{className:"card-text ".concat(o().cardtext),children:[(0,a.jsxs)("p",{className:o().price,children:["$",e.prezzo]}),(0,a.jsx)(i.Du4,{className:o().icon})]})]})]},e._id)})}),_&&("high"==x||"low"==x||"az"==x)&&(0,a.jsx)("div",{className:"row justify-content-center ".concat(o().cardgroup),children:d.map(function(e){return(0,a.jsxs)("div",{className:"card col-sm-3 ".concat(o().cardlayout),children:[(0,a.jsx)("img",{src:"/health.jpg",width:"auto",height:"200",alt:"health product image"}),(0,a.jsx)("hr",{}),(0,a.jsxs)("div",{className:"card-body ".concat(o().cardbody),children:[(0,a.jsx)(s(),{href:"products/productHealth/".concat(e.slug),children:(0,a.jsx)("button",{className:"stretched-link ".concat(o().button)})}),(0,a.jsx)("h5",{className:"card-title ".concat(o().cardtitle),children:e.nome}),(0,a.jsxs)("div",{className:"card-text ".concat(o().cardtext),children:[(0,a.jsxs)("p",{className:o().price,children:["$",e.prezzo]}),(0,a.jsx)(i.Du4,{className:o().icon})]})]})]},e._id)})})]})})}},3090:function(e){e.exports={select:"Health_select__HMuLR",cardgroup:"Health_cardgroup__3zLe9",cardlayout:"Health_cardlayout__t0cRO",cardtitle:"Health_cardtitle__8kzxb",cardtext:"Health_cardtext__aztBB",price:"Health_price__Ehyv9",button:"Health_button__p6zc_",icon:"Health_icon__m9IEG",title:"Health_title__HE9Nm"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=1843)}),_N_E=e.O()}]);