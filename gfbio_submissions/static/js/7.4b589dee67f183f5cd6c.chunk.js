(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1b8cc428c13d7cd645c7":function(e,t,s){"use strict";s.r(t);var n=s("8af190b70a6bc55c6f1b"),o=s.n(n),i=(s("8a2d1b95e05b6a321e74"),s("d7dd51e1bf6bfc2c9c3d")),r=s("a28fc3c963a1d4d1a2e5"),a=s("ab4cb61bcb2dc161defb"),c=s("e95a63b25fb92ed15721"),u=s("adc20f99e57c573c589c"),l=s("d95b0cf107403b178365"),d=s("54f683fcda7806277002"),m="app/SubmissionList/FETCH_SUBMISSIONS",b="app/SubmissionList/FETCH_SUBMISSIONS_SUCCESS",p="app/SubmissionList/FETCH_SUBMISSIONS_ERROR",f="app/SubmissionForm/SHOW_DELETE_DIALOG",v="app/SubmissionForm/CLOSE_DELETE_DIALOG",S="app/SubmissionForm/DELETE_SUBMISSION",h="app/SubmissionForm/DELETE_SUBMISSION_SUCCESS",g="app/SubmissionForm/DELETE_SUBMISSION_ERROR",y={};void 0!==window.props&&(y=window.props);var w=Object(d.fromJS)({submissions:[],userId:y.userId||-1,token:y.token||"NO_TOKEN",userName:y.userName||"",deleteBrokerSubmissionId:"",deleteSubmissionDialog:!1});var N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return e;case b:return e.set("submissions",t.response.data);case p:return e;case f:return e.set("deleteSubmissionDialog",!0).set("deleteBrokerSubmissionId",t.brokerSubmissionId);case v:return e.set("deleteSubmissionDialog",!1).set("deleteBrokerSubmissionId","");case S:return e;case h:case g:return e.set("deleteSubmissionDialog",!1).set("deleteBrokerSubmissionId","");default:return e}},O=function(e){return e.get("submissionList",w)},k=function(){return Object(r.a)(O,function(e){return e.get("token")})},j=function(){return Object(r.a)(O,function(e){return e.get("userId")})},x=function(){return Object(r.a)(O,function(e){return e.get("deleteBrokerSubmissionId")})},D=s("97925be2959ab7c6c8ab");function _(){return{type:m}}function E(e){return{type:b,response:e}}function I(e){return{type:h,response:e}}var L=s("bd183afcc37eabd79225"),R=s.n(L),T=s("0f92590f552ab9dc25d2");function C(e,t){var s={headers:{Authorization:"Token "+e}};return R.a.get("".concat(T.a+T.g+T.k+t,"/"),s)}var B=function(e,t){var s={headers:{Authorization:"Token "+e}};return R.a.delete("".concat(T.a+T.g+t,"/"),s)},U=regeneratorRuntime.mark(A),F=regeneratorRuntime.mark(Y),H=regeneratorRuntime.mark(G),M=regeneratorRuntime.mark(J),P=regeneratorRuntime.mark(q);function A(){var e,t,s;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(D.select)(k());case 2:return e=n.sent,n.next=5,Object(D.select)(j());case 5:return t=n.sent,n.prev=6,n.next=9,Object(D.call)(C,e,t);case 9:return s=n.sent,n.next=12,Object(D.put)(E(s));case 12:n.next=18;break;case 14:return n.prev=14,n.t0=n.catch(6),n.next=18,Object(D.put)((o=n.t0,{type:p,errorResponse:o}));case 18:case"end":return n.stop()}var o},U,this,[[6,14]])}function Y(){var e,t,s;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(D.select)(k());case 2:return e=n.sent,n.next=5,Object(D.select)(x());case 5:return t=n.sent,n.prev=6,n.next=9,Object(D.call)(B,e,t);case 9:return s=n.sent,n.next=12,Object(D.put)(I(s));case 12:return n.next=14,Object(D.put)(_());case 14:n.next=20;break;case 16:return n.prev=16,n.t0=n.catch(6),n.next=20,Object(D.put)((o=n.t0,{type:g,errorResponse:o}));case 20:case"end":return n.stop()}var o},F,this,[[6,16]])}function G(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.takeLatest)(m,A);case 2:case"end":return e.stop()}},H,this)}function J(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.takeLeading)(S,Y);case 2:case"end":return e.stop()}},M,this)}function q(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.all)([G(),J()]);case 2:case"end":return e.stop()}},P,this)}var z,$=s("abf0602807d6660b903b"),K=s("51211e9c1f6999c9c028"),W=s("49837adb44020fc33e49"),Q=s.n(W),V=s("c79bff71b4b446824c56"),X=s.n(V),Z=s("5c500cb72abf1a5496ad"),ee=s.n(Z),te=s("344bb4e1e4c35d33bdc4"),se=s.n(te),ne=s("4b35067fbf1d2f545b81"),oe=s.n(ne),ie=s("ae7a56055b4f6f5a1f0e"),re=s.n(ie);function ae(e){return(ae="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ce(e,t,s,n){z||(z="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var r in o)void 0===t[r]&&(t[r]=o[r]);else t||(t=o||{});if(1===i)t.children=n;else if(i>1){for(var a=new Array(i),c=0;c<i;c++)a[c]=arguments[c+3];t.children=a}return{$$typeof:z,type:e,key:void 0===s?null:""+s,ref:null,props:t,_owner:null}}function ue(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function le(e,t){return!t||"object"!==ae(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function de(e){return(de=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function me(e,t){return(me=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}s.d(t,"SubmissionList",function(){return Oe});var be=ce("i",{className:"icon ion-md-apps"}),pe=ce("i",{className:"icon ion-md-create"}),fe=ce("i",{className:"icon ion-md-trash"}),ve=ce(c.Link,{className:"nav-link list-start",to:"/form"},void 0,ce("p",{},void 0,"You have no submissions yet."),ce("i",{className:"icon ion-ios-add-circle-outline"}),ce("p",{},void 0,"Start a new submission")),Se=ce("div",{className:"row no-gutters"},void 0,ce("div",{className:"col-md-10 pl-3"},void 0,ce("div",{className:"row no-gutters"},void 0,ce("div",{className:"col-md-8 align-self-center"},void 0,ce("h6",{},void 0,"Title")),ce("div",{className:"col-md-2 align-self-center"},void 0,ce("h6",{},void 0,"Status")),ce("div",{className:"col-md-2 align-self-center"},void 0,ce("h6",{},void 0,"Ticket")))),ce("div",{className:"col-md-2"})),he=ce("i",{className:"icon ion-md-checkmark-circle-outline"}),ge=ce(ee.a.Header,{closeButton:!0},void 0,ce(ee.a.Title,{className:"pl-4"},void 0,"Delete Submission ?")),ye=ce(ee.a.Body,{},void 0,ce(se.a,{},void 0,ce(re.a,{className:"show-grid text-center"},void 0,ce(oe.a,{xs:12,md:12},void 0,"Do you really want to delete this submission ?")))),we=ce("i",{className:"icon ion-md-close"}),Ne=ce("i",{className:"icon ion-md-trash"}),Oe=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),le(this,de(t).apply(this,arguments))}var s,n,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&me(e,t)}(t,o.a.Component),s=t,(n=[{key:"componentDidMount",value:function(){this.props.fetchSubmissions()}},{key:"render",value:function(){var e=this;console.log("--------------render SubmissionList"),console.log(this.props),console.log("###############################");var t="",s="";this.props.showSubmitSuccess?(t="Your data was submitted !",s="Congratulations, you have started a data submission. You will receive a confirmation email from the GFBio Helpdesk Team. Please reply to this email if you have questions."):this.props.showUpdateSuccess&&(t="Your submission was updated !",s="The Update of your data was successful.");var n=this.props.submissions.map(function(t,s){return t.status!=T.f?ce("li",{className:"list-group-item"},s,ce("div",{className:"row wrapping-row no-gutters"},void 0,ce("div",{className:"col-md-10"},void 0,ce(c.Link,{className:"row no-gutters",to:"/form/"+t.broker_submission_id},void 0,ce("div",{className:"col-md-8 col-sm-12 align-self-center"},void 0,be,ce("span",{},void 0,t.data.requirements.title)),ce("div",{className:"col-md-2 col-sm-12 align-self-center status"},void 0,ce("span",{className:""},void 0,t.status)),ce("div",{className:"col-md-2 col-sm-12 align-self-center"},void 0,ce("span",{className:"issue"},void 0,t.issue)))),ce("div",{className:"col-md-2 col-sm-12 align-self-center actions"},void 0,ce(c.Link,{className:"action h-100 d-inline-block pr-4",to:"/form/"+t.broker_submission_id},void 0,pe," Edit"),ce("a",{className:"action h-100 d-inline-block",href:"",onClick:function(s){s.preventDefault(),e.props.showDeleteSubmissionDialog(t.broker_submission_id)}},void 0,fe,"Delete")))):null});n=n.filter(function(e){return null!==e});var o=null,i=ce("div",{className:"list-start-wrapper d-flex"},void 0,ce("div",{className:"container my-auto"},void 0,ce("div",{className:"row no-gutters text-center"},void 0,ce("div",{className:"col-md-10 pl-3 align-middle"},void 0,ve))));return n.length>0&&(i=null,o=Se),ce("div",{className:"submission-list-wrapper"},void 0,ce(Q.a,{in:this.props.showSubmitSuccess||this.props.showUpdateSuccess},void 0,ce("div",{className:"col-8 mx-auto success-message"},void 0,ce("div",{className:"row"},void 0,ce("div",{className:"col-1 mx-auto"},void 0,he),ce("div",{className:"col-8"},void 0,ce("h4",{},void 0,t),ce("p",{},void 0,s)),ce("div",{className:"col-2"},void 0,ce(X.a,{variant:"secondary",className:"btn-sm btn-block btn-green-inverted",onClick:this.props.closeSaveSuccess},void 0,"Close"))))),ce(ee.a,{show:this.props.deleteSubmissionDialog,onHide:this.props.closeDeleteSubmissionDialog,backdrop:!0,centered:!0},void 0,ge,ye,ce(ee.a.Footer,{},void 0,ce(se.a,{},void 0,ce(re.a,{className:"show-grid"},void 0,ce(oe.a,{xs:12,md:6},void 0,ce(X.a,{variant:"secondary",className:"btn-block green",onClick:this.props.closeDeleteSubmissionDialog},void 0,we,"Cancel")),ce(oe.a,{xs:12,md:6,className:"text-right"},void 0,ce(X.a,{variant:"secondary",className:"btn-block red",onClick:this.props.deleteSubmission},void 0,Ne,"Delete")))))),ce("div",{className:"container"},void 0,o),ce("div",{className:"container"},void 0,i,ce("ul",{className:"list-group"},void 0,n)))}}])&&ue(s.prototype,n),i&&ue(s,i),t}(),ke=Object(r.b)({submissions:Object(r.a)(O,function(e){return e.get("submissions")}),showSubmitSuccess:Object($.v)(),showUpdateSuccess:Object($.w)(),deleteSubmissionDialog:Object(r.a)(O,function(e){return e.get("deleteSubmissionDialog")})});var je=Object(i.connect)(ke,function(e){return{fetchSubmissions:function(){return e(_())},closeSaveSuccess:function(){return e(Object(K.j)())},showDeleteSubmissionDialog:function(t){return e(function(e){return{type:f,brokerSubmissionId:e}}(t))},closeDeleteSubmissionDialog:function(){return e({type:v})},deleteSubmission:function(t){return e({type:S})}}}),xe=Object(l.a)({key:"submissionList",reducer:N}),De=Object(u.a)({key:"submissionList",saga:q});t.default=Object(a.compose)(xe,De,je)(Oe)}}]);