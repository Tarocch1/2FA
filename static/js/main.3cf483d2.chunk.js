(this.webpackJsonp2fa=this.webpackJsonp2fa||[]).push([[0],{226:function(e,t,n){e.exports=n(427)},231:function(e,t,n){},313:function(e,t){},315:function(e,t){},348:function(e,t){},349:function(e,t){},427:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"getKeys",(function(){return D}));var r={};n.r(r),n.d(r,"checkToken",(function(){return H})),n.d(r,"getToken",(function(){return Y})),n.d(r,"refreshToken",(function(){return q}));var o=n(0),c=n.n(o),i=n(5),l=n.n(i),u=n(15),s=n(223),f=(n(231),n(48)),m=n(437),d=n(67),g=n(34),b=n(431),h=n(49),p=n(434),w=n(92),y=n(32),E=n.n(y),j=n(38),v=n(93),k=n(39),O=(n(148),n(19)),x=n(435),S=n(143),I=n.n(S);function T(e){var t=JSON.parse(window.localStorage.getItem("jwt")||"{}").token||"";return I.a.defaults.headers.common.Token=t,I()(e).then((function(e){return e.data})).catch((function(e){return{erred:!0,error:e}}))}var z,R,C,J,L,K,N,U,A,B,F="https://oauth.api.tarocch1.com",G="/login",M="/token",P="/token/check",W="/key",D=function(){return T({method:"get",baseURL:"https://2fa.api.tarocch1.com",url:W})},H=function(){return T({method:"get",baseURL:F,url:P})},Y=function(e){return T({method:"post",baseURL:F,url:M,data:{code:e,redirect:"".concat(window.location.origin).concat(window.location.pathname)}})},q=function(){return T({method:"put",baseURL:F,url:M})},Q=new(z=function e(){Object(v.a)(this,e),Object(j.a)(this,"keys",R,this),Object(j.a)(this,"loading",C,this),Object(j.a)(this,"getKeys",J,this)},R=Object(k.a)(z.prototype,"keys",[O.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),C=Object(k.a)(z.prototype,"loading",[O.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),J=Object(k.a)(z.prototype,"getKeys",[O.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t;return E.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E.a.awrap(a.getKeys());case 2:(t=n.sent).erred?x.a.error("\u83b7\u53d6\u5bc6\u94a5\u5931\u8d25"):e.keys=t,e.loading=!1;case 5:case"end":return n.stop()}}))}}}),z),V=new(L=function e(){Object(v.a)(this,e),Object(j.a)(this,"logged",K,this),Object(j.a)(this,"inited",N,this),Object(j.a)(this,"initAuth",U,this),Object(j.a)(this,"refreshToken",A,this),Object(j.a)(this,"logout",B,this)},K=Object(k.a)(L.prototype,"logged",[O.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),N=Object(k.a)(L.prototype,"inited",[O.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),U=Object(k.a)(L.prototype,"initAuth",[O.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t,n,a;return E.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(!JSON.parse(window.localStorage.getItem("jwt")||"null")){o.next=8;break}return o.next=4,E.a.awrap(r.checkToken());case 4:o.sent.erred?(x.a.error("\u9a8c\u8bc1token\u5931\u8d25"),window.localStorage.removeItem("jwt")):(e.refreshToken(),e.logged=!0),o.next=15;break;case 8:if(t=new URLSearchParams(window.location.search.replace(/^\?/,"")),!(n=t.get("code"))){o.next=15;break}return o.next=13,E.a.awrap(r.getToken(n));case 13:(a=o.sent).erred?x.a.error("\u83b7\u53d6token\u5931\u8d25"):(window.localStorage.setItem("jwt",JSON.stringify(a)),e.logged=!0);case 15:e.inited=!0;case 16:case"end":return o.stop()}}))}}}),A=Object(k.a)(L.prototype,"refreshToken",[O.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return function(){var e;return E.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(JSON.parse(window.localStorage.getItem("jwt")).payload.exp-Math.floor(Date.now()/1e3)<=86400)){t.next=6;break}return t.next=4,E.a.awrap(r.refreshToken());case 4:e=t.sent,window.localStorage.setItem("jwt",JSON.stringify(e));case 6:case"end":return t.stop()}}))}}}),B=Object(k.a)(L.prototype,"logout",[O.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){window.localStorage.removeItem("jwt"),e.logged=!1}}}),L),X=c.a.createContext({keyStore:Q,loginStore:V}),Z=function(){return c.a.useContext(X)},$=n(218),_=n(9);var ee=function(){return c.a.createElement(d.a,{style:{height:"100%"},type:"flex",justify:"center",align:"middle"},c.a.createElement(g.a,null,c.a.createElement($.a,{indicator:c.a.createElement(_.a,{style:{fontSize:24},type:"loading",spin:!0})})))};var te=function(){return c.a.createElement(d.a,{style:{height:"100%"},type:"flex",justify:"center",align:"middle"},c.a.createElement(g.a,null,c.a.createElement(h.a,{icon:"aliyun",href:"".concat(F).concat(G,"?redirect=").concat(window.location.origin).concat(window.location.pathname)},"\u4f7f\u7528\u963f\u91cc\u4e91\u767b\u5f55")))},ne=n(430),ae=n(432),re=n(433),oe=n(65),ce=n(98),ie=n.n(ce);var le=function(){var e=Z().keyStore,t=Object(o.useState)([]),n=Object(f.a)(t,2),a=n[0],r=n[1],i=Object(o.useState)(30),l=Object(f.a)(i,2),u=l[0],s=l[1];Object(o.useEffect)((function(){E.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.awrap(e.getKeys());case 2:b();case 3:case"end":return t.stop()}}))}),[]),Object(o.useEffect)((function(){m();var e=window.setInterval(m,1e3);return function(){window.clearInterval(e)}}),[]);var m=function(){var e=oe.authenticator.timeRemaining();s(e),30===e&&b()},b=function(){var t=[];e.keys.forEach((function(e){t.push({name:e.name,token:oe.authenticator.generate(e.key)})})),r(t)};return Object(w.a)((function(){return c.a.createElement(d.a,{type:"flex",justify:"center"},c.a.createElement(g.a,{style:{maxWidth:1e3,flexGrow:1}},c.a.createElement(ne.a,{bodyStyle:{padding:8},bordered:!1},c.a.createElement(ae.a,{bordered:!0,itemLayout:"horizontal",loading:e.loading,header:c.a.createElement(re.a,{percent:100*(30-u)/30,format:function(){return"".concat(u,"\u79d2")}}),dataSource:a,renderItem:function(e){return c.a.createElement(ae.a.Item,{actions:[c.a.createElement("a",{key:"copy",onClick:function(){return t=e.token,ie()(t),void x.a.success("\u590d\u5236\u6210\u529f");var t}},"\u590d\u5236")]},c.a.createElement(ae.a.Item.Meta,{title:e.name}),c.a.createElement("div",null,e.token))}}))))}))},ue=n(436);var se=function(){var e=Object(o.useRef)(null),t=Object(o.useState)(30),n=Object(f.a)(t,2),a=n[0],r=n[1],i=Object(o.useState)("000000"),l=Object(f.a)(i,2),u=l[0],s=l[1],m=0;Object(o.useEffect)((function(){return function(){window.clearInterval(m)}}),[]);var h=function(){var e=oe.authenticator.timeRemaining();r(e),30===e&&p()},p=function(){s(oe.authenticator.generate(e.current.input.value))};return c.a.createElement(d.a,{type:"flex",justify:"center"},c.a.createElement(g.a,{style:{marginBottom:8},span:24},c.a.createElement(ue.a,{ref:e,placeholder:"key",onPressEnter:function(){window.clearInterval(m),p(),h(),m=window.setInterval(h,1e3)}})),c.a.createElement(g.a,{style:{marginBottom:8},span:24},c.a.createElement(re.a,{percent:100*(30-a)/30,format:function(){return"".concat(a,"\u79d2")}})),c.a.createElement(g.a,null,!!u&&c.a.createElement(b.a.Text,{copyable:!0},u)))};var fe=function(){var e=Z().loginStore,t=Object(o.useState)(!1),n=Object(f.a)(t,2),a=n[0],r=n[1];return Object(o.useEffect)((function(){e.initAuth()}),[]),Object(w.a)((function(){return c.a.createElement(m.a,null,c.a.createElement(m.a.Header,{style:{padding:"0 16px"}},c.a.createElement(d.a,{style:{height:"100%"},type:"flex",justify:"center",align:"middle"},c.a.createElement(g.a,{style:{maxWidth:1e3,flexGrow:1,paddingRight:10}},c.a.createElement(d.a,{type:"flex",justify:"space-between",align:"middle"},c.a.createElement(g.a,null,c.a.createElement(b.a.Title,{style:{color:"#fff",marginBottom:0},level:4},"2FA\u8ba4\u8bc1\u5de5\u5177")),c.a.createElement(g.a,null,e.inited&&e.logged&&c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{style:{marginRight:8},type:"primary",onClick:function(){return r(!0)}},"\u8ba1\u7b97\u5668"),c.a.createElement(h.a,{type:"danger",onClick:e.logout},"\u9000\u51fa"))))))),c.a.createElement(m.a.Content,{style:{height:"calc(100vh - 64px)",padding:16,overflowY:"scroll"}},!e.inited&&c.a.createElement(ee,null),e.inited&&!e.logged&&c.a.createElement(te,null),e.inited&&e.logged&&c.a.createElement(le,null)),c.a.createElement(p.a,{destroyOnClose:!0,maskClosable:!1,title:"\u8ba1\u7b97\u5668",footer:null,visible:a,onCancel:function(){return r(!1)}},c.a.createElement(se,null)))}))};l.a.render(c.a.createElement(u.b,{locale:s.a},c.a.createElement(fe,null)),document.getElementById("root"))}},[[226,1,2]]]);
//# sourceMappingURL=main.3cf483d2.chunk.js.map