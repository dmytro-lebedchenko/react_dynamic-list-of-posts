(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(9),s=n.n(c),a=n(5),r=n(2),i=n(3),o=n.n(i),l=n(1),d=(n(16),n(17),n(18),"https://mate.academy/students-api");function u(e){return new Promise((function(t){setTimeout(t,e)}))}function j(e){return b.apply(this,arguments)}function b(){return b=Object(a.a)(o.a.mark((function e(t){var n,c,s,a,r=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:"GET",c=r.length>2&&void 0!==r[2]?r[2]:null,s={method:n},c&&(s.body=JSON.stringify(c),s.headers={"Content-Type":"application/json; charset=UTF-8"}),e.next=6,u(300);case 6:return e.next=8,fetch(d+t,s);case 8:return a=e.sent,e.abrupt("return",a.json());case 10:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}var m,h=function(e){return j(e)},O=function(e,t){return j(e,"POST",t)},p=function(e){return j(e,"DELETE")},f=function(e){return h("/posts?userId=".concat(e))};!function(e){e.GET_USERS="Unable to get users",e.NO_POSTS="No posts yet",e.GET_POSTS="Something went wrong!",e.GET_COMMENTS="Unable to get comments",e.ADD_COMMENT="Unable to add comment",e.DELETE_COMMENT="Unable to delete comment"}(m||(m={}));var x=function(e){switch(e){case m.NO_POSTS:return"NoPostsYet";case m.GET_USERS:case m.GET_POSTS:return"PostsLoadingError";case m.GET_COMMENTS:case m.ADD_COMMENT:case m.DELETE_COMMENT:return"CommentsError";default:return null}},N=n(4),v=n.n(N),g=n(0),y=function(e){var t=e.selectedUserId,n=e.onSelectUser,c=e.onError,s=Object(l.useState)([]),a=Object(r.a)(s,2),i=a[0],o=a[1],d=Object(l.useState)(null),u=Object(r.a)(d,2),j=u[0],b=u[1],O=Object(l.useState)(!1),p=Object(r.a)(O,2),f=p[0],x=p[1],N=Object(l.useRef)(null),y=function(e){N.current&&!N.current.contains(e.target)&&x(!1)};return Object(l.useEffect)((function(){h("/users").then(o).catch((function(){return c(m.GET_USERS)}))}),[]),Object(l.useEffect)((function(){return document.addEventListener("click",y),function(){document.removeEventListener("click",y)}}),[f]),Object(g.jsx)("div",{className:"block",children:Object(g.jsxs)("div",{"data-cy":"UserSelector",className:v()("dropdown",{"is-active":f}),ref:N,children:[Object(g.jsx)("div",{className:"dropdown-trigger",children:Object(g.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){return x(!f)},children:[Object(g.jsx)("span",{children:t?"".concat(j):"Choose a user"}),Object(g.jsx)("span",{className:"icon is-small",children:Object(g.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(g.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(g.jsx)("div",{className:"dropdown-content",children:i.length>0&&i.map((function(e){return Object(g.jsx)("a",{href:"#user-".concat(e.id),className:v()("dropdown-item",{"is-active":e.id===t}),onClick:function(){return function(e){var t=e.name,c=e.id;b(t),n(c),x(!1)}(e)},children:e.name},e.id)}))})})]})})},E=function(e){var t=e.error;return Object(g.jsx)(g.Fragment,{children:t&&function(e){var n=x(e),c="NoPostsYet"===n?"is-warning":"is-danger";return Object(g.jsx)("div",{className:"notification ".concat(c),"data-cy":n,children:t})}(t)})},S=function(e){var t=e.posts,n=e.postId,c=e.onPost;return Object(g.jsxs)("div",{"data-cy":"PostsList",children:[Object(g.jsx)("p",{className:"title",children:"Posts:"}),Object(g.jsxs)("table",{className:" table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{className:"has-background-link-light",children:[Object(g.jsx)("th",{children:"#"}),Object(g.jsx)("th",{children:"Title"}),Object(g.jsx)("th",{children:" "})]})}),Object(g.jsx)("tbody",{children:t.map((function(e){return Object(g.jsxs)("tr",{"data-cy":"Post",children:[Object(g.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(g.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(g.jsx)("td",{className:"has-text-right is-vcentered",children:Object(g.jsx)("button",{type:"button","data-cy":"PostButton",className:v()("button","is-link",{"is-light":!(n&&e.id===n)}),onClick:function(){return t=e.id,c(n!==t?t:null);var t},children:n&&e.id===n?"Close":"Open"})})]},e.id)}))})]})]})},T=(n(20),function(){return Object(g.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(g.jsx)("div",{className:"Loader__content"})})}),k=function(e){var t=e.posts,n=e.postId,c=e.selectedUserId,s=e.error,a=e.isLoading,r=e.onPost,i=e.onSelectUser,o=e.onError;return Object(g.jsx)("div",{className:"tile is-parent",children:Object(g.jsxs)("div",{className:" tile is-child box is-success",children:[Object(g.jsx)(y,{selectedUserId:c,onSelectUser:i,onError:o}),Object(g.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!c&&!s&&Object(g.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),s&&s!==m.NO_POSTS&&"PostsLoadingError"===x(s)&&Object(g.jsx)(E,{error:s}),!(null!==t&&void 0!==t&&t.length)&&c&&s===m.NO_POSTS&&Object(g.jsx)(E,{error:s}),a&&Object(g.jsx)(T,{}),!a&&t.length>0&&!s&&Object(g.jsx)(S,{posts:t,postId:n,onPost:r})]})]})})},C=n(10),w=function(e){return h("/comments?postId=".concat(e))},P=function(e){return p("/comments/".concat(e))},_=function(e){var t=e.postId,n=e.onAdd,c=e.onError,s=Object(l.useState)(""),i=Object(r.a)(s,2),d=i[0],u=i[1],j=Object(l.useState)(""),b=Object(r.a)(j,2),h=b[0],p=b[1],f=Object(l.useState)(""),x=Object(r.a)(f,2),N=x[0],y=x[1],E=Object(l.useState)(!1),S=Object(r.a)(E,2),T=S[0],k=S[1],C=Object(l.useState)(!1),w=Object(r.a)(C,2),P=w[0],_=w[1],M=Object(l.useState)(!1),I=Object(r.a)(M,2),U=I[0],D=I[1],L=function(){var e=Object(a.a)(o.a.mark((function e(){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,k(!0),c(null),t){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,O("/comments",{postId:t,name:d,email:h,body:N});case 7:s=e.sent,n(s),u(s.name),p(s.email),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),c(m.ADD_COMMENT);case 16:return e.prev=16,k(!1),_(!1),y(""),e.finish(16);case 21:case"end":return e.stop()}}),e,null,[[0,13,16,21]])})));return function(){return e.apply(this,arguments)}}(),G=function(e){return P&&!e};return Object(g.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){return function(e){e.preventDefault(),U&&L()}(e)},children:[Object(g.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(g.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(g.jsxs)("div",{className:" control has-icons-left has-icons-right",children:[Object(g.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:v()("input",{"is-danger":G(d.length)}),value:d,onChange:function(e){return u(e.target.value)}}),Object(g.jsx)("span",{className:" icon is-small is-left",children:Object(g.jsx)("i",{className:"fas fa-user"})}),G(d.length)&&Object(g.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(g.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),G(d.length)&&Object(g.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(g.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(g.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(g.jsxs)("div",{className:" control has-icons-left has-icons-right",children:[Object(g.jsx)("input",{type:"email",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:v()("input",{"is-danger":G(h.length)}),value:h,onChange:function(e){return p(e.target.value)}}),Object(g.jsx)("span",{className:" icon is-small is-left",children:Object(g.jsx)("i",{className:"fas fa-envelope"})}),G(h.length)&&Object(g.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(g.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),G(h.length)&&Object(g.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(g.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(g.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(g.jsx)("div",{className:"control",children:Object(g.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:v()("textarea",{"is-danger":G(N.length)}),value:N,onChange:function(e){return y(e.target.value)}})}),G(N.length)&&Object(g.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(g.jsxs)("div",{className:"field is-grouped",children:[Object(g.jsx)("div",{className:"control",children:Object(g.jsx)("button",{type:"submit",className:v()("button","is-link",{"is-loading":T}),onClick:function(){return _(!0),D(!!(d&&h&&N))},children:"Add"})}),Object(g.jsx)("div",{className:"control",children:Object(g.jsx)("button",{type:"reset",className:" button is-link is-light","aria-label":"resetButton",onClick:function(){return u(""),p(""),y(""),c(null),void _(!1)},children:"Clear"})})]})]})},M=function(e){var t=e.posts,n=e.postId,c=e.error,s=e.onError,i=Object(l.useState)([]),d=Object(r.a)(i,2),u=d[0],j=d[1],b=Object(l.useState)(!1),h=Object(r.a)(b,2),O=h[0],p=h[1],f=Object(l.useState)(!1),x=Object(r.a)(f,2),N=x[0],v=x[1],y=t.filter((function(e){return e.id===n}))[0],S=Object(l.useCallback)((function(e){j((function(t){return[].concat(Object(C.a)(t),[e])}))}),[]),k=function(){var e=Object(a.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,j((function(e){return e.filter((function(e){return e.id!==t}))})),s(null),t){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,P(t);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),s(m.DELETE_COMMENT);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(a.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,p(!0),s(null),v(!1),t){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,w(t);case 8:n=e.sent,j(n),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),s(m.GET_COMMENTS);case 15:return e.prev=15,p(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){n&&M(n)}),[n]),Object(g.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(g.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[t.length&&Object(g.jsxs)("div",{className:"block",children:[Object(g.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(y.id,": ").concat(y.title)}),Object(g.jsx)("p",{"data-cy":"PostBody",children:y.body})]}),Object(g.jsxs)("div",{className:"block",children:[O&&Object(g.jsx)(T,{}),!O&&!u.length&&!c&&Object(g.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),!O&&c&&Object(g.jsx)(E,{error:c}),!O&&u.length>0&&!c&&Object(g.jsx)("p",{className:"title is-4",children:"Comments:"}),!O&&!c&&u.map((function(e){return Object(g.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(g.jsxs)("div",{className:"message-header",children:[Object(g.jsx)("a",{href:"mailto:".concat(e.email),"data-cy":"CommentAuthor",children:e.name}),Object(g.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return k(e.id)},children:"delete button"})]}),Object(g.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]},e.id)})),!O&&!N&&!c&&Object(g.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link","aria-label":"WriteCommentButton",onClick:function(){return v(!0)},children:"Write a comment"})]}),N&&Object(g.jsx)(_,{postId:n,onAdd:S,onError:s})]})})},I=function(e){var t=e.posts,n=e.postId,c=e.error,s=e.onError;return Object(g.jsx)("div",{"data-cy":"Sidebar",className:v()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":n}),children:Object(g.jsx)("div",{className:" tile is-child box is-success",children:n&&Object(g.jsx)(M,{posts:t,postId:n,error:c,onError:s})})})},U=function(){var e=Object(l.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(l.useState)(null),i=Object(r.a)(s,2),d=i[0],u=i[1],j=Object(l.useState)(null),b=Object(r.a)(j,2),h=b[0],O=b[1],p=Object(l.useState)(null),x=Object(r.a)(p,2),N=x[0],v=x[1],y=Object(l.useState)(!1),E=Object(r.a)(y,2),S=E[0],T=E[1],C=Object(l.useCallback)((function(e){v(e)}),[]),w=Object(l.useCallback)((function(e){u(e)}),[]),P=Object(l.useCallback)((function(e){O(e),u(null)}),[]),_=function(){var e=Object(a.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,T(!0),v(null),t){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,f(t);case 7:(n=e.sent).length||v(m.NO_POSTS),c(n),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),v(m.GET_POSTS);case 15:return e.prev=15,T(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){h&&_(h)}),[h]),Object(g.jsx)("main",{className:"section",children:Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"tile is-ancestor",children:[Object(g.jsx)(k,{posts:n,postId:d,selectedUserId:h,error:N,isLoading:S,onPost:w,onSelectUser:P,onError:C}),Object(g.jsx)(I,{posts:n,postId:d,error:N,onError:C})]})})})};s.a.render(Object(g.jsx)(U,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.a99d78f5.chunk.js.map