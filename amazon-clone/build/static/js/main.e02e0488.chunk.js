(this["webpackJsonpamazone-clone"]=this["webpackJsonpamazone-clone"]||[]).push([[0],{47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var a=c(3),n=c.n(a),s=c(25),i=c.n(s),r=(c(47),c(13)),o=(c(48),c(49),c(39)),l=c.n(o),j=c(40),d=c.n(j),u=c(20),m=c(2),h=Object(a.createContext)(),b=function(e){var t=e.reducer,c=e.initialState,n=e.children;return Object(m.jsx)(h.Provider,{value:Object(a.useReducer)(t,c),children:n})},O=function(){return Object(a.useContext)(h)},p=c(32),g=(p.a.initializeApp({apiKey:"AIzaSyDXod5mJ1LWR6PdC_C9mdTnOmxbJS8tO9E",authDomain:"clone-9f820.firebaseapp.com",projectId:"clone-9f820",storageBucket:"clone-9f820.appspot.com",messagingSenderId:"1047177826975",appId:"1:1047177826975:web:7be36f8f27087e7acf88aa",measurementId:"G-DMZ671GNN7"}).firestore(),p.a.auth());var x=function(){var e=O(),t=Object(r.a)(e,1)[0],c=t.basket,a=t.user;return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)(u.b,{to:"/",children:Object(m.jsx)("img",{className:"header_logo",alt:"amazone_logo",src:"https://pngimg.com/uploads/amazon/amazon_PNG11.png"})}),Object(m.jsxs)("div",{className:"header_search",children:[Object(m.jsx)("input",{type:"text",className:"header_search_input"}),Object(m.jsx)(l.a,{className:"header_search_icon"})]}),Object(m.jsxs)("div",{className:"header_nav",children:[Object(m.jsx)(u.b,{to:!a&&"/login",children:Object(m.jsxs)("div",{onClick:function(){a&&g.signOut()},className:"header_option",children:[Object(m.jsx)("span",{className:"header_option_line_one",children:a?"Hello ".concat(a.email.substring(0,a.email.lastIndexOf("@"))):"Hello Guest"}),Object(m.jsx)("span",{className:"header_option_line_two",children:a?"Sign Out":"Sign In"})]})}),Object(m.jsxs)("div",{className:"header_option",children:[Object(m.jsx)("span",{className:"header_option_line_one",children:"Returns"}),Object(m.jsx)("span",{className:"header_option_line_two",children:"& Orders"})]}),Object(m.jsxs)("div",{className:"header_option",children:[Object(m.jsx)("span",{className:"header_option_line_one",children:"Your"}),Object(m.jsx)("span",{className:"header_option_line_two",children:"Prime"})]}),Object(m.jsx)(u.b,{to:"/checkout",children:Object(m.jsxs)("div",{className:"header_option_basket",children:[Object(m.jsx)(d.a,{className:"basket_icon"}),Object(m.jsx)("span",{className:"header_option_line_two header_basket_count",children:null===c||void 0===c?void 0:c.length})]})})]})]})};c(61),c(62);var _=function(e){var t=e.id,c=e.title,a=e.image,n=e.price,s=e.rating,i=O(),o=Object(r.a)(i,2),l=(o[0],o[1]);return Object(m.jsxs)("div",{className:"product",children:[Object(m.jsxs)("div",{className:"product_info",children:[Object(m.jsx)("p",{children:c}),Object(m.jsxs)("p",{className:"product_price",children:[Object(m.jsx)("small",{children:"$"}),Object(m.jsx)("strong",{children:n})]}),Object(m.jsx)("div",{className:"product_rating",children:Array(s).fill().map((function(e,t){return Object(m.jsx)("p",{children:" \u2b50 "})}))})]}),Object(m.jsx)("img",{src:a,alt:""}),Object(m.jsx)("button",{onClick:function(){l({type:"ADD_TO_BASKET",item:{id:t,title:c,image:a,price:n,rating:s}})},children:"Add to Basket"})]})};var f=function(){return Object(m.jsx)("div",{className:"home",children:Object(m.jsxs)("div",{className:"home_container",children:[Object(m.jsx)("img",{className:"home_image",src:"https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/U599/JUNE/PC/2._CB667373073_.jpg",alt:""}),Object(m.jsxs)("div",{className:"home_row",children:[Object(m.jsx)(_,{title:"Mi 108 cm (43 Inches) 4K Ultra HD Android Smart LED TV 4X|L43M4-4AIN (Black)",price:399.99,image:"https://images-na.ssl-images-amazon.com/images/I/612oGaxp3DS._SX679_.jpg",rating:5}),Object(m.jsx)(_,{title:"AmazonBasics Security Safe - 0.5-Cubic Feet,Black(14.15 litres)",price:90.99,image:"https://images-na.ssl-images-amazon.com/images/I/718l03qCcJL._SX425_.jpg",rating:5})]}),Object(m.jsxs)("div",{className:"home_row",children:[Object(m.jsx)(_,{title:"HP Z3700 Wireless Mouse Silver",price:99.99,image:"https://images-na.ssl-images-amazon.com/images/I/61JJAJc%2BMgL._SY550_.jpg",rating:5}),Object(m.jsx)(_,{title:"OnePlus Nord CE 5G (Charcoal Ink, 12GB RAM, 256GB Storage)",price:49.99,image:"https://images-na.ssl-images-amazon.com/images/I/71LRBr1aLNS._SX679_.jpg",rating:5}),Object(m.jsx)(_,{title:"\r Adidas Men's Adivat M Running Shoe",price:10.99,image:"https://m.media-amazon.com/images/I/71kfO4VXDFL._AC_UL480_FMwebp_QL65_.jpg",rating:5})]}),Object(m.jsx)("div",{className:"home_row",children:Object(m.jsx)(_,{title:"HP Envy x360 Convertible Touchscreen 13.3-inch (33.78 cms) FHD Laptop (3rd Gen Ryzen 5 4500U/8GB/512GB SSD/Win 10 Home/Night Fall Black/1.32kg), 13-ay0045AU",price:999.99,image:"https://images-na.ssl-images-amazon.com/images/I/61nTgrUV%2BjL._SX522_.jpg",rating:5})})]})})},v=c(10);c(63),c(64);var N=function(e){var t=e.id,c=e.image,a=e.title,n=e.price,s=e.rating,i=O(),o=Object(r.a)(i,2),l=(o[0].basket,o[1]);return Object(m.jsxs)("div",{className:"checkout_product",children:[Object(m.jsx)("img",{className:"checkout_product_image",src:c,alt:""}),Object(m.jsxs)("div",{className:"checkout_product_info",children:[Object(m.jsx)("p",{className:"checkout_product_title",children:a}),Object(m.jsxs)("p",{className:"checkout_product_price",children:[Object(m.jsx)("small",{children:"$"}),Object(m.jsx)("strong",{children:n})]}),Object(m.jsx)("div",{className:"checkout_product_rating",children:Array(s).fill().map((function(e,t){return Object(m.jsx)("p",{children:" \u2b50 "})}))}),Object(m.jsx)("button",{onClick:function(){l({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Basket"})]})]})},k=c(41),S=c.n(k),C=(c(66),c(33)),A=c(22),y=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},B=function(e,t){switch(t.type){case"ADD_TO_BASKET":return Object(A.a)(Object(A.a)({},e),{},{basket:[].concat(Object(C.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),a=Object(C.a)(e.basket);return c>=0?a.splice(c,1):console.warn("Can't remove product (id: ".concat(t.id,") as its not in basket!")),Object(A.a)(Object(A.a)({},e),{},{basket:a});case"SET_USER":return Object(A.a)(Object(A.a)({},e),{},{user:t.user});default:return e}};var E=function(){var e=O(),t=Object(r.a)(e,2),c=t[0].basket;return t[1],Object(m.jsxs)("div",{className:"subtotal",children:[Object(m.jsx)(S.a,{renderText:function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("p",{children:["Subtotal (",null===c||void 0===c?void 0:c.length," items): ",Object(m.jsx)("strong",{children:e})]}),Object(m.jsxs)("small",{className:"subtotal_gift",children:[Object(m.jsx)("input",{type:"checkbox"}),"This order contains a gift"]})]})},decimalScale:2,value:y(c),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(m.jsx)("button",{children:"Proceed to Checkout"})]})};var I=function(){var e=O(),t=Object(r.a)(e,2),c=t[0],a=c.basket,n=c.user;return t[1],Object(m.jsxs)("div",{className:"checkout",children:[Object(m.jsxs)("div",{className:"checkout_left",children:[Object(m.jsx)("img",{className:"checkout_ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("h3",{children:["Hello, ",null===n||void 0===n?void 0:n.email.substring(0,n.email.lastIndexOf("@"))]}),Object(m.jsx)("h2",{className:"checkout_title",children:"Your Shopping Basket"}),a.map((function(e){return Object(m.jsx)(N,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(m.jsx)("div",{className:"checkout_right",children:Object(m.jsx)(E,{})})]})};c(67);var z=function(){var e=Object(v.f)(),t=Object(a.useState)(""),c=Object(r.a)(t,2),n=c[0],s=c[1],i=Object(a.useState)(""),o=Object(r.a)(i,2),l=o[0],j=o[1];return Object(m.jsxs)("div",{className:"login",children:[Object(m.jsx)(u.b,{to:"/",children:Object(m.jsx)("img",{className:"login_logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:""})}),Object(m.jsxs)("div",{className:"login_container",children:[Object(m.jsx)("h1",{children:"Sign-In"}),Object(m.jsxs)("form",{children:[Object(m.jsx)("h5",{children:"E-mail"}),Object(m.jsx)("input",{type:"text",value:n,onChange:function(e){return s(e.target.value)}}),Object(m.jsx)("h5",{children:"Password"}),Object(m.jsx)("input",{type:"password",value:l,onChange:function(e){return j(e.target.value)}}),Object(m.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),g.signInWithEmailAndPassword(n,l).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login_signin_button",children:"Sign In"})]}),Object(m.jsx)("p",{children:"By continuing, you agree to Amazon clone's Conditions of Use and Privacy Notice."}),Object(m.jsx)("button",{onClick:function(t){t.preventDefault(),g.createUserWithEmailAndPassword(n,l).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login_register_button",children:"Create your Amazon account"})]})]})};var w=function(){var e=O(),t=Object(r.a)(e,2),c=(t[0].user,t[1]);return Object(a.useEffect)((function(){g.onAuthStateChanged((function(e){console.log(e),c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(m.jsx)(u.a,{children:Object(m.jsx)("div",{className:"app",children:Object(m.jsxs)(v.c,{children:[Object(m.jsx)(v.a,{path:"/login",children:Object(m.jsx)(z,{})}),Object(m.jsxs)(v.a,{path:"/checkout",children:[Object(m.jsx)(x,{}),Object(m.jsx)(I,{})]}),Object(m.jsxs)(v.a,{path:"/",children:[Object(m.jsx)(x,{}),Object(m.jsx)(f,{})]})]})})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,81)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(b,{initialState:{basket:[],user:null},reducer:B,children:Object(m.jsx)(w,{})})}),document.getElementById("root")),T()}},[[69,1,2]]]);
//# sourceMappingURL=main.e02e0488.chunk.js.map