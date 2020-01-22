(this.webpackJsonp2fa=this.webpackJsonp2fa||[]).push([[0],{222:function(e,t,n){e.exports=n(423)},288:function(e,t,n){},309:function(e,t){},311:function(e,t){},344:function(e,t){},345:function(e,t){},423:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"getKeys",(function(){return O}));var r={};n.r(r),n.d(r,"checkToken",(function(){return x})),n.d(r,"refreshToken",(function(){return S}));var c=n(0),o=n.n(c),i=n(5),l=n.n(i),u=n(15),s=n(219),f=n(38),d=n(31),m=n.n(d),g=n(90),h=n(431),p=n(140),y=n.n(p);function w(e){var t=JSON.parse(window.localStorage.getItem("jwt")||"{}").token||"";return y.a.defaults.headers.common.Token=t,y()(e).then((function(e){return e.data})).catch((function(e){return{erred:!0,error:e}}))}var E="https://oauth.api.tarocch1.com",v="/login",b="/token",j="/token/check",k="/key",O=function(){return w({method:"get",baseURL:"https://2fa.api.tarocch1.com",url:k})},x=function(){return w({method:"get",baseURL:E,url:j})},S=function(){return w({method:"put",baseURL:E,url:b})},I=new function e(){var t=this;Object(g.a)(this,e),this.keys=[],this.loading=!0,this.getKeys=function(){var e;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.a.awrap(a.getKeys());case 2:(e=n.sent).erred?h.a.error("\u83b7\u53d6\u5bc6\u94a5\u5931\u8d25"):t.keys=e,t.loading=!1;case 5:case"end":return n.stop()}}))}},L=new function e(){var t=this;Object(g.a)(this,e),this.logging=!1,this.logged=!1,this.inited=!1,this.setLogging=function(e){t.logging=e},this.setLogged=function(e){t.logged=e},this.initAuth=function(){return m.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(!JSON.parse(window.localStorage.getItem("jwt")||"null")){e.next=6;break}return e.next=4,m.a.awrap(r.checkToken());case 4:e.sent.erred?(h.a.error("\u9a8c\u8bc1token\u5931\u8d25"),window.localStorage.removeItem("jwt")):(t.refreshToken(),t.logged=!0);case 6:t.inited=!0;case 7:case"end":return e.stop()}}))},this.refreshToken=function(){var e;return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(JSON.parse(window.localStorage.getItem("jwt")).payload.exp-Math.floor(Date.now()/1e3)<=86400)){t.next=6;break}return t.next=4,m.a.awrap(r.refreshToken());case 4:e=t.sent,window.localStorage.setItem("jwt",JSON.stringify(e));case 6:case"end":return t.stop()}}))},this.logout=function(){window.localStorage.removeItem("jwt"),t.logged=!1}};Object(f.a)(I),Object(f.a)(L);n(288);var T=n(46),C=n(434),R=n(65),J=n(33),N=n(427),A=n(47),B=n(430),K=n(214),W=n(8);var U,z=function(){return o.a.createElement(R.a,{style:{height:"100%"},type:"flex",justify:"center",align:"middle"},o.a.createElement(J.a,null,o.a.createElement(K.a,{indicator:o.a.createElement(W.a,{style:{fontSize:24},type:"loading",spin:!0})})))},F=n(432),G="https://tarocch1.github.io/oauth-callback/callback.html";var H=function(){var e=Object(f.b)(L);Object(c.useEffect)((function(){return window.addEventListener("message",t),function(){window.removeEventListener("message",t)}}),[]);var t=function(t){var n;G.startsWith(t.origin)&&!t.data.erred&&"TAROCCH1_JWT"===t.data.type&&(window.localStorage.setItem("jwt",JSON.stringify(t.data.jwt)),null===(n=U)||void 0===n||n.close(),e.setLogging(!1),e.setLogged(!0))};return o.a.createElement(R.a,{style:{height:"100%"},type:"flex",justify:"center",align:"middle"},o.a.createElement(J.a,null,o.a.createElement(F.a,{status:"403",title:"403",extra:o.a.createElement(A.a,{type:"primary",loading:e.logging,onClick:function(){e.setLogging(!0),U=window.open("".concat(E).concat(v,"?redirect=").concat(G),"_blank")}},"\u767b\u5f55")})))},M=n(426),_=n(428),D=n(429),P=n(63),Y=n(95),q=n.n(Y);var Q=function(){var e=Object(f.b)(I),t=Object(c.useState)([]),n=Object(T.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(30),l=Object(T.a)(i,2),u=l[0],s=l[1];Object(c.useEffect)((function(){m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.awrap(e.getKeys());case 2:g();case 3:case"end":return t.stop()}}))}),[]),Object(c.useEffect)((function(){d();var e=window.setInterval(d,1e3);return function(){window.clearInterval(e)}}),[]);var d=function(){var e=P.authenticator.timeRemaining();s(e),30===e&&g()},g=function(){var t=[];e.keys.forEach((function(e){t.push({name:e.name,token:P.authenticator.generate(e.key)})})),r(t)};return o.a.createElement(R.a,{type:"flex",justify:"center"},o.a.createElement(J.a,{style:{maxWidth:1e3,flexGrow:1}},o.a.createElement(M.a,{bodyStyle:{padding:8},bordered:!1},o.a.createElement(_.a,{bordered:!0,itemLayout:"horizontal",loading:e.loading,header:o.a.createElement(D.a,{percent:100*(30-u)/30,format:function(){return"".concat(u,"\u79d2")}}),dataSource:a,renderItem:function(e){return o.a.createElement(_.a.Item,{actions:[o.a.createElement("a",{key:"copy",onClick:function(){return t=e.token,q()(t),void h.a.success("\u590d\u5236\u6210\u529f");var t}},"\u590d\u5236")]},o.a.createElement(_.a.Item.Meta,{title:e.name}),o.a.createElement("div",null,e.token))}}))))},V=n(433);var X=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(30),n=Object(T.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)("000000"),l=Object(T.a)(i,2),u=l[0],s=l[1],f=0;Object(c.useEffect)((function(){return function(){window.clearInterval(f)}}),[]);var d=function(){var e=P.authenticator.timeRemaining();r(e),30===e&&m()},m=function(){s(P.authenticator.generate(e.current.input.value))};return o.a.createElement(R.a,{type:"flex",justify:"center"},o.a.createElement(J.a,{style:{marginBottom:8},span:24},o.a.createElement(V.a,{ref:e,placeholder:"key",onPressEnter:function(){window.clearInterval(f),m(),d(),f=window.setInterval(d,1e3)}})),o.a.createElement(J.a,{style:{marginBottom:8},span:24},o.a.createElement(D.a,{percent:100*(30-a)/30,format:function(){return"".concat(a,"\u79d2")}})),o.a.createElement(J.a,null,!!u&&o.a.createElement(N.a.Text,{copyable:!0},u)))};var Z=function(){var e=Object(f.b)(L),t=Object(c.useState)(!1),n=Object(T.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){e.initAuth()}),[]),o.a.createElement(C.a,null,o.a.createElement(C.a.Header,{style:{padding:"0 16px"}},o.a.createElement(R.a,{style:{height:"100%"},type:"flex",justify:"center",align:"middle"},o.a.createElement(J.a,{style:{maxWidth:1e3,flexGrow:1,paddingRight:10}},o.a.createElement(R.a,{type:"flex",justify:"space-between",align:"middle"},o.a.createElement(J.a,null,o.a.createElement(N.a.Title,{style:{color:"#fff",marginBottom:0},level:4},"2FA\u8ba4\u8bc1\u5de5\u5177")),o.a.createElement(J.a,null,e.inited&&e.logged&&o.a.createElement(o.a.Fragment,null,o.a.createElement(A.a,{style:{marginRight:8},type:"primary",onClick:function(){return r(!0)}},"\u8ba1\u7b97\u5668"),o.a.createElement(A.a,{type:"danger",onClick:e.logout},"\u9000\u51fa"))))))),o.a.createElement(C.a.Content,{style:{height:"calc(100vh - 64px)",padding:16,overflowY:"scroll"}},!e.inited&&o.a.createElement(z,null),e.inited&&!e.logged&&o.a.createElement(H,null),e.inited&&e.logged&&o.a.createElement(Q,null)),o.a.createElement(B.a,{destroyOnClose:!0,maskClosable:!1,title:"\u8ba1\u7b97\u5668",footer:null,visible:a,onCancel:function(){return r(!1)}},o.a.createElement(X,null)))};l.a.render(o.a.createElement(u.b,{locale:s.a},o.a.createElement(Z,null)),document.getElementById("root"))}},[[222,1,2]]]);
//# sourceMappingURL=main.23428293.chunk.js.map