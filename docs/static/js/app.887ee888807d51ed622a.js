webpackJsonp([1],{"+PyN":function(t,e){},Dqon:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=s("VU/8")({name:"App"},n,!1,function(t){s("eup2"),s("+PyN")},null,null).exports,o=s("/ocq"),r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container is-fluid"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"input search-input",attrs:{placeholder:"Search for a song..."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),s("router-link",{attrs:{to:"/favourites"}},[t._v("Favourites")]),t._v(" "),t.loading?s("p",[t._v("Loading....")]):t._e(),t._v(" "),s("transition-group",{staticClass:"tile is-ancestor",attrs:{tag:"div",name:"card"}},t._l(t.filteredList,function(e,a){return s("div",{key:e.id.attributes["im:id"],staticClass:"tile is-parent is-3"},[s("div",{staticClass:"tile is-child"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-image"},[s("a",{attrs:{href:e.id.label}},[s("img",{attrs:{src:e["im:image"][2].label,alt:e.title.label}}),t._v(" "),s("span",{staticClass:"term-tag"},[t._v(t._s(e.category.attributes.term))])])]),t._v(" "),s("div",{staticClass:"card-content"},[s("span",{staticClass:"song-name"},[t._v(t._s(e["im:name"].label))]),t._v(" "),s("span",{staticClass:"artist-name"},[t._v(t._s(e["im:artist"].label))]),t._v(" "),s("span",[s("small",[t._v("Price:")]),t._v(" "+t._s(e["im:price"].label))]),t._v(" "),s("span",[s("small",[t._v("Release Date:")]),t._v(" "+t._s(e["im:releaseDate"].attributes.label))])])])])])}))],1)},staticRenderFns:[]};var c=s("VU/8")({name:"ItemList",data:function(){return{search:"",loading:!0}},computed:{filteredList:function(){var t=this;return this.$store.state.results.filter(function(e){return e.title.label.toLowerCase().includes(t.search.toLowerCase())})}},created:function(){this.loading=!1,this.$store.dispatch("loadResult")},methods:{addToFavourite:function(t){this.$store.dispatch("addToFavourite",t)}}},r,!1,function(t){s("kGbl")},"data-v-1a13955d",null).exports,l={name:"VueGoodshareTwitter",props:{page_url:{type:String,default:document.location.href},page_title:{type:String,default:document.title},button_design:{type:String,default:"flat"},title_social:String,has_icon:Boolean,has_square_edges:Boolean},data:function(){return{buttonSocialDesignObject:{"button-social__square_edges":this.$props.has_square_edges,twitter__design__flat:"flat"===this.$props.button_design,twitter__design__gradient:"gradient"===this.$props.button_design,twitter__design__outline:"outline"===this.$props.button_design}}},methods:{showShareWindow:function(){var t="width=640,height=640,left="+(screen.width/2-320)+",top="+(screen.height/2-320)+",",e="https://twitter.com/share?url="+encodeURIComponent(this.$props.page_url)+"&text="+encodeURIComponent(this.$props.page_title);return window.open(e,"Share this",t+"toolbar=no,menubar=no,scrollbars=no")}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"button-social",class:t.buttonSocialDesignObject,attrs:{"page-url":t.page_url,"page-title":t.page_title,"button-design":t.button_design,"title-social":t.title_social,"has-icon":t.has_icon,"has-square-edges":t.has_square_edges},on:{click:function(e){return e.preventDefault(),t.showShareWindow(e)}}},[this.$props.has_icon?s("i",{staticClass:"icon-twitter"}):t._e(),t._v(" "),this.$props.title_social?s("span",{staticClass:"title-social"},[t._v(t._s(t.title_social))]):t._e()])},staticRenderFns:[]};var d=s("VU/8")(l,u,!1,function(t){s("dTZX")},"data-v-7c6f0418",null).exports,p={name:"VueGoodshareFacebook",props:{page_url:{type:String,default:document.location.href},button_design:{type:String,default:"flat"},title_social:String,has_icon:Boolean,has_square_edges:Boolean,has_counter:Boolean},data:function(){return{buttonSocialDesignObject:{"button-social__square_edges":this.$props.has_square_edges,facebook__design__flat:"flat"===this.$props.button_design,facebook__design__gradient:"gradient"===this.$props.button_design,facebook__design__outline:"outline"===this.$props.button_design},counter_facebook:0}},methods:{getRandomInt:function(t,e){return Math.floor(Math.random()*(e-t+1)+t)},sliceThousandInt:function(t){return(t/1e3).toFixed(1)+"k"},showShareWindow:function(){var t="width=640,height=640,left="+(screen.width/2-320)+",top="+(screen.height/2-320)+",",e="https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(this.$props.page_url);return window.open(e,"Share this",t+"toolbar=no,menubar=no,scrollbars=no")},getShareCounter:function(){var t=this,e=document.createElement("script"),s="vue_goodshare_"+this.getRandomInt(1,2345);e.src="https://graph.facebook.com?id="+encodeURIComponent(this.$props.page_url)+"&callback="+s,document.body.appendChild(e),window[s]=function(e){e.share&&(t.counter_facebook=e.share.share_count>=1e3?t.sliceThousandInt(e.share.share_count):e.share.share_count)}}},mounted:function(){this.$props.has_counter&&this.getShareCounter()}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"button-social",class:t.buttonSocialDesignObject,attrs:{"page-url":t.page_url,"button-design":t.button_design,"title-social":t.title_social,"has-icon":t.has_icon,"has-square-edges":t.has_square_edges,"has-counter":t.has_counter},on:{click:function(e){return e.preventDefault(),t.showShareWindow(e)}}},[this.$props.has_icon?s("i",{staticClass:"icon-facebook"}):t._e(),t._v(" "),this.$props.title_social?s("span",{staticClass:"title-social"},[t._v(t._s(t.title_social))]):t._e(),t._v(" "),this.$props.has_counter?s("span",{staticClass:"counter-facebook",model:{value:t.counter_facebook,callback:function(e){t.counter_facebook=e},expression:"counter_facebook"}},[t._v(t._s(t.counter_facebook))]):t._e()])},staticRenderFns:[]};var h={name:"TopBar",components:{VueGoodshareTwitter:d,VueGoodshareFacebook:s("VU/8")(p,_,!1,function(t){s("Dqon")},"data-v-2eb20686",null).exports}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("nav",[e("router-link",{attrs:{to:"/",exact:""}},[e("span",{staticClass:"logo"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48"}},[e("g",{attrs:{fill:"#ff0000"}},[e("circle",{attrs:{cx:"19",cy:"33",r:"9"}}),e("path",{attrs:{d:"M24 6v27h4V14l11 3v-7z"}})])]),this._v("bTunes!")])]),this._v(" "),e("div",{staticClass:"social-share"},[e("vue-goodshare-twitter",{attrs:{button_design:"gradient",page_url:"#",has_icon:""}}),this._v(" "),e("vue-goodshare-facebook",{attrs:{page_url:"#",has_icon:""}})],1)],1)},staticRenderFns:[]};var f={name:"index",components:{ItemList:c,TopBar:s("VU/8")(h,v,!1,function(t){s("oxwZ")},null,null).exports}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("TopBar"),this._v(" "),e("div",{staticClass:"product-list-wrap"},[e("ItemList")],1)],1)},staticRenderFns:[]},m=s("VU/8")(f,g,!1,null,null,null).exports,b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container is-fluid"},[s("h2",[t._v("Your favourites")]),t._v(" "),t.$store.state.favourites.length<=0?s("div",{staticClass:"empty-cart"},[s("p",[t._v("Wow, such empty! 😞")]),t._v(" "),s("router-link",{attrs:{to:"/"}},[s("button",[t._v("Browse!")])])],1):s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"input",attrs:{placeholder:"Search..."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),s("router-link",{attrs:{to:"/",exact:""}},[t._v("Home")]),t._v(" "),s("div",{staticClass:"tile is-ancestor"},t._l(t.filteredList,function(e){return s("div",{staticClass:"tile is-parent is-3"},[s("div",{staticClass:"tile is-child"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-image"},[s("a",{attrs:{href:e.result.id.label}},t._l(e.result,function(e){return e[1]?s("span",[s("img",{attrs:{src:e[2].label}})]):t._e()}))]),t._v(" "),s("div",{staticClass:"card-content"},[s("p",[t._v("\n                  "+t._s(e.result.title.label)+"\n                ")])])])])])}))],1)])},staticRenderFns:[]};var w=s("VU/8")({name:"Favourites",data:function(){return{msg:"Welcome to bTunes!",search:""}},computed:{filteredList:function(){var t=this;return this.$store.state.favourites.filter(function(e){return e.result.title.label.toLowerCase().includes(t.search.toLowerCase())})}}},b,!1,function(t){s("mo1J")},"data-v-3e0b1635",null).exports;a.a.use(o.a);var C=new o.a({routes:[{path:"/",name:"Index",component:m},{path:"/favourites",name:"Favourites",component:w}]}),$=s("NYxO"),k=s("mtWM"),x=s.n(k);a.a.use($.a);var S=new $.a.Store({state:{results:[],favourites:[],toggleFav:!1},actions:{loadResult:function(t){var e=t.commit;x.a.get("https://itunes.apple.com/in/rss/topalbums/limit=100/json").then(function(t){e("updateResult",t.data.feed.entry)})},addToFavourite:function(t,e){var s=t.commit;t.state;s("updateFavourite",e)}},mutations:{updateResult:function(t,e){t.results=e},updateFavourite:function(t,e){t.favourites.push({result:e}),t.favourites.forEach(function(s){s.result.id.attributes["im:id"]===e.id.attributes["im:id"]&&t.favourites.pop({result:e})})}}});a.a.config.productionTip=!1,new a.a({el:"#app",router:C,store:S,components:{App:i},template:"<App/>"})},dTZX:function(t,e){},eup2:function(t,e){},kGbl:function(t,e){},mo1J:function(t,e){},oxwZ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.887ee888807d51ed622a.js.map