(function(){"use strict";var e={3704:function(e,t,a){var l=a(7764),o=a(4108),n=a(2386),i=a(3464);function r(e,t,a,l,r,d){const s=(0,o.E1)("AppBar"),u=(0,o.E1)("NavigationDrawer"),c=(0,o.E1)("router-view");return(0,o.Wz)(),(0,o.Az)(n.m,{theme:d.currentTheme},{default:(0,o.Ql)((()=>[(0,o.K2)(s,{drawerVisible:r.drawerVisible,onToggleDrawer:d.toggleDrawer,header:r.appBarHeader},null,8,["drawerVisible","onToggleDrawer","header"]),(0,o.K2)(u,{modelValue:r.drawerVisible,"onUpdate:modelValue":t[0]||(t[0]=e=>r.drawerVisible=e)},null,8,["modelValue"]),(0,o.K2)(i.m,null,{default:(0,o.Ql)((()=>[(0,o.K2)(c)])),_:1})])),_:1},8,["theme"])}var d=a(9096),s=a(2336),u=a(5400),c=a(6120),m=a(8884),h=a(6112),f=a(1184),g=a(5616),p=a(4844);const y={key:0};function _(e,t,a,l,n,i){return(0,o.Wz)(),(0,o.Az)(g.a,null,{default:(0,o.Ql)((()=>[(0,o.K2)(c.y,{dense:""},{default:(0,o.Ql)((()=>[(0,o.K2)(m.a,null,{default:(0,o.Ql)((()=>[(0,o.K2)(h.g,{class:"d-flex justify-space-between align-items-center"},{default:(0,o.Ql)((()=>[(0,o.K2)(p.S,{"model-value":i.isDark,onChange:i.toggleDarkMode,label:"Dark Mode"},null,8,["model-value","onChange"]),(0,o.K2)(s.i,{icon:"",onClick:i.resetDarkMode,class:"ml-auto"},{default:(0,o.Ql)((()=>[(0,o.K2)(u.G,null,{default:(0,o.Ql)((()=>[(0,o.mY)("mdi-theme-light-dark")])),_:1})])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,o.K2)(m.a,{link:"",to:i.navigationItems[0].path},{default:(0,o.Ql)((()=>[(0,o.K2)(h.g,{class:"d-flex align-items-center"},{default:(0,o.Ql)((()=>[(0,o.K2)(u.G,null,{default:(0,o.Ql)((()=>[(0,o.mY)((0,d.WA)(i.navigationItems[0].icon),1)])),_:1}),(0,o.K2)(f.E,{class:"ml-2"},{default:(0,o.Ql)((()=>[(0,o.mY)((0,d.WA)(i.navigationItems[0].title),1)])),_:1})])),_:1})])),_:1},8,["to"]),e.user.loggedIn?((0,o.Wz)(),(0,o.An)("div",y,[((0,o.Wz)(!0),(0,o.An)(o.ae,null,(0,o.mi)(i.filteredNavigationItems,(e=>((0,o.Wz)(),(0,o.Az)(m.a,{key:e.name,link:"",to:e.path},{default:(0,o.Ql)((()=>[(0,o.K2)(h.g,{class:"d-flex align-items-center"},{default:(0,o.Ql)((()=>[(0,o.K2)(u.G,null,{default:(0,o.Ql)((()=>[(0,o.mY)((0,d.WA)(e.icon),1)])),_:2},1024),(0,o.K2)(f.E,{class:"ml-2"},{default:(0,o.Ql)((()=>[(0,o.mY)((0,d.WA)(e.title),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["to"])))),128))])):(0,o.g1)("",!0)])),_:1})])),_:1})}var b=a(7192),Q={name:"NavigationDrawer",computed:{...(0,b.ys)(["user"]),isDark(){return this.$vuetify.theme.current.dark},navigationItems(){return this.$router.options.routes.filter((e=>e.meta&&e.meta.title&&!e.meta.hidden)).map((e=>({path:e.path,name:e.name,title:e.meta.title,icon:e.meta.icon||"mdi-circle-outline"})))},filteredNavigationItems(){return this.navigationItems.slice(1)}},methods:{toggleDarkMode(){let e=this.$vuetify.theme.current.dark;this.$store.commit("toggleDarkMode",e)},resetDarkMode(){this.$store.commit("resetDarkMode")}}},v=a(4100);const K=(0,v.c)(Q,[["render",_]]);var w=K,k=a(4246),W=a(5152),D=a(4752),A=a(5200),S=a(1664);const z=["src"];function E(e,t,a,l,n,i){const r=(0,o.E1)("router-link");return(0,o.Wz)(),(0,o.Az)(k.M,{color:"primary",dark:"",app:""},{default:(0,o.Ql)((()=>[(0,o.K2)(W.w,{onClick:t[0]||(t[0]=t=>e.$emit("toggleDrawer"))}),(0,o.K2)(S.m,null,{default:(0,o.Ql)((()=>[(0,o.mY)((0,d.WA)(a.header),1)])),_:1}),(0,o.K2)(A.O),e.user.loggedIn?((0,o.Wz)(),(0,o.Az)(r,{key:0,to:"/profile"},{default:(0,o.Ql)((()=>[(0,o.K2)(D.E,{size:"32px",class:"mr-2",style:{cursor:"pointer"}},{default:(0,o.Ql)((()=>[(0,o.QD)("img",{src:e.user.data.photoURL,alt:"Profile"},null,8,z)])),_:1})])),_:1})):((0,o.Wz)(),(0,o.Az)(s.i,{key:1,text:"",onClick:i.loginWithGoogle},{default:(0,o.Ql)((()=>[(0,o.mY)("Login")])),_:1},8,["onClick"]))])),_:1})}var C={name:"AppBar",props:{header:String},computed:{...(0,b.ys)(["user"])},methods:{...(0,b.ae)(["signInWithGoogle"]),async loginWithGoogle(){try{await this.signInWithGoogle()}catch(e){console.error("Login failed:",e),this.$emit("error","Login failed. Please try again.")}}}};const I=(0,v.c)(C,[["render",E]]);var Y=I,P={name:"App",components:{NavigationDrawer:w,AppBar:Y},data(){return{drawerVisible:!1,appBarHeader:"Default Header"}},computed:{currentTheme(){return null===this.$store.state.isDark?window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":this.$store.state.isDark?"dark":"light"}},watch:{$route(){this.updateAppBarHeader()}},mounted(){this.updateAppBarHeader()},methods:{toggleDrawer(){this.drawerVisible=!this.drawerVisible},updateAppBarHeader(){const e=this.$route;this.appBarHeader=e.meta.header||"Default Header"}}};const x=(0,v.c)(P,[["render",r]]);var O=x,B=a(5528),N=a(8508),G=a(3340);const H={apiKey:"AIzaSyDsTRLJjFBPWbF4wp9Ncd4hH4LxUJ-BwLw",authDomain:"vue-balda.firebaseapp.com",projectId:"vue-balda",storageBucket:"vue-balda.appspot.com",messagingSenderId:"816428311662",appId:"1:816428311662:web:c53ec22fcbb6f6b702b27f"},V=(0,N.mg)(H),T=(0,G.gZ)(V),j=(0,B.Iv)(V);var L=(0,b.eC)({state:{isDark:"true"===localStorage.getItem("isDark")||"false"!==localStorage.getItem("isDark")&&null,user:{loggedIn:!1,data:null}},mutations:{toggleDarkMode(e,t){e.isDark=!t,localStorage.setItem("isDark",e.isDark)},resetDarkMode(e){e.isDark=null,localStorage.removeItem("isDark")},SET_LOGGED_IN(e,t){e.user.loggedIn=t},SET_USER(e,t){e.user.data=t}},getters:{user(e){return e.user}},actions:{async signInWithGoogle(e){const t=new B.wR;try{const a=await(0,B.gZ)(j,t);a&&(e.commit("SET_USER",a.user),e.commit("SET_LOGGED_IN",!0))}catch(a){throw console.error("Authentication failed",a),new Error("Authentication failed")}},async signOut(e){try{await(0,B.Az)(j),e.commit("SET_USER",null),e.commit("SET_LOGGED_IN",!1)}catch(t){throw console.error("Sign out failed",t),new Error("Sign out failed")}},async fetchUser(e,t){e.commit("SET_LOGGED_IN",null!==t),t?e.commit("SET_USER",t):e.commit("SET_USER",null)},initAuth({commit:e}){return new Promise(((t,a)=>{(0,B.E3)(j,(a=>{a?(e("SET_USER",a),e("SET_LOGGED_IN",!0)):(e("SET_LOGGED_IN",!1),e("SET_USER",null)),t()}),a)}))}},modules:{}}),U=a(7464),M=a(7144),F=a(4624),$=a(6176),R=a(3160),q=a(5982),J=a(4019),Z=a(8392);function X(e,t,a,l,r,u){return(0,o.Wz)(),(0,o.Az)(n.m,null,{default:(0,o.Ql)((()=>[(0,o.K2)(i.m,null,{default:(0,o.Ql)((()=>[(0,o.K2)(J.K,{class:"text-center"},{default:(0,o.Ql)((()=>[(0,o.K2)(Z.A,{src:r.heart,class:"my-5",contain:"",height:"600"},null,8,["src"]),(0,o.K2)(s.i,{color:"primary",onClick:t[0]||(t[0]=e=>r.showYayDialog=!0),style:(0,d.MN)(r.noButtonClicked?u.yesButtonStyle:{})},{default:(0,o.Ql)((()=>[(0,o.mY)("Yes!")])),_:1},8,["style"]),(0,o.K2)(q.G,{modelValue:r.showYayDialog,"onUpdate:modelValue":t[2]||(t[2]=e=>r.showYayDialog=e),"max-width":"800px"},{default:(0,o.Ql)((()=>[(0,o.K2)(M.S,null,{default:(0,o.Ql)((()=>[(0,o.K2)(F.m,{class:"text-h5"},{default:(0,o.Ql)((()=>[(0,o.mY)("MUEJEJEJEJEJEJEJEJE")])),_:1}),(0,o.K2)(Z.A,{src:r.hold,class:"my-5",contain:"",height:"300"},null,8,["src"]),(0,o.K2)($.c,null,{default:(0,o.Ql)((()=>[(0,o.mY)("Muahhhhhhhhhhhhhh, you are my valentine!!!")])),_:1}),(0,o.K2)(R.i,null,{default:(0,o.Ql)((()=>[(0,o.K2)(A.O),(0,o.K2)(s.i,{color:"green darken-1",text:"",onClick:t[1]||(t[1]=e=>(r.showYayDialog=!1,r.showHappyDialog=!0))},{default:(0,o.Ql)((()=>[(0,o.mY)("Yayyyyy")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.K2)(q.G,{modelValue:r.showNayDialog,"onUpdate:modelValue":t[4]||(t[4]=e=>r.showNayDialog=e),"max-width":"800px"},{default:(0,o.Ql)((()=>[(0,o.K2)(M.S,null,{default:(0,o.Ql)((()=>[(0,o.K2)(F.m,{class:"text-h5"},{default:(0,o.Ql)((()=>[(0,o.mY)("NuoOOooOOOooOOoooo!")])),_:1}),(0,o.K2)(Z.A,{src:r.squint,class:"my-5",contain:"",height:"300"},null,8,["src"]),(0,o.K2)($.c,null,{default:(0,o.Ql)((()=>[(0,o.mY)("CLICK YES!")])),_:1}),(0,o.K2)(R.i,null,{default:(0,o.Ql)((()=>[(0,o.K2)(A.O),(0,o.K2)(s.i,{color:"blue darken-1",text:"",onClick:t[3]||(t[3]=e=>r.showNayDialog=!1)},{default:(0,o.Ql)((()=>[(0,o.mY)("Okay...")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.K2)(q.G,{modelValue:r.showHappyDialog,"onUpdate:modelValue":t[5]||(t[5]=e=>r.showHappyDialog=e),"max-width":"800px"},{default:(0,o.Ql)((()=>[(0,o.K2)(M.S,null,{default:(0,o.Ql)((()=>[(0,o.K2)(F.m,{class:"text-h5"},{default:(0,o.Ql)((()=>[(0,o.mY)("HAPPY HAPPY!")])),_:1}),(0,o.K2)(Z.A,{src:r.happy,class:"my-5",contain:"",height:"300"},null,8,["src"]),(0,o.K2)($.c,null,{default:(0,o.Ql)((()=>[(0,o.mY)("HAPPY HAPPY CAT IS US")])),_:1}),(0,o.K2)(R.i,null,{default:(0,o.Ql)((()=>[(0,o.K2)(A.O),(0,o.K2)(s.i,{color:"blue darken-1",link:"",to:"/food"},{default:(0,o.Ql)((()=>[(0,o.mY)("happy")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.K2)(s.i,{color:"error",onClick:u.moveNoButton,style:(0,d.MN)(r.noButtonClicked?u.noButtonStyle:{})},{default:(0,o.Ql)((()=>[(0,o.mY)("NO")])),_:1},8,["onClick","style"])])),_:1})])),_:1})])),_:1})}var ee=a.p+"img/hold.01ae20b4.jpg",te=a.p+"img/heart.e1e57ef1.png",ae=a.p+"img/squint.19ce4ce7.png",le=a.p+"img/happy.83823d81.gif",oe={name:"App",data(){return{noClickCount:0,showNayDialog:!1,showYayDialog:!1,showHappyDialog:!1,yesButtonSize:100,noButtonPosition:{top:"50%",left:"50%"},noButtonClicked:!1,heart:te,hold:ee,squint:ae,happy:le}},computed:{yesButtonStyle(){return{width:this.yesButtonSize+"px",height:this.yesButtonSize+"px"}},noButtonStyle(){return{position:"absolute",top:this.noButtonPosition.top,left:this.noButtonPosition.left}}},methods:{moveNoButton(){this.noButtonClicked=!0,this.noClickCount++;const e=100,t=50,a=64,l=Math.random()*(window.innerWidth-e),o=Math.random()*(window.innerHeight-a-t)+a;this.noButtonPosition={top:`${o}px`,left:`${l}px`},this.yesButtonSize+=50,this.noClickCount>=5&&(this.showNayDialog=!0)}}};const ne=(0,v.c)(oe,[["render",X],["__scopeId","data-v-6488b207"]]);var ie=ne,re=a(1724),de=a(1884),se=a(8163),ue=a(7208),ce=a(6912),me=a(108);const he=e=>((0,o.ED)("data-v-233abfff"),e=e(),(0,o.ii)(),e),fe=he((()=>(0,o.QD)("h1",null,"Recent Posts",-1)));function ge(e,t,a,n,i,r){return(0,o.Wz)(),(0,o.Az)(J.K,null,{default:(0,o.Ql)((()=>[(0,o.K2)(de.q,{onSubmit:(0,l.Y7)(r.savePost,["prevent"])},{default:(0,o.Ql)((()=>[(0,o.K2)(ce.y,{modelValue:i.title,"onUpdate:modelValue":t[0]||(t[0]=e=>i.title=e),label:"Title",required:""},null,8,["modelValue"]),(0,o.K2)(me.y,{modelValue:i.content,"onUpdate:modelValue":t[1]||(t[1]=e=>i.content=e),label:"Content",required:""},null,8,["modelValue"]),(0,o.K2)(s.i,{type:"submit",color:"primary"},{default:(0,o.Ql)((()=>[(0,o.mY)("Create Post")])),_:1})])),_:1},8,["onSubmit"]),(0,o.K2)(re.G,{class:"my-4"}),(0,o.K2)(c.y,{dense:""},{default:(0,o.Ql)((()=>[fe,((0,o.Wz)(!0),(0,o.An)(o.ae,null,(0,o.mi)(i.posts,(e=>((0,o.Wz)(),(0,o.Az)(m.a,{key:e.id},{default:(0,o.Ql)((()=>[(0,o.K2)(se.m,null,{default:(0,o.Ql)((()=>[(0,o.K2)(f.E,null,{default:(0,o.Ql)((()=>[(0,o.mY)((0,d.WA)(e.title),1)])),_:2},1024),(0,o.K2)(ue.E,null,{default:(0,o.Ql)((()=>[(0,o.mY)((0,d.WA)(e.content),1)])),_:2},1024),(0,o.K2)(ue.E,null,{default:(0,o.Ql)((()=>[(0,o.mY)((0,d.WA)(r.formatDate(e.createdAt?.toDate())),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})}var pe={name:"HelloWorld",data(){return{title:"",content:"",posts:[]}},methods:{async savePost(){try{await(0,G.sB)((0,G.oV)(T,"posts"),{title:this.title,content:this.content,createdAt:(0,G.S)()}),this.title="",this.content=""}catch(e){console.error("Error adding document: ",e)}},formatDate(e){return e?e.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):""}},mounted(){const e=(0,G.kt)((0,G.oV)(T,"posts"),(0,G.k$)("createdAt","desc"));(0,G.ag)(e,(e=>{this.posts=e.docs.map((e=>({id:e.id,...e.data(),createdAt:e.data().createdAt?e.data().createdAt:null})))}))}};const ye=(0,v.c)(pe,[["render",ge],["__scopeId","data-v-233abfff"]]);var _e=ye,be=a(7136);const Qe={class:"mt-2"},ve=(0,o.QD)("h1",null,"Please sign in first",-1);function Ke(e,t,l,n,i,r){return(0,o.Wz)(),(0,o.Az)(J.K,null,{default:(0,o.Ql)((()=>[(0,o.K2)(be.s,{class:"text-center",justify:"center",align:"center"},{default:(0,o.Ql)((()=>[(0,o.K2)(se.m,{cols:"12"},{default:(0,o.Ql)((()=>[(0,o.K2)(Z.A,{src:a(5424),class:"my-3",contain:"",height:"200"},null,8,["src"])])),_:1}),e.user.loggedIn?((0,o.Wz)(!0),(0,o.An)(o.ae,{key:0},(0,o.mi)(i.cards,((e,t)=>((0,o.Wz)(),(0,o.Az)(se.m,{key:t,cols:"12",sm:"6",md:"4"},{default:(0,o.Ql)((()=>[(0,o.K2)(M.S,{class:"mx-auto my-5",style:(0,d.MN)({backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:"5px",borderStyle:"solid"}),rounded:"lg",elevation:"5",onClick:t=>r.navigateTo(e.path)},{default:(0,o.Ql)((()=>[(0,o.K2)($.c,{class:"d-flex flex-column align-center justify-center"},{default:(0,o.Ql)((()=>[(0,o.K2)(u.G,{size:"56"},{default:(0,o.Ql)((()=>[(0,o.mY)((0,d.WA)(e.icon),1)])),_:2},1024),(0,o.QD)("div",Qe,(0,d.WA)(e.text),1)])),_:2},1024)])),_:2},1032,["style","onClick"])])),_:2},1024)))),128)):((0,o.Wz)(),(0,o.Az)(se.m,{key:1,cols:"12",sm:"6",md:"4"},{default:(0,o.Ql)((()=>[ve,e.user.loggedIn?(0,o.g1)("",!0):((0,o.Wz)(),(0,o.Az)(be.s,{key:0,justify:"center",class:"my-5"},{default:(0,o.Ql)((()=>[(0,o.K2)(s.i,{color:"red",dark:"",large:"",onClick:r.loginWithGoogle},{default:(0,o.Ql)((()=>[(0,o.K2)(u.G,{left:"",size:"25"},{default:(0,o.Ql)((()=>[(0,o.mY)("mdi-google")])),_:1}),(0,o.mY)(" Sign in with Google ")])),_:1},8,["onClick"])])),_:1}))])),_:1}))])),_:1})])),_:1})}a(3248);var we={name:"HubWorld",data(){return{cards:[{backgroundColor:"#01BFBF",borderColor:"#F49880",icon:"mdi-hand-heart",text:"Will you be my balda?",path:"/balda"},{backgroundColor:"#FF9686",borderColor:"#6C119C",icon:"mdi-food-croissant",text:"What do you want for dinner?",path:"/food"},{backgroundColor:"#FFBE98",borderColor:"#F7DED0",icon:"mdi-party-popper",text:"Birthday boy will open this.",path:"/bday"}]}},methods:{...(0,b.ae)(["signInWithGoogle"]),navigateTo(e){this.$router.push(e)},async loginWithGoogle(){try{await this.signInWithGoogle()}catch(e){console.error("Login failed:",e),this.$emit("error","Login failed. Please try again.")}}},computed:{...(0,b.ys)(["user"])}};const ke=(0,v.c)(we,[["render",Ke]]);var We=ke;const De=(0,o.QD)("h1",{class:"display-2 font-weight-bold mb-3"}," What to eat for dinner ",-1),Ae={class:"headline mb-2"};function Se(e,t,n,i,r,c){return(0,o.Wz)(),(0,o.Az)(J.K,null,{default:(0,o.Ql)((()=>[(0,o.K2)(be.s,{class:"text-center"},{default:(0,o.Ql)((()=>[(0,o.K2)(se.m,{cols:"12"},{default:(0,o.Ql)((()=>[(0,o.K2)(Z.A,{src:a(3304),class:"my-3",contain:"",height:"200"},null,8,["src"])])),_:1}),(0,o.K2)(se.m,{class:"mb-4"},{default:(0,o.Ql)((()=>[De,(0,o.QD)("div",Ae,(0,d.WA)(e.user.data.displayName),1)])),_:1}),((0,o.Wz)(!0),(0,o.An)(o.ae,null,(0,o.mi)(c.reversedDinnerIdeas,(e=>((0,o.Wz)(),(0,o.Az)(se.m,{cols:"12",key:e.id},{default:(0,o.Ql)((()=>[(0,o.K2)(M.S,{class:"mb-4 position-relative"},{default:(0,o.Ql)((()=>[(0,o.K2)(F.m,null,{default:(0,o.Ql)((()=>[(0,o.mY)((0,d.WA)(e.name),1)])),_:2},1024),(0,o.K2)($.c,null,{default:(0,o.Ql)((()=>[(0,o.mY)((0,d.WA)(e.place)+" ",1),(0,o.QD)("div",null,[(0,o.QD)("small",null,"Posted by "+(0,d.WA)(e.userName)+" on "+(0,d.WA)(e.formattedDate),1)])])),_:2},1024),(0,o.K2)(s.i,{icon:"",class:"ma-2",onClick:t=>c.removeDinnerPost(e.id)},{default:(0,o.Ql)((()=>[(0,o.K2)(u.G,null,{default:(0,o.Ql)((()=>[(0,o.mY)("mdi-close-circle")])),_:1})])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)))),128)),(0,o.K2)(se.m,{cols:"12"},{default:(0,o.Ql)((()=>[(0,o.K2)(de.q,{onSubmit:(0,l.Y7)(c.createDinnerPost,["prevent"])},{default:(0,o.Ql)((()=>[(0,o.K2)(ce.y,{modelValue:r.dinnerName,"onUpdate:modelValue":t[0]||(t[0]=e=>r.dinnerName=e),label:"Dinner Name",required:""},null,8,["modelValue"]),(0,o.K2)(ce.y,{modelValue:r.dinnerPlace,"onUpdate:modelValue":t[1]||(t[1]=e=>r.dinnerPlace=e),label:"Place",required:""},null,8,["modelValue"]),(0,o.K2)(s.i,{color:"primary",type:"submit"},{default:(0,o.Ql)((()=>[(0,o.mY)("Post")])),_:1})])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1})}var ze={name:"FoodWorld",data(){return{dinnerName:"",dinnerPlace:"",dinnerIdeas:[]}},computed:{...(0,b.ys)(["user"]),reversedDinnerIdeas(){return this.dinnerIdeas.slice().reverse()}},methods:{async createDinnerPost(){try{const e=(0,G.UN)(T,"dinner_ideas","dinner_post_ID");await(0,G.Sm)(e,{},{merge:!0});const t=(0,G.oV)(T,"dinner_ideas","dinner_post_ID","posts");await(0,G.sB)(t,{name:this.dinnerName,place:this.dinnerPlace,userName:this.user.data.displayName,timestamp:(0,G.S)()}),this.dinnerName="",this.dinnerPlace=""}catch(e){console.error("Error adding document: ",e)}},async removeDinnerPost(e){try{const t=(0,G.UN)(T,"dinner_ideas","dinner_post_ID","posts",e);await(0,G.oh)(t)}catch(t){console.error("Error removing document: ",t)}},formatDate(e){if(!e)return"Loading date...";const t=e.toDate();return t.toLocaleDateString()+" at "+t.toLocaleTimeString()}},mounted(){const e=(0,G.kt)((0,G.oV)(T,"dinner_ideas","dinner_post_ID","posts"),(0,G.k$)("timestamp"));(0,G.ag)(e,(e=>{this.dinnerIdeas=[],e.forEach((e=>{let t=e.data();t.id=e.id,t.formattedDate=this.formatDate(t.timestamp),this.dinnerIdeas.push(t)}))}))}};const Ee=(0,v.c)(ze,[["render",Se]]);var Ce=Ee;const Ie=(0,o.QD)("h1",{class:"display-2 font-weight-bold mb-3"}," HAPPY BIRTHDAY 🎂 ",-1);function Ye(e,t,l,n,i,r){return(0,o.Wz)(),(0,o.Az)(J.K,null,{default:(0,o.Ql)((()=>[(0,o.K2)(be.s,{class:"text-center"},{default:(0,o.Ql)((()=>[(0,o.K2)(se.m,{cols:"12"},{default:(0,o.Ql)((()=>[(0,o.K2)(Z.A,{src:a(9652),class:"my-3",contain:"",height:"200"},null,8,["src"])])),_:1}),(0,o.K2)(se.m,{class:"mb-4"},{default:(0,o.Ql)((()=>[Ie,(0,o.K2)(s.i,{color:"primary",onClick:r.toggleDialog},{default:(0,o.Ql)((()=>[(0,o.mY)(" Birthday balda will click here ")])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,o.K2)(q.G,{modelValue:i.dialog,"onUpdate:modelValue":t[1]||(t[1]=e=>i.dialog=e),persistent:"","max-width":"600"},{default:(0,o.Ql)((()=>[(0,o.K2)(M.S,null,{default:(0,o.Ql)((()=>[(0,o.K2)(F.m,{class:"text-h5"},{default:(0,o.Ql)((()=>[(0,o.mY)(" Happy Birthday ")])),_:1}),(0,o.K2)($.c,null,{default:(0,o.Ql)((()=>[(0,o.K2)(Z.A,{src:a(3216),contain:"",height:"200"},null,8,["src"])])),_:1}),(0,o.K2)($.c,null,{default:(0,o.Ql)((()=>[(0,o.mY)(" Happy 24th birthday!!! You are the most special bebe in every universe. Can't wait to spend the next 240 years with you. ")])),_:1}),(0,o.K2)(R.i,null,{default:(0,o.Ql)((()=>[(0,o.K2)(A.O),(0,o.K2)(s.i,{color:"green darken-1",text:"",onClick:t[0]||(t[0]=e=>i.dialog=!1)},{default:(0,o.Ql)((()=>[(0,o.mY)("Close")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}var Pe={name:"BdayWorld",data(){return{dialog:!1}},methods:{toggleDialog(){this.dialog=!this.dialog}}};const xe=(0,v.c)(Pe,[["render",Ye]]);var Oe=xe,Be=a(2586);const Ne=["src"],Ge={class:"headline mb-2"},He={class:"subheading mb-2"};function Ve(e,t,a,l,n,i){return(0,o.Wz)(),(0,o.Az)(J.K,{class:"fill-height",fluid:""},{default:(0,o.Ql)((()=>[(0,o.K2)(be.s,{align:"center",justify:"center"},{default:(0,o.Ql)((()=>[(0,o.K2)(se.m,{cols:"12",sm:"8",md:"6",lg:"4"},{default:(0,o.Ql)((()=>[(0,o.K2)(M.S,{class:"elevation-12 pa-5",style:{"border-radius":"10px"}},{default:(0,o.Ql)((()=>[(0,o.K2)(Be.s,{color:"primary",dark:"",flat:""},{default:(0,o.Ql)((()=>[e.user.loggedIn?((0,o.Wz)(),(0,o.Az)(S.m,{key:1},{default:(0,o.Ql)((()=>[(0,o.mY)("Info")])),_:1})):((0,o.Wz)(),(0,o.Az)(S.m,{key:0},{default:(0,o.Ql)((()=>[(0,o.mY)("Login")])),_:1}))])),_:1}),(0,o.K2)($.c,null,{default:(0,o.Ql)((()=>[(0,o.K2)(J.K,null,{default:(0,o.Ql)((()=>[e.user.loggedIn?((0,o.Wz)(),(0,o.Az)(be.s,{key:1,justify:"center",class:"my-5"},{default:(0,o.Ql)((()=>[(0,o.K2)(D.E,{size:"120",class:"mb-3"},{default:(0,o.Ql)((()=>[(0,o.QD)("img",{src:e.user.data.photoURL,alt:"Profile"},null,8,Ne)])),_:1}),(0,o.K2)(se.m,{class:"text-center"},{default:(0,o.Ql)((()=>[(0,o.QD)("div",Ge,(0,d.WA)(e.user.data.displayName),1),(0,o.QD)("div",He,(0,d.WA)(e.user.data.email),1),(0,o.K2)(s.i,{color:"primary",dark:"",large:"",onClick:i.logoutWithGoogle},{default:(0,o.Ql)((()=>[(0,o.K2)(u.G,{left:"",size:"25"},{default:(0,o.Ql)((()=>[(0,o.mY)("mdi-logout")])),_:1}),(0,o.mY)(" Sign out ")])),_:1},8,["onClick"])])),_:1})])),_:1})):((0,o.Wz)(),(0,o.Az)(be.s,{key:0,justify:"center",class:"my-5"},{default:(0,o.Ql)((()=>[(0,o.K2)(s.i,{color:"red",dark:"",large:"",onClick:i.loginWithGoogle},{default:(0,o.Ql)((()=>[(0,o.K2)(u.G,{left:"",size:"25"},{default:(0,o.Ql)((()=>[(0,o.mY)("mdi-google")])),_:1}),(0,o.mY)(" Sign in with Google ")])),_:1},8,["onClick"])])),_:1}))])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var Te={name:"ProfilePage",computed:{...(0,b.ys)(["user"])},methods:{...(0,b.ae)(["signInWithGoogle","signOut"]),async loginWithGoogle(){try{await this.signInWithGoogle()}catch(e){console.error("Login failed:",e),this.$emit("error","Login failed. Please try again.")}},async logoutWithGoogle(){try{await this.signOut()}catch(e){console.error("Logout failed:",e),this.$emit("error","Logout failed. Please try again.")}}}};const je=(0,v.c)(Te,[["render",Ve],["__scopeId","data-v-49a52620"]]);var Le=je;const Ue=(0,o.QD)("h1",{class:"display-2 font-weight-bold mb-3"}," 404 ",-1);function Me(e,t,l,n,i,r){return(0,o.Wz)(),(0,o.Az)(J.K,null,{default:(0,o.Ql)((()=>[(0,o.K2)(be.s,{class:"text-center"},{default:(0,o.Ql)((()=>[(0,o.K2)(se.m,{cols:"12"},{default:(0,o.Ql)((()=>[(0,o.K2)(Z.A,{src:a(4224),class:"my-3",contain:"",height:"200"},null,8,["src"])])),_:1}),(0,o.K2)(se.m,{class:"mb-4"},{default:(0,o.Ql)((()=>[Ue])),_:1})])),_:1})])),_:1})}var Fe={name:"NotFound"};const $e=(0,v.c)(Fe,[["render",Me]]);var Re=$e;const qe=e=>((0,o.ED)("data-v-53662bef"),e=e(),(0,o.ii)(),e),Je=qe((()=>(0,o.QD)("h1",{class:"display-2 font-weight-bold mb-3"}," Window Size ",-1))),Ze={class:"display-1"},Xe={class:"display-1"},et={class:"display-1"},tt={class:"display-1"};function at(e,t,l,n,i,r){return(0,o.Wz)(),(0,o.Az)(J.K,null,{default:(0,o.Ql)((()=>[(0,o.K2)(be.s,{class:"text-center"},{default:(0,o.Ql)((()=>[(0,o.K2)(se.m,{cols:"12"},{default:(0,o.Ql)((()=>[(0,o.K2)(Z.A,{src:a(4224),class:"my-3",contain:"",height:"200"},null,8,["src"])])),_:1}),(0,o.K2)(se.m,{class:"mb-4"},{default:(0,o.Ql)((()=>[Je,(0,o.QD)("p",Ze,"Outer Width: "+(0,d.WA)(i.outerWidth),1),(0,o.QD)("p",Xe,"Outer Height: "+(0,d.WA)(i.outerHeight),1),(0,o.QD)("p",et,"Inner Width: "+(0,d.WA)(i.innerWidth),1),(0,o.QD)("p",tt,"Inner Height: "+(0,d.WA)(i.innerHeight),1)])),_:1})])),_:1})])),_:1})}var lt={name:"WindowSize",data(){return{outerWidth:0,outerHeight:0,innerWidth:0,innerHeight:0}},mounted(){this.updateWindowSize(),window.addEventListener("resize",this.updateWindowSize)},beforeUnmount(){window.removeEventListener("resize",this.updateWindowSize)},methods:{updateWindowSize(){this.outerWidth=window.outerWidth,this.outerHeight=window.outerHeight,this.innerWidth=window.innerWidth,this.innerHeight=window.innerHeight}}};const ot=(0,v.c)(lt,[["render",at],["__scopeId","data-v-53662bef"]]);var nt=ot;const it=[{path:"/",redirect:"/hub"},{path:"/hub",name:"HubWorld",component:We,meta:{title:"Main Hub",header:"Hub World",icon:"mdi-home-circle",hidden:!1}},{path:"/profile",name:"Profile",component:Le,meta:{title:"Profile",header:"User Profile",icon:"mdi-home-circle",hidden:!0}},{path:"/balda",name:"Balda",component:ie,meta:{title:"Balda",header:"Will you be my balda?",icon:"mdi-hand-heart",hidden:!1}},{path:"/food",name:"FoodWorld",component:Ce,meta:{title:"Eat what?",header:"What for dinner?",icon:"mdi-food-croissant",hidden:!1}},{path:"/bday",name:"BdayWorld",component:Oe,meta:{title:"Happy Birthday!!!!!",header:"You are the birthday boy!!!",icon:"mdi-party-popper",hidden:!1}},{path:"/hello",name:"HelloWorld",component:_e,meta:{title:"HelloWorld",header:"Test World",icon:"mdi-tape-measure",hidden:!0}},{path:"/size",name:"WindowSize",component:nt,meta:{title:"Window Size",header:"Window Size World",icon:"mdi-test-tube",hidden:!0}},{path:"/:catchAll(.*)",name:"NotFound",component:Re,meta:{title:"404 Not Found",header:"Page Not Found",icon:"mdi-test-tube",hidden:!0}}],rt=(0,U.gv)({history:(0,U.oz)("/"),routes:it});rt.beforeEach(((e,t,a)=>{const l=L.state.user.loggedIn;l||"/hub"===e.path?a():a("/hub")}));var dt=rt,st=(a(8985),a(2448)),ut=(0,st.W_)({theme:{defaultTheme:"light",themes:{light:{colors:{primary:"#9ED5D6"}},dark:{colors:{primary:"#353F48"}}}}});async function ct(){const e=await a.e(32).then(a.t.bind(a,296,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}async function mt(){await L.dispatch("initAuth"),(0,l.W0)(O).use(dt).use(ut).use(L).mount("#app")}ct(),mt()},5424:function(e,t,a){e.exports=a.p+"img/angy_frog.2067ab22.png"},9652:function(e,t,a){e.exports=a.p+"img/bdayCat.08e8fe51.png"},4224:function(e,t,a){e.exports=a.p+"img/construction_cat.9da7e42e.jpg"},3216:function(e,t,a){e.exports=a.p+"img/pallas.ff74ed14.png"},3304:function(e,t,a){e.exports=a.p+"img/stawberry_cat.5e9735fd.jpg"}},t={};function a(l){var o=t[l];if(void 0!==o)return o.exports;var n=t[l]={exports:{}};return e[l].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,l,o,n){if(!l){var i=1/0;for(u=0;u<e.length;u++){l=e[u][0],o=e[u][1],n=e[u][2];for(var r=!0,d=0;d<l.length;d++)(!1&n||i>=n)&&Object.keys(a.O).every((function(e){return a.O[e](l[d])}))?l.splice(d--,1):(r=!1,n<i&&(i=n));if(r){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[l,o,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};a.t=function(l,o){if(1&o&&(l=this(l)),8&o)return l;if("object"===typeof l&&l){if(4&o&&l.__esModule)return l;if(16&o&&"function"===typeof l.then)return l}var n=Object.create(null);a.r(n);var i={};e=e||[null,t({}),t([]),t(t)];for(var r=2&o&&l;"object"==typeof r&&!~e.indexOf(r);r=t(r))Object.getOwnPropertyNames(r).forEach((function(e){i[e]=function(){return l[e]}}));return i["default"]=function(){return l},a.d(n,i),n}}(),function(){a.d=function(e,t){for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,l){return a.f[l](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/webfontloader.a54c72e4.js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-valen:";a.l=function(l,o,n,i){if(e[l])e[l].push(o);else{var r,d;if(void 0!==n)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var c=s[u];if(c.getAttribute("src")==l||c.getAttribute("data-webpack")==t+n){r=c;break}}r||(d=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,a.nc&&r.setAttribute("nonce",a.nc),r.setAttribute("data-webpack",t+n),r.src=l),e[l]=[o];var m=function(t,a){r.onerror=r.onload=null,clearTimeout(h);var o=e[l];if(delete e[l],r.parentNode&&r.parentNode.removeChild(r),o&&o.forEach((function(e){return e(a)})),t)return t(a)},h=setTimeout(m.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=m.bind(null,r.onerror),r.onload=m.bind(null,r.onload),d&&document.head.appendChild(r)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={524:0};a.f.j=function(t,l){var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)l.push(o[2]);else{var n=new Promise((function(a,l){o=e[t]=[a,l]}));l.push(o[2]=n);var i=a.p+a.u(t),r=new Error,d=function(l){if(a.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var n=l&&("load"===l.type?"missing":l.type),i=l&&l.target&&l.target.src;r.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",r.name="ChunkLoadError",r.type=n,r.request=i,o[1](r)}};a.l(i,d,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,l){var o,n,i=l[0],r=l[1],d=l[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in r)a.o(r,o)&&(a.m[o]=r[o]);if(d)var u=d(a)}for(t&&t(l);s<i.length;s++)n=i[s],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},l=self["webpackChunkvue_valen"]=self["webpackChunkvue_valen"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=a.O(void 0,[999],(function(){return a(3704)}));l=a.O(l)})();
//# sourceMappingURL=app.1a6d32a1.js.map