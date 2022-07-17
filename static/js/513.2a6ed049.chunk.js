"use strict";(self.webpackChunkcrypto_tracker=self.webpackChunkcrypto_tracker||[]).push([[513],{9526:function(e,n,i){i.d(n,{O6:function(){return s},SO:function(){return a},X6:function(){return o},a0:function(){return l},lD:function(){return r},v0:function(){return c}});var r,t=i(4894);!function(e){e.planingToBuy="PlaningToBuy",e.completedDeal="CompletedDeal"}(r||(r={}));var o=(0,t.cn)({key:"memosState",default:[]}),l=(0,t.cn)({key:"currentCoinPage",default:null}),c=(0,t.cn)({key:"coinListState",default:null}),s=(0,t.nZ)({key:"getOneCoinMemos",get:function(e){var n=e.get,i=n(o),r=n(l);return i.filter((function(e){return e.coinType===r}))}}),a=(0,t.nZ)({key:"getAllCoinMemos",get:function(e){var n=(0,e.get)(o);return Array.from(new Set(null===n||void 0===n?void 0:n.map((function(e){return e.coinType})))).map((function(e){return n.filter((function(n){return n.coinType===e}))}))}})},1443:function(e,n,i){var r=i(1413),t=i(885),o=i(2791),l=i(4894),c=i(9526),s=i(1134),a=i(7632),d=i(184);n.Z=function(e){var n,i,u,x,p,m=e.coinName,h=(0,l.FV)(c.v0),f=(0,t.Z)(h,2),j=f[0],g=(f[1],(0,l.Zl)(c.X6)),b=(0,s.cI)(),v=b.register,y=b.handleSubmit,Z=b.formState.errors,P=b.reset,T=b.setValue;return(0,o.useEffect)((function(){m&&T("coinType",m)}),[m]),(0,d.jsxs)(a.tP,{onSubmit:y((function(e){console.log("SubmitData: ",e),g((function(n){return n.concat({id:Date.now(),text:e.text,buyPrice:e.buyPrice,coinType:e.coinType,coinNumber:e.coinNumber,targetPrice:e.targetPrice,writedAt:Date.now(),memoState:c.lD.planingToBuy,isModified:!1,isModifyOpen:!1})})),P()})),children:[(0,d.jsxs)(a.h8,{children:[(0,d.jsx)("span",{children:"Select Coin: "}),(0,d.jsx)("span",{children:j&&(null===j||void 0===j?void 0:j.length)>0?(0,d.jsx)("select",(0,r.Z)((0,r.Z)({defaultValue:null===m?j[0]:m,disabled:null!==m},v("coinType",{required:"You have to Select one"})),{},{children:j.map((function(e){return(0,d.jsx)("option",{value:e,children:e},e)}))})):(0,d.jsx)(d.Fragment,{children:"there is no coinNameList"})}),(0,d.jsx)("p",{children:null===(n=Z.coinType)||void 0===n?void 0:n.message})]}),(0,d.jsxs)(a.h8,{children:[(0,d.jsx)("span",{children:"Buy Price: "}),(0,d.jsx)("span",{children:(0,d.jsx)("input",(0,r.Z)({},v("buyPrice",{valueAsNumber:!0,required:"only positive Number Available",validate:{positive:function(e){return e>0}}})))}),(0,d.jsx)("p",{children:null===(i=Z.buyPrice)||void 0===i?void 0:i.message})]}),(0,d.jsxs)(a.h8,{children:[(0,d.jsx)("span",{children:"Target Price: "}),(0,d.jsx)("span",{children:(0,d.jsx)("input",(0,r.Z)({},v("targetPrice",{valueAsNumber:!0,required:"only positive Number Available",validate:{positive:function(e){return e>0}}})))}),(0,d.jsx)("p",{children:null===(u=Z.targetPrice)||void 0===u?void 0:u.message})]}),(0,d.jsxs)(a.h8,{children:[(0,d.jsx)("span",{children:"Coin Number To Buy: "}),(0,d.jsx)("span",{children:(0,d.jsx)("input",(0,r.Z)({},v("coinNumber",{valueAsNumber:!0,required:"only positive Number Available",validate:{positive:function(e){return e>0}}})))}),(0,d.jsx)("p",{children:null===(x=Z.coinNumber)||void 0===x?void 0:x.message})]}),(0,d.jsxs)(a.h8,{children:[(0,d.jsx)("span",{children:"Memo for your Trade"}),(0,d.jsx)("span",{children:(0,d.jsx)("textarea",(0,r.Z)({},v("text",{required:"write at least one letter",validate:{letter:function(e){return 0!==e.trim().length||"write at least one letter"}}})))}),(0,d.jsx)("p",{children:null===(p=Z.text)||void 0===p?void 0:p.message})]}),(0,d.jsx)(a.h8,{children:(0,d.jsx)(a.zx,{children:"Submit"})})]})}},7256:function(e,n,i){i.d(n,{Z:function(){return q}});var r,t,o,l,c,s,a,d,u,x=i(1413),p=i(2982),m=i(2791),h=i(4894),f=i(9526),j=i(168),g=i(1242),b=g.ZP.div(r||(r=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 10px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n"]))),v=g.ZP.div(t||(t=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  span {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n    margin-left: 10px;\n  }\n  p {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-left: 10px;\n    margin-bottom: 5px;\n  }\n"]))),y=g.ZP.span(o||(o=(0,j.Z)(["\n  font-size: 10px;\n  font-weight: 400;\n  text-transform: uppercase;\n  margin-bottom: 5px;\n  margin-left: 10px;\n"]))),Z=g.ZP.ul(l||(l=(0,j.Z)(["\n  width: 80%;\n"]))),P=g.ZP.li(c||(c=(0,j.Z)(["\n  background-color: white;\n  color: #2f3640;\n  border-radius: 5px;\n  margin-bottom: 10px;\n"]))),T=g.ZP.li(s||(s=(0,j.Z)(["\n  background-color: greenyellow;\n  color: #2f3640;\n  border-radius: 5px;\n  margin-bottom: 10px;\n"]))),S=g.ZP.li(a||(a=(0,j.Z)(["\n  background-color: red;\n  color: #2f3640;\n  border-radius: 5px;\n  margin-bottom: 10px;\n"]))),N=(g.ZP.li(d||(d=(0,j.Z)(["\n  background-color: yellowgreen;\n  color: #2f3640;\n  border-radius: 5px;\n  margin-bottom: 10px;\n"]))),g.ZP.button(u||(u=(0,j.Z)(["\n  text-align: center;\n  padding: 0.5em;\n  border-radius: 6px;\n  background-color: #2f3640;\n  color: white;\n"])))),w=i(2426),k=i.n(w),M=i(1134),D=i(7632),A=i(184),C=function(e){var n,i,r,t,o,l=e.memoObj,c=(0,h.Zl)(f.X6),s=(0,M.cI)({defaultValues:{text:l.text,buyPrice:l.buyPrice,coinType:l.coinType,coinNumber:l.coinNumber,targetPrice:l.targetPrice,memoState:l.memoState}}),a=s.register,d=s.handleSubmit,u=(s.getValues,s.formState.errors),m=s.reset,j=s.control,g=(0,M.qo)({control:j,name:"memoState"});return console.log("memoStateWatch: ",g),(0,A.jsxs)(D.tP,{onSubmit:d((function(e){console.log("SubmitData: ",e),c((function(n){var i,r=n.findIndex((function(e){return e.id===l.id}));return[].concat((0,p.Z)(n.slice(0,r)),[(0,x.Z)((0,x.Z)({},n[r]),{},{text:e.text,buyPrice:e.buyPrice,coinType:e.coinType,coinNumber:e.coinNumber,targetPrice:e.targetPrice,memoState:e.memoState,sellPrice:null!==(i=null===e||void 0===e?void 0:e.sellPrice)&&void 0!==i?i:0,isModified:!0,isModifyOpen:!1})],(0,p.Z)(n.slice(r+1)))})),m()})),children:[(0,A.jsxs)(D.h8,{children:[(0,A.jsx)("span",{children:"Select Coin: "}),(0,A.jsx)("span",{children:(0,A.jsx)("select",{disabled:!0,children:(0,A.jsx)("option",{children:l.coinType})})})]}),(0,A.jsxs)(D.h8,{children:[(0,A.jsx)("span",{children:"Memo State: "}),(0,A.jsx)("span",{children:(0,A.jsxs)("select",(0,x.Z)((0,x.Z)({},a("memoState")),{},{children:[(0,A.jsx)("option",{value:f.lD.planingToBuy,children:f.lD.planingToBuy}),(0,A.jsx)("option",{value:f.lD.completedDeal,children:f.lD.completedDeal})]}))})]}),g===f.lD.completedDeal&&(0,A.jsxs)(D.h8,{children:[(0,A.jsx)("span",{children:"Sell Price: "}),(0,A.jsx)("span",{children:(0,A.jsx)("input",(0,x.Z)({},a("sellPrice",{valueAsNumber:!0,required:"only positive Number Available",validate:{positive:function(e){return e>0}}})))}),(0,A.jsx)("p",{children:null===(n=u.buyPrice)||void 0===n?void 0:n.message})]}),(0,A.jsxs)(D.h8,{children:[(0,A.jsx)("span",{children:"Buy Price: "}),(0,A.jsx)("span",{children:(0,A.jsx)("input",(0,x.Z)({},a("buyPrice",{valueAsNumber:!0,required:"only positive Number Available",validate:{positive:function(e){return e>0}}})))}),(0,A.jsx)("p",{children:null===(i=u.buyPrice)||void 0===i?void 0:i.message})]}),(0,A.jsxs)(D.h8,{children:[(0,A.jsx)("span",{children:"Target Price: "}),(0,A.jsx)("span",{children:(0,A.jsx)("input",(0,x.Z)({},a("targetPrice",{valueAsNumber:!0,required:"only positive Number Available",validate:{positive:function(e){return e>0}}})))}),(0,A.jsx)("p",{children:null===(r=u.targetPrice)||void 0===r?void 0:r.message})]}),(0,A.jsxs)(D.h8,{children:[(0,A.jsx)("span",{children:"Coin Number To Buy: "}),(0,A.jsx)("span",{children:(0,A.jsx)("input",(0,x.Z)({},a("coinNumber",{valueAsNumber:!0,required:"only positive Number Available",validate:{positive:function(e){return e>0}}})))}),(0,A.jsx)("p",{children:null===(t=u.coinNumber)||void 0===t?void 0:t.message})]}),(0,A.jsxs)(D.h8,{children:[(0,A.jsx)("span",{children:"Memo for your Trade"}),(0,A.jsx)("p",{children:null===(o=u.text)||void 0===o?void 0:o.message})]}),(0,A.jsx)(D.h8,{children:(0,A.jsx)("span",{children:(0,A.jsx)("textarea",(0,x.Z)({},a("text",{required:"write at least one letter",validate:{letter:function(e){return 0!==e.trim().length||"write at least one letter"}}})))})}),(0,A.jsx)(D.h8,{children:(0,A.jsx)(D.zx,{children:"Submit"})})]})},O=function(e){var n=e.itemObj,i=e.itemIndex,r=e.children;return n.memoState===f.lD.planingToBuy?(0,A.jsx)(P,{children:r},i):n.sellPrice?n.sellPrice-n.buyPrice>0?(0,A.jsx)(T,{children:r},i):(0,A.jsx)(S,{children:r},i):(0,A.jsx)(P,{children:r},i)},B=function(e){var n=e.itemObj,i=e.itemIndex,r=e.turnModifyForm;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(O,{itemObj:n,itemIndex:i,children:[n.isModified&&(0,A.jsx)("div",{children:(0,A.jsx)("span",{children:"Modified!"})}),(0,A.jsxs)("div",{children:[(0,A.jsx)("span",{children:"Trade State"}),(0,A.jsx)(y,{children:n.memoState})]}),(0,A.jsxs)("div",{children:[(0,A.jsx)("span",{children:n.isModified?"Last Modified :":"Write Date :"}),(0,A.jsx)(y,{children:k()(n.isModified?n.modifiedAt:n.writedAt).format("YYYY-MM-DD")})]}),(0,A.jsxs)("div",{children:[(0,A.jsx)("span",{children:"BuyPrice :"}),(0,A.jsx)(y,{children:n.buyPrice})]}),(0,A.jsxs)("div",{children:[(0,A.jsx)("span",{children:"Bought Quantity :"}),(0,A.jsx)(y,{children:n.coinNumber})]}),(0,A.jsxs)("div",{children:[(0,A.jsx)("span",{children:"TargetPrice :"}),(0,A.jsx)(y,{children:n.targetPrice})]}),(0,A.jsxs)("div",{children:[(0,A.jsx)("span",{children:"Expected Profit :"}),(0,A.jsxs)(y,{children:["$ ",n.buyPrice*n.coinNumber]})]}),(0,A.jsxs)("div",{children:[(0,A.jsx)("span",{children:"Memo You wrote :"}),(0,A.jsx)("p",{children:n.text})]}),(0,A.jsx)("div",{style:{textAlign:"center"},children:(0,A.jsx)(N,{onClick:function(){return r(n)},children:"\uc218\uc815 \ud3fc \ucf1c\uae30/\ub044\uae30"})})]}),n.isModifyOpen&&(0,A.jsx)(C,{memoObj:n})]})},q=function(e){var n=e.coinType,i=(0,h.Zl)(f.X6),r=(0,h.sJ)(f.O6);console.log("coinTypeMemo: ",r);var t=(0,h.sJ)(f.SO);console.log("allCoinTypeMemos: ",t);var o=(0,m.useCallback)((function(e){i((function(n){console.log("prev: ",n);var i=n.findIndex((function(n){return n.id===e.id})),r=n[i].isModifyOpen;return n[i].memoState===f.lD.planingToBuy?[].concat((0,p.Z)(n.slice(0,i)),[(0,x.Z)((0,x.Z)({},n[i]),{},{isModifyOpen:!r})],(0,p.Z)(n.slice(i+1))):(alert("Sorry, CompleteDeal is disable to change!"),n)}))}),[i]);return(0,A.jsxs)(A.Fragment,{children:[null===n&&(t&&t.length>0?t.map((function(e,n){return(0,A.jsxs)(b,{children:[(0,A.jsx)("div",{children:e[0].coinType}),(0,A.jsx)(v,{children:(0,A.jsx)(Z,{children:e.map((function(e,n){return(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(B,{itemObj:e,itemIndex:n,turnModifyForm:o})})}))})})]},n)})):(0,A.jsx)(A.Fragment,{children:"There is no List you are looking for.."})),null!==n&&(r&&r.length>0?(0,A.jsxs)(b,{children:[(0,A.jsx)("div",{children:r[0].coinType}),(0,A.jsx)(v,{children:(0,A.jsx)(Z,{children:r.map((function(e,n){return(0,A.jsx)(B,{itemObj:e,itemIndex:n,turnModifyForm:o})}))})})]}):(0,A.jsx)(A.Fragment,{children:"There is no List you are looking for.."}))]})}},7632:function(e,n,i){i.d(n,{Dx:function(){return g},W2:function(){return f},h4:function(){return j},h8:function(){return y},tP:function(){return v},zx:function(){return b}});var r,t,o,l,c,s,a,d,u,x,p,m=i(168),h=i(1242),f=h.ZP.div(r||(r=(0,m.Z)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),j=(h.ZP.ul(t||(t=(0,m.Z)([""]))),h.ZP.li(o||(o=(0,m.Z)(["\n  background-color: ",";\n  color: ",";\n  border-radius: 15px;\n  margin-bottom: 10px;\n"])),(function(e){return e.theme.textColor}),(function(e){return e.theme.bgColor})),h.ZP.header(l||(l=(0,m.Z)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])))),g=h.ZP.span(c||(c=(0,m.Z)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(e){return e.theme.textColor})),b=(h.ZP.span(s||(s=(0,m.Z)(["\n  text-align: center;\n  display: block;\n"]))),h.ZP.input(a||(a=(0,m.Z)([""]))),h.ZP.textarea(d||(d=(0,m.Z)([""]))),h.ZP.button(u||(u=(0,m.Z)(["\n  padding: 0.5em;\n  border-radius: 6px;\n  background-color: ",";\n  color: ",";\n"])),(function(e){return e.theme.bgColor}),(function(e){return e.theme.textColor}))),v=h.ZP.form(x||(x=(0,m.Z)(["\n  display: block;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 10px;\n"]))),y=h.ZP.div(p||(p=(0,m.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  width: 80%;\n  margin-top: 10px;\n  justify-content: space-between;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-top: 5px;\n    margin-left: 10px;\n    margin-bottom: 5px;\n  }\n  span:last-child {\n    margin-left: 10px;\n    float: right;\n    /* margin-top: 5px; */\n  }\n  p {\n    color: ",";\n    font-size: 10px;\n  }\n  input {\n    width: 100px;\n  }\n"])),(function(e){return e.theme.textColor}))}}]);
//# sourceMappingURL=513.2a6ed049.chunk.js.map