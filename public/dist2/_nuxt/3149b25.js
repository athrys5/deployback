(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{387:function(t,e,n){var content=n(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(91).default)("b532f420",content,!0,{sourceMap:!1})},388:function(t,e,n){"use strict";n(387)},389:function(t,e,n){var r=n(90)(!1);r.push([t.i,".adsprice{color:red;font-size:30px;font-weight:500;margin-left:5px}.adslabel{display:block;background-color:#00f;color:#fff;border-radius:30px;text-align:center;margin-top:5px;width:auto;margin-left:10px}.adscard{width:300px;height:430px;margin:20px 10px 10px}.adsb{display:block;background-color:#f6f1f1}.adst{display:flex}",""]),t.exports=r},390:function(t,e,n){"use strict";n.r(e);n(36);var r=n(109),o={data:function(){return{array:[]}},mounted:function(){this.getVetInfo()},methods:{getVetInfo:function(){var t=this;r.request({method:"GET",url:"/game/ads.json"}).then((function(t){return t})).then((function(e){var n=e.data.data.length,r=Math.floor(Math.random()*n);t.array=e.data.data[r]}))}}},l=(n(388),n(89)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",[e("div",{staticClass:"card adscard"},[e("p",{staticClass:"label adslabel",attrs:{lang:"en"}},[t._v("Front Office Site")]),t._v(" "),e("img",{staticClass:"card-img-top",attrs:{width:"200",height:"250",src:t.array.img,alt:"Card Image about product advertisement"}}),t._v(" "),e("div",{staticClass:"card-body adsb"},[e("h5",{staticClass:"card-title"},[t._v(t._s(t.array.name))]),t._v(" "),e("div",{staticClass:"card-text adst"},[e("p",{staticClass:"adsprice"},[t._v(t._s(t.array.price)+" $")])])])])])])}),[],!1,null,null,null);e.default=component.exports},394:function(t,e,n){var content=n(400);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(91).default)("d073cb78",content,!0,{sourceMap:!1})},399:function(t,e,n){"use strict";n(394)},400:function(t,e,n){var r=n(90)(!1);r.push([t.i,'.pagecontainer{margin-top:90px;padding:0}.pagetitle{font-size:26px;font-family:"Franklin Gothic Medium","Arial Narrow",Arial,sans-serif;border:3px solid #252422;border-radius:.3rem;padding:8px 16px;background-color:#ff4742;color:#fff;box-sizing:border-box;box-shadow:5px 5px .5px #252422;margin-bottom:2rem}.subpetdiv{padding:0}.subpetdiv input{width:100%;margin-bottom:5px;padding-left:8px;padding-right:8px;height:50px;border:1px solid #d4d4ab;border-radius:8px;outline:none}.subpetdiv .btnNavbar{width:100%;font-size:18px;color:#252422;font-family:"Franklin Gothic Medium","Arial Narrow",Arial,sans-serif;background-color:#f58604;box-shadow:5px 5px .5px #252422}.subtitlepet{margin-top:30px;font-size:24px;text-align:center!important}.card-big-shadow{position:relative}.coloured-cards .card{margin-top:30px}.card[data-radius=none]{border-radius:0}.card{border-radius:8px;box-shadow:0 2px 2px rgba(204,197,185,.5);background-color:#fff;color:#252422;margin-bottom:20px;position:relative;z-index:1}.petname{text-transform:capitalize}.card.card-just-text .content{padding:35px 45px;text-align:center}.card .content{padding:20px 20px 10px}.card[data-color=blue] .category{color:#7a9e9f}.card .category,.card .label{font-size:14px;margin-bottom:0}.card-big-shadow:before{background-image:url(http://static.tumblr.com/i21wc39/coTmrkw40/shadow.png);background-position:bottom;background-repeat:no-repeat;background-size:100% 100%;bottom:-12%;content:"";display:block;left:-12%;position:absolute;right:0;top:0;z-index:0}.h4,h4{font-size:1.5em;line-height:1.2em}.h4,.h6,h4,h6{font-weight:600}.h6,h6{font-size:.9em;text-transform:uppercase}.card .description{font-size:16px;color:#66615b;margin:0;text-transform:capitalize}.content-card{margin-top:30px}a:focus,a:hover{text-decoration:none}.card[data-color=yellow]{background:#fcff42}.card[data-color=yellow] .description{color:#b25825}.card[data-color=yellow] .category{color:#d88715}.delbtn{color:red}',""]),t.exports=r},412:function(t,e,n){"use strict";n.r(e);n(110),n(29),n(52),n(10),n(9);var r=n(21),o=n(0),l={__name:"animal-form",setup:function(t){var e=Object(r.ref)([]),n=Object(r.ref)(),l=Object(r.ref)(),c=Object(r.ref)(),d=Object(r.ref)(),m=Object(r.computed)((function(){return e.value.slice(0).sort((function(a,b){return a.createdAt-b.createdAt}))}));Object(r.watch)(e,(function(t){localStorage.setItem("items",JSON.stringify(t))}),{deep:!0});return Object(r.onMounted)((function(){e.value=JSON.parse(localStorage.getItem("items"))||[]})),{__sfc:!0,items:e,inputAnimalName:n,inputAnimalType:l,inputAnimalRace:c,inputAnimalAge:d,itemsAsc:m,additem:function(){""!==n.value.trim()&&e.value.push({AnimalName:n.value,AnimalType:l.value,AnimalRace:c.value,AnimalAge:d.value,editable:!1})},removeitem:function(t){e.value=e.value.filter((function(e){return e!==t}))},ref:r.ref,onMounted:r.onMounted,watch:r.watch,computed:r.computed,BIconTrashFill:o.Sy}}},c=(n(399),n(89)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("div",{staticClass:"container-fluid pagecontainer"},[t._m(0),t._v(" "),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"subpetdiv col-12 col-md-6"},[e("form",{ref:"{clearForm}",attrs:{id:"new-todo-form"},on:{submit:function(t){return t.preventDefault(),n.additem.apply(null,arguments)}}},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.inputAnimalName,expression:"inputAnimalName"}],attrs:{id:"content",type:"text",name:"AnimalName","aria-label":"Animal Name",placeholder:"Name"},domProps:{value:n.inputAnimalName},on:{input:function(t){t.target.composing||(n.inputAnimalName=t.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.inputAnimalType,expression:"inputAnimalType"}],attrs:{id:"content1",type:"text",name:"AnimalType","aria-label":"Animal type",placeholder:"Type"},domProps:{value:n.inputAnimalType},on:{input:function(t){t.target.composing||(n.inputAnimalType=t.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.inputAnimalRace,expression:"inputAnimalRace"}],attrs:{id:"content2",type:"text",name:"AnimalRace","aria-label":"Animal Race",placeholder:"Breed"},domProps:{value:n.inputAnimalRace},on:{input:function(t){t.target.composing||(n.inputAnimalRace=t.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.inputAnimalAge,expression:"inputAnimalAge"}],attrs:{id:"content3",type:"number",name:"AnimalAge","aria-label":"Aniaml Age",placeholder:"Age"},domProps:{value:n.inputAnimalAge},on:{input:function(t){t.target.composing||(n.inputAnimalAge=t.target.value)}}})]),t._v(" "),t._m(1),t._v(" "),t._m(2)])])])]),t._v(" "),e("div",{staticClass:"row justify-content-center"},t._l(n.itemsAsc,(function(r){return e("div",{key:r.id,staticClass:"col-10 col-sm-8 col-md-4 col-lg-3 content-card"},[e("div",{staticClass:"card-big-shadow"},[e("div",{staticClass:"card card-just-text",attrs:{"data-background":"color","data-color":"yellow","data-radius":"none"}},[e("div",{staticClass:"content"},[e("h4",{staticClass:"petname"},[t._v(t._s(r.AnimalName))]),t._v(" "),e("p",{staticClass:"description"},[e("b",[t._v("Type ")]),t._v(t._s(r.AnimalType)+" ")]),t._v(" "),e("p",{staticClass:"description"},[e("b",[t._v("Breed ")]),t._v(t._s(r.AnimalRace)+" ")]),t._v(" "),e("p",{staticClass:"description"},[e("b",[t._v("Age ")]),t._v(t._s(r.AnimalAge)+" ")]),t._v(" "),e(n.BIconTrashFill,{staticClass:"delbtn",on:{click:function(t){return n.removeitem(r)}}})],1)])])])})),0),t._v(" "),e("div",{staticClass:"row justify-content-center",staticStyle:{display:"flex","flex-wrap":"wrap","margin-top":"10px"}},[e("ads-card"),t._v(" "),e("ads-card"),t._v(" "),e("ads-card"),t._v(" "),e("ads-card")],1)])}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"row justify-content-center"},[e("span",{staticClass:"pagetitle",attrs:{lang:"eg"}},[t._v("Describe your Pets")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"col-12"},[e("button",{staticClass:"btnNavbar h4",attrs:{type:"submit",value:"Add item"}},[t._v("Add Pet")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"col-12"},[e("small",{staticClass:"form-text text-muted",attrs:{lang:"eg"}},[t._v("\n                    Be accurate describing your friend to find out curiosities!\n                  ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AdsCard:n(390).default})}}]);