"use strict";(self.webpackChunkkhan_tech=self.webpackChunkkhan_tech||[]).push([[119],{3119:function(e,n,r){r.r(n),r.d(n,{default:function(){return f}});var t=r(4165),a=r(5861),s=r(9439),c=r(2791),i=r(5770),u=r(3316),l=r(9434),o=r(2064),A=r(184),p=function(e){var n=e.allPage,r=(0,l.I0)(),s=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n,a){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.getEmployees(a).then((function(e){var n=e.data;r((0,o.a_)(n.data))}));case 2:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}();return(0,A.jsx)(u.Z,{count:n,variant:"outlined",siblingCount:1,boundaryCount:2,onChange:function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n,r){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(n,r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()})},h=r(6747),m=r(1752),d=function(e){var n=e.value;return(0,A.jsx)(h.Z,{sx:{"& > legend":{mt:2}},children:(0,A.jsx)(m.Z,{name:"simple-controlled",defaultValue:n,precision:.1,readOnly:!0})})},f=function(){var e=(0,c.useState)(1),n=(0,s.Z)(e,2),r=n[0],u=(n[1],(0,c.useState)(0)),h=(0,s.Z)(u,2),m=h[0],f=h[1],x=(0,l.v9)((function(e){return e.data.data})),g=(0,l.I0)(),v=(0,c.useRef)([]);return(0,c.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.getEmployees(r).then((function(e){var n=e.data;g((0,o.a_)(n.data)),f(n.pages)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,c.useEffect)((function(){for(var e=v.current=v.current.slice(0,x.length),n=0;n<e.length;n++){var r=x[n].rating/.05;e[n].style.width="".concat(r,"%")}}),[x]),(0,A.jsx)("section",{className:"testimonials",children:(0,A.jsxs)("div",{className:"container",children:[(0,A.jsx)("h2",{className:"header-testimonials",children:"Testimonials"}),0!==x.length?(0,A.jsx)("ul",{className:"list-comment",children:x.map((function(e,n){var r=e.id,t=e.employee,a=e.employees_position,s=e.reviewer,c=e.rating,i=e.review;return(0,A.jsxs)("li",{className:"item-comment",children:[(0,A.jsxs)("div",{className:"comment",children:[(0,A.jsx)("p",{className:"user-name-comment",children:t}),(0,A.jsx)("p",{className:"user-work",children:a}),(0,A.jsx)("p",{className:"user-comment",children:i})]}),(0,A.jsxs)("div",{className:"wrapper-user-rating",children:[(0,A.jsx)("img",{src:"data:image/png;base64,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",alt:"icon user",className:"icon-user"}),(0,A.jsxs)("div",{children:[(0,A.jsx)("p",{className:"user-name-rating",children:s}),(0,A.jsx)(d,{value:c}),(0,A.jsx)("p",{className:"rating_",children:c})]})]})]},r)}))}):(0,A.jsx)("p",{children:"No records"}),(0,A.jsx)("div",{className:"wrapper-pagination",children:(0,A.jsx)(p,{allPage:m,setData:o.a_})})]})})}}}]);
//# sourceMappingURL=119.89604377.chunk.js.map