(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{32:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var a=c(22),s=c.n(a),n=c(7),i=c(2),b=(c(30),c(31),c(32),c(15)),j=c.n(b),l=c(3),r=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],d=function(){var e=Object(i.r)().tabId||null,t=r.find((function(t){return t.id===e}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"tabs is-boxed",children:Object(l.jsx)("ul",{children:r.map((function(t){return Object(l.jsx)("li",{"data-cy":"Tab",className:j()({"is-active":e===t.id}),children:Object(l.jsx)(n.b,{to:"tabs/".concat(t.id),children:t.title})},t.id)}))})}),t?Object(l.jsx)("div",{className:"block","data-cy":"TabContent",children:null===t||void 0===t?void 0:t.content}):Object(l.jsx)("div",{className:"block","data-cy":"TabContent",children:"Please select a tab"})]})},o=function(e){var t=e.isActive;return j()("navbar-item",{"is-active":t})},h=function(){var e=Object(i.n)().pathname.includes("tabs");return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(n.c,{to:"/",className:o,children:"Home"}),Object(l.jsx)(n.c,{to:"/tabs",className:o,children:"Tabs"})]})})}),Object(l.jsx)("div",{className:"section",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(i.b,{}),e&&Object(l.jsx)(d,{})]})})]})},x=function(){return Object(l.jsx)(n.a,{children:Object(l.jsx)(i.e,{children:Object(l.jsxs)(i.c,{path:"/",element:Object(l.jsx)(h,{}),children:[Object(l.jsx)(i.c,{path:"home",element:Object(l.jsx)(i.a,{to:"/"})}),Object(l.jsx)(i.c,{index:!0,element:Object(l.jsx)("h1",{className:"title",children:"Home page"})}),Object(l.jsx)(i.c,{path:"tabs",element:Object(l.jsx)("h1",{className:"title",children:"Tabs page"}),children:Object(l.jsx)(i.c,{path:":tabId?",element:Object(l.jsx)(d,{})})}),Object(l.jsx)(i.c,{path:"*",element:Object(l.jsx)("h1",{className:"title",children:"Page not found"})})]})})})};s.a.render(Object(l.jsx)(x,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.b10fbdee.chunk.js.map