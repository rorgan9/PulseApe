(this.webpackJsonphashlips_nft_minting_dapp_fazelpejmanfar=this.webpackJsonphashlips_nft_minting_dapp_fazelpejmanfar||[]).push([[0],{387:function(n,e){},391:function(n,e){},392:function(n,e){},396:function(n,e){},397:function(n,e){},423:function(n,e){},425:function(n,e){},439:function(n,e){},441:function(n,e){},456:function(n,e){},475:function(n,e){},477:function(n,e){},495:function(n,e){},496:function(n,e){},567:function(n,e){},569:function(n,e){},575:function(n,e){},587:function(n,e){},590:function(n,e){},595:function(n,e){},838:function(n,e,t){},839:function(n,e,t){"use strict";t.r(e);var i,a,r,c,o,s,d,x,l,p,b,h,j,g,u,f,m,O,w,y,v,k,A,C,S,_,E,T,N,M,z,F,D,P,L,R,I,K,U,Y,X,H,W,B,q,Q=t(0),G=t.n(Q),J=t(48),$=t.n(J),V=t(50),Z=t(22),nn=t(5),en=t(18),tn=t.n(en),an=t(40),rn=t(95),cn=t.n(rn),on=t(110),sn=t.n(on),dn=t(113),xn=t(353),ln=t(20),pn={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},bn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(ln.a)(Object(ln.a)({},pn),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(ln.a)(Object(ln.a)({},n),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(ln.a)(Object(ln.a)({},pn),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(ln.a)(Object(ln.a)({},n),{},{account:e.payload.account});default:return n}},hn={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},jn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:hn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(ln.a)(Object(ln.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(ln.a)(Object(ln.a)({},n),{},{loading:!1,totalSupply:e.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(ln.a)(Object(ln.a)({},hn),{},{loading:!1,error:!0,errorMsg:e.payload});default:return n}},gn=Object(dn.b)({blockchain:bn,data:jn}),un=[xn.a],fn=Object(dn.c)(dn.a.apply(void 0,un)),mn=Object(dn.d)(gn,fn),On=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},wn=function(){return function(){var n=Object(V.a)(tn.a.mark((function n(e){var t;return tn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,mn.getState().blockchain.smartContract.methods.totalSupply().call();case 4:t=n.sent,e({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:t}}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),e(On("Could not load data from contract."));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()},yn=function(n){return{type:"CONNECTION_FAILED",payload:n}},vn=function(){return function(){var n=Object(V.a)(tn.a.mark((function n(e){var t,i,a,r,c,o,s,d,x,l,p,b;return tn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"CONNECTION_REQUEST"}),n.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return t=n.sent,n.next=6,t.json();case 6:return i=n.sent,n.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return a=n.sent,n.next=12,a.json();case 12:if(r=n.sent,c=window,o=c.ethereum,!(o&&o.isMetaMask)){n.next=50;break}return cn.a.setProvider(o),s=new sn.a(o),n.prev=18,n.next=21,o.request({method:"eth_requestAccounts"});case 21:return d=n.sent,n.next=24,o.request({method:"net_version"});case 24:if(n.sent!=r.NETWORK.ID){n.next=33;break}x=new cn.a(i,r.CONTRACT_ADDRESS),l=new cn.a(i,r.TOKEN),e({type:"CONNECTION_SUCCESS",payload:{account:d[0],smartContract:x,smartToken:l,web3:s}}),o.on("accountsChanged",(function(n){e(kn(n[0]))})),o.on("chainChanged",(function(){window.location.reload()})),n.next=43;break;case 33:return p=r.NETWORK.ID,b=sn.a.utils.toHex(p.toString()),n.prev=35,n.next=38,o.request({method:"wallet_switchEthereumChain",params:[{chainId:b}]});case 38:n.next=43;break;case 40:n.prev=40,n.t0=n.catch(35),4902===n.t0.code&&e(yn("Please Add ".concat(r.NETWORK.NAME," Network to your Metamask.")));case 43:n.next=48;break;case 45:n.prev=45,n.t1=n.catch(18),e(yn("Something went wrong."));case 48:n.next=51;break;case 50:e(yn("Install Metamask."));case 51:case"end":return n.stop()}}),n,null,[[18,45],[35,40]])})));return function(e){return n.apply(this,arguments)}}()},kn=function(n){return function(){var e=Object(V.a)(tn.a.mark((function e(t){return tn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"UPDATE_ACCOUNT",payload:{account:n}}),t(wn());case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},An=t(6),Cn=An.b.div(i||(i=Object(nn.a)(["\n  background-color: #fff;\n  background-image: ",";\n  background-size:fit;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){var e=n.image;return e?"url(".concat(e,")"):"none"})),Sn=An.b.div(a||(a=Object(nn.a)(["\n  height: 8px;\n  width: 8px;\n"]))),_n=An.b.div(r||(r=Object(nn.a)(["\n  height: 16px;\n  width: 16px;\n"]))),En=An.b.div(c||(c=Object(nn.a)(["\n  height: 24px;\n  width: 24px;\n"]))),Tn=An.b.div(o||(o=Object(nn.a)(["\n  height: 32px;\n  width: 32px;\n"]))),Nn=An.b.div(s||(s=Object(nn.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: fit;\n  background-position: center;\n"])),(function(n){var e=n.flex;return e||0}),(function(n){var e=n.fd;return e||"column"}),(function(n){var e=n.jc;return e||"flex-start"}),(function(n){var e=n.ai;return e||"flex-start"}),(function(n){return n.test?"pink":"none"}),(function(n){var e=n.image;return e?"url(".concat(e,")"):"none"})),Mn=An.b.div(d||(d=Object(nn.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: center;\n  justify-content: center;\n  align-items: center;\n  //border: 2px solid #A673EF;\n  border-radius: 10px;\n  //box-shadow: 0px 0px 3px 0px #A673EF;\n"])),(function(n){var e=n.flex;return e||0})),zn=An.b.p(x||(x=Object(nn.a)(["\n  font-family: 'Upheaval';\n  color: var(--primary-text);\n  font-size: 60px;\n  font-weight: 400;\n  letter-spacing: 8px;\n  line-height: 1.6;\n  text-align: center;\n  @media (max-width: 565px) {\n    font-size: 25px;\n    text-align: center;\n    letter-spacing: 2px;\n  }\n"]))),Fn=An.b.p(l||(l=Object(nn.a)(["\n  font-family: 'Upheaval';\n  color: var(--primary-text);\n  font-size: 24px;\n  font-weight: 400;\n  letter-spacing: 8px;\n  line-height: 1.6;\n  @media (max-width: 565px) {\n    font-size: 20px;\n    letter-spacing: 2px;\n  }\n"]))),Dn=An.b.p(p||(p=Object(nn.a)(["\n  font-family: 'Upheaval';\n  color: var(--primary-text);\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: 2px;\n  line-height: 1.6;\n  @media (max-width: 565px) {\n    font-size: 0.75rem;\n    letter-spacing: 2px;\n  }\n"]))),Pn=(An.b.p(b||(b=Object(nn.a)(["\n  font-family: 'Upheaval';\n  color: white;\n  font-size: 3rem;\n  font-weight: bold;\n  letter-spacing: 8px;\n  line-height: 1.6;\n  border: 2px solid midnightblue;\n  width: 400px;\n  background: #9DC5F0;\n  text-align: center;\n  @media (max-width: 565px) {\n    font-size: 20px;\n    letter-spacing: 2px;\n    width: 200px;\n  }\n"]))),An.b.p(h||(h=Object(nn.a)(["\n  font-family: 'Renomono';\n  color: var(--primary-text);\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 1.6;\n  @media (max-width: 565px) {\n    font-size: 0.75rem;\n    letter-spacing: 2px;\n    text-align: center;\n  }\n"])))),Ln=An.b.p(j||(j=Object(nn.a)(["\n  color: var(--primary-text);\n  font-size: 60px;\n  line-height: 1.6;\n"]))),Rn=An.b.p(g||(g=Object(nn.a)(["\n  color: var(--primary-text);\n  font-size: 30px;\n  line-height: 1.6;\n  @media (max-width: 565px) {\n    font-size: 20px;\n    line-height: 0;\n  }\n"]))),In=(An.b.div(u||(u=Object(nn.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),An.b.hr(f||(f=Object(nn.a)(["\n  border: 2px solid white;  \n  background-color: white;\n  border-radius: 2px;\n  width: 450px;\n  @media (max-width: 565px) {\n    width: 350px;\n  }\n"]))),An.b.a(m||(m=Object(nn.a)(["\n  color: var(--primary-text);\n  text-decoration: none;\n  margin-right: 5rem;\n  cursor: pointer;\n  :hover {\n    color: #FF8938;\n  }\n  @media (max-width: 565px) {\n    margin-right: 0.75rem;\n    margin-top: 1rem;\n  }\n"])))),Kn=An.b.img(O||(O=Object(nn.a)(["\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    margin-right: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    :hover {\n      transform: scale(1.5);\n      transition: transform 0.5s;\n    }\n"]))),Un=An.b.div(w||(w=Object(nn.a)(["\ndisplay: flex;\nalign-items: center;\nmargin-right: 3.5rem;\n@media (max-width: 565px) {\n  margin-right: 0;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  flex-direction: column;\n}\n"]))),Yn=An.b.div(y||(y=Object(nn.a)(["\ndisplay: flex;\nalign-items: center;\n@media (max-width: 565px) {\n  margin-right: 0;\n  margin-top: 20px;\n  flex-direction: row;\n}\n"]))),Xn=An.b.div(v||(v=Object(nn.a)(["\n    display: flex;\n    align-items: center;\n    @media (max-width: 565px) {\n      margin-top: 10px;\n      margin-bottom: 10px;\n    }\n"]))),Hn=An.b.div(k||(k=Object(nn.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: center;;\n  align-items: center;\n  background-color: ",";\n  width: 100%;\n  margin-top: 5%;\n"])),(function(n){var e=n.flex;return e||0}),(function(n){var e=n.fd;return e||"column"}),(function(n){return n.test?"pink":"none"})),Wn=An.b.p(A||(A=Object(nn.a)(["\ntext-align: center;\nfont-size: 1rem;\nletter-spacing: 1px;\nline-height: 2;\nwidth: 70%;\n"]))),Bn=(An.b.button(C||(C=Object(nn.a)(["\n  font-family: 'coder';\n  padding: 10px;\n  font-size: 1rem;\n  border-radius: 40px;\n  border: none;\n  background: linear-gradient(86.57deg, #D8AE43 6.92%, rgba(255, 92, 0, 0.79) 100.73%);\n  padding: 10px;\n  letter-spacing: 2px;\n  font-weight: bold;\n  color: white;\n  width: 270px;\n  height: 50px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  :hover {\n    color: black;\n  }\n  @media (max-width: 565px) {\n    width: 200px;\n    height: 50px;\n    font-size: 0.75rem;\n  }\n"]))),An.b.div(S||(S=Object(nn.a)(["\n  display: flex;\n  background: #171717;\n  border-radius: 40px;\n  width: max-content;\n  margin-top: 5%;\n  align-items: center;\n    justify-content: center;\n    @media (max-width: 565px) {\n      width: 100%;\n    }\n"]))),An.b.div(_||(_=Object(nn.a)(["\n  display: flex;\n  margin-top: 5%;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  gap: 5%;\n  @media (max-width: 565px) {\n    flex-direction: column;\n  }\n"]))),An.b.div(E||(E=Object(nn.a)(["\nheight: 120px;\nwidth: 250px;\nborder-radius: 20px;\nbackground: #171717;\npadding: 10px;\n@media (max-width: 565px) {\n  margin-top: 10px;\n}\n:hover {\n  transform: scale(1.2);\n}\n\n"]))),An.b.div(T||(T=Object(nn.a)(["\n    flex-direction: row;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    align-content: center;\n    padding: 10px;\n"]))),An.b.img(N||(N=Object(nn.a)(["\n    width: 45px;\n    height: 45px;\n    border-radius: 50%;\n    margin-right: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n"]))),An.b.p(M||(M=Object(nn.a)(["\ntext-align: left;\nwidth: 125px;\nfont-size: 1rem;\n"]))),An.b.p(z||(z=Object(nn.a)(["\ntext-align: left;\nfont-size: 0.75rem;\n"]))),An.b.div(F||(F=Object(nn.a)(["\nwidth: 30%;\n@media (max-width: 565px) {\n  width: 80%;\n}\n"])))),qn=(t(692),t(693),t(829)),Qn=t(854),Gn=t(852),Jn=t(851),$n=t(853),Vn=t(855),Zn=t(856),ne=t(1),ee=An.b.button(D||(D=Object(nn.a)(["\n  font-family: 'coder';\n  padding: 10px;\n  font-size: 1rem;\n  border-radius: 6px;\n  border: none;\n  background-color: black;\n  padding: 10px;\n  letter-spacing: 2px;\n  font-weight: bold;\n  color: white;\n  width: 270px;\n  height: 50px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px black;\n  -webkit-box-shadow: 0px 6px 0px -2px black;\n  -moz-box-shadow: 0px 6px 0px -2px black;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  :hover {\n    color: silver;\n  }\n  @media (max-width: 565px) {\n    width: 200px;\n    height: 50px;\n    font-size: 0.75rem;\n  }\n"]))),te=An.b.button(P||(P=Object(nn.a)(["\n  font-family: 'coder';\n  padding: 10px;\n  font-size: 1rem;\n  border-radius: 6px;\n  border: none;\n  background-color: black;\n  padding: 10px;\n  letter-spacing: 2px;\n  font-weight: bold;\n  color: white;\n  width: 270px;\n  height: 50px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px black;\n  -webkit-box-shadow: 0px 6px 0px -2px black;\n  -moz-box-shadow: 0px 6px 0px -2px black;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  :hover {\n    color: silver;\n  }\n  @media (max-width: 565px) {\n    width: 200px;\n    height: 50px;\n    font-size: 0.75rem;\n  }\n"]))),ie=An.b.button(L||(L=Object(nn.a)(["\n  font-family: 'coder';\n  font-size: 0.75rem;\n  border-radius: 10px;\n  background-color: #F48C2C;\n  font-weight: bold;\n  color: white;\n  width: 80px;\n  height: 30px;\n  cursor: pointer;\n  letter-spacing: 2px;\n  :hover {\n    color: black;\n  }\n  @media (max-width: 565px) {\n    width: 200px;\n    height: 50px;\n    font-size: 0.75rem;\n  }\n"]))),ae=An.b.button(R||(R=Object(nn.a)(["\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  background-color: transparent;\n  padding: 10px;\n  font-weight: bold;\n  font-size: 30px;\n  color: white;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  :hover {\n    color: silver;\n  }\n"]))),re=An.b.div(I||(I=Object(nn.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nalign-content: center;\ngap: 10%;\nwidth: 300px;\n"]))),ce=An.b.div(K||(K=Object(nn.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: center;\n  margin: auto;\n  width: 70%;\n  border: 2px solid white;\n  border-radius: 40px;\n  background: linear-gradient(90deg, rgba(135,142,20,1) 10%, rgba(0,125,223,1) 93%);\n    @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),oe=An.b.div(U||(U=Object(nn.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  max-height: 80px;\n  padding: 10px;\n  background-color : #252525;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n  @media (max-width: 565px) {\n    max-height: 220px;\n  }\n"]))),se=An.b.img(Y||(Y=Object(nn.a)(["\n  display: inline;\n  width: 100px;\n  @media (max-width: 767px) {\n    width: 50px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),de=An.b.img(X||(X=Object(nn.a)(["\n  width: 450px;\n  border-radius: 5px;\n  @media (min-width: 900px) {\n    width: 450px;\n  }\n  @media (min-width: 1000px) {\n    width: 450px;\n  }\n  transition: width 0.5s;\n  @media (max-width: 565px) {\n    width: 200px;\n  }\n"]))),xe=(An.b.img(H||(H=Object(nn.a)(["\n  width: 100%;\n  border-radius: 5px;\n  transition: width 0.5s;\n"]))),An.b.img(W||(W=Object(nn.a)(["\n  width: 220px;\n  height: 220px;\n  border-radius: 5px;\n  @media (min-width: 900px) {\n    width: 220px;\n    height: 220px;\n  }\n  @media (min-width: 1000px) {\n    width: 220px;\n    height: 220px;\n  }\n  transition: width 0.5s;\n  @media (max-width: 565px) {\n    width: 200px;\n  }\n"]))),An.b.a(B||(B=Object(nn.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])))),le=An.b.div(q||(q=Object(nn.a)(["\n  text-decoration: none;\n  border-radius: 10px;\n  border: 2px solid white;\n  background-color: transparent;\n  //padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  width: 180px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px white;\n  -webkit-box-shadow: 0px 4px 0px -2px white;\n  -moz-box-shadow: 0px 4px 0px -2px white;\n  @media (max-width: 565px) {\n    margin-top: 20px;\n  \n"])));var pe,be,he,je,ge,ue,fe,me,Oe=function(){var n=Object(an.b)(),e=Object(an.c)((function(n){return n.blockchain})),t=Object(an.c)((function(n){return n.data})),i=Object(Q.useState)("Not Connected"),a=Object(Z.a)(i,2),r=a[0],c=a[1],o=Object(Q.useState)(!1),s=Object(Z.a)(o,2),d=s[0],x=s[1],l=Object(Q.useState)(""),p=Object(Z.a)(l,2),b=p[0],h=p[1],j=Object(Q.useState)(1),g=Object(Z.a)(j,2),u=g[0],f=g[1],m=Object(Q.useState)("2px solid #FFFFFF"),O=Object(Z.a)(m,2),w=O[0],y=O[1],v=Object(Q.useState)("0px 0px 3px 0px #FFFFFF"),k=Object(Z.a)(v,2),A=k[0],C=k[1],S=Object(Q.useState)("red"),_=Object(Z.a)(S,2),E=_[0],T=_[1],N=G.a.useState("info"),M=Object(Z.a)(N,2),z=(M[0],M[1],G.a.useState("topStart")),F=Object(Z.a)(z,2),D=F[0],P=(F[1],Object(ne.jsx)(Jn.a,{type:"error",header:"error",closable:!0,children:"Sorry, something went wrong please try again later."})),L=Object(ne.jsx)(Jn.a,{type:"success",header:"success",closable:!0,children:"Congrats, Mint Was successfull."}),R=Object(ne.jsxs)(Jn.a,{type:"info",header:"success",closable:!0,children:[Object(ne.jsx)(Vn.a,{})," Minting in Progress...."]}),I=Object(Q.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,DISPLAY_COST:0,WL_Display:0,GAS_LIMIT:0,MAX_PER_TX:0,MARKETPLACE:"",MARKETPLACE_LINK:"",Telegram:"",Discord:"",Twitter:"",SHOW_BACKGROUND:!1}),K=Object(Z.a)(I,2),U=K[0],Y=K[1],X=function(){""!==e.account&&null!==e.smartContract&&(n(wn(e.account)),c(e.account.substring(0,4)+"..."+e.account.substring(38,42)),T("green"))},H=function(){var n=Object(V.a)(tn.a.mark((function n(){var e,t;return tn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,Y(t);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(Q.useEffect)((function(){H()}),[]),Object(Q.useEffect)((function(){X()}),[e.account]),Object(ne.jsx)(Cn,{children:Object(ne.jsxs)(Nn,{flex:1,style:{backgroundColor:"var(--primary)"},image:!U.SHOW_BACKGROUND||"/config/images/bg.gif",children:[Object(ne.jsxs)(oe,{children:[Object(ne.jsx)(re,{children:Object(ne.jsx)("a",{href:"#",target:"_blank",children:Object(ne.jsx)(se,{alt:"logo",src:"/config/images/logo.png"})})}),Object(ne.jsxs)(Xn,{children:[Object(ne.jsx)(In,{href:"#About",children:"About"}),Object(ne.jsx)(In,{href:"#sneak",children:"Sneak Peaks"}),Object(ne.jsx)(In,{href:"#faq",children:"FAQ"})]}),Object(ne.jsxs)(Un,{children:[Object(ne.jsxs)(Yn,{children:[Object(ne.jsx)("a",{href:U.Telegram,target:"_blank",children:Object(ne.jsx)(Kn,{src:"/config/images/telegram.svg",alt:"telegram"})}),Object(ne.jsx)("a",{href:U.Twitter,target:"_blank",children:Object(ne.jsx)(Kn,{src:"/config/images/twitter.svg",alt:"twitter"})}),Object(ne.jsx)("a",{href:U.Discord,target:"_blank",children:Object(ne.jsx)(Kn,{src:"/config/images/discord.svg",alt:"discord"})}),Object(ne.jsx)("a",{href:U.MARKETPLACE_LINK,target:"_blank",children:Object(ne.jsx)(Kn,{src:"/config/images/Marketplace.png",alt:"Marketplace"})})]}),Object(ne.jsx)(le,{children:""!==e.account?Object(ne.jsx)(ne.Fragment,{children:Object(ne.jsxs)(Pn,{style:{fontSize:"1rem",color:"white"},children:[Object(ne.jsx)(Zn.a,{color:E})," ",r]})}):null})]})]}),Object(ne.jsx)(Tn,{}),Object(ne.jsx)(Nn,{flex:1,jc:"center",ai:"center",children:Object(ne.jsxs)(zn,{children:["Mint Your ",U.NFT_NAME]})}),Object(ne.jsx)(_n,{}),Object(ne.jsxs)(ce,{flex:1,style:{padding:24},test:!0,children:[Object(ne.jsx)(de,{src:"/config/images/11.gif",alt:"image"}),Object(ne.jsx)(_n,{}),Object(ne.jsxs)(Nn,{flex:1,jc:"center",ai:"center",children:[Number(t.totalSupply)>=U.MAX_SUPPLY?Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(Fn,{style:{textAlign:"center",color:"var(--accent-text)",fontFamily:"coder"},children:"Minted Out!! Minted Out!!"}),Object(ne.jsxs)(Ln,{style:{textAlign:"center",color:"var(--accent-text)",fontFamily:"coder"},children:["Buy ",U.NFT_NAME," on"]}),Object(ne.jsx)(_n,{}),Object(ne.jsx)(xe,{target:"_blank",href:U.MARKETPLACE_LINK,children:U.MARKETPLACE})]}):Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsxs)(Fn,{style:{textAlign:"center",color:"var(--accent-text)",fontFamily:"coder"},children:[t.totalSupply," | ",U.MAX_SUPPLY]}),Object(ne.jsx)(_n,{}),Object(ne.jsxs)(Dn,{style:{background:"white",borderRadius:5,padding:8,color:"black"},children:["Price\u2003\u2003\u2003\u2003\u2003",U.DISPLAY_COST," ",U.NETWORK.SYMBOL]}),Object(ne.jsx)(En,{}),""===e.account||null===e.smartContract?Object(ne.jsx)(ne.Fragment,{children:Object(ne.jsxs)(Nn,{ai:"center",jc:"center",children:[Object(ne.jsx)(_n,{}),Object(ne.jsxs)(te,{onClick:function(e){e.preventDefault(),n(vn()),X()},children:["Connet Wallet",Object(ne.jsx)("img",{style:{width:30,paddingLeft:10},src:"/config/images/mm.svg"})]}),""!==e.errorMsg?Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(_n,{}),Object(ne.jsx)(Ln,{style:{textAlign:"center",color:"var(--accent-text)",fontFamily:"coder",fontSize:20},children:e.errorMsg})]}):null]})}):Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsxs)(Mn,{style:{border:w,boxShadow:A},children:[Object(ne.jsx)(ae,{style:{lineHeight:.4},disabled:d?1:0,onClick:function(n){n.preventDefault(),function(){var n=u-1;n<1&&(n=1),f(n)}()},children:"-"}),Object(ne.jsxs)(Rn,{children:["\u2002\u2002\u2002\u2002",u,"\u2002\u2002\u2002\u2002"]}),Object(ne.jsx)(En,{}),Object(ne.jsx)(ae,{disabled:d?1:0,onClick:function(n){n.preventDefault(),function(){var n=u+1;n>U.MAX_PER_TX&&(n=U.MAX_PER_TX),f(n)}()},children:"+"})]}),Object(ne.jsx)(_n,{}),Object(ne.jsx)(ie,{onClick:function(n){n.preventDefault(),f(U.MAX_PER_TX)},children:"SetMax"}),Object(ne.jsx)(_n,{}),Object(ne.jsx)(_n,{}),Object(ne.jsxs)(Dn,{style:{color:"black"},children:["Total\u2003\u2003\u2003\u2003\u2003",(U.DISPLAY_COST*u).toString().substring(0,6)," ",U.NETWORK.SYMBOL]}),Object(ne.jsx)(_n,{}),Object(ne.jsx)(Sn,{}),Object(ne.jsx)(Nn,{ai:"center",jc:"center",fd:"column",children:Object(ne.jsx)(ee,{disabled:d?1:0,onClick:function(t){t.preventDefault(),function(){var t=U.DISPLAY_COST*u,i=sn.a.utils.toWei(t.toString(),"ether"),a=U.GAS_LIMIT,r=String(a);console.log("Cost: ",i),console.log("Gas limit: ",r),h("Minting your ".concat(U.NFT_NAME,"...")),x(!0),y("2px solid yellow"),C("0px 0px 3px 0px yellow"),$n.a.push(R,{placement:D}),e.smartContract.methods.mint(u).send({gasLimit:String(r),to:U.CONTRACT_ADDRESS,from:e.account,value:i}).once("error",(function(n){console.log(n),h("Sorry, something went wrong please try again later."),x(!1),$n.a.push(P,{placement:D}),y("2px solid red"),C("0px 0px 3px 0px red")})).then((function(t){console.log(t),h("".concat(U.NFT_NAME," successfully minted.")),$n.a.push(L,{placement:D}),y("2px solid green"),C("0px 0px 3px 0px green"),x(!1),n(wn(e.account))}))}(),X()},children:d?Object(ne.jsx)(Vn.a,{speed:"fast",content:"Minting..."}):"MINT"})}),Object(ne.jsx)(Sn,{}),Object(ne.jsxs)(Pn,{style:{fontSize:15},children:["Max ",U.MAX_PER_TX," Per Tx"]}),Object(ne.jsx)(Sn,{}),Object(ne.jsx)(Pn,{style:{textAlign:"center",fontSize:"1rem"},children:b})]})]}),Object(ne.jsx)(En,{})]}),Object(ne.jsx)(Tn,{})]}),Object(ne.jsx)(Tn,{}),Object(ne.jsxs)(Hn,{id:"About",children:[Object(ne.jsx)(zn,{children:"About"}),Object(ne.jsx)(Tn,{}),Object(ne.jsxs)(Wn,{children:["About PAYC",Object(ne.jsx)("br",{}),Object(ne.jsx)("br",{}),"PulseApeYatchClub is the first genesis derivative of boredapeyatchclub deployed on pulsechain."]})]}),Object(ne.jsxs)(Hn,{id:"sneak",children:[Object(ne.jsx)(zn,{children:"Sneak Peaks"}),Object(ne.jsx)(Tn,{}),Object(ne.jsx)(Bn,{children:Object(ne.jsxs)(Gn.a,{autoplay:!0,className:"custom-slider",children:[Object(ne.jsx)("img",{src:"/config/images/1.jpg"}),Object(ne.jsx)("img",{src:"/config/images/2.jpg"}),Object(ne.jsx)("img",{src:"/config/images/3.jpg"}),Object(ne.jsx)("img",{src:"/config/images/4.jpg"}),Object(ne.jsx)("img",{src:"/config/images/5.jpg"})]})})]}),Object(ne.jsxs)(Hn,{id:"faq",children:[Object(ne.jsx)(zn,{children:"FAQ"}),Object(ne.jsx)(Tn,{}),Object(ne.jsxs)(qn.a,{style:{width:"80%",borderColor:"#A9D0D2"},accordion:!0,bordered:!0,children:[Object(ne.jsx)(Qn.a,{header:"what is PAYC?",defaultExpanded:!0,children:Object(ne.jsx)(Wn,{style:{textAlign:"left"},children:"BoredApe nft deployed on pulsechain"})}),Object(ne.jsx)(Qn.a,{header:"how can i mint",children:Object(ne.jsx)(Wn,{style:{textAlign:"left"},children:"connect wallet to pulsechain, and click mint, confirm transaction on your wallet."})}),Object(ne.jsx)(Qn.a,{header:"what is the mint price",children:Object(ne.jsx)(Wn,{style:{textAlign:"left"},children:"you can mint payc with 12,000 PLS"})}),Object(ne.jsx)(Qn.a,{header:"what is purpose",children:Object(ne.jsx)(Wn,{style:{textAlign:"left"},children:"Holding payc will be like bayc on ethereum chain"})}),Object(ne.jsx)(Qn.a,{header:"what is utility",children:Object(ne.jsx)(Wn,{style:{textAlign:"left"},children:"$PAYC will be launch soon and airdrop to PulseApe NFT Holders."})})]})]}),Object(ne.jsxs)(Hn,{id:"",children:[Object(ne.jsxs)(Yn,{children:[Object(ne.jsx)("a",{href:U.Telegram,target:"_blank",children:Object(ne.jsx)(Kn,{src:"/config/images/telegram.svg",alt:"telegram"})}),Object(ne.jsx)("a",{href:U.Twitter,target:"_blank",children:Object(ne.jsx)(Kn,{src:"/config/images/twitter.svg",alt:"twitter"})}),Object(ne.jsx)("a",{href:U.Discord,target:"_blank",children:Object(ne.jsx)(Kn,{src:"/config/images/discord.svg",alt:"discord"})}),Object(ne.jsx)("a",{href:U.MARKETPLACE_LINK,target:"_blank",children:Object(ne.jsx)(Kn,{src:"/config/images/Marketplace.png",alt:"Marketplace"})})]}),Object(ne.jsx)(Tn,{}),Object(ne.jsxs)(Wn,{children:["Made with love by ",U.NFT_NAME]})]}),Object(ne.jsx)(En,{})]})})};An.b.button(pe||(pe=Object(nn.a)(["\n  font-family: 'Upheaval';\n  padding: 10px;\n  font-size: 24px;\n  border-radius: 6px;\n  border: none;\n  background-color: #fff;\n  padding: 10px;\n  letter-spacing: 6px;\n  // font-weight: bold;\n  color: #7167E3;\n  width: 450px;\n  height: 50px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),An.b.button(be||(be=Object(nn.a)(["\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  background-color: #fff;\n  padding: 10px;\n  // font-weight: bold;\n  font-size: 50px;\n  color: #7167E3;\n  width: 60px;\n  height: 60px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),An.b.div(he||(he=Object(nn.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  // margin: auto;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),An.b.div(je||(je=Object(nn.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),An.b.img(ge||(ge=Object(nn.a)(["\n  display: inline;\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),An.b.img(ue||(ue=Object(nn.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  // border: 4px dashed var(--secondary);\n  // background-color: var(--accent);\n  // border-radius: 100%;\n  width: 300px;\n  @media (min-width: 900px) {\n    width: 350px;\n  }\n  @media (min-width: 1000px) {\n    width: 400px;\n  }\n  transition: width 0.5s;\n"]))),An.b.a(fe||(fe=Object(nn.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"]))),An.b.div(me||(me=Object(nn.a)(["\n  text-decoration: none;\n  border-radius: 10px;\n  border: 2px solid white;\n  background-color: #7167E3;\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  width: 250px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n"])));var we,ye=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,857)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,r=e.getLCP,c=e.getTTFB;t(n),i(n),a(n),r(n),c(n)}))},ve=(t(838),t.p+"static/media/RenoMono.8b239c68.otf"),ke=t.p+"static/media/upheavtt.e3d365ba.ttf",Ae=Object(An.a)(we||(we=Object(nn.a)(["\n    @font-face {\n        font-family: 'Upheaval';\n        src: url(",") format('truetype');\n    }\n\n    @font-face {\n        font-family: 'Renomono';\n        src: url(",") format('opentype');\n    }\n"])),ke,ve);$.a.render(Object(ne.jsxs)(an.a,{store:mn,children:[Object(ne.jsx)(Ae,{}),Object(ne.jsx)(Oe,{})]}),document.getElementById("root")),ye()}},[[839,1,2]]]);
//# sourceMappingURL=main.3440c441.chunk.js.map