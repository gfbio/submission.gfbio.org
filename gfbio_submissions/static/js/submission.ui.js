(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{0:function(e,n){},"0785de3f40b134973d35":function(e,n,t){var o=t("ab039aecd4a1d4fedc0e").addLocaleData,r=t("58d82b287428be065a42"),c=t("7dd68a64079d1d4cd439");o(r);var i=function e(n,t){var o="en"!==n?e("en",c):{};return Object.keys(t).reduce(function(e,r){var c=t[r]||"en"===n?t[r]:o[r];return Object.assign(e,function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}({},r,c))},{})},a={en:i("en",c)};n.appLocales=["en"],n.formatTranslationMessages=i,n.translationMessages=a,n.DEFAULT_LOCALE="en"},"0cbc23df16a5c6ceec4d":function(e,n,t){e.exports=t.p+".htaccess"},1:function(e,n,t){t("5b15df55c1316f23e9d0"),e.exports=t("8b703812aa8ae3c41814")},"491cc2e27aa2b4221847":function(e,n,t){"use strict";t.d(n,"a",function(){return u});var o=t("4e2e9348dad8fe460c1d"),r=t("accfe20dac886d57b695"),c=t("edc5ec6b13db97ea0a32"),i=t("5e98cee1846dbfd41421"),a=t("511b2e46256d95d30278");function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object(o.combineReducers)(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){f(e,n,t[n])})}return e}({language:a.a},e,{form:c.reducer}));return Object(r.connectRouter)(i.a)(n)}},"511b2e46256d95d30278":function(e,n,t){"use strict";var o=t("54f683fcda7806277002"),r="app/LanguageToggle/CHANGE_LOCALE",c=t("0785de3f40b134973d35");t.d(n,"b",function(){return i});var i=Object(o.fromJS)({locale:c.DEFAULT_LOCALE});n.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case r:return e.set("locale",n.locale);default:return e}}},"5e98cee1846dbfd41421":function(e,n,t){"use strict";var o=t("89fa59dfd48f288c4600"),r=t.n(o)()({basename:"/ui/submission"});n.a=r},"7dd68a64079d1d4cd439":function(e){e.exports=[]},"8b703812aa8ae3c41814":function(e,n,t){"use strict";t.r(n);t("8c8e4f08a118a28666b0");var o,r=t("8af190b70a6bc55c6f1b"),c=t.n(r),i=t("63f14ac74ce296f77f4d"),a=t.n(i),f=t("d7dd51e1bf6bfc2c9c3d"),u=t("accfe20dac886d57b695"),l=t("5e98cee1846dbfd41421"),s=(t("6735bdf1a3a541ab43fd"),t("e95a63b25fb92ed15721")),d=t("be49ece3c9ac38c7621f"),b=Object(d.a)(function(){return t.e(4).then(t.bind(null,"0b8eb3e35929778b339a"))}),p=Object(d.a)(function(){return t.e(5).then(t.bind(null,"8937ca26cad1b574ef33"))}),y=Object(d.a)(function(){return Promise.all([t.e(0),t.e(1),t.e(6)]).then(t.bind(null,"d26088e76a0c90e341f8"))}),v=Object(d.a)(function(){return Promise.all([t.e(0),t.e(1),t.e(7)]).then(t.bind(null,"1b8cc428c13d7cd645c7"))});function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,n,t,r){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var c=e&&e.defaultProps,i=arguments.length-3;if(n||0===i||(n={children:void 0}),n&&c)for(var a in c)void 0===n[a]&&(n[a]=c[a]);else n||(n=c||{});if(1===i)n.children=r;else if(i>1){for(var f=new Array(i),u=0;u<i;u++)f[u]=arguments[u+3];n.children=f}return{$$typeof:o,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}function O(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(e,n){return!n||"object"!==m(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,n){return(j=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var S,P=h("div",{className:"container"},void 0,h("div",{className:"row"},void 0,h("div",{className:"col-sm-12"},void 0,h("nav",{className:"nav"},void 0,h(s.Link,{className:"nav-link",to:"/list"},void 0,h("i",{className:"icon ion-ios-list"}),"My Submissions"),h(s.Link,{className:"nav-link",to:"/form"},void 0,h("i",{className:"icon ion-ios-add-circle-outline"}),"Create Submission"),h(s.Link,{className:"nav-link",to:"/list"},void 0,h("i",{className:"icon ion-ios-help-circle-outline"}),"Help")))));function _(e,n,t,o){S||(S="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,c=arguments.length-3;if(n||0===c||(n={children:void 0}),n&&r)for(var i in r)void 0===n[i]&&(n[i]=r[i]);else n||(n=r||{});if(1===c)n.children=o;else if(c>1){for(var a=new Array(c),f=0;f<c;f++)a[f]=arguments[f+3];n.children=a}return{$$typeof:S,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}var k=_(function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),g(this,w(n).apply(this,arguments))}var t,o,r;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&j(e,n)}(n,c.a.PureComponent),t=n,(o=[{key:"render",value:function(){return h("section",{className:"sub-navi"},void 0,P)}}])&&O(t.prototype,o),r&&O(t,r),n}(),{}),E=_(s.Route,{exact:!0,path:"/",component:b}),L=_(s.Route,{exact:!0,path:"/form",component:y}),N=_(s.Route,{path:"/form/:brokerSubmissionId",component:y}),C=_(s.Route,{exact:!0,path:"/list",component:v}),R=_(s.Route,{component:p});t("8a2d1b95e05b6a321e74");var A,x=t("a28fc3c963a1d4d1a2e5"),T=t("ab039aecd4a1d4fedc0e"),$=t("511b2e46256d95d30278"),M=function(e){return e.get("language",$.b)};function D(e){return(D="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function J(e,n){return!n||"object"!==D(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e,n){return(H=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var U=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),J(this,F(n).apply(this,arguments))}var t,o,r;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&H(e,n)}(n,c.a.PureComponent),t=n,(o=[{key:"render",value:function(){return function(e,n,t,o){A||(A="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,c=arguments.length-3;if(n||0===c||(n={children:void 0}),n&&r)for(var i in r)void 0===n[i]&&(n[i]=r[i]);else n||(n=r||{});if(1===c)n.children=o;else if(c>1){for(var a=new Array(c),f=0;f<c;f++)a[f]=arguments[f+3];n.children=a}return{$$typeof:A,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}(T.IntlProvider,{locale:this.props.locale,messages:this.props.messages[this.props.locale]},this.props.locale,c.a.Children.only(this.props.children))}}])&&I(t.prototype,o),r&&I(t,r),n}(),B=Object(x.a)(Object(x.a)(M,function(e){return e.get("locale")}),function(e){return{locale:e}});var G=Object(f.connect)(B,function(e){return{dispatch:e}})(U),q=(t("9c6be9f00377ac8be3d8"),t("0cbc23df16a5c6ceec4d"),t("ab4cb61bcb2dc161defb")),z=t("54f683fcda7806277002"),K=t("7719267b28dd5a765e23"),Q=t.n(K),V=t("491cc2e27aa2b4221847");var W=Q()();var X,Y=t("0785de3f40b134973d35");function Z(e,n,t,o){X||(X="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,c=arguments.length-3;if(n||0===c||(n={children:void 0}),n&&r)for(var i in r)void 0===n[i]&&(n[i]=r[i]);else n||(n=r||{});if(1===c)n.children=o;else if(c>1){for(var a=new Array(c),f=0;f<c;f++)a[f]=arguments[f+3];n.children=a}return{$$typeof:X,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}var ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,t=[W,Object(u.routerMiddleware)(n)],o=[q.applyMiddleware.apply(void 0,t)],r=q.compose,c=Object(q.createStore)(Object(V.a)(),Object(z.fromJS)(e),r.apply(void 0,o));return c.runSaga=W.run,c.injectedReducers={},c.injectedSagas={},c}({},l.a),ne=document.getElementById("submission-ui"),te=Z(u.ConnectedRouter,{history:l.a},void 0,Z(function(){return _("div",{},void 0,k,_(s.Switch,{},void 0,E,L,N,C,R))},{})),oe=function(e){a.a.render(Z(f.Provider,{store:ee},void 0,Z(G,{messages:e},void 0,te)),ne)};window.Intl?oe(Y.translationMessages):new Promise(function(e){e(Promise.all([t.e(0),t.e(8)]).then(t.t.bind(null,"97694e21b72f8e9351c4",7)))}).then(function(){return Promise.all([t.e(0).then(t.t.bind(null,"f030ad8f70186ef5cb63",7))])}).then(function(){return oe(Y.translationMessages)}).catch(function(e){throw e}),t("30d14b3a3295666f3aba").install()},"9c6be9f00377ac8be3d8":function(e,n,t){e.exports=t.p+"favicon.ico"}},[[1,3,0]]]);