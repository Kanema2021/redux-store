(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,a,t){e.exports=t(118)},108:function(e,a,t){},118:function(e,a,t){"use strict";t.r(a);var n,r,o,l,c,i=t(0),s=t.n(i),u=t(39),m=t.n(u),d=(t(107),t(108),t(29)),b=t(132),g=t(135),p=t(131),v=t(51),k=t(12),E=t(96),h=t(20),f=t.n(h),w=t(32),O=t(15),j=t(122),S=t(123),y=t(134),I=t(89),x=t(124),C=t(125),B=t(140),T=t(87),F=t(88),L=t(78),_=t.n(L),N=new(function(){function e(){Object(T.a)(this,e)}return Object(F.a)(e,[{key:"getProfile",value:function(){return _()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return _()(e).exp<Date.now()/1e3}catch(a){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),$=function(e,a){return fetch("/api/users",{method:"PUT",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(a)},body:JSON.stringify(e)})},q=function(e){var a=localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):null;if(!a)return!1;var t=null===a||void 0===a?void 0:a.filter((function(a){return a!==e}));return localStorage.setItem("saved_books",JSON.stringify(t)),!0},D=function(){var e=Object(i.useState)([]),a=Object(O.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(""),o=Object(O.a)(r,2),l=o[0],c=o[1],u=Object(i.useState)(localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):[]),m=Object(O.a)(u,2),d=m[0],b=m[1];Object(i.useEffect)((function(){return function(){var e;(e=d).length?localStorage.setItem("saved_books",JSON.stringify(e)):localStorage.removeItem("saved_books")}}));var g=function(){var e=Object(w.a)(f.a.mark((function e(a){var t,r,o,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),l){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(l));case 6:if((t=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,t.json();case 11:r=e.sent,o=r.items,i=o.map((function(e){var a;return{bookId:e.id,authors:e.volumeInfo.authors||["No author to display"],title:e.volumeInfo.title,description:e.volumeInfo.description,image:(null===(a=e.volumeInfo.imageLinks)||void 0===a?void 0:a.thumbnail)||""}})),n(i),c(""),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(a){return e.apply(this,arguments)}}(),p=function(){var e=Object(w.a)(f.a.mark((function e(a){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.find((function(e){return e.bookId===a})),r=N.loggedIn()?N.getToken():null){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,e.next=7,$(n,r);case 7:if(e.sent.ok){e.next=10;break}throw new Error("something went wrong!");case 10:b([].concat(Object(E.a)(d),[n.bookId])),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(j.a,{fluid:!0,className:"text-light bg-dark"},s.a.createElement(S.a,null,s.a.createElement("h1",null,"Search for Books!"),s.a.createElement(y.a,{onSubmit:g},s.a.createElement(y.a.Row,null,s.a.createElement(I.a,{xs:12,md:8},s.a.createElement(y.a.Control,{name:"searchInput",value:l,onChange:function(e){return c(e.target.value)},type:"text",size:"lg",placeholder:"Search for a book"})),s.a.createElement(I.a,{xs:12,md:4},s.a.createElement(x.a,{type:"submit",variant:"success",size:"lg"},"Submit Search")))))),s.a.createElement(S.a,null,s.a.createElement("h2",null,t.length?"Viewing ".concat(t.length," results:"):"Search for a book to begin"),s.a.createElement(C.a,null,t.map((function(e){return s.a.createElement(B.a,{key:e.bookId,border:"dark"},e.image?s.a.createElement(B.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,s.a.createElement(B.a.Body,null,s.a.createElement(B.a.Title,null,e.title),s.a.createElement("p",{className:"small"},"Authors: ",e.authors),s.a.createElement(B.a.Text,null,e.description),N.loggedIn()&&s.a.createElement(x.a,{disabled:null===d||void 0===d?void 0:d.some((function(a){return a===e.bookId})),className:"btn-block btn-info",onClick:function(){return p(e.bookId)}},(null===d||void 0===d?void 0:d.some((function(a){return a===e.bookId})))?"This book has already been saved!":"Save this Book!")))})))))},P=t(45),V=t(95),J=Object(V.a)(n||(n=Object(P.a)(["\n {\n    me {\n        _id\n        username\n        email\n        bookCount\n        savedBooks {\n            bookId\n            authors\n            title\n            descriptionlink\n            image\n        }\n\n    }\n}\n"]))),U=Object(V.b)(r||(r=Object(P.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),Y=Object(V.b)(o||(o=Object(P.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),G=(Object(V.b)(l||(l=Object(P.a)(["\n  mutation saveBook($bookData: String) {\n    addBook(bookData: $bookData) {\n        _id\n        username\n        email\n        bookCount\n        savedBooks {\n            bookId\n            authors\n            title\n            description\n            link\n            image\n      }\n    }\n  }\n"]))),Object(V.b)(c||(c=Object(P.a)(["\n  mutation REMOVE_BOOK($bookId: ID!) {\n    removeBook(bookId: $bookId) {\n        _id\n        username\n        savedBooks {\n            bookId\n            authors\n            title\n            description\n            link\n            image\n        }\n    }\n  }\n"])))),K=t(138),z=t(141),M=function(){var e=Object(K.a)(J),a=e.loading,t=e.data,n=(null===t||void 0===t?void 0:t.me)||{},r=Object(z.a)(G),o=Object(O.a)(r,1)[0],l=function(){var e=Object(w.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N.loggedIn()?N.getToken():null){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,o({variables:{bookId:a}});case 6:if(e.sent){e.next=9;break}throw new Error("please try again");case 9:q(a),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(a){return e.apply(this,arguments)}}();return a?s.a.createElement("h2",null,"Loading......"):s.a.createElement(s.a.Fragment,null,s.a.createElement(j.a,{fluid:!0,className:"text-light bg-dark"},s.a.createElement(S.a,null,s.a.createElement("h1",null,"Viewing saved books!"))),s.a.createElement(S.a,null,s.a.createElement("h2",null,n.savedBooks.length?"Viewing ".concat(n.savedBooks.length," saved ").concat(1===n.savedBooks.length?"book":"books",":"):"You have no saved books!"),s.a.createElement(C.a,null,n.savedBooks.map((function(e){return s.a.createElement(B.a,{key:e.bookId,border:"dark"},e.image?s.a.createElement(B.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,s.a.createElement(B.a.Body,null,s.a.createElement(B.a.Title,null,e.title),s.a.createElement("p",{className:"small"},"Authors: ",e.authors),s.a.createElement(B.a.Text,null,e.description),s.a.createElement(x.a,{className:"btn-block btn-danger",onClick:function(){return l(e.bookId)}},"Delete this Book!")))})))))},A=t(137),H=t(136),R=t(133),W=t(139),Q=t(48),X=t(130),Z=function(){var e=Object(i.useState)({username:"",email:"",password:""}),a=Object(O.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(!1),o=Object(O.a)(r,1)[0],l=Object(i.useState)(!1),c=Object(O.a)(l,2),u=c[0],m=c[1],b=Object(z.a)(Y),g=Object(O.a)(b,1)[0],p=function(e){var a=e.target,r=a.name,o=a.value;n(Object(d.a)(Object(d.a)({},t),{},Object(Q.a)({},r,o)))},v=function(){var e=Object(w.a)(f.a.mark((function e(a){var r,o,l,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,g({variables:Object(d.a)({},t)});case 6:if((r=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,r.json();case 11:o=e.sent,l=o.token,c=o.user,console.log(c),N.login(l),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0),m(!0);case 22:n({username:"",email:"",password:""});case 23:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(y.a,{noValidate:!0,validated:o,onSubmit:v},s.a.createElement(X.a,{dismissible:!0,onClose:function(){return m(!1)},show:u,variant:"danger"},"Something went wrong with your signup!"),s.a.createElement(y.a.Group,null,s.a.createElement(y.a.Label,{htmlFor:"username"},"Username"),s.a.createElement(y.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:p,value:t.username,required:!0}),s.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Username is required!")),s.a.createElement(y.a.Group,null,s.a.createElement(y.a.Label,{htmlFor:"email"},"Email"),s.a.createElement(y.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:p,value:t.email,required:!0}),s.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Email is required!")),s.a.createElement(y.a.Group,null,s.a.createElement(y.a.Label,{htmlFor:"password"},"Password"),s.a.createElement(y.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:p,value:t.password,required:!0}),s.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Password is required!")),s.a.createElement(x.a,{disabled:!(t.username&&t.email&&t.password),type:"submit",variant:"success"},"Submit")))},ee=function(){var e=Object(i.useState)({email:"",password:""}),a=Object(O.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(!1),o=Object(O.a)(r,1)[0],l=Object(i.useState)(!1),c=Object(O.a)(l,2),u=c[0],m=c[1],b=Object(z.a)(U),g=Object(O.a)(b,1)[0],p=function(e){var a=e.target,r=a.name,o=a.value;n(Object(d.a)(Object(d.a)({},t),{},Object(Q.a)({},r,o)))},v=function(){var e=Object(w.a)(f.a.mark((function e(a){var r,o,l,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,g(t);case 6:if((r=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,r.json();case 11:o=e.sent,l=o.token,c=o.user,console.log(c),N.login(l),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0),m(!0);case 22:n({username:"",email:"",password:""});case 23:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(y.a,{noValidate:!0,validated:o,onSubmit:v},s.a.createElement(X.a,{dismissible:!0,onClose:function(){return m(!1)},show:u,variant:"danger"},"Something went wrong with your login credentials!"),s.a.createElement(y.a.Group,null,s.a.createElement(y.a.Label,{htmlFor:"email"},"Email"),s.a.createElement(y.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:p,value:t.email,required:!0}),s.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Email is required!")),s.a.createElement(y.a.Group,null,s.a.createElement(y.a.Label,{htmlFor:"password"},"Password"),s.a.createElement(y.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:p,value:t.password,required:!0}),s.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Password is required!")),s.a.createElement(x.a,{disabled:!(t.email&&t.password),type:"submit",variant:"success"},"Submit")))},ae=function(){var e=Object(i.useState)(!1),a=Object(O.a)(e,2),t=a[0],n=a[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement(A.a,{bg:"dark",variant:"dark",expand:"lg"},s.a.createElement(S.a,{fluid:!0},s.a.createElement(A.a.Brand,{as:v.b,to:"/"},"Google Books Search"),s.a.createElement(A.a.Toggle,{"aria-controls":"navbar"}),s.a.createElement(A.a.Collapse,{id:"navbar"},s.a.createElement(H.a,{className:"ml-auto"},s.a.createElement(H.a.Link,{as:v.b,to:"/"},"Search For Books"),N.loggedIn()?s.a.createElement(s.a.Fragment,null,s.a.createElement(H.a.Link,{as:v.b,to:"/saved"},"See Your Books"),s.a.createElement(H.a.Link,{onClick:N.logout},"Logout")):s.a.createElement(H.a.Link,{onClick:function(){return n(!0)}},"Login/Sign Up"))))),s.a.createElement(R.a,{size:"lg",show:t,onHide:function(){return n(!1)},"aria-labelledby":"signup-modal"},s.a.createElement(W.a.Container,{defaultActiveKey:"login"},s.a.createElement(R.a.Header,{closeButton:!0},s.a.createElement(R.a.Title,{id:"signup-modal"},s.a.createElement(H.a,{variant:"pills"},s.a.createElement(H.a.Item,null,s.a.createElement(H.a.Link,{eventKey:"login"},"Login")),s.a.createElement(H.a.Item,null,s.a.createElement(H.a.Link,{eventKey:"signup"},"Sign Up"))))),s.a.createElement(R.a.Body,null,s.a.createElement(W.a.Content,null,s.a.createElement(W.a.Pane,{eventKey:"login"},s.a.createElement(ee,{handleModalClose:function(){return n(!1)}})),s.a.createElement(W.a.Pane,{eventKey:"signup"},s.a.createElement(Z,{handleModalClose:function(){return n(!1)}})))))))},te=new b.a({cache:new g.a,request:function(e){var a=localStorage.getItem("id-token");e.setContext((function(e){var t=e.headers,n=void 0===t?{}:t;return{headers:Object(d.a)(Object(d.a)({},n),{},{authorization:localStorage.getItem(a)||""})}}))}});var ne=function(){return s.a.createElement(p.a,{client:te},s.a.createElement(v.a,null,s.a.createElement(s.a.Fragment,null,s.a.createElement(ae,null),s.a.createElement(k.c,null,s.a.createElement(k.a,{exact:!0,path:"/",component:D}),s.a.createElement(k.a,{exact:!0,path:"/saved",component:M}),s.a.createElement(k.a,{render:function(){return s.a.createElement("h1",{className:"display-2"},"Wrong page!")}})))))};m.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(ne,null)),document.getElementById("root"))}},[[102,1,2]]]);
//# sourceMappingURL=main.6f4099de.chunk.js.map