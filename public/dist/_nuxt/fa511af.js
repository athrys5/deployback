(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{404:function(e,t,o){var content=o(414);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(91).default)("974bf748",content,!0,{sourceMap:!1})},413:function(e,t,o){"use strict";o(404)},414:function(e,t,o){var n=o(90)(!1);n.push([e.i,".login{display:flex;flex-direction:column;align-items:center;padding:2rem;height:100vh;margin-top:90px}.borders{background-color:#fff;padding:1rem;width:100%;max-width:640px;border-radius:1rem}.subBtn{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;border:none;cursor:pointer;padding:.5rem 1rem;background-color:#ff4548;color:#fff;font-weight:700;text-transform:uppercase;font-size:1.2rem;border-radius:.5rem}.subBtn:hover{background-color:#982e2f}.failLab{margin-top:10px}",""]),e.exports=n},456:function(e,t,o){"use strict";o.r(t);o(36);var n=o(38),r=(o(70),o(9),o(27),{middleware:"auth",data:function(){return{email:"",password:"",name:"",location:""}},methods:{checkLog:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=new Date,t.next=3,fetch("http://site212242.tw.cs.unibo.it/apisendLead",{method:"POST",body:JSON.stringify({pw:e.password,email:e.email,name:e.name,location:e.location,score:e.$store.getters.getScore,dt:"".concat(o.getMonth()+1,"/").concat(o.getDate(),"/").concat(o.getFullYear())}),headers:{"Content-Type":"application/json"}}).then((function(){e.$router.push("/games")}));case 3:case"end":return t.stop()}}),t)})))()}}}),l=(o(413),o(89)),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"login"},[t("div",{staticClass:"borders",staticStyle:{"margin-top":"90px"}},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"InputEmail1",lang:"en"}},[e._v("Email address")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{id:"InputEmail1",type:"email",placeholder:"Enter email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"InputPassword1",lang:"en"}},[e._v("Password")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{id:"InputPassword1",type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"InputNamel1",lang:"en"}},[e._v("Name")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{id:"InputName1",type:"text",placeholder:"Enter name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"InputLocation1",lang:"en"}},[e._v("Location")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.location,expression:"location"}],staticClass:"form-control",attrs:{id:"InputLocation1",type:"text",placeholder:"Enter location"},domProps:{value:e.location},on:{input:function(t){t.target.composing||(e.location=t.target.value)}}})]),e._v(" "),t("button",{staticClass:"subBtn",on:{click:e.checkLog}},[e._v("Send Data")])])])}),[],!1,null,null,null);t.default=component.exports}}]);