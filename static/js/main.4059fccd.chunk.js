(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var o,s=n(7),c=n.n(s),i=n(6),r=n(8),a=n(1),l=(n(13),n(14),n(4)),u=n.n(l),b=n(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.Alphabetic=0]="Alphabetic",t[t.Length=1]="Length",t[t.None=2]="None"}(o||(o={}));var d=function(){var t=Object(a.useState)(o.None),e=Object(i.a)(t,2),n=e[0],s=e[1],c=Object(a.useState)(!1),l=Object(i.a)(c,2),d=l[0],j=l[1],g=function(t,e){var n=e.sortedGoods,s=e.isReversed,c=Object(r.a)(t);return n===o.Alphabetic&&c.sort((function(t,e){return t.localeCompare(e)})),n===o.Length&&c.sort((function(t,e){return t.length-e.length})),s&&c.reverse(),c}(h,{sortedGoods:n,isReversed:d}),p=n!==o.None||d,f=function(t){return s(t)};return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:u()("button","is-info",{"is-light":n!==o.Alphabetic}),onClick:function(){return f(o.Alphabetic)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:u()("button","is-success",{"is-light":n!==o.Length}),onClick:function(){return f(o.Length)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:u()("button","is-warning",{"is-light":!d}),onClick:function(){return j(!d)},children:"Reverse"}),p&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(o.None),j(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:g.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};c.a.render(Object(b.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.4059fccd.chunk.js.map