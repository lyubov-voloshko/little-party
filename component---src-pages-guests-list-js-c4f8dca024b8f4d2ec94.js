webpackJsonp([0xabaf838fab38],{197:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var u=a(2),s=n(u),l=a(14),r=n(l);a(370);var o=function(e){var t=e.photoLink,a=e.name,n=e.status,u=e.link;return s.default.createElement("li",{className:"guestCard"},s.default.createElement("div",{style:{"background-image":"url("+t+")"},className:"guestCard__photo"}),s.default.createElement("div",{className:"guestInfo"},s.default.createElement("p",{className:"guestInfo__name"},a),s.default.createElement("span",{className:"guestInfo__status"},n),s.default.createElement(r.default,{to:u,className:"guestInfo__link"},"about")))};t.default=o,e.exports=t.default},203:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var u=a(2),s=n(u),l=a(197),r=n(l),o=a(14);n(o);a(368),a(371);var d=function(e){var t=e.data;return s.default.createElement("div",{className:"content"},s.default.createElement("h1",{className:"pageName"},"List of Guests"),s.default.createElement("ul",{className:"guestsList"},t.allMarkdownRemark.edges.map(function(e){return s.default.createElement(r.default,{key:e.node.id,photoLink:e.node.frontmatter.photo,name:e.node.frontmatter.name,status:e.node.frontmatter.status,link:e.node.fields.slug})})))};t.pageQuery="** extracted graphql fragment **";t.default=d},368:function(e,t){},370:function(e,t){},371:function(e,t){}});
//# sourceMappingURL=component---src-pages-guests-list-js-c4f8dca024b8f4d2ec94.js.map