(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{67:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),s=n.n(r),a=(n(39),n(14)),i=n.n(a),o=n(3),u=n(5),j=Object(u.a)(),l=n(9),d=n(18),b=n(35),h=n.n(b),O=n(13),p=n.n(O),x=n(20),f=n(21),v=n.n(f),y="FETCH_USER",m=function(e){var t=Object(l.c)();return Object(c.jsx)(h.a,{name:"Emaily",description:"$5 for 5 email credits",amount:500,token:function(e){return t(function(e){return function(){var t=Object(x.a)(p.a.mark((function t(n){var c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.post("/api/stripe",e);case 2:c=t.sent,console.log("coming res from stripe confirmatoin is : ",c.data),n({type:y,payload:c.data});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))},stripeKey:"pk_test_51IDoyXEJGQ0MYv1IUPvCwpA4n6R5TI0dXjsLw23y9TRkZowi0bPVqAVp0DerF9Z6UAtgFHGWAq5EcGlX4vsBBCfl00Z3nh2qYn",children:Object(c.jsx)("button",{className:"btn",style:{cursor:"pointer"},children:"Add Credits"})})},g=Object(l.b)((function(e){return{auth:e.auth.user}}))((function(e){var t=function(){switch(e.auth){case null:return Object(c.jsx)("li",{});case!1:return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/auth/google",children:"Login with Google"})});default:return[Object(c.jsxs)("li",{children:[" ",Object(c.jsx)(m,{})]},"1"),Object(c.jsxs)("li",{style:{margin:"0 10px"},children:[" Credits : ",e.auth.credits," "]},"2"),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/api/logout",children:"logout"})},"3")]}};return Object(c.jsx)("nav",{children:Object(c.jsxs)("div",{className:"nav-wrapper",children:[Object(c.jsx)(d.a,{to:e.auth?"/surveys":"/",className:"left brand-logo",children:"Emaily"}),Object(c.jsx)("ul",{className:"right",children:Object(c.jsx)(t,{})})]})})})),w=function(e){return Object(c.jsxs)("div",{style:{textAlign:"center"},children:[Object(c.jsx)("h2",{children:"Emaily Landing ;)"}),"Collect feedback from users ..."]})},k=function(){return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)(o.b,{history:j,children:[Object(c.jsx)(g,{}),Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{exact:!0,path:"/",component:w}),Object(c.jsx)(o.a,{exact:!0,path:"/surveys",component:function(){return Object(c.jsx)("h4",{children:"Dashboard"})}}),Object(c.jsx)(o.a,{exact:!0,path:"/surveys/new",component:function(){return Object(c.jsx)("h4",{children:"New survey"})}})]})]})})},E=function(e){var t=Object(l.c)();return Object(r.useEffect)((function(){t(function(){var e=Object(x.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/api/current_user");case 2:n=e.sent,t({type:y,payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[t]),Object(c.jsx)("div",{children:Object(c.jsx)(k,{})})},A=n(11),C=n(36),N=n(24),q={user:null},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case y:return Object(N.a)(Object(N.a)({},e),{},{user:t.payload||!1});default:return e}},_=Object(A.c)({auth:G}),D=Object(A.d)(_,{},Object(A.a)(C.a));i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(l.a,{store:D,children:Object(c.jsx)(E,{})})}),document.querySelector("#root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.f67c8136.chunk.js.map