import{_ as d}from"./FourmList-04d453ee.js";import{b as f,f as p,i as _,j as y,k as g,c as v,h,t as k,a as B,e as I,o as n}from"./index-600bec0e.js";const N={key:0,class:"col-full push-top"},w={__name:"CategoryItem",props:["id"],setup(u){const a=f(),o=p(),s=u,c=_(!1),i=y(a.items),t=g(()=>i.find(e=>e.id===s.id)??{});function m(e){return o.items.filter(r=>r.categoryId===e.id)}return async function(){const e=await a.featchCategoury(s.id);await o.featchFourms(e.forums),c.value=!0}(),(e,r)=>{const l=d;return c.value?(n(),v("div",N,[h("h1",null,k(t.value.name),1),(n(),B(l,{key:t.value.id,catName:t.value.name,forums:m(t.value),catId:t.value.id},null,8,["catName","forums","catId"]))])):I("",!0)}}};export{w as default};
