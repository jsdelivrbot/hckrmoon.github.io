(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"./node_modules/typings-for-css-modules-loader/lib/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/components/ImageLoader/ImageLoader.scss":function(e,s,o){(s=e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,".VRv0e{position:relative;display:inline-block;font-size:0;overflow:hidden;-webkit-user-drag:none}.VRv0e._1MlOY,.VRv0e._1MlOY img{border-radius:50%}.VRv0e img{width:100%;opacity:0;transition:opacity .4s ease-out}.VRv0e img._3X_EN{opacity:1}.VRv0e ._2SOxR{opacity:1;transition:opacity .2s ease-out}.VRv0e ._2SOxR._2R9Vy{opacity:0}",""]),s.locals={ImageLoader:"VRv0e",circle:"_1MlOY",loaded:"_3X_EN",Loader:"_2SOxR",hideLoader:"_2R9Vy"}},"./node_modules/typings-for-css-modules-loader/lib/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/pages/ViewerPage/ViewerPage.scss":function(e,s,o){(s=e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"._3Mczn{position:relative;font-size:0}",""]),s.locals={ViewerPage:"_3Mczn"}},"./node_modules/typings-for-css-modules-loader/lib/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/pages/ViewerPage/components/ViewerHeader/ViewerHeader.scss":function(e,s,o){(s=e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,".QxVRK{position:fixed;top:0;left:0;bottom:0;display:flex;justify-content:space-between;width:100%;height:50px;box-sizing:border-box;padding:0 13px 0 18px;align-items:center;background:rgba(46,49,64,.95)}.QxVRK ._25VqE{font-size:17px;color:#fff}.QxVRK .rRVtt{width:29px;height:29px}",""]),s.locals={ViewerHeader:"QxVRK",Title:"_25VqE",AppLogo:"rRVtt"}},"./src/components/ImageLoader/ImageLoader.scss":function(e,s,o){var t=o("./node_modules/typings-for-css-modules-loader/lib/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/components/ImageLoader/ImageLoader.scss");"string"==typeof t&&(t=[[e.i,t,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};o("./node_modules/style-loader/lib/addStyles.js")(t,a);t.locals&&(e.exports=t.locals)},"./src/components/ImageLoader/ImageLoader.tsx":function(e,s,o){"use strict";o.d(s,"a",function(){return p});var t=o("./node_modules/tslib/tslib.es6.js"),a=o("./node_modules/react/index.js"),r=o.n(a),n=o("./src/components/ImageLoader/ImageLoader.scss"),i=o.n(n),d=o("./node_modules/react-content-loader/dist/react-content-loader.es.js"),c=o("./node_modules/classcat/src/index.js"),l=o("./node_modules/mobx-react/index.module.js"),p=function(e){function s(s){var o=e.call(this,s)||this;return o.mounted=!1,o.state={imageLoaded:!1},o}return t.d(s,e),s.prototype.componentDidMount=function(){this.mounted=!0},s.prototype.shouldComponentUpdate=function(e,s){return this.props.src!==e.src||this.props.alt!==e.alt||this.props.width!==e.width||this.props.height!==e.height||this.state.imageLoaded!==s.imageLoaded},s.prototype.componentWillUnmount=function(){this.mounted=!1},s.prototype.onImageLoaded=function(e){return t.b(this,void 0,void 0,function(){var s;return t.e(this,function(o){return this.mounted&&(s=this.props.onLoad,this.setState({imageLoaded:!0}),s&&s(e)),[2]})})},s.prototype.render=function(){var e,s=this,o=this.props,t=o.appStore,a=o.src,n=o.alt,l=o.width,p=o.height,m=o.circle,u=t.appWidth,g=this.state.imageLoaded,h=l>u?u:l,f=l>u?p/l*l:p;return r.a.createElement("div",{className:i.a.ImageLoader+" "+(m?i.a.circle:""),style:{width:h,height:f}},r.a.createElement("img",{className:"stretch "+(g?i.a.loaded:""),src:a,alt:n,onLoad:function(e){return s.onImageLoaded(e)}}),r.a.createElement("div",{className:Object(c.a)((e={stretch:!0},e[i.a.Loader]=g,e[i.a.hideLoader]=g,e))},r.a.createElement(d.a,{width:100,height:100,speed:1},r.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"100",height:"100"}))))},s.defaultProps={circle:!1},s=t.c([Object(l.b)("appStore"),t.g("design:paramtypes",[Object])],s)}(r.a.Component)},"./src/core/fake-db/toon/fake-series.ts":function(e,s,o){"use strict";var t,a,r=o("./node_modules/tslib/tslib.es6.js"),n=o("./src/core/fake-db/FakeImagePath.ts"),i=o("./src/core/utils/array.ts");!function(e){e.CONTENTS="CONTENTS",e.MOVIE="MOVIE"}(t||(t={})),function(e){e.NORMAL="NORMAL",e.NONE="NONE",e.LAST_SERIES="LAST_SERIES",e.EPILOG="EPILOG",e.PROLOGUE="PROLOGUE"}(a||(a={}));var d=function(){return function(e){e&&Object.assign(this,e)}}(),c=o("./src/core/values/yn.ts");o.d(s,"a",function(){return g}),o.d(s,"b",function(){return h});var l,p,m,u,g=new d({series_no:1,toon_no:1,title:"This is a title and",thumbnail_image_url:Object(n.a)(l||(l=r.f(["slot/slot@2x.png"],["slot/slot@2x.png"]))),movie_preview_image_url:Object(n.a)(p||(p=r.f(["slot/slot@2x.png"],["slot/slot@2x.png"]))),series_order:1,type_cd:t.CONTENTS,series_cd:a.NORMAL,new_yn:c.a.Y,update_yn:c.a.N,remain_days:5}),h=Object(i.a)(10).map(function(e){return new d({series_no:e+=1,toon_no:1,title:"This is a title and",thumbnail_image_url:Object(n.a)(m||(m=r.f(["slot/slot@2x.png"],["slot/slot@2x.png"]))),movie_preview_image_url:Object(n.a)(u||(u=r.f(["slot/slot@2x.png"],["slot/slot@2x.png"]))),series_order:1,type_cd:t.CONTENTS,series_cd:a.NORMAL,new_yn:2*Math.random()>1?c.a.Y:c.a.N,update_yn:2*Math.random()>1?c.a.Y:c.a.N,remain_days:5})})},"./src/core/values/yn.ts":function(e,s,o){"use strict";var t;o.d(s,"a",function(){return t}),function(e){e.Y="Y",e.N="N"}(t||(t={}))},"./src/pages/ViewerPage/ViewerPage.scss":function(e,s,o){var t=o("./node_modules/typings-for-css-modules-loader/lib/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/pages/ViewerPage/ViewerPage.scss");"string"==typeof t&&(t=[[e.i,t,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};o("./node_modules/style-loader/lib/addStyles.js")(t,a);t.locals&&(e.exports=t.locals)},"./src/pages/ViewerPage/ViewerPage.tsx":function(e,s,o){"use strict";o.r(s);var t,a,r=o("./node_modules/tslib/tslib.es6.js"),n=o("./node_modules/react/index.js"),i=o.n(n),d=o("./node_modules/mobx-react/index.module.js"),c=o("./src/pages/ViewerPage/components/ViewerHeader/ViewerHeader.scss"),l=o.n(c),p=o("./src/components/ImageLoader/ImageLoader.tsx"),m=o("./src/core/values/prefix.ts"),u=o("./node_modules/react-router-dom/es/index.js"),g=o("./src/core/values/app-language.ts"),h=o("./src/components/svg/AppLogo/AppLogo.svg.tsx"),f=function(e){function s(s){var o=e.call(this,s)||this;return o.onListBtn=o.onListBtn.bind(o),o}return r.d(s,e),s.prototype.onListBtn=function(e){var s=this.props,o=s.historyManager,t=s.series;o.prev.pathname==="/"+g.a+"/toon/"+t.toon_no&&(e.preventDefault(),history.back())},s.prototype.render=function(){var e=this.props.series;return i.a.createElement("div",{className:l.a.ViewerHeader},i.a.createElement(u.b,{to:"/"+g.a+"/toon/"+e.toon_no,onClick:this.onListBtn},i.a.createElement(p.a,{src:s.listMenuImage,width:19,height:19,alt:"List Menu"})),i.a.createElement("div",{className:l.a.Title},e.title),i.a.createElement("div",{className:l.a.AppLogo},i.a.createElement(h.a,{animation:!1})))},s.listMenuImage=Object(m.a)(t||(t=r.f(["/components/viewer/header-icon-list@2x.png"],["/components/viewer/header-icon-list@2x.png"]))),s.appImage=Object(m.a)(a||(a=r.f(["/components/viewer/header-icon-app@2x.png"],["/components/viewer/header-icon-app@2x.png"]))),s}(i.a.Component),_=o("./src/core/fake-db/toon/fake-series.ts"),b=o("./src/pages/ViewerPage/ViewerPage.scss"),v=o.n(b);o.d(s,"ViewerPage",function(){return w});var w=function(e){function s(s){return e.call(this,s)||this}return r.d(s,e),s.prototype.componentDidMount=function(){this.props.appStore.setBackground("black")},s.prototype.componentWillUnmount=function(){this.props.appStore.setBackground("white")},s.prototype.render=function(){var e=this.props.appStore;return i.a.createElement("div",{className:v.a.ViewerPage},i.a.createElement(f,{series:_.a,historyManager:e.historyManager}))},s=r.c([Object(d.b)("appStore"),r.g("design:paramtypes",[Object])],s)}(i.a.Component)},"./src/pages/ViewerPage/components/ViewerHeader/ViewerHeader.scss":function(e,s,o){var t=o("./node_modules/typings-for-css-modules-loader/lib/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/pages/ViewerPage/components/ViewerHeader/ViewerHeader.scss");"string"==typeof t&&(t=[[e.i,t,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};o("./node_modules/style-loader/lib/addStyles.js")(t,a);t.locals&&(e.exports=t.locals)}}]);