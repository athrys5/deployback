(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{406:function(t,e,n){var content=n(440);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(91).default)("2c47af04",content,!0,{sourceMap:!1})},439:function(t,e,n){"use strict";n(406)},440:function(t,e,n){var r=n(90)(!1);r.push([t.i,".healthtitle{font-size:30px}.subtitlehealth{font-size:20px;font-weight:600}.buttonhealth{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;border:none;cursor:pointer;padding:.5rem 1rem;background-color:#ff4548;color:#fff;font-weight:700;text-transform:uppercase;font-size:1.2rem;border-radius:.5rem;margin-top:10px}",""]),t.exports=r},460:function(t,e,n){"use strict";n.r(e);var r=n(109),o={data:function(){return{array:[],checkClick:!1,currentlyShowing:null}},mounted:function(){this.getVetInfo()},methods:{getVetInfo:function(){var t=this;r.request({method:"GET",url:"/game/vetData.json"}).then((function(t){return t})).then((function(e){t.array=e.data.data}))},showInfo:function(t){this.checkClick=!0,this.currentlyShowing=t}}},c=(n(439),n(89)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container-fluid",staticStyle:{"margin-top":"90px"}},[t._m(0),t._v(" "),t._l(t.array,(function(n,r){return e("div",{key:r},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title healthtitle",attrs:{lang:"en"}},[t._v(t._s(JSON.parse(JSON.stringify(n.title))))]),t._v(" "),e("p",{staticClass:"card-text",attrs:{lang:"en"}},[t._v(t._s(JSON.parse(JSON.stringify(n.introduction))))]),t._v(" "),t.currentlyShowing===r?e("div",t._l(n.body,(function(sub,n){return e("div",{directives:[{name:"show",rawName:"v-show",value:t.checkClick,expression:"checkClick"}],key:n},[e("p",{staticClass:"subtitlehealth",attrs:{lang:"en"}},[t._v(t._s(JSON.parse(JSON.stringify(sub.subtitle))))]),t._v(" "),e("p",{attrs:{lang:"en"}},[t._v(t._s(JSON.parse(JSON.stringify(sub.text))))])])})),0):t._e(),t._v(" "),t.currentlyShowing!==r?e("a",{staticClass:"btn buttonhealth",attrs:{role:"button"},on:{click:function(e){return t.showInfo(r)}}},[t._v("Show More")]):t._e()])])])}))],2)}),[function(){var t=this._self._c;return t("div",{staticClass:"row justify-content-center"},[t("span",{staticClass:"pagetitle",attrs:{lang:"en"}},[this._v("Some useful health information")])])}],!1,null,null,null);e.default=component.exports}}]);