(function(){"use strict";var e={5349:function(e,t,l){var o=l(7764),a=l(4108),n=l(2386),r=l(3464);function i(e,t,l,o,i,u){const s=(0,a.E1)("AppBar"),d=(0,a.E1)("NavigationDrawer"),c=(0,a.E1)("router-view");return(0,a.Wz)(),(0,a.Az)(n.m,{theme:u.currentTheme},{default:(0,a.Ql)((()=>[(0,a.K2)(s,{drawerVisible:i.drawerVisible,onToggleDrawer:u.toggleDrawer,header:i.appBarHeader},null,8,["drawerVisible","onToggleDrawer","header"]),(0,a.K2)(d,{modelValue:i.drawerVisible,"onUpdate:modelValue":t[0]||(t[0]=e=>i.drawerVisible=e)},null,8,["modelValue"]),(0,a.K2)(r.m,null,{default:(0,a.Ql)((()=>[(0,a.K2)(c)])),_:1})])),_:1},8,["theme"])}var u=l(9096),s=l(2336),d=l(5400),c=l(6120),m=l(8884),f=l(6112),h=l(1184),g=l(5616),p=l(4844);const y={key:0};function _(e,t,l,o,n,r){return(0,a.Wz)(),(0,a.Az)(g.a,null,{default:(0,a.Ql)((()=>[(0,a.K2)(c.y,{dense:""},{default:(0,a.Ql)((()=>[(0,a.K2)(m.a,null,{default:(0,a.Ql)((()=>[(0,a.K2)(f.g,{class:"d-flex justify-space-between align-items-center"},{default:(0,a.Ql)((()=>[(0,a.K2)(p.S,{"model-value":r.isDark,onChange:r.toggleDarkMode,label:"Dark Mode"},null,8,["model-value","onChange"]),(0,a.K2)(s.i,{icon:"",onClick:r.resetDarkMode,class:"ml-auto"},{default:(0,a.Ql)((()=>[(0,a.K2)(d.G,null,{default:(0,a.Ql)((()=>[(0,a.mY)("mdi-theme-light-dark")])),_:1})])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,a.K2)(m.a,{link:"",to:r.navigationItems[0].path},{default:(0,a.Ql)((()=>[(0,a.K2)(f.g,{class:"d-flex align-items-center"},{default:(0,a.Ql)((()=>[(0,a.K2)(d.G,null,{default:(0,a.Ql)((()=>[(0,a.mY)((0,u.WA)(r.navigationItems[0].icon),1)])),_:1}),(0,a.K2)(h.E,{class:"ml-2"},{default:(0,a.Ql)((()=>[(0,a.mY)((0,u.WA)(r.navigationItems[0].title),1)])),_:1})])),_:1})])),_:1},8,["to"]),e.user.loggedIn?((0,a.Wz)(),(0,a.An)("div",y,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(r.filteredNavigationItems,(e=>((0,a.Wz)(),(0,a.Az)(m.a,{key:e.name,link:"",to:e.path},{default:(0,a.Ql)((()=>[(0,a.K2)(f.g,{class:"d-flex align-items-center"},{default:(0,a.Ql)((()=>[(0,a.K2)(d.G,null,{default:(0,a.Ql)((()=>[(0,a.mY)((0,u.WA)(e.icon),1)])),_:2},1024),(0,a.K2)(h.E,{class:"ml-2"},{default:(0,a.Ql)((()=>[(0,a.mY)((0,u.WA)(e.title),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["to"])))),128))])):(0,a.g1)("",!0)])),_:1})])),_:1})}var b=l(7192),K={name:"NavigationDrawer",computed:{...(0,b.ys)(["user"]),isDark(){return this.$vuetify.theme.current.dark},navigationItems(){return this.$router.options.routes.filter((e=>e.meta&&e.meta.title&&!e.meta.hidden)).map((e=>({path:e.path,name:e.name,title:e.meta.title,icon:e.meta.icon||"mdi-circle-outline"})))},filteredNavigationItems(){return this.navigationItems.slice(1)}},methods:{toggleDarkMode(){let e=this.$vuetify.theme.current.dark;this.$store.commit("toggleDarkMode",e)},resetDarkMode(){this.$store.commit("resetDarkMode")}}},Q=l(4100);const v=(0,Q.c)(K,[["render",_]]);var k=v,w=l(4246),A=l(5152),D=l(4752),W=l(5200),E=l(1664);const S=["src"];function C(e,t,l,o,n,r){const i=(0,a.E1)("router-link");return(0,a.Wz)(),(0,a.Az)(w.M,{color:"primary",dark:"",app:""},{default:(0,a.Ql)((()=>[(0,a.K2)(A.w,{onClick:t[0]||(t[0]=t=>e.$emit("toggleDrawer"))}),(0,a.K2)(E.m,null,{default:(0,a.Ql)((()=>[(0,a.mY)((0,u.WA)(l.header),1)])),_:1}),(0,a.K2)(W.O),e.user.loggedIn?((0,a.Wz)(),(0,a.Az)(i,{key:0,to:"/profile"},{default:(0,a.Ql)((()=>[(0,a.K2)(D.E,{size:"32px",class:"mr-2",style:{cursor:"pointer"}},{default:(0,a.Ql)((()=>[(0,a.QD)("img",{src:e.user.data.photoURL,alt:"Profile"},null,8,S)])),_:1})])),_:1})):((0,a.Wz)(),(0,a.Az)(s.i,{key:1,text:"",onClick:r.loginWithGoogle},{default:(0,a.Ql)((()=>[(0,a.mY)("Login")])),_:1},8,["onClick"]))])),_:1})}var z={name:"AppBar",props:{header:String},computed:{...(0,b.ys)(["user"])},methods:{...(0,b.ae)(["signInWithGoogle"]),async loginWithGoogle(){try{await this.signInWithGoogle()}catch(e){console.error("Login failed:",e),this.$emit("error","Login failed. Please try again.")}}}};const Y=(0,Q.c)(z,[["render",C]]);var x=Y,I={name:"App",components:{NavigationDrawer:k,AppBar:x},data(){return{drawerVisible:!1,appBarHeader:"Default Header"}},computed:{currentTheme(){return null===this.$store.state.isDark?window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":this.$store.state.isDark?"dark":"light"}},watch:{$route(){this.updateAppBarHeader()}},mounted(){this.updateAppBarHeader()},methods:{toggleDrawer(){this.drawerVisible=!this.drawerVisible},updateAppBarHeader(){const e=this.$route;this.appBarHeader=e.meta.header||"Default Header"}}};const O=(0,Q.c)(I,[["render",i]]);var B=O,P=l(5632),G=l(8508),N=l(3340);const T={apiKey:"AIzaSyDsTRLJjFBPWbF4wp9Ncd4hH4LxUJ-BwLw",authDomain:"vue-balda.firebaseapp.com",projectId:"vue-balda",storageBucket:"vue-balda.appspot.com",messagingSenderId:"816428311662",appId:"1:816428311662:web:c53ec22fcbb6f6b702b27f"},V=(0,G.mg)(T),H=(0,N.gZ)(V),j=(0,P.Iv)(V);var L=(0,b.eC)({state:{isDark:"true"===localStorage.getItem("isDark")||"false"!==localStorage.getItem("isDark")&&null,user:{loggedIn:!1,data:null}},mutations:{toggleDarkMode(e,t){e.isDark=!t,localStorage.setItem("isDark",e.isDark)},resetDarkMode(e){e.isDark=null,localStorage.removeItem("isDark")},SET_LOGGED_IN(e,t){e.user.loggedIn=t},SET_USER(e,t){e.user.data=t}},getters:{user(e){return e.user}},actions:{async signInWithGoogle(e){const t=new P.wR;try{const l=await(0,P.gZ)(j,t);l&&(e.commit("SET_USER",l.user),e.commit("SET_LOGGED_IN",!0))}catch(l){throw console.error("Authentication failed",l),new Error("Authentication failed")}},async signOut(e){try{await(0,P.Az)(j),e.commit("SET_USER",null),e.commit("SET_LOGGED_IN",!1)}catch(t){throw console.error("Sign out failed",t),new Error("Sign out failed")}},async fetchUser(e,t){e.commit("SET_LOGGED_IN",null!==t),t?e.commit("SET_USER",t):e.commit("SET_USER",null)},initAuth({commit:e}){return new Promise(((t,l)=>{(0,P.E3)(j,(l=>{l?(e("SET_USER",l),e("SET_LOGGED_IN",!0)):(e("SET_LOGGED_IN",!1),e("SET_USER",null)),t()}),l)}))}},modules:{}}),M=l(7464),U=l(7144),F=l(4624),$=l(6176),R=l(3160),J=l(5982),q=l(4019),Z=l(8392);function X(e,t,l,o,i,d){return(0,a.Wz)(),(0,a.Az)(n.m,null,{default:(0,a.Ql)((()=>[(0,a.K2)(r.m,null,{default:(0,a.Ql)((()=>[(0,a.K2)(q.K,{class:"text-center"},{default:(0,a.Ql)((()=>[(0,a.K2)(Z.A,{src:i.heart,class:"my-5",contain:"",height:"600"},null,8,["src"]),(0,a.K2)(s.i,{color:"primary",onClick:t[0]||(t[0]=e=>i.showYayDialog=!0),style:(0,u.MN)(i.noButtonClicked?d.yesButtonStyle:{})},{default:(0,a.Ql)((()=>[(0,a.mY)("Yes!")])),_:1},8,["style"]),(0,a.K2)(J.G,{modelValue:i.showYayDialog,"onUpdate:modelValue":t[2]||(t[2]=e=>i.showYayDialog=e),"max-width":"800px"},{default:(0,a.Ql)((()=>[(0,a.K2)(U.S,null,{default:(0,a.Ql)((()=>[(0,a.K2)(F.m,{class:"text-h5"},{default:(0,a.Ql)((()=>[(0,a.mY)("MUEJEJEJEJEJEJEJEJE")])),_:1}),(0,a.K2)(Z.A,{src:i.hold,class:"my-5",contain:"",height:"300"},null,8,["src"]),(0,a.K2)($.c,null,{default:(0,a.Ql)((()=>[(0,a.mY)("Muahhhhhhhhhhhhhh, you are my valentine!!!")])),_:1}),(0,a.K2)(R.i,null,{default:(0,a.Ql)((()=>[(0,a.K2)(W.O),(0,a.K2)(s.i,{color:"green darken-1",text:"",onClick:t[1]||(t[1]=e=>(i.showYayDialog=!1,i.showHappyDialog=!0))},{default:(0,a.Ql)((()=>[(0,a.mY)("Yayyyyy")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.K2)(J.G,{modelValue:i.showNayDialog,"onUpdate:modelValue":t[4]||(t[4]=e=>i.showNayDialog=e),"max-width":"800px"},{default:(0,a.Ql)((()=>[(0,a.K2)(U.S,null,{default:(0,a.Ql)((()=>[(0,a.K2)(F.m,{class:"text-h5"},{default:(0,a.Ql)((()=>[(0,a.mY)("NuoOOooOOOooOOoooo!")])),_:1}),(0,a.K2)(Z.A,{src:i.squint,class:"my-5",contain:"",height:"300"},null,8,["src"]),(0,a.K2)($.c,null,{default:(0,a.Ql)((()=>[(0,a.mY)("CLICK YES!")])),_:1}),(0,a.K2)(R.i,null,{default:(0,a.Ql)((()=>[(0,a.K2)(W.O),(0,a.K2)(s.i,{color:"blue darken-1",text:"",onClick:t[3]||(t[3]=e=>i.showNayDialog=!1)},{default:(0,a.Ql)((()=>[(0,a.mY)("Okay...")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.K2)(J.G,{modelValue:i.showHappyDialog,"onUpdate:modelValue":t[5]||(t[5]=e=>i.showHappyDialog=e),"max-width":"800px"},{default:(0,a.Ql)((()=>[(0,a.K2)(U.S,null,{default:(0,a.Ql)((()=>[(0,a.K2)(F.m,{class:"text-h5"},{default:(0,a.Ql)((()=>[(0,a.mY)("HAPPY HAPPY!")])),_:1}),(0,a.K2)(Z.A,{src:i.happy,class:"my-5",contain:"",height:"300"},null,8,["src"]),(0,a.K2)($.c,null,{default:(0,a.Ql)((()=>[(0,a.mY)("HAPPY HAPPY CAT IS US")])),_:1}),(0,a.K2)(R.i,null,{default:(0,a.Ql)((()=>[(0,a.K2)(W.O),(0,a.K2)(s.i,{color:"blue darken-1",link:"",to:"/food"},{default:(0,a.Ql)((()=>[(0,a.mY)("happy")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.K2)(s.i,{color:"error",onClick:d.moveNoButton,style:(0,u.MN)(i.noButtonClicked?d.noButtonStyle:{})},{default:(0,a.Ql)((()=>[(0,a.mY)("NO")])),_:1},8,["onClick","style"])])),_:1})])),_:1})])),_:1})}var ee=l.p+"img/hold.01ae20b4.jpg",te=l.p+"img/heart.e1e57ef1.png",le=l.p+"img/squint.19ce4ce7.png",oe=l.p+"img/happy.83823d81.gif",ae={name:"App",data(){return{noClickCount:0,showNayDialog:!1,showYayDialog:!1,showHappyDialog:!1,yesButtonSize:100,noButtonPosition:{top:"50%",left:"50%"},noButtonClicked:!1,heart:te,hold:ee,squint:le,happy:oe}},computed:{yesButtonStyle(){return{width:this.yesButtonSize+"px",height:this.yesButtonSize+"px"}},noButtonStyle(){return{position:"absolute",top:this.noButtonPosition.top,left:this.noButtonPosition.left}}},methods:{moveNoButton(){this.noButtonClicked=!0,this.noClickCount++;const e=100,t=50,l=64,o=Math.random()*(window.innerWidth-e),a=Math.random()*(window.innerHeight-l-t)+l;this.noButtonPosition={top:`${a}px`,left:`${o}px`},this.yesButtonSize+=50,this.noClickCount>=5&&(this.showNayDialog=!0)}}};const ne=(0,Q.c)(ae,[["render",X],["__scopeId","data-v-6488b207"]]);var re=ne,ie=l(1724),ue=l(1884),se=l(8163),de=l(7208),ce=l(6912),me=l(108);const fe=e=>((0,a.ED)("data-v-233abfff"),e=e(),(0,a.ii)(),e),he=fe((()=>(0,a.QD)("h1",null,"Recent Posts",-1)));function ge(e,t,l,n,r,i){return(0,a.Wz)(),(0,a.Az)(q.K,null,{default:(0,a.Ql)((()=>[(0,a.K2)(ue.q,{onSubmit:(0,o.Y7)(i.savePost,["prevent"])},{default:(0,a.Ql)((()=>[(0,a.K2)(ce.y,{modelValue:r.title,"onUpdate:modelValue":t[0]||(t[0]=e=>r.title=e),label:"Title",required:""},null,8,["modelValue"]),(0,a.K2)(me.y,{modelValue:r.content,"onUpdate:modelValue":t[1]||(t[1]=e=>r.content=e),label:"Content",required:""},null,8,["modelValue"]),(0,a.K2)(s.i,{type:"submit",color:"primary"},{default:(0,a.Ql)((()=>[(0,a.mY)("Create Post")])),_:1})])),_:1},8,["onSubmit"]),(0,a.K2)(ie.G,{class:"my-4"}),(0,a.K2)(c.y,{dense:""},{default:(0,a.Ql)((()=>[he,((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(r.posts,(e=>((0,a.Wz)(),(0,a.Az)(m.a,{key:e.id},{default:(0,a.Ql)((()=>[(0,a.K2)(se.m,null,{default:(0,a.Ql)((()=>[(0,a.K2)(h.E,null,{default:(0,a.Ql)((()=>[(0,a.mY)((0,u.WA)(e.title),1)])),_:2},1024),(0,a.K2)(de.E,null,{default:(0,a.Ql)((()=>[(0,a.mY)((0,u.WA)(e.content),1)])),_:2},1024),(0,a.K2)(de.E,null,{default:(0,a.Ql)((()=>[(0,a.mY)((0,u.WA)(i.formatDate(e.createdAt?.toDate())),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})}var pe={name:"HelloWorld",data(){return{title:"",content:"",posts:[]}},methods:{async savePost(){try{await(0,N.sB)((0,N.oV)(H,"posts"),{title:this.title,content:this.content,createdAt:(0,N.S)()}),this.title="",this.content=""}catch(e){console.error("Error adding document: ",e)}},formatDate(e){return e?e.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):""}},mounted(){const e=(0,N.kt)((0,N.oV)(H,"posts"),(0,N.k$)("createdAt","desc"));(0,N.ag)(e,(e=>{this.posts=e.docs.map((e=>({id:e.id,...e.data(),createdAt:e.data().createdAt?e.data().createdAt:null})))}))}};const ye=(0,Q.c)(pe,[["render",ge],["__scopeId","data-v-233abfff"]]);var _e=ye,be=l(7136);const Ke={class:"mt-2"},Qe=(0,a.QD)("h1",null,"Please sign in first",-1);function ve(e,t,o,n,r,i){return(0,a.Wz)(),(0,a.Az)(q.K,null,{default:(0,a.Ql)((()=>[(0,a.K2)(be.s,{class:"text-center",justify:"center",align:"center"},{default:(0,a.Ql)((()=>[(0,a.K2)(se.m,{cols:"12"},{default:(0,a.Ql)((()=>[(0,a.K2)(Z.A,{src:l(5424),class:"my-3",contain:"",height:"200"},null,8,["src"])])),_:1}),e.user.loggedIn?((0,a.Wz)(!0),(0,a.An)(a.ae,{key:0},(0,a.mi)(r.cards,((e,t)=>((0,a.Wz)(),(0,a.Az)(se.m,{key:t,cols:"12",sm:"6",md:"4"},{default:(0,a.Ql)((()=>[(0,a.K2)(U.S,{class:"mx-auto my-5",style:(0,u.MN)({backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:"5px",borderStyle:"solid"}),rounded:"lg",elevation:"5",onClick:t=>i.navigateTo(e.path)},{default:(0,a.Ql)((()=>[(0,a.K2)($.c,{class:"d-flex flex-column align-center justify-center"},{default:(0,a.Ql)((()=>[(0,a.K2)(d.G,{size:"56"},{default:(0,a.Ql)((()=>[(0,a.mY)((0,u.WA)(e.icon),1)])),_:2},1024),(0,a.QD)("div",Ke,(0,u.WA)(e.text),1)])),_:2},1024)])),_:2},1032,["style","onClick"])])),_:2},1024)))),128)):((0,a.Wz)(),(0,a.Az)(se.m,{key:1,cols:"12",sm:"6",md:"4"},{default:(0,a.Ql)((()=>[Qe,e.user.loggedIn?(0,a.g1)("",!0):((0,a.Wz)(),(0,a.Az)(be.s,{key:0,justify:"center",class:"my-5"},{default:(0,a.Ql)((()=>[(0,a.K2)(s.i,{color:"red",dark:"",large:"",onClick:i.loginWithGoogle},{default:(0,a.Ql)((()=>[(0,a.K2)(d.G,{left:"",size:"25"},{default:(0,a.Ql)((()=>[(0,a.mY)("mdi-google")])),_:1}),(0,a.mY)(" Sign in with Google ")])),_:1},8,["onClick"])])),_:1}))])),_:1}))])),_:1})])),_:1})}l(3248);var ke={name:"HubWorld",data(){return{cards:[{backgroundColor:"#01BFBF",borderColor:"#F49880",icon:"mdi-hand-heart",text:"Will you be my balda?",path:"/balda"},{backgroundColor:"#FF9686",borderColor:"#6C119C",icon:"mdi-food-croissant",text:"What do you want for dinner?",path:"/food"},{backgroundColor:"#FFBE98",borderColor:"#F7DED0",icon:"mdi-party-popper",text:"Birthday boy will open this.",path:"/bday"}]}},methods:{...(0,b.ae)(["signInWithGoogle"]),navigateTo(e){this.$router.push(e)},async loginWithGoogle(){try{await this.signInWithGoogle()}catch(e){console.error("Login failed:",e),this.$emit("error","Login failed. Please try again.")}}},computed:{...(0,b.ys)(["user"])}};const we=(0,Q.c)(ke,[["render",ve]]);var Ae=we;const De=(0,a.QD)("h1",{class:"display-2 font-weight-bold mb-3"}," This is still under construction ",-1);function We(e,t,o,n,r,i){return(0,a.Wz)(),(0,a.Az)(q.K,null,{default:(0,a.Ql)((()=>[(0,a.K2)(be.s,{class:"text-center"},{default:(0,a.Ql)((()=>[(0,a.K2)(se.m,{cols:"12"},{default:(0,a.Ql)((()=>[(0,a.K2)(Z.A,{src:l(4224),class:"my-3",contain:"",height:"200"},null,8,["src"])])),_:1}),(0,a.K2)(se.m,{class:"mb-4"},{default:(0,a.Ql)((()=>[De])),_:1})])),_:1})])),_:1})}var Ee={name:"FoodWorld"};const Se=(0,Q.c)(Ee,[["render",We]]);var Ce=Se;const ze=(0,a.QD)("h1",{class:"display-2 font-weight-bold mb-3"}," HAPPY BIRTHDAY 🎂 ",-1);function Ye(e,t,o,n,r,i){return(0,a.Wz)(),(0,a.Az)(q.K,null,{default:(0,a.Ql)((()=>[(0,a.K2)(be.s,{class:"text-center"},{default:(0,a.Ql)((()=>[(0,a.K2)(se.m,{cols:"12"},{default:(0,a.Ql)((()=>[(0,a.K2)(Z.A,{src:l(9652),class:"my-3",contain:"",height:"200"},null,8,["src"])])),_:1}),(0,a.K2)(se.m,{class:"mb-4"},{default:(0,a.Ql)((()=>[ze,(0,a.K2)(s.i,{color:"primary",onClick:i.toggleDialog},{default:(0,a.Ql)((()=>[(0,a.mY)(" Birthday balda will click here ")])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,a.K2)(J.G,{modelValue:r.dialog,"onUpdate:modelValue":t[1]||(t[1]=e=>r.dialog=e),persistent:"","max-width":"600"},{default:(0,a.Ql)((()=>[(0,a.K2)(U.S,null,{default:(0,a.Ql)((()=>[(0,a.K2)(F.m,{class:"text-h5"},{default:(0,a.Ql)((()=>[(0,a.mY)(" Happy Birthday ")])),_:1}),(0,a.K2)($.c,null,{default:(0,a.Ql)((()=>[(0,a.K2)(Z.A,{src:l(3216),contain:"",height:"200"},null,8,["src"])])),_:1}),(0,a.K2)($.c,null,{default:(0,a.Ql)((()=>[(0,a.mY)(" Happy 24th birthday!!! You are the most special bebe in every universe. Can't wait to spend the next 240 years with you. ")])),_:1}),(0,a.K2)(R.i,null,{default:(0,a.Ql)((()=>[(0,a.K2)(W.O),(0,a.K2)(s.i,{color:"green darken-1",text:"",onClick:t[0]||(t[0]=e=>r.dialog=!1)},{default:(0,a.Ql)((()=>[(0,a.mY)("Close")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}var xe={name:"BdayWorld",data(){return{dialog:!1}},methods:{toggleDialog(){this.dialog=!this.dialog}}};const Ie=(0,Q.c)(xe,[["render",Ye]]);var Oe=Ie,Be=l(2586);const Pe=["src"],Ge={class:"headline mb-2"},Ne={class:"subheading mb-2"};function Te(e,t,l,o,n,r){return(0,a.Wz)(),(0,a.Az)(q.K,{class:"fill-height",fluid:""},{default:(0,a.Ql)((()=>[(0,a.K2)(be.s,{align:"center",justify:"center"},{default:(0,a.Ql)((()=>[(0,a.K2)(se.m,{cols:"12",sm:"8",md:"6",lg:"4"},{default:(0,a.Ql)((()=>[(0,a.K2)(U.S,{class:"elevation-12 pa-5",style:{"border-radius":"10px"}},{default:(0,a.Ql)((()=>[(0,a.K2)(Be.s,{color:"primary",dark:"",flat:""},{default:(0,a.Ql)((()=>[e.user.loggedIn?((0,a.Wz)(),(0,a.Az)(E.m,{key:1},{default:(0,a.Ql)((()=>[(0,a.mY)("Info")])),_:1})):((0,a.Wz)(),(0,a.Az)(E.m,{key:0},{default:(0,a.Ql)((()=>[(0,a.mY)("Login")])),_:1}))])),_:1}),(0,a.K2)($.c,null,{default:(0,a.Ql)((()=>[(0,a.K2)(q.K,null,{default:(0,a.Ql)((()=>[e.user.loggedIn?((0,a.Wz)(),(0,a.Az)(be.s,{key:1,justify:"center",class:"my-5"},{default:(0,a.Ql)((()=>[(0,a.K2)(D.E,{size:"120",class:"mb-3"},{default:(0,a.Ql)((()=>[(0,a.QD)("img",{src:e.user.data.photoURL,alt:"Profile"},null,8,Pe)])),_:1}),(0,a.K2)(se.m,{class:"text-center"},{default:(0,a.Ql)((()=>[(0,a.QD)("div",Ge,(0,u.WA)(e.user.data.displayName),1),(0,a.QD)("div",Ne,(0,u.WA)(e.user.data.email),1),(0,a.K2)(s.i,{color:"primary",dark:"",large:"",onClick:r.logoutWithGoogle},{default:(0,a.Ql)((()=>[(0,a.K2)(d.G,{left:"",size:"25"},{default:(0,a.Ql)((()=>[(0,a.mY)("mdi-logout")])),_:1}),(0,a.mY)(" Sign out ")])),_:1},8,["onClick"])])),_:1})])),_:1})):((0,a.Wz)(),(0,a.Az)(be.s,{key:0,justify:"center",class:"my-5"},{default:(0,a.Ql)((()=>[(0,a.K2)(s.i,{color:"red",dark:"",large:"",onClick:r.loginWithGoogle},{default:(0,a.Ql)((()=>[(0,a.K2)(d.G,{left:"",size:"25"},{default:(0,a.Ql)((()=>[(0,a.mY)("mdi-google")])),_:1}),(0,a.mY)(" Sign in with Google ")])),_:1},8,["onClick"])])),_:1}))])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var Ve={name:"ProfilePage",computed:{...(0,b.ys)(["user"])},methods:{...(0,b.ae)(["signInWithGoogle","signOut"]),async loginWithGoogle(){try{await this.signInWithGoogle()}catch(e){console.error("Login failed:",e),this.$emit("error","Login failed. Please try again.")}},async logoutWithGoogle(){try{await this.signOut()}catch(e){console.error("Logout failed:",e),this.$emit("error","Logout failed. Please try again.")}}}};const He=(0,Q.c)(Ve,[["render",Te],["__scopeId","data-v-49a52620"]]);var je=He;const Le=(0,a.QD)("h1",{class:"display-2 font-weight-bold mb-3"}," 404 ",-1);function Me(e,t,o,n,r,i){return(0,a.Wz)(),(0,a.Az)(q.K,null,{default:(0,a.Ql)((()=>[(0,a.K2)(be.s,{class:"text-center"},{default:(0,a.Ql)((()=>[(0,a.K2)(se.m,{cols:"12"},{default:(0,a.Ql)((()=>[(0,a.K2)(Z.A,{src:l(4224),class:"my-3",contain:"",height:"200"},null,8,["src"])])),_:1}),(0,a.K2)(se.m,{class:"mb-4"},{default:(0,a.Ql)((()=>[Le])),_:1})])),_:1})])),_:1})}var Ue={name:"NotFound"};const Fe=(0,Q.c)(Ue,[["render",Me]]);var $e=Fe;const Re=[{path:"/",redirect:"/hub"},{path:"/hub",name:"HubWorld",component:Ae,meta:{title:"Main Hub",header:"Hub World",icon:"mdi-home-circle",hidden:!1}},{path:"/profile",name:"Profile",component:je,meta:{title:"Profile",header:"User Profile",icon:"mdi-home-circle",hidden:!0}},{path:"/balda",name:"Balda",component:re,meta:{title:"Balda",header:"Will you be my balda?",icon:"mdi-hand-heart",hidden:!1}},{path:"/food",name:"FoodWorld",component:Ce,meta:{title:"Eat what?",header:"What for dinner?",icon:"mdi-food-croissant",hidden:!1}},{path:"/bday",name:"BdayWorld",component:Oe,meta:{title:"Happy Birthday!!!!!",header:"You are the birthday boy!!!",icon:"mdi-party-popper",hidden:!1}},{path:"/hello",name:"HelloWorld",component:_e,meta:{title:"HelloWorld",header:"Test World",icon:"mdi-test-tube",hidden:!0}},{path:"/:catchAll(.*)",name:"NotFound",component:$e,meta:{title:"404 Not Found",header:"Page Not Found",icon:"mdi-test-tube",hidden:!0}}],Je=(0,M.gv)({history:(0,M.oz)("/"),routes:Re});Je.beforeEach(((e,t,l)=>{const o=L.state.user.loggedIn;o||"/hub"===e.path?l():l("/hub")}));var qe=Je,Ze=(l(8985),l(2448)),Xe=(0,Ze.W_)({theme:{defaultTheme:"light",themes:{light:{colors:{primary:"#9ED5D6"}},dark:{colors:{primary:"#353F48"}}}}});async function et(){const e=await l.e(32).then(l.t.bind(l,296,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}async function tt(){await L.dispatch("initAuth"),(0,o.W0)(B).use(qe).use(Xe).use(L).mount("#app")}et(),tt()},5424:function(e,t,l){e.exports=l.p+"img/angy_frog.2067ab22.png"},9652:function(e,t,l){e.exports=l.p+"img/bdayCat.08e8fe51.png"},4224:function(e,t,l){e.exports=l.p+"img/construction_cat.9da7e42e.jpg"},3216:function(e,t,l){e.exports=l.p+"img/pallas.ff74ed14.png"}},t={};function l(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,l),n.exports}l.m=e,function(){var e=[];l.O=function(t,o,a,n){if(!o){var r=1/0;for(d=0;d<e.length;d++){o=e[d][0],a=e[d][1],n=e[d][2];for(var i=!0,u=0;u<o.length;u++)(!1&n||r>=n)&&Object.keys(l.O).every((function(e){return l.O[e](o[u])}))?o.splice(u--,1):(i=!1,n<r&&(r=n));if(i){e.splice(d--,1);var s=a();void 0!==s&&(t=s)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[o,a,n]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};l.t=function(o,a){if(1&a&&(o=this(o)),8&a)return o;if("object"===typeof o&&o){if(4&a&&o.__esModule)return o;if(16&a&&"function"===typeof o.then)return o}var n=Object.create(null);l.r(n);var r={};e=e||[null,t({}),t([]),t(t)];for(var i=2&a&&o;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((function(e){r[e]=function(){return o[e]}}));return r["default"]=function(){return o},l.d(n,r),n}}(),function(){l.d=function(e,t){for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){l.f={},l.e=function(e){return Promise.all(Object.keys(l.f).reduce((function(t,o){return l.f[o](e,t),t}),[]))}}(),function(){l.u=function(e){return"js/webfontloader.a54c72e4.js"}}(),function(){l.miniCssF=function(e){}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-valen:";l.l=function(o,a,n,r){if(e[o])e[o].push(a);else{var i,u;if(void 0!==n)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var c=s[d];if(c.getAttribute("src")==o||c.getAttribute("data-webpack")==t+n){i=c;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.setAttribute("data-webpack",t+n),i.src=o),e[o]=[a];var m=function(t,l){i.onerror=i.onload=null,clearTimeout(f);var a=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(e){return e(l)})),t)return t(l)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){l.p="/"}(),function(){var e={524:0};l.f.j=function(t,o){var a=l.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var n=new Promise((function(l,o){a=e[t]=[l,o]}));o.push(a[2]=n);var r=l.p+l.u(t),i=new Error,u=function(o){if(l.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var n=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",i.name="ChunkLoadError",i.type=n,i.request=r,a[1](i)}};l.l(r,u,"chunk-"+t,t)}},l.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,n,r=o[0],i=o[1],u=o[2],s=0;if(r.some((function(t){return 0!==e[t]}))){for(a in i)l.o(i,a)&&(l.m[a]=i[a]);if(u)var d=u(l)}for(t&&t(o);s<r.length;s++)n=r[s],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(d)},o=self["webpackChunkvue_valen"]=self["webpackChunkvue_valen"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=l.O(void 0,[999],(function(){return l(5349)}));o=l.O(o)})();
//# sourceMappingURL=app.05daa0b6.js.map