import{i as y,D as P,d as b,g as x,P as _,o as m,M as f,al as I}from"./ThreeInit.562ee8fc.js";import{_ as z}from"./index.e857c6c1.js";import{m as S,o as j,a as B,p as D,d as E,b as G}from"./vendor.eebc2ca3.js";const L=r=>(D("data-v-2214087b"),r=r(),E(),r),T=L(()=>G("div",{id:"three-canvas",style:{width:"0.8vw",height:"0.45vw"}},null,-1)),q=[T];function A(r){let c,d,n,s,i,l=[],p=[];function u(){let o=y();n=o.scene,s=o.camera,d=o.renderer,o.control.enabled=!1,s.position.z=1e3,s.far=1e4;const e=new P(16777215,1);e.position.set(0,0,1),n.add(e),i=new b(404873,30,350,1.7),i.position.set(0,0,250),n.add(i),M()}const M=function(){new x().load("../src/assets/image/smoke_3.png",function(e){const w=new _(350,350),v=new m({map:e,transparent:!0,opacity:.2});for(let t=480;t>240;t--){let a=new f(w,v);a.position.set(.7*t*Math.cos(4*t*Math.PI/180),.7*t*Math.sin(4*t*Math.PI/180),.1*t),a.rotation.z=Math.random()*360,a.material.opacity=Math.random()/2,l.push(a),n.add(a)}const g=new _(1e3,1e3),k=new m({map:e,transparent:!0,opacity:.1});for(let t=0;t<40;t++){let a=new f(g,k);a.position.set(Math.random()*500-300,Math.random()*400-200,25),a.rotation.z=Math.random()*360,p.push(a),n.add(a)}c=new I,h()})},h=function(){let o=c.getDelta();l.forEach(e=>{e.rotation.z-=o*1.5}),p.forEach(e=>{e.rotation.z-=o*.2}),Math.random()>.9&&(i.power=350+Math.random()*100),d.render(n,s),requestAnimationFrame(h)};return S(()=>{u(),window.onresize=function(){location.reload()}}),(o,e)=>(j(),B("body",null,q))}const C={name:"three_04"},F=Object.assign(C,{setup:A});var H=z(F,[["__scopeId","data-v-2214087b"]]);export{H as default};
