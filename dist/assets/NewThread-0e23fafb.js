import{_ as w}from"./ThreadEditor-e30da06b.js";import{f as I,q as N,v as S,i as d,k,J as B,c as C,h as s,n as T,t as V,d as $,e as x,o as D}from"./index-600bec0e.js";import"./AppFormField-d88df94d.js";const R={key:0,class:"container"},b={class:"col-full push-top"},F={__name:"NewThread",props:{forumId:{type:String,required:!0}},emits:["ready"],setup(m,{emit:l}){const n=I(),f=N(),p=l,u=S(),o=m,a=d(!1),c=d(!1),i=k(()=>n.items.find(t=>t.id===o.forumId)??{}),v=async function({title:t,text:e}){const r=await f.createThread({forumId:o.forumId,title:t,text:e});u.push(`/thread/${r.id}`)},h=function(){u.push({name:"fourm",params:{id:i.value.id}})},y=async function(){await n.featchFourm(o.forumId),c.value=!0,p("ready")};return B(()=>a.value?!!confirm("are you sure you want to leave before publish thread?"):!0),y(),(t,e)=>{const r=w;return c.value?(D(),C("div",R,[s("div",b,[s("h1",null,[T(" Create new thread in "),s("i",null,V(i.value.name),1)]),$(r,{onSave:v,onCancle:h,onDirty:e[0]||(e[0]=_=>a.value=!0),onClean:e[1]||(e[1]=_=>a.value=!1)})])])):x("",!0)}}};export{F as default};
