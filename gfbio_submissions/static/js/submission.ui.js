(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(e,n){},"0785de3f40b134973d35":function(e,n,t){var r=t("ab039aecd4a1d4fedc0e").addLocaleData,o=t("58d82b287428be065a42"),c=t("7dd68a64079d1d4cd439");r(o);var a=function e(n,t){var r="en"!==n?e("en",c):{};return Object.keys(t).reduce(function(e,o){var c=t[o]||"en"===n?t[o]:r[o];return Object.assign(e,function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}({},o,c))},{})},i={en:a("en",c)};n.appLocales=["en"],n.formatTranslationMessages=a,n.translationMessages=i,n.DEFAULT_LOCALE="en"},"0cbc23df16a5c6ceec4d":function(e,n,t){e.exports=t.p+".htaccess"},1:function(e,n,t){t("5b15df55c1316f23e9d0"),e.exports=t("8b703812aa8ae3c41814")},"491cc2e27aa2b4221847":function(e,n,t){"use strict";t.d(n,"a",function(){return f});var r=t("4e2e9348dad8fe460c1d"),o=t("accfe20dac886d57b695"),c=t("1dd490f4fff9e7e0ffad"),a=t("5e98cee1846dbfd41421"),i=t("511b2e46256d95d30278");function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object(r.combineReducers)(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){u(e,n,t[n])})}return e}({language:i.a,form:c.a},e));return Object(o.connectRouter)(a.a)(n)}},"511b2e46256d95d30278":function(e,n,t){"use strict";var r=t("54f683fcda7806277002"),o="app/LanguageToggle/CHANGE_LOCALE",c=t("0785de3f40b134973d35");t.d(n,"b",function(){return a});var a=Object(r.fromJS)({locale:c.DEFAULT_LOCALE});n.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case o:return e.set("locale",n.locale);default:return e}}},"51211e9c1f6999c9c028":function(e,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"b",function(){return c}),t.d(n,"c",function(){return a}),t.d(n,"e",function(){return i}),t.d(n,"d",function(){return u}),t.d(n,"g",function(){return f}),t.d(n,"i",function(){return l}),t.d(n,"j",function(){return d}),t.d(n,"h",function(){return s}),t.d(n,"f",function(){return p});var r=t("c3070e7f848a6dafdfba");function o(e){return{type:r.a,license:e}}function c(e){return{type:r.b,metaDataSchema:e}}function a(){return{type:r.d}}function i(){return{type:r.f}}function u(){return{type:r.e}}function f(e){return{type:r.h,form:e}}function l(){return{type:r.k}}function d(e){return{type:r.l,response:e}}function s(e){return{type:r.j,errorResponse:e}}function p(e){return{type:r.g,date:e}}},"5e98cee1846dbfd41421":function(e,n,t){"use strict";var r=t("89fa59dfd48f288c4600"),o=t.n(r)()();n.a=o},"7dd68a64079d1d4cd439":function(e){e.exports=[]},"8b703812aa8ae3c41814":function(e,n,t){"use strict";t.r(n);t("8c8e4f08a118a28666b0");var r=t("8af190b70a6bc55c6f1b"),o=t.n(r),c=t("63f14ac74ce296f77f4d"),a=t.n(c),i=t("d7dd51e1bf6bfc2c9c3d"),u=t("accfe20dac886d57b695"),f=t("5e98cee1846dbfd41421"),l=(t("6735bdf1a3a541ab43fd"),t("e95a63b25fb92ed15721")),d=t("be49ece3c9ac38c7621f"),s=Object(d.a)(function(){return t.e(3).then(t.bind(null,"0b8eb3e35929778b339a"))}),p=Object(d.a)(function(){return t.e(4).then(t.bind(null,"8937ca26cad1b574ef33"))}),b=Object(d.a)(function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"d26088e76a0c90e341f8"))}),y=(t("8a2d1b95e05b6a321e74"),t("edc5ec6b13db97ea0a32")),m=t("64008341693dac7554c9"),v=t("a28fc3c963a1d4d1a2e5"),h=(t("adc20f99e57c573c589c"),t("d95b0cf107403b178365"),t("54f683fcda7806277002"));Object(h.fromJS)({});var j;t("51211e9c1f6999c9c028");function O(e){return(O="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,n,t,r){j||(j="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,c=arguments.length-3;if(n||0===c||(n={children:void 0}),n&&o)for(var a in o)void 0===n[a]&&(n[a]=o[a]);else n||(n=o||{});if(1===c)n.children=r;else if(c>1){for(var i=new Array(c),u=0;u<c;u++)i[u]=arguments[u+3];n.children=i}return{$$typeof:j,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}function g(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,n){return!n||"object"!==O(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,n){return(R=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var E,P=S("h1",{},void 0,"TestForm"),T=S("div",{},void 0,S("label",{},void 0,"First Name"),S("div",{},void 0,S(m.a,{name:"firstName",component:"input",type:"text",placeholder:"First Name"}))),C=S("div",{},void 0,S("label",{},void 0,"Last Name"),S("div",{},void 0,S(m.a,{name:"lastName",component:"input",type:"text",placeholder:"Last Name"}))),k=S("button",{type:"submit"},void 0,"Submit"),A=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),w(this,_(n).apply(this,arguments))}var t,r,c;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&R(e,n)}(n,o.a.PureComponent),t=n,(r=[{key:"render",value:function(){return S("div",{},void 0,P,S("form",{onSubmit:this.props.handleSubmit},void 0,T,C,S("div",{},void 0,k)))}}])&&g(t.prototype,r),c&&g(t,c),n}();Object(y.reduxForm)({form:"formWrapper"})(A);function F(e,n,t,r){E||(E="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,c=arguments.length-3;if(n||0===c||(n={children:void 0}),n&&o)for(var a in o)void 0===n[a]&&(n[a]=o[a]);else n||(n=o||{});if(1===c)n.children=r;else if(c>1){for(var i=new Array(c),u=0;u<c;u++)i[u]=arguments[u+3];n.children=i}return{$$typeof:E,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}var M="/ui/submission",x=F(l.Route,{exact:!0,path:"/",component:s}),L=F(l.Route,{exact:!0,path:"/form",component:b}),N=F(l.Route,{exact:!0,path:"/test",component:A}),I=F(l.Route,{component:p});var U,D=t("ab039aecd4a1d4fedc0e"),B=t("511b2e46256d95d30278"),$=function(e){return e.get("language",B.b)};function W(e){return(W="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function J(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(e,n){return!n||"object"!==W(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e,n){return(V=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var q=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),G(this,H(n).apply(this,arguments))}var t,r,c;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&V(e,n)}(n,o.a.PureComponent),t=n,(r=[{key:"render",value:function(){return function(e,n,t,r){U||(U="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,c=arguments.length-3;if(n||0===c||(n={children:void 0}),n&&o)for(var a in o)void 0===n[a]&&(n[a]=o[a]);else n||(n=o||{});if(1===c)n.children=r;else if(c>1){for(var i=new Array(c),u=0;u<c;u++)i[u]=arguments[u+3];n.children=i}return{$$typeof:U,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}(D.IntlProvider,{locale:this.props.locale,messages:this.props.messages[this.props.locale]},this.props.locale,o.a.Children.only(this.props.children))}}])&&J(t.prototype,r),c&&J(t,c),n}(),z=Object(v.a)(Object(v.a)($,function(e){return e.get("locale")}),function(e){return{locale:e}});var K=Object(i.connect)(z,function(e){return{dispatch:e}})(q),Q=(t("9c6be9f00377ac8be3d8"),t("0cbc23df16a5c6ceec4d"),t("ab4cb61bcb2dc161defb")),X=t("7719267b28dd5a765e23"),Y=t.n(X),Z=t("491cc2e27aa2b4221847");var ee=Y()();var ne,te=t("0785de3f40b134973d35");function re(e,n,t,r){ne||(ne="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,c=arguments.length-3;if(n||0===c||(n={children:void 0}),n&&o)for(var a in o)void 0===n[a]&&(n[a]=o[a]);else n||(n=o||{});if(1===c)n.children=r;else if(c>1){for(var i=new Array(c),u=0;u<c;u++)i[u]=arguments[u+3];n.children=i}return{$$typeof:ne,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}var oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,t=[ee,Object(u.routerMiddleware)(n)],r=[Q.applyMiddleware.apply(void 0,t)],o=Q.compose,c=Object(Q.createStore)(Object(Z.a)(),Object(h.fromJS)(e),o.apply(void 0,r));return c.runSaga=ee.run,c.injectedReducers={},c.injectedSagas={},c}({},f.a),ce=document.getElementById("submission-ui"),ae=re(u.ConnectedRouter,{history:f.a},void 0,re(function(){return F("div",{},void 0,F(l.BrowserRouter,{basename:M},void 0,F(l.Switch,{},void 0,x,L,N,I)))},{})),ie=function(e){a.a.render(re(i.Provider,{store:oe},void 0,re(K,{messages:e},void 0,ae)),ce)};window.Intl?ie(te.translationMessages):new Promise(function(e){e(Promise.all([t.e(0),t.e(6)]).then(t.t.bind(null,"97694e21b72f8e9351c4",7)))}).then(function(){return Promise.all([t.e(0).then(t.t.bind(null,"f030ad8f70186ef5cb63",7))])}).then(function(){return ie(te.translationMessages)}).catch(function(e){throw e}),t("30d14b3a3295666f3aba").install()},"9c6be9f00377ac8be3d8":function(e,n,t){e.exports=t.p+"favicon.ico"},adc20f99e57c573c589c:function(e,n,t){"use strict";var r=t("8af190b70a6bc55c6f1b"),o=t.n(r),c=t("8a2d1b95e05b6a321e74"),a=t.n(c),i=t("5ef9de3df8d92ea0e41c"),u=t.n(i),f=t("f2873ecf7390fe7d7c89"),l=t.n(f),d=t("5fa3f8487e09c6182715"),s=t.n(d),p=t("f3b0ff1628e56352bcbf"),b=t.n(p),y=t("a1cf5d6fa4ed65a6ddd5"),m=t.n(y),v=t("6a4f9c383785f9168266"),h=t.n(v),j=t("cc13decd9f9c09598c2f"),O="@@saga-injector/restart-on-remount",S="@@saga-injector/daemon",g="@@saga-injector/once-till-unmount";function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){_(e,n,t[n])})}return e}function _(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var R=[O,S,g],E=function(e){return h()(s()(e)&&!m()(e),"(app/utils...) injectSaga: Expected `key` to be a non empty string")},P=function(e){var n={saga:b.a,mode:function(e){return s()(e)&&R.includes(e)}};h()(l()(e,n),"(app/utils...) injectSaga: Expected a valid saga descriptor")};function T(e){return Object(j.a)(e),{injectSaga:function(e,n){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0;n||Object(j.a)(e);var c=w({},r,{mode:r.mode||O}),a=c.saga,i=c.mode;E(t),P(c);var u=Reflect.has(e.injectedSagas,t);(!u||u&&i!==S&&i!==g)&&(e.injectedSagas[t]=w({},c,{task:e.runSaga(a,o)}))}}(e,!0),ejectSaga:function(e,n){return function(t){if(n||Object(j.a)(e),E(t),Reflect.has(e.injectedSagas,t)){var r=e.injectedSagas[t];r.mode!==S&&(r.task.cancel(),e.injectedSagas[t]="done")}}}(e,!0)}}function C(e){return(C="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,n){return(F=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}n.a=function(e){var n=e.key,t=e.saga,r=e.mode;return function(e){var c=function(c){function a(){var e,n,t,r;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,a);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return t=this,n=!(r=(e=A(a)).call.apply(e,[this].concat(c)))||"object"!==C(r)&&"function"!==typeof r?M(t):r,x(M(M(n)),"injectors",T(n.context.store)),n}var i,u,f;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&F(e,n)}(a,o.a.Component),i=a,(u=[{key:"componentWillMount",value:function(){(0,this.injectors.injectSaga)(n,{saga:t,mode:r},this.props)}},{key:"componentWillUnmount",value:function(){(0,this.injectors.ejectSaga)(n)}},{key:"render",value:function(){return o.a.createElement(e,this.props)}}])&&k(i.prototype,u),f&&k(i,f),a}();return x(c,"WrappedComponent",e),x(c,"contextTypes",{store:a.a.object.isRequired}),x(c,"displayName","withSaga(".concat(e.displayName||e.name||"Component",")")),u()(c,e)}}},c3070e7f848a6dafdfba:function(e,n,t){"use strict";t.d(n,"c",function(){return r}),t.d(n,"a",function(){return o}),t.d(n,"b",function(){return c}),t.d(n,"d",function(){return a}),t.d(n,"f",function(){return i}),t.d(n,"e",function(){return u}),t.d(n,"h",function(){return f}),t.d(n,"k",function(){return l}),t.d(n,"i",function(){return d}),t.d(n,"l",function(){return s}),t.d(n,"j",function(){return p}),t.d(n,"g",function(){return b});var r="app/SubmissionForm/DEFAULT_ACTION",o="app/SubmissionForm/CHANGE_LICENSE",c="app/SubmissionForm/CHANGE_META_DATA_SCHEMA",a="app/SubmissionForm/SAVE_FORM",i="app/SubmissionForm/SAVE_FORM_SUCCESS",u="app/SubmissionForm/SAVE_FORM_ERROR",f="app/SubmissionForm/SUBMIT_FORM",l="app/SubmissionForm/SUBMIT_FORM_START",d="app/SubmissionForm/SUBMIT_FORM_ACTIVE",s="app/SubmissionForm/SUBMIT_FORM_SUCCESS",p="app/SubmissionForm/SUBMIT_FORM_ERROR",b="app/SubmssionForm/SET_EMBARGO_DATE"},cc13decd9f9c09598c2f:function(e,n,t){"use strict";t.d(n,"a",function(){return d});var r=t("d3a850c4000d77bccc89"),o=t.n(r),c=t("f3b0ff1628e56352bcbf"),a=t.n(c),i=t("f2873ecf7390fe7d7c89"),u=t.n(i),f=t("6a4f9c383785f9168266"),l=t.n(f);function d(e){var n={dispatch:a.a,subscribe:a.a,getState:a.a,replaceReducer:a.a,runSaga:a.a,injectedReducers:o.a,injectedSagas:o.a};l()(u()(e,n),"(app/utils...) injectors: Expected a valid redux store")}},d95b0cf107403b178365:function(e,n,t){"use strict";var r=t("8af190b70a6bc55c6f1b"),o=t.n(r),c=t("8a2d1b95e05b6a321e74"),a=t.n(c),i=t("5ef9de3df8d92ea0e41c"),u=t.n(i),f=t("5fa3f8487e09c6182715"),l=t.n(f),d=t("f3b0ff1628e56352bcbf"),s=t.n(d),p=t("a1cf5d6fa4ed65a6ddd5"),b=t.n(p),y=t("6a4f9c383785f9168266"),m=t.n(y),v=t("cc13decd9f9c09598c2f"),h=t("491cc2e27aa2b4221847");function j(e){return Object(v.a)(e),{injectReducer:function(e,n){return function(t,r){n||Object(v.a)(e),m()(l()(t)&&!b()(t)&&s()(r),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,t)&&e.injectedReducers[t]===r||(e.injectedReducers[t]=r,e.replaceReducer(Object(h.a)(e.injectedReducers)))}}(e,!0)}}function O(e){return(O="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,n){return(w=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}n.a=function(e){var n=e.key,t=e.reducer;return function(e){var r=function(r){function c(){var e,n,t,r;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,c);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return t=this,n=!(r=(e=g(c)).call.apply(e,[this].concat(a)))||"object"!==O(r)&&"function"!==typeof r?_(t):r,R(_(_(n)),"injectors",j(n.context.store)),n}var a,i,u;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&w(e,n)}(c,o.a.Component),a=c,(i=[{key:"componentWillMount",value:function(){(0,this.injectors.injectReducer)(n,t)}},{key:"render",value:function(){return o.a.createElement(e,this.props)}}])&&S(a.prototype,i),u&&S(a,u),c}();return R(r,"WrappedComponent",e),R(r,"contextTypes",{store:a.a.object.isRequired}),R(r,"displayName","withReducer(".concat(e.displayName||e.name||"Component",")")),u()(r,e)}}}},[[1,2,0]]]);