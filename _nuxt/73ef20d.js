(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{295:function(t,n,e){var content=e(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(70).default)("c51aba8e",content,!0,{sourceMap:!1})},296:function(t,n,e){var map={"./btn_switch_dragonspine.png":297,"./btn_switch_dragonspine_active.png":298,"./btn_switch_enkanomiya.png":299,"./btn_switch_enkanomiya_active.png":300,"./btn_switch_inazuma.png":301,"./btn_switch_inazuma_active.png":302,"./btn_switch_liyue.png":303,"./btn_switch_liyue_active.png":304,"./btn_switch_mondstadt.png":305,"./btn_switch_mondstadt_active.png":306};function o(t){var n=r(t);return e(n)}function r(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=296},297:function(t,n,e){t.exports=e.p+"img/btn_switch_dragonspine.11dfee2.png"},298:function(t,n,e){t.exports=e.p+"img/btn_switch_dragonspine_active.ba1f74a.png"},299:function(t,n,e){t.exports=e.p+"img/btn_switch_enkanomiya.7b54aef.png"},300:function(t,n,e){t.exports=e.p+"img/btn_switch_enkanomiya_active.e026f14.png"},301:function(t,n,e){t.exports=e.p+"img/btn_switch_inazuma.f4b0d94.png"},302:function(t,n,e){t.exports=e.p+"img/btn_switch_inazuma_active.c0170d5.png"},303:function(t,n,e){t.exports=e.p+"img/btn_switch_liyue.590d8c1.png"},304:function(t,n,e){t.exports=e.p+"img/btn_switch_liyue_active.2653233.png"},305:function(t,n,e){t.exports=e.p+"img/btn_switch_mondstadt.1d77c1d.png"},306:function(t,n,e){t.exports=e.p+"img/btn_switch_mondstadt_active.0c195e7.png"},307:function(t,n,e){"use strict";e(295)},308:function(t,n,e){var o=e(69)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n#map-wrap[data-v-ad38102e]{\n  height:91vh\n}\n.nav-wrapper[data-v-ad38102e]{\n  margin-left:0\n}\n.location-btn img[data-v-ad38102e]{\n  width:60px;\n  height:60px\n}\n.sideNav[data-v-ad38102e]{\n  display:flex;\n  flex-direction:column;\n  background-color:rgba(66,101,136,.5)\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},321:function(t,n,e){"use strict";e.r(n);e(44),e(12),e(43),e(28),e(27),e(33),e(45),e(46),e(29);var o=e(9),r=(e(67),e(26),e(47),e(1));function c(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return l(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return l(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,m=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return c=t.done,t},e:function(t){m=!0,r=t},f:function(){try{c||null==e.return||e.return()}finally{if(m)throw r}}}}function l(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,e=new Array(n);i<n;i++)e[i]=t[i];return e}var m=[3568,6286],d=[12288,15360],f=r.a.extend({name:"IndexPage",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function n(){var e,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$content,n.next=3,e("markers").fetch();case 3:return o=n.sent,n.abrupt("return",{markers:o.markers});case 5:case"end":return n.stop()}}),n)})))()},data:function(){return{maxBounds:null,mapCRS:null,tileLayer:null,mapReady:!1,posX:0,posY:0,regions:[{id:"mondstadt",name:"蒙德"},{id:"liyue",name:"璃月"},{id:"inazuma",name:"稻妻"},{id:"dragonspine",name:"龙脊雪山"},{id:"enkanomiya",name:"渊下宫"}],currentRegion:"mondstadt",currentRegionName:"蒙德"}},mounted:function(){var t=this;this.maxBounds=this.$L.latLngBounds(this.$L.latLng(-m[0]-1e4,-m[1]-1e4),this.$L.latLng(d[0]-m[0]+1e4,d[1]-m[1]+1e4)),this.mapCRS=this.$L.Util.extend({},this.$L.CRS.Simple,{transformation:new this.$L.Transformation(1,0,1,0),projection:{project:function(n){return new t.$L.Point(n.lat+m[0],n.lng+m[1])},unproject:function(n){return new t.$L.LatLng(n.x-m[0],n.y-m[1])}},bounds:this.$L.bounds(this.$L.point(0,0),this.$L.point(d[0],d[1]))});var n=this.$L.TileLayer.extend({getTileUrl:function(t){var n=[t.x,t.y,t.z+13],e=n[0],o=n[1];return"https://assets.yuanshen.site/tiles_twt/".concat(n[2],"/").concat(e,"_").concat(o,".png")},reuseTiles:!0});this.tileLayer=new n("",{maxZoom:10,minZoom:-6,maxNativeZoom:0,minNativeZoom:-3,bounds:this.$L.latLngBounds(this.$L.latLng(-m[0],-m[1]),this.$L.latLng(d[0]-m[0],d[1]-m[1]))}),this.mapReady=!0,this.$nextTick((function(){var t=this,n=this.$refs.mapi.mapObject;n.addLayer(this.tileLayer);var e,o=c(this.markers);try{for(o.s();!(e=o.n()).done;){var r=e.value;this.$L.marker(r.pos,{title:r.name}).addTo(n)}}catch(t){o.e(t)}finally{o.f()}n.on("mousemove",(function(n){t.posX=n.latlng.lat,t.posY=n.latlng.lng}))}))},methods:{getRegionButtonImage:function(t){var n=t===this.currentRegion?"_active":"";return e(296)("./btn_switch_".concat(t).concat(n,".png"))},selectRegion:function(t){var n=t.id,e=t.name;this.currentRegion=n,this.currentRegionName=e}}}),_=(e(307),e(42)),component=Object(_.a)(f,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"map-wrap"}},[e("client-only",[t.mapReady?e("l-map",{ref:"mapi",attrs:{zoom:4,center:[2576,1742],"zoom-delta":0,"zoom-snap":.5,"max-zoom":2,"min-zoom":-4,"max-bounds":t.maxBounds,crs:t.mapCRS,options:{zoomControl:!1}}},[e("l-control",[e("div",[e("p",[e("b",[t._v("Pos:")]),t._v("\n            "+t._s(t.posX)+" "+t._s(t.posY)+"\n          ")])])]),t._v(" "),e("l-control",{staticClass:"nav-wrapper",attrs:{position:"topleft"}},[e("div",{staticClass:"flex text-white"},[e("h1",{staticClass:"text-xl"},[t._v("\n            图研所\n          ")]),t._v(" "),e("div",{staticClass:"flex flex-col justify-end ml-8"},[t._v("\n            "+t._s(t.currentRegionName)+"\n          ")])])]),t._v(" "),e("l-control",{staticClass:"nav-wrapper",attrs:{position:"topleft"}},[e("div",{staticClass:"flex flex-col justify-between"},[e("div",{staticClass:"flex flex-col location-btn"},t._l(t.regions,(function(n){return e("button",{key:n.id,on:{click:function(e){return t.selectRegion(n)}}},[e("img",{attrs:{name:"r.name",src:t.getRegionButtonImage(n.id)}})])})),0)])]),t._v(" "),e("l-control",{staticClass:"nav-wrapper",attrs:{position:"bottomleft"}},[e("div",{attrs:{id:"other-btn"}},[e("button",[t._v("二维码")]),t._v(" "),e("button",[t._v("分享")])])])],1):t._e()],1)],1)}),[],!1,null,"ad38102e",null);n.default=component.exports}}]);