(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[527],{4629:function(c,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Accessory",function(){return t(9771)}])},9771:function(c,e,t){"use strict";t.r(e),t.d(e,{default:function(){return d}});var s=t(5893),r=t(7294),a=t(1664),n=t.n(a),o=t(2585),i=t(5485),l=t.n(i);function d(){var c=function(){if("HighPrice"==e.current.value){function c(c,e){return c.prezzo>e.prezzo?-1:c.prezzo<e.prezzo?1:0}N.sort(c),i(N),h(!0),f("high")}else if("LowPrice"==e.current.value){function c(c,e){return c.prezzo<e.prezzo?-1:c.prezzo>e.prezzo?1:0}N.sort(c),i(N),h(!0),f("low")}else if("AZ"==e.current.value){function c(c,e){return c.nome<e.nome?-1:c.nome>e.nome?1:0}N.sort(c),i(N),h(!0),f("az")}},e=(0,r.useRef)(),t=(0,r.useState)([]),a=t[0],i=t[1],d=(0,r.useState)(!1),u=d[0],h=d[1],p=(0,r.useState)(""),_=p[0],f=p[1],x=(0,r.useState)([]),m=x[0],j=x[1],y=(0,r.useState)([]),N=y[0],z=y[1];return(0,r.useEffect)(function(){fetch("http://localhost:3000/apiaccessoryprod",{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(c){return c.json()}).then(function(c){j(c.data),z(c.data)})},[]),(0,s.jsx)("div",{className:"container",style:{marginBottom:"20px"},children:(0,s.jsxs)("div",{className:"row justify-content-center",children:[(0,s.jsxs)("h2",{className:"title row ".concat(l().title),children:["All Products (",m.length,")"]}),(0,s.jsxs)("select",{className:"form-select ".concat(l().select),"aria-label":"product dispaly filter",ref:e,onChange:c,children:[(0,s.jsx)("option",{value:"default",defaultValue:!0,children:"Select a filter"}),(0,s.jsx)("option",{value:"HighPrice",children:"Higher Price"}),(0,s.jsx)("option",{value:"LowPrice",children:"Lower Price"}),(0,s.jsx)("option",{value:"AZ",children:"A-Z"})]}),!u&&(0,s.jsx)("div",{className:"row justify-content-center ".concat(l().cardgroup),children:m.map(function(c){return(0,s.jsxs)("div",{className:"card col-sm-3 ".concat(l().cardlayout),children:[(0,s.jsx)("img",{src:"/cuccia.jpg",width:"auto",height:"200",alt:"accessory image"}),(0,s.jsx)("hr",{}),(0,s.jsxs)("div",{className:"card-body ".concat(l().cardbody),children:[(0,s.jsx)(n(),{href:"products/productAccess/".concat(c.slug),children:(0,s.jsx)("button",{className:"stretched-link ".concat(l().button)})}),(0,s.jsx)("h5",{className:"card-title ".concat(l().cardtitle),children:c.nome}),(0,s.jsxs)("div",{className:"card-text ".concat(l().cardtext),children:[(0,s.jsxs)("p",{className:l().price,children:["$",c.prezzo]}),(0,s.jsx)(o.pMd,{className:l().icon})]})]})]},c._id)})}),u&&("high"==_||"low"==_||"az"==_)&&(0,s.jsx)("div",{className:"row justify-content-center ".concat(l().cardgroup),children:a.map(function(c){return(0,s.jsxs)("div",{className:"card col-sm-3 ".concat(l().cardlayout),children:[(0,s.jsx)("img",{src:"/cuccia.jpg",width:"auto",height:"200",alt:"accessory image"}),(0,s.jsx)("hr",{}),(0,s.jsxs)("div",{className:"card-body ".concat(l().cardbody),children:[(0,s.jsx)(n(),{href:"products/productAccess/".concat(c.slug),children:(0,s.jsx)("button",{className:"stretched-link ".concat(l().button)})}),(0,s.jsx)("h5",{className:"card-title ".concat(l().cardtitle),children:c.nome}),(0,s.jsxs)("div",{className:"card-text ".concat(l().cardtext),children:[(0,s.jsxs)("p",{className:l().price,children:["$",c.prezzo]}),(0,s.jsx)(o.pMd,{className:l().icon})]})]})]},c._id)})})]})})}},5485:function(c){c.exports={select:"Accessory_select__w_MSL",cardgroup:"Accessory_cardgroup__G_oa1",cardlayout:"Accessory_cardlayout__9fMse",cardtitle:"Accessory_cardtitle__FrbeJ",cardtext:"Accessory_cardtext__plX0I",price:"Accessory_price__8TkaV",button:"Accessory_button__AkxzF",icon:"Accessory_icon__UqHXC",title:"Accessory_title__CEb6W"}}},function(c){c.O(0,[774,888,179],function(){return c(c.s=4629)}),_N_E=c.O()}]);