(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{0:function(e,n){},"0785de3f40b134973d35":function(e,n,t){var r=t("ab039aecd4a1d4fedc0e").addLocaleData,o=t("58d82b287428be065a42"),c=t("7dd68a64079d1d4cd439");r(o);var a=function e(n,t){var r="en"!==n?e("en",c):{};return Object.keys(t).reduce(function(e,o){var c=t[o]||"en"===n?t[o]:r[o];return Object.assign(e,function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}({},o,c))},{})},i={en:a("en",c)};n.appLocales=["en"],n.formatTranslationMessages=a,n.translationMessages=i,n.DEFAULT_LOCALE="en"},"0cbc23df16a5c6ceec4d":function(e,n,t){e.exports=t.p+".htaccess"},1:function(e,n,t){t("5b15df55c1316f23e9d0"),e.exports=t("8b703812aa8ae3c41814")},"491cc2e27aa2b4221847":function(e,n,t){"use strict";t.d(n,"a",function(){return u});var r=t("4e2e9348dad8fe460c1d"),o=t("accfe20dac886d57b695"),c=t("edc5ec6b13db97ea0a32"),a=t("5e98cee1846dbfd41421"),i=t("511b2e46256d95d30278");function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object(r.combineReducers)(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){f(e,n,t[n])})}return e}({language:i.a},e,{form:c.reducer}));return Object(o.connectRouter)(a.a)(n)}},"511b2e46256d95d30278":function(e,n,t){"use strict";var r=t("54f683fcda7806277002"),o="app/LanguageToggle/CHANGE_LOCALE",c=t("0785de3f40b134973d35");t.d(n,"b",function(){return a});var a=Object(r.fromJS)({locale:c.DEFAULT_LOCALE});n.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case o:return e.set("locale",n.locale);default:return e}}},"5e98cee1846dbfd41421":function(e,n,t){"use strict";var r=t("89fa59dfd48f288c4600"),o=t.n(r)()({basename:"/ui/submission"});n.a=o},"7dd68a64079d1d4cd439":function(e){e.exports=[]},"8b703812aa8ae3c41814":function(e,n,t){"use strict";t.r(n);t("8c8e4f08a118a28666b0");var r,o=t("8af190b70a6bc55c6f1b"),c=t.n(o),a=t("63f14ac74ce296f77f4d"),i=t.n(a),f=t("d7dd51e1bf6bfc2c9c3d"),u=t("accfe20dac886d57b695"),l=t("5e98cee1846dbfd41421"),d=(t("6735bdf1a3a541ab43fd"),t("e95a63b25fb92ed15721")),b=t("be49ece3c9ac38c7621f"),s=Object(b.a)(function(){return t.e(4).then(t.bind(null,"0b8eb3e35929778b339a"))}),p=Object(b.a)(function(){return t.e(5).then(t.bind(null,"8937ca26cad1b574ef33"))}),y=Object(b.a)(function(){return Promise.all([t.e(0),t.e(1),t.e(6)]).then(t.bind(null,"d26088e76a0c90e341f8"))}),v=Object(b.a)(function(){return Promise.all([t.e(0),t.e(1),t.e(7)]).then(t.bind(null,"1b8cc428c13d7cd645c7"))});function h(e,n,t,o){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var c=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={children:void 0}),n&&c)for(var i in c)void 0===n[i]&&(n[i]=c[i]);else n||(n=c||{});if(1===a)n.children=o;else if(a>1){for(var f=new Array(a),u=0;u<a;u++)f[u]=arguments[u+3];n.children=f}return{$$typeof:r,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,n){return!n||"object"!==m(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,n){return(j=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var S,P=h("section",{className:"sub-navigation-header"});function _(e,n,t,r){S||(S="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,c=arguments.length-3;if(n||0===c||(n={children:void 0}),n&&o)for(var a in o)void 0===n[a]&&(n[a]=o[a]);else n||(n=o||{});if(1===c)n.children=r;else if(c>1){for(var i=new Array(c),f=0;f<c;f++)i[f]=arguments[f+3];n.children=i}return{$$typeof:S,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}var E=_(function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),g(this,w(n).apply(this,arguments))}var t,r,o;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&j(e,n)}(n,c.a.PureComponent),t=n,(r=[{key:"render",value:function(){return P}}])&&O(t.prototype,r),o&&O(t,o),n}(),{}),k=_(d.Route,{exact:!0,path:"/",component:s}),L=_(d.Route,{exact:!0,path:"/form",component:y}),R=_(d.Route,{path:"/form/:brokerSubmissionId",component:y}),A=_(d.Route,{exact:!0,path:"/list",component:v}),C=_(d.Route,{component:p});t("8a2d1b95e05b6a321e74");var x,T=t("a28fc3c963a1d4d1a2e5"),$=t("ab039aecd4a1d4fedc0e"),M=t("511b2e46256d95d30278"),D=function(e){return e.get("language",M.b)};function I(e){return(I="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function J(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,n){return!n||"object"!==I(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e,n){return(U=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var B=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),F(this,N(n).apply(this,arguments))}var t,r,o;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&U(e,n)}(n,c.a.PureComponent),t=n,(r=[{key:"render",value:function(){return function(e,n,t,r){x||(x="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,c=arguments.length-3;if(n||0===c||(n={children:void 0}),n&&o)for(var a in o)void 0===n[a]&&(n[a]=o[a]);else n||(n=o||{});if(1===c)n.children=r;else if(c>1){for(var i=new Array(c),f=0;f<c;f++)i[f]=arguments[f+3];n.children=i}return{$$typeof:x,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}($.IntlProvider,{locale:this.props.locale,messages:this.props.messages[this.props.locale]},this.props.locale,c.a.Children.only(this.props.children))}}])&&J(t.prototype,r),o&&J(t,o),n}(),G=Object(T.a)(Object(T.a)(D,function(e){return e.get("locale")}),function(e){return{locale:e}});var H=Object(f.connect)(G,function(e){return{dispatch:e}})(B),q=(t("9c6be9f00377ac8be3d8"),t("0cbc23df16a5c6ceec4d"),t("ab4cb61bcb2dc161defb")),z=t("54f683fcda7806277002"),K=t("7719267b28dd5a765e23"),Q=t.n(K),V=t("491cc2e27aa2b4221847");var W=Q()();var X,Y=t("0785de3f40b134973d35");function Z(e,n,t,r){X||(X="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,c=arguments.length-3;if(n||0===c||(n={children:void 0}),n&&o)for(var a in o)void 0===n[a]&&(n[a]=o[a]);else n||(n=o||{});if(1===c)n.children=r;else if(c>1){for(var i=new Array(c),f=0;f<c;f++)i[f]=arguments[f+3];n.children=i}return{$$typeof:X,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}var ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,t=[W,Object(u.routerMiddleware)(n)],r=[q.applyMiddleware.apply(void 0,t)],o=q.compose,c=Object(q.createStore)(Object(V.a)(),Object(z.fromJS)(e),o.apply(void 0,r));return c.runSaga=W.run,c.injectedReducers={},c.injectedSagas={},c}({},l.a),ne=document.getElementById("submission-ui"),te=Z(u.ConnectedRouter,{history:l.a},void 0,Z(function(){return _("div",{},void 0,E,_(d.Switch,{},void 0,k,L,R,A,C))},{})),re=function(e){i.a.render(Z(f.Provider,{store:ee},void 0,Z(H,{messages:e},void 0,te)),ne)};window.Intl?re(Y.translationMessages):new Promise(function(e){e(Promise.all([t.e(0),t.e(8)]).then(t.t.bind(null,"97694e21b72f8e9351c4",7)))}).then(function(){return Promise.all([t.e(0).then(t.t.bind(null,"f030ad8f70186ef5cb63",7))])}).then(function(){return re(Y.translationMessages)}).catch(function(e){throw e}),t("30d14b3a3295666f3aba").install()},"9c6be9f00377ac8be3d8":function(e,n,t){e.exports=t.p+"favicon.ico"}},[[1,3,0]]]);