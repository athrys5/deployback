(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[473],{8020:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth",function(){return n(5908)}])},5908:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return m}});var s=n(5893),t=n(1163),c=n(3299),a=n(7294),l=n(7568),i=n(655),u=n(612),d=n.n(u);function o(){return(o=(0,l.Z)(function(e,r,n,s,t,c,a,l){var u,d;return(0,i.__generator)(this,function(i){switch(i.label){case 0:return[4,fetch("/api/auth/signup",{method:"POST",body:JSON.stringify({email:e,password:r,userid:n,firstname:s,secondname:t,city:c,state:a,address:l}),headers:{"Content-Type":"application/json"}})];case 1:return[4,i.sent().json()];case 2:return[2,i.sent()]}})})).apply(this,arguments)}var h=function(){var e=function(){S?(v.current.value="",f.current.value=""):(x.current.value="",j.current.value="",N.current.value="",b.current.value="",g.current.value="",_.current.value="",y.current.value="",w.current.value=""),F(function(e){return!e})},r=(0,a.useState)(""),n=r[0],u=r[1],h=(0,a.useState)(""),m=h[0],p=h[1],x=(0,a.useRef)(),j=(0,a.useRef)(),v=(0,a.useRef)(),f=(0,a.useRef)(),N=(0,a.useRef)(),b=(0,a.useRef)(),g=(0,a.useRef)(),_=(0,a.useRef)(),y=(0,a.useRef)(),w=(0,a.useRef)(),R=(0,a.useState)(!0),S=R[0],F=R[1],L=(0,t.useRouter)();function E(){return(E=(0,l.Z)(function(e){var r,n,s;return(0,i.__generator)(this,function(t){switch(t.label){case 0:return e.preventDefault(),r=v.current.value,n=f.current.value,[4,(0,c.signIn)("credentials",{redirect:!1,email:r,password:n})];case 1:return s=t.sent(),v.current.value="",f.current.value="",s.error?p(s.error):L.back(),[2]}})})).apply(this,arguments)}function P(){return(P=(0,l.Z)(function(e){var r,n,s,t,c,a,l,d,h;return(0,i.__generator)(this,function(i){switch(i.label){case 0:return e.preventDefault(),r=x.current.value,n=j.current.value,s=N.current.value,t=b.current.value,c=g.current.value,a=_.current.value,[4,function(e,r,n,s,t,c,a,l){return o.apply(this,arguments)}(r,n,s,t,c,a,l=y.current.value,w.current.value)];case 1:return u(i.sent().message),x.current.value="",j.current.value="",N.current.value="",b.current.value="",g.current.value="",_.current.value="",y.current.value="",w.current.value="",[2]}})})).apply(this,arguments)}return(0,s.jsx)(s.Fragment,{children:S?(0,s.jsxs)("div",{className:"container-fluid",lang:"en",children:[(0,s.jsx)("div",{className:"row justify-content-center",children:(0,s.jsx)("div",{className:"col-sm-12 col-md-10 col-lg-6",children:(0,s.jsxs)("div",{className:"card ".concat(d().cardcontent),children:[(0,s.jsx)("div",{className:"card-title ".concat(d().cardtitle),children:(0,s.jsx)("span",{children:"Login"})}),(0,s.jsx)("div",{className:"card-subtitle ".concat(d().cardsubtitle),children:(0,s.jsx)("span",{children:"Access our services"})}),(0,s.jsx)("div",{className:"card-body",children:(0,s.jsx)("form",{onSubmit:function(e){return E.apply(this,arguments)},children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:"col-12",children:[(0,s.jsx)("label",{htmlFor:"inputUserId",children:"Email"}),(0,s.jsx)("input",{ref:v,type:"text",className:"form-control",id:"inputUserId",placeholder:"example@gmail.com"})]}),(0,s.jsxs)("div",{className:"col-12",children:[(0,s.jsx)("label",{htmlFor:"inputPassword",children:"Password"}),(0,s.jsx)("input",{ref:f,type:"password",className:"form-control",id:"inputPassword",placeholder:"********"})]}),(0,s.jsx)("div",{className:"row ".concat(d().btn1),children:(0,s.jsxs)("div",{className:"col-12",children:[(0,s.jsx)("p",{children:(0,s.jsx)("button",{className:"btn ".concat(d().btnLogReg),children:"Login"})}),(0,s.jsx)("p",{children:(0,s.jsx)("button",{type:"button",className:d().alreadysigned,onClick:e,children:"New customer? Sign here."})})]})})]})})})]})})}),(0,s.jsx)("p",{className:d().res,children:m})]}):(0,s.jsxs)("div",{className:"container-fluid",children:[(0,s.jsx)("div",{className:"row justify-content-center",children:(0,s.jsx)("div",{className:"col-sm-12 col-md-10 col-lg-6",children:(0,s.jsxs)("div",{className:"card ".concat(d().cardcontent),children:[(0,s.jsx)("div",{className:"card-title ".concat(d().cardtitle),children:(0,s.jsx)("span",{children:"Register"})}),(0,s.jsx)("div",{className:"card-subtitle ".concat(d().cardsubtitle),children:(0,s.jsx)("span",{children:"in some easy steps"})}),(0,s.jsx)("div",{className:"card-body",children:(0,s.jsx)("form",{onSubmit:function(e){return P.apply(this,arguments)},children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:"col-12",children:[(0,s.jsx)("label",{htmlFor:"inputFirstname",children:"First Name"}),(0,s.jsx)("input",{ref:b,type:"text",className:"form-control",id:"inputFirstname",placeholder:"Adrien"})]}),(0,s.jsxs)("div",{className:"col-12",children:[(0,s.jsx)("label",{htmlFor:"inputSecondname",children:"Second Name"}),(0,s.jsx)("input",{ref:g,type:"text",className:"form-control",id:"inputSecondname",placeholder:"Martin"})]}),(0,s.jsxs)("div",{className:"col-12",children:[(0,s.jsx)("label",{htmlFor:"inputCity",children:"City"}),(0,s.jsx)("input",{ref:_,type:"text",className:"form-control",id:"inputCity",placeholder:"Paris"})]}),(0,s.jsxs)("div",{className:"col-12",children:[(0,s.jsx)("label",{htmlFor:"inputState",children:"State"}),(0,s.jsx)("input",{ref:y,type:"text",className:"form-control",id:"inputState",placeholder:"France"})]}),(0,s.jsxs)("div",{className:"col-12",children:[(0,s.jsx)("label",{htmlFor:"inputAddress",children:"Address"}),(0,s.jsx)("input",{ref:w,type:"text",className:"form-control",id:"inputAddress",placeholder:"Avenue des Champs-\xc9lys\xe9es"})]}),(0,s.jsxs)("div",{className:"col-12",children:[(0,s.jsx)("label",{htmlFor:"inputEmail",children:"Email"}),(0,s.jsx)("input",{ref:x,type:"email",className:"form-control",id:"inputEmail",placeholder:"example@gmail.com"})]}),(0,s.jsxs)("div",{className:"col-12",children:[(0,s.jsx)("label",{htmlFor:"inputUserId",children:"UserId"}),(0,s.jsx)("input",{ref:N,type:"text",className:"form-control",id:"inputUserId",placeholder:"Adri91"})]}),(0,s.jsxs)("div",{className:"col-12",children:[(0,s.jsx)("label",{htmlFor:"inputPassword",children:"Password"}),(0,s.jsx)("input",{ref:j,type:"password",className:"form-control",id:"inputPassword",placeholder:"********"})]}),(0,s.jsx)("div",{className:"row ".concat(d().btn1),children:(0,s.jsxs)("div",{className:"col-12",children:[(0,s.jsx)("p",{children:(0,s.jsx)("button",{className:"btn ".concat(d().btnLogReg),children:"Register"})}),(0,s.jsx)("p",{children:(0,s.jsx)("button",{type:"button",className:d().alreadysigned,onClick:e,children:"Already have an account? Sign in here."})})]})})]})})})]})})}),(0,s.jsx)("p",{className:d().res,children:n})]})})},m=function(){var e=(0,a.useState)(!0),r=e[0],n=e[1],l=(0,t.useRouter)();return((0,a.useEffect)(function(){(0,c.getSession)().then(function(e){e?l.replace("/"):n(!1)})},[l]),r)?(0,s.jsx)("p",{children:"Loading..."}):(0,s.jsx)(h,{})}},612:function(e){e.exports={cardtitle:"Login_cardtitle__WcVHK",cardsubtitle:"Login_cardsubtitle__MskF2",cardcontent:"Login_cardcontent__vljDV",btn1:"Login_btn1__PwUn9",alreadysigned:"Login_alreadysigned__OEflb",res:"Login_res__wUUZn",btnLogReg:"Login_btnLogReg__x_5cq"}}},function(e){e.O(0,[57,774,888,179],function(){return e(e.s=8020)}),_N_E=e.O()}]);