(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"./node_modules/typings-for-css-modules-loader/lib/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/components/ImageLoader/ImageLoader.scss":function(e,t,o){(t=e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,".VRv0e{position:relative;display:inline-block;font-size:0;overflow:hidden;-webkit-user-drag:none}.VRv0e._1MlOY,.VRv0e._1MlOY img{border-radius:50%}.VRv0e img{width:100%;opacity:0;transition:opacity .4s ease-out}.VRv0e img._3X_EN{opacity:1}.VRv0e ._2SOxR{opacity:1;transition:opacity .2s ease-out}.VRv0e ._2SOxR._2R9Vy{opacity:0}",""]),t.locals={ImageLoader:"VRv0e",circle:"_1MlOY",loaded:"_3X_EN",Loader:"_2SOxR",hideLoader:"_2R9Vy"}},"./node_modules/typings-for-css-modules-loader/lib/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/pages/ViewerPage/ViewerPage.scss":function(e,t,o){(t=e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"._3Mczn{font-size:0;height:10000px}",""]),t.locals={ViewerPage:"_3Mczn"}},"./node_modules/typings-for-css-modules-loader/lib/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/pages/ViewerPage/components/ViewerFooter/ViewerFooter.scss":function(e,t,o){(t=e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"._2hx6_{position:fixed;bottom:0;left:0;right:0;display:flex;justify-content:space-between;height:44px;box-sizing:border-box;align-items:center;background:rgba(46,49,64,.95);transform:translateY(100%);transition:transform .3s ease-in-out}._2hx6_.zFYy7{transform:translateY(0)}._2hx6_ .oX5Cj{display:flex;align-items:center;padding:0 43px;height:100%}._2hx6_ ._3gbDH{display:flex;justify-self:flex-end;height:100%;margin-right:8px;font-size:15px}._2hx6_ ._3gbDH ._165GQ{display:flex;align-items:center;height:100%;padding:0 25px}._2hx6_ ._3gbDH ._165GQ span{text-decoration:none;color:#fff}._2hx6_ ._3gbDH ._165GQ:first-child img{transform:rotate(180deg)}._2hx6_ ._3gbDH ._165GQ:first-child span{margin-left:9px}._2hx6_ ._3gbDH ._165GQ:last-child span{margin-right:9px}",""]),t.locals={ViewerFooter:"_2hx6_",active:"zFYy7",ShareBtn:"oX5Cj",NavBtns:"_3gbDH",NavBtn:"_165GQ"}},"./node_modules/typings-for-css-modules-loader/lib/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/pages/ViewerPage/components/ViewerHeader/ViewerHeader.scss":function(e,t,o){(t=e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,".QxVRK{position:fixed;top:0;left:0;right:0;display:flex;justify-content:space-between;height:50px;box-sizing:border-box;padding:0 13px 0 18px;align-items:center;background:rgba(46,49,64,.95);transform:translateY(-100%);transition:transform .3s ease-in-out}.QxVRK._3-G_I{transform:translateY(0)}.QxVRK ._25VqE{font-size:17px;color:#fff}.QxVRK .rRVtt{width:29px;height:29px}",""]),t.locals={ViewerHeader:"QxVRK",active:"_3-G_I",Title:"_25VqE",AppLogo:"rRVtt"}},"./src/components/ImageLoader/ImageLoader.scss":function(e,t,o){var s=o("./node_modules/typings-for-css-modules-loader/lib/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/components/ImageLoader/ImageLoader.scss");"string"==typeof s&&(s=[[e.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o("./node_modules/style-loader/lib/addStyles.js")(s,n);s.locals&&(e.exports=s.locals)},"./src/components/ImageLoader/ImageLoader.tsx":function(e,t,o){"use strict";var s=o("./node_modules/tslib/tslib.es6.js"),n=o("./node_modules/react/index.js"),r=o.n(n),a=o("./src/components/ImageLoader/ImageLoader.scss"),i=o.n(a),c=o("./node_modules/react-content-loader/dist/react-content-loader.es.js"),l=o("./node_modules/classcat/src/index.js"),d=o("./node_modules/mobx-react/index.module.js"),p=o("./src/core/utils/time.ts");o.d(t,"a",function(){return u});var u=function(e){function t(t){var o=e.call(this,t)||this;return o.mounted=!1,o.onScroll=Object(p.c)(o.onScroll.bind(o),t.throttleDuration||150),o.state={imageLoaded:!1,shouldFetch:!t.lazy},o}return s.d(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.props.lazy&&(window.addEventListener("scroll",this.onScroll),this.onScroll())},t.prototype.shouldComponentUpdate=function(e,t){return this.props.src!==e.src||this.props.alt!==e.alt||this.props.width!==e.width||this.props.height!==e.height||this.state.imageLoaded!==t.imageLoaded||this.state.shouldFetch!==t.shouldFetch},t.prototype.componentWillUnmount=function(){window.removeEventListener("scroll",this.onScroll),this.mounted=!1},t.prototype.onScroll=function(){if(this.detectVisibility()&&!this.state.shouldFetch)return this.setState({shouldFetch:!0})},t.prototype.detectVisibility=function(){if(!this.el)return!1;var e=function(e){if(!e)return{top:0,bottom:0,left:0,right:0,width:0,height:0};var t=e.getBoundingClientRect();return{top:t.top||0,bottom:t.bottom||0,left:t.left||0,right:t.right||0,width:t.width?t.width:t.right-t.left,height:t.height?t.height:t.bottom-t.top}}(this.el);return e.top>window.scrollY||e.top<window.scrollY+window.innerHeight},t.prototype.onImageLoaded=function(e){return s.b(this,void 0,void 0,function(){var t;return s.e(this,function(o){return this.mounted&&(t=this.props.onLoad,this.setState({imageLoaded:!0}),t&&t(e)),[2]})})},t.prototype.render=function(){var e,t,o,s=this,n=this.props,a=n.appStore,d=n.src,p=n.alt,u=n.width,m=n.height,h=n.circle,g=n.lazy,f=void 0!==g&&g,b=a.appWidth,_=this.state,v=_.imageLoaded,w=_.shouldFetch,x=u>b?b:u,y=u>b?m/u*u:m;return r.a.createElement("div",{ref:function(e){return s.el=e},className:Object(l.a)((e={},e[i.a.ImageLoader]=!0,e[i.a.circle]=h,e)),style:{width:x,height:y}},f&&!w?null:r.a.createElement("img",{className:Object(l.a)((t={stretch:!0},t[i.a.loaded]=v,t)),src:d,alt:p,onLoad:function(e){return s.onImageLoaded(e)}}),r.a.createElement("div",{className:Object(l.a)((o={stretch:!0},o[i.a.Loader]=v,o[i.a.hideLoader]=v,o))},r.a.createElement(c.a,{width:100,height:100,speed:1},r.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"100",height:"100"}))))},t.defaultProps={circle:!1},t=s.c([Object(d.b)("appStore"),s.g("design:paramtypes",[Object])],t)}(r.a.Component)},"./src/core/fake-db/toon/fake-series.ts":function(e,t,o){"use strict";var s,n,r=o("./node_modules/tslib/tslib.es6.js"),a=o("./src/core/fake-db/FakeImagePath.ts"),i=o("./src/core/utils/array.ts");!function(e){e.CONTENTS="CONTENTS",e.MOVIE="MOVIE"}(s||(s={})),function(e){e.NORMAL="NORMAL",e.NONE="NONE",e.LAST_SERIES="LAST_SERIES",e.EPILOG="EPILOG",e.PROLOGUE="PROLOGUE"}(n||(n={}));var c=function(){return function(e){e&&Object.assign(this,e)}}(),l=o("./src/core/values/yn.ts");o.d(t,"a",function(){return h}),o.d(t,"b",function(){return g});var d,p,u,m,h=new c({series_no:1,toon_no:1,title:"This is a title and",thumbnail_image_url:Object(a.a)(d||(d=r.f(["slot/slot@2x.png"],["slot/slot@2x.png"]))),movie_preview_image_url:Object(a.a)(p||(p=r.f(["slot/slot@2x.png"],["slot/slot@2x.png"]))),series_order:1,type_cd:s.CONTENTS,series_cd:n.NORMAL,new_yn:l.a.Y,update_yn:l.a.N,remain_days:5}),g=Object(i.a)(10).map(function(e){return new c({series_no:e+=1,toon_no:1,title:"This is a title and",thumbnail_image_url:Object(a.a)(u||(u=r.f(["slot/slot@2x.png"],["slot/slot@2x.png"]))),movie_preview_image_url:Object(a.a)(m||(m=r.f(["slot/slot@2x.png"],["slot/slot@2x.png"]))),series_order:1,type_cd:s.CONTENTS,series_cd:n.NORMAL,new_yn:2*Math.random()>1?l.a.Y:l.a.N,update_yn:2*Math.random()>1?l.a.Y:l.a.N,remain_days:5})})},"./src/core/values/global.ts":function(e,t,o){"use strict";o.d(t,"a",function(){return s});var s=window.__UI__},"./src/core/values/yn.ts":function(e,t,o){"use strict";var s;o.d(t,"a",function(){return s}),function(e){e.Y="Y",e.N="N"}(s||(s={}))},"./src/pages/ViewerPage/ViewerPage.scss":function(e,t,o){var s=o("./node_modules/typings-for-css-modules-loader/lib/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/pages/ViewerPage/ViewerPage.scss");"string"==typeof s&&(s=[[e.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o("./node_modules/style-loader/lib/addStyles.js")(s,n);s.locals&&(e.exports=s.locals)},"./src/pages/ViewerPage/ViewerPage.tsx":function(e,t,o){"use strict";o.r(t);var s,n,r,a,i=o("./node_modules/tslib/tslib.es6.js"),c=o("./node_modules/react/index.js"),l=o.n(c),d=o("./node_modules/classcat/src/index.js"),p=o("./node_modules/mobx-react/index.module.js"),u=o("./src/pages/ViewerPage/components/ViewerHeader/ViewerHeader.scss"),m=o.n(u),h=o("./src/components/ImageLoader/ImageLoader.tsx"),g=o("./src/core/values/prefix.ts"),f=o("./node_modules/react-router-dom/es/index.js"),b=o("./src/core/values/app-language.ts"),_=o("./src/components/svg/AppLogo/AppLogo.svg.tsx"),v=function(e){function t(t){var o=e.call(this,t)||this;return o.onListBtn=o.onListBtn.bind(o),o}return i.d(t,e),t.prototype.onListBtn=function(e){var t=this.props,o=t.historyManager,s=t.series;o.prev.pathname==="/"+b.a+"/toon/"+s.toon_no&&(e.preventDefault(),history.back())},t.prototype.render=function(){var e,o=this.props,s=o.series,n=o.active,r=void 0===n||n;return l.a.createElement("div",{className:Object(d.a)((e={},e[m.a.ViewerHeader]=!0,e[m.a.active]=r,e))},l.a.createElement(f.b,{to:"/"+b.a+"/toon/"+s.toon_no,onClick:this.onListBtn},l.a.createElement(h.a,{src:t.listMenuImage,width:19,height:19,alt:"List Menu",lazy:!0})),l.a.createElement("div",{className:m.a.Title},s.title),l.a.createElement("div",{className:m.a.AppLogo},l.a.createElement(_.a,{animation:!1})))},t.listMenuImage=Object(g.a)(s||(s=i.f(["/components/viewer/header-icon-list@2x.png"],["/components/viewer/header-icon-list@2x.png"]))),t.appImage=Object(g.a)(n||(n=i.f(["/components/viewer/header-icon-app@2x.png"],["/components/viewer/header-icon-app@2x.png"]))),t}(l.a.Component),w=o("./src/core/fake-db/toon/fake-series.ts"),x=o("./src/pages/ViewerPage/ViewerPage.scss"),y=o.n(x),j=o("./src/core/utils/time.ts"),V=o("./src/pages/ViewerPage/components/ViewerFooter/ViewerFooter.scss"),E=o.n(V),L=o("./src/core/values/global.ts"),O=function(e){function t(t){var o=e.call(this,t)||this;return o.onClickShareBtn=o.onClickShareBtn.bind(o),o.onPrev=o.onPrev.bind(o),o.onNext=o.onNext.bind(o),o}return i.d(t,e),t.prototype.onClickShareBtn=function(e){e.preventDefault()},t.prototype.onPrev=function(e){e.preventDefault()},t.prototype.onNext=function(e){e.preventDefault()},t.prototype.render=function(){var e,o,s,n,r=this.props,a=(r.series,r.active),i=void 0===a||a;return l.a.createElement("div",{className:Object(d.a)((e={},e[E.a.ViewerFooter]=!0,e[E.a.active]=i,e))},l.a.createElement(f.b,{className:Object(d.a)((o={},o[E.a.ShareBtn]=!0,o)),to:"",onClick:this.onClickShareBtn},l.a.createElement(h.a,{src:t.shareBtnImage,width:19,height:19,alt:"List Menu"})),l.a.createElement("div",{className:E.a.NavBtns},l.a.createElement(f.b,{className:Object(d.a)((s={},s[E.a.NavBtn]=!0,s[E.a.active]=!0,s)),to:"",onClick:this.onPrev},l.a.createElement(h.a,{width:7,height:12,src:t.navArrowImage,alt:"Prev Button"}),l.a.createElement("span",null,L.a.PAGES.VIEWER.PREV)),l.a.createElement(f.b,{className:Object(d.a)((n={},n[E.a.NavBtn]=!0,n[E.a.active]=!0,n)),to:"",onClick:this.onNext},l.a.createElement("span",null,L.a.PAGES.VIEWER.NEXT),l.a.createElement(h.a,{width:7,height:12,src:t.navArrowImage,alt:"Next Button"}))))},t.shareBtnImage=Object(g.a)(r||(r=i.f(["/components/viewer/bottom-btn-icon-share@2x.png"],["/components/viewer/bottom-btn-icon-share@2x.png"]))),t.navArrowImage=Object(g.a)(a||(a=i.f(["/components/viewer/bottom-btn-icon-next-nor@2x.png"],["/components/viewer/bottom-btn-icon-next-nor@2x.png"]))),t}(l.a.Component);o.d(t,"ViewerPage",function(){return S});var S=function(e){function t(t){var o=e.call(this,t)||this;return o.onScroll=Object(j.d)(o.onScroll.bind(o)),o.state={navMenus:!1},o}return i.d(t,e),t.prototype.componentDidMount=function(){return i.b(this,void 0,void 0,function(){return i.e(this,function(e){switch(e.label){case 0:return this.props.appStore.setBackground("black"),[4,Object(j.e)(100)];case 1:return e.sent(),this.setState({navMenus:!0}),this.onScroll(),window.addEventListener("scroll",this.onScroll),[2]}})})},t.prototype.componentWillUnmount=function(){this.props.appStore.setBackground("white")},t.prototype.onScroll=function(){this.props.viewerStore.updateBottomLine()},t.prototype.render=function(){var e,t=this.props,o=t.appStore,s=(t.viewerStore,this.state.navMenus);return l.a.createElement("div",{className:Object(d.a)((e={},e[y.a.ViewerPage]=!0,e.stretch=!0,e))},l.a.createElement(v,{series:w.a,historyManager:o.historyManager,active:s}),l.a.createElement(O,{series:w.a,active:s}))},t=i.c([Object(p.b)("appStore"),Object(p.b)("viewerStore"),i.g("design:paramtypes",[Object])],t)}(l.a.Component)},"./src/pages/ViewerPage/components/ViewerFooter/ViewerFooter.scss":function(e,t,o){var s=o("./node_modules/typings-for-css-modules-loader/lib/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/pages/ViewerPage/components/ViewerFooter/ViewerFooter.scss");"string"==typeof s&&(s=[[e.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o("./node_modules/style-loader/lib/addStyles.js")(s,n);s.locals&&(e.exports=s.locals)},"./src/pages/ViewerPage/components/ViewerHeader/ViewerHeader.scss":function(e,t,o){var s=o("./node_modules/typings-for-css-modules-loader/lib/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/pages/ViewerPage/components/ViewerHeader/ViewerHeader.scss");"string"==typeof s&&(s=[[e.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o("./node_modules/style-loader/lib/addStyles.js")(s,n);s.locals&&(e.exports=s.locals)}}]);