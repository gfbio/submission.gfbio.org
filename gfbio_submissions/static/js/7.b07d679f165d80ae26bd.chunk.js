(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1b8cc428c13d7cd645c7":function(e,t,n){"use strict";n.r(t);var o=n("8af190b70a6bc55c6f1b"),s=n.n(o),i=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),r=n("a28fc3c963a1d4d1a2e5"),a=n("ab4cb61bcb2dc161defb"),c=n("e95a63b25fb92ed15721"),u=n("adc20f99e57c573c589c"),l=n("d95b0cf107403b178365"),d=n("54f683fcda7806277002"),m="app/SubmissionList/FETCH_SUBMISSIONS",b="app/SubmissionList/FETCH_SUBMISSIONS_SUCCESS",f="app/SubmissionList/FETCH_SUBMISSIONS_ERROR",p="app/SubmissionForm/SHOW_DELETE_DIALOG",v="app/SubmissionForm/CLOSE_DELETE_DIALOG",S="app/SubmissionForm/DELETE_SUBMISSION",h="app/SubmissionForm/DELETE_SUBMISSION_SUCCESS",g="app/SubmissionForm/DELETE_SUBMISSION_ERROR",y={};void 0!==window.props&&(y=window.props);var w=Object(d.fromJS)({submissions:[],userId:y.userId||2,token:y.token||"5639b56bd077fb3e12d7e4a0ada244aaa970c2fd",userName:y.userName||"",deleteBrokerSubmissionId:"",deleteSubmissionDialog:!1});var N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return e;case b:return e.set("submissions",t.response.data);case f:return e;case p:return e.set("deleteSubmissionDialog",!0).set("deleteBrokerSubmissionId",t.brokerSubmissionId);case v:return e.set("deleteSubmissionDialog",!1).set("deleteBrokerSubmissionId","");case S:return e;case h:case g:return e.set("deleteSubmissionDialog",!1).set("deleteBrokerSubmissionId","");default:return e}},k=function(e){return e.get("submissionList",w)},O=function(){return Object(r.a)(k,function(e){return e.get("token")})},j=function(){return Object(r.a)(k,function(e){return e.get("userId")})},x=function(){return Object(r.a)(k,function(e){return e.get("deleteBrokerSubmissionId")})},D=n("97925be2959ab7c6c8ab");function _(){return{type:m}}function E(e){return{type:b,response:e}}function I(e){return{type:h,response:e}}var L=n("bd183afcc37eabd79225"),R=n.n(L),C=n("0f92590f552ab9dc25d2");function T(e,t){var n={headers:{Authorization:"Token "+e}};return R.a.get("".concat(C.a+C.e+C.g+t,"/"),n)}var B=function(e,t){var n={headers:{Authorization:"Token "+e}};return R.a.delete("".concat(C.a+C.e+t,"/"),n)},F=regeneratorRuntime.mark(A),U=regeneratorRuntime.mark(G),H=regeneratorRuntime.mark(J),M=regeneratorRuntime.mark(Y),P=regeneratorRuntime.mark(q);function A(){var e,t,n;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(D.select)(O());case 2:return e=o.sent,o.next=5,Object(D.select)(j());case 5:return t=o.sent,o.prev=6,o.next=9,Object(D.call)(T,e,t);case 9:return n=o.sent,o.next=12,Object(D.put)(E(n));case 12:o.next=18;break;case 14:return o.prev=14,o.t0=o.catch(6),o.next=18,Object(D.put)((s=o.t0,{type:f,errorResponse:s}));case 18:case"end":return o.stop()}var s},F,this,[[6,14]])}function G(){var e,t,n;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(D.select)(O());case 2:return e=o.sent,o.next=5,Object(D.select)(x());case 5:return t=o.sent,o.prev=6,o.next=9,Object(D.call)(B,e,t);case 9:return n=o.sent,o.next=12,Object(D.put)(I(n));case 12:return o.next=14,Object(D.put)(_());case 14:o.next=20;break;case 16:return o.prev=16,o.t0=o.catch(6),o.next=20,Object(D.put)((s=o.t0,{type:g,errorResponse:s}));case 20:case"end":return o.stop()}var s},U,this,[[6,16]])}function J(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.takeLatest)(m,A);case 2:case"end":return e.stop()}},H,this)}function Y(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.takeLeading)(S,G);case 2:case"end":return e.stop()}},M,this)}function q(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.all)([J(),Y()]);case 2:case"end":return e.stop()}},P,this)}var z,$=n("abf0602807d6660b903b"),W=n("51211e9c1f6999c9c028"),K=n("49837adb44020fc33e49"),Q=n.n(K),V=n("c79bff71b4b446824c56"),X=n.n(V),Z=n("5c500cb72abf1a5496ad"),ee=n.n(Z),te=n("344bb4e1e4c35d33bdc4"),ne=n.n(te),oe=n("4b35067fbf1d2f545b81"),se=n.n(oe),ie=n("ae7a56055b4f6f5a1f0e"),re=n.n(ie);function ae(e){return(ae="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ce(e,t,n,o){z||(z="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&s)for(var r in s)void 0===t[r]&&(t[r]=s[r]);else t||(t=s||{});if(1===i)t.children=o;else if(i>1){for(var a=new Array(i),c=0;c<i;c++)a[c]=arguments[c+3];t.children=a}return{$$typeof:z,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function ue(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function le(e,t){return!t||"object"!==ae(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function de(e){return(de=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function me(e,t){return(me=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"SubmissionList",function(){return Oe});var be=ce("i",{className:"icon ion-md-apps"}),fe=ce("i",{className:"icon ion-md-create"}),pe=ce("i",{className:"icon ion-md-trash"}),ve=ce(c.Link,{className:"nav-link list-start",to:"/form"},void 0,ce("p",{},void 0,"You have no submissions yet."),ce("i",{className:"icon ion-ios-add-circle-outline"}),ce("p",{},void 0,"Start a new submission")),Se=ce("div",{className:"row no-gutters"},void 0,ce("div",{className:"col-md-10 pl-3"},void 0,ce("div",{className:"row no-gutters"},void 0,ce("div",{className:"col-md-9 align-self-center"},void 0,ce("h6",{},void 0,"Title")),ce("div",{className:"col-md-3 align-self-center"},void 0,ce("h6",{},void 0,"Status")))),ce("div",{className:"col-md-2"})),he=ce("div",{className:"col-1 mx-auto"},void 0,ce("i",{className:"icon ion-md-checkmark-circle-outline align-bottom"})),ge=ce("div",{className:"col-8"},void 0,ce("h4",{},void 0,"Your data was submitted !"),ce("p",{},void 0,"Congratulations, you have started a data submission. You will receive a confirmation email from the GFBio Helpdesk Team. Please reply to this email if you have questions.")),ye=ce(ee.a.Header,{closeButton:!0},void 0,ce(ee.a.Title,{className:"pl-4"},void 0,"Delete Submission ?")),we=ce(ee.a.Body,{},void 0,ce(ne.a,{},void 0,ce(re.a,{className:"show-grid text-center"},void 0,ce(se.a,{xs:12,md:12},void 0,"Do you really want to delete this submission ?")))),Ne=ce("i",{className:"icon ion-md-close"}),ke=ce("i",{className:"icon ion-md-trash"}),Oe=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),le(this,de(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&me(e,t)}(t,s.a.Component),n=t,(o=[{key:"componentDidMount",value:function(){this.props.fetchSubmissions()}},{key:"render",value:function(){var e=this,t=this.props.submissions.map(function(t,n){return t.status!=C.d?ce("li",{className:"list-group-item"},n,ce("div",{className:"row wrapping-row no-gutters"},void 0,ce("div",{className:"col-md-10"},void 0,ce(c.Link,{className:"row no-gutters",to:"/form/"+t.broker_submission_id},void 0,ce("div",{className:"col-md-9 col-sm-12 align-self-center"},void 0,be,ce("span",{},void 0,t.data.requirements.title)),ce("div",{className:"col-md-3 col-sm-12 align-self-center status"},void 0,ce("span",{className:""},void 0,t.status)))),ce("div",{className:"col-md-2 col-sm-12 align-self-center actions"},void 0,ce(c.Link,{className:"action h-100 d-inline-block pr-4",to:"/form/"+t.broker_submission_id},void 0,fe," Edit"),ce("a",{className:"action h-100 d-inline-block",href:"",onClick:function(n){n.preventDefault(),e.props.showDeleteSubmissionDialog(t.broker_submission_id)}},void 0,pe,"Delete")))):null});t=t.filter(function(e){return null!==e});var n=null,o=ce("div",{className:"list-start-wrapper d-flex"},void 0,ce("div",{className:"container my-auto"},void 0,ce("div",{className:"row no-gutters text-center"},void 0,ce("div",{className:"col-md-10 pl-3 align-middle"},void 0,ve))));return t.length>0&&(o=null,n=Se),ce("div",{className:"submission-list-wrapper"},void 0,ce(Q.a,{in:this.props.showSubmitSuccess},void 0,ce("div",{className:"col-8 mx-auto success-message"},void 0,ce("div",{className:"row"},void 0,he,ge,ce("div",{className:"col-2"},void 0,ce(X.a,{variant:"secondary",className:"btn-sm btn-block btn-green-inverted",onClick:this.props.closeSaveSuccess},void 0,"Close"))))),ce(ee.a,{show:this.props.deleteSubmissionDialog,onHide:this.props.closeDeleteSubmissionDialog,backdrop:!0,centered:!0},void 0,ye,we,ce(ee.a.Footer,{},void 0,ce(ne.a,{},void 0,ce(re.a,{className:"show-grid"},void 0,ce(se.a,{xs:12,md:6},void 0,ce(X.a,{variant:"secondary",className:"btn-block green",onClick:this.props.closeDeleteSubmissionDialog},void 0,Ne,"Cancel")),ce(se.a,{xs:12,md:6,className:"text-right"},void 0,ce(X.a,{variant:"secondary",className:"btn-block red",onClick:this.props.deleteSubmission},void 0,ke,"Delete")))))),ce("div",{className:"container"},void 0,n),ce("div",{className:"container"},void 0,o,ce("ul",{className:"list-group"},void 0,t)))}}])&&ue(n.prototype,o),i&&ue(n,i),t}(),je=Object(r.b)({submissions:Object(r.a)(k,function(e){return e.get("submissions")}),showSubmitSuccess:Object($.u)(),deleteSubmissionDialog:Object(r.a)(k,function(e){return e.get("deleteSubmissionDialog")})});var xe=Object(i.connect)(je,function(e){return{fetchSubmissions:function(){return e(_())},closeSaveSuccess:function(){return e(Object(W.k)())},showDeleteSubmissionDialog:function(t){return e(function(e){return{type:p,brokerSubmissionId:e}}(t))},closeDeleteSubmissionDialog:function(){return e({type:v})},deleteSubmission:function(t){return e({type:S})}}}),De=Object(l.a)({key:"submissionList",reducer:N}),_e=Object(u.a)({key:"submissionList",saga:q});t.default=Object(a.compose)(De,_e,xe)(Oe)}}]);