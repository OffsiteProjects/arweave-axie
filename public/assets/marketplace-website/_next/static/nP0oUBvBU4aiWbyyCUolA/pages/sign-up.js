(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"5q+N":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sign-up",function(){return a("b1kL")}])},b1kL:function(e,t,a){"use strict";a.r(t);var n=a("QBSY"),r=a("jvFD"),c=a.n(r),i=a("7xIC"),s=a("ERkP"),o=a.n(s),l=a("pE/j"),u=a("X60O"),p=a("k9sC"),m=a.n(p),d=a("Dlp7"),g=a("1U1M"),h=a("2Lg3"),f=a.n(h),b=a("8GAN"),v=o.a.createElement,y=function(e){var t=e.setSignedUp,a=Object(s.useState)(""),r=a[0],c=a[1],i=Object(s.useState)(""),o=i[0],l=i[1],u=Object(s.useState)(!1),p=u[0],h=u[1],y=Object(s.useState)(""),w=y[0],x=y[1],N=Object(s.useState)(""),k=N[0],j=N[1],S=Object(g.c)(b.g),A=Object(d.a)(S,1)[0],E=function(e){return function(t){e(t.currentTarget.value),j("")}};return v("form",{className:"my-20 px-20 py-32 border border-gray-3 rounded bg-gray-4",onSubmit:function(e){var a,n,c;return m.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(h(!0),e.preventDefault(),i.prev=2,o===w){i.next=6;break}return j("Repeat password is not match"),i.abrupt("return");case 6:return i.next=8,m.a.awrap(A({variables:{email:r,password:o}}));case 8:if(a=i.sent,n=a.data,f()(n)){i.next=16;break}if(!n.createAccount.result){i.next=16;break}return localStorage.setItem("newAccount","true"),t(!0),i.abrupt("return");case 16:j("Could not sign up"),i.next=23;break;case 19:i.prev=19,i.t0=i.catch(2),c=i.t0.graphQLErrors[0].message,j(c);case 23:return i.prev=23,h(!1),i.finish(23);case 26:case"end":return i.stop()}}),null,null,[[2,19,23,26]])}},v(n.InputGroup,{fullWidth:!0,placeholder:"Email",value:r,required:!0,onChange:E(c)}),v("div",{className:"mt-16"}),v(n.InputGroup,{fullWidth:!0,placeholder:"Password",required:!0,type:"password",value:o,onChange:E(l)}),v("div",{className:"mt-16"}),v(n.InputGroup,{fullWidth:!0,placeholder:"Repeat password",required:!0,type:"password",value:w,onChange:E(x)}),v("div",{className:"mt-20"}),!f()(k)&&v("h6",{className:"pt-8 pb-4 text-danger-4 text-center"},k),v(n.Button,{loading:p,fullWidth:!0,intent:n.IntentType.Primary},v("h6",{className:"font-medium"},"Create Account")))},w=o.a.createElement,x={height:"calc(100vh - 52px)"},N={width:340};t.default=function(){var e=Object(i.useRouter)(),t=Object(s.useState)(!1),a=t[0],r=t[1];return w(o.a.Fragment,null,w(l.a,{title:"Sign Up | Axie Infinity"}),w(u.a,null),w("div",{className:"flex p-8 overflow-y-auto",style:x},a?w("div",{className:"m-auto"},w("img",{width:"360",height:"219",src:"/static/image/sign-up.png"}),w("div",{className:"mt-36 text-center"},w("h2",null,"Well done, almost there!"),w("h5",{className:"mt-12 mb-24 text-gray-1"},"Please check your email to activate the account before you can login"),w(n.Button,{onClick:function(){e.push("/login","/login")}},"Back to Login page"))):w("div",{className:"m-auto",style:N},w("h2",{className:"text-center"},"Create new account"),w(y,{setSignedUp:r}),w("div",{className:"text-center"},w("h6",{className:"inline"},"Already have account ?"),"\xa0",w(c.a,{href:"/login",as:"/login"},w("span",{className:"text-primary-3 cursor-pointer"},"Login"))))))}},"pE/j":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("aA+m"),r=a.n(n),c=a("ysqo"),i=a.n(c),s=a("ERkP"),o=a.n(s).a.createElement,l=function(e){var t=e.title,a=e.description,n=e.banner,c=e.children,s=r()(t,"Axie Marketplace"),l=r()(a,"Buy, sell and explore Axie Infinity in-game collectibles."),u=r()(n,"https://storage.googleapis.com/axie-cdn/banner.png");return o(i.a,null,c,o("title",null,s),o("meta",{name:"twitter:card",content:"summary"}),o("meta",{property:"og:site_name",content:"Axie Infinity Marketplace"}),o("meta",{name:"og:image",content:u}),o("meta",{property:"og:title",content:s}),o("meta",{name:"og:description",content:l}),o("meta",{property:"og:site_name",content:"Axie Infinity Marketplace"}))}}},[["5q+N",1,2,0,3,5,7,4]]]);