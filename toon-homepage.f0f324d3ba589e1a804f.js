(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./node_modules/typings-for-css-modules-loader/lib/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/components/ImageLoader/ImageLoader.scss":function(e,s,o){(s=e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,".VRv0e{position:relative;display:inline-block;font-size:0;overflow:hidden;-webkit-user-drag:none}.VRv0e._1MlOY,.VRv0e._1MlOY img{border-radius:50%}.VRv0e img{width:100%;opacity:0;transition:opacity .4s ease-out}.VRv0e img._3X_EN{opacity:1}",""]),s.locals={ImageLoader:"VRv0e",circle:"_1MlOY",loaded:"_3X_EN"}},"./node_modules/typings-for-css-modules-loader/lib/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/pages/ToonHomePage/ToonHomePage.scss":function(e,s,o){(s=e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"._2IYlO,._2IYlO._2LqrM{position:relative}",""]),s.locals={ToonHomePage:"_2IYlO",Body:"_2LqrM"}},"./node_modules/typings-for-css-modules-loader/lib/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/pages/ToonHomePage/components/SeriesListItem/SeriesListItem.scss":function(e,s,o){(s=e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"._2FaB2{display:flex;align-items:center;border-top:1px solid rgba(0,0,0,.05);text-decoration:none}._2FaB2 ._2mnnR{padding:0 12px;font-size:14px;color:#000}",""]),s.locals={SeriesListItem:"_2FaB2",Title:"_2mnnR"}},"./node_modules/typings-for-css-modules-loader/lib/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/pages/ToonHomePage/components/ToonMainHeader/ToonMainHeader.scss":function(e,s,o){(s=e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"._1P742{position:relative;font-size:0}._1P742 ._1Vxx-{background:rgba(0,0,0,.2);z-index:2}._1P742 ._1eUpk{z-index:3;display:flex;flex-flow:column;color:#fff;padding:24px 0 0 15px}._1P742 ._1eUpk ._3YfF1{font-size:19px;margin-bottom:12px}._1P742 ._1eUpk ._2wb7F{font-size:13px;margin-bottom:3px}._1P742 ._1eUpk ._2W5Rt{font-size:13px}",""]),s.locals={ToonMainHeader:"_1P742",Dimm:"_1Vxx-",Description:"_1eUpk",Title:"_3YfF1",SubTitle:"_2wb7F",Authors:"_2W5Rt"}},"./src/components/ImageLoader/ImageLoader.scss":function(e,s,o){var t=o("./node_modules/typings-for-css-modules-loader/lib/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/components/ImageLoader/ImageLoader.scss");"string"==typeof t&&(t=[[e.i,t,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};o("./node_modules/style-loader/lib/addStyles.js")(t,a);t.locals&&(e.exports=t.locals)},"./src/components/ImageLoader/ImageLoader.tsx":function(e,s,o){"use strict";o.d(s,"a",function(){return c});var t=o("./node_modules/tslib/tslib.es6.js"),a=o("./node_modules/react/index.js"),n=o.n(a),r=o("./src/components/ImageLoader/ImageLoader.scss"),i=o.n(r),l=o("./node_modules/react-content-loader/dist/react-content-loader.es.js"),d=o("./node_modules/mobx-react/index.module.js"),c=function(e){function s(s){var o=e.call(this,s)||this;return o.isMount=!1,o.state={imageLoaded:!1},o}return t.d(s,e),s.prototype.componentDidMount=function(){this.isMount=!0},s.prototype.shouldComponentUpdate=function(e,s){return this.props.src!==e.src||this.props.alt!==e.alt||this.props.width!==e.width||this.props.height!==e.height||this.state.imageLoaded!==s.imageLoaded},s.prototype.componentWillUnmount=function(){this.isMount=!1},s.prototype.onImageLoaded=function(e){return t.b(this,void 0,void 0,function(){var s;return t.e(this,function(o){return this.isMount&&(s=this.props.onLoad,this.setState({imageLoaded:!0}),s&&s(e)),[2]})})},s.prototype.render=function(){var e=this,s=this.props,o=s.appStore,t=s.src,a=s.alt,r=s.width,d=s.height,c=s.circle,m=o.appWidth,p=this.state.imageLoaded,u=r>m?m:r,g=r>m?d/r*r:d;return n.a.createElement("div",{className:i.a.ImageLoader+" "+(c?i.a.circle:""),style:{width:u,height:g}},n.a.createElement("img",{className:"stretch "+(p?i.a.loaded:""),src:t,alt:a,onLoad:function(s){return e.onImageLoaded(s)}}),p?null:n.a.createElement("div",{className:"stretch"},n.a.createElement(l.a,{width:100,height:100,speed:1},n.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"100",height:"100"}))))},s.defaultProps={circle:!1},s=t.c([Object(d.b)("appStore"),t.g("design:paramtypes",[Object])],s)}(n.a.Component)},"./src/core/fake-db/toon/fake-series.ts":function(e,s,o){"use strict";var t,a,n=o("./node_modules/tslib/tslib.es6.js"),r=o("./src/core/fake-db/FakeImagePath.ts"),i=o("./src/core/utils/array.ts");!function(e){e.CONTENTS="CONTENTS",e.MOVIE="MOVIE"}(t||(t={})),function(e){e.NORMAL="NORMAL",e.NONE="NONE",e.LAST_SERIES="LAST_SERIES",e.EPILOG="EPILOG",e.PROLOGUE="PROLOGUE"}(a||(a={}));var l=function(){return function(e){e&&Object.assign(this,e)}}(),d=o("./src/core/values/yn.ts");o.d(s,"a",function(){return g}),o.d(s,"b",function(){return _});var c,m,p,u,g=new l({series_no:1,toon_no:1,title:"This is a title and",thumbnail_image_url:Object(r.a)(c||(c=n.f(["slot/slot@2x.png"],["slot/slot@2x.png"]))),movie_preview_image_url:Object(r.a)(m||(m=n.f(["slot/slot@2x.png"],["slot/slot@2x.png"]))),series_order:1,type_cd:t.CONTENTS,series_cd:a.NORMAL,new_yn:d.a.Y,update_yn:d.a.N,remain_days:5}),_=Object(i.a)(10).map(function(e){return new l({series_no:e+=1,toon_no:1,title:"This is a title and",thumbnail_image_url:Object(r.a)(p||(p=n.f(["slot/slot@2x.png"],["slot/slot@2x.png"]))),movie_preview_image_url:Object(r.a)(u||(u=n.f(["slot/slot@2x.png"],["slot/slot@2x.png"]))),series_order:1,type_cd:t.CONTENTS,series_cd:a.NORMAL,new_yn:2*Math.random()>1?d.a.Y:d.a.N,update_yn:2*Math.random()>1?d.a.Y:d.a.N,remain_days:5})})},"./src/core/values/yn.ts":function(e,s,o){"use strict";var t;o.d(s,"a",function(){return t}),function(e){e.Y="Y",e.N="N"}(t||(t={}))},"./src/pages/ToonHomePage/ToonHomePage.scss":function(e,s,o){var t=o("./node_modules/typings-for-css-modules-loader/lib/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/pages/ToonHomePage/ToonHomePage.scss");"string"==typeof t&&(t=[[e.i,t,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};o("./node_modules/style-loader/lib/addStyles.js")(t,a);t.locals&&(e.exports=t.locals)},"./src/pages/ToonHomePage/ToonHomePage.tsx":function(e,s,o){"use strict";o.r(s);var t,a,n,r,i=o("./node_modules/tslib/tslib.es6.js"),l=o("./node_modules/react/index.js"),d=o.n(l),c=o("./src/pages/ToonHomePage/ToonHomePage.scss"),m=o.n(c),p=o("./src/components/Header/Header.tsx"),u=o("./node_modules/mobx-react/index.module.js"),g=o("./src/pages/ToonHomePage/components/ToonMainHeader/ToonMainHeader.scss"),_=o.n(g),h=o("./src/components/ImageLoader/ImageLoader.tsx"),f=function(e){function s(s){var o=e.call(this,s)||this;return o.slideRatio=.28,o}return i.d(s,e),s.prototype.render=function(){var e=this.props,s=e.toon,o=e.appWidth;return d.a.createElement("div",{className:_.a.ToonMainHeader},d.a.createElement(h.a,{width:o,height:this.slideRatio*o,src:s.home_image_url,alt:"Toon Main Image"}),d.a.createElement("div",{className:"stretch "+_.a.Dimm}),d.a.createElement("div",{className:"stretch "+_.a.Description},d.a.createElement("span",{className:_.a.Title},s.title),d.a.createElement("span",{className:_.a.SubTitle},s.description),d.a.createElement("span",{className:_.a.Authors},"Authors")))},s}(d.a.Component),b=o("./src/core/fake-db/FakeImagePath.ts"),x=o("./src/core/utils/array.ts"),v=function(){return function(e){e&&Object.assign(this,e)}}(),y=new v({toon_no:1,title:"This is a title and",description:"hahahah this is description",home_image_url:Object(b.a)(t||(t=i.f(["slot/slot@2x.png"],["slot/slot@2x.png"]))),share_image_url:Object(b.a)(a||(a=i.f(["slot/slot@2x.png"],["slot/slot@2x.png"]))),authors:[]}),T=(Object(x.a)(10).map(function(e){return new v({toon_no:e+=1,title:"This is a title and",description:"hahahah this is description",home_image_url:Object(b.a)(n||(n=i.f(["slot/slot@2x.png"],["slot/slot@2x.png"]))),share_image_url:Object(b.a)(r||(r=i.f(["slot/slot@2x.png"],["slot/slot@2x.png"]))),authors:[]})}),o("./src/core/fake-db/toon/fake-series.ts")),j=o("./src/pages/ToonHomePage/components/SeriesListItem/SeriesListItem.scss"),L=o.n(j),I=o("./node_modules/react-router-dom/es/index.js"),O=o("./src/core/values/app-language.ts"),E=function(e){function s(s){return e.call(this,s)||this}return i.d(s,e),s.prototype.render=function(){var e=this.props,s=e.appWidth,o=e.series,t=o.toon_no,a=o.series_no,n=o.title,r=o.thumbnail_image_url;return d.a.createElement(I.b,{to:"/"+O.a+"/toon/"+t+"/series/"+a,className:L.a.SeriesListItem},d.a.createElement(h.a,{src:r,width:.152*s,height:.152*s,alt:"Series Thumbnail"}),d.a.createElement("div",{className:L.a.Title},n))},s}(d.a.Component);o.d(s,"ToonHomePage",function(){return N});var N=function(e){function s(s){return e.call(this,s)||this}return i.d(s,e),s.prototype.componentDidMount=function(){this.props.appStore.routeUtils.match},s.prototype.render=function(){var e=this.props.appStore;return d.a.createElement("div",{className:m.a.ToonHomePage},d.a.createElement(p.a,{storyPage:!1}),d.a.createElement("div",{className:m.a.Body},d.a.createElement(f,{appWidth:e.appWidth,toon:y}),T.b.map(function(s){return d.a.createElement(E,{key:s.series_no,appWidth:e.appWidth,series:s})})))},s=i.c([Object(u.b)("appStore"),Object(u.b)("apiSvc"),u.c,i.g("design:paramtypes",[Object])],s)}(d.a.Component)},"./src/pages/ToonHomePage/components/SeriesListItem/SeriesListItem.scss":function(e,s,o){var t=o("./node_modules/typings-for-css-modules-loader/lib/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/pages/ToonHomePage/components/SeriesListItem/SeriesListItem.scss");"string"==typeof t&&(t=[[e.i,t,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};o("./node_modules/style-loader/lib/addStyles.js")(t,a);t.locals&&(e.exports=t.locals)},"./src/pages/ToonHomePage/components/ToonMainHeader/ToonMainHeader.scss":function(e,s,o){var t=o("./node_modules/typings-for-css-modules-loader/lib/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/pages/ToonHomePage/components/ToonMainHeader/ToonMainHeader.scss");"string"==typeof t&&(t=[[e.i,t,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};o("./node_modules/style-loader/lib/addStyles.js")(t,a);t.locals&&(e.exports=t.locals)}}]);