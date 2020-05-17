(window["webpackJsonpdemo-react"]=window["webpackJsonpdemo-react"]||[]).push([[0],{12:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"b",function(){return c}),n.d(t,"a",function(){return i});var r=n(129),a=r.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"49f0f488-a7d4-45c3-bccf-218f44a4ebab"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},unfollowUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return a.delete("follow/".concat(e),{})},followUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return a.post("follow/".concat(e),{})}},c={setProfile:function(e){return a.get("profile/".concat(e)).then(function(e){return e.data})},setStatus:function(e){return a.get("profile/status/".concat(e)).then(function(e){return e.data})},updateStatus:function(e){return a.put("profile/status",{status:e}).then(function(e){return e})}},i={me:function(){return a.get("auth/me").then(function(e){return e.data})},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n}).then(function(e){return e.data})},logout:function(){return a.delete("auth/login").then(function(e){return e.data})}}},128:function(e,t,n){"use strict";var r=n(8),a=n.n(r),o=n(19),c=n(24),i=n(16),u=n(12);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var l=function(e,t,n,r){return e.map(function(e){return e[n]===t?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{},r):e})};function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}n.d(t,"d",function(){return O}),n.d(t,"c",function(){return v}),n.d(t,"b",function(){return E}),n.d(t,"e",function(){return w});var d={users:[],pagesSize:50,totalUsersCount:0,currentPage:1,isFetching:!0,followingProgress:[]},m=function(e){return{type:"FOLLOW",id:e}},b=function(e){return{type:"UNFOLLOW",id:e}},O=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},g=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},h=function(e,t){return{type:"TOOGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userid:t}},v=function(e,t){return function(n){n(g(!0)),n(O(e)),u.c.getUsers(e,t).then(function(e){n(g(!1)),n({type:"SET_USERS",users:e.items}),n({type:"SET_TOTAL_USER_COUNT",totalUsersCount:e.totalCount})})}},y=function(){var e=Object(o.a)(a.a.mark(function e(t,n,r,o){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(h(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(o(n)),t(h(!1,n));case 6:case"end":return e.stop()}},e)}));return function(t,n,r,a){return e.apply(this,arguments)}}(),E=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:y(n,e,u.c.followUser.bind(u.c),m);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:y(n,e,u.c.unfollowUser.bind(u.c),b);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return p({},e,{users:l(e.users,t.user,"id",{followed:!0})});case"UNFOLLOW":return p({},e,{users:l(e.users,t.user,"id",{followed:!1})});case"SET_USERS":return p({},e,{users:Object(c.a)(t.users)});case"SET_CURRENT_PAGE":return p({},e,{currentPage:t.currentPage});case"SET_TOTAL_USER_COUNT":return p({},e,{totalUsersCount:t.totalUsersCount});case"TOGGLE_IS_FETCHING":return p({},e,{isFetching:t.isFetching});case"TOOGLE_IS_FOLLOWING_PROGRESS":return p({},e,{followingProgress:t.isFetching?[].concat(Object(c.a)(e.followingProgress),[t.userid]):Object(c.a)(e.followingProgress.filter(function(e){return e!=t.userid}))});default:return e}}},133:function(e,t){e.exports="data:image/png;base64,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"},160:function(e,t,n){e.exports=n(288)},243:function(e,t,n){},286:function(e,t,n){},287:function(e,t,n){},288:function(e,t,n){"use strict";n.r(t);var r=n(7),a=n(95),o=n(94),c=n(128),i=n(8),u=n.n(i),s=n(19),l=n(16),f=n(12),p=n(39);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach(function(t){Object(l.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var b="auth-reducer/SET_USER_DATA",O={userId:null,email:null,login:null,isAuth:!1},g=function(e,t,n,r){return{type:b,payload:{userId:e,email:t,login:n,isAuth:r}}},h=function(){return function(e){return f.a.me().then(function(t){if(0===t.resultCode){var n=t.data,r=n.id,a=n.email,o=n.login;e(g(r,a,o,!0))}})}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return m({},e,{},t.payload);default:return e}},y=n(130),E=n(127);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach(function(t){Object(l.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var A={initialized:!1},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app-reducer/INITIALIZED_SUCCESS":return j({},e,{initialized:!0});default:return e}},S=Object(r.c)({dialogPage:a.a,profilePage:o.b,usersPage:c.a,auth:v,app:P,form:E.a}),C=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.d,T=Object(r.e)(S,C(Object(r.a)(y.a)));window.store=T;var D=T;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=n(0),_=n.n(k),I=n(61),N=n.n(I),U=(n(243),n(48)),G=n(49),F=n(51),x=n(50),L=n(52),z=n(66),B=n.n(z),R=n(133),H=n.n(R),X=n(20),M=function(e){return _.a.createElement("header",{className:B.a.header},_.a.createElement("img",{className:B.a.logo,alt:"logo",src:H.a}),_.a.createElement("div",{className:B.a.login},e.isAuth?_.a.createElement("div",null,e.login," ",_.a.createElement("button",{onClick:e.logout},"log out")):_.a.createElement(X.b,{to:"/login"},"Login")))},J=n(15),Q=function(e){function t(){return Object(U.a)(this,t),Object(F.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(G.a)(t,[{key:"render",value:function(){return _.a.createElement(M,Object.assign({},this.props,{logout:this.props.logout}))}}]),t}(_.a.Component),q=Object(J.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{logout:function(){return function(){var e=Object(s.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.logout();case 2:0===e.sent.resultCode&&t(g(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(Q),W=n(29),Z=n.n(W),K=function(){return _.a.createElement("nav",{className:Z.a.navigation},_.a.createElement("div",{className:Z.a.item},_.a.createElement(X.b,{activeClassName:Z.a.active,to:"/profile"},"Profile")),_.a.createElement("div",{className:Z.a.item},_.a.createElement(X.b,{activeClassName:Z.a.active,to:"/dialogs"},"Messages")),_.a.createElement("div",{className:Z.a.item},_.a.createElement(X.b,{activeClassName:Z.a.active,to:"/users"},"Users")))},Y=n(126),V=n(28),$=n(38),ee=n.n($),te=n(33),ne=n(63),re=Object(Y.a)({form:"login"})(function(e){var t=e.handleSubmit,n=e.error;return _.a.createElement("form",{onSubmit:t},Object(te.a)("email","Email",te.b,[ne.b]),Object(te.a)("password","Password",te.b,[ne.b]),Object(te.a)("rememberMe",null,te.b,[ne.b],{type:"checkbox"},"remember me"),n&&_.a.createElement("div",{className:ee.a.formError},n),_.a.createElement("div",null,_.a.createElement("button",null,"Login")))}),ae=Object(J.b)(function(e){return{isAuth:e.auth.isAuth}},{login:function(e,t,n){return function(){var r=Object(s.a)(u.a.mark(function r(a){var o,c;return u.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,f.a.login(e,t,n);case 2:0===(o=r.sent).resultCode?a(h()):(c=o.messages.length>0?o.messages:"Other error",a(Object(p.a)("login",{_error:c})));case 4:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()}})(function(e){return e.isAuth?_.a.createElement(V.a,{to:"/profile"}):_.a.createElement("div",null,_.a.createElement("h3",null,"Login"),_.a.createElement(re,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))}),oe=(n(286),n(287),n(84)),ce=_.a.lazy(function(){return n.e(4).then(n.bind(null,299))}),ie=_.a.lazy(function(){return n.e(3).then(n.bind(null,297))}),ue=_.a.lazy(function(){return n.e(5).then(n.bind(null,298))}),se=function(e){function t(){return Object(U.a)(this,t),Object(F.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(G.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?_.a.createElement("div",{className:"app-wrapper"},_.a.createElement(_.a.Suspense,{fallback:_.a.createElement(oe.a,null)},_.a.createElement(q,null),_.a.createElement(K,null),_.a.createElement("div",{className:"app-wrapper-content"},_.a.createElement(V.b,{path:"/dialogs",render:function(){return _.a.createElement(ce,null)}}),_.a.createElement(V.b,{path:"/profile/:userId?",render:function(){return _.a.createElement(ie,null)}}),_.a.createElement(V.b,{path:"/users",render:function(){return _.a.createElement(ue,null)}}),_.a.createElement(V.b,{path:"/login",render:function(){return _.a.createElement(ae,null)}})))):_.a.createElement(oe.a,null)}}]),t}(_.a.Component),le=Object(r.d)(Object(J.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){var t=e(h());Promise.all([t]).then(function(){e({type:"app-reducer/INITIALIZED_SUCCESS"})})}}}),V.f)(se);N.a.render(_.a.createElement(X.a,{basename:"/it-kamasutra-network"},_.a.createElement(J.a,{store:D},_.a.createElement(le,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},29:function(e,t,n){e.exports={item:"Sidebar_item__2eO48",active:"Sidebar_active__2kNyQ",navigation:"Sidebar_navigation__3nCdB"}},33:function(e,t,n){"use strict";n.d(t,"c",function(){return l}),n.d(t,"b",function(){return f}),n.d(t,"a",function(){return p});var r=n(85),a=n(0),o=n.n(a),c=n(38),i=n.n(c),u=n(87),s=function(e){var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return o.a.createElement("div",{className:c?i.a.error+" "+i.a.formControl:i.a.formControl},a,o.a.createElement("span",null,r))},l=function(e){var t=e.input,n=(e.meta,e.children,Object(r.a)(e,["input","meta","children"]));return o.a.createElement(s,e,o.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,e.children,Object(r.a)(e,["input","meta","children"]));return o.a.createElement(s,e,o.a.createElement("input",Object.assign({},t,n)))},p=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(u.a,Object.assign({name:e,placeholder:t,component:n,validators:r},a)),c)}},38:function(e,t,n){e.exports={formControl:"style_formControl__3z_v2",error:"style_error__3tdtG",formError:"style_formError__1-4s4"}},63:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a});var r=function(e){return e?void 0:"field is required"},a=function(e){return function(t){return t.length>e?"Max length is ".concat(e," symbols"):void 0}}},66:function(e,t,n){e.exports={header:"Header_header__vgdu5",logo:"Header_logo__1yjz9",login:"Header_login__3NIys"}},84:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(){return a.a.createElement("img",{src:"https://www.gicededu.co.in/img/loader.gif"})}},94:function(e,t,n){"use strict";n.d(t,"a",function(){return p}),n.d(t,"d",function(){return m}),n.d(t,"e",function(){return b}),n.d(t,"c",function(){return O});var r=n(8),a=n.n(r),o=n(19),c=n(16),i=n(24),u=n(12);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach(function(t){Object(c.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var f={postsData:[{id:1,message:"Hi! this is a first post",likesCount:"23"},{id:2,message:"And this is a second one",likesCount:"11"}],newPostText:"",profile:null,status:""},p=function(e){return{type:"ADD_POST",text:e}},d=function(e){return{type:"SET_STATUS",status:e}},m=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.setStatus(e);case 2:r=t.sent,n(d(r));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(d(e));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.setProfile(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":return{postsData:[].concat(Object(i.a)(e.postsData),[{id:3,message:t.text,likesCount:0}]),newPostText:""};case"SET_USER_PROFILE":return l({},e,{profile:t.profile});case"SET_STATUS":return l({},e,{status:t.status});case"DELETED_POST":return l({},e,{postsData:Object(i.a)(e.postsData.filter(function(e){return e.id!=t.postId}))});default:return e}}},95:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var r=n(24),a=n(16);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){Object(a.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var i={dialogsData:[{id:1,name:"Efim"},{id:2,name:"Dima"},{id:3,name:"Timur"}],messagesData:[{id:1,message:"Hi!",come:"in"},{id:2,message:"Hi!, how are you?",come:"out"},{id:3,message:"How is your projects?",come:"out"},{id:4,message:"My projects is yo",come:"in"}],newMessageText:""},u=function(e){return{type:"ADD_MESSAGE",text:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MESSAGE":return c({},e,{messagesData:[].concat(Object(r.a)(e.messagesData),[{id:6,message:t.text}]),newMessageText:""});default:return e}}}},[[160,1,2]]]);
//# sourceMappingURL=main.3828d5d3.chunk.js.map