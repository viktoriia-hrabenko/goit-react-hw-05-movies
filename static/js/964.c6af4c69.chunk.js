"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[964],{245:function(t,n,e){e.d(n,{a:function(){return u}});var r,a=e(402),i=e(168),o=e(444).ZP.div(r||(r=(0,i.Z)(["\n  position: relative;\n  top: 10vh;\n"]))),c=e(184),u=function(){return(0,c.jsx)(o,{children:(0,c.jsx)(a.Rf,{color:"#966844",width:"100",visible:!0,ariaLabel:"falling-lines-loading"})})}},964:function(t,n,e){e.r(n),e.d(n,{default:function(){return P}});var r,a,i,o,c,u,s,p=e(439),f=e(791),h=e(689),l=e(245),d=e(390),v=e(168),m=e(444),x=m.ZP.h3(r||(r=(0,v.Z)(["\n  text-align: center;\n  margin-left: 20px;\n  margin-bottom: 30px;\n"]))),g=m.ZP.ul(a||(a=(0,v.Z)(["\n  margin-left: 50px;\n  margin-bottom: 15px;\n  list-style-type: disc;\n"]))),Z=m.ZP.li(i||(i=(0,v.Z)(["\n  margin-bottom: 5px;\n  font-size: 18px;\n"]))),b=m.ZP.p(o||(o=(0,v.Z)(["\n  margin-bottom: 20px;\n  font-weight: 600;\n"]))),w=m.ZP.p(c||(c=(0,v.Z)(["\n  margin-bottom: 30px;\n"]))),k=m.ZP.p(u||(u=(0,v.Z)(["\nmargin-bottom: 30px;\ntext-align: center;\nfont-weight: 500;\n"]))),y=e(184),j=function(t){var n=t.reviews;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(x,{children:"Reviews"}),(0,y.jsx)(g,{children:0===n.length?(0,y.jsx)(k,{children:"Oops! We don't have any reviews for this movie."}):n.map((function(t){var n=t.id,e=t.author,r=t.content;return(0,y.jsxs)(Z,{children:[(0,y.jsxs)(b,{children:["Author: ",e]}),(0,y.jsx)(w,{children:r})]},n)}))})]})},_=m.ZP.section(s||(s=(0,v.Z)(["\n  margin: 20px 20px;\n  border-bottom: 2px solid;\n"]))),P=function(){var t=(0,f.useState)([]),n=(0,p.Z)(t,2),e=n[0],r=n[1],a=(0,f.useState)(!1),i=(0,p.Z)(a,2),o=i[0],c=i[1],u=(0,f.useState)(null),s=(0,p.Z)(u,2),v=s[0],m=s[1],x=(0,h.UO)().movieId;return(0,f.useEffect)((function(){c(!0),(0,d.tx)(x).then((function(t){r(t)})).catch((function(t){return m(t.message)})).finally((function(){c(!1)}))}),[x]),(0,y.jsxs)(y.Fragment,{children:[o&&(0,y.jsx)(l.a,{}),v&&(0,y.jsxs)("p",{children:["Oops, some error:",v]}),(0,y.jsx)(_,{children:(0,y.jsx)(j,{reviews:e})})]})}},390:function(t,n,e){e.d(n,{FL:function(){return p},a3:function(){return u},q:function(){return s},tx:function(){return h},zv:function(){return f}});var r=e(861),a=e(757),i=e.n(a),o=e(912);o.Z.default.baseURL="https://api.themoviedb.org/3";var c="69096c6df3db45b0788fb44bda629200",u=function(){var t=(0,r.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(c));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&api_key=").concat(c));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(c));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(c));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(c));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=964.c6af4c69.chunk.js.map