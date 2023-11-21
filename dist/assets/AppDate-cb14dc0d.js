import{W as K,U as R,k as Q,o as nt,c as st,t as it}from"./index-600bec0e.js";var tt={exports:{}};(function(H,B){(function(m,v){H.exports=v()})(K,function(){var m=1e3,v=6e4,O=36e5,$="millisecond",S="second",T="minute",w="hour",o="day",p="week",d="month",L="quarter",Y="year",_="date",x="Invalid Date",C=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,U=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,A={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var r=["th","st","nd","rd"],t=s%100;return"["+s+(r[(t-20)%10]||r[t]||r[0])+"]"}},j=function(s,r,t){var n=String(s);return!n||n.length>=r?s:""+Array(r+1-n.length).join(t)+s},W={s:j,z:function(s){var r=-s.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),e=t%60;return(r<=0?"+":"-")+j(n,2,"0")+":"+j(e,2,"0")},m:function s(r,t){if(r.date()<t.date())return-s(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),e=r.clone().add(n,d),i=t-e<0,a=r.clone().add(n+(i?-1:1),d);return+(-(n+(t-e)/(i?e-a:a-e))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:d,y:Y,w:p,d:o,D:_,h:w,m:T,s:S,ms:$,Q:L}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},y="en",D={};D[y]=A;var E="$isDayjsObject",F=function(s){return s instanceof q||!(!s||!s[E])},V=function s(r,t,n){var e;if(!r)return y;if(typeof r=="string"){var i=r.toLowerCase();D[i]&&(e=i),t&&(D[i]=t,e=i);var a=r.split("-");if(!e&&a.length>1)return s(a[0])}else{var c=r.name;D[c]=r,e=c}return!n&&e&&(y=e),e||!n&&y},h=function(s,r){if(F(s))return s.clone();var t=typeof r=="object"?r:{};return t.date=s,t.args=arguments,new q(t)},u=W;u.l=V,u.i=F,u.w=function(s,r){return h(s,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var q=function(){function s(t){this.$L=V(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[E]=!0}var r=s.prototype;return r.parse=function(t){this.$d=function(n){var e=n.date,i=n.utc;if(e===null)return new Date(NaN);if(u.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var a=e.match(C);if(a){var c=a[2]-1||0,f=(a[7]||"0").substring(0,3);return i?new Date(Date.UTC(a[1],c,a[3]||1,a[4]||0,a[5]||0,a[6]||0,f)):new Date(a[1],c,a[3]||1,a[4]||0,a[5]||0,a[6]||0,f)}}return new Date(e)}(t),this.init()},r.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},r.$utils=function(){return u},r.isValid=function(){return this.$d.toString()!==x},r.isSame=function(t,n){var e=h(t);return this.startOf(n)<=e&&e<=this.endOf(n)},r.isAfter=function(t,n){return h(t)<this.startOf(n)},r.isBefore=function(t,n){return this.endOf(n)<h(t)},r.$g=function(t,n,e){return u.u(t)?this[n]:this.set(e,t)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(t,n){var e=this,i=!!u.u(n)||n,a=u.p(t),c=function(z,g){var k=u.w(e.$u?Date.UTC(e.$y,g,z):new Date(e.$y,g,z),e);return i?k:k.endOf(o)},f=function(z,g){return u.w(e.toDate()[z].apply(e.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(g)),e)},l=this.$W,M=this.$M,b=this.$D,I="set"+(this.$u?"UTC":"");switch(a){case Y:return i?c(1,0):c(31,11);case d:return i?c(1,M):c(0,M+1);case p:var N=this.$locale().weekStart||0,Z=(l<N?l+7:l)-N;return c(i?b-Z:b+(6-Z),M);case o:case _:return f(I+"Hours",0);case w:return f(I+"Minutes",1);case T:return f(I+"Seconds",2);case S:return f(I+"Milliseconds",3);default:return this.clone()}},r.endOf=function(t){return this.startOf(t,!1)},r.$set=function(t,n){var e,i=u.p(t),a="set"+(this.$u?"UTC":""),c=(e={},e[o]=a+"Date",e[_]=a+"Date",e[d]=a+"Month",e[Y]=a+"FullYear",e[w]=a+"Hours",e[T]=a+"Minutes",e[S]=a+"Seconds",e[$]=a+"Milliseconds",e)[i],f=i===o?this.$D+(n-this.$W):n;if(i===d||i===Y){var l=this.clone().set(_,1);l.$d[c](f),l.init(),this.$d=l.set(_,Math.min(this.$D,l.daysInMonth())).$d}else c&&this.$d[c](f);return this.init(),this},r.set=function(t,n){return this.clone().$set(t,n)},r.get=function(t){return this[u.p(t)]()},r.add=function(t,n){var e,i=this;t=Number(t);var a=u.p(n),c=function(M){var b=h(i);return u.w(b.date(b.date()+Math.round(M*t)),i)};if(a===d)return this.set(d,this.$M+t);if(a===Y)return this.set(Y,this.$y+t);if(a===o)return c(1);if(a===p)return c(7);var f=(e={},e[T]=v,e[w]=O,e[S]=m,e)[a]||1,l=this.$d.getTime()+t*f;return u.w(l,this)},r.subtract=function(t,n){return this.add(-1*t,n)},r.format=function(t){var n=this,e=this.$locale();if(!this.isValid())return e.invalidDate||x;var i=t||"YYYY-MM-DDTHH:mm:ssZ",a=u.z(this),c=this.$H,f=this.$m,l=this.$M,M=e.weekdays,b=e.months,I=e.meridiem,N=function(g,k,J,G){return g&&(g[k]||g(n,i))||J[k].slice(0,G)},Z=function(g){return u.s(c%12||12,g,"0")},z=I||function(g,k,J){var G=g<12?"AM":"PM";return J?G.toLowerCase():G};return i.replace(U,function(g,k){return k||function(J){switch(J){case"YY":return String(n.$y).slice(-2);case"YYYY":return u.s(n.$y,4,"0");case"M":return l+1;case"MM":return u.s(l+1,2,"0");case"MMM":return N(e.monthsShort,l,b,3);case"MMMM":return N(b,l);case"D":return n.$D;case"DD":return u.s(n.$D,2,"0");case"d":return String(n.$W);case"dd":return N(e.weekdaysMin,n.$W,M,2);case"ddd":return N(e.weekdaysShort,n.$W,M,3);case"dddd":return M[n.$W];case"H":return String(c);case"HH":return u.s(c,2,"0");case"h":return Z(1);case"hh":return Z(2);case"a":return z(c,f,!0);case"A":return z(c,f,!1);case"m":return String(f);case"mm":return u.s(f,2,"0");case"s":return String(n.$s);case"ss":return u.s(n.$s,2,"0");case"SSS":return u.s(n.$ms,3,"0");case"Z":return a}return null}(g)||a.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(t,n,e){var i,a=this,c=u.p(n),f=h(t),l=(f.utcOffset()-this.utcOffset())*v,M=this-f,b=function(){return u.m(a,f)};switch(c){case Y:i=b()/12;break;case d:i=b();break;case L:i=b()/3;break;case p:i=(M-l)/6048e5;break;case o:i=(M-l)/864e5;break;case w:i=M/O;break;case T:i=M/v;break;case S:i=M/m;break;default:i=M}return e?i:u.a(i)},r.daysInMonth=function(){return this.endOf(d).$D},r.$locale=function(){return D[this.$L]},r.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),i=V(t,n,!0);return i&&(e.$L=i),e},r.clone=function(){return u.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},s}(),X=q.prototype;return h.prototype=X,[["$ms",$],["$s",S],["$m",T],["$H",w],["$W",o],["$M",d],["$y",Y],["$D",_]].forEach(function(s){X[s[1]]=function(r){return this.$g(r,s[0],s[1])}}),h.extend=function(s,r){return s.$i||(s(r,q,h),s.$i=!0),h},h.locale=V,h.isDayjs=F,h.unix=function(s){return h(1e3*s)},h.en=D[y],h.Ls=D,h.p={},h})})(tt);var at=tt.exports;const P=R(at);var et={exports:{}};(function(H,B){(function(m,v){H.exports=v()})(K,function(){return function(m,v,O){m=m||{};var $=v.prototype,S={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function T(o,p,d,L){return $.fromToBase(o,p,d,L)}O.en.relativeTime=S,$.fromToBase=function(o,p,d,L,Y){for(var _,x,C,U=d.$locale().relativeTime||S,A=m.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],j=A.length,W=0;W<j;W+=1){var y=A[W];y.d&&(_=L?O(o).diff(d,y.d,!0):d.diff(o,y.d,!0));var D=(m.rounding||Math.round)(Math.abs(_));if(C=_>0,D<=y.r||!y.r){D<=1&&W>0&&(y=A[W-1]);var E=U[y.l];Y&&(D=Y(""+D)),x=typeof E=="string"?E.replace("%d",D):E(D,p,y.l,C);break}}if(p)return x;var F=C?U.future:U.past;return typeof F=="function"?F(x):F.replace("%s",x)},$.to=function(o,p){return T(o,p,this,!0)},$.from=function(o,p){return T(o,p,this)};var w=function(o){return o.$u?O.utc():O()};$.toNow=function(o){return this.to(w(this),o)},$.fromNow=function(o){return this.from(w(this),o)}}})})(et);var ut=et.exports;const ot=R(ut);var rt={exports:{}};(function(H,B){(function(m,v){H.exports=v()})(K,function(){var m={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(v,O,$){var S=O.prototype,T=S.format;$.en.formats=m,S.format=function(w){w===void 0&&(w="YYYY-MM-DDTHH:mm:ssZ");var o=this.$locale().formats,p=function(d,L){return d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(Y,_,x){var C=x&&x.toUpperCase();return _||L[x]||m[x]||L[C].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(U,A,j){return A||j.slice(1)})})}(w,o===void 0?{}:o);return T.call(this,p)}}})})(rt);var ct=rt.exports;const ft=R(ct),dt=["title"],lt={__name:"AppDate",props:{timeChange:{type:[Number,Object],required:!0}},setup(H){P.extend(ot),P.extend(ft);const B=H,m=Q(()=>{var $;return(($=B.timeChange)==null?void 0:$.seconds)??B.timeChange}),v=Q(()=>P.unix(m.value).fromNow()),O=Q(()=>P.unix(m.value).format("llll"));return($,S)=>(nt(),st("span",{title:O.value},it(v.value),9,dt))}};export{lt as _};
