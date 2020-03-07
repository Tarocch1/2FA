(this.webpackJsonp2fa=this.webpackJsonp2fa||[]).push([[0],{249:function(e,t,n){e.exports=n(486)},324:function(e,t,n){},341:function(e,t){},343:function(e,t){},377:function(e,t){},378:function(e,t){},486:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"getKeys",(function(){return S}));var r={};n.r(r),n.d(r,"checkToken",(function(){return I})),n.d(r,"refreshToken",(function(){return L}));var c=n(0),o=n.n(c),i=n(4),l=n.n(i),u=n(9),s=n(247),f=n(43),m=n(35),d=n.n(m),g=n(63),h=n(106),p=n(107),v=n(496),y=n(154),w=n.n(y);function E(e){var t=JSON.parse(window.localStorage.getItem("jwt")||"{}").token||"";return w.a.defaults.headers.common.Token=t,w()(e).then((function(e){return e.data})).catch((function(e){return{erred:!0,error:e}}))}var b="https://oauth.api.tarocch1.com",k="/login",j="/token",O="/token/check",x="/key",S=function(){return E({method:"get",baseURL:"https://2fa.api.tarocch1.com",url:x})},I=function(){return E({method:"get",baseURL:b,url:O})},L=function(){return E({method:"put",baseURL:b,url:j})},T=function(){function e(){Object(h.a)(this,e),this.keys=[],this.loading=!0}return Object(p.a)(e,[{key:"getKeys",value:function(){var e=Object(g.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getKeys();case 2:(t=e.sent).erred?v.a.error("\u83b7\u53d6\u5bc6\u94a5\u5931\u8d25"):this.keys=t,this.loading=!1;case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),C=function(){function e(){Object(h.a)(this,e),this.logging=!1,this.logged=!1,this.inited=!1}return Object(p.a)(e,[{key:"setLogging",value:function(e){this.logging=e}},{key:"setLogged",value:function(e){this.logged=e}},{key:"initAuth",value:function(){var e=Object(g.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!JSON.parse(window.localStorage.getItem("jwt")||"null")){e.next=6;break}return e.next=4,r.checkToken();case 4:e.sent.erred?(v.a.error("\u9a8c\u8bc1token\u5931\u8d25"),window.localStorage.removeItem("jwt")):(this.refreshToken(),this.logged=!0);case 6:this.inited=!0;case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"refreshToken",value:function(){var e=Object(g.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(JSON.parse(window.localStorage.getItem("jwt")).payload.exp-Math.floor(Date.now()/1e3)<=86400)){e.next=6;break}return e.next=4,r.refreshToken();case 4:t=e.sent,window.localStorage.setItem("jwt",JSON.stringify(t));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"logout",value:function(){window.localStorage.removeItem("jwt"),this.logged=!1}}]),e}();Object(f.a)(T),Object(f.a)(C);n(324);var R=n(57),J=n(499),N=n(81),A=n(37),B=n(492),K=n(58),W=n(494),U=n(223),z=n(495);var F,G=function(){return o.a.createElement(N.a,{style:{height:"100%"},justify:"center",align:"middle"},o.a.createElement(A.a,null,o.a.createElement(U.a,{indicator:o.a.createElement(z.a,{style:{fontSize:24}})})))},H=n(497),M="https://tarocch1.github.io/oauth-callback/callback.html";var _=function(){var e=Object(f.b)(C);Object(c.useEffect)((function(){return window.addEventListener("message",t),function(){window.removeEventListener("message",t)}}),[]);var t=function(t){var n;M.startsWith(t.origin)&&!t.data.erred&&"TAROCCH1_JWT"===t.data.type&&(window.localStorage.setItem("jwt",JSON.stringify(t.data.jwt)),null===(n=F)||void 0===n||n.close(),e.setLogging(!1),e.setLogged(!0))};return o.a.createElement(N.a,{style:{height:"100%"},justify:"center",align:"middle"},o.a.createElement(A.a,null,o.a.createElement(H.a,{status:"403",title:"403",extra:o.a.createElement(K.a,{type:"primary",loading:e.logging,onClick:function(){e.setLogging(!0),F=window.open("".concat(b).concat(k,"?redirect=").concat(M),"_blank")}},"\u767b\u5f55")})))},D=n(491),P=n(490),Y=n(493),q=n(79),Q=n(112),V=n.n(Q),X=0;var Z=function(){var e=Object(f.b)(T),t=Object(c.useState)([]),n=Object(R.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(30),l=Object(R.a)(i,2),u=l[0],s=l[1];Object(c.useEffect)((function(){return Object(g.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getKeys();case 2:h(),m(),X=window.setInterval(m,1e3);case 5:case"end":return t.stop()}}),t)})))(),function(){window.clearInterval(X)}}),[]);var m=function(){var e=q.authenticator.timeRemaining();s(e),30===e&&h()},h=function(){var t=[];e.keys.forEach((function(e){t.push({name:e.name,token:q.authenticator.generate(e.key)})})),r(t)};return o.a.createElement(N.a,{justify:"center"},o.a.createElement(A.a,{style:{maxWidth:1e3,flexGrow:1}},o.a.createElement(D.a,{bodyStyle:{padding:8},bordered:!1},o.a.createElement(P.a,{bordered:!0,itemLayout:"horizontal",loading:e.loading,header:o.a.createElement(Y.a,{percent:100*(30-u)/30,format:function(){return"".concat(u,"\u79d2")}}),dataSource:a,renderItem:function(e){return o.a.createElement(P.a.Item,{actions:[o.a.createElement("a",{key:"copy",onClick:function(){return t=e.token,V()(t),void v.a.success("\u590d\u5236\u6210\u529f");var t}},"\u590d\u5236")]},o.a.createElement(P.a.Item.Meta,{title:e.name}),o.a.createElement("div",null,e.token))}}))))},$=n(498),ee=0;var te=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(30),n=Object(R.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)("000000"),l=Object(R.a)(i,2),u=l[0],s=l[1];Object(c.useEffect)((function(){return function(){window.clearInterval(ee)}}),[]);var f=function(){var e=q.authenticator.timeRemaining();r(e),30===e&&m()},m=function(){s(q.authenticator.generate(e.current.input.value))};return o.a.createElement(N.a,{justify:"center"},o.a.createElement(A.a,{style:{marginBottom:8},span:24},o.a.createElement($.a,{ref:e,placeholder:"key",onPressEnter:function(){window.clearInterval(ee),e.current.input.value?(m(),f(),ee=window.setInterval(f,1e3)):(r(30),s("000000"))}})),o.a.createElement(A.a,{style:{marginBottom:8},span:24},o.a.createElement(Y.a,{percent:100*(30-a)/30,format:function(){return"".concat(a,"\u79d2")}})),o.a.createElement(A.a,null,o.a.createElement(B.a.Text,{copyable:!0},u)))};var ne=function(){var e=Object(f.b)(C),t=Object(c.useState)(!1),n=Object(R.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){e.initAuth()}),[]),o.a.createElement(J.a,null,o.a.createElement(J.a.Header,{style:{padding:"0 16px"}},o.a.createElement(N.a,{style:{height:"100%"},justify:"center",align:"middle"},o.a.createElement(A.a,{style:{maxWidth:1e3,flexGrow:1,paddingRight:10}},o.a.createElement(N.a,{justify:"space-between",align:"middle"},o.a.createElement(A.a,null,o.a.createElement(B.a.Title,{style:{color:"#fff",marginBottom:0},level:4},"2FA\u8ba4\u8bc1\u5de5\u5177")),o.a.createElement(A.a,null,e.inited&&e.logged&&o.a.createElement(o.a.Fragment,null,o.a.createElement(K.a,{style:{marginRight:8},type:"primary",onClick:function(){return r(!0)}},"\u8ba1\u7b97\u5668"),o.a.createElement(K.a,{type:"danger",onClick:e.logout},"\u9000\u51fa"))))))),o.a.createElement(J.a.Content,{style:{height:"calc(100vh - 64px)",padding:16,overflowY:"scroll"}},!e.inited&&o.a.createElement(G,null),e.inited&&!e.logged&&o.a.createElement(_,null),e.inited&&e.logged&&o.a.createElement(Z,null)),o.a.createElement(W.a,{destroyOnClose:!0,maskClosable:!1,title:"\u8ba1\u7b97\u5668",footer:null,visible:a,onCancel:function(){return r(!1)}},o.a.createElement(te,null)))};l.a.render(o.a.createElement(u.b,{locale:s.a},o.a.createElement(ne,null)),document.getElementById("root"))}},[[249,1,2]]]);
//# sourceMappingURL=main.47eadfb8.chunk.js.map