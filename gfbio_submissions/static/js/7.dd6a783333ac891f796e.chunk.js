(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1b8cc428c13d7cd645c7":function(e,t,n){"use strict";n.r(t);var o=n("8af190b70a6bc55c6f1b"),s=n.n(o),r=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),i=n("a28fc3c963a1d4d1a2e5"),a=n("ab4cb61bcb2dc161defb"),c=n("e95a63b25fb92ed15721"),u=n("adc20f99e57c573c589c"),l=n("d95b0cf107403b178365"),d=n("54f683fcda7806277002"),b=n("ebbc0efdbec50da3a86b"),m={};void 0!==window.props&&(m=window.props);var f=Object(d.fromJS)({submissions:[],userId:m.userId||2,token:m.token||"5639b56bd077fb3e12d7e4a0ada244aaa970c2fd",userName:m.userName||"",deleteBrokerSubmissionId:"",deleteSubmissionDialog:!1});var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.e:return e;case b.g:return e.set("submissions",t.response.data);case b.f:return e;case b.h:return e.set("deleteSubmissionDialog",!0).set("deleteBrokerSubmissionId",t.brokerSubmissionId);case b.a:return e.set("deleteSubmissionDialog",!1).set("deleteBrokerSubmissionId","");case b.b:return e;case b.d:case b.c:return e.set("deleteSubmissionDialog",!1).set("deleteBrokerSubmissionId","");default:return e}},p=function(e){return e.get("submissionList",f)},h=function(){return Object(i.a)(p,function(e){return e.get("token")})},g=function(){return Object(i.a)(p,function(e){return e.get("userId")})},y=function(){return Object(i.a)(p,function(e){return e.get("deleteBrokerSubmissionId")})},w=n("97925be2959ab7c6c8ab");function k(){return{type:b.e}}function N(e){return{type:b.g,response:e}}function S(e){return{type:b.d,response:e}}var O=n("bd183afcc37eabd79225"),j=n.n(O),x=n("0f92590f552ab9dc25d2");function D(e,t){var n={headers:{Authorization:"Token "+e}};return j.a.get("".concat(x.a+x.e+x.h+t,"/"),n)}var _=function(e,t){var n={headers:{Authorization:"Token "+e}};return j.a.delete("".concat(x.a+x.e+t,"/"),n)},R=regeneratorRuntime.mark(P),I=regeneratorRuntime.mark(T),C=regeneratorRuntime.mark(E),L=regeneratorRuntime.mark(A),B=regeneratorRuntime.mark(H);function P(){var e,t,n;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(w.select)(h());case 2:return e=o.sent,o.next=5,Object(w.select)(g());case 5:return t=o.sent,o.prev=6,o.next=9,Object(w.call)(D,e,t);case 9:return n=o.sent,o.next=12,Object(w.put)(N(n));case 12:o.next=18;break;case 14:return o.prev=14,o.t0=o.catch(6),o.next=18,Object(w.put)((s=o.t0,{type:b.f,errorResponse:s}));case 18:case"end":return o.stop()}var s},R,this,[[6,14]])}function T(){var e,t,n;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(w.select)(h());case 2:return e=o.sent,o.next=5,Object(w.select)(y());case 5:return t=o.sent,o.prev=6,o.next=9,Object(w.call)(_,e,t);case 9:return n=o.sent,o.next=12,Object(w.put)(S(n));case 12:return o.next=14,Object(w.put)(k());case 14:o.next=20;break;case 16:return o.prev=16,o.t0=o.catch(6),o.next=20,Object(w.put)((s=o.t0,{type:b.c,errorResponse:s}));case 20:case"end":return o.stop()}var s},I,this,[[6,16]])}function E(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.takeLatest)(b.e,P);case 2:case"end":return e.stop()}},C,this)}function A(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.takeLeading)(b.b,T);case 2:case"end":return e.stop()}},L,this)}function H(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.all)([E(),A()]);case 2:case"end":return e.stop()}},B,this)}var J,Y=n("abf0602807d6660b903b"),q=n("51211e9c1f6999c9c028"),z=n("49837adb44020fc33e49"),F=n.n(z),$=n("c79bff71b4b446824c56"),G=n.n($),M=n("5c500cb72abf1a5496ad"),K=n.n(M),Q=n("344bb4e1e4c35d33bdc4"),U=n.n(Q),V=n("4b35067fbf1d2f545b81"),W=n.n(V),X=n("ae7a56055b4f6f5a1f0e"),Z=n.n(X);function ee(e){return(ee="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function te(e,t,n,o){J||(J="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={children:void 0}),t&&s)for(var i in s)void 0===t[i]&&(t[i]=s[i]);else t||(t=s||{});if(1===r)t.children=o;else if(r>1){for(var a=new Array(r),c=0;c<r;c++)a[c]=arguments[c+3];t.children=a}return{$$typeof:J,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function ne(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function oe(e,t){return!t||"object"!==ee(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function se(e){return(se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function re(e,t){return(re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"SubmissionList",function(){return he});var ie=te("i",{className:"icon ion-md-apps"}),ae=te("i",{className:"icon ion-md-create"}),ce=te("i",{className:"icon ion-md-trash"}),ue=te(c.Link,{className:"nav-link list-start",to:"/form"},void 0,te("p",{},void 0,"You have no submissions yet."),te("i",{className:"icon ion-ios-add-circle-outline"}),te("p",{},void 0,"Start a new submission")),le=te("div",{className:"row no-gutters"},void 0,te("div",{className:"col-md-10 pl-3"},void 0,te("div",{className:"row no-gutters"},void 0,te("div",{className:"col-md-9 align-self-center"},void 0,te("h6",{},void 0,"Title")),te("div",{className:"col-md-3 align-self-center"},void 0,te("h6",{},void 0,"Status")))),te("div",{className:"col-md-2"})),de=te("div",{className:"col-1 mx-auto"},void 0,te("i",{className:"icon ion-md-checkmark-circle-outline align-bottom"})),be=te("div",{className:"col-8"},void 0,te("h4",{},void 0,"Your data was submitted !"),te("p",{},void 0,"Congratulations, you have started a data submission. You will receive a confirmation email from the GFBio Helpdesk Team. Please reply to this email if you have questions.")),me=te(K.a.Header,{closeButton:!0},void 0,te(K.a.Title,{className:"pl-4"},void 0,"Delete Submission ?")),fe=te(K.a.Body,{},void 0,te(U.a,{},void 0,te(Z.a,{className:"show-grid text-center"},void 0,te(W.a,{xs:12,md:12},void 0,"Do you really want to delete this submission ?")))),ve=te("i",{className:"icon ion-md-close"}),pe=te("i",{className:"icon ion-md-trash"}),he=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),oe(this,se(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&re(e,t)}(t,s.a.Component),n=t,(o=[{key:"componentDidMount",value:function(){this.props.fetchSubmissions()}},{key:"render",value:function(){var e=this,t=this.props.submissions.map(function(t,n){return t.status!=x.d?te("li",{className:"list-group-item"},n,te("div",{className:"row wrapping-row no-gutters"},void 0,te("div",{className:"col-md-10"},void 0,te(c.Link,{className:"row no-gutters",to:"/form/"+t.broker_submission_id},void 0,te("div",{className:"col-md-9 col-sm-12 align-self-center"},void 0,ie,te("span",{},void 0,t.data.requirements.title)),te("div",{className:"col-md-3 col-sm-12 align-self-center status"},void 0,te("span",{className:""},void 0,t.status)))),te("div",{className:"col-md-2 col-sm-12 align-self-center actions"},void 0,te(c.Link,{className:"action h-100 d-inline-block pr-4",to:"/form/"+t.broker_submission_id},void 0,ae," Edit"),te("a",{className:"action h-100 d-inline-block",href:"",onClick:function(n){n.preventDefault(),e.props.showDeleteSubmissionDialog(t.broker_submission_id)}},void 0,ce,"Delete")))):null});t=t.filter(function(e){return null!==e});var n=null,o=te("div",{className:"list-start-wrapper d-flex"},void 0,te("div",{className:"container my-auto"},void 0,te("div",{className:"row no-gutters text-center"},void 0,te("div",{className:"col-md-10 pl-3 align-middle"},void 0,ue))));return t.length>0&&(o=null,n=le),te("div",{className:"submission-list-wrapper"},void 0,te(F.a,{in:this.props.showSubmitSuccess},void 0,te("div",{className:"col-8 mx-auto success-message"},void 0,te("div",{className:"row"},void 0,de,be,te("div",{className:"col-2"},void 0,te(G.a,{variant:"secondary",className:"btn-sm btn-block btn-green-inverted",onClick:this.props.closeSaveSuccess},void 0,"Close"))))),te(K.a,{show:this.props.deleteSubmissionDialog,onHide:this.props.closeDeleteSubmissionDialog,backdrop:!0,centered:!0},void 0,me,fe,te(K.a.Footer,{},void 0,te(U.a,{},void 0,te(Z.a,{className:"show-grid"},void 0,te(W.a,{xs:12,md:6},void 0,te(G.a,{variant:"secondary",className:"btn-block green",onClick:this.props.closeDeleteSubmissionDialog},void 0,ve,"Cancel")),te(W.a,{xs:12,md:6,className:"text-right"},void 0,te(G.a,{variant:"secondary",className:"btn-block red",onClick:this.props.deleteSubmission},void 0,pe,"Delete")))))),te("div",{className:"container"},void 0,n),te("div",{className:"container"},void 0,o,te("ul",{className:"list-group"},void 0,t)))}}])&&ne(n.prototype,o),r&&ne(n,r),t}(),ge=Object(i.b)({submissions:Object(i.a)(p,function(e){return e.get("submissions")}),showSubmitSuccess:Object(Y.v)(),deleteSubmissionDialog:Object(i.a)(p,function(e){return e.get("deleteSubmissionDialog")})});var ye=Object(r.connect)(ge,function(e){return{fetchSubmissions:function(){return e(k())},closeSaveSuccess:function(){return e(Object(q.k)())},showDeleteSubmissionDialog:function(t){return e(function(e){return{type:b.h,brokerSubmissionId:e}}(t))},closeDeleteSubmissionDialog:function(){return e({type:b.a})},deleteSubmission:function(t){return e({type:b.b})}}}),we=Object(l.a)({key:"submissionList",reducer:v}),ke=Object(u.a)({key:"submissionList",saga:H});t.default=Object(a.compose)(we,ke,ye)(he)}}]);