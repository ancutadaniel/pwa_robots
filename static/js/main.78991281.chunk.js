(this["webpackJsonpPWA Robots"]=this["webpackJsonpPWA Robots"]||[]).push([[0],{14:function(e,t,n){e.exports=n(27)},24:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(6),c=n.n(a),i=n(7),s=n(8),l=n(12),u=n(13),h=(n(24),n(1)),d=n(2),f=n(5),b=n(4),g=n(3),p=function(e){var t=e.name,n=e.email,o=e.id;return r.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},m=function(e){var t=e.robots;return console.log("cardList"),r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(p,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})})))},v=function(e){e.searchfield;var t=e.searchChange;return console.log("searchBox"),r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},E=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px",background:"linear-gradient(to right, ".concat(e.color1,", ").concat(e.color2,")")}},e.children)},O=function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(e){var o;return Object(h.a)(this,n),(o=t.call(this,e)).updateCount=function(){o.setState((function(e){return{count:e.count+1}}))},o.state={count:0},o}return Object(d.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return console.log(e,t),this.state.count!==e.count}},{key:"render",value:function(){return r.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"UpdateCount: ",this.state.count)}}]),n}(o.Component),C=function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return console.log("header"),r.a.createElement("div",null,r.a.createElement("h1",{className:"f1"},"RoboFriends"),";",r.a.createElement(O,{color:"red"}))}}]),n}(o.Component),w=(n(25),function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(e){var o;return Object(h.a)(this,n),(o=t.call(this,e)).state={color1:"",color2:""},o.setColor=o.setColor.bind(Object(f.a)(o)),o.setColor1=o.setColor1.bind(Object(f.a)(o)),o}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"setColor",value:function(e){this.setState({color1:e.target.value})}},{key:"setColor1",value:function(e){this.setState({color2:e.target.value})}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,o=e.robots,a=e.isPending,c=o.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return a?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement(C,null),r.a.createElement(v,{searchChange:n}),r.a.createElement("input",{type:"color",name:"color1",onChange:this.setColor,value:"#ffffff"}),r.a.createElement("input",{type:"color",name:"color1",onChange:this.setColor1,value:"#ffffff"}),r.a.createElement(E,{color1:this.state.color1,color2:this.state.color2},r.a.createElement(m,{robots:c})))}}]),n}(o.Component)),y=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(w),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(26);var S={searchField:""},k={isPending:!0,robots:[],error:""},_=Object(l.createLogger)(),N=Object(s.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{isPending:!1,robots:t.payload});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{isPending:!1,errorState:t.payload});default:return e}}}),T=Object(s.c)(N,Object(s.a)(u.a,_));c.a.render(r.a.createElement(i.a,{store:T},r.a.createElement(y,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/pwa_robots",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/pwa_robots","/service-worker.js");R?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):j(e)}))}}()}},[[14,1,2]]]);
//# sourceMappingURL=main.78991281.chunk.js.map