(this["webpackJsonprankplayer-app"]=this["webpackJsonprankplayer-app"]||[]).push([[0],{36:function(n,e,t){},46:function(n,e,t){"use strict";t.r(e);var r,i,a,c,o,d,s,l,j=t(24),b=(t(36),t(13)),h=t(0),p=t(3),x=t(29),u=t(7),g=t(31),m=t(8),O=m.a.nav(r||(r=Object(u.a)(["\n  background: #000;\n  height: 80px;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem calc((100vw - 1000px) / 2);\n  z-index: 10;\n  /* Third Nav */\n  /* justify-content: flex-start; */\n"]))),f=Object(m.a)(b.b)(i||(i=Object(u.a)(["\n  color: #fff;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n  &.active {\n    color: #15cdfc;\n  }\n"]))),v=Object(m.a)(g.a)(a||(a=Object(u.a)(["\n  display: none;\n  color: #fff;\n  @media screen and (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 75%);\n    font-size: 1.8rem;\n    cursor: pointer;\n  }\n"]))),y=m.a.div(c||(c=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: -24px;\n  /* Second Nav */\n  /* margin-right: 24px; */\n  /* Third Nav */\n  /* width: 100vw;\n  white-space: nowrap; */\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),w=(m.a.nav(o||(o=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 24px;\n  /* Third Nav */\n  /* justify-content: flex-end;\n  width: 100vw; */\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),Object(m.a)(b.b)(d||(d=Object(u.a)(["\n  border-radius: 4px;\n  background: #256ce1;\n  padding: 10px 22px;\n  color: #fff;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n  /* Second Nav */\n  margin-left: 24px;\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    background: #fff;\n    color: #010606;\n  }\n"]))),t(1)),k=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(O,{children:[Object(w.jsx)(f,{to:"/",children:Object(w.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/0c/Game.png",alt:"logo"})}),Object(w.jsx)(v,{}),Object(w.jsxs)(y,{children:[Object(w.jsx)(f,{to:"/",children:"Nova Pontua\xe7\xe3o "}),Object(w.jsx)(f,{to:"/Ranking",children:"Top 100 jogadores "})]})]})})},I=t(30),N=m.a.div(s||(s=Object(u.a)(["\n    height: 50vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),F=m.a.div(l||(l=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    place-content: center;\n    align-items: normal;\n    width: 25%;\n    max-width: 700px;\n\n    img {\n        width: 400px;\n        height: 200px;\n    }\n\n    form {\n        margin: 80px;\n        width: 340x;\n        text-align: center;\n    }\n\n    h1 {\n        margin-bottom: 24px;\n    }\n\n    input{\n        background: #232129;\n        border-radius:10px;\n        border: 2px solid #232129;\n        color: #FFF;\n        padding: 16px;\n        width: 100%;\n\n        & + input {\n            margin-top: 8px; \n        }\n    }\n\n    label {\n        font-size: 18px;\n    }\n\n    button {\n        background: #000;\n        height: 56px;\n        border-radius:10px;\n        padding: 0 16px;\n        color: #FFF;\n        font-weight: 500;\n        margin-top: 16px;\n        width: 100%;\n        transition: background-color 0.2s;\n\n        &:hover {\n            background: ",";\n        }\n    }\n"])),Object(I.a)(.2,"#57ade6"));var P,S=function(){var n=Object(x.a)(),e=n.register,t=n.handleSubmit;return Object(w.jsxs)("section",{children:[Object(w.jsx)(k,{}),Object(w.jsx)(N,{children:Object(w.jsx)(F,{children:Object(w.jsxs)("form",{onSubmit:t((function(n){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)};fetch("https://localhost:44312/v1/GameResults",e).then((function(n){return n.json()})).then((function(n){return console.log(n)})),window.alert("Obrigado, sua nota foi enviada com sucesso")})),children:[Object(w.jsx)("h1",{children:"Nova Pontua\xe7\xe3o"}),Object(w.jsxs)("label",{children:["Id do Jogador:",Object(w.jsx)("input",{type:"text",placeholder:"Id do jogador",name:"playerID",ref:e})]}),Object(w.jsxs)("label",{children:["Id do Jogo:",Object(w.jsx)("input",{type:"text",placeholder:"Id do Jogo",name:"gameID",ref:e})]}),Object(w.jsxs)("label",{children:["Pontos:",Object(w.jsx)("input",{type:"text",placeholder:"Pontos",name:"win",ref:e})]}),Object(w.jsx)("button",{type:"submit",children:"Enviar"})]})})})]})},T=t(10),J=m.a.div(P||(P=Object(u.a)(["\n    margin-top: 4rem;\n\n    h1 {\n        text-align: center;\n    }\n\n    table { \n        width: 100%;\n        border-spacing: 0 0.5rem;\n    }\n\n    th {\n        color: var(--text-body);\n        font-weight: 500;\n        padding: 1rem 2rem;\n        text-align: left;\n        line-height: 1.5rem;\n    }\n\n    td { \n        padding: 1rem 2rem;\n        border: 0;\n        background: var(--shape);\n        color: var(--text-body);\n        border-radius: 0.25rem;\n\n        &:first-child {\n            color: var(--text-tittle);\n        }\n    }\n\n"]))),D=t(28),R=t.n(D);var z=function(){var n=Object(h.useState)(),e=Object(T.a)(n,2),t=e[0],r=e[1];return Object(h.useEffect)((function(){fetch("https://localhost:44312/v1/PlayerResults").then((function(n){return n.json()})).then((function(n){return r(n)}))}),[]),Object(w.jsxs)("section",{children:[Object(w.jsx)(k,{}),Object(w.jsxs)(J,{children:[Object(w.jsx)("h1",{children:"Top 100 Players"}),Object(w.jsxs)("table",{children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:" playerId "}),Object(w.jsx)("th",{children:" balance "}),Object(w.jsx)("th",{children:" lastUpdateDate "})]})}),Object(w.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(n){return Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:n.playerID}),Object(w.jsx)("td",{children:n.totalWin}),Object(w.jsx)("td",{children:R()(n.timestamp).format("LLL")})]})}))})]})]})]})},E=function(){return Object(w.jsxs)(p.c,{children:[Object(w.jsx)(p.a,{path:"/",exact:!0,component:S}),Object(w.jsx)(p.a,{path:"/Ranking",exact:!0,component:z})]})};function L(){return Object(w.jsx)(b.a,{children:Object(w.jsx)(E,{})})}Object(j.render)(Object(w.jsx)(L,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.d55ebed3.chunk.js.map