"use strict";(self.webpackChunkcrypto_tracker=self.webpackChunkcrypto_tracker||[]).push([[922],{6377:function(t,n,e){e.d(n,{X:function(){return i}});var r=e(5671),o=e(3144),a=e(2426),c=e.n(a),i=function(){function t(n){(0,r.Z)(this,t),this.data=void 0,this.data=n}return(0,o.Z)(t,[{key:"getPriceChartOptions",value:function(){var t,n;return{type:"line",series:[{name:"Price",data:null===(t=this.data)||void 0===t?void 0:t.map((function(t){return t.close}))}],options:{theme:{mode:"dark"},chart:{height:300,width:500,toolbar:{show:!1},background:"transparent"},grid:{show:!1},stroke:{curve:"smooth",width:4},yaxis:{show:!1},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1},type:"datetime",categories:null===(n=this.data)||void 0===n?void 0:n.map((function(t){return t.time_close}))},fill:{type:"gradient",gradient:{gradientToColors:["#0be881"],stops:[0,100]}},colors:["#0fbcf9"],tooltip:{y:{formatter:function(t){return"$".concat(t.toFixed(2))}}}}}}},{key:"getCandleStickChartOption",value:function(){return{type:"candlestick",height:350,series:[{name:"CandleChart",data:this.data.map((function(t){return{x:new Date(t.time_close),y:[t.open,t.high,t.low,t.close]}}))}],options:{chart:{type:"candlestick",height:350,toolbar:{show:!1},background:"transparent"},grid:{show:!1},xaxis:{type:"category",axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,formatter:function(t){return c()(t).format("MMM DD HH:mm")}}},yaxis:{tooltip:{enabled:!0},show:!1},tooltip:{enabled:!0,theme:"dark"}}}}}]),t}()},5922:function(t,n,e){e.r(n);var r=e(1413),o=e(885),a=e(2791),c=e(1933),i=e(6478),s=e(3496),u=e(4206),h=e.n(u),f=e(6377),d=e(184);n.default=function(t){var n=t.coinId;console.log("chart coinId: ",n);var e=(0,a.useState)(null),u=(0,o.Z)(e,2),l=u[0],p=u[1],w=(0,c.useQuery)(["ohlcv",n],(function(){return(0,i.XB)(n)}),{refetchInterval:1e4}),v=w.isLoading,k=w.data;return(0,a.useEffect)((function(){k&&(console.log("data777: ",k),p(new f.X(k).getPriceChartOptions()))}),[k]),(0,d.jsx)(d.Fragment,{children:v?(0,d.jsx)(h(),{}):l&&(0,d.jsx)(s.Z,(0,r.Z)({},l))})}},6478:function(t,n,e){e.d(n,{Du:function(){return s},XB:function(){return u},Yr:function(){return c},_B:function(){return i}});var r=e(4165),o=e(5861),a="https://api.coinpaprika.com/v1",c=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/coins"));case 2:return t.next=4,t.sent.json();case 4:return n=t.sent,t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/coins/").concat(n));case 2:return t.next=4,t.sent.json();case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();function s(t){return fetch("".concat(a,"/tickers/").concat(t)).then((function(t){return t.json()}))}function u(t){Math.floor(Date.now()/1e3);return fetch("https://ohlcv-api.nomadcoders.workers.dev/?coinId=".concat(t)).then((function(t){return t.json()}))}}}]);
//# sourceMappingURL=922.a72d0474.chunk.js.map