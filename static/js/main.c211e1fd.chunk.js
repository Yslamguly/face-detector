(this["webpackJsonpface-detector"]=this["webpackJsonpface-detector"]||[]).push([[0],{105:function(e,t,n){},107:function(e,t,n){"use strict";n.r(t);var c=n(12),i=n.n(c),a=n(44),o=n.n(a),r=(n(56),n(3)),s=n(4),l=n(10),u=(n(57),n(31)),b=(n(58),n(11)),d=function(){return Object(b.jsx)("div",{className:"ma4 mt4",children:Object(b.jsx)(u.a,{className:"br2 shadow-2",options:{max:45},style:{height:150,width:150},children:Object(b.jsxs)("div",{className:"Tilt-inner",children:[Object(b.jsx)("img",{src:"http://cdn.onlinewebfonts.com/svg/img_432607.png",style:{height:150}}),"\ufe0fBrain"]})})})},f=(n(60),function(e){var t=e.onInputChange,n=e.onButtonSubmit;return Object(b.jsxs)("div",{className:"ma4 mt0",children:[Object(b.jsx)("p",{className:"f3 white",children:"This magic brain will detect faces in your pictures. Give it a try!"}),Object(b.jsx)("div",{className:"center",children:Object(b.jsxs)("div",{className:" form center pa4 br3 shadow-5",children:[Object(b.jsx)("input",{className:"f4 pa2 w-70 center",type:"url",onChange:t}),Object(b.jsx)("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:n,children:"Detect"})]})})]})}),j=n(48),m=n(47),h=n(46),p=n.n(h),g=(n(105),function(e){var t=e.imageUrl,n=e.box;return Object(b.jsx)("div",{className:"center ma",children:Object(b.jsxs)("div",{className:"absolute mt2",children:[Object(b.jsx)("img",{src:t,alt:"",id:"inputImage",width:"500px",height:"auto"}),Object(b.jsx)("div",{className:"bounding-box",style:{top:n.topRow,left:n.leftCol,right:n.rightCol,bottom:n.bottomRow}})]})})}),v=new p.a.App({apiKey:"5f1aa879e6c647029a7ccca461a5454e"}),O={background:{color:{value:"linear-gradient(to left, #a0b73b 0% , #2468fc)"}},fpsLimit:120,interactivity:{events:{onHover:{enable:!1,mode:"repulse"},resize:!0}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:270,enable:!0,opacity:.5,width:1},move:{direction:"none",enable:!0,outModes:{default:"bounce"},random:!1,speed:1.2,straight:!1},number:{density:{enable:!1,area:700},value:20},opacity:{value:.5},shape:{type:"circle"},size:{value:{min:3,max:8}}},detectRetina:!0},x=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(""),o=Object(l.a)(a,2),u=o[0],h=o[1],p=Object(c.useState)({}),x=Object(l.a)(p,2),w=x[0],N=x[1],y=function(){var e=Object(s.a)(Object(r.a)().mark((function e(t){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(j.a,{className:"particles",id:"tsparticles",init:y,options:O}),Object(b.jsx)(d,{}),Object(b.jsx)(f,{onInputChange:function(e){return i(e.target.value)},onButtonSubmit:function(){h(n),v.models.predict({id:"a403429f2ddf4b49b307e318f00e528b",version:"34ce21a40cc24b6b96ffee54aabff139"},n).then((function(e){N(function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputImage"),c=Number(n.width),i=Number(n.height);return{leftCol:t.left_col*c,topRow:t.top_row*i,rightCol:c-t.right_col*c,bottomRow:i-t.bottom_row*i}}(e))})).catch((function(e){return console.log(e)}))}}),Object(b.jsx)(g,{box:w,imageUrl:u})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,108)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),a(e),o(e)}))};n(106);o.a.createRoot(document.getElementById("root")).render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(x,{})})),w()},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.c211e1fd.chunk.js.map