(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./node_modules/typings-for-css-modules-loader/lib/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/components/ImageLoader/ImageLoader.scss":function(e,o,t){(o=e.exports=t("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,".VRv0e{position:relative;display:inline-block;font-size:0;overflow:hidden;-webkit-user-drag:none}.VRv0e._1MlOY,.VRv0e._1MlOY img{border-radius:50%}.VRv0e img{width:100%;opacity:0;transition:opacity .4s ease-out}.VRv0e img._3X_EN{opacity:1}.VRv0e ._2SOxR{opacity:1;transition:opacity .2s ease-out}.VRv0e ._2SOxR._2R9Vy{opacity:0}",""]),o.locals={ImageLoader:"VRv0e",circle:"_1MlOY",loaded:"_3X_EN",Loader:"_2SOxR",hideLoader:"_2R9Vy"}},"./node_modules/typings-for-css-modules-loader/lib/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/pages/ToonHomePage/ToonHomePage.scss":function(e,o,t){(o=e.exports=t("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"._2IYlO,._2IYlO._2LqrM{position:relative}",""]),o.locals={ToonHomePage:"_2IYlO",Body:"_2LqrM"}},"./node_modules/typings-for-css-modules-loader/lib/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/pages/ToonHomePage/components/SeriesListItem/SeriesListItem.scss":function(e,o,t){(o=e.exports=t("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"._2FaB2{display:flex;align-items:center;border-top:1px solid rgba(0,0,0,.05);text-decoration:none}._2FaB2 ._2mnnR{padding:0 12px;font-size:14px;color:#000}",""]),o.locals={SeriesListItem:"_2FaB2",Title:"_2mnnR"}},"./node_modules/typings-for-css-modules-loader/lib/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/pages/ToonHomePage/components/ToonMainHeader/ToonMainHeader.scss":function(e,o,t){(o=e.exports=t("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"._1P742{position:relative;font-size:0}._1P742 ._1Vxx-{background:rgba(0,0,0,.2);z-index:2}._1P742 ._1eUpk{z-index:3;display:flex;flex-flow:column;color:#fff;padding:24px 0 0 15px}._1P742 ._1eUpk ._3YfF1{font-size:19px;margin-bottom:12px}._1P742 ._1eUpk ._2wb7F{font-size:13px;margin-bottom:3px}._1P742 ._1eUpk ._2W5Rt{font-size:13px}",""]),o.locals={ToonMainHeader:"_1P742",Dimm:"_1Vxx-",Description:"_1eUpk",Title:"_3YfF1",SubTitle:"_2wb7F",Authors:"_2W5Rt"}},"./src/components/ImageLoader/ImageLoader.scss":function(e,o,t){var s=t("./node_modules/typings-for-css-modules-loader/lib/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/components/ImageLoader/ImageLoader.scss");"string"==typeof s&&(s=[[e.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t("./node_modules/style-loader/lib/addStyles.js")(s,n);s.locals&&(e.exports=s.locals)},"./src/components/ImageLoader/ImageLoader.tsx":function(e,o,t){"use strict";t.d(o,"a",function(){return u});var s=t("./node_modules/tslib/tslib.es6.js"),n=t("./node_modules/react/index.js"),a=t.n(n),r=t("./src/components/ImageLoader/ImageLoader.scss"),i=t.n(r),l=t("./node_modules/react-content-loader/dist/react-content-loader.es.js"),d=t("./node_modules/classcat/src/index.js"),c=t("./node_modules/mobx-react/index.module.js"),m=t("./src/core/utils/time.ts"),p=t("./src/core/utils/dom.ts"),u=function(e){function o(o){var t=e.call(this,o)||this;return t.mounted=!1,t.onScroll=Object(m.c)(t.onScroll.bind(t),o.throttleDuration||150),t.state={imageLoaded:!1,shouldFetch:!o.lazy},t}return s.d(o,e),o.prototype.componentDidMount=function(){this.mounted=!0,this.props.lazy&&(window.addEventListener("scroll",this.onScroll),this.onScroll())},o.prototype.shouldComponentUpdate=function(e,o){return this.props.src!==e.src||this.props.alt!==e.alt||this.props.width!==e.width||this.props.height!==e.height||this.state.imageLoaded!==o.imageLoaded||this.state.shouldFetch!==o.shouldFetch},o.prototype.componentWillUnmount=function(){window.removeEventListener("scroll",this.onScroll),this.mounted=!1},o.prototype.onScroll=function(){if(this.detectVisibility()&&!this.state.shouldFetch)return this.setState({shouldFetch:!0})},o.prototype.detectVisibility=function(){if(!this.el)return!1;var e=Object(p.a)(this.el);return e.top>window.scrollY||e.top<window.scrollY+window.innerHeight},o.prototype.onImageLoaded=function(e){return s.b(this,void 0,void 0,function(){var o;return s.e(this,function(t){return this.mounted&&(o=this.props.onLoad,this.setState({imageLoaded:!0}),o&&o(e)),[2]})})},o.prototype.render=function(){var e,o,t,s=this,n=this.props,r=n.appStore,c=n.src,m=n.alt,p=n.width,u=n.height,h=n.circle,g=n.lazy,_=void 0!==g&&g,f=r.appWidth,b=this.state,x=b.imageLoaded,y=b.shouldFetch,v=p>f?f:p,j=p>f?u/p*p:u;return a.a.createElement("div",{ref:function(e){return s.el=e},className:Object(d.a)((e={},e[i.a.ImageLoader]=!0,e[i.a.circle]=h,e)),style:{width:v,height:j}},_&&!y?null:a.a.createElement("img",{className:Object(d.a)((o={stretch:!0},o[i.a.loaded]=x,o)),src:c,alt:m,onLoad:function(e){return s.onImageLoaded(e)}}),a.a.createElement("div",{className:Object(d.a)((t={stretch:!0},t[i.a.Loader]=x,t[i.a.hideLoader]=x,t))},a.a.createElement(l.a,{width:100,height:100,speed:1},a.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"100",height:"100"}))))},o.defaultProps={circle:!1},o=s.c([Object(c.b)("appStore"),s.g("design:paramtypes",[Object])],o)}(a.a.Component)},"./src/core/fake-db/toon/fake-series.ts":function(e,o,t){"use strict";var s,n,a=t("./node_modules/tslib/tslib.es6.js"),r=t("./src/core/fake-db/FakeImagePath.ts"),i=t("./src/core/utils/array.ts");!function(e){e.CONTENTS="CONTENTS",e.MOVIE="MOVIE"}(s||(s={})),function(e){e.NORMAL="NORMAL",e.NONE="NONE",e.LAST_SERIES="LAST_SERIES",e.EPILOG="EPILOG",e.PROLOGUE="PROLOGUE"}(n||(n={}));var l=function(){return function(e){e&&Object.assign(this,e)}}(),d=t("./src/core/values/yn.ts");t.d(o,"a",function(){return h}),t.d(o,"b",function(){return g});var c,m,p,u,h=new l({series_no:1,toon_no:1,title:"This is a title and",thumbnail_image_url:Object(r.a)(c||(c=a.f(["slot/slot@2x.png"],["slot/slot@2x.png"]))),movie_preview_image_url:Object(r.a)(m||(m=a.f(["slot/slot@2x.png"],["slot/slot@2x.png"]))),series_order:1,type_cd:s.CONTENTS,series_cd:n.NORMAL,new_yn:d.a.Y,update_yn:d.a.N,remain_days:5}),g=Object(i.a)(10).map(function(e){return new l({series_no:e+=1,toon_no:1,title:"This is a title and",thumbnail_image_url:Object(r.a)(p||(p=a.f(["slot/slot@2x.png"],["slot/slot@2x.png"]))),movie_preview_image_url:Object(r.a)(u||(u=a.f(["slot/slot@2x.png"],["slot/slot@2x.png"]))),series_order:1,type_cd:s.CONTENTS,series_cd:n.NORMAL,new_yn:2*Math.random()>1?d.a.Y:d.a.N,update_yn:2*Math.random()>1?d.a.Y:d.a.N,remain_days:5})})},"./src/core/utils/dom.ts":function(e,o,t){"use strict";t.d(o,"a",function(){return s});var s=function(e){if(!e)return{top:0,bottom:0,left:0,right:0,width:0,height:0};var o=e.getBoundingClientRect();return{top:o.top||0,bottom:o.bottom||0,left:o.left||0,right:o.right||0,width:o.width?o.width:o.right-o.left,height:o.height?o.height:o.bottom-o.top}}},"./src/core/values/yn.ts":function(e,o,t){"use strict";var s;t.d(o,"a",function(){return s}),function(e){e.Y="Y",e.N="N"}(s||(s={}))},"./src/pages/ToonHomePage/ToonHomePage.scss":function(e,o,t){var s=t("./node_modules/typings-for-css-modules-loader/lib/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/pages/ToonHomePage/ToonHomePage.scss");"string"==typeof s&&(s=[[e.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t("./node_modules/style-loader/lib/addStyles.js")(s,n);s.locals&&(e.exports=s.locals)},"./src/pages/ToonHomePage/ToonHomePage.tsx":function(e,o,t){"use strict";t.r(o);var s,n,a,r,i=t("./node_modules/tslib/tslib.es6.js"),l=t("./node_modules/react/index.js"),d=t.n(l),c=t("./src/pages/ToonHomePage/ToonHomePage.scss"),m=t.n(c),p=t("./src/components/Header/Header.tsx"),u=t("./node_modules/mobx-react/index.module.js"),h=t("./src/pages/ToonHomePage/components/ToonMainHeader/ToonMainHeader.scss"),g=t.n(h),_=t("./src/components/ImageLoader/ImageLoader.tsx"),f=function(e){function o(o){var t=e.call(this,o)||this;return t.slideRatio=.28,t}return i.d(o,e),o.prototype.render=function(){var e=this.props,o=e.toon,t=e.appWidth;return d.a.createElement("div",{className:g.a.ToonMainHeader},d.a.createElement(_.a,{width:t,height:this.slideRatio*t,src:o.home_image_url,alt:"Toon Main Image"}),d.a.createElement("div",{className:"stretch "+g.a.Dimm}),d.a.createElement("div",{className:"stretch "+g.a.Description},d.a.createElement("span",{className:g.a.Title},o.title),d.a.createElement("span",{className:g.a.SubTitle},o.description),d.a.createElement("span",{className:g.a.Authors},"Authors")))},o}(d.a.Component),b=t("./src/core/fake-db/FakeImagePath.ts"),x=t("./src/core/utils/array.ts"),y=function(){return function(e){e&&Object.assign(this,e)}}(),v=new y({toon_no:1,title:"This is a title and",description:"hahahah this is description",home_image_url:Object(b.a)(s||(s=i.f(["slot/slot@2x.png"],["slot/slot@2x.png"]))),share_image_url:Object(b.a)(n||(n=i.f(["slot/slot@2x.png"],["slot/slot@2x.png"]))),authors:[]}),j=(Object(x.a)(10).map(function(e){return new y({toon_no:e+=1,title:"This is a title and",description:"hahahah this is description",home_image_url:Object(b.a)(a||(a=i.f(["slot/slot@2x.png"],["slot/slot@2x.png"]))),share_image_url:Object(b.a)(r||(r=i.f(["slot/slot@2x.png"],["slot/slot@2x.png"]))),authors:[]})}),t("./src/core/fake-db/toon/fake-series.ts")),T=t("./src/pages/ToonHomePage/components/SeriesListItem/SeriesListItem.scss"),L=t.n(T),O=t("./node_modules/react-router-dom/es/index.js"),S=t("./src/core/values/app-language.ts"),w=function(e){function o(o){return e.call(this,o)||this}return i.d(o,e),o.prototype.render=function(){var e=this.props,o=e.appWidth,t=e.series,s=t.toon_no,n=t.series_no,a=t.title,r=t.thumbnail_image_url;return d.a.createElement(O.b,{to:"/"+S.a+"/toon/"+s+"/series/"+n,className:L.a.SeriesListItem},d.a.createElement(_.a,{src:r,width:.152*o,height:.152*o,alt:"Series Thumbnail"}),d.a.createElement("div",{className:L.a.Title},a))},o}(d.a.Component);t.d(o,"ToonHomePage",function(){return I});var I=function(e){function o(o){return e.call(this,o)||this}return i.d(o,e),o.prototype.componentDidMount=function(){this.props.appStore.routeUtils.match},o.prototype.render=function(){var e=this.props.appStore;return d.a.createElement("div",{className:m.a.ToonHomePage},d.a.createElement(p.a,{storyPage:!1}),d.a.createElement("div",{className:m.a.Body},d.a.createElement(f,{appWidth:e.appWidth,toon:v}),j.b.map(function(o){return d.a.createElement(w,{key:o.series_no,appWidth:e.appWidth,series:o})})))},o=i.c([Object(u.b)("appStore"),Object(u.b)("apiSvc"),u.c,i.g("design:paramtypes",[Object])],o)}(d.a.Component)},"./src/pages/ToonHomePage/components/SeriesListItem/SeriesListItem.scss":function(e,o,t){var s=t("./node_modules/typings-for-css-modules-loader/lib/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/pages/ToonHomePage/components/SeriesListItem/SeriesListItem.scss");"string"==typeof s&&(s=[[e.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t("./node_modules/style-loader/lib/addStyles.js")(s,n);s.locals&&(e.exports=s.locals)},"./src/pages/ToonHomePage/components/ToonMainHeader/ToonMainHeader.scss":function(e,o,t){var s=t("./node_modules/typings-for-css-modules-loader/lib/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/pages/ToonHomePage/components/ToonMainHeader/ToonMainHeader.scss");"string"==typeof s&&(s=[[e.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t("./node_modules/style-loader/lib/addStyles.js")(s,n);s.locals&&(e.exports=s.locals)}}]);