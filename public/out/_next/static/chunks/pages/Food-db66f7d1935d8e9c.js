(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[111],{8493:function(e,c,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Food",function(){return t(5109)}])},5109:function(e,c,t){"use strict";t.r(c),t.d(c,{__N_SSG:function(){return l},default:function(){return u}});var o=t(5893),r=t(7294),n=t(1664),a=t.n(n),s=t(3506),i=t.n(s),d=t(2585),l=!0;function u(e){var c=e.allFood,t=function(){if("HighPrice"==n.current.value){function e(e,c){return e.prezzo>c.prezzo?-1:e.prezzo<c.prezzo?1:0}j.sort(e),u(j),p(!0),f("high")}else if("LowPrice"==n.current.value){function e(e,c){return e.prezzo<c.prezzo?-1:e.prezzo>c.prezzo?1:0}j.sort(e),u(j),p(!0),f("low")}else if("AZ"==n.current.value){function e(e,c){return e.nome<c.nome?-1:e.nome>c.nome?1:0}j.sort(e),u(j),p(!0),f("az")}},n=(0,r.useRef)(),s=(0,r.useState)([]),l=s[0],u=s[1],h=(0,r.useState)(!1),_=h[0],p=h[1],m=(0,r.useState)(""),x=m[0],f=m[1],j=c;return(0,o.jsx)("div",{className:"container",style:{marginBottom:"20px"},children:(0,o.jsxs)("div",{className:"row justify-content-center",children:[(0,o.jsxs)("h2",{className:"title row ".concat(i().title),children:["All Products (",c.length,")"]}),(0,o.jsxs)("select",{className:"form-select ".concat(i().select),"aria-label":"product dispaly filter",ref:n,onChange:t,children:[(0,o.jsx)("option",{value:"default",defaultValue:!0,children:"Select a filter"}),(0,o.jsx)("option",{value:"HighPrice",children:"Higher Price"}),(0,o.jsx)("option",{value:"LowPrice",children:"Lower Price"}),(0,o.jsx)("option",{value:"AZ",children:"A-Z"})]}),!_&&(0,o.jsx)("div",{className:"row justify-content-center ".concat(i().cardgroup),children:c.map(function(e){return(0,o.jsxs)("div",{className:"card col-sm-3 ".concat(i().cardlayout),children:[(0,o.jsx)("img",{src:"/crocchette.jpg",width:"auto",height:"200",alt:"food product image"}),(0,o.jsx)("hr",{}),(0,o.jsxs)("div",{className:"card-body ".concat(i().cardbody),children:[(0,o.jsx)(a(),{href:"products/productFood/".concat(e.slug),children:(0,o.jsx)("button",{className:"stretched-link ".concat(i().button)})}),(0,o.jsx)("h5",{className:"card-title ".concat(i().cardtitle),children:e.nome}),(0,o.jsxs)("div",{className:"card-text ".concat(i().cardtext),children:[(0,o.jsxs)("p",{className:i().price,children:["$",e.prezzo]}),(0,o.jsx)(d.n8P,{className:i().icon})]})]})]},e._id)})}),_&&("high"==x||"low"==x||"az"==x)&&(0,o.jsx)("div",{className:"row justify-content-center ".concat(i().cardgroup),children:l.map(function(e){return(0,o.jsxs)("div",{className:"card col-sm-3 ".concat(i().cardlayout),children:[(0,o.jsx)("img",{src:"/crocchette.jpg",width:"auto",height:"200",alt:"food product image"}),(0,o.jsx)("hr",{}),(0,o.jsxs)("div",{className:"card-body ".concat(i().cardbody),children:[(0,o.jsx)(a(),{href:"products/productFood/".concat(e.slug),children:(0,o.jsx)("button",{className:"stretched-link ".concat(i().button)})}),(0,o.jsx)("h5",{className:"card-title ".concat(i().cardtitle),children:e.nome}),(0,o.jsxs)("div",{className:"card-text ".concat(i().cardtext),children:[(0,o.jsxs)("p",{className:i().price,children:["$",e.prezzo]}),(0,o.jsx)(d.n8P,{className:i().icon})]})]})]},e._id)})})]})})}},3506:function(e){e.exports={select:"Food_select__Ibac4",cardgroup:"Food_cardgroup__0S789",cardlayout:"Food_cardlayout__YP4YM",cardtitle:"Food_cardtitle__r7s02",cardtext:"Food_cardtext__SiXA0",price:"Food_price__42Bmr",button:"Food_button__VAm49",icon:"Food_icon__EUxOH",title:"Food_title__QcICC"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8493)}),_N_E=e.O()}]);