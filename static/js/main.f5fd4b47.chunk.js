(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{25:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var a=c(7),s=c(1),i=c(0);const n=Object(s.createContext)(),l=e=>{let{children:t}=e;const[c,a]=Object(s.useState)("light");Object(s.useEffect)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)");a(e.matches?"dark":"light"),e.addEventListener("change",(e=>{a(e.matches?"dark":"light")}))}),[]);return Object(i.jsx)(n.Provider,{value:[{themeName:c,toggleTheme:()=>{const e="dark"===c?"light":"dark";localStorage.setItem("themeName",e),a(e)}}],children:t})},r={homepage:"https://javiacuna.github.io/portfolio",title:"JS."},o={name:"Javier Emiliano Acu\xf1a",role:"Software Engineer",description:" I am Javier, a passionate software developer in my final year of Software Engineering. With a strong programming foundation and a focus on problem-solving, I constantly seek to improve my skills and knowledge in the field of software engineering. My commitment to excellence and my ability to work collaboratively have allowed me to make meaningful contributions in agile development teams. I am eager to take on new challenges and continue growing professionally in this exciting industry.",resume:"https://example.com",social:{linkedin:"https://www.linkedin.com/in/javiereacuna/",github:"https://github.com/javiacuna"}},j=[{name:"Project 1",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"Project 2",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"Project 3",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com",livePreview:"https://github.com"}],m=["HTML","CSS","JavaScript","TypeScript","React","Redux","SASS","Material UI","Git","CI/CD","Java","Golang"],h="javi.emiliano@gmail.com";var b=c(13),d=c.n(b),u=c(11),p=c.n(u),O=c(15),x=c.n(O),v=c(14),g=c.n(v);c(25);var f=()=>{const[{themeName:e,toggleTheme:t}]=Object(s.useContext)(n),[c,a]=Object(s.useState)(!1),l=()=>a(!c);return Object(i.jsxs)("nav",{className:"center nav",children:[Object(i.jsxs)("ul",{style:{display:c?"flex":null},className:"nav__list",children:[j.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#projects",onClick:l,className:"link link--nav",children:"Projects"})}):null,m.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#skills",onClick:l,className:"link link--nav",children:"Skills"})}):null,h?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#contact",onClick:l,className:"link link--nav",children:"Contact"})}):null]}),Object(i.jsx)("button",{type:"button",onClick:t,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===e?Object(i.jsx)(p.a,{}):Object(i.jsx)(d.a,{})}),Object(i.jsx)("button",{type:"button",onClick:l,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:c?Object(i.jsx)(g.a,{}):Object(i.jsx)(x.a,{})})]})};c(29);var k=()=>{const{homepage:e,title:t}=r;return Object(i.jsxs)("header",{className:"header center",children:[Object(i.jsx)("h3",{children:e?Object(i.jsx)("a",{href:e,className:"link",children:t}):t}),Object(i.jsx)(f,{})]})},N=c(8),_=c.n(N),S=c(16),w=c.n(S);c(30);var y=()=>{const{name:e,role:t,description:c,resume:a,social:s}=o;return Object(i.jsxs)("div",{className:"about center",children:[e&&Object(i.jsxs)("h1",{children:["Hi, I am ",Object(i.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(i.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(i.jsx)("p",{className:"about__desc",children:c&&c}),Object(i.jsxs)("div",{className:"about__contact center",children:[a&&Object(i.jsx)("a",{href:a,children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(i.jsxs)(i.Fragment,{children:[s.github&&Object(i.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(i.jsx)(_.a,{})}),s.linkedin&&Object(i.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(i.jsx)(w.a,{})})]})]})]})},C=c(6),E=c.n(C),P=c(17),A=c.n(P);c(32);var I=e=>{let{project:t}=e;return Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("h3",{children:t.name}),Object(i.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(i.jsx)("ul",{className:"project__stack",children:t.stack.map((e=>Object(i.jsx)("li",{className:"project__stack-item",children:e},E()())))}),t.sourceCode&&Object(i.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(i.jsx)(_.a,{})}),t.livePreview&&Object(i.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(i.jsx)(A.a,{})})]})};c(33);var J=()=>j.length?Object(i.jsxs)("section",{id:"projects",className:"section projects",children:[Object(i.jsx)("h2",{className:"section__title",children:"Projects"}),Object(i.jsx)("div",{className:"projects__grid",children:j.map((e=>Object(i.jsx)(I,{project:e},E()())))})]}):null;c(34);var T=()=>m.length?Object(i.jsxs)("section",{className:"section skills",id:"skills",children:[Object(i.jsx)("h2",{className:"section__title",children:"Skills"}),Object(i.jsx)("ul",{className:"skills__list",children:m.map((e=>Object(i.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},E()())))})]}):null,q=c(18),R=c.n(q);c(35);var L=()=>{const[e,t]=Object(s.useState)(!1);return Object(s.useEffect)((()=>{const e=()=>window.pageYOffset>500?t(!0):t(!1);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]),e?Object(i.jsx)("div",{className:"scroll-top",children:Object(i.jsx)("a",{href:"#top","aria-label":"top",children:Object(i.jsx)(R.a,{fontSize:"large"})})}):null};c(36);var M=()=>h?Object(i.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(i.jsx)("h2",{className:"section__title",children:"Contact"}),Object(i.jsx)("a",{href:`mailto:${h}`,children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null;c(37);var V=()=>Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("a",{href:"https://github.com/javiacuna",className:"link footer__link",children:"Created By Javier Emiliano Acu\xf1a"})});c(38);var B=()=>{const[{themeName:e}]=Object(s.useContext)(n);return Object(i.jsxs)("div",{id:"top",className:`${e} app`,children:[Object(i.jsx)(k,{}),Object(i.jsxs)("main",{children:[Object(i.jsx)(y,{}),Object(i.jsx)(J,{}),Object(i.jsx)(T,{}),Object(i.jsx)(M,{})]}),Object(i.jsx)(L,{}),Object(i.jsx)(V,{})]})};c(39);Object(a.render)(Object(i.jsx)(l,{children:Object(i.jsx)(B,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.f5fd4b47.chunk.js.map