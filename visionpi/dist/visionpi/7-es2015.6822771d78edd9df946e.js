(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{cAcB:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J");class o{}var u=e("pMnS"),r=e("s7LF"),i=e("HsOI"),a=e("ZwOa"),c=e("/HVE"),b=e("Xd0L"),s=e("oapL"),d=e("bujt"),g=e("Fwaw"),p=e("5GAg"),C=e("omvX"),m=e("SxV6");class h{constructor(n,l,e){this.formBuilder=n,this.authService=l,this.router=e,this.hide=!0,this.loginForm=this.formBuilder.group({username:"",password:""}),localStorage.clear()}ngOnInit(){}onSubmit(n){this.authService.login(n.username,n.password).pipe(Object(m.a)()).subscribe(n=>{if(this.authService.isLoggedIn){let n=this.authService.redirectUrl?this.router.parseUrl(this.authService.redirectUrl):"/home";this.router.navigateByUrl(n,{queryParamsHandling:"preserve",preserveFragment:!0})}})}}var f=e("IheW"),E=e("lJxs"),x=e("AytR");let v=(()=>{class n{constructor(n){this.http=n,this.isLoggedIn=!1}login(n,l){localStorage.setItem("code",this.b64EncodeUnicode(`${n}:${l}`));const e=(new f.g).set("grant_type","password").set("username",n).set("password",l);return this.http.post(x.a.apiAuthentication,e.toString()).pipe(Object(E.a)(n=>(n&&n.token.accessToken&&(localStorage.setItem("session",JSON.stringify(n.token)),this.isLoggedIn=!0),n)))}logout(){this.isLoggedIn=!1,localStorage.clear()}b64EncodeUnicode(n){return btoa(encodeURIComponent(n).replace(/%([0-9A-F]{2})/g,(n,l)=>String.fromCharCode("0x"+l)))}}return n.ngInjectableDef=t.Sb({factory:function(){return new n(t.Tb(f.c))},token:n,providedIn:"root"}),n})();var _=e("iInd"),y=t.qb({encapsulation:0,styles:[['body[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;background:#fff;margin:0;padding:0}a[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{color:#126db5;text-decoration:none}a[_ngcontent-%COMP%]{font-weight:700}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{font-family:"Open Sans",Arial,sans-serif;color:#fff}.login-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;height:100vh;background-image:url(businessman-3213659_1920.e4c0df4900b73bf08f01.jpg);background-position:center center;background-repeat:no-repeat;background-attachment:fixed;background-size:cover;background-color:#464646}.bordered-box[_ngcontent-%COMP%]{color:#fff;border:1px solid #126db5;border-radius:4px;padding:7px;margin:6px}.column-gray[_ngcontent-%COMP%]{background:0 0}.column[_ngcontent-%COMP%]{flex:1;flex-direction:column}.column-double[_ngcontent-%COMP%]{flex-direction:column;flex:2}.side[_ngcontent-%COMP%]{flex:.3}.centered-box[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column}.center-text[_ngcontent-%COMP%]{text-align:center}.login-input[_ngcontent-%COMP%]{font-family:"Open Sans",Arial,sans-serif;font-size:16px;line-height:1.5em;color:#fff;min-width:200px;max-width:350px;width:90%;padding-top:10px;margin:5px;border-top:transparent;border-right:transparent;border-bottom:1px solid #126db5;border-left:transparent;background:0 0}.login-input[_ngcontent-%COMP%]:active{border-bottom:2px solid #126db5}.login-input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#ccc}.login-input[_ngcontent-%COMP%]::-moz-placeholder{color:#ccc}.login-input[_ngcontent-%COMP%]::-ms-input-placeholder{color:#ccc}.login-input[_ngcontent-%COMP%]::placeholder{color:#ccc}.button[_ngcontent-%COMP%]{max-width:350px;width:90%;font-weight:700;font-size:14pt;color:#126db5;background:0 0;padding:5px;border:1px solid #126db5;border-radius:5px;margin:15px}.image[_ngcontent-%COMP%]{margin:auto;max-width:80%;min-width:200px;height:auto}.login-input[_ngcontent-%COMP%]:focus{color:#ccccc;outline:transparent;border-bottom:2px solid #126db5}.login-form[_ngcontent-%COMP%]{height:14em;background:#282e33;border-top:3px solid #434a52;border-bottom:3px solid #434a52;opacity:.8;filter:alpha(opacity=80)}.login-visionpi-description[_ngcontent-%COMP%]{margin:auto;padding:22px;height:20em;border-radius:5px;background:#282e33;border-top:3px solid #434a52;border-bottom:3px solid #434a52;opacity:.9}[_ngcontent-%COMP%]:focus{background:0 0;outline-color:#ccccc}@media all and (max-width:800px){.login-container[_ngcontent-%COMP%]{justify-content:space-around}}@media all and (max-width:500px){.login-container[_ngcontent-%COMP%]{flex-direction:column}}']],data:{}});function P(n){return t.Ob(0,[(n()(),t.sb(0,0,null,null,36,"div",[["class","login-container"]],null,null,null,null,null)),(n()(),t.sb(1,0,null,null,35,"div",[["class","column column-double"]],null,null,null,null,null)),(n()(),t.sb(2,0,null,null,34,"div",[["class","login-container"]],null,null,null,null,null)),(n()(),t.sb(3,0,null,null,5,"div",[["class","white-text center-text centered-box column"]],null,null,null,null,null)),(n()(),t.sb(4,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),t.sb(5,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),t.Mb(-1,null,["VisionPI"])),(n()(),t.sb(7,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t.Mb(-1,null,["Your security solution!"])),(n()(),t.sb(9,0,null,null,27,"div",[["class","column-gray center-text centered-box column"]],null,null,null,null,null)),(n()(),t.sb(10,0,null,null,26,"div",[["class","login-form"]],null,null,null,null,null)),(n()(),t.sb(11,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),t.Mb(-1,null,["Welcome!"])),(n()(),t.sb(13,0,null,null,23,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,l,e){var o=!0,u=n.component;return"submit"===l&&(o=!1!==t.Eb(n,15).onSubmit(e)&&o),"reset"===l&&(o=!1!==t.Eb(n,15).onReset()&&o),"ngSubmit"===l&&(o=!1!==u.onSubmit(u.loginForm.value)&&o),o}),null,null)),t.rb(14,16384,null,0,r.C,[],null,null),t.rb(15,540672,null,0,r.l,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Jb(2048,null,r.d,null,[r.l]),t.rb(17,16384,null,0,r.t,[[4,r.d]],null,null),(n()(),t.sb(18,0,null,null,7,"input",[["class","login-input mat-input-element mat-form-field-autofill-control"],["formControlName","username"],["matInput",""],["placeholder","Username"]],[[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(n,l,e){var o=!0;return"input"===l&&(o=!1!==t.Eb(n,20)._handleInput(e.target.value)&&o),"blur"===l&&(o=!1!==t.Eb(n,20).onTouched()&&o),"compositionstart"===l&&(o=!1!==t.Eb(n,20)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t.Eb(n,20)._compositionEnd(e.target.value)&&o),"blur"===l&&(o=!1!==t.Eb(n,24)._focusChanged(!1)&&o),"focus"===l&&(o=!1!==t.Eb(n,24)._focusChanged(!0)&&o),"input"===l&&(o=!1!==t.Eb(n,24)._onInput()&&o),o}),null,null)),t.Jb(6144,null,i.c,null,[a.b]),t.rb(20,16384,null,0,r.e,[t.D,t.k,[2,r.a]],null,null),t.Jb(1024,null,r.q,(function(n){return[n]}),[r.e]),t.rb(22,671744,null,0,r.j,[[3,r.d],[8,null],[8,null],[6,r.q],[2,r.B]],{name:[0,"name"]},null),t.Jb(2048,null,r.r,null,[r.j]),t.rb(24,999424,null,0,a.b,[t.k,c.a,[6,r.r],[2,r.u],[2,r.l],b.d,[8,null],s.a,t.y],{placeholder:[0,"placeholder"]},null),t.rb(25,16384,null,0,r.s,[[4,r.r]],null,null),(n()(),t.sb(26,0,null,null,7,"input",[["class","login-input mat-input-element mat-form-field-autofill-control"],["formControlName","password"],["matInput",""],["placeholder","Enter your password"]],[[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(n,l,e){var o=!0;return"input"===l&&(o=!1!==t.Eb(n,28)._handleInput(e.target.value)&&o),"blur"===l&&(o=!1!==t.Eb(n,28).onTouched()&&o),"compositionstart"===l&&(o=!1!==t.Eb(n,28)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t.Eb(n,28)._compositionEnd(e.target.value)&&o),"blur"===l&&(o=!1!==t.Eb(n,32)._focusChanged(!1)&&o),"focus"===l&&(o=!1!==t.Eb(n,32)._focusChanged(!0)&&o),"input"===l&&(o=!1!==t.Eb(n,32)._onInput()&&o),o}),null,null)),t.Jb(6144,null,i.c,null,[a.b]),t.rb(28,16384,null,0,r.e,[t.D,t.k,[2,r.a]],null,null),t.Jb(1024,null,r.q,(function(n){return[n]}),[r.e]),t.rb(30,671744,null,0,r.j,[[3,r.d],[8,null],[8,null],[6,r.q],[2,r.B]],{name:[0,"name"]},null),t.Jb(2048,null,r.r,null,[r.j]),t.rb(32,999424,null,0,a.b,[t.k,c.a,[6,r.r],[2,r.u],[2,r.l],b.d,[8,null],s.a,t.y],{placeholder:[0,"placeholder"],type:[1,"type"]},null),t.rb(33,16384,null,0,r.s,[[4,r.r]],null,null),(n()(),t.sb(34,0,null,null,2,"button",[["class","white-text button"],["color","accent"],["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,d.b,d.a)),t.rb(35,180224,null,0,g.b,[t.k,p.h,[2,C.a]],{color:[0,"color"]},null),(n()(),t.Mb(-1,0,["Log in"]))],(function(n,l){var e=l.component;n(l,15,0,e.loginForm),n(l,22,0,"username"),n(l,24,0,"Username"),n(l,30,0,"password"),n(l,32,0,"Enter your password",e.hide?"password":"text"),n(l,35,0,"accent")}),(function(n,l){n(l,13,0,t.Eb(l,17).ngClassUntouched,t.Eb(l,17).ngClassTouched,t.Eb(l,17).ngClassPristine,t.Eb(l,17).ngClassDirty,t.Eb(l,17).ngClassValid,t.Eb(l,17).ngClassInvalid,t.Eb(l,17).ngClassPending),n(l,18,1,[t.Eb(l,24)._isServer,t.Eb(l,24).id,t.Eb(l,24).placeholder,t.Eb(l,24).disabled,t.Eb(l,24).required,t.Eb(l,24).readonly&&!t.Eb(l,24)._isNativeSelect||null,t.Eb(l,24)._ariaDescribedby||null,t.Eb(l,24).errorState,t.Eb(l,24).required.toString(),t.Eb(l,25).ngClassUntouched,t.Eb(l,25).ngClassTouched,t.Eb(l,25).ngClassPristine,t.Eb(l,25).ngClassDirty,t.Eb(l,25).ngClassValid,t.Eb(l,25).ngClassInvalid,t.Eb(l,25).ngClassPending]),n(l,26,1,[t.Eb(l,32)._isServer,t.Eb(l,32).id,t.Eb(l,32).placeholder,t.Eb(l,32).disabled,t.Eb(l,32).required,t.Eb(l,32).readonly&&!t.Eb(l,32)._isNativeSelect||null,t.Eb(l,32)._ariaDescribedby||null,t.Eb(l,32).errorState,t.Eb(l,32).required.toString(),t.Eb(l,33).ngClassUntouched,t.Eb(l,33).ngClassTouched,t.Eb(l,33).ngClassPristine,t.Eb(l,33).ngClassDirty,t.Eb(l,33).ngClassValid,t.Eb(l,33).ngClassInvalid,t.Eb(l,33).ngClassPending]),n(l,34,0,t.Eb(l,35).disabled||null,"NoopAnimations"===t.Eb(l,35)._animationMode)}))}function O(n){return t.Ob(0,[(n()(),t.sb(0,0,null,null,1,"app-login",[],null,null,null,P,y)),t.rb(1,114688,null,0,h,[r.h,v,_.k],null,null)],(function(n,l){n(l,1,0)}),null)}var M=t.ob("app-login",h,O,{},{},[]),w=e("t68o"),S=e("zbXB"),k=e("NcP4"),I=e("yWMr"),j=e("SVse"),q=e("POq0"),J=e("QQfA"),U=e("IP0z"),z=e("gavF"),A=e("JjoW"),B=e("s6ns"),N=e("821u"),V=e("Mz6y"),F=e("cUpR"),D=e("OIZN");class L{}var T=e("BzsH"),W=e("Gi4r"),H=e("hOhj"),Q=e("BV1i"),R=e("KPQW"),Z=e("02hT"),G=e("Q+lL"),K=e("FVPZ"),X=e("zMNK"),Y=e("elxJ"),$=e("kNGD"),nn=e("zQui"),ln=e("8rEH"),en=e("5Bek"),tn=e("c9fC"),on=e("rWV4"),un=e("r0V8"),rn=e("lwm9"),an=e("PI13"),cn=e("dvZr");e.d(l,"AuthModuleNgFactory",(function(){return bn}));var bn=t.pb(o,[],(function(n){return t.Bb([t.Cb(512,t.j,t.ab,[[8,[u.a,M,w.a,S.b,S.a,k.a,I.a]],[3,t.j],t.w]),t.Cb(4608,j.n,j.m,[t.t,[2,j.C]]),t.Cb(4608,q.c,q.c,[]),t.Cb(4608,b.d,b.d,[]),t.Cb(4608,J.c,J.c,[J.i,J.e,t.j,J.h,J.f,t.q,t.y,j.d,U.b,[2,j.h]]),t.Cb(5120,J.j,J.k,[J.c]),t.Cb(5120,z.c,z.j,[J.c]),t.Cb(5120,A.a,A.b,[J.c]),t.Cb(5120,B.c,B.d,[J.c]),t.Cb(135680,B.e,B.e,[J.c,t.q,[2,j.h],[2,B.b],B.c,[3,B.e],J.e]),t.Cb(4608,N.i,N.i,[]),t.Cb(5120,N.a,N.b,[J.c]),t.Cb(4608,b.c,b.x,[[2,b.h],c.a]),t.Cb(5120,V.b,V.c,[J.c]),t.Cb(4608,F.e,b.e,[[2,b.i],[2,b.n]]),t.Cb(5120,D.c,D.a,[[3,D.c]]),t.Cb(4608,r.h,r.h,[]),t.Cb(4608,r.A,r.A,[]),t.Cb(1073742336,j.c,j.c,[]),t.Cb(1073742336,_.n,_.n,[[2,_.s],[2,_.k]]),t.Cb(1073742336,L,L,[]),t.Cb(1073742336,U.a,U.a,[]),t.Cb(1073742336,b.n,b.n,[[2,b.f],[2,F.f]]),t.Cb(1073742336,c.b,c.b,[]),t.Cb(1073742336,b.w,b.w,[]),t.Cb(1073742336,g.c,g.c,[]),t.Cb(1073742336,T.b,T.b,[]),t.Cb(1073742336,W.c,W.c,[]),t.Cb(1073742336,H.c,H.c,[]),t.Cb(1073742336,Q.h,Q.h,[]),t.Cb(1073742336,q.d,q.d,[]),t.Cb(1073742336,p.a,p.a,[]),t.Cb(1073742336,R.a,R.a,[]),t.Cb(1073742336,b.o,b.o,[]),t.Cb(1073742336,b.u,b.u,[]),t.Cb(1073742336,Z.b,Z.b,[]),t.Cb(1073742336,G.c,G.c,[]),t.Cb(1073742336,K.a,K.a,[]),t.Cb(1073742336,i.d,i.d,[]),t.Cb(1073742336,s.c,s.c,[]),t.Cb(1073742336,a.c,a.c,[]),t.Cb(1073742336,X.g,X.g,[]),t.Cb(1073742336,J.g,J.g,[]),t.Cb(1073742336,z.i,z.i,[]),t.Cb(1073742336,z.f,z.f,[]),t.Cb(1073742336,b.s,b.s,[]),t.Cb(1073742336,A.d,A.d,[]),t.Cb(1073742336,Y.a,Y.a,[]),t.Cb(1073742336,B.k,B.k,[]),t.Cb(1073742336,N.j,N.j,[]),t.Cb(1073742336,b.y,b.y,[]),t.Cb(1073742336,b.p,b.p,[]),t.Cb(1073742336,$.b,$.b,[]),t.Cb(1073742336,V.e,V.e,[]),t.Cb(1073742336,nn.p,nn.p,[]),t.Cb(1073742336,ln.m,ln.m,[]),t.Cb(1073742336,D.d,D.d,[]),t.Cb(1073742336,en.c,en.c,[]),t.Cb(1073742336,tn.d,tn.d,[]),t.Cb(1073742336,on.a,on.a,[]),t.Cb(1073742336,un.b,un.b,[]),t.Cb(1073742336,un.a,un.a,[]),t.Cb(1073742336,rn.e,rn.e,[]),t.Cb(1073742336,an.a,an.a,[]),t.Cb(1073742336,r.z,r.z,[]),t.Cb(1073742336,r.w,r.w,[]),t.Cb(1073742336,o,o,[]),t.Cb(1024,_.i,(function(){return[[{path:"",component:h}]]}),[]),t.Cb(256,b.g,b.k,[]),t.Cb(256,$.a,{separatorKeyCodes:[cn.f]},[])])}))}}]);