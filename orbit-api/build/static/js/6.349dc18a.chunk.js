(this["webpackJsonporbit-app"]=this["webpackJsonporbit-app"]||[]).push([[6],{134:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.title;return r.a.createElement("div",{className:"my-1 sm:my-4"},r.a.createElement("h2",{className:"text-gray-800 font-bold text-2xl"},t))}},268:function(e,t,a){"use strict";a.r(t);var n=a(26),r=a.n(n),c=a(43),l=a(7),s=a(0),u=a.n(s),o=a(134),m=a(61),i=a(83),p=a(9);t.default=function(){var e=Object(s.useContext)(i.a),t=Object(s.useContext)(p.a),a=Object(s.useState)(),n=Object(l.a)(a,2),f=n[0],v=n[1],b=Object(s.useState)(),E=Object(l.a)(b,2),d=E[0],x=E[1],h=function(){var t=Object(c.a)(r.a.mark((function t(a){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.authAxios.patch("user-role",{role:a});case 3:n=t.sent,c=n.data,v(c.message),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),x(t.t0.response.data.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(o.a,{title:"Account"}),u.a.createElement(m.a,null,u.a.createElement("p",{className:"font-bold"},"User Role"),u.a.createElement("div",{className:"mt-4"},u.a.createElement("p",null,"Select a role for yourself"),u.a.createElement("div",{className:"mt-2 flex"},u.a.createElement("select",{defaultValue:t.authState.userInfo.role,onChange:function(e){return h(e.target.value)}},u.a.createElement("option",{value:"user"},"User"),u.a.createElement("option",{value:"admin"},"Admin")),f&&u.a.createElement("p",{className:"text-green-700 ml-4"},f),d&&u.a.createElement("p",{className:"text-red-500 ml-4"},d)))))}}}]);
//# sourceMappingURL=6.349dc18a.chunk.js.map