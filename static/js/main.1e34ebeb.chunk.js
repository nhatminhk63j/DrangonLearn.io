(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{41:function(e,t,a){e.exports=a(82)},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(36),l=a.n(r),c=(a(46),a(47),a(49),a(40)),i=(a(50),a(14)),m=a(2),o=a(3),d=a(18),u=a(4),p=a(5),g=(a(51),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"background-game"},s.a.createElement("div",{className:"bg-cell"}),s.a.createElement("div",{className:"bg-color"}),s.a.createElement("div",{className:"bg-stuff"}),s.a.createElement("img",{src:"https://content.dragonlearn.in/fp/97/fat_player/student/grad-f07e854ce64f9aee2db7bd67146ff0e4800feeed40c8f7116fcb3b6a048deb64.jpg",alt:"",className:"bg-color"}),this.props.children)}}]),a}(n.Component)),h=(a(52),a(7)),f=a(8),E=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).onClickButtonPlay=function(){n.setState({playButton:!1,mainGameOpacity:1})},n.state={status:0,data:v,styleWrongTop:{alert:{display:"none"},color:{color:"black"}},styleWrongBottom:{alert:{display:"none"},color:{color:"black"}},styleBall:[{left:2},{left:25},{left:50},{left:75},{left:100}],playButton:!0,mainGameOpacity:.2},n.doneButtonClick=n.doneButtonClick.bind(Object(d.a)(n)),n}return Object(o.a)(a,[{key:"doneButtonClick",value:function(){var e=this.state,t=e.status,a=e.data,n=parseInt(document.getElementById("ts").value),s=parseInt(document.getElementById("ms").value);n!==a[t].ts?this.setState({styleWrongTop:{alert:{display:"block"},color:{color:"red"}}}):this.setState({styleWrongTop:{alert:{display:"none"},color:{color:"black"}}}),s!==a[t].ms?this.setState({styleWrongBottom:{alert:{display:"block"},color:{color:"red"}}}):this.setState({styleWrongBottom:{alert:{display:"none"},color:{color:"black"}}}),n===a[t].ts&&s===a[t].ms&&(0===t&&this.setState({styleBall:[{left:2},{left:25},{left:50},{left:75},{right:2}]}),1===t&&this.setState({styleBall:[{left:2},{left:25},{left:50},{right:25},{right:2}]}),2===t&&this.setState({styleBall:[{left:2},{left:25},{right:50},{right:25},{right:2}]}),3===t&&this.setState({styleBall:[{left:2},{right:75},{right:50},{right:25},{right:2}]}),4===t&&this.setState({styleBall:[{right:100},{right:75},{right:50},{right:25},{right:2}]}),this.setState({status:this.state.status+1}),document.getElementById("ts").value="",document.getElementById("ms").value="")}},{key:"render",value:function(){return s.a.createElement(g,null,s.a.createElement("div",{className:"game-wrapper"},this.state.playButton&&s.a.createElement("div",{className:"play-wrapper"},s.a.createElement("img",{onClick:this.onClickButtonPlay,src:"https://princessjanaeplace.org/images/2018/06/22/icon_play-button_homepage-carousel_purple.png",alt:""})),s.a.createElement("div",{className:"game-control"},s.a.createElement("a",{href:"/courses/parts-and-fractions"},s.a.createElement(h.a,{icon:f.a})," Back"),s.a.createElement("div",{className:"game-status"},this.state.styleBall.map((function(e){return s.a.createElement("div",{className:"ball",style:e})})))),s.a.createElement("div",{className:"game-complete",style:this.state.status>=5?{}:{display:"none"}},s.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center"},s.a.createElement("h1",{style:{padding:50}},"You are win!"),s.a.createElement("img",{src:"https://dragonlearn.in/assets/students/complete-card-21a84b96681981b0362780d2af61cf19.png",height:"150px",alt:""}),s.a.createElement("button",{className:"btn btn-danger"},s.a.createElement("a",{href:"/",style:{color:"#fff"}},"Click here to more lession!")))),s.a.createElement("div",{className:"game-main text-center",style:this.state.status<5?{opacity:this.state.mainGameOpacity}:{display:"none"}},s.a.createElement("h2",null,"How much of the figure is shaded?"),s.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},s.a.createElement("img",{src:this.state.status<5?this.state.data[this.state.status].img:"",height:"200px",alt:""}),s.a.createElement("div",{className:"d-flex flex-column"},s.a.createElement("div",{className:"numerator fraction"},s.a.createElement("input",{type:"text",id:"ts",style:this.state.styleWrongTop.color,autocomplete:"off"}),s.a.createElement("div",{className:"alert alert-top",style:this.state.styleWrongTop.alert},"How many parts are shaded?",s.a.createElement("div",{className:"triangle"}))),s.a.createElement("div",{className:"underline"},"---------"),s.a.createElement("div",{className:"denominator  fraction"},s.a.createElement("input",{type:"text",id:"ms",style:this.state.styleWrongBottom.color,autocomplete:"off"}),s.a.createElement("div",{className:"alert alert-bottom",style:this.state.styleWrongBottom.alert},"How many parts is the figure divided into?",s.a.createElement("div",{className:"triangle"}))))),s.a.createElement("button",{className:"btn btn-primary",onClick:this.doneButtonClick},"Done"))))}}]),a}(n.Component),v=[{img:"https://content.dragonlearn.in/98360/3338/197.svg",ts:3,ms:5},{img:"https://content.dragonlearn.in/98360/3338/100.svg",ts:1,ms:5},{img:"https://content.dragonlearn.in/98360/3338/101.svg",ts:1,ms:5},{img:"https://content.dragonlearn.in/98360/3338/102.svg",ts:1,ms:5},{img:"https://content.dragonlearn.in/98360/3338/103.svg",ts:1,ms:5}],b=E,y=a(22),N=(a(57),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).onClickPicture=function(e){var t=n.state,a=t.data,s=t.status,r=t.listPicture,l=e.target;if("rgb(186, 186, 226)"===l.style.backgroundColor||"rgb(255, 94, 94)"===l.style.backgroundColor){l.style.backgroundColor="#fff";var c=Object(y.a)({},r);delete c[l.id],n.setState({listPicture:c,displayNotify:!1,displayMoreValueTrue:!1})}else{l.style.backgroundColor="rgb(186, 186, 226)";var i=Object(y.a)({},r);i[l.id]=a[s].data.find((function(e){return e.id===l.id})),n.setState({listPicture:i,displayNotify:!1,displayMoreValueTrue:!1})}},n.doneClick=function(){var e=n.state,t=e.listPicture,a=e.data,s=e.status,r=0,l=0;if(t)for(var c in t)t[c].ts===a[s].ts&&t[c].ms===a[s].ms?r++:(document.getElementById(c).style.backgroundColor="rgb(255, 94, 94)",l++,n.setState({displayNotify:!0}));if(r===a[s].numberTrue&&0===l){for(var i in 0===s&&n.setState({styleBall:[{left:2},{left:25},{left:50},{left:75},{right:2}]}),1===s&&n.setState({styleBall:[{left:2},{left:25},{left:50},{right:25},{right:2}]}),2===s&&n.setState({styleBall:[{left:2},{left:25},{right:50},{right:25},{right:2}]}),3===s&&n.setState({styleBall:[{left:2},{right:75},{right:50},{right:25},{right:2}]}),4===s&&n.setState({styleBall:[{right:100},{right:75},{right:50},{right:25},{right:2}]}),t)document.getElementById(i).style.backgroundColor="#fff";n.setState({status:s+1,listPicture:{}})}else 0===l&&n.setState({displayMoreValueTrue:!0})},n.onClickButtonPlay=function(){n.setState({playButton:!1,mainGameOpacity:1})},n.state={status:0,data:w,styleBall:[{left:2},{left:25},{left:50},{left:75},{left:100}],listPicture:{},displayMoreValueTrue:!1,displayNotify:!1,playButton:!0,mainGameOpacity:.2},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.styleBall,r=t.status,l=t.displayMoreValueTrue,c=t.displayNotify;return s.a.createElement(g,null,s.a.createElement("div",{className:"game-wrapper matching-pictures"},this.state.playButton&&s.a.createElement("div",{className:"play-wrapper"},s.a.createElement("img",{onClick:this.onClickButtonPlay,src:"https://princessjanaeplace.org/images/2018/06/22/icon_play-button_homepage-carousel_purple.png",alt:""})),s.a.createElement("div",{className:"game-control"},s.a.createElement("a",{href:"/courses/parts-and-fractions"},s.a.createElement(h.a,{icon:f.a})," Back"),s.a.createElement("div",{className:"game-status"},n.map((function(e,t){return s.a.createElement("div",{className:"ball",key:t,style:e})})))),s.a.createElement("div",{className:"game-complete",style:this.state.status>=5?{}:{display:"none"}},s.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center"},s.a.createElement("h1",{style:{padding:50}},"You are win!"),s.a.createElement("img",{src:"https://dragonlearn.in/assets/students/complete-card-21a84b96681981b0362780d2af61cf19.png",height:"150px",alt:""}),s.a.createElement("button",{className:"btn btn-danger"},s.a.createElement("a",{href:"/",style:{color:"#fff"}},"Click here to more lession!")))),s.a.createElement("div",{className:"game-main text-center",style:this.state.status<5?{opacity:this.state.mainGameOpacity}:{display:"none"}},s.a.createElement("h2",null,"Choose all the shapes that match the fraction"),a[r]?s.a.createElement("div",{className:"fraction d-flex align-items-center flex-column"},s.a.createElement("h2",{className:"fraction-ts"}," ",a[r].ts," "),s.a.createElement("h2",null," ",a[r].ms," "),s.a.createElement("div",{style:c?{display:"block"}:{display:"none"}},s.a.createElement("div",{className:"notify notify-ts text-left"},"This is how many ",s.a.createElement("br",null)," pieces should be shaded",s.a.createElement("div",{class:"arrow-left"})),s.a.createElement("div",{className:"notify notify-ms text-left"},"There are more",s.a.createElement("br",null),"matching shapes than that!",s.a.createElement("div",{class:"arrow-left"}))),s.a.createElement("div",{className:"displayMorePictureTrue text-left",style:l?{display:"block"}:{display:"none"}},"There are more",s.a.createElement("br",null),"matching shapes than that!")):"",s.a.createElement("div",{className:"list-item"},a[r]?a[r].data.map((function(t,a){return s.a.createElement("div",{className:"matching-item",style:{backgroundImage:"url("+t.image+")"},onClick:e.onClickPicture,id:t.id,key:a})})):""),s.a.createElement("button",{className:"btn btn-primary",onClick:this.doneClick},"Done"))))}}]),a}(n.Component)),w=[{ts:5,ms:6,numberTrue:4,data:[{id:"picture1",image:"https://content.dragonlearn.in/98360/3340/225.svg",ts:5,ms:6},{id:"picture2",image:"https://content.dragonlearn.in/98360/3340/220.svg",ts:5,ms:6},{id:"picture3",image:"https://content.dragonlearn.in/98360/3340/212.svg",ts:5,ms:6},{id:"picture4",image:"https://content.dragonlearn.in/98360/3340/215.svg",ts:5,ms:6}]},{ts:1,ms:6,numberTrue:1,data:[{id:"picture1",image:"https://content.dragonlearn.in/98360/3340/37.svg",ts:1,ms:3},{id:"picture2",image:"https://content.dragonlearn.in/98360/3340/119.svg",ts:1,ms:6},{id:"picture3",image:"https://content.dragonlearn.in/98360/3340/138.svg",ts:2,ms:3},{id:"picture4",image:"https://content.dragonlearn.in/98360/3340/215.svg",ts:5,ms:6}]},{ts:3,ms:5,numberTrue:2,data:[{id:"picture1",image:"https://content.dragonlearn.in/98360/3340/179.svg",ts:3,ms:4},{id:"picture2",image:"https://content.dragonlearn.in/98360/3340/205.svg",ts:4,ms:5},{id:"picture3",image:"https://content.dragonlearn.in/98360/3340/194.svg",ts:3,ms:5},{id:"picture4",image:"https://content.dragonlearn.in/98360/3340/196.svg",ts:3,ms:5}]},{ts:3,ms:4,numberTrue:2,data:[{id:"picture1",image:"https://content.dragonlearn.in/98360/3340/177.svg",ts:3,ms:4},{id:"picture2",image:"https://content.dragonlearn.in/98360/3340/141.svg",ts:2,ms:5},{id:"picture3",image:"https://content.dragonlearn.in/98360/3340/125.svg",ts:2,ms:3},{id:"picture4",image:"https://content.dragonlearn.in/98360/3340/156.svg",ts:3,ms:4}]},{ts:2,ms:5,numberTrue:3,data:[{id:"picture1",image:"https://content.dragonlearn.in/98360/3340/147.svg",ts:2,ms:5},{id:"picture2",image:"https://content.dragonlearn.in/98360/3340/127.svg",ts:2,ms:3},{id:"picture3",image:"https://content.dragonlearn.in/98360/3340/140.svg",ts:2,ms:5},{id:"picture4",image:"https://content.dragonlearn.in/98360/3340/145.svg",ts:2,ms:5}]}],k=N,x=a(16),j=(a(58),a(37)),O=a.n(j).a.create({baseURL:"https://jlpt-learning.herokuapp.com/"}),C={headers:{"Content-Type":"application/json"}},B=function(e){return O.post("login",e,C)},S=function(e){return O.post("create",e,C)},_=a(19),I=a.n(_),P=function(){return!!I.a.get("userToken")},T=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).onChange=function(e){n.setState(Object(x.a)({},e.target.name,e.target.value))},n.login=function(e){e.preventDefault(),n.setState({isLogining:!0});var t=n.state,a=t.email,s=t.password;s||n.setState({error:"* password is required!"}),a||n.setState({error:"* email is required!"}),s&&a?B(JSON.stringify({email:a,password:s})).then((function(e){if(e.data.cookies){c=e.data.cookies,I.a.set("userToken",c);var t=n.props,s=t.history,r=t.location,l={pathname:"/courses/parts-and-fractions"};return r.state&&(l=r.state.from),sessionStorage.setItem("user",JSON.stringify({email:a,name:e.data.user[0].name,id:e.data.user[0].id})),void s.replace(l)}var c;n.setState({error:"Email or password is not correct!",isLogining:!1})})):n.setState({isLogining:!1})},n.state={email:"",password:"",error:"",isLogining:!1},n}return Object(o.a)(a,[{key:"render",value:function(){return P()?s.a.createElement(i.a,{to:"/courses/parts-and-fractions"}):s.a.createElement("div",{className:"home"},s.a.createElement("div",{className:"home__header"}),s.a.createElement("div",{className:"container login-container"},s.a.createElement("div",{className:"row home__login"},s.a.createElement("div",{className:"col-md-6 introduce"},s.a.createElement("h1",null,"Drangonlearn.io"),s.a.createElement("p",null,"Dragonlearn.in \u2014 is an online platform, where children from all over India learn Mathematics interactively."),s.a.createElement("a",{href:"/register"},s.a.createElement("button",{className:"btn btn-primary register"},"Register"))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"login"},s.a.createElement("h2",null,"Drangonlearn.io"),s.a.createElement("form",null,s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"email",name:"email",className:"form-control",id:"exampleInputEmail",placeholder:"Email",onChange:this.onChange,value:this.state.email})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"password",name:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password",onChange:this.onChange,value:this.state.password})),s.a.createElement("p",{className:"text-center"}," ",this.state.error," "),s.a.createElement("p",{className:"text-center"},this.state.isLogining&&s.a.createElement("div",{class:"spinner-border text-light text-center",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading..."))),s.a.createElement("button",{className:"btn btn-success btn-block",onClick:this.login},"Login")))))),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"howtostart text-center"},s.a.createElement("h2",null,"How to start using DRAGONLEARN.IO"),s.a.createElement("iframe",{width:"765",height:"504",src:"https://www.youtube.com/embed/VurkiXLG-WE",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"container example-tasks"},s.a.createElement("h2",null,"Example tasks"),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"task-introduce d-flex mb-4"},s.a.createElement("img",{src:"https://dragonlearn.in/assets/matwey/icon2-77d9245a39b6688ff0b6134adb5cdc32.png",alt:""}),s.a.createElement("p",null,"The platform currently contains more than two thousand interactive exercises, laid out in a bright, game format.")),s.a.createElement("div",{className:"task-introduce d-flex"},s.a.createElement("img",{src:"https://dragonlearn.in/assets/matwey/icon1-47a325cae22a7e7bff151bbf4d62244c.png",alt:""}),s.a.createElement("p",null,"Each of them is the result of the teamwork of a large team of professionals: psychologists and methodologists, illustrators and designers, developers and analysts."))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"tasks"},s.a.createElement("h3",null,"See example tasks"),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement("a",{href:"/game1"},s.a.createElement("div",{className:"task-thumnail",style:{backgroundImage:"url(https://dragonlearn.in/assets/matwey/india/sample_1-a65fc644cb8de77bf3985a6c4d9704bf.png)",width:"100%",height:"100px"}},s.a.createElement(h.a,{className:"icon",icon:f.d}))),s.a.createElement("p",{className:"task-description text-center"},"Who has more block")),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("a",{href:"/game1"},s.a.createElement("div",{className:"task-thumnail",style:{backgroundImage:"url(https://dragonlearn.in/assets/matwey/india/sample_2-0568c53a3e0f8f0c206d3057283f574f.png)",width:"100%",height:"100px"}},s.a.createElement(h.a,{className:"icon",icon:f.d}))),s.a.createElement("p",{className:"task-description text-center"},"Fill in the number")),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("a",{href:"/game1"},s.a.createElement("div",{className:"task-thumnail",style:{backgroundImage:"url(https://dragonlearn.in/assets/matwey/india/sample_3-8f2718fcc4d91344d22cfd6d5dd8099e.png)",width:"100%",height:"100px"}},s.a.createElement(h.a,{className:"icon",icon:f.d}))),s.a.createElement("p",{className:"task-description text-center"},"Perimeters")),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("a",{href:"/game1"},s.a.createElement("div",{className:"task-thumnail",style:{backgroundImage:"url(https://dragonlearn.in/assets/matwey/india/sample_4-81a0347f758ebf2c7c6664bab8fc1dad.png)",width:"100%",height:"100px"}},s.a.createElement(h.a,{className:"icon",icon:f.d}))),s.a.createElement("p",{className:"task-description text-center"},"Parts")))))),s.a.createElement("div",{className:"d-flex justify-content-center p-5"},s.a.createElement("a",{href:"/register"},s.a.createElement("button",{className:"btn btn-primary register"},"Register"))))),s.a.createElement("div",{className:"container pt-5"},s.a.createElement("div",{className:"description"},s.a.createElement("div",{className:"row mb-3"},s.a.createElement("div",{className:"col-md-8"},s.a.createElement("div",{className:"text"},s.a.createElement("h2",null,"Learning process"),s.a.createElement("p",null,"The learning is based on completing interactive exercises that correspond to the school curriculum and are aimed at getting conceptual understanding rather than factual memorization. The tasks simulate situations from real life, which every child is familiar with. Dragonlearn.in builds a dialogue with the students. The system reacts to the learner\u2019s actions. If the learner answers correctly, the system praises them and suggests new tasks. If they make a mistake, the system asks clarifying questions and help the learner come to the right decision themselves."))),s.a.createElement("div",{className:"col-md-4"},s.a.createElement("img",{src:"https://dragonlearn.in/assets/matwey/india/dino-0cd466ff32f9897b40d94c215b84b655.svg",alt:""}))),s.a.createElement("div",{className:"row mb-3"},s.a.createElement("div",{className:"col-md-4"},s.a.createElement("img",{src:"https://dragonlearn.in/assets/matwey/graph-d5954b4914e5f7b1a055616e06a78592.svg",alt:""})),s.a.createElement("div",{className:"col-md-8"},s.a.createElement("div",{className:"text"},s.a.createElement("h2",null,"Individual approach"),s.a.createElement("p",null,"Dragonlearn.in tracks actions of each student: it takes into account how long they require to complete tasks, how many tasks they solved correctly, the number of mistakes they make, and general behaviour of the student. Based on this information it automatically selects personalised tasks and puts them in order, thereby creating an individual learning path for every student. Dragonlearn.in adapts to those who need more time by giving additional explanations, a greater number of exercises and a guided work on mistakes.")))),s.a.createElement("div",{className:"row mb-3"},s.a.createElement("div",{className:"col-md-8"},s.a.createElement("div",{className:"text"},s.a.createElement("h2",null,"Subjects"),s.a.createElement("p",null,"Mathematics courses for the preprimary and primary school have now been added to the Dragonlearn.in platform."))),s.a.createElement("div",{className:"col-md-4"},s.a.createElement("img",{src:"https://dragonlearn.in/assets/matwey/india/happy-dc3590de39e49b60a00bd31e35049743.svg",alt:""}))),s.a.createElement("div",{className:"d-flex justify-content-center p-5"},s.a.createElement("a",{href:"/register"},s.a.createElement("button",{className:"btn btn-primary register"},"Register"))))),s.a.createElement("div",{className:"teacher-introduce pt-5"},s.a.createElement("div",{className:"container"},s.a.createElement("h2",{className:"text-center"},"Dragonlearn.in \u2014 teacher's reliable assistant"),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-4 d-flex justify-content-center align-items-center flex-column p-5"},s.a.createElement("img",{src:"https://dragonlearn.in/assets/matwey/help_1-406f007f3b006663418362e0a9e69616.svg",alt:""}),s.a.createElement("h3",{className:"text-center pt-3"},"Diagnostics and monitoring"),s.a.createElement("p",null,"The teacher receives detailed statistics about each student\u2019s performance. At any time you can find out how many exercises a student has completed, how much time was spent on finishing them, and which exercises and topics caused the most difficulty.")),s.a.createElement("div",{className:"col-md-4 d-flex justify-content-center align-items-center flex-column p-5"},s.a.createElement("img",{src:"https://dragonlearn.in/assets/matwey/help_2-01d683946b4fd45c5ec8eb8aef45a7d5.svg",alt:""}),s.a.createElement("h3",{className:"text-center pt-3"},"Teaching in a game format"),s.a.createElement("p",null,"Dragonlearn.in \u2014 is a great way to make your lessons even more exciting, using tablets, computers or interactive boards in class.")),s.a.createElement("div",{className:"col-md-4 d-flex justify-content-center align-items-center flex-column p-5"},s.a.createElement("img",{src:"https://dragonlearn.in/assets/matwey/help_3-3b5c9e5848a675eb8f06918a26076166.svg",alt:""}),s.a.createElement("h3",{className:"text-center pt-3"},"Individualised teaching"),s.a.createElement("p",null,"Dragonlearn.in personalises teaching and helps teachers to construct individual programmes for each student."))),s.a.createElement("div",{className:"d-flex justify-content-center p-5"},s.a.createElement("a",{href:"/register"},s.a.createElement("button",{className:"btn btn-primary register"},"Register"))))))}}]),a}(n.Component);a(77),a(78);var D=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"col-md-3 game"},s.a.createElement("a",{href:(e=this.props.name,"/"+e.toLowerCase().split(" ").join("-"))},s.a.createElement("div",{className:"game__thumnail"},s.a.createElement("img",{className:"game__thumnail_img",src:this.props.img,alt:"game-thumnail",width:"100%"}),s.a.createElement(h.a,{className:"game__thumnail__icon",icon:f.b})),s.a.createElement("h5",{className:"game__title"}," ",this.props.name," ")));var e}}]),a}(n.Component),R=a(13),W=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={games:[{name:"Matching figures and baskets",img:"https://dragonlearn.in/assets/card_previews/india/3341-1b4e1fe5ed429817b448abadbb8828f4.png"},{name:"Shade the parts according to the fraction",img:"https://dragonlearn.in/assets/card_previews/2304-a02ac19a08939891485896257b5aeee4.png"},{name:"Write the fraction according to the picture",img:"https://dragonlearn.in/assets/card_previews/india/3338-e8888f047fdceedc9d3bc59af9da67b6.png"},{name:"Matching figures and pictures",img:"https://dragonlearn.in/assets/card_previews/india/3340-f4817e14bc729f1cfaad54e7d0582f06.png"},{name:"Equal fractions",img:"https://dragonlearn.in/assets/card_previews/2393-5539325521c4c6f705f3b73da8979b58.png"}]},n}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement(R.a,null,s.a.createElement("div",{className:"text-center listgame"},s.a.createElement("nav",{"aria-label":"breadcrumb"},s.a.createElement("ol",{className:"breadcrumb"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement("a",{href:"#"},"Home")),s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement("a",{href:"#"},"Courses")),s.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page",style:{textTransform:"capitalize"}},window.location.pathname.split("/").slice(2).join("").split("-").join(" ")))),s.a.createElement("h4",null,this.props.category),s.a.createElement("div",{className:"row"},this.state.games.map((function(e){return s.a.createElement(D,{name:e.name,img:e.img})})))))}}]),a}(n.Component),L=(a(79),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"topmenu"},s.a.createElement("div",{className:"banner"},s.a.createElement("img",{style:{width:"100vw",height:"100px"},src:"https://dragonlearn.in/assets/banners/oct17/brics-math-olymp-test-tour-banner-en-5dae43c87ae1057e211805b08a2ce0f4.svg",alt:""})),s.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark topmenu__back"},s.a.createElement("div",{className:"container"},s.a.createElement("a",{className:"navbar-brand topmenu__logo",href:"/"},"DrangonLearn.io ",s.a.createElement(h.a,{icon:f.c})),s.a.createElement("button",{className:"navbar-toggler d-lg-none",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavId","aria-controls":"collapsibleNavId","aria-expanded":"false","aria-label":"Toggle navigation"}),s.a.createElement("div",{className:"collapse navbar-collapse",id:"collapsibleNavId"},s.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},s.a.createElement("li",{className:"nav-itredem"},s.a.createElement("a",{className:"nav-link topmenu_link",href:"/course"},"My Course ",s.a.createElement("span",{className:"sr-only"},"(current)"))),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link topmenu_link",href:"/about"},"Profilio")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link topmenu_link",href:"/about"},"About"))),s.a.createElement("div",{className:"my-2 my-lg-0 d-flex user justify-content-center align-items-center"},s.a.createElement("button",{className:"btn btn-link"},"Invite friend"),s.a.createElement("div",{className:"dropdown ml-3",style:{cursor:"pointer"}},s.a.createElement("div",{className:"d-flex",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},s.a.createElement("div",{className:"user__name"}," ",JSON.parse(sessionStorage.getItem("user")).name," "),s.a.createElement(h.a,{className:"user__icon",icon:f.e})),s.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},s.a.createElement("a",{className:"dropdown-item",href:"#"},"Profile"),s.a.createElement("a",{className:"dropdown-item",href:"#",onClick:function(){return e=function(){return""},I.a.remove("userToken"),sessionStorage.removeItem("user"),e();var e}},"Logout"))))))))}}]),a}(n.Component)),M=(a(80),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(m.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"sidebar"},s.a.createElement("a",{className:"direction",href:"/"},s.a.createElement(h.a,{className:"back-icon",icon:f.a}),s.a.createElement("span",null,"Back")),s.a.createElement("ul",{class:"list-group"},s.a.createElement("a",{href:"/number",className:1===this.props.category?"list-group-item list-group-item-action active":"list-group-item list-group-item-action"},"Number"),s.a.createElement("a",{href:"/parts-and-fractions",className:2===this.props.category?"list-group-item list-group-item-action active":"list-group-item list-group-item-action"},"Parts and fractions"),s.a.createElement("a",{href:"/decimal-fractions-and-percentage",className:3===this.props.category?"list-group-item list-group-item-action active":"list-group-item list-group-item-action"},"Decimal fractions and percentage"),s.a.createElement("a",{href:"/measurement",className:4===this.props.category?"list-group-item list-group-item-action active":"list-group-item list-group-item-action"},"Measurement"),s.a.createElement("a",{href:"/data-handling",className:5===this.props.category?"list-group-item list-group-item-action active":"list-group-item list-group-item-action"},"Data handling"),s.a.createElement("a",{href:"/secret-lab",className:6===this.props.category?"list-group-item list-group-item-action active":"list-group-item list-group-item-action",style:{backgroundImage:"url(https://dragonlearn.in/assets/icons/laba-9a059bb2ed9520cc70ef3a7da265cf0a.svg)",backgroundPositionX:"right",backgroundRepeat:"no-repeat",backgroundColor:"#e9f9f8"}},"Secret lab")))}}]),a}(n.Component)),q=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(L,null),s.a.createElement("div",{className:"container"},this.props.children))}}]),a}(n.Component),G=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement(q,null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-3"},s.a.createElement(M,{category:2})),s.a.createElement("div",{className:"col-md-9"},s.a.createElement(W,{category:"Parts and fractions"})))))}}]),a}(n.Component),H=(a(81),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).inputOnchange=function(e){n.setState(Object(x.a)({},e.target.name,e.target.value))},n.register=function(e){e.preventDefault(),n.setState({isRegistering:!0});var t=n.state,a=t.email,s=t.name,r=t.password,l=t.rePassword;console.log(n.state);var c={};a&&r&&s&&l&&r===l?S(JSON.stringify({email:a,name:s,password:r})).then((function(e){n.setState({alertSuccess:!0});var t=n.props.history;n.setTimeoutId=setTimeout((function(){return t.push("/")}),500)})):(a?a.indexOf("@")<0&&(c.email="This is not a email!"):c.email="Email is required!",s||(c.name="Name is required!"),s.length>30&&(c.name="Name is not longer 30 character!"),r||(c.password="Password is required!"),l||(c.rePassword="Re-password is required!"),r&&l&&r!==l&&(c.checkPassword="The re-password must be the same as the above!"),n.setState({errors:c,isRegistering:!1}))},n.state={name:"",email:"",password:"",rePassword:"",errors:{},alertSuccess:!1,isRegistering:!1},n}return Object(o.a)(a,[{key:"componentWillUnmount",value:function(){clearTimeout(this.setTimeoutId)}},{key:"render",value:function(){if(P())return s.a.createElement(i.a,{to:"/courses/parts-and-fractions"});var e=this.state,t=e.errors,a=e.email,n=e.name,r=e.password,l=e.rePassword;e.alertSuccess;return s.a.createElement("div",{className:"register"},s.a.createElement("div",{className:"banner"},s.a.createElement("img",{style:{width:"100vw",height:"100px"},src:"https://dragonlearn.in/assets/banners/oct17/brics-math-olymp-test-tour-banner-en-5dae43c87ae1057e211805b08a2ce0f4.svg",alt:""})),s.a.createElement("div",{className:"container mt-5"},s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("a",{className:"navbar-brand",href:"/"},"DrangonLearn.io ",s.a.createElement(h.a,{icon:f.c})))),s.a.createElement("div",{className:"container mt-5"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-3"}),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("h4",{className:"text-center"},"Register"),s.a.createElement("form",null,s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"exampleInputName"},"Name"),t.name?s.a.createElement("span",{className:"alert"},"* ",t.name," "):"",s.a.createElement("input",{type:"text",name:"name",className:"form-control",id:"exampleInputName",value:n,onChange:this.inputOnchange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),t.email?s.a.createElement("span",{className:"alert"},"* ",t.email," "):"",s.a.createElement("input",{type:"email",className:"form-control",name:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",value:a,onChange:this.inputOnchange}),s.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),t.password?s.a.createElement("span",{className:"alert"},"* ",t.password," "):"",s.a.createElement("input",{type:"password",name:"password",className:"form-control",id:"exampleInputPassword1",value:r,onChange:this.inputOnchange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"exampleInputRePassword1"},"Retype password"),t.rePassword?s.a.createElement("span",{className:"alert"},"* ",t.rePassword," "):"",t.checkPassword?s.a.createElement("span",{className:"alert"},"* ",t.checkPassword," "):"",s.a.createElement("input",{type:"password",name:"rePassword",className:"form-control",id:"exampleInputRePassword1",value:l,onChange:this.inputOnchange})),this.state.isRegistering&&s.a.createElement("div",{className:"d-flex justify-content-center mt-2 mb-2"},s.a.createElement("div",{class:"spinner-border text-primary",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading..."))),s.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",onClick:this.register},"Submit"))),s.a.createElement("div",{className:"col-md-3"}))))}}]),a}(n.Component));function J(e){var t=e.children,a=Object(c.a)(e,["children"]);return s.a.createElement(i.b,Object.assign({},a,{render:function(e){var a=e.location;return P()?t:s.a.createElement(i.a,{to:{pathname:"/",state:{from:a}}})}}))}var V=function(){return s.a.createElement(i.d,null,s.a.createElement(i.b,{exact:!0,path:"/write-the-fraction-according-to-the-picture",component:b}),s.a.createElement(i.b,{exact:!0,path:"/matching-figures-and-pictures",component:k}),s.a.createElement(J,{exact:!0,path:"/courses/parts-and-fractions"},s.a.createElement(G,null)),s.a.createElement(i.b,{exact:!0,path:"/",component:T}),s.a.createElement(i.b,{exact:!0,path:"/register",component:H}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(R.a,null," ",s.a.createElement(V,null)," "),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.1e34ebeb.chunk.js.map