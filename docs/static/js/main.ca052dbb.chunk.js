(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{16:function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAjCAYAAAAaLGNkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJXSURBVHgB7ZdLaBNRFIbPJBMCQkoNiG7Ex86CIAq6VVwJolM1D8GFWgU3BXfuJHUhCK4UN6HS7swTQ6iIm1qpoC51kZVicCdYDCISQx5+Q7xlOp1MJu10UZgfLuc+/jn3n3vOzL1XJEAfmldiKpWa7vV696iOu9DqlIeFQuGJ+C0ikUgc1zTtAyIWab5x4jCmhUKhw1QvdrvdU6VSaUk8QvdCQsB5TKNYLJ4exkXwD8ScpbokHrFuJQzDGI9EIrs7nc6Y6tN1/Q7mWLvdTg7xZ3IXMMtwH6i+aDT6NxaLfc5ms3+GiuAtJnjrZapx8R91fBv5fP6jfWBNOCC9wPxkFaaoN8RHEKJZ8uYZ1Qn72OpKsApxJl6BeIPYPxWfgf+r+J9rNpt7qtXqd0cRJpLJ5DdErFCdpvwWn4DPHazEY6pxPt8D9vE14SCZroTD4Zf/88I34M80DT7dScdxe0c6nd4P+SsPzpIbC7JJsAInMbdbrdbOSqXiPc8IS49yS3yAmQumPzdOSLw7O8ev+5Fqs2J7cf7c/K9YOHfhnJER4VkE4TlKgl1WbUK1D2Pwczpiod2Ec0JGhGcRW4lAhEIgQiEQoRCIUAhEKGxLEatbMmeOX/ZBNrmubKUIDifzmCnVLpfLn9hJJ62XHHbQa5zO5mREDLr8tClj1o5cLleX/jVPLEIq1jYH5EUHX7tkCBxXgjd6i7mUyWQ2mzPm1dA8ob13I+kDRMwQ39e1Wu0Lp6d52q7HM8fZ+7jAowcp1125gwaY3MDcpxySDYLJ35HAM4TtlQTwgH+y1ttKcYZZoAAAAABJRU5ErkJggg=="},18:function(n,t,e){n.exports=e(25)},25:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),i=e(11),c=e.n(i),a=e(1),u=e(2),l=e(12);function d(){var n=Object(u.a)(["\n  ","\n  html {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  body {\n    font-family: 'Barlow', sans-serif;\n    background-color: #F3F2F0;\n    }\n"]);return d=function(){return n},n}var f=Object(a.b)(d(),l.a),s={colors:{primaryColor:"#beb2ff",secondaryColor:"#ffdeb2",pendingColor:"#f2e4c8",completedColor:"#e4f2c8",lightColor:"#F3F2F0",mediumColor:"#b2b2b2",darkColor:"#565656"}},m=e(9),h=e(17),b=e(7),p=e(27),g=function(n){return n/16+"rem"};function C(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  width: 50%;\n  margin: "," auto;\n\n  @media all and (max-width: 500px) {\n    flex-direction: column;\n    width: 90%;\n  }\n"]);return C=function(){return n},n}var v=a.d.main(C(),g(30));function A(){var n=Object(u.a)(["\n      color: ",";\n      background-color: ","; ;\n    "]);return A=function(){return n},n}function j(){var n=Object(u.a)(["\n  height: ",";\n  width: ",";\n  border: "," solid ",";\n  font-size: ",";\n  color: ",";\n  background-color: ",";\n  margin-left: ",";\n  border-radius: ",";\n  outline: none;\n  cursor: pointer;\n\n  ","\n"]);return j=function(){return n},n}function k(){var n=Object(u.a)(["\n  width: ",";\n  border: none;\n  border-bottom: 2px solid ",";\n  background-color: ",";\n  outline: none;\n  font-size: ",";\n  font-weight: 300;\n  color: ",";\n\n  ::placeholder {\n    color: ",";\n    font-size: ",";\n    font-weight: 100;\n  }\n"]);return k=function(){return n},n}function E(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: ",";\n  width: 100%;\n"]);return E=function(){return n},n}function O(){var n=Object(u.a)(["\n  font-size: ",";\n  width: 100%;\n  text-align: center;\n  color: ",";\n  margin-top: ",";\n"]);return O=function(){return n},n}function x(){var n=Object(u.a)(["\n  height: auto;\n"]);return x=function(){return n},n}var w=a.d.header(x()),y=a.d.h1(O(),g(40),(function(n){return n.theme.colors.primaryColor}),g(30)),J=a.d.div(E(),g(20)),B=a.d.input(k(),g(200),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.colors.lightColor}),g(14),(function(n){return n.theme.colors.darkColor}),(function(n){return n.theme.colors.mediumColor}),g(14)),I=a.d.button(j(),g(40),g(80),g(2),(function(n){return n.theme.colors.primaryColor}),g(14),(function(n){return n.theme.colors.lightColor}),(function(n){return n.theme.colors.primaryColor}),g(8),g(8),(function(n){return n.disabled&&Object(a.c)(A(),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.colors.lightColor}))})),L=function(n){var t=n.onButtonClick,e=n.onFormChange,r=n.value;return o.a.createElement(w,null,o.a.createElement(y,null,"What do you have to do today?"," ",o.a.createElement("span",{role:"img","aria-label":"stars"},"\u2728")),o.a.createElement(J,null,o.a.createElement(B,{type:"text",placeholder:"Type your new task here!",onChange:function(n){return e(n)},value:r}),o.a.createElement(I,{disabled:!r,onClick:function(){return t()}},"Add task")))},Q=e(16),P=e.n(Q);function U(){var n=Object(u.a)(["\n  height: 100%;\n  width: 100%;\n"]);return U=function(){return n},n}function D(){var n=Object(u.a)(["\n  height: ",";\n  width: ",";\n  cursor: pointer;\n"]);return D=function(){return n},n}function S(){var n=Object(u.a)(["\n      text-decoration: line-through;\n    "]);return S=function(){return n},n}function z(){var n=Object(u.a)(["\n  color: ",";\n  font-weight: 300;\n  max-width: ",";\n  text-overflow: ellipsis;\n  overflow: hidden;\n\n  ",";\n"]);return z=function(){return n},n}function F(){var n=Object(u.a)(["\n      background-color: ",";\n    "]);return F=function(){return n},n}function H(){var n=Object(u.a)(["\n  height: ",";\n  width: ",";\n  border-radius: ",";\n  background-color: "," solid\n    ",";\n\n  ","\n"]);return H=function(){return n},n}function X(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: ",";\n  width: ",";\n  border: "," solid ",";\n  margin-right: ",";\n  border-radius: ",";\n  cursor: pointer;\n"]);return X=function(){return n},n}function M(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n"]);return M=function(){return n},n}function R(){var n=Object(u.a)(["\n      background-color: ",";\n    "]);return R=function(){return n},n}function Y(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 90%;\n  margin: "," "," 0 ",";\n  padding: ",";\n  border-radius: ",";\n  background-color: ",";\n\n  ","\n"]);return Y=function(){return n},n}function K(){var n=Object(u.a)(["\n      width: ","; ;\n    "]);return K=function(){return n},n}function N(){var n=Object(u.a)(["\n  height: ",";\n  width: ",";\n  align-self: center;\n  background-color: ",";\n  z-index: -999;\n  transform: translate(0, -8px);\n\n  ","\n"]);return N=function(){return n},n}function W(){var n=Object(u.a)(["\n  font-size: ",";\n  text-align: center;\n  color: ",";\n"]);return W=function(){return n},n}function Z(){var n=Object(u.a)(["\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n\n  @media all and (max-width: 500px) {\n    width: 100%;\n    min-height: ",";\n    margin: auto;\n\n    :last-child {\n      margin-top: 20px;\n    }\n  }\n"]);return Z=function(){return n},n}var T=a.d.div(Z(),g(200)),G=a.d.h2(W(),g(18),(function(n){return n.theme.colors.darkColor})),V=a.d.div(N(),g(10),g(130),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.isCompleted&&Object(a.c)(K(),g(150))})),q=a.d.div(Y(),g(20),g(20),g(20),g(8),g(8),(function(n){return n.theme.colors.pendingColor}),(function(n){return n.isCompleted&&Object(a.c)(R(),(function(n){return n.theme.colors.completedColor}))})),$=a.d.div(M()),_=a.d.div(X(),g(20),g(20),g(1),(function(n){return n.theme.colors.darkColor}),g(8),g(8)),nn=a.d.div(H(),g(16),g(16),g(5),g(1),(function(n){return n.theme.colors.pendingColor}),(function(n){return n.isCompleted&&Object(a.c)(F(),(function(n){return n.theme.colors.mediumColor}))})),tn=a.d.p(z(),(function(n){return n.theme.colors.darkColor}),g(250),(function(n){return n.isCompleted&&Object(a.c)(S())})),en=a.d.div(D(),g(20),g(20)),rn=a.d.img(U()),on=function(n){var t=n.tasks,e=n.title,r=n.onCheckboxClick,i=n.onClearButtonClick,c=n.isPendingList;return o.a.createElement(T,null,o.a.createElement(G,null,e),o.a.createElement(V,{isCompleted:!c}),t.map((function(n){var t=n.name,e=n.id;return o.a.createElement(q,{isCompleted:!c,key:e},o.a.createElement($,null,o.a.createElement(_,{isCompleted:!c,onClick:function(){return r(e,c)}},o.a.createElement(nn,{isCompleted:!c})),o.a.createElement(tn,{isCompleted:!c},t)),o.a.createElement(en,{onClick:function(){return i(e)}},o.a.createElement(rn,{src:P.a,alt:"Delete"})))})))};on.defaultProps={isPendingList:!1};var cn=on,an="pending",un="completed",ln=function(){var n=Object(r.useState)(""),t=Object(b.a)(n,2),e=t[0],i=t[1],c=Object(r.useState)([]),a=Object(b.a)(c,2),u=a[0],l=a[1],d=function(n,t){var e=u.map((function(e){var r=n===e.id?t?un:an:e.status;return Object(m.a)(Object(m.a)({},e),{},{status:r})}));l(e)},f=function(n){return l(u.filter((function(t){return t.id!==n})))};return o.a.createElement(o.a.Fragment,null,o.a.createElement(L,{onButtonClick:function(){l([].concat(Object(h.a)(u),[{id:Object(p.a)(),name:e,status:an}])),i("")},onFormChange:function(n){return i(n.target.value)},value:e}),o.a.createElement(v,null,o.a.createElement(cn,{title:"Pending tasks",tasks:u.filter((function(n){return n.status===an})),onCheckboxClick:d,onClearButtonClick:f,isPendingList:!0}),o.a.createElement(cn,{title:"Completed tasks",tasks:u.filter((function(n){return n.status===un})),onCheckboxClick:d,onClearButtonClick:f})))};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null),o.a.createElement(a.a,{theme:s},o.a.createElement(ln,null))),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ca052dbb.chunk.js.map