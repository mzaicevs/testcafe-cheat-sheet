(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{280:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(74),r=t(76),c=t(271),i=t(269),u=t(273),m=t(282),d=t(270),p=t(75),y=t(73),E=function(e){var a=e.cardTitle,t=e.codeSections,o=Object(n.useState)(!1),E=Object(r.a)(o,2),s=E[0],C=E[1],f=Object(n.useState)(!1),v=Object(r.a)(f,2),b=v[0],g=v[1];return l.a.createElement(c.a,null,l.a.createElement(c.a.Header,null,a),t.map(function(e){var a=e.description,t=e.language,n=e.code,o=e.options,r=e.example;return l.a.createElement("div",{key:n.substring(0,16)},l.a.createElement(c.a.Body,null,a?l.a.createElement(c.a.Text,null,a):null,l.a.createElement(y.a,{style:{display:"inline-table"},language:t},n),document.queryCommandSupported("copy")&&l.a.createElement(p.CopyToClipboard,{text:n,onCopy:function(){}},l.a.createElement(i.a,{variant:"info"},"Copy"))),o?l.a.createElement(c.a.Body,null,l.a.createElement(c.a.Title,null,"Options"),l.a.createElement(u.a,{style:{paddingBottom:"10px"}},l.a.createElement(m.a,{type:"radio",name:"options",defaultValue:2},l.a.createElement(d.a,{variant:"outline-secondary",value:1,onClick:function(){return C(!0)}},"Show"),l.a.createElement(d.a,{variant:"outline-secondary",value:2,onClick:function(){return C(!1)}},"Hide"))),s?l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{style:{display:"inline-table"},language:t},o),document.queryCommandSupported("copy")&&l.a.createElement(p.CopyToClipboard,{text:n,onCopy:function(){}},l.a.createElement(i.a,{variant:"info"},"Copy"))):null):null,r?l.a.createElement(c.a.Body,null,l.a.createElement(c.a.Title,null,"Example"),l.a.createElement(u.a,{style:{paddingBottom:"10px"}},l.a.createElement(m.a,{type:"radio",name:"example",defaultValue:2},l.a.createElement(d.a,{variant:"outline-secondary",value:1,onClick:function(){return g(!0)}},"Show"),l.a.createElement(d.a,{variant:"outline-secondary",value:2,onClick:function(){return g(!1)}},"Hide"))),b?l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{style:{display:"inline-table"},language:t},r),document.queryCommandSupported("copy")&&l.a.createElement(p.CopyToClipboard,{text:n,onCopy:function(){}},l.a.createElement(i.a,{variant:"info"},"Copy"))):null):null)}))};a.default=function(){return l.a.createElement(E,{cardTitle:o.d.title,codeSections:o.d.codeSections})}}}]);
//# sourceMappingURL=13.0d0d6102.chunk.js.map