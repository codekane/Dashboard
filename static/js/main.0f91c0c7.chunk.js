(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{33:function(t,e,n){},34:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(6),i=n.n(o),r=n(11),d=n(25),s=n(3),l=n(12),b=n(21),j=n(22);function u(){try{var t=localStorage.getItem("state");return null===t?p:JSON.parse(t)}catch(e){console.warn(e)}}var O="This is a test of the BODY system!!@!!!",p={board:{name:"Personal",contents:[{id:90210,color:"teal",position:{x:231,y:248},title:"Dashboard",body:O},{id:90211,color:"magenta",position:{x:346,y:336},title:"Stonkk",body:O},{id:90212,color:"pink",position:{x:15,y:8},title:"Ryan Horricks",body:O},{id:90213,color:"red",position:{x:120,y:8},title:"Job Interview",body:O},{id:90214,color:"purple",position:{x:240,y:8},title:"Dashboard",body:O}]}};function y(t,e){if(t.id!==e.payload.id)return t;switch(e.type){case"UPDATE_CARD_POSITION":return Object.assign({},t,{position:e.payload.position});case"UPDATE_CARD":return Object(s.a)(Object(s.a)({},t),{},{title:e.payload.title,color:e.payload.color,body:e.payload.body,editing:!1});case"EDIT_CARD":return Object(s.a)(Object(s.a)({},t),{},{editing:!0});default:return t}return Object(s.a)(Object(s.a)({},t),{},{position:e.payload.position})}var h=Object(j.composeWithDevTools)(Object(l.applyMiddleware)(b.a)),x=Object(l.createStore)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u(),e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"UPDATE_CARD_POSITION":case"UPDATE_CARD":case"EDIT_CARD":return Object(s.a)(Object(s.a)({},t),{},{board:Object(s.a)(Object(s.a)({},t.board),{},{contents:t.board.contents.map((function(t){return y(t,e)}))})});case"DELETE_CARD":return Object(s.a)(Object(s.a)({},t),{},{board:Object(s.a)(Object(s.a)({},t.board),{},{contents:t.board.contents.filter((function(t){return t.id!==e.payload.id}))})});case"CREATE_CARD":return Object(s.a)(Object(s.a)({},t),{},{board:Object(s.a)(Object(s.a)({},t.board),{},{contents:[].concat(Object(d.a)(t.board.contents),[e.payload])})});default:return t}}),h);x.subscribe((function(){return function(t){try{JSON.stringify(t),localStorage.setItem("state",t)}catch(e){console.warn(e)}}(JSON.stringify(x.getState()))}));var g=x,f=(n(33),n.p,n(34),n(17)),v=n.n(f),D=n(1);function C(t){return Object(D.jsx)("div",{className:"NavBar",children:Object(D.jsx)("b",{children:Object(D.jsx)("span",{id:"Brand",style:{marginLeft:"15px"},children:"Dashboard"})})})}var m=n(4),E=n(5),A=(n(40),n(23)),T=n(24);function S(t){var e=t.card,n=Object(a.useState)(e.title||""),c=Object(m.a)(n,2),o=c[0],i=c[1],r=Object(a.useState)(e.body||""),d=Object(m.a)(r,2),s=d[0],l=d[1],b=Object(a.useState)(e.color),j=Object(m.a)(b,2),u=j[0],O=j[1];return Object(D.jsxs)("form",{onSubmit:function(t){t.preventDefault(),g.dispatch({type:"UPDATE_CARD",payload:{id:e.id,title:o,color:u,body:s,editing:!1}})},id:"edit-card",onContextMenu:function(t){t.stopPropagation(),t.preventDefault()},children:[Object(D.jsx)("header",{style:{backgroundColor:u},children:Object(D.jsx)("textarea",{type:"text",name:"title",placeholder:"Title",value:o,onChange:function(t){i(t.target.value)},style:{backgroundColor:u},maxLength:"20"})}),Object(D.jsx)("textarea",{id:"edit-card-body",name:"body",value:s,onChange:function(t){l(t.target.value)},placeholder:"Card Contents",rows:"3"}),Object(D.jsxs)("footer",{children:[Object(D.jsx)("input",{type:"color",value:u,onChange:function(t){O(t.target.value)},name:"color"}),Object(D.jsx)("button",{type:"submit",style:{margin:"0 auto"},children:Object(D.jsx)(A.a,{icon:T.a,style:{color:"green"}})})]})]})}function R(t){var e=t.card,n=Object(a.useState)(e.position||{x:150,y:150}),c=Object(m.a)(n,2),o=c[0],i=c[1],r=e.position||{x:150,y:150},d=Object(a.useState)({x:0,y:0}),s=Object(m.a)(d,2),l=s[0],b=s[1],j=Object(E.c)({id:e.id}).show;var u={gridRow:"".concat(r.y," / ").concat(r.y+80),gridColumn:"".concat(r.x," / ").concat(r.x+120)},O={gridRow:"".concat(r.y," / ").concat(r.y+80),gridColumn:"".concat(r.x," / ").concat(r.x+120),transform:"scale(1.25)"};return Object(a.useEffect)((function(){g.dispatch({type:"UPDATE_CARD_POSITION",payload:{id:e.id,position:o}})}),[o]),e.editing?1==e.editing?Object(D.jsx)(D.Fragment,{children:Object(D.jsx)("div",{className:"Dash-Card Dash-Card-Edit",style:O,children:Object(D.jsx)(S,{card:e})})}):void 0:Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(v.a,{bounds:"parent",onDrag:function(t,e){var n=l.x,a=l.y;b({x:n+e.deltaX,y:a+e.deltaY})},onStop:function(t,e){var n=l.x,a=l.y;i({x:o.x+n,y:o.y+a}),b({x:0,y:0})},position:{x:0,y:0},children:Object(D.jsxs)("div",{className:"Dash-Card",style:u,onContextMenu:function(t){t.stopPropagation(),j(t)},children:[Object(D.jsx)("header",{style:{backgroundColor:e.color},children:Object(D.jsx)("strong",{children:e.title})}),Object(D.jsx)("p",{children:e.body})]})}),Object(D.jsxs)(E.b,{id:e.id,children:[Object(D.jsx)(E.a,{onClick:function(t){g.dispatch({type:"EDIT_CARD",payload:{id:e.id}})},children:"Edit"}),Object(D.jsx)(E.a,{onClick:function(t){g.dispatch({type:"DELETE_CARD",payload:{id:e.id}})},children:"Delete"})]})]})}function _(t){var e=Object(r.b)((function(t){return t.board.contents})),n=(t.id,Object(E.c)({id:t.id}).show);return Object(D.jsxs)("div",{className:"Board",children:[Object(D.jsx)("div",{className:"Board-Valid",onContextMenu:n,children:e.map((function(t){return Object(D.jsx)(R,{card:t})}))}),Object(D.jsx)(E.b,{id:t.id,style:{zIndex:0},children:Object(D.jsx)(E.a,{onClick:function(t){var e=t.triggerEvent.target.getBoundingClientRect();t.triggerEvent,g.dispatch({type:"CREATE_CARD",payload:{title:"",color:"#9999FF",body:"",id:(new Date).getTime(),editing:!0,position:{x:Math.round(t.triggerEvent.clientX-e.x),y:Math.round(t.triggerEvent.clientY-e.y)}}})},children:"New Card"})})]})}var w=function(){return Object(a.useEffect)((function(){document.title="Dashboard"}),[]),Object(D.jsxs)("div",{className:"App",children:[Object(D.jsx)(C,{}),Object(D.jsx)("div",{children:Object(D.jsx)("div",{className:"DashBoard",children:Object(D.jsx)(_,{title:"personal",id:"test"})})})]})},I=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),o(t),i(t)}))};i.a.render(Object(D.jsx)(c.a.StrictMode,{children:Object(D.jsx)(r.a,{store:g,children:Object(D.jsx)(w,{})})}),document.getElementById("root")),I()}},[[44,1,2]]]);
//# sourceMappingURL=main.0f91c0c7.chunk.js.map