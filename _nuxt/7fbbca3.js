(window.webpackJsonp=window.webpackJsonp||[]).push([[11,10],{281:function(e,t,r){e.exports=r.p+"img/wittycreatures-website-header.cb71bd8.svg"},287:function(e,t,r){var content=r(323);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(35).default)("4044bb3e",content,!0,{sourceMap:!1})},317:function(e,t,r){var content=r(372);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(35).default)("7d12f1e0",content,!0,{sourceMap:!1})},318:function(e,t,r){var map={"./bronze-prize.svg":319,"./gold-prize.svg":320,"./silver-prize.svg":321,"./wittycreatures-website-header.svg":281};function n(e){var t=l(e);return r(t)}function l(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=l,e.exports=n,n.id=318},319:function(e,t,r){e.exports=r.p+"img/bronze-prize.3724d49.svg"},320:function(e,t,r){e.exports=r.p+"img/gold-prize.ca5691e.svg"},321:function(e,t,r){e.exports=r.p+"img/silver-prize.936717f.svg"},322:function(e,t,r){"use strict";r(287)},323:function(e,t,r){var n=r(34)(!1);n.push([e.i,'.title[data-v-895a4be6]{font-size:1.5rem;font-weight:700;font-family:"Avenir Next Variable W05835004",sans-serif}ol[data-v-895a4be6],p[data-v-895a4be6],ul[data-v-895a4be6]{font-family:"Almarai",sans-serif}a[data-v-895a4be6]{font-size:1rem}.prize[data-v-895a4be6]{display:flex;width:100%;flex-wrap:wrap;justify-content:flex-start;align-items:center;border:1px solid #ccc;border-radius:4px;padding:20px}.prize .title[data-v-895a4be6]{font-size:18px;margin-right:24px}.prize .prize-icon[data-v-895a4be6]{margin-right:16px;height:1.5em}.prize .claimed[data-v-895a4be6]{padding:8px;border-radius:4px;background-color:grey;color:#fff;font-weight:700;margin-right:10px}.prize .claimed[data-v-895a4be6]:last-of-type{margin-right:0}.prize .eth-highlight[data-v-895a4be6]{background-color:#7825ff}.prize .wit-highlight[data-v-895a4be6]{background-color:#24cf9c}@media screen and (max-width:1200px){.prize .claimed[data-v-895a4be6],.prize .prize-icon[data-v-895a4be6],.prize .title[data-v-895a4be6]{margin-top:16px}.prize .claimed[data-v-895a4be6]:last-of-type{margin-right:0}}',""]),e.exports=n},338:function(e,t,r){"use strict";r.r(t);var n={props:{title:{type:String,required:!0},ethAddress:{type:String,required:!0},ethClaimed:{type:Boolean,required:!1},witAddress:{type:String,required:!0},witClaimed:{type:Boolean,required:!1},img:{type:String,required:!0}},computed:{url:function(){return r(318)("./".concat(this.img,".svg"))}}},l=(r(322),r(45)),component=Object(l.a)(n,(function(){var e,t,r=this,n=r.$createElement,l=r._self._c||n;return l("div",{staticClass:"prize"},[l("img",{staticClass:"prize-icon",attrs:{src:r.url,alt:"prize"}}),r._v(" "),l("h3",{staticClass:"title"},[r._v("\n    "+r._s(r.title)+"\n  ")]),r._v(" "),l("a",{staticClass:"claimed",class:(e={},e["eth-highlight"]=r.ethClaimed,e),attrs:{href:"https://etherscan.io/address/"+r.ethAddress,target:"_blank"}},[r._v("\n    "+r._s(null==r.ethClaimed?r.$t("prize.checking"):r.ethClaimed?r.$t("prize.eth_claimed"):r.$t("prize.eth_unclaimed"))+"\n  ")]),r._v(" "),l("a",{staticClass:"claimed",class:(t={},t["wit-highlight"]=r.witClaimed,t),attrs:{href:"https://witnet.network/search/"+r.witAddress,target:"_blank"}},[r._v("\n    "+r._s(r.$t("prize.check_manually"))+"\n  ")])])}),[],!1,null,"895a4be6",null);t.default=component.exports},371:function(e,t,r){"use strict";r(317)},372:function(e,t,r){var n=r(34)(!1);n.push([e.i,".border{padding:15px;border:1px solid #f8971e;border-radius:4px;display:grid;grid-template:1fr/repeat(auto-fit,-webkit-max-content);grid-template:1fr/repeat(auto-fit,max-content);justify-items:flex-start;grid-gap:10px}",""]),e.exports=n},382:function(e,t){},390:function(e,t){},391:function(e,t){},412:function(e,t){},413:function(e,t){},437:function(e,t){},440:function(e,t){},441:function(e,t){},446:function(e,t){},450:function(e,t){},464:function(e,t){},475:function(e,t,r){"use strict";r.r(t);r(56),r(25);var n=r(4);function l(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,d=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return d=e.done,e},e:function(e){c=!0,l=e},f:function(){try{d||null==r.return||r.return()}finally{if(c)throw l}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var d=new(r(375))("https://eth.witnet.io"),c={data:function(){return{polling:null,prizes:[{id:1,title:this.$t("prizes.gold_prize"),img:"gold-prize",ethAddress:"0x8F63eF3441121f7D90ceF8c642EFA3069747C29D",ethClaimed:null,witAddress:"wit1tzuypmyj6f0ugggl3l6r7g2dl0q74al7t2mnax",witClaimed:null},{id:2,title:this.$t("prizes.silver_prize_1"),img:"silver-prize",ethAddress:"0xCc340459eEc3FA8DccE461918ab1a02Cb11c7C59",ethClaimed:null,witAddress:"wit17sygcjkrg0dqvpwpwqd0lqduxarh3ut5s0yxna",witClaimed:null},{id:3,title:this.$t("prizes.silver_prize_2"),img:"silver-prize",ethAddress:"0x15E3924f6dff394759270B8e82248eD262764fCd",ethClaimed:null,witAddress:"wit1zcx5lwe6m2vtk0ehkzu7hd5yrjj8txfpr2rqnq",witClaimed:null},{id:4,title:this.$t("prizes.bronze_prize_1"),img:"bronze-prize",ethAddress:"0xD2072CeAB5f1454499A8d3Cf60E7cbd9E0F6cDDC",ethClaimed:null,witAddress:"wit13c8pctfesnh6prmnyn3q5fjtllqp9qe53ux4pm",witClaimed:null},{id:5,title:this.$t("prizes.bronze_prize_2"),img:"bronze-prize",ethAddress:"0xA4f23588AdDA5aCFF3a9e3B559DCDF4a45C87d1A",ethClaimed:null,witAddress:"wit182g9yfrjfrewyjqx84xa202pxwycz7wnznm34t",witClaimed:null},{id:6,title:this.$t("prizes.bronze_prize_3"),img:"bronze-prize",ethAddress:"0x02aC3D540a8f70EA554fdcbD4052D3d3eEFBE657",ethClaimed:null,witAddress:"wit190r2tlw3d388l6r8azdsz6mf4ea7kwd6etd9d3",witClaimed:null}]}},beforeDestroy:function(){clearInterval(this.polling)},created:function(){this.pollOnchainData()},methods:{pollOnchainData:function(){var e=this,t=function(){var t,r=l(e.prizes);try{var o=function(){var e=t.value;d.eth.getBalance(e.ethAddress).then((function(t){e.ethClaimed="0"===t})).catch(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.error("Retrying after error",r),t.next=3,d.eth.getBalance(e.ethAddress);case 3:e.ethClaimed=t.sent;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())};for(r.s();!(t=r.n()).done;)o()}catch(e){r.e(e)}finally{r.f()}};this.polling=setInterval(t,9e4),t()}}},f=(r(371),r(45)),component=Object(f.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"border"},e._l(e.prizes,(function(e){return r("prize",{key:e.id,attrs:{title:e.title,img:e.img,"eth-address":e.ethAddress,"eth-claimed":e.ethClaimed,"wit-address":e.witAddress,"wit-claimed":e.witClaimed}})})),1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Prize:r(338).default})}}]);