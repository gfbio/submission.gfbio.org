(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1b8cc428c13d7cd645c7":function(e,t,s){"use strict";s.r(t),s.d(t,"SubmissionList",(function(){return ge}));var n=s("8af190b70a6bc55c6f1b"),o=s.n(n),i=(s("8a2d1b95e05b6a321e74"),s("d7dd51e1bf6bfc2c9c3d")),r=s("a28fc3c963a1d4d1a2e5"),a=s("ab4cb61bcb2dc161defb"),c=s("e95a63b25fb92ed15721"),u=s("adc20f99e57c573c589c"),l=s("d95b0cf107403b178365"),d=s("54f683fcda7806277002"),m="app/SubmissionList/FETCH_SUBMISSIONS",p="app/SubmissionForm/SHOW_DELETE_DIALOG",b="app/SubmissionForm/CLOSE_DELETE_DIALOG",f="app/SubmissionForm/DELETE_SUBMISSION",v={};void 0!==window.props&&(v=window.props);var S=Object(d.fromJS)({submissions:[],userId:v.userId||-1,token:v.token||"NO_TOKEN",userName:v.userName||"",deleteBrokerSubmissionId:"",deleteSubmissionDialog:!1});var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return e;case"app/SubmissionList/FETCH_SUBMISSIONS_SUCCESS":return e.set("submissions",t.response.data);case"app/SubmissionList/FETCH_SUBMISSIONS_ERROR":return e;case p:return e.set("deleteSubmissionDialog",!0).set("deleteBrokerSubmissionId",t.brokerSubmissionId);case b:return e.set("deleteSubmissionDialog",!1).set("deleteBrokerSubmissionId","");case f:return e;case"app/SubmissionForm/DELETE_SUBMISSION_SUCCESS":case"app/SubmissionForm/DELETE_SUBMISSION_ERROR":return e.set("deleteSubmissionDialog",!1).set("deleteBrokerSubmissionId","");default:return e}},g=function(e){return e.get("submissionList",S)},y=function(){return Object(r.a)(g,(function(e){return e.get("token")}))},N=s("d782b72bc5b680c7122c");function w(){return{type:m}}function O(e){return{type:"app/SubmissionList/FETCH_SUBMISSIONS_SUCCESS",response:e}}function k(e){return{type:"app/SubmissionForm/DELETE_SUBMISSION_SUCCESS",response:e}}var E=s("bd183afcc37eabd79225"),_=s.n(E),j=s("0f92590f552ab9dc25d2");function D(e,t){var s={headers:{Authorization:"Token "+e}};return _.a.get("".concat(j.a+j.g),s)}var x=function(e,t){var s={headers:{Authorization:"Token "+e}};return _.a.delete("".concat(j.a+j.g+t,"/"),s)},I=regeneratorRuntime.mark(B),R=regeneratorRuntime.mark(U),L=regeneratorRuntime.mark(F),C=regeneratorRuntime.mark(M),T=regeneratorRuntime.mark(H);function B(){var e,t,s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(N.select)(y());case 2:return e=n.sent,n.next=5,Object(N.select)(Object(r.a)(g,(function(e){return e.get("userId")})));case 5:return t=n.sent,n.prev=6,n.next=9,Object(N.call)(D,e,t);case 9:return s=n.sent,n.next=12,Object(N.put)(O(s));case 12:n.next=18;break;case 14:return n.prev=14,n.t0=n.catch(6),n.next=18,Object(N.put)({type:"app/SubmissionList/FETCH_SUBMISSIONS_ERROR",errorResponse:n.t0});case 18:case"end":return n.stop()}}),I,null,[[6,14]])}function U(){var e,t,s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(N.select)(y());case 2:return e=n.sent,n.next=5,Object(N.select)(Object(r.a)(g,(function(e){return e.get("deleteBrokerSubmissionId")})));case 5:return t=n.sent,n.prev=6,n.next=9,Object(N.call)(x,e,t);case 9:return s=n.sent,n.next=12,Object(N.put)(k(s));case 12:return n.next=14,Object(N.put)(w());case 14:n.next=20;break;case 16:return n.prev=16,n.t0=n.catch(6),n.next=20,Object(N.put)({type:"app/SubmissionForm/DELETE_SUBMISSION_ERROR",errorResponse:n.t0});case 20:case"end":return n.stop()}}),R,null,[[6,16]])}function F(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.takeLatest)(m,B);case 2:case"end":return e.stop()}}),L)}function M(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.takeLeading)(f,U);case 2:case"end":return e.stop()}}),C)}function H(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.all)([F(),M()]);case 2:case"end":return e.stop()}}),T)}var P,A=s("abf0602807d6660b903b"),Y=s("51211e9c1f6999c9c028"),G=s("1071238d53a57e392963"),J=s.n(G),q=s("cbdd038bdcfd33980f7d"),z=s.n(q),$=s("84064cd1cb85c3a87452"),K=s.n($),W=s("026fa72aba871a7fa9f3"),Q=s.n(W),V=s("1f61575e8c12ef7ccb9f"),X=s.n(V),Z=s("b489011d620936174477"),ee=s.n(Z);function te(e){return(te="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function se(e,t,s,n){P||(P="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=n;else if(i>1){for(var r=new Array(i),a=0;a<i;a++)r[a]=arguments[a+3];t.children=r}if(t&&o)for(var c in o)void 0===t[c]&&(t[c]=o[c]);else t||(t=o||{});return{$$typeof:P,type:e,key:void 0===s?null:""+s,ref:null,props:t,_owner:null}}function ne(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function oe(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ie(e,t){return!t||"object"!==te(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function re(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function ae(e){return(ae=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ce(e,t){return(ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ue=se("i",{className:"icon ion-md-apps"}),le=se("i",{className:"icon ion-md-create"}),de=se("i",{className:"icon ion-md-trash"}),me=se(c.Link,{className:"nav-link list-start",to:"/form"},void 0,se("p",{},void 0,"You have no submissions yet."),se("i",{className:"icon ion-ios-add-circle-outline"}),se("p",{},void 0,"Start a new submission")),pe=se("div",{className:"row no-gutters"},void 0,se("div",{className:"col-md-10 pl-3"},void 0,se("div",{className:"row no-gutters"},void 0,se("div",{className:"col-md-8 align-self-center"},void 0,se("h6",{},void 0,"Title")),se("div",{className:"col-md-2 align-self-center"},void 0,se("h6",{},void 0,"Status")),se("div",{className:"col-md-2 align-self-center"},void 0,se("h6",{},void 0,"Ticket")))),se("div",{className:"col-md-2"})),be=se("i",{className:"icon ion-md-checkmark-circle-outline"}),fe=se(K.a.Header,{closeButton:!0},void 0,se(K.a.Title,{className:"pl-4"},void 0,"Delete Submission ?")),ve=se(K.a.Body,{},void 0,se(Q.a,{},void 0,se(ee.a,{className:"show-grid text-center"},void 0,se(X.a,{xs:12,md:12},void 0,"Do you really want to delete this submission ?")))),Se=se("i",{className:"icon ion-md-close"}),he=se("i",{className:"icon ion-md-trash"}),ge=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ce(e,t)}(r,e);var t,s,n,o,i=(t=r,function(){var e,s=ae(t);if(re()){var n=ae(this).constructor;e=Reflect.construct(s,arguments,n)}else e=s.apply(this,arguments);return ie(this,e)});function r(){return ne(this,r),i.apply(this,arguments)}return s=r,(n=[{key:"componentDidMount",value:function(){this.props.fetchSubmissions()}},{key:"render",value:function(){var e=this;console.log("--------------render SubmissionList"),console.log(this.props),console.log("###############################");var t="",s="";this.props.showSubmitSuccess?(t="Your data was submitted !",s="Congratulations, you have started a data submission. You will receive a confirmation email from the GFBio Helpdesk Team. Please reply to this email if you have questions."):this.props.showUpdateSuccess&&(t="Your submission was updated !",s="The Update of your data was successful.");var n=this.props.submissions.map((function(t,s){return t.status!=j.f?se("li",{className:"list-group-item"},s,se("div",{className:"row wrapping-row no-gutters"},void 0,se("div",{className:"col-md-10"},void 0,se(c.Link,{className:"row no-gutters",to:"/form/"+t.broker_submission_id},void 0,se("div",{className:"col-md-8 col-sm-12 align-self-center"},void 0,ue,se("span",{},void 0,t.data.requirements.title)),se("div",{className:"col-md-2 col-sm-12 align-self-center status"},void 0,se("span",{className:""},void 0,t.status)),se("div",{className:"col-md-2 col-sm-12 align-self-center"},void 0,se("span",{className:"issue"},void 0,t.issue)))),se("div",{className:"col-md-2 col-sm-12 align-self-center actions"},void 0,se(c.Link,{className:"action h-100 d-inline-block pr-4",to:"/form/"+t.broker_submission_id},void 0,le," Edit"),se("a",{className:"action h-100 d-inline-block",href:"",onClick:function(s){s.preventDefault(),e.props.showDeleteSubmissionDialog(t.broker_submission_id)}},void 0,de,"Delete")))):null}));n=n.filter((function(e){return null!==e}));var o=null,i=se("div",{className:"list-start-wrapper d-flex"},void 0,se("div",{className:"container my-auto"},void 0,se("div",{className:"row no-gutters text-center"},void 0,se("div",{className:"col-md-10 pl-3 align-middle"},void 0,me))));return n.length>0&&(i=null,o=pe),se("div",{className:"submission-list-wrapper"},void 0,se(J.a,{in:this.props.showSubmitSuccess||this.props.showUpdateSuccess},void 0,se("div",{className:"col-8 mx-auto success-message"},void 0,se("div",{className:"row"},void 0,se("div",{className:"col-1 mx-auto"},void 0,be),se("div",{className:"col-8"},void 0,se("h4",{},void 0,t),se("p",{},void 0,s)),se("div",{className:"col-2"},void 0,se(z.a,{variant:"secondary",className:"btn-sm btn-block btn-green-inverted",onClick:this.props.closeSaveSuccess},void 0,"Close"))))),se(K.a,{show:this.props.deleteSubmissionDialog,onHide:this.props.closeDeleteSubmissionDialog,backdrop:!0,centered:!0},void 0,fe,ve,se(K.a.Footer,{},void 0,se(Q.a,{},void 0,se(ee.a,{className:"show-grid"},void 0,se(X.a,{xs:12,md:6},void 0,se(z.a,{variant:"secondary",className:"btn-block green",onClick:this.props.closeDeleteSubmissionDialog},void 0,Se,"Cancel")),se(X.a,{xs:12,md:6,className:"text-right"},void 0,se(z.a,{variant:"secondary",className:"btn-block red",onClick:this.props.deleteSubmission},void 0,he,"Delete")))))),se("div",{className:"container"},void 0,o),se("div",{className:"container"},void 0,i,se("ul",{className:"list-group"},void 0,n)))}}])&&oe(s.prototype,n),o&&oe(s,o),r}(o.a.Component),ye=Object(r.b)({submissions:Object(r.a)(g,(function(e){return e.get("submissions")})),showSubmitSuccess:Object(A.w)(),showUpdateSuccess:Object(A.x)(),deleteSubmissionDialog:Object(r.a)(g,(function(e){return e.get("deleteSubmissionDialog")}))});var Ne=Object(i.connect)(ye,(function(e){return{fetchSubmissions:function(){return e(w())},closeSaveSuccess:function(){return e(Object(Y.j)())},showDeleteSubmissionDialog:function(t){return e(function(e){return{type:p,brokerSubmissionId:e}}(t))},closeDeleteSubmissionDialog:function(){return e({type:b})},deleteSubmission:function(t){return e({type:f})}}})),we=Object(l.a)({key:"submissionList",reducer:h}),Oe=Object(u.a)({key:"submissionList",saga:H});t.default=Object(a.compose)(we,Oe,Ne)(ge)}}]);