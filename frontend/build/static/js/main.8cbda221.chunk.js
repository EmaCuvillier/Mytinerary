(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(23),s=a.n(c),i=(a(61),a(8)),o=a(31),l=a(32),u=a(35),d=a(34),j=a(6),b=a(19),m=a(7),p=a(2),h=a.n(p),O=a(4),x=a(11),g=a.n(x),v=a(54),f=a.n(v),N={crearUsuario:function(e){return function(){var t=Object(O.a)(h.a.mark((function t(a,r){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.post("http://localhost:4000/api/users/signup",e);case 2:if((n=t.sent).data.success){t.next=5;break}return t.abrupt("return",n.data.errores);case 5:a({type:"LOG_USER",payload:n.data.success?n.data.respuesta:null});case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},loguearUsuario:function(e){return function(){var t=Object(O.a)(h.a.mark((function t(a,r){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.post("http://localhost:4000/api/users/login",e);case 2:(n=t.sent).data.success||f.a.fire({icon:"error",title:"Oops...",text:n.data.error}),a({type:"LOG_USER",payload:n.data.success?n.data.respuesta:null});case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},desloguearUsuario:function(){return function(e,t){e({type:"LOGOUT_USER"})}},loginForzadoPorLS:function(e){return function(){var t=Object(O.a)(h.a.mark((function t(a,r){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.get("http://localhost:4000/api/users/loginLs",{headers:{Authorization:"Bearer "+e.token}});case 3:n=t.sent,a({type:"LOG_USER",payload:Object(i.a)(Object(i.a)({},n.data.respuesta),{},{token:e.token})}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,a){return t.apply(this,arguments)}}()}},y=a(0),k={desloguearUsuario:N.desloguearUsuario},C=Object(m.b)((function(e){return{userLogged:e.usersReducer.userLogged}}),k)((function(e){var t=e.userLogged?e.userLogged.picture:"../assets/baseline_person_white_24dp.png",a=e.userLogged?e.userLogged.firstName:"";return Object(y.jsxs)("nav",{children:[Object(y.jsxs)("div",{className:"containerNav",children:[Object(y.jsx)("div",{className:"logoNavbar",style:{display:"flex"},children:Object(y.jsxs)("h3",{className:"logo pointer",children:["MY",Object(y.jsx)("span",{children:"tinerary."})]})}),Object(y.jsx)("div",{className:"direccionesNav",children:Object(y.jsxs)("div",{className:"navTodas",children:[Object(y.jsxs)("div",{className:"homeYcitiesNav",children:[Object(y.jsx)(j.c,{exact:!0,to:"/",children:Object(y.jsx)("p",{className:"direccionNav",children:"Home"})}),Object(y.jsx)(j.c,{exact:!0,to:"/cities",children:Object(y.jsx)("p",{className:"direccionNav",children:"Cities"})})]}),Object(y.jsxs)("div",{className:"nombreFotoUsuarioNav",children:[!e.userLogged&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(j.c,{exact:!0,to:"/signup",children:Object(y.jsx)("p",{className:"direccionNav",children:"Sign Up"})}),Object(y.jsx)(j.c,{exact:!0,to:"/login",children:Object(y.jsx)("p",{className:"direccionNav",children:"Log in"})})]}),e.userLogged&&Object(y.jsx)("h3",{className:"direccionNav pointer",onClick:e.desloguearUsuario,children:"Log Out"}),Object(y.jsx)("p",{className:"nombreUsuarioNav",children:e.userLogged&&"Hi ".concat(a,"!")}),Object(y.jsx)(j.c,{exact:!0,to:"/user",children:Object(y.jsx)("div",{className:"imagenUsuarioNav pointer",style:{backgroundImage:"url('".concat(t,"')")}})})]})]})})]}),Object(y.jsx)("div",{className:"menuHamburguesa",children:Object(y.jsxs)("nav",{children:[Object(y.jsx)("input",{type:"checkbox",id:"check"}),Object(y.jsx)("label",{htmlFor:"check",className:"checkbtn",children:Object(y.jsx)(b.d,{})}),Object(y.jsx)("div",{className:"imagenUsuarioHamburguesa pointer",style:{backgroundImage:"url('".concat(t,"')")}}),Object(y.jsxs)("ul",{className:"listaHamburguesa",children:[Object(y.jsx)("li",{children:Object(y.jsx)(j.c,{exact:!0,to:"/",children:Object(y.jsx)("p",{className:"navHamburguesa",children:"Home"})})}),Object(y.jsx)("li",{children:Object(y.jsx)(j.c,{exact:!0,to:"/cities",children:Object(y.jsx)("p",{className:"navHamburguesa",children:"Cities"})})}),!e.userLogged&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("li",{children:Object(y.jsx)(j.c,{exact:!0,to:"/signup",children:Object(y.jsx)("p",{className:"navHamburguesa",children:"Sign Up"})})}),Object(y.jsx)("li",{children:Object(y.jsx)(j.c,{exact:!0,to:"/login",children:Object(y.jsx)("p",{className:"navHamburguesa",children:"Log In"})})})]}),e.userLogged&&Object(y.jsx)("p",{className:"navHamburguesaLogOut pointer",onClick:e.desloguearUsuario,children:"LOG OUT"}),Object(y.jsx)("li",{children:Object(y.jsxs)("h3",{className:"logoHamburguesa",children:["MY",Object(y.jsx)("span",{children:"tinerary."})]})})]})]})})]})})),I=function(){return Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{className:"big-title sloganHeader",children:Object(y.jsx)("span",{className:"spanCity",children:"MYTINERARY."})}),Object(y.jsx)("h4",{className:"subtitleHome",children:"Find your perfect trip, designed by insiders who know and love their cities!"})]}),Object(y.jsx)("div",{className:"shadowHeader"})]})},w=function(){return Object(y.jsxs)("header",{children:[Object(y.jsx)(C,{}),Object(y.jsx)("div",{className:"heroHome",children:Object(y.jsx)(I,{})}),Object(y.jsx)("div",{className:"headerHome",style:{backgroundImage:'url("./assets/pruebaportada.png")'}})]})},L=function(){return Object(y.jsx)("div",{children:Object(y.jsxs)("div",{className:"callToAction",children:[Object(y.jsx)("div",{className:"imagenCall",style:{backgroundImage:"url('./assets/familiacomputadora.jpg')"}}),Object(y.jsxs)("div",{className:"textoCall",children:[Object(y.jsx)("h4",{className:"tituloCallToAction",children:"Looking for itineraries?"}),Object(y.jsx)("h4",{className:"textoCallToAction",children:"The best trip is always the next..."}),Object(y.jsx)(j.b,{to:"/cities",children:Object(y.jsx)("button",{className:"botonCallToAction","data-hover":"click me!",children:Object(y.jsxs)("div",{children:["Cities",Object(y.jsx)(b.e,{className:"iconoCallToAction"})]})})})]})]})})},U=function(e){var t=e.city;return Object(y.jsx)("div",{className:"cadaDivCarousel",style:{backgroundImage:"url('./assets/".concat(t.image,"')")},children:Object(y.jsx)("h1",{children:t.name})})},S=function(e){var t=e.ciudades;return Object(y.jsx)("div",{className:"carousel-cell",children:t.map((function(e){return Object(y.jsx)(U,{city:e},e.name)}))})},A=a(55),R=a.n(A),F=(a(99),function(){var e=[[{id:1,name:"Hong Kong",image:"hongkong.jpg"},{id:2,name:"Bangkok",image:"bangkok.jpg"},{id:3,name:"London",image:"london.jpg"},{id:4,name:"Sydney",image:"sydney.jpg"}],[{id:5,name:"Singapore",image:"singapore.jpg"},{id:6,name:"Paris",image:"paris.jpg"},{id:7,name:"Dubai",image:"dubai.jpg"},{id:8,name:"New York",image:"newyork.jpg"}],[{id:9,name:"Kuala Lumpur",image:"kualalumpur.jpg"},{id:10,name:"Istanbul",image:"istanbul.jpg"},{id:11,name:"Rome",image:"rome.jpg"},{id:12,name:"Miami",image:"miami.jpg"}]],t=e.map((function(e){return e.slice(0,2)})),a=e.map((function(e){return e.slice(2,5)})),r=t.concat(a);return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h1",{className:"tituloCarousel",children:"Popular MYtineraries"}),Object(y.jsx)(R.a,{className:"carousel",elementType:"div",options:{initialIndex:1,pageDots:!0,wrapAround:!0,autoPlay:4e3,adaptiveHeight:!0},disableImagesLoaded:!1,reloadOnUpdate:!0,static:!0,children:window.screen.width<858?r.map((function(e,t){return Object(y.jsx)(S,{ciudades:e},t)})):e.map((function(e,t){return Object(y.jsx)(S,{ciudades:e},t)}))})]})}),D=function(){return Object(y.jsxs)("main",{children:[Object(y.jsx)(L,{}),Object(y.jsx)(F,{})]})},E=function(){return Object(y.jsxs)("footer",{children:[Object(y.jsx)("div",{className:"logoFooter",children:Object(y.jsxs)("h3",{className:"logo pointer",children:["MY",Object(y.jsx)("span",{children:"tinerary."})]})}),Object(y.jsxs)("div",{className:"socialNavigationFooter",children:[Object(y.jsxs)("div",{className:"socialFooter",children:[Object(y.jsx)("h3",{className:"tituloSeccionFooter",children:"Social"}),Object(y.jsxs)("div",{children:[Object(y.jsx)(b.b,{className:"iconoFooter pointer"}),Object(y.jsx)(b.a,{className:"iconoFooter pointer"}),Object(y.jsx)(b.c,{className:"iconoFooter pointer"})]})]}),Object(y.jsxs)("div",{className:"navigationFooter",children:[Object(y.jsx)("h3",{className:"tituloSeccionFooter",children:"Site Map"}),Object(y.jsx)(j.b,{exact:!0,to:"/",children:Object(y.jsx)("p",{className:"direccionFooter pointer",children:"Home"})}),Object(y.jsx)(j.b,{exact:!0,to:"/cities",children:Object(y.jsx)("p",{className:"direccionFooter pointer",children:"Cities"})})]})]}),Object(y.jsxs)("div",{className:"newsletterSuscripcionFooter",children:[Object(y.jsx)("h3",{className:"tituloSeccionFooter",children:"Newsletter Suscription"}),Object(y.jsxs)("form",{children:[Object(y.jsx)("input",{className:"inputFooter",type:"text",placeholder:"Subscribe to our newsletter"}),Object(y.jsx)("button",{className:"botonFooter pointer",children:"Subscribe"})]})]})]})},P=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(w,{}),Object(y.jsx)(D,{}),Object(y.jsx)(E,{})]})}}]),a}(n.a.Component),_=function(){return Object(y.jsx)("header",{className:"headerCities",style:{backgroundImage:"url('./assets/opcion3.jpg')"},children:Object(y.jsx)("h1",{className:"big-title",children:Object(y.jsx)("span",{className:"spanCity",children:"MYTINERARY."})})})},T=(a(100),function(e){var t=e.city;return Object(y.jsxs)("div",{className:"blog-card",style:{backgroundImage:"url('./assets/".concat(t.image,"'")},children:[Object(y.jsxs)("div",{className:"title-content",children:[Object(y.jsx)("h3",{className:"nameCity",children:t.name}),Object(y.jsxs)("div",{className:"intro",children:[" ",Object(y.jsx)("p",{children:t.country})," "]})]}),Object(y.jsx)("div",{className:"card-info",children:Object(y.jsx)("p",{children:t.description})})]})}),H=void 0,M={pedirTodasCiudades:function(){return function(e,t){g.a.get("http://localhost:4000/api/ciudades").then((function(t){return e({type:"CARGAR_CIUDADES",payload:t.data.respuesta})})).catch((function(e){return H.props.history.push("/errorServer")}))}},filtrarCiudades:function(e){return function(t,a){t({type:"FILTRAR_CIUDADES",payload:e})}}},Y={filtrarCiudades:M.filtrarCiudades},z=Object(m.b)((function(e){return{ciudades:e.citiesReducer.ciudadesAMostrar}}),Y)((function(e){var t=e.ciudades,a=e.filtrarCiudades;return Object(y.jsxs)("main",{className:"mainCities",children:[Object(y.jsxs)("div",{className:"buscadorCiudades",children:[Object(y.jsx)("h3",{className:"callCity",children:"Take a look at these cities!"}),Object(y.jsxs)("form",{action:"",className:"search-bar",children:[Object(y.jsx)("input",{type:"search",name:"search",pattern:".*\\S.*",required:!0,onChange:function(e){return a(e.target.value)}}),Object(y.jsx)("button",{className:"search-btn",children:Object(y.jsx)("span",{children:"Search"})})]})]}),Object(y.jsx)("div",{className:"contenedorCiudades",children:t.length>0?t.map((function(e){return Object(y.jsx)(j.b,{to:"/itinerary/".concat(e._id),children:Object(y.jsx)(T,{city:e},e._id)},e.name)})):Object(y.jsx)("div",{className:"sinCoincidencia",style:{backgroundImage:"url('./assets/aeropuertoCerrado.jpg')"},children:Object(y.jsx)("h1",{className:"fraseSinCoincidencia",children:"No Match"})})})]})})),B=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),this.props.cargarCiudades()}},{key:"render",value:function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)(C,{}),Object(y.jsx)(_,{}),Object(y.jsx)(z,{ciudades:this.props.ciudades}),Object(y.jsx)(E,{})]})}}]),a}(n.a.Component),G={cargarCiudades:M.pedirTodasCiudades},q=Object(m.b)((function(e){return{ciudades:e.citiesReducer.cities}}),G)(B),J=a(9),V=a(12),K=a(13),W=function(e){var t=e.activities;return Object(y.jsxs)("div",{className:"containerActivities",id:"activitiesResponsive",children:[Object(y.jsx)("div",{className:"tituloActivities",children:Object(y.jsxs)("h2",{children:["Activities ",Object(y.jsx)(V.a,{className:"iconoTituloActivities",icon:K.e})]})}),Object(y.jsx)("div",{className:"mostarLasActivities",children:Object(y.jsx)("div",{className:"carousel-wrapper-Activities",id:"contenedorActivitiesResponsive",children:Object(y.jsx)("div",{className:"carousel-container-Activities",id:"carouselContendorResponsive",children:Object(y.jsx)("div",{className:"carousel-Activities",children:t.length>0&&t.map((function(e,t){return Object(y.jsx)("div",{className:"image-one",style:{backgroundImage:"url('".concat(e.activityPic,"')")},children:Object(y.jsx)("p",{className:"tituloActivityCarousel",children:e.title})},t)}))})})})})]})},Q={crearComentario:function(e,t,a){return function(){var r=Object(O.a)(h.a.mark((function r(n,c){var s;return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,g.a.post("http://localhost:4000/api/itinerario/comentario/"+e,{comment:t},{headers:{Authorization:"Bearer "+a}});case 2:if(!(s=r.sent)){r.next=5;break}return r.abrupt("return",s.data.respuesta);case 5:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},editarUnComentario:function(e,t,a){return function(){var r=Object(O.a)(h.a.mark((function r(n,c){var s;return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,g.a.put("http://localhost:4000/api/itinerario/comentario/"+e,{comment:a},{headers:{Authorization:"Bearer "+t}});case 2:if(!(s=r.sent)){r.next=5;break}return r.abrupt("return",s.data);case 5:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},eliminarUnComentario:function(e,t){return function(){var a=Object(O.a)(h.a.mark((function a(r,n){var c;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.a.delete("http://localhost:4000/api/itinerario/comentario/"+e,{headers:{Authorization:"Bearer "+t}});case 2:if(!(c=a.sent)){a.next=5;break}return a.abrupt("return",c.data);case 5:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()}},X=Object(m.b)((function(e){return{userLogged:e.usersReducer.userLogged}}))((function(e){var t=e.comentario,a=e.userLogged,n=e.borrarComentario,c=e.editarComentario,s=e.comentariosDelUsuario,i=Object(r.useState)(t.comment),o=Object(J.a)(i,2),l=o[0],u=o[1],d=Object(r.useState)([]),j=Object(J.a)(d,2),b=j[0],m=j[1];Object(r.useEffect)((function(){s.length>0&&m(s)}));var p=b.some((function(e){return e===t._id})),h=Object(r.useState)(!1),O=Object(J.a)(h,2),x=O[0],g=O[1],v={display:x?"flex":"none"},f={display:x?"none":"flex"},N=Object(r.useState)(!1),k=Object(J.a)(N,2),C=k[0],I=k[1],w={display:C?"flex":"none"},L={display:C?"none":"flex"};return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:"cadaComentario ",children:[Object(y.jsx)("div",{className:"fotoComentario",children:Object(y.jsx)("div",{className:"imagenUsuarioEnComentario",style:{backgroundImage:"url('".concat(t.userId.picture,"')")}})}),Object(y.jsxs)("div",{className:"contenidoDelComentario",children:[Object(y.jsxs)("div",{className:"nombreYComentario",children:[Object(y.jsxs)("p",{className:"nombreEnComentario",children:[t.userId.firstName," :"]}),Object(y.jsx)("p",{className:"textoComentario",style:f,children:t.comment}),p&&Object(y.jsx)("input",{type:"text",value:l,onChange:function(e){var t=e.target.value;u(t)},style:v})]}),Object(y.jsx)("div",{children:p&&Object(y.jsxs)("div",{className:"borrarEditarComentario",children:[Object(y.jsx)("p",{onClick:function(){return c(t._id,a.token,l)},children:Object(y.jsx)(V.a,{onClick:function(){return g(!x)},style:v,className:"confirmarEdicion",icon:K.a})}),Object(y.jsx)("p",{children:Object(y.jsx)(V.a,{onClick:function(){return g(!x)},className:"cancelarEdicion",icon:K.j,style:v})}),Object(y.jsx)("p",{style:f,onClick:function(){return g(!x)},children:Object(y.jsx)(V.a,{style:L,icon:K.f,className:"iconoEditar"})}),Object(y.jsx)("p",{style:f,onClick:function(){return I(!C)},children:Object(y.jsx)(V.a,{style:L,className:"iconoBorrar",icon:K.k})}),Object(y.jsxs)("div",{style:w,children:[Object(y.jsx)("p",{className:"textoPreguntaEliminar",children:"Are you sure you want to delete?"}),Object(y.jsx)(V.a,{onClick:function(){return n(t._id,a.token)},className:"confirmarEdicion",icon:K.a}),Object(y.jsx)(V.a,{onClick:function(){return I(!C)},className:"cancelarEdicion",icon:K.j})]})]})})]})]})})})),Z={likearItinerario:function(e,t){return function(){var a=Object(O.a)(h.a.mark((function a(r,n){var c;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.a.get("http://localhost:4000/api/itinerario/like/"+e,{headers:{Authorization:"Bearer "+t}});case 2:return c=a.sent,a.abrupt("return",c);case 4:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()},verificarLike:function(e,t){return function(){var a=Object(O.a)(h.a.mark((function a(r,n){var c;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.a.get("http://localhost:4000/api/itinerario/likecomentario/"+e,{headers:{Authorization:"Bearer "+t}});case 2:return c=a.sent,a.abrupt("return",c);case 4:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()}},$=a(21),ee=(a(39),{crearComentario:Q.crearComentario,eliminarUnComentario:Q.eliminarUnComentario,editarUnComentario:Q.editarUnComentario,verificarLike:Z.verificarLike}),te=Object(m.b)((function(e){return{userLogged:e.usersReducer.userLogged,itinerarios:e.itinerarioReducer.itinerarios}}),ee)((function(e){var t=e.setModal,a=e.tostada,n=e.userLogged,c=e.itinerary,s=e.crearComentario,i=e.eliminarUnComentario,o=e.editarUnComentario,l=e.comentarios,u=e.verificarLike,d=Object(r.useState)(""),j=Object(J.a)(d,2),b=j[0],m=j[1],p=Object(r.useState)([]),x=Object(J.a)(p,2),g=x[0],v=x[1],f=Object(r.useState)([]),N=Object(J.a)(f,2),k=N[0],C=N[1];Object(r.useEffect)((function(){v(c.comments),C(l)}),[c,l]);if(n)var I=n.token;var w=function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(c._id,I);case 2:t=e.sent,C(t.data.comentarios);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=13;break}if(""!==b&&" "!==b){e.next=5;break}$.b.error("Cannot send an empty comment",a),e.next=11;break;case 5:return e.next=7,s(c._id,b,n.token);case 7:t=e.sent,v(t.comments),m(""),w();case 11:e.next=14;break;case 13:$.b.error("You must be logged in",a);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(O.a)(h.a.mark((function e(t,a){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=5;break}return e.next=3,i(t,a);case 3:r=e.sent,v(r.respuesta.comments);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),S=function(){var e=Object(O.a)(h.a.mark((function e(t,a,r){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(t,a,r);case 2:(n=e.sent).success?v(n.respuesta.comments):console.log("no se puede editar");case 4:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}();return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:"contenedorComments",id:"contenedorCommentsResponsive",children:[Object(y.jsx)("p",{className:"cerrarPopUp",onClick:function(){return t()},children:Object(y.jsx)(V.a,{icon:K.i})}),Object(y.jsxs)("h2",{className:"tituloComments",children:["Comments",Object(y.jsx)(V.a,{className:"iconoTituloComentario",icon:K.c})]}),Object(y.jsx)("div",{className:"cajaDeComentarios",children:g.map((function(e,t){return Object(y.jsx)(X,{comentariosDelUsuario:k,editarComentario:S,borrarComentario:U,comentario:e},t)}))}),Object(y.jsxs)("div",{className:"divEnviarComentario",children:[Object(y.jsx)("input",{type:"text",className:"inputIngresarComentario",placeholder:"Leave a message...",value:b,onChange:function(e){var t=e.target.value;m(t)}}),Object(y.jsx)("p",{onClick:function(){return L()},children:Object(y.jsx)(V.a,{className:"botonEnviarComentario",icon:K.h})})]})]})})})),ae=(a(103),{pedirActividadesPorItinerario:{pedirActividadesPorItinerario:function(e){return function(){var t=Object(O.a)(h.a.mark((function t(a,r){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("http://localhost:4000/api/itinerario/actividad/"+e);case 2:if(!(n=t.sent).data.success){t.next=5;break}return t.abrupt("return",n.data.respuesta);case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}}.pedirActividadesPorItinerario,likearItinerario:Z.likearItinerario,verificarLike:Z.verificarLike}),re=Object(m.b)((function(e){return{userLogged:e.usersReducer.userLogged}}),ae)((function(e){var t=e.itinerary,a=e.pedirActividadesPorItinerario,n=e.userLogged,c=e.likearItinerario,s=e.verificarLike,i=function(e){for(var t=[],a=0;a<e;a++)t.push("priceAndDuration");return t};if(n)var o=n.token;var l=Object(r.useState)(!1),u=Object(J.a)(l,2),d=u[0],j=u[1],b={display:d?"flex":"none"},m=Object(r.useState)([]),p=Object(J.a)(m,2),x=p[0],g=p[1];Object(r.useEffect)((function(){d&&v()}),[d]);var v=function(){var e=Object(O.a)(h.a.mark((function e(){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(t._id);case 2:r=e.sent,g(r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=Object(r.useState)(t.likes),N=Object(J.a)(f,2),k=N[0],C=N[1],I=function(){var e=Object(O.a)(h.a.mark((function e(){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=8;break}return A(!S),e.next=4,c(t._id,o);case 4:a=e.sent,C(a.data.respuesta),e.next=9;break;case 8:$.b.error("You must be logged in",w);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w={position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0},L=Object(r.useState)(!1),U=Object(J.a)(L,2),S=U[0],A=U[1],R={color:S?"red":"rgba(128, 128, 128, 0.767)"},F=Object(r.useState)([]),D=Object(J.a)(F,2),E=D[0],P=D[1],_=function(){var e=Object(O.a)(h.a.mark((function e(){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(t._id,o);case 2:a=e.sent,A(a.data.liked),P(a.data.comentarios);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){n&&_()}),[]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:"divItinerarios",id:"divItinerarios",style:{display:d?"none":"block"},children:[Object(y.jsxs)("div",{className:"parteUsuario",children:[Object(y.jsx)("div",{className:"contenedorImagen",children:Object(y.jsx)("div",{className:"imagenUsuario",id:"imagenUsuario",style:{backgroundImage:"url('".concat(t.authorPic,"')")}})}),Object(y.jsxs)("div",{className:"espacioUsuario",id:"espacioUsuario",children:[Object(y.jsx)("h3",{className:"nombreUsuarioItinerario",id:"nombreUsuarioItinerario",children:t.authorName}),Object(y.jsx)("h2",{className:"nombreDelItinerario",id:"titleItinerario",children:t.title})]})]}),Object(y.jsxs)("div",{className:"todoContenidoItinerario",children:[Object(y.jsxs)("div",{className:"infoItinerario",children:[Object(y.jsxs)("div",{className:"precioDiv",children:[Object(y.jsx)("p",{children:"Price: "}),i(t.price).map((function(e,t){return Object(y.jsx)(V.a,{className:"billetesItinerario",icon:K.g},t)}))]}),Object(y.jsxs)("div",{className:"durationDiv",children:[Object(y.jsx)("p",{children:"Duration:"}),i(t.duration).map((function(e,t){return Object(y.jsx)(V.a,{className:"relojesItinerario",icon:K.b},t)}))]}),Object(y.jsxs)("div",{className:"likesDiv",children:[Object(y.jsx)(V.a,{icon:K.d,style:R,className:"corazon",onClick:I}),Object(y.jsx)("p",{children:k})]})]}),Object(y.jsx)("div",{className:"hashtags",children:t.hashtag.map((function(e,t){return Object(y.jsxs)("p",{className:"hashtag",children:["#",e]},t)}))}),Object(y.jsx)("div",{className:"viewMore",onClick:function(){return j(!d)},children:b.display?"View More":"View Less"})]})]}),Object(y.jsx)($.a,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(y.jsxs)("div",{className:"activityComment",style:b,children:[Object(y.jsx)(W,{activities:x}),Object(y.jsx)(te,{tostada:w,setModal:j,verificarLikeComentario:_,itinerary:t,comentarios:E})]})]})})),ne=function(e){var t=e.city,a=e.itineraries;return Object(y.jsxs)("main",{className:"mainItinerary",children:[Object(y.jsxs)("div",{className:"headerMainItinerary",children:[Object(y.jsx)("div",{className:"headerMobile",style:{backgroundImage:"url('../assets/".concat(t[0].image,"')")}}),Object(y.jsxs)("div",{className:"fotoCiudadItinerary",children:[Object(y.jsx)("div",{className:"d1",style:{backgroundImage:"url('../assets/".concat(t[0].image,"')")}}),Object(y.jsx)("div",{className:"d2",style:{backgroundImage:"url('../assets/".concat(t[0].image,"')")}}),Object(y.jsx)("div",{className:"d3",style:{backgroundImage:"url('../assets/".concat(t[0].image,"')")},children:Object(y.jsx)("div",{className:"nameCityPort",children:t[0].name})}),Object(y.jsx)("div",{className:"d4",style:{backgroundImage:"url('../assets/".concat(t[0].image,"')")}})]})]}),Object(y.jsx)("div",{className:"contenedorItinerarios",children:a.length>0?a.map((function(e){return Object(y.jsx)(re,{itinerary:e},e._id)})):Object(y.jsxs)("div",{className:"sinItinerarios",style:{backgroundImage:'url("../assets/sinItinerarios.jpg")'},children:[Object(y.jsx)("h3",{className:"textoSinItinearios1",children:"We don't have any itineraries yet, but you can make the first one!"}),Object(y.jsx)("h3",{className:"textoSinItinearios2",children:" Or...go back to see more cities!"})]})}),Object(y.jsx)(j.b,{to:"/cities",children:Object(y.jsx)("button",{className:"botonCallToAction","data-hover":"click me!",children:Object(y.jsxs)("div",{children:["Cities",Object(y.jsx)(b.e,{className:"iconoCallToAction"})]})})})]})},ce=void 0,se={pedirItinerariosPorCiudad:{pedirItinerariosPorCiudad:function(e){return function(t,a){g.a.get("http://localhost:4000/api/itinerarios/"+e).then((function(e){return t({type:"PEDIR_ITINERARIO",payload:e.data.respuesta})})).catch((function(e){return ce.props.history.push("/errorServer")}))}}}.pedirItinerariosPorCiudad},ie=Object(m.b)((function(e){return{ciudades:e.citiesReducer.cities,itinerarios:e.itinerarioReducer.itinerarios}}),se)((function(e){Object(r.useEffect)((function(){window.scrollTo(0,0),e.pedirItinerariosPorCiudad(e.match.params.id)}),[]);var t=e.match.params.id,a=e.ciudades.filter((function(e){return t==e._id}));return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(C,{}),Object(y.jsx)(ne,{city:a,itineraries:e.itinerarios}),Object(y.jsx)(E,{})]})})),oe=a(10),le=function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{className:"serverError",style:{backgroundImage:"url('./assets/serverError.jpg')"},children:Object(y.jsx)(j.b,{to:"/",children:"Home"})})})},ue=a(25),de=a(33),je=a.n(de),be={crearUsuario:N.crearUsuario},me=Object(m.b)(null,be)((function(e){var t=Object(r.useState)({firstName:"",lastName:"",email:"",password:"",picture:"",country:""}),a=Object(J.a)(t,2),n=a[0],c=a[1],s=Object(r.useState)([]),o=Object(J.a)(s,2),l=o[0],u=o[1],d=Object(r.useState)([]),b=Object(J.a)(d,2),m=b[0],p=b[1];Object(r.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json().then((function(e){return p(e)}))}))}),[]);var x=function(e){var t=e.target.name,a=e.target.value;c(Object(i.a)(Object(i.a)({},n),{},Object(ue.a)({},t,a)))},g=function(){var t=Object(O.a)(h.a.mark((function t(){var a,r,c,s,i=arguments;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=i.length>0&&void 0!==i[0]?i[0]:null,r=i.length>1&&void 0!==i[1]?i[1]:null,a&&a.preventDefault(),c=a?n:r,t.next=6,e.crearUsuario(c);case 6:(s=t.sent)&&u(s.details);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(e){var t=e.profileObj,a=t.givenName,r=t.email,n=t.googleId,c=t.imageUrl;g(null,{firstName:a,lastName:"google",email:r,password:"a"+n,picture:c,country:"google"})},f=function(e){var t=l.filter((function(t){return t.context.label===e}));return Object(y.jsx)("p",{className:"errorInput",children:t.length>0&&t[0].message})};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(C,{}),Object(y.jsx)("main",{id:"mainSignUp",style:{background:'url("https://www.xtrafondos.com/descargar.php?id=3341&resolucion=3840x2160")'},children:Object(y.jsxs)("div",{className:"contenedorSignUp",children:[Object(y.jsxs)("div",{className:"mitadIzquierda",children:[Object(y.jsx)("h2",{className:"tituloRegistro",children:"Sign Up"}),Object(y.jsxs)("div",{className:"callRegistro",children:[Object(y.jsx)("h4",{children:"Already have an account?"}),Object(y.jsx)(j.c,{exact:!0,to:"/login",children:Object(y.jsx)("p",{className:"direccionNav redireccionRegistro",children:"Log in here!"})})]}),Object(y.jsxs)("h3",{className:"logo pointer",children:["MY",Object(y.jsx)("span",{children:"tinerary."})]})]}),Object(y.jsx)("div",{className:"mitadDerecha",children:Object(y.jsxs)("div",{className:"form-style-8",children:[Object(y.jsx)("h2",{children:"Create account"}),Object(y.jsxs)("form",{className:"formUsuario",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("input",{type:"text",name:"firstName",placeholder:"First Name",value:n.firstName,onChange:x}),f("firstName"),Object(y.jsx)("input",{type:"text",name:"lastName",placeholder:"Last Name",value:n.lastName,onChange:x}),f("lastName"),Object(y.jsx)("input",{type:"email",name:"email",placeholder:"Email",value:n.email,onChange:x}),f("email"),Object(y.jsx)("input",{type:"password",name:"password",placeholder:"Password",value:n.password,onChange:x}),f("password"),Object(y.jsx)("input",{type:"url",name:"picture",placeholder:"URL of your picture",value:n.picture,onChange:x}),f("picture"),Object(y.jsxs)("select",{name:"country",value:n.country,onChange:x,children:[Object(y.jsx)("option",{disabled:!0,defaultValue:!0,value:"",children:"Choose your country"}),m.map((function(e){return Object(y.jsx)("option",{value:e.name,children:e.name},e.numericCode)}))]}),f("country")]}),Object(y.jsxs)("div",{className:"botonesForm",children:[Object(y.jsx)("input",{type:"button",value:"Sign Up",onClick:g}),Object(y.jsx)("p",{children:"Or"}),Object(y.jsx)(je.a,{clientId:"147929169060-1mm3lp5214g564e0vn115ng10i0qvaae.apps.googleusercontent.com",buttonText:"Sign Up with Google",onSuccess:v,onFailure:v,cookiePolicy:"single_host_origin"})]})]})]})})]})}),Object(y.jsx)(E,{})]})})),pe={loguearUsuario:N.loguearUsuario},he=Object(m.b)(null,pe)((function(e){var t=Object(r.useState)({email:"",password:""}),a=Object(J.a)(t,2),n=a[0],c=a[1],s=function(e){var t=e.target.name,a=e.target.value;c(Object(i.a)(Object(i.a)({},n),{},Object(ue.a)({},t,a)))},o=function(){var t=Object(O.a)(h.a.mark((function t(){var a,r,c,s=arguments;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=s.length>0&&void 0!==s[0]?s[0]:null,r=s.length>1&&void 0!==s[1]?s[1]:null,a&&a.preventDefault(),c=a?n:r,e.loguearUsuario(c);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(e){e.profileObj.email?o(null,{email:e.profileObj.email,password:"a"+e.profileObj.googleId}):alert("Error al registrarse con google")};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(C,{}),Object(y.jsx)("main",{id:"mainSignUp",style:{background:'url("https://www.xtrafondos.com/descargar.php?id=3341&resolucion=3840x2160")'},children:Object(y.jsxs)("div",{className:"contenedorSignUp",children:[Object(y.jsxs)("div",{className:"mitadIzquierda",children:[Object(y.jsx)("h2",{className:"tituloRegistro",children:"Log In"}),Object(y.jsxs)("div",{className:"callRegistro",children:[Object(y.jsx)("h4",{children:"You do not have an account?"}),Object(y.jsx)(j.c,{exact:!0,to:"/signup",children:Object(y.jsx)("p",{className:"direccionNav redireccionRegistro",children:"Sign Up here!"})})]}),Object(y.jsxs)("h3",{className:"logo pointer",children:["MY",Object(y.jsx)("span",{children:"tinerary."})]})]}),Object(y.jsx)("div",{className:"mitadDerechaLogin",children:Object(y.jsxs)("div",{className:"form-style-8",children:[Object(y.jsx)("h2",{children:"Login"}),Object(y.jsxs)("form",{className:"formUsuarioLogin",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("input",{type:"email",name:"email",placeholder:"Email",value:n.email,onChange:s}),Object(y.jsx)("input",{type:"password",name:"password",placeholder:"Password",value:n.password,onChange:s})]}),Object(y.jsxs)("div",{className:"botonesFormLogin",children:[Object(y.jsx)("input",{type:"button",value:"Log In",onClick:o}),Object(y.jsx)(je.a,{clientId:"147929169060-1mm3lp5214g564e0vn115ng10i0qvaae.apps.googleusercontent.com",buttonText:"Sign In with Google",onSuccess:l,onFailure:l,cookiePolicy:"single_host_origin"})]})]})]})})]})}),Object(y.jsx)($.a,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(y.jsx)(E,{})]})})),Oe={pedirInformacionDelUsuario:{pedirInformacionDelUsuario:function(e){return function(){var t=Object(O.a)(h.a.mark((function t(a,r){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.get("http://localhost:4000/api/infoUsuario",{headers:{Authorization:"Bearer "+e}});case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,a){return t.apply(this,arguments)}}()}}.pedirInformacionDelUsuario},xe=Object(m.b)((function(e){return{userLogged:e.usersReducer.userLogged}}),Oe)((function(e){Object(r.useEffect)((function(){s()}),[]);var t=Object(r.useState)([]),a=Object(J.a)(t,2),n=a[0],c=a[1],s=function(){var t=Object(O.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.pedirInformacionDelUsuario(e.userLogged.token);case 2:a=t.sent,c(a.respuesta);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(e){for(var t=[],a=0;a<e;a++)t.push("priceAndDuration");return t};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(C,{}),Object(y.jsxs)("main",{className:"mainUsuario",style:{backgroundImage:'url("../assets/paraUsuario.jpg")'},children:[Object(y.jsxs)("div",{className:"infoDelUsuario",children:[Object(y.jsx)("div",{className:"fotoDelUsuario",style:{backgroundImage:'url("'.concat(e.userLogged.picture,'")')}}),Object(y.jsx)("h3",{className:"nombreDelUsuario",children:e.userLogged.firstName})]}),Object(y.jsxs)("div",{className:"contenidoDelUsuario",children:[Object(y.jsx)("h2",{className:"tituloUsuarioItinerarios",children:"Liked Itineraries"}),n.length>0?n.map((function(e,t){return Object(y.jsxs)("div",{className:"cadaItinerarioEnUsuario",children:[Object(y.jsx)("div",{className:"parteFotoUsuario",children:Object(y.jsx)("div",{className:"fotoUsuario",style:{backgroundImage:'url("'.concat(e.authorPic,'")')}})}),Object(y.jsxs)("div",{className:"parteNombres",children:[Object(y.jsx)("h3",{className:"nombreDelAutorDelItinerario",children:e.authorName}),Object(y.jsx)("h2",{children:e.title})]}),Object(y.jsxs)("div",{className:"partePrecioYDuracion",children:[Object(y.jsxs)("div",{className:"precioDiv",children:[Object(y.jsx)("p",{children:"Price:"}),i(e.price).map((function(e,t){return Object(y.jsx)("div",{className:"priceImg",style:{backgroundImage:"url('../assets/dollar.png')"}},t)}))]}),Object(y.jsxs)("div",{className:"durationDiv",children:[Object(y.jsx)("p",{children:"Duration:"}),i(e.duration).map((function(e,t){return Object(y.jsx)("div",{className:"durationImg",style:{backgroundImage:"url('../assets/reloj.png')"}},t)}))]})]})]},t)})):Object(y.jsx)("h2",{children:"No has Likeado ningun itinerario aun"})]}),Object(y.jsx)("div",{className:"sugerenciasUsuario"})]}),Object(y.jsx)(E,{})]})}));var ge={loginForzadoPorLS:N.loginForzadoPorLS},ve=Object(m.b)((function(e){return{userLogged:e.usersReducer.userLogged}}),ge)((function(e){if(!e.userLogged&&localStorage.getItem("token")){var t=JSON.parse(localStorage.getItem("userLogged")),a=Object(i.a)({token:localStorage.getItem("token")},t);e.loginForzadoPorLS(a)}return Object(y.jsx)(j.a,{children:Object(y.jsxs)(oe.d,{children:[Object(y.jsx)(oe.b,{exact:!0,path:"/",component:P}),Object(y.jsx)(oe.b,{exact:!0,path:"/cities",component:q}),Object(y.jsx)(oe.b,{exact:!0,path:"/itinerary/:id",component:ie}),Object(y.jsx)(oe.b,{exact:!0,path:"/errorServer",component:le}),e.userLogged&&Object(y.jsx)(oe.b,{exact:!0,path:"/user",component:xe}),!e.userLogged&&Object(y.jsx)(oe.b,{exact:!0,path:"/signup",component:me}),!e.userLogged&&Object(y.jsx)(oe.b,{exact:!0,path:"/login",component:he}),Object(y.jsx)(oe.a,{to:"/"})]})})})),fe=a(24),Ne={cities:[],ciudadesAMostrar:[]},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CARGAR_CIUDADES":return Object(i.a)(Object(i.a)({},e),{},{cities:t.payload,ciudadesAMostrar:t.payload});case"FILTRAR_CIUDADES":var a=t.payload.toLowerCase().replace(/ /g,""),r=e.cities.filter((function(e){return e.name.toLowerCase().replace(/ /g,"").startsWith(a)}));return Object(i.a)(Object(i.a)({},e),{},{ciudadesAMostrar:r});default:return e}},ke={itinerarios:[]},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PEDIR_ITINERARIO":return Object(i.a)(Object(i.a)({},e),{},{itinerarios:t.payload});default:return e}},Ie={userLogged:null},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOG_USER":return t.payload&&(localStorage.setItem("userLogged",JSON.stringify({firstName:t.payload.firstName,picture:t.payload.picture})),localStorage.setItem("token",t.payload.token)),Object(i.a)(Object(i.a)({},e),{},{userLogged:t.payload});case"LOGOUT_USER":return localStorage.clear(),Object(i.a)(Object(i.a)({},e),{},{userLogged:null});default:return e}},Le=Object(fe.c)({citiesReducer:ye,itinerarioReducer:Ce,usersReducer:we}),Ue=a(56),Se=Object(fe.d)(Le,Object(fe.a)(Ue.a));s.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(m.a,{store:Se,children:Object(y.jsx)(ve,{})})}),document.getElementById("root"))},61:function(e,t,a){},99:function(e,t,a){}},[[104,1,2]]]);
//# sourceMappingURL=main.8cbda221.chunk.js.map