(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{41:function(n,e,t){"use strict";t.r(e);var i,a,r,o,c,s,d,l,h,b,j,x,p,m,g,u,O,f,w,v,y,k,z,C=t(20),S=t(1),L=t.n(S),q=t(25),N=t.n(q),M=t(5),F=t(9),T=t(6),E=t(4),B=t(2),P=t(3),R=t(8),W=t(12),D={hidden:{y:-500,opacity:-1},show:{y:0,opacity:1,transition:{duration:1.5}}},A={hidden:{y:500,opacity:-1},show:{y:0,opacity:1,transition:{duration:1.75}}},H={hidden:{y:-500,opacity:-1},show:{y:0,opacity:1,transition:{duration:2}}},I={hidden:{y:500,opacity:-1},show:{y:0,opacity:1,transition:{duration:2.25}}},_={hidden:{y:-500,opacity:-1},show:{y:0,opacity:1,transition:{duration:2.5}}},G={hidden:{y:100,opacity:0},show:{y:0,opacity:1,transition:{ease:"easeOut",duration:1.4}},exit:{y:500,opacity:0,transition:{duration:.7}}},J={hidden:{y:-100,opacity:.1},show:{y:0,opacity:1,transition:{ease:"easeOut",duration:2.4}},exit:{y:-100,opacity:.1,transition:{duration:1.5}}},X={hidden:{y:-100,opacity:1},show:{y:0,opacity:.3,transition:{ease:"easeOut",duration:2.4}},exit:{y:-100,opacity:.1,transition:{duration:1.5}}},Y={hidden:{y:0,scale:0},show:{y:-445,scale:1,transition:{type:"spring",ease:"easeOut",bounce:.3,duration:1.75}},exit:{y:0,scale:0,transition:{duration:.5}}},Z={hidden:{opacity:0,x:-100,transition:{duration:.15}},show:{opacity:1,x:0,transition:{ease:"easeOut",duration:.7}},exit:{x:-100,opacity:0,transition:{duration:.7}}},Q={hidden:{opacity:-10,y:-500,transition:{duration:.15}},show:{opacity:1,y:0,transition:{ease:"easeOut",duration:3.75}}},U={hidden:{opacity:0,scale:0,y:50,transition:{duration:1.25}},show:{scale:1,opacity:1,y:6,transition:{ease:"easeOut",duration:1}}},K=t(0),V=Object(T.a)(E.b.div)(i||(i=Object(M.a)(["\n    top: 0;\n    //position: sticky;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    z-index: 10;\n    a {\n        text-decoration: none;\n        opacity: 0.5;\n        color: #bdbdbd;\n        &:hover {\n            color: orange;\n        }\n    }\n    h1 {\n        font-size: 2.2rem;\n        //opacity: 0.7;\n        padding: 0;\n        margin: 0.8rem;\n        letter-spacing: 10px;\n    }\n    button {\n        background: transparent;\n        border: none;\n        cursor: pointer;\n        margin-left: 3rem;\n        //border: 2px solid rgb(65, 65, 65);\n        //border: 2px solid rgb(37, 166, 195);\n        border-radius: 50px;\n        padding: .75rem;\n        transition: all 0.5s ease;\n        :focus {\n            outline: 0;\n        }\n        &:hover {\n            //background: rgb(65, 65, 65);\n            background:rgb(233, 207, 90);\n            color: white;\n            box-shadow: 0 0 10px rgb(255, 251, 31), \n            0 0 10px rgb(237, 251, 39);\n        }\n    }\n    @media screen and (max-width: 768px) {\n        margin-top: 1rem;\n        h1 {\n            font-size: 1rem;\n            margin: 0;\n            letter-spacing: 2px;\n        }\n        .smile {\n            font-size: 10px;\n            z-index: 12;\n            padding: 0;\n            margin-left: 2rem;\n            margin-right: 1rem;\n        }\n    }\n"]))),$=function(n){var e=n.setProfileStatus,t=n.profileStatus,i=Object(R.f)().pathname;return Object(K.jsxs)(V,{variants:Q,initial:"hidden",animate:"show",children:[Object(K.jsx)("h1",{children:Object(K.jsx)(W.b,{to:"/",children:Object(K.jsx)(E.b.h1,{whileTap:{color:"orange"},transition:{duration:.75},initial:{color:""},animate:{color:"/"===i?"lightseagreen":"",opacity:"/"===i?1:.5},children:"R\xe9sum\xe9"})})}),Object(K.jsx)(E.b.button,{className:"smile",whileHover:{scale:1.1},whileTap:{scale:2.5},onClick:function(){return e(!t)},children:Object(K.jsx)(B.a,{icon:P.g,size:"3x"})}),Object(K.jsx)("h1",{children:Object(K.jsx)(W.b,{to:"/education",children:Object(K.jsx)(E.b.h1,{whileTap:{color:"orange"},transition:{duration:.75},initial:{color:""},animate:{color:"/education"===i?"lightseagreen":"",opacity:"/education"===i?1:.5},children:"Education"})})})]})},nn=t.p+"static/media/dog.46eedee7.png",en=Object(T.a)(E.b.div)(a||(a=Object(M.a)(["\n    display: flex;\n    height: 52vh;\n    font-size: 25px;\n    //border: solid white;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 2px 2px 50px rgb(182, 180, 180);\n    border-radius: 50px;\n    padding: 0.5rem;\n    margin: 1rem;\n    background: #47b1a6;\n    label {\n        margin: 0.2rem;\n        display: flex;\n        flex-direction: column;\n        input{\n            text-align: center;\n            justify-content: center;\n            cursor: pointer;\n            border: none;\n            height: 1rem;\n            width: 12rem;\n            margin-top: 1rem;\n            outline: none;\n            background: white;\n            color: orange;\n            border-radius: 10px;\n            word-wrap: break-word;\n            &:hover {\n                background: #7fdf7f;\n                color: white;\n                transform: scale(1.3);\n                transition: 0.3s ease-in;\n            }\n            &:not(hover) {\n                //transform: scale(1);\n                transition: 0.7s ease-out;\n            }\n        }\n        textarea {\n            margin-bottom: 1rem;\n            text-align: center;\n            justify-content: center;\n            border: none;\n            height: 3rem;\n            outline: none;\n            border-radius: 10px;\n            resize: none;\n            font-size: 16px;\n        }\n    }\n    h4 {\n        width: 90%;\n        color: whitesmoke;\n        overflow: hidden;\n        margin: 2rem;\n        text-align: center;\n        word-wrap: break-word;\n    }\n    span {\n        font-size: 20px;\n    }\n    .icon {\n        padding: 0;\n        margin: 0;\n    }\n\n    @media screen and (max-width: 768px) {\n        width: 85%;\n        font-size: 22px;\n        margin-top: 6rem;\n        margin-left: 1.1rem;\n        height: 55vh;\n        label {\n            width: 80%;\n            align-items: center;\n            input {\n                height: 1.2rem;\n                font-size: 16px;\n                justify-content: center;\n                width: 90%;\n                &:hover {\n                background: #7fdf7f;\n                color: white;\n                transform: scale(1.01);\n                transition: 0.3s ease-in;\n                }\n            }\n            textarea {\n                width: 85%;\n            }\n        }\n    }\n    @media screen and (max-width: 439px) {\n        margin-top: 4rem;\n    }\n\n"]))),tn=function(n){var e=n.showForm,t=n.setShowForm,i=Object(S.useState)("Wow I'm Popular!"),a=Object(F.a)(i,2),r=a[0],o=a[1],c=Object(S.useState)(""),s=Object(F.a)(c,2),d=s[0],l=s[1],h=Object(S.useState)("Cancel"),b=Object(F.a)(h,2),j=b[0],x=b[1],p=Object(S.useState)({color:"white"}),m=Object(F.a)(p,2),g=m[0],u=m[1],O=Object(S.useState)(Object(K.jsx)(B.a,{className:"icon",icon:P.c,size:"3x",color:"white"})),f=Object(F.a)(O,2),w=f[0],v=f[1];return Object(K.jsx)(E.a,{children:e&&Object(K.jsxs)(en,{variants:Y,exit:"exit",initial:"hidden",animate:"show",children:[Object(K.jsx)("div",{children:w}),Object(K.jsx)("h4",{style:g,children:r}),Object(K.jsx)("label",{children:Object(K.jsx)("input",{fontSize:"16px",name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1",type:"name",placeholder:"Your Name"})}),Object(K.jsxs)("label",{children:[Object(K.jsx)("textarea",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1",type:"text",value:d,placeholder:"Your Message",onChange:function(n){n.preventDefault(),n.target.value.length>0?x("Send"):x("Cancel"),l(n.target.value)}}),Object(K.jsx)("input",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1",type:"submit",value:j,onClick:function(){"Send"===j&&(setTimeout((function(){o("Message Sent!"),u({color:"lightgreen",fontSize:"35px"}),l("thank you!"),x("Sent"),v(Object(K.jsx)(B.a,{className:"icon",icon:P.b,size:"3x",color:"white"}))}),800),setTimeout((function(){o("Wow I'm Popular!"),u({color:"white",fontSize:"25px"}),l(""),x("Cancel"),v(Object(K.jsx)(B.a,{className:"icon",icon:P.c,size:"3x",color:"white"}))}),3e3)),"Send"===j?setTimeout((function(){t(!e)}),2500):t(!e)}})]})]})})},an=(t.p,T.a.img(r||(r=Object(M.a)(["\n    position: fixed;\n    width: 100%;\n    height: 30%;\n    z-index: -2;\n    object-fit: cover;\n    opacity: 0.3;\n"]))),T.a.div(o||(o=Object(M.a)(["\n    background: white;\n    position: fixed;\n    //top: 7rem;\n    top: 0;\n    left: 0;\n    //height: 70%;\n    height: 100%;\n    width: 20rem;\n    border-radius: 10px;\n    box-shadow: 2px 2px 50px rgb(182, 180, 180);\n    overflow: hidden;\n    z-index: 10;\n    transform: translateX(-100%);\n    transition: all 0.5s ease;\n    opacity: 0;\n    a {\n        text-decoration: none;\n        color: #ada1a1;\n    }\n    h1 {\n        margin-top: 2.2rem;\n        padding: 0rem 4rem;\n        //color: #ada1a1;\n        color: lightseagreen;\n    }\n    p {\n        padding: 0rem 4rem;\n        color: #ada1a1;\n    }\n    span {\n        color: rgb(233, 207, 90);\n        font-weight: bold;\n    }\n    button {\n        cursor: pointer;\n        font-size: 20px;\n        outline: none;\n        margin-left: 7rem;\n        margin-top: 1.5rem;\n        border: none;\n        padding: 0.2rem;\n        color: orange;\n        background: none;\n        &:hover {\n            transform: scale(1.3);\n            transition: 0.5s ease;\n        }\n        &:not(hover) {\n            transition: 0.5s ease;\n        }\n    }\n\n    @media screen and (max-width: 768px) {\n        width: 100%;\n        height: 100%;\n        text-align: center;\n        body {\n            overflow: none;\n        }\n        h1 {\n            margin-top: 4rem;\n            text-align: center;\n            padding: 0;\n        }\n        span, p {\n            font-size: 17px;\n        }\n        p {\n            text-align: left;\n            padding: 0rem 2rem;\n        }\n        button {\n            margin-top: 1.8rem;\n            margin-right: 6rem;\n            margin-bottom: 0;\n            padding: 0;\n        }\n    }\n\n    &::-webkit-scrollbar {\n        width: 0.4rem;\n        height: 100%;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: rgba(179, 179, 179, 0.5);\n        border-radius: 25px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &.active-profile {\n        transform: translateX(0%);\n        opacity: 1;\n        overflow: hidden;\n    }\n"])))),rn=T.a.img(c||(c=Object(M.a)(["\n    width: 10rem;\n    height: 10rem;;\n    object-fit: cover;\n    border-radius: 50%;\n    padding: 0rem 4rem;\n"]))),on=function(n){var e=n.profileStatus,t=Object(S.useState)(!1),i=Object(F.a)(t,2),a=i[0],r=i[1];return Object(K.jsxs)(an,{className:"profile ".concat(e?"active-profile":""),children:[Object(K.jsx)("h1",{children:"Pup Ruffles"}),Object(K.jsx)(rn,{className:"dog",src:nn,alt:"dog"}),Object(K.jsx)("p",{children:"Bone collecting is my new hobby.  Walks in the park are my favorite as well as beef treats."}),Object(K.jsxs)("p",{children:[Object(K.jsx)("span",{children:"Age"}),": 3",Object(K.jsx)("br",{}),Object(K.jsx)("br",{}),Object(K.jsx)("span",{children:"Hobbies"}),": Music making",Object(K.jsx)("br",{}),Object(K.jsx)("br",{}),Object(K.jsxs)("a",{href:"mailto:ruffruff@barks.com",children:[Object(K.jsx)("span",{children:Object(K.jsx)(B.a,{icon:P.d})})," ruffruff@barks.com"]}),Object(K.jsx)("br",{}),Object(K.jsx)("br",{}),Object(K.jsx)("span",{children:Object(K.jsx)(B.a,{icon:P.f})})," (162)297-2572"]}),Object(K.jsx)("button",{type:"button",onClick:function(){r(!a)},children:"Send a message?"}),Object(K.jsx)(E.a,{children:E.b.showForm&&Object(K.jsx)(tn,{showForm:a,setShowForm:r})})]})},cn=T.a.svg(s||(s=Object(M.a)(["\n    position: absolute;\n    left: 0;\n    top: 70%;\n    z-index: -1;\n"]))),sn=function(){return Object(K.jsxs)(cn,{fillOpacity:"1",id:"bg-svg",viewBox:"0 0 1440 500",xmlns:"http://www.w3.org/2000/svg",class:"transition duration-300 ease-in-out delay-150",children:[Object(K.jsx)("defs",{children:Object(K.jsxs)("linearGradient",{id:"gradient",children:[Object(K.jsx)("stop",{offset:"5%","stop-color":"#fcb90088"}),Object(K.jsx)("stop",{offset:"95%","stop-color":"#32ded488"})]})}),Object(K.jsx)(E.b.path,{d:"M 0,500 C 0,500 0,166 0,166 C 95.43333333333334,151.7051282051282 190.86666666666667,137.4102564102564 271,143 C 351.1333333333333,148.5897435897436 415.9666666666667,174.06410256410254 488,188 C 560.0333333333333,201.93589743589746 639.2666666666667,204.33333333333334 716,187 C 792.7333333333333,169.66666666666666 866.9666666666665,132.6025641025641 953,115 C 1039.0333333333335,97.3974358974359 1136.8666666666668,99.25641025641025 1220,111 C 1303.1333333333332,122.74358974358975 1371.5666666666666,144.37179487179486 1440,166 C 1440,166 1440,500 1440,500 Z",fill:"url(#gradient)",class:"transition-all duration-300 ease-in-out delay-150"}),Object(K.jsx)("defs",{children:Object(K.jsxs)("linearGradient",{id:"gradient",children:[Object(K.jsx)("stop",{offset:"5%","stop-color":"#fcb900ff"}),Object(K.jsx)("stop",{offset:"95%","stop-color":"#32ded4ff"})]})}),Object(K.jsx)(E.b.path,{d:"M 0,500 C 0,500 0,333 0,333 C 78.28717948717949,318.74615384615385 156.57435897435897,304.4923076923077 242,303 C 327.425641025641,301.5076923076923 419.9897435897435,312.776923076923 506,328 C 592.0102564102565,343.223076923077 671.4666666666668,362.4 743,361 C 814.5333333333332,359.6 878.1435897435897,337.6230769230769 951,319 C 1023.8564102564103,300.3769230769231 1105.9589743589745,285.10769230769233 1189,288 C 1272.0410256410255,290.89230769230767 1356.0205128205127,311.94615384615383 1440,333 C 1440,333 1440,500 1440,500 Z",stroke:"none","stroke-width":"0",fill:"url(#gradient)",class:"transition-all duration-300 ease-in-out delay-150"})]})},dn=t.p+"static/media/back.da7f70ad.jpg",ln=Object(T.a)(E.b.div)(d||(d=Object(M.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    h1 {\n        margin-top: 5rem;\n        font-size: 12rem;\n        font-weight: 700;\n        //color: #4dc0a3;\n        color: rgb(233, 207, 90);\n    }\n    img {\n        top: 0%;\n        height: 113.5%;\n        z-index: -1;\n        position: fixed;\n        width: 100%;\n        object-fit: cover;\n    }\n\n    @media screen and (max-width: 768px) {\n        svg {\n            display: none;\n        }\n        h1 {\n            font-size: 4rem;\n        }\n        img {\n            width: 100%;\n        }\n    }\n"]))),hn=T.a.div(l||(l=Object(M.a)(["\n    overflow: hidden;\n"]))),bn=function(){return Object(K.jsxs)(ln,{children:[Object(K.jsx)(E.b.img,{exit:"exit",variants:J,initial:"hidden",animate:"show",src:dn,alt:""}),Object(K.jsx)(hn,{children:Object(K.jsx)(E.b.h1,{variants:D,initial:"hidden",animate:"show",children:"H"})}),Object(K.jsx)(hn,{children:Object(K.jsx)(E.b.h1,{variants:A,initial:"hidden",animate:"show",children:"E"})}),Object(K.jsx)(hn,{children:Object(K.jsx)(E.b.h1,{variants:H,initial:"hidden",animate:"show",children:"L"})}),Object(K.jsx)(hn,{children:Object(K.jsx)(E.b.h1,{variants:I,initial:"hidden",animate:"show",children:"L"})}),Object(K.jsx)(hn,{children:Object(K.jsx)(E.b.h1,{variants:_,initial:"hidden",animate:"show",children:"O"})}),Object(K.jsx)(sn,{})]})},jn=T.a.div(h||(h=Object(M.a)(["\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    margin-top: 33vh;\n    z-index: 9;\n    justify-content: center;\n"]))),xn=T.a.div(b||(b=Object(M.a)(["\n    margin: 0rem 0.7rem;\n    background: white;\n    padding: 1rem;\n    height: 10vh;\n    width: 20vh;\n    box-shadow: 2px 2px 50px rgb(199, 199, 199);\n    border-radius: 50px;\n    overflow: hidden;\n    h3 {\n        opacity: 0.70;\n        background: -webkit-linear-gradient(right, orange, darkCyan);\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent\n    }\n    @media screen and (max-width: 768px) {\n        padding: 0;\n        font-size: 9px;\n        text-align: center;\n        height: 6vh;\n        border-radius: 10px;\n        margin: 7rem 0.2rem;\n        z-index: 2\n    }\n"]))),pn=(T.a.h1(j||(j=Object(M.a)(["\n    font-size: 1.2rem;\n    display: flex;\n    top: 113vh;\n    padding: 0;\n    position: absolute;\n    justify-content: center;\n    color: #5e5e5e;\n    opacity: 0.75;\n    @media screen and (max-width: 768px) {\n        font-size: 0.5rem;\n        top: 95vh;\n    }\n"]))),function(){return Object(K.jsxs)(jn,{children:[Object(K.jsx)(xn,{children:Object(K.jsx)("h3",{children:"Quick Learner"})}),Object(K.jsx)(xn,{children:Object(K.jsx)("h3",{children:"Organized"})}),Object(K.jsx)(xn,{children:Object(K.jsx)("h3",{children:"Good Work Ethic"})}),Object(K.jsx)(xn,{children:Object(K.jsx)("h3",{children:"Self Motivated"})})]})}),mn=t(29),gn=function(){var n=Object(E.c)(),e=Object(mn.a)({threshold:.2}),t=Object(F.a)(e,2),i=t[0];return t[1]?n.start("show"):n.start("hidden"),[i,n]},un=T.a.div(x||(x=Object(M.a)(["\n    margin-top: 3rem;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    h1 {\n        font-size: 1.2rem;\n        color: #5e5e5e;\n        opacity: 0.75;\n        margin-bottom: 0;\n    }\n    @media screen and (max-width: 768px) {\n        margin-top: -5rem;\n        max-height: 160vh;\n        min-height: 160vh;\n        h1 {\n            font-size: 1.6rem;\n        }\n        h2 {\n            font-size: 0.5rem;\n        }\n        li {\n            line-height: 15px;\n        }\n        h5, li, p {\n            font-size: 0.51rem;\n        }\n        .icon {\n            font-size: 15px;\n        }\n    }\n"]))),On=Object(T.a)(E.b.div)(p||(p=Object(M.a)(["\n    margin: 2rem 0.7rem;\n    //background: #82c8c5;\n    background: white;\n    padding: 1rem;\n    height: 70vh;\n    width: 75%;\n    //box-shadow: 2px 2px 50px rgb(199, 199, 199);\n    border-radius: 25px;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    h2 {\n        opacity: 0.80;\n        background: -webkit-linear-gradient(right, orange, darkCyan);\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n        font-weight: 400;\n    }\n    h5 {\n        margin-top: 0rem;\n        opacity: 0.3;\n    }\n    span {\n        font-size: 1.5rem;\n    }\n"]))),fn=T.a.div(m||(m=Object(M.a)(["\n    //border: solid lightblue;\n    //border-radius: 15px;\n    height: 35vh;    \n    background: #a4d4d4;\n    //background: white;\n    box-shadow: 2px 2px 50px rgb(199, 199, 199);\n    padding: 1rem;\n    margin: 1rem;\n    p {\n        line-height: 50px;\n    }\n    @media screen and (max-width: 768px) {\n        min-height: 17vh;\n        margin: 0;\n        p {\n            line-height: 20px;\n        }\n        ul {\n            margin: 0;\n            padding: 0;\n        }\n    }\n"]))),wn=function(){var n=gn(),e=Object(F.a)(n,2),t=e[0],i=e[1],a=gn(),r=Object(F.a)(a,2),o=r[0],c=r[1],s=gn(),d=Object(F.a)(s,2),l=d[0],h=d[1];return Object(K.jsxs)(un,{children:[Object(K.jsx)("h1",{children:"Experience"}),Object(K.jsxs)(On,{ref:t,variants:Z,animate:i,initial:"hidden",children:[Object(K.jsx)(B.a,{className:"icon",icon:P.a,size:"2x",color:"orange"}),Object(K.jsx)("h2",{children:"Ultimate Worldwide Logistics (Regional Driver)"}),Object(K.jsx)("h5",{children:"August 2020 - October 2020"}),Object(K.jsx)("br",{}),Object(K.jsx)(fn,{children:Object(K.jsxs)("ul",{children:[Object(K.jsx)("li",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nostrum veniam libero enim dolorem magni perferendis reiciendis architecto sint qui eaque, consequuntur blanditiis vel quis, fugiat vitae non cupiditate aut?"}),Object(K.jsx)("li",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, asperiores!"})]})})]}),Object(K.jsxs)(On,{ref:o,variants:Z,animate:c,initial:"hidden",children:[Object(K.jsx)(B.a,{className:"icon",icon:P.a,size:"2x",color:"orange"}),Object(K.jsx)("h2",{children:"Schneider National (Regional Driver)"}),Object(K.jsx)("h5",{children:"September 2018 - February 2020"}),Object(K.jsx)("br",{}),Object(K.jsx)(fn,{children:Object(K.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nostrum veniam libero enim dolorem magni perferendis reiciendis architecto sint qui eaque, consequuntur blanditiis vel quis, fugiat vitae non cupiditate aut?"})})]}),Object(K.jsxs)(On,{ref:l,variants:Z,animate:h,initial:"hidden",children:[Object(K.jsx)(B.a,{className:"icon",icon:P.a,size:"2x",color:"orange"}),Object(K.jsx)("h2",{children:"Target (Backroom Logistics Team Member)"}),Object(K.jsx)("h5",{children:" March 2016 - May 2018"}),Object(K.jsx)("br",{}),Object(K.jsx)(fn,{children:Object(K.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nostrum veniam libero enim dolorem magni perferendis reiciendis architecto sint qui eaque, consequuntur blanditiis vel quis, fugiat vitae non cupiditate aut?"})})]})]})},vn=T.a.svg(g||(g=Object(M.a)(["\n    position: absolute;\n    left: 0;\n    top: 10%;\n    z-index: -1;\n"]))),yn=function(){return Object(K.jsx)(vn,{viewBox:"0 0 1440 363",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(K.jsx)(E.b.path,{initial:{pathLength:0,pathOffset:2},animate:{pathLength:1,pathOffset:0},transition:{duration:3.2},d:"M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5",stroke:"turquoise",strokeOpacity:"0.4",strokeWidth:"11"})})},kn=t.p+"static/media/book.cccd4e3d.jpg",zn=Object(T.a)(E.b.img)(u||(u=Object(M.a)(["\n    top: 0%;\n    height: 113.5%;\n    z-index: -2;\n    position: fixed;\n    width: 100%;\n    object-fit: cover;\n"]))),Cn=Object(T.a)(E.b.div)(O||(O=Object(M.a)(["\n    margin-top: 0rem;\n    margin-right: 0rem;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    overflow-y: hidden;\n"]))),Sn=T.a.div(f||(f=Object(M.a)(["\n    width: 100%;\n    height: 20vh;\n    margin: 1rem;\n    padding: 0rem;\n    border-radius: 30px;\n    //box-shadow: 2px 2px 50px rgb(199, 199, 199);   \n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    border: solid #83b6b3;\n    background: #ffffff;\n    h3 {\n        font-size: 25px;\n        opacity: 0.80;\n        background: -webkit-linear-gradient(right, orange, darkCyan);\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n        font-weight: 400;\n        align-self: center;\n    }\n    &:hover {\n        font-size: 35px;\n        //background: rgb(65, 65, 65);        \n        color: white;\n        transform: scale(1.1);\n        transition: 0.5s ease;\n    }\n    &:not(hover) {\n        transition: 0.7s ease;\n    }\n    @media screen and (max-width: 768px) {\n        margin: 0.2rem;\n        margin-top: 3rem;\n        margin-bottom: 2rem;\n        height: 9vh;\n        font-size: 6px;\n        border-radius: 20px;\n        h3 {\n            font-size: 12px;\n        }\n        &:hover {\n            font-size: 12px;\n            transform: scale(1.05);\n        }\n    }\n"]))),Ln=Object(T.a)(E.b.div)(w||(w=Object(M.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    height: 59vh;\n    h1 {\n        font-size: 1.5rem;\n        opacity: 0.5;\n        margin-top: 0;\n    }\n"]))),qn=T.a.div(v||(v=Object(M.a)(["\n    display: flex;\n    justify-content: center;\n    opacity: 0.70;\n"]))),Nn=T.a.div(y||(y=Object(M.a)(["\n    background: white;\n    border-radius: 25px;\n    height: 70vh;\n    width: 85%;\n    box-shadow: 2px 2px 50px rgb(199, 199, 199);\n    padding: 1rem;\n"]))),Mn=function(){return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(zn,{exit:"exit",variants:X,initial:"hidden",animate:"show",src:kn,alt:""}),Object(K.jsxs)(Cn,{exit:"exit",variants:Z,initial:"hidden",animate:"show",children:[Object(K.jsxs)(Sn,{children:[Object(K.jsx)("h3",{children:"HTML"}),Object(K.jsxs)(qn,{children:[Object(K.jsx)(B.a,{icon:P.h,color:"gold"}),Object(K.jsx)(B.a,{icon:P.h,color:"gold"}),Object(K.jsx)(B.a,{icon:P.h,color:"gold"}),Object(K.jsx)(B.a,{icon:P.h,color:"gold"}),Object(K.jsx)(B.a,{icon:P.h,color:"gold"})]})]}),Object(K.jsxs)(Sn,{children:[Object(K.jsx)("h3",{children:"CSS"}),Object(K.jsxs)(qn,{children:[Object(K.jsx)(B.a,{icon:P.h,color:"gold"}),Object(K.jsx)(B.a,{icon:P.h,color:"gold"}),Object(K.jsx)(B.a,{icon:P.h,color:"gold"}),Object(K.jsx)(B.a,{icon:P.h,color:"gold"}),Object(K.jsx)(B.a,{icon:P.h,color:"gold"})]})]}),Object(K.jsxs)(Sn,{children:[Object(K.jsx)("h3",{children:"JavaScript"}),Object(K.jsxs)(qn,{children:[Object(K.jsx)(B.a,{icon:P.h,color:"gold"}),Object(K.jsx)(B.a,{icon:P.h,color:"gold"}),Object(K.jsx)(B.a,{icon:P.h,color:"gold"}),Object(K.jsx)(B.a,{icon:P.h,color:"gold"}),Object(K.jsx)(B.a,{icon:P.h,color:"gold"})]})]}),Object(K.jsxs)(Sn,{children:[Object(K.jsx)("h3",{children:"React"}),Object(K.jsxs)(qn,{children:[Object(K.jsx)(B.a,{icon:P.h,color:"gold"}),Object(K.jsx)(B.a,{icon:P.h,color:"gold"}),Object(K.jsx)(B.a,{icon:P.h,color:"gold"}),Object(K.jsx)(B.a,{icon:P.h,color:"gold"}),Object(K.jsx)(B.a,{icon:P.h,color:"gold"})]})]}),Object(K.jsxs)(Sn,{children:[Object(K.jsx)("h3",{children:"Redux"}),Object(K.jsxs)(qn,{children:[Object(K.jsx)(B.a,{icon:P.h,color:"gold"}),Object(K.jsx)(B.a,{icon:P.h,color:"gold"}),Object(K.jsx)(B.a,{icon:P.h,color:"gold"}),Object(K.jsx)(B.a,{icon:P.h,color:"gold"}),Object(K.jsx)(B.a,{icon:P.h,color:"grey"})]})]})]}),Object(K.jsx)(yn,{className:"wave2"}),Object(K.jsxs)(Ln,{variants:G,exit:"exit",initial:"hidden",animate:"show",children:[Object(K.jsx)(B.a,{icon:P.e,size:"2x",color:"orange"}),Object(K.jsx)("h1",{children:"Education"}),Object(K.jsx)(Nn,{children:Object(K.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, veritatis."})})]})]})},Fn=t.p+"static/media/insta.c8009274.svg",Tn=t.p+"static/media/linkedin.357bb3eb.png",En=t.p+"static/media/react.73ac128a.png",Bn=t.p+"static/media/soung.f2801e96.png",Pn=Object(T.a)(E.b.div)(k||(k=Object(M.a)(["\n    display: flex;\n    justify-content: space-between;\n    //border-top: solid lightsteelblue;\n    //box-shadow: 2px 2px 50px rgb(199, 199, 199);\n    padding: 5rem;\n    padding-bottom: 1rem;\n    margin-top: 3rem;\n    //border-radius: 50px 50px 0px 0px;\n    img {\n        cursor: pointer;\n        width: 10vh;\n        height: 10vh;\n        object-fit: cover;\n        &:hover {\n            transform: scale(1.4);\n            transition: 0.5s ease-out;\n        }\n        &:not(hover) {\n            transform: scale(1);\n            transition: 0.5s ease-out;\n        }\n    }\n    @media screen and (max-width: 768px) {\n        padding-left: 0;\n        padding-right: 0;\n        padding-top: 1rem;\n        img {\n            font-size: 50px;\n        }\n    }\n"]))),Rn=function(){var n=gn(),e=Object(F.a)(n,2),t=e[0],i=e[1];return Object(K.jsxs)(Pn,{ref:t,variants:U,animate:i,initial:"hidden",children:[Object(K.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/kevin-frias-284b75200/",children:Object(K.jsx)("img",{src:Tn,alt:"linkedin"})}),Object(K.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://kevinfrias4.github.io/music-player/",children:Object(K.jsx)("img",{src:En,alt:"linkedin"})}),Object(K.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://soundcloud.com/kevin-kix-frias/sets/bulls-in-america",children:Object(K.jsx)("img",{src:Bn,alt:"soundcloud"})}),Object(K.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/kevinkixrocks",children:Object(K.jsx)("img",{src:Fn,alt:"insta"})})]})};var Wn,Dn=T.a.div(z||(z=Object(M.a)(['\n  &.profile-active {\n    margin-left: 30%;\n    transition: ease-in;\n    overflow: hidden;\n  }\n  &.App {\n    transition: all 0.5s ease;\n    * {\n      font-family: "Lato", sans-serif;\n    }\n  }\n  @media screen and (max-width: 768px) {\n    &.profile-active {\n      top: 0;\n      height: 1px;\n      overflow: hidden;\n      justify-self: center;\n      .smile {\n        margin-right: 35%;\n        position: fixed;\n        top: 3%;\n        transition: 0.1 ease;\n        overflow-y: hidden;\n      }\n      &:not(.smile) {\n        transition: 0.1s ease;\n      }\n    }\n  }\n']))),An=function(){var n=Object(S.useState)(!1),e=Object(F.a)(n,2),t=e[0],i=e[1],a=Object(R.f)();return Object(K.jsxs)(Dn,{className:"App ".concat(t?"profile-active":""),children:[Object(K.jsx)($,{profileStatus:t,setProfileStatus:i}),Object(K.jsx)(on,{profileStatus:t}),Object(K.jsx)(E.a,{exitBeforeEnter:!0,children:Object(K.jsxs)(R.c,{location:a,children:[Object(K.jsxs)(R.a,{exact:!0,path:"/",children:[Object(K.jsx)(bn,{}),Object(K.jsx)(pn,{}),Object(K.jsx)(wn,{})]}),Object(K.jsx)(R.a,{exact:!0,path:"/education",children:Object(K.jsx)(Mn,{})})]},a.pathname)}),Object(K.jsx)(Rn,{})]})},Hn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,42)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;t(n),i(n),a(n),r(n),o(n)}))};N.a.render(Object(K.jsx)(L.a.StrictMode,{children:Object(K.jsx)(W.a,(Wn={basename:window.location.pathname||""},Object(C.a)(Wn,"basename",window.location.pathname||""),Object(C.a)(Wn,"children",Object(K.jsx)(An,{})),Wn))}),document.getElementById("root")),Hn()}},[[41,1,2]]]);
//# sourceMappingURL=main.0c618fd5.chunk.js.map