"use strict";(self.webpackChunkcrypto_tracker=self.webpackChunkcrypto_tracker||[]).push([[819],{9526:function(n,t,e){e.d(t,{O6:function(){return a},SO:function(){return s},WA:function(){return u},X6:function(){return o},a0:function(){return i},lD:function(){return r}});var r,c=e(4894);!function(n){n.planingToBuy="PlaningToBuy",n.completedDeal="CompletedDeal"}(r||(r={}));var o=(0,c.cn)({key:"memosState",default:[]}),i=(0,c.cn)({key:"currentCoinPage",default:null}),u=(0,c.cn)({key:"coinListObjState",default:null}),a=(0,c.nZ)({key:"getOneCoinMemos",get:function(n){var t=n.get,e=t(o),r=t(i);return e.filter((function(n){return n.coinType===r}))}}),s=(0,c.nZ)({key:"getAllCoinMemos",get:function(n){var t=(0,n.get)(o);return Array.from(new Set(null===t||void 0===t?void 0:t.map((function(n){return n.coinType})))).map((function(n){return t.filter((function(t){return t.coinType===n}))}))}})},3819:function(n,t,e){e.r(t),e.d(t,{default:function(){return S}});var r,c,o,i,u,a,s,l=e(885),f=e(2791),p=e(4270),d=e(1933),h=e(3504),x=e(6478),m=e(4206),g=e.n(m),Z=e(4894),v=e(9068),k=e(9526),y=e(5519),j=e(168),C=e(1242),b=C.ZP.div(r||(r=(0,j.Z)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),w=C.ZP.header(c||(c=(0,j.Z)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),P=C.ZP.ul(o||(o=(0,j.Z)([""]))),T=C.ZP.li(i||(i=(0,j.Z)(["\n  background-color: ",";\n  color: ",";\n  border-radius: 15px;\n  margin-bottom: 10px;\n  a {\n    display: flex;\n    align-items: center;\n    padding: 20px;\n    transition: color 0.2s ease-out;\n    color: green;\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.bgColor}),(function(n){return n.theme.accentColor})),D=(C.ZP.h1(u||(u=(0,j.Z)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),C.ZP.span(a||(a=(0,j.Z)(["\n  text-align: center;\n  display: block;\n"])))),A=C.ZP.img(s||(s=(0,j.Z)(["\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n"]))),B=e(6871),O=e(184),S=function(){var n=(0,d.useQuery)("allCoins",x.Yr),t=n.isLoading,e=n.data;console.log("data7879: ",e);var r=(0,Z.FV)(v.C),c=(0,l.Z)(r,2),o=c[0],i=c[1],u=(0,Z.Zl)(k.WA),a=(0,Z.Zl)(k.a0),s=(0,B.s0)();(0,f.useEffect)((function(){e&&(u(e.slice(0,100)),a(null))}),[e]);var m=(0,f.useCallback)((function(){return i((function(n){return!n}))}),[]),j=(0,f.useCallback)((function(n){n.currentTarget.src="".concat("/coinInfo/icons/_con.png")}),[]);return(0,O.jsxs)(b,{children:[(0,O.jsx)(p.q,{children:(0,O.jsx)("title",{children:"\ucf54\uc778"})}),(0,O.jsxs)(w,{children:[(0,O.jsx)("title",{children:"\ucf54\uc778"}),(0,O.jsx)(y.Z,{onChange:m,checked:o,size:80}),(0,O.jsx)("button",{onClick:function(){s("/memos")},children:"\uba54\ubaa8\ub85c \uc774\ub3d9"})]}),t?(0,O.jsx)(D,{children:(0,O.jsx)(g(),{})}):(0,O.jsx)(P,{children:null===e||void 0===e?void 0:e.slice(0,100).map((function(n){return(0,O.jsx)(T,{children:(0,O.jsxs)(h.rU,{to:{pathname:"/".concat(n.id)},state:{name:n.name},children:[(0,O.jsx)(A,{src:"".concat("/coinInfo","/icons/").concat(n.symbol.toLowerCase(),".png"),onError:j}),n.name," \u2192"]})},n.id)}))})]})}},6478:function(n,t,e){e.d(t,{Du:function(){return a},XB:function(){return s},Yr:function(){return i},_B:function(){return u}});var r=e(4165),c=e(5861),o="https://api.coinpaprika.com/v1",i=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/coins"));case 2:return n.next=4,n.sent.json();case 4:return t=n.sent,n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/coins/").concat(t));case 2:return n.next=4,n.sent.json();case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();function a(n){return fetch("".concat(o,"/tickers/").concat(n)).then((function(n){return n.json()}))}function s(n){Math.floor(Date.now()/1e3);return fetch("https://ohlcv-api.nomadcoders.workers.dev/?coinId=".concat(n)).then((function(n){return n.json()}))}}}]);
//# sourceMappingURL=819.0006ee2a.chunk.js.map