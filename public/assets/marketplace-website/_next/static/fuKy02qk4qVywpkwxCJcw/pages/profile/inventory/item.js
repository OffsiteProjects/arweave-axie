(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{dxC4:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/inventory/item",function(){return t("vjP5")}])},riDH:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var a=t("QBSY"),r=t("O94r"),o=t.n(r),l=t("jvFD"),i=t.n(l),c=t("7xIC"),s=t("ERkP"),m=t.n(s),d=t("EY8/"),f=t("MVkm"),u=t("VFD9"),v=t("+ZPu"),p=m.a.createElement,x=[{id:[v.a.ProfileDashboard],name:"Dashboard",link:"/profile/dashboard",icon:f.l},{id:[v.a.AxieInventory,v.a.LandInventory,v.a.ItemInventory],name:"Inventory",link:"/profile/inventory/axie",icon:f.y},{id:[v.a.OfferInventory],name:"Offers",link:"/profile/offer",icon:f.L},{id:[v.a.Activity],name:"Activity",link:"/profile/activity",icon:f.a}],y={width:280},b=function(){var e=Object(s.useState)(!1),n=e[0],t=e[1],r=Object(d.b)().profile,l=Object(v.c)(),m=Object(c.useRouter)(),b=Object(d.c)();return p("div",{className:"hidden md:flex flex-none border-gray-3 border-r",style:y},p(u.a,{open:n,onClose:function(){return t(!1)},dismissable:!0}),p("div",{className:"w-full flex flex-col pt-16 px-16"},p("div",{className:"rounded w-full pt-16 pb-20 px-12 border border-gray-3 text-center"},p("div",{className:"flex justify-center items-center"},p("div",{className:"flex items-center truncate"},r&&p("h4",{className:"mr-4 font-medium truncate h-24"},r.name),p("div",{onClick:function(e){e.preventDefault(),t(!0)},className:"hover:cursor-pointer"},p(a.Icon,{name:f.n,size:16,color:"var(--color-gray-2)"})))),r&&p("small",{className:"block mt-4 text-gray-2 font-medium truncate"},r.email)),p("div",{className:"flex-1 flex flex-col pt-16"},p("div",{className:"flex-1"},x.map((function(e){return p(i.a,{href:e.link,as:e.link,key:e.name},p("a",{className:o()("mt-4","px-16","py-12","rounded","flex","flex-row","items-center","cursor-pointer",{"bg-gray-3":l===e.id.find((function(e){return e===l}))})},p(a.Icon,{name:e.icon,color:"var(--color-white)"}),p("h6",{className:"ml-8 font-medium"},e.name)))}))),p("a",{onClick:function(e){e.preventDefault(),b(),m.push("/login","/login")},className:o()("mt-4","px-16","py-12","flex","flex-row","items-center","cursor-pointer","border-t","border-gray-3","text-danger-4")},p(a.Icon,{name:f.F,color:"currentColor"}),p("h6",{className:"ml-8 font-medium"},"Log out")))))}},vjP5:function(e,n,t){"use strict";t.r(n);var a=t("CZlo"),r=t.n(a),o=t("ERkP"),l=t.n(o),i=t("n8xw"),c=t("EY8/"),s=t("pE/j"),m=t("0tOg"),d=t("73my"),f=t("X60O"),u=t("riDH"),v=t("vGbk"),p=l.a.createElement,x={height:"calc(100vh - 53px)"};n.default=function(){var e=Object(c.b)().profile,n=i.b.Inventory;return p("div",null,p(s.a,{title:"Inventory | Axie Infinity"}),p(f.a,null),p("div",{style:{height:53}}),p("div",{className:"sm:flex sm:flex-row"},p(u.a,null),p("div",{className:"w-full overflow-y-auto",style:x},p("div",{className:"sticky sm:block p-0 md:px-36",style:{top:0,zIndex:2}},p(v.a,null)),p(d.a,{filterContext:n}),r()(e)||r()(e.addresses.loom)?p("div",{className:"flex-1 px-0 md:px-28 py-20"},p("div",{className:"p-4"},p("h6",null,"No items found"))):p("div",{className:"flex-1"},p(m.a,{context:n})))))}}},[["dxC4",1,2,0,3,5,7,6,8,9,10,23,24,28,4]]]);