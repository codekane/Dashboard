(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{33:function(t,e,a){},34:function(t,e,a){},44:function(t,e,a){},45:function(t,e,a){},46:function(t,e,a){},47:function(t,e,a){},48:function(t,e,a){"use strict";a.r(e);var c=a(0),d=a.n(c),o=a(8),r=a.n(o),i=a(4),n=a(15),s=a(13),b=a(5),l=a(2),j=a(14),u=a(24),O=a(25),p={activeBoard:90210,version:.21,boards:{90210:{id:90210,title:"Personal",cards:{1628674456874:{id:1628674456874,position:{x:335,y:192}},1628674368383:{id:1628674368383,position:{x:182,y:53}},1628674191680:{id:1628674191680,position:{x:33,y:462}},1628674173378:{id:1628674173378,position:{x:34,y:328}},1628674142088:{id:1628674142088,position:{x:35,y:197}}}},90211:{id:90211,title:"Professional",cards:{}},90212:{id:90212,title:"Project",cards:{}}},cards:{1628674456874:{id:1628674456874,board_id:90210,title:"Depend on Me?",color:"#FF315C",body:"Development ongoing... But I use it.",status:{editing:!1,complete:!1,discarded:!1}},1628674368383:{id:1628674368383,board_id:90210,title:"Personal Kanban",color:"#9999FF",body:"Version 0.20",status:{editing:!1,complete:!1,discarded:!1}},1628674191680:{id:1628674191680,board_id:90210,title:"Edit Me! Delete Me!",color:"#d1ffee",body:"Right Click on the Card",status:{editing:!0,complete:!1,discarded:!1}},1628674173378:{id:1628674173378,board_id:90210,title:"Create Me!",color:"#9999FF",body:"Right click on the board to begin",status:{editing:!1,complete:!1,discarded:!1}},1628674142088:{id:1628674142088,board_id:90210,title:"Drag Me!",color:"#7dfbff",body:"Figure out what's important",status:{editing:!1,complete:!1,discarded:!1}}},comments:{}};function y(t,e){switch(e.type){case"UPDATE_CARD_POSITION":return Object(l.a)(Object(l.a)({},t),{},{cards:Object(l.a)(Object(l.a)({},t.cards),{},Object(b.a)({},e.payload.id,Object(l.a)(Object(l.a)({},t.cards[e.payload.id]),{},{position:e.payload.position})))});case"DELETE_CARD":var a=t.cards,c=e.payload.id,d=(a[c],Object(n.a)(a,[c].map(s.a)));return Object(l.a)(Object(l.a)({},t),{},{cards:Object(l.a)({},d)});case"CREATE_CARD":return Object(l.a)(Object(l.a)({},t),{},{cards:Object(l.a)(Object(l.a)({},t.cards),{},Object(b.a)({},e.payload.id,{id:e.payload.id,position:e.payload.position}))});default:return t}}function h(t,e){switch(e.type){case"CREATE_CARD":return{id:e.payload.id,board_id:e.payload.board_id,title:e.payload.title,color:e.payload.color,body:e.payload.body,status:e.payload.status};case"UPDATE_CARD":return Object(l.a)(Object(l.a)({},t),{},{title:e.payload.title,color:e.payload.color,body:e.payload.body,status:Object(l.a)(Object(l.a)({},t.status),{},{editing:!1})});case"UPDATE_CARD_STATUS":if("editing"===e.payload.type)return Object(l.a)(Object(l.a)({},t),{},{status:Object(l.a)(Object(l.a)({},t.status),{},Object(b.a)({},e.payload.type,e.payload.status))});if("complete"===e.payload.type&&!0===e.payload.status)return Object(l.a)(Object(l.a)({},t),{},{completed_on:Date.now(),status:Object(l.a)(Object(l.a)({},t.status),{},Object(b.a)({},e.payload.type,e.payload.status))});if("complete"===e.payload.type&&!1===e.payload.status)return Object(l.a)(Object(l.a)({},t),{},{completed_on:void 0,status:Object(l.a)(Object(l.a)({},t.status),{},Object(b.a)({},e.payload.type,e.payload.status))});if("discarded"===e.payload.type&&!0===e.payload.status)return Object(l.a)(Object(l.a)({},t),{},{discarded_on:Date.now(),status:Object(l.a)(Object(l.a)({},t.status),{},Object(b.a)({},e.payload.type,e.payload.status))});if("discarded"===e.payload.type&&!1===e.payload.status)return Object(l.a)(Object(l.a)({},t),{},{discarded_on:void 0,status:Object(l.a)(Object(l.a)({},t.status),{},Object(b.a)({},e.payload.type,e.payload.status))});default:return t}}function f(){try{var t=localStorage.getItem("state");if(null===t)return p;var e=JSON.parse(t);return void 0===e.version?p:e}catch(a){console.warn(a)}}var x=Object(O.composeWithDevTools)(Object(j.applyMiddleware)(u.a)),g=Object(j.createStore)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f(),e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"UPDATE_CARD_POSITION":return console.log("Updating Card Position"),Object(l.a)(Object(l.a)({},t),{},{boards:Object(l.a)(Object(l.a)({},t.boards),{},Object(b.a)({},e.payload.board_id,y(t.boards[e.payload.board_id],e)))});case"DELETE_CARD":console.log("Deleting Card");var a=t.cards,c=e.payload.id,d=(a[c],Object(n.a)(a,[c].map(s.a)));return Object(l.a)(Object(l.a)({},t),{},{boards:Object(l.a)(Object(l.a)({},t.boards),{},Object(b.a)({},e.payload.board_id,y(t.boards[e.payload.board_id],e))),cards:Object(l.a)({},d)});case"UPDATE_CARD_STATUS":return console.log("Updating Card Status"),Object(l.a)(Object(l.a)({},t),{},{cards:Object(l.a)(Object(l.a)({},t.cards),{},Object(b.a)({},e.payload.id,h(t.cards[e.payload.id],e)))});case"CREATE_CARD":return Object(l.a)(Object(l.a)({},t),{},{boards:Object(l.a)(Object(l.a)({},t.boards),{},Object(b.a)({},e.payload.board_id,y(t.boards[e.payload.board_id],e))),cards:Object(l.a)(Object(l.a)({},t.cards),{},Object(b.a)({},e.payload.id,h(t.cards[e.payload.id],e)))});case"UPDATE_CARD":return Object(l.a)(Object(l.a)({},t),{},{cards:Object(l.a)(Object(l.a)({},t.cards),{},Object(b.a)({},e.payload.id,h(t.cards[e.payload.id],e)))});case"SELECT_BOARD":return Object(l.a)(Object(l.a)({},t),{},{activeBoard:e.payload.board});default:return t}}),x);g.subscribe((function(){return function(t){try{JSON.stringify(t),localStorage.setItem("state",t)}catch(e){console.warn(e)}}(JSON.stringify(g.getState()))}));var v=g,C=(a(33),a.p,a(34),a(20)),m=a.n(C),D=a(1);var _=a(7),A=a(6),E=(a(40),a(9)),T=a(10);a(44);function S(t){var e=t.card,a=Object(i.b)((function(e){return e.cards[t.card.id]})),d=Object(c.useState)(a.title||""),o=Object(_.a)(d,2),r=o[0],n=o[1],s=Object(c.useState)(a.body||""),b=Object(_.a)(s,2),l=b[0],j=b[1],u=Object(c.useState)(a.color||"#9999FF"),O=Object(_.a)(u,2),p=O[0],y=O[1];return Object(D.jsxs)("form",{onSubmit:function(t){t.preventDefault(),v.dispatch({type:"UPDATE_CARD",payload:{id:e.id,title:r,color:p,body:l,editing:!1}})},id:"edit-card",onContextMenu:function(t){t.stopPropagation(),t.preventDefault()},children:[Object(D.jsx)("header",{style:{backgroundColor:p},children:Object(D.jsx)("textarea",{type:"text",name:"title",placeholder:"Title",value:r,onChange:function(t){n(t.target.value)},style:{backgroundColor:p},maxLength:"20"})}),Object(D.jsx)("textarea",{id:"edit-card-body",name:"body",value:l,onChange:function(t){j(t.target.value)},placeholder:"Card Contents",rows:"3"}),Object(D.jsxs)("footer",{children:[Object(D.jsx)("input",{type:"color",value:p,onChange:function(t){y(t.target.value)},name:"color"}),Object(D.jsx)("button",{type:"submit",style:{margin:"0 auto"},children:Object(D.jsx)(E.a,{icon:T.a,style:{color:"green"}})})]})]})}a(45);function R(t){var e=t.card,a=Object(i.b)((function(t){return t.cards[e.id]})),d=Object(c.useState)(e.position||{x:150,y:150}),o=Object(_.a)(d,2),r=o[0],n=o[1],s=e.position||{x:150,y:150},b=Object(c.useState)({x:0,y:0}),l=Object(_.a)(b,2),j=l[0],u=l[1],O=Object(A.c)({id:e.id}).show;var p={gridRow:"".concat(s.y," / ").concat(s.y+80),gridColumn:"".concat(s.x," / ").concat(s.x+120)},y={gridRow:"".concat(s.y," / ").concat(s.y+80),gridColumn:"".concat(s.x," / ").concat(s.x+120),transform:"scale(1.25)"};return Object(c.useEffect)((function(){v.dispatch({type:"UPDATE_CARD_POSITION",payload:{id:e.id,board_id:a.board_id,position:r}})}),[r]),a.status.editing?!0===a.status.editing?Object(D.jsx)(D.Fragment,{children:Object(D.jsx)("div",{className:"Dash-Card Dash-Card-Edit",style:y,children:Object(D.jsx)(S,{card:e})})}):void 0:Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(m.a,{bounds:"parent",onDrag:function(t,e){var a=j.x,c=j.y;u({x:a+e.deltaX,y:c+e.deltaY})},onStop:function(t,e){var a=j.x,c=j.y;n({x:r.x+a,y:r.y+c}),u({x:0,y:0})},position:{x:0,y:0},children:Object(D.jsxs)("div",{className:"Dash-Card",style:p,onContextMenu:function(t){t.stopPropagation(),O(t)},children:[Object(D.jsx)("header",{style:{backgroundColor:a.color},children:Object(D.jsx)("strong",{children:a.title})}),Object(D.jsx)("p",{children:a.body})]})}),Object(D.jsxs)(A.b,{id:e.id,children:[Object(D.jsx)(A.a,{onClick:function(t){v.dispatch({type:"UPDATE_CARD_STATUS",payload:{id:e.id,type:"complete",status:!0}})},children:"Complete"}),Object(D.jsx)(A.a,{onClick:function(t){v.dispatch({type:"UPDATE_CARD_STATUS",payload:{id:e.id,type:"editing",status:!0}})},children:"Edit"}),Object(D.jsx)(A.a,{onClick:function(t){v.dispatch({type:"UPDATE_CARD_STATUS",payload:{id:e.id,type:"discarded",status:!0}})},children:"Discard"})]})]})}a(46);function P(t){return Object(D.jsx)("li",{id:t.board.id,onClick:function(){v.dispatch({type:"SELECT_BOARD",payload:{board:t.board.id}})},children:t.board.title})}function w(t){var e=Object(i.b)((function(t){return t.cards})),a=Object(i.b)((function(t){return t.boards})),c=Object(i.b)((function(t){return t.activeBoard})),d=Object(i.b)((function(t){return t.boards[c].title}));return Object(D.jsxs)("div",{className:"DashBoardNav",children:[Object(D.jsxs)("p",{children:[function(){var t=[];return Object.keys(e).map((function(a){return t.push(e[a])})),t.filter((function(t){return!0===t.status.discarded&&t.board_id===c}))}().length,"     ",Object(D.jsx)(E.a,{icon:T.b,style:{color:"#43F7C8"}})]}),Object(D.jsx)("div",{children:Object(D.jsx)("nav",{role:"navigation",className:"menu",children:Object(D.jsx)("ul",{children:Object(D.jsxs)("li",{children:[d," ",Object(D.jsx)("strong",{children:"Dashboard"}),Object(D.jsx)("ul",{className:"dropdown",children:function(){for(var t=Object.keys(a),e=[],d=0;d<t.length;d++)a[t[d]].id!==c&&e.push(a[t[d]]);return e}().map((function(t){return Object(D.jsx)(P,{board:t})}))})]})})})}),Object(D.jsxs)("p",{children:[function(){var t=[];return Object.keys(e).map((function(a){return t.push(e[a])})),t.filter((function(t){return!0===t.status.complete&&t.board_id===c}))}().length,"     ",Object(D.jsx)(E.a,{icon:T.c,style:{color:"gold"}})]})]})}a(47);function B(t){var e=Object(i.b)((function(e){return e.boards[t.id]})),a=Object(i.b)((function(t){return t.cards})),c=(t.id,Object(A.c)({id:t.id}).show);return Object(D.jsxs)("div",{className:"Board",children:[Object(D.jsx)(w,{}),Object(D.jsx)("div",{className:"Board-Valid",onContextMenu:c,children:function(){var t=[];return Object.keys(e.cards).map((function(a){return t.push(e.cards[a])})),t.filter((function(t){return 1!=a[t.id].status.complete&&1!=a[t.id].status.discarded}))}().map((function(t){return Object(D.jsx)(R,{card:t})}))}),Object(D.jsx)(A.b,{id:t.id,style:{zIndex:0},children:Object(D.jsx)(A.a,{onClick:function(e){var a=e.triggerEvent.target.getBoundingClientRect();e.triggerEvent,v.dispatch({type:"CREATE_CARD",payload:{title:"",color:"#9999FF",body:"",id:(new Date).getTime(),board_id:t.id,status:{editing:!0,complete:!1,discarded:!1},position:{x:Math.round(e.triggerEvent.clientX-a.x),y:Math.round(e.triggerEvent.clientY-a.y)}}})},children:"New Card"})})]})}function k(t){return Object(D.jsx)("li",{id:t.board.id,onClick:function(){v.dispatch({type:"SELECT_BOARD",payload:{board:t.board.id}})},style:t.activeBoard===t.board.id?{backgroundColor:"teal"}:{},children:t.board.title})}function F(t){var e=Object(i.b)((function(t){return t.boards})),a=Object(i.b)((function(t){return t.activeBoard}));return Object(D.jsxs)("div",{id:"BoardSelect",children:[Object(D.jsx)("b",{children:Object(D.jsx)("span",{id:"Brand",style:{marginLeft:"15px"},children:"Dashboard"})}),Object(D.jsxs)("ul",{children:[function(){for(var t=Object.keys(e),a=[],c=0;c<t.length;c++)a.push(e[t[c]]);return a}().map((function(t){return Object(D.jsx)(k,{board:t,activeBoard:a})})),Object(D.jsx)("li",{children:"Add New"})]})]})}var N=function(){var t=Object(i.b)((function(t){return t.activeBoard}));return Object(c.useEffect)((function(){document.title="Dashboard"}),[]),Object(D.jsx)("div",{className:"App",children:Object(D.jsx)("div",{children:Object(D.jsx)("div",{className:"DashBoard",children:Object(D.jsxs)("div",{style:{display:"flex"},children:[Object(D.jsx)(F,{}),Object(D.jsx)(B,{id:t})]})})})})},U=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,49)).then((function(e){var a=e.getCLS,c=e.getFID,d=e.getFCP,o=e.getLCP,r=e.getTTFB;a(t),c(t),d(t),o(t),r(t)}))};r.a.render(Object(D.jsx)(d.a.StrictMode,{children:Object(D.jsx)(i.a,{store:v,children:Object(D.jsx)(N,{})})}),document.getElementById("root")),U()}},[[48,1,2]]]);
//# sourceMappingURL=main.709e79c1.chunk.js.map