import{_ as B,o as l,c as h,z as S,k as x,l as E,h as e,d as b,t as d,w as z,n as P,p as L,j as C,R,A as k,u as H,v as q,i as V,a as y,B as m,C as A,F as G,r as O,D as J,E as v,G as K,H as Q,I as X,x as Y}from"./index-600bec0e.js";import{_ as Z}from"./PostList-6935457d.js";import"./AppDate-cb14dc0d.js";import"./AppFormField-d88df94d.js";const ee={props:{done:{type:Boolean,default:!1}},data(){return{observer:null}},mounted(){this.observer=new IntersectionObserver((s,c)=>{s.forEach(n=>{n.isIntersecting&&this.$emit("load")})},{root:null,rootMargin:"0px",threshold:.9}),this.observer.observe(this.$el)},unmounted(){this.observer.unobserve(this.$el)},watch:{done(){this.done&&this.observer.unobserve(this.$el)}}},te={class:"inersection-observer"};function se(s,c,n,i,o,u){return l(),h("div",te)}const oe=B(ee,[["render",se],["__scopeId","data-v-0da1cc2c"]]),ae={class:"profile-card"},ne={class:"text-center"},re={class:"title"},le={class:"text-lead"},ce={class:"text-justify"},ie={class:"online"},ue={class:"stats"},de={class:"text-center"},_e=e("hr",null,null,-1),pe=e("hr",null,null,-1),me={class:"text-large text-center"},he=e("i",{class:"fa fa-globe"},null,-1),fe=["href"],ve={__name:"UserProfileCard",props:["actieUser"],setup(s){const c=S(),n=x(()=>{var o;return(o=c.authUser)==null?void 0:o.postsCount}),i=x(()=>{var o;return(o=c.authUser)==null?void 0:o.threadsCount});return(o,u)=>{const _=L,t=E("RouterLink");return l(),h("div",ae,[e("p",ne,[b(_,{src:s.actieUser.avatar,alt:`${s.actieUser.name}`,class:"avatar-xlarge"},null,8,["src","alt"])]),e("h1",re,d(s.actieUser.name),1),e("p",le,d(s.actieUser.username),1),e("p",ce,d(s.actieUser.bio??"No bio specified")+".",1),e("span",ie,d(s.actieUser.username)+" is online",1),e("div",ue,[e("span",null,d(n.value)+" posts",1),e("span",null,d(i.value)+" threads",1)]),e("div",de,[_e,b(t,{to:{name:"edit"},class:"btn-green btn-small"},{default:z(()=>[P("Edit Profile")]),_:1})]),pe,e("p",me,[he,P(),e("a",{href:s.actieUser.website},d(s.actieUser.website),9,fe)])])}}},be={class:"text-center",style:{"margin-bottom":"15px"}},$e=["onClick"],xe={__name:"RandomAvatar",emits:["hit"],setup(s,{emit:c}){const n=c,i=C(["cats","dogs","abstract","cars","mountains","beach","landscape","object","food","flowers","architecture","yellow","green","blue","orange","black","white","brown","red","patterns","animal","code","space"]),o=R(i),u=async function(){const t=await(await fetch(`https://pixabay.com/api/?key=40797758-a6184c70be735879e30a0ad92&q=${o}`)).json(),p=R(t.hits);n("hit",p.webformatURL)};return(_,t)=>(l(),h("div",be,[e("button",{class:"btn-green btn-xsmall",onClick:k(u,["prevent"])},"Random Avatar",8,$e)]))}};const $=s=>(K("data-v-4fef5baf"),s=s(),Q(),s),Ue=["onSubmit"],ge={class:"profile-card"},ye={class:"text-center avatar-edit"},we={for:"avatar"},Ce={class:"avatar-upload-overlay"},ke={class:"form-group"},Ae={class:"form-group"},Se={class:"form-group"},Ie=$(()=>e("label",{for:"user_bio"},"Bio",-1)),Pe={class:"stats"},Re=$(()=>e("hr",null,null,-1)),Ve={class:"form-group"},Be=$(()=>e("label",{class:"form-label",for:"user_website"},"Website",-1)),Ee={class:"form-group"},Le=$(()=>e("label",{class:"form-label",for:"user_email"},"Email",-1)),Ne={class:"form-group"},je=$(()=>e("label",{class:"form-label",for:"user_location"},"Location",-1)),Me={id:"locations"},Fe=["value"],Te={class:"btn-group space-between"},We=["onClick"],De=$(()=>e("button",{type:"submit",class:"btn-blue"},"Save",-1)),ze={__name:"ProfileCardEditor",props:["actieUser"],emits:["ready"],setup(s,{emit:c}){const n=H(),i=S(),o=q(),u=s,_=c,t={...C(u.actieUser)},p=V(!1),U=V(null),g=C([]),w=async function(){await n.setUser({...t,threads:n.threadIds}),o.push("/me")},I=function(){o.push("/me")},N=function(f){t.avatar=f,U.value=f},j=async function(){const a=await(await fetch("https://restcountries.com/v3.1/all")).json();g[0]=a},M=async function(f){p.value=!0;const a=f.target.files[0];t.avatar=await i.uploadUserAvatar(null,a),p.value=!1};return _("ready"),(f,a)=>{const F=L,T=X,W=E("fa"),D=xe;return l(),h("form",{onSubmit:k(w,["prevent"])},[e("div",ge,[e("p",ye,[e("label",we,[b(F,{src:U.value??t.avatar,alt:`${s.actieUser.name} pic`,class:"avatar-xlarge img-update"},null,8,["src","alt"]),e("div",Ce,[p.value?(l(),y(T,{key:0,spinnerColor:"white"})):(l(),y(W,{key:1,icon:"camera",size:"3x",style:{color:"white",opacity:".8"}}))]),m(e("input",{type:"file",id:"avatar",accept:"image/*",onChange:M},null,544),[[J,!1]])])]),e("div",null,[b(D,{onHit:N})]),e("div",ke,[m(e("input",{type:"text",placeholder:"Username",class:"form-input text-lead text-bold","onUpdate:modelValue":a[0]||(a[0]=r=>t.userName=r)},null,512),[[v,t.userName]])]),e("div",Ae,[m(e("input",{type:"text",placeholder:"Full Name",class:"form-input text-lead","onUpdate:modelValue":a[1]||(a[1]=r=>t.name=r)},null,512),[[v,t.name]])]),e("div",Se,[Ie,m(e("textarea",{"onUpdate:modelValue":a[2]||(a[2]=r=>t.bio=r),class:"form-input",id:"user_bio",placeholder:"Write a few words about yourself."},null,512),[[v,t.bio]])]),e("div",Pe,[e("span",null,d(A(i).authUser.postsCount)+" posts",1),e("span",null,d(A(i).authUser.threadsCount)+" threads",1)]),Re,e("div",Ve,[Be,m(e("input",{autocomplete:"off",class:"form-input",id:"user_website","onUpdate:modelValue":a[3]||(a[3]=r=>t.website=r)},null,512),[[v,t.website]])]),e("div",Ee,[Le,m(e("input",{autocomplete:"off",class:"form-input",id:"user_email","onUpdate:modelValue":a[4]||(a[4]=r=>t.email=r)},null,512),[[v,t.email]])]),e("div",Ne,[je,m(e("input",{onMouseenter:j,autocomplete:"off",class:"form-input",id:"user_location","onUpdate:modelValue":a[5]||(a[5]=r=>t.location=r),list:"locations"},null,544),[[v,t.location]])]),e("datalist",Me,[(l(!0),h(G,null,O(g[0],r=>(l(),h("option",{value:r.name.common,key:r.name.common},null,8,Fe))),128))]),e("div",Te,[e("button",{hclass:"btn-ghost",onClick:k(I,["prevent"])},"Cancel",8,We),De])])],40,Ue)}}},He=B(ze,[["__scopeId","data-v-4fef5baf"]]),qe={class:"container",style:{width:"100%"}},Ge={class:"flex-grid"},Oe={class:"col-3 push-top"},Je=e("p",{class:"text-xsmall text-faded text-center"}," Member since june 2003, last visited 4 hours ago ",-1),Ke={class:"col-7 push-top"},Qe={class:"profile-header"},Xe={class:"text-lead"},Ye=e("hr",null,null,-1),ot={__name:"UserProfile",props:{edit:{type:Boolean,default:!1}},emits:["ready"],setup(s,{emit:c}){const n=S(),i=c,o=x(()=>n.authUser.posts),u=x(()=>n.authUser),_=x(()=>o.value===0?null:o.value.at(-1));return Y(async()=>{await n.featchAuthUsersPosts(_.value),i("ready")}),(t,p)=>{const U=ve,g=Z,w=oe;return l(),h("div",qe,[e("div",Ge,[e("div",Oe,[Je,s.edit?(l(),y(He,{key:1,actieUser:u.value},null,8,["actieUser"])):(l(),y(U,{key:0,actieUser:u.value},null,8,["actieUser"]))]),e("div",Ke,[e("div",Qe,[e("span",Xe,d(u.value.name)+" recent activity ",1)]),Ye,b(g,{posts:o.value},null,8,["posts"]),b(w,{onLoad:p[0]||(p[0]=I=>A(n).featchAuthUsersPosts(_.value)),done:o.value.length===u.value.postsCount},null,8,["done"])])])])}}};export{ot as default};
