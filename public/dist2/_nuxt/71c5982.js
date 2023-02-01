(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{408:function(t,o,n){var content=n(444);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(91).default)("3d6ef544",content,!0,{sourceMap:!1})},443:function(t,o,n){"use strict";n(408)},444:function(t,o,n){var e=n(90)(!1);e.push([t.i,'body{background-color:hsla(0,0%,97.3%,.808)}.curiositycontainer{margin-top:90px;padding:0}.labelInputComName{font-size:30px;color:#14171a;text-transform:uppercase;margin-right:10px;margin-left:10px}.labelNotValid{font-size:15px;color:#ff4742;text-transform:uppercase}.inputComName{margin-bottom:5px}.curiosity,.inputComName{text-align:center}.curiositycard{background-color:#fff;color:#14171a;border:0;margin:1px;padding:28px;border-radius:0;box-sizing:border-box;box-shadow:8px 8px 9px #b3b2b1}.curiositycard .card-img-top{border:.5px solid #c4c2c2;border-radius:3px;box-sizing:border-box;margin-top:-50px;box-shadow:2px 2px 2px #c4c2c2}.curiositycard .card-title{margin-top:10px;font-size:30px;color:#14171a;text-transform:uppercase}.curiositycard .card-body{padding:0}.labelCommonName .curiositycard .card-text{font-weight:0;color:#14171a;text-transform:capitalize;font-family:Verdana,Geneva,Tahoma,sans-serif}.btnCuriosity{background:#ff4742;border:1px solid #ff4742;border-radius:2rem;box-shadow:1px 2px 4px rgba(0,0,0,.1);box-sizing:border-box;color:#fff;cursor:pointer;display:inline-block;font-family:"Franklin Gothic Medium";font-size:16px;font-weight:800;line-height:16px;min-height:50px;outline:0;padding:0;text-align:center;text-rendering:geometricprecision;vertical-align:middle;width:50%;margin-top:1.5rem;margin-bottom:10px}.btnCuriosity:active{transform:translateY(4px)}.btnCuriosity:active,.btnCuriosity:hover{background-color:transparent;background-color:initial}.btnCuriosity:hover{color:#ff4742}',""]),t.exports=e},462:function(t,o,n){"use strict";n.r(o);n(36);var e=n(109),r={data:function(){return{list:[],commoname:""}},mounted:function(){this.commoname="dog",this.getCuriosity()},methods:{getCuriosity:function(){var t=this;e.request({method:"GET",url:"https://animals-by-api-ninjas.p.rapidapi.com/v1/animals",params:{name:this.commoname},headers:{"X-RapidAPI-Key":"97de72016bmsh3c696ec6f435aecp1dae0cjsnfa3791727184","X-RapidAPI-Host":"animals-by-api-ninjas.p.rapidapi.com"}}).then((function(o){var n=Math.floor(Math.random()*o.data.length);t.list=o.data[n]})).catch((function(t){console.log(t)}))}}},c=(n(443),n(89)),component=Object(c.a)(r,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"container-fluid curiositycontainer"},[t._m(0),t._v(" "),t._m(1),t._v(" "),o("div",{staticClass:"row justify-content-center"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.commoname,expression:"commoname"}],staticClass:"inputComName",attrs:{type:"text"},domProps:{value:t.commoname},on:{input:function(o){o.target.composing||(t.commoname=o.target.value)}}})]),t._v(" "),null!=t.list?o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-sm-12 col-md-8 col-lg-6 card curiositycard"},[o("div",{staticClass:"card-body"},[o("h3",{staticClass:"card-title",attrs:{lang:"en"}},[t._v("THE "+t._s(t.list.name)+"'S")]),t._v(" "),o("div",{staticClass:"card-text"},[o("h4",{attrs:{lang:"eg"}},[t._v("Taxonomy")]),t._v(" "),t._l(t.list.taxonomy,(function(n,e){return o("p",{key:e,attrs:{lang:"en"}},[t._v(t._s(e)+": "+t._s(n))])})),t._v(" "),o("h4",[t._v("Characteristics")]),t._v(" "),t._l(t.list.characteristics,(function(n,e){return o("p",{key:e,attrs:{lang:"en"}},[t._v(t._s(e)+": "+t._s(n))])})),t._v(" "),o("h4",[t._v("Locations")]),t._v(" "),t._l(t.list.locations,(function(n,e){return o("p",{key:e,attrs:{lang:"en"}},[t._v(t._s(n))])}))],2)])])]):t._e(),t._v(" "),null==t.list?o("div",{staticClass:"row justify-content-center"},[o("p",{staticClass:"labelNotValid",attrs:{lang:"en"}},[t._v("Name not valid")])]):t._e(),t._v(" "),o("div",{staticClass:"row justify-content-center"},[o("button",{staticClass:"btnCuriosity",attrs:{lang:"en"},on:{click:t.getCuriosity}},[t._v("Load another animal")])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"row justify-content-center"},[t("span",{staticClass:"pagetitle",attrs:{lang:"en"}},[this._v("Did You Know?")])])},function(){var t=this._self._c;return t("div",{staticClass:"row justify-content-center"},[t("p",{staticClass:"labelInputComName",attrs:{lang:"en"}},[this._v("Please insert an animal's common name")])])}],!1,null,null,null);o.default=component.exports}}]);