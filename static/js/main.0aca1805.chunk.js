(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(t,e,c){"use strict";c.r(e);var n=c(3),i=c.n(n),a=c(5),s=c(1),d=(c(10),c(11),c(4)),b=c.n(d),r=c(0),l=function(t){var e=t.tabs,c=t.selectedTabId,n=t.onTabSelected,i=function(){return e.find((function(t){return t.id===c}))||e[0]};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:e.map((function(t){return Object(r.jsx)("li",{className:b()({"is-active":i().id===t.id}),children:Object(r.jsx)("a",{href:"#".concat(t.id),onClick:function(){!function(t){t.id!==c&&n(t)}(t)},children:t.title})},t.id)}))})}),Object(r.jsx)("div",{className:"block","data-cy":"tab-content",children:i().content})]})},o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=function(){var t=Object(s.useState)(o[0]),e=Object(a.a)(t,2),c=e[0],n=e[1];return Object(r.jsxs)("div",{className:"section",children:[Object(r.jsx)("h1",{className:"title",children:"Selected tab is ".concat(c.title)}),Object(r.jsx)("div",{children:Object(r.jsx)(l,{tabs:o,selectedTabId:c.id,onTabSelected:n})})]})};i.a.render(Object(r.jsx)(j,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.0aca1805.chunk.js.map