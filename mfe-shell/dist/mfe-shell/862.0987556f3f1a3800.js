(self.webpackChunkmfe_shell=self.webpackChunkmfe_shell||[]).push([[862,364],{9862:(Se,B,R)=>{R.r(B),R.d(B,{FetchBackend:()=>Y,HTTP_INTERCEPTORS:()=>q,HttpBackend:()=>C,HttpClient:()=>he,HttpClientJsonpModule:()=>nt,HttpClientModule:()=>tt,HttpClientXsrfModule:()=>et,HttpContext:()=>ce,HttpContextToken:()=>Oe,HttpErrorResponse:()=>x,HttpEventType:()=>b,HttpFeatureKind:()=>I,HttpHandler:()=>w,HttpHeaderResponse:()=>A,HttpHeaders:()=>f,HttpParams:()=>k,HttpRequest:()=>H,HttpResponse:()=>_,HttpResponseBase:()=>J,HttpUrlEncodingCodec:()=>N,HttpXhrBackend:()=>ne,HttpXsrfTokenExtractor:()=>W,JsonpClientBackend:()=>te,JsonpInterceptor:()=>Ke,provideHttpClient:()=>Re,withFetch:()=>qe,withInterceptors:()=>Ye,withInterceptorsFromDi:()=>_e,withJsonpSupport:()=>Ie,withNoXsrfProtection:()=>xe,withRequestsMadeViaParent:()=>Qe,withXsrfConfiguration:()=>re,\u0275HttpInterceptingHandler:()=>z,\u0275HttpInterceptorHandler:()=>z,\u0275withHttpTransferCache:()=>ct});var D=R(5861),a=R(7970),T=R(3635),g=R(5893),S=R(3595);class w{}class C{}class f{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?"string"==typeof t?this.lazyInit=()=>{this.headers=new Map,t.split("\n").forEach(e=>{const r=e.indexOf(":");if(r>0){const s=e.slice(0,r),i=s.toLowerCase(),o=e.slice(r+1).trim();this.maybeSetNormalizedName(s,i),this.headers.has(i)?this.headers.get(i).push(o):this.headers.set(i,[o])}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((e,r)=>{this.setHeaderEntries(r,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([e,r])=>{this.setHeaderEntries(e,r)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof f?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){const e=new f;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof f?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){const e=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(t.name,e);const s=("a"===t.op?this.headers.get(e):void 0)||[];s.push(...r),this.headers.set(e,s);break;case"d":const i=t.value;if(i){let o=this.headers.get(e);if(!o)return;o=o.filter(d=>-1===i.indexOf(d)),0===o.length?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,o)}else this.headers.delete(e),this.normalizedNames.delete(e)}}setHeaderEntries(t,e){const r=(Array.isArray(e)?e:[e]).map(i=>i.toString()),s=t.toLowerCase();this.headers.set(s,r),this.maybeSetNormalizedName(t,s)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}}class N{encodeKey(t){return ae(t)}encodeValue(t){return ae(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}const G=/%(\d[a-f0-9])/gi,Ne={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function ae(n){return encodeURIComponent(n).replace(G,(t,e)=>Ne[e]??t)}function X(n){return`${n}`}class k{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new N,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function O(n,t){const e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(s=>{const i=s.indexOf("="),[o,d]=-1==i?[t.decodeKey(s),""]:[t.decodeKey(s.slice(0,i)),t.decodeValue(s.slice(i+1))],c=e.get(o)||[];c.push(d),e.set(o,c)}),e}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{const r=t.fromObject[e],s=Array.isArray(r)?r.map(X):[X(r)];this.map.set(e,s)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){const e=[];return Object.keys(t).forEach(r=>{const s=t[r];Array.isArray(s)?s.forEach(i=>{e.push({param:r,value:i,op:"a"})}):e.push({param:r,value:s,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const e=this.encoder.encodeKey(t);return this.map.get(t).map(r=>e+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const e=new k({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const e=("a"===t.op?this.map.get(t.param):void 0)||[];e.push(X(t.value)),this.map.set(t.param,e);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let r=this.map.get(t.param)||[];const s=r.indexOf(X(t.value));-1!==s&&r.splice(s,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}class Oe{constructor(t){this.defaultValue=t}}class ce{constructor(){this.map=new Map}set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}}function de(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function le(n){return typeof Blob<"u"&&n instanceof Blob}function ue(n){return typeof FormData<"u"&&n instanceof FormData}class H{constructor(t,e,r,s){let i;if(this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function Me(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||s?(this.body=void 0!==r?r:null,i=s):i=r,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params)),this.headers||(this.headers=new f),this.context||(this.context=new ce),this.params){const o=this.params.toString();if(0===o.length)this.urlWithParams=e;else{const d=e.indexOf("?");this.urlWithParams=e+(-1===d?"?":d<e.length-1?"&":"")+o}}else this.params=new k,this.urlWithParams=e}serializeBody(){return null===this.body?null:de(this.body)||le(this.body)||ue(this.body)||function je(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof k?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||ue(this.body)?null:le(this.body)?this.body.type||null:de(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof k?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){const e=t.method||this.method,r=t.url||this.url,s=t.responseType||this.responseType,i=void 0!==t.body?t.body:this.body,o=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,d=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let c=t.headers||this.headers,p=t.params||this.params;const v=t.context??this.context;return void 0!==t.setHeaders&&(c=Object.keys(t.setHeaders).reduce((h,y)=>h.set(y,t.setHeaders[y]),c)),t.setParams&&(p=Object.keys(t.setParams).reduce((h,y)=>h.set(y,t.setParams[y]),p)),new H(e,r,i,{params:p,headers:c,context:v,reportProgress:d,responseType:s,withCredentials:o})}}var b=function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n}(b||{});class J{constructor(t,e=200,r="OK"){this.headers=t.headers||new f,this.status=void 0!==t.status?t.status:e,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class A extends J{constructor(t={}){super(t),this.type=b.ResponseHeader}clone(t={}){return new A({headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class _ extends J{constructor(t={}){super(t),this.type=b.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new _({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class x extends J{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${t.url||"(unknown url)"}`:`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}}function Z(n,t){return{body:t,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials}}let he=(()=>{class n{constructor(e){this.handler=e}request(e,r,s={}){let i;if(e instanceof H)i=e;else{let c,p;c=s.headers instanceof f?s.headers:new f(s.headers),s.params&&(p=s.params instanceof k?s.params:new k({fromObject:s.params})),i=new H(e,r,void 0!==s.body?s.body:null,{headers:c,context:s.context,params:p,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials})}const o=(0,T.of)(i).pipe((0,g.concatMap)(c=>this.handler.handle(c)));if(e instanceof H||"events"===s.observe)return o;const d=o.pipe((0,g.filter)(c=>c instanceof _));switch(s.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return d.pipe((0,g.map)(c=>{if(null!==c.body&&!(c.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return c.body}));case"blob":return d.pipe((0,g.map)(c=>{if(null!==c.body&&!(c.body instanceof Blob))throw new Error("Response is not a Blob.");return c.body}));case"text":return d.pipe((0,g.map)(c=>{if(null!==c.body&&"string"!=typeof c.body)throw new Error("Response is not a string.");return c.body}));default:return d.pipe((0,g.map)(c=>c.body))}case"response":return d;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(e,r={}){return this.request("DELETE",e,r)}get(e,r={}){return this.request("GET",e,r)}head(e,r={}){return this.request("HEAD",e,r)}jsonp(e,r){return this.request("JSONP",e,{params:(new k).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,r={}){return this.request("OPTIONS",e,r)}patch(e,r,s={}){return this.request("PATCH",e,Z(s,r))}post(e,r,s={}){return this.request("POST",e,Z(s,r))}put(e,r,s={}){return this.request("PUT",e,Z(s,r))}}return n.\u0275fac=function(e){return new(e||n)(a.\u0275\u0275inject(w))},n.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const He=/^\)\]\}',?\n/;function pe(n){if(n.url)return n.url;const t="X-Request-URL".toLocaleLowerCase();return n.headers.get(t)}let Y=(()=>{class n{constructor(){this.fetchImpl=(0,a.inject)(Ae,{optional:!0})?.fetch??fetch.bind(globalThis),this.ngZone=(0,a.inject)(a.NgZone)}handle(e){return new T.Observable(r=>{const s=new AbortController;return this.doRequest(e,s.signal,r).then(Q,i=>r.error(new x({error:i}))),()=>s.abort()})}doRequest(e,r,s){var i=this;return(0,D.Z)(function*(){const o=i.createRequestInit(e);let d;try{const E=i.fetchImpl(e.urlWithParams,{signal:r,...o});(function Fe(n){n.then(Q,Q)})(E),s.next({type:b.Sent}),d=yield E}catch(E){return void s.error(new x({error:E,status:E.status??0,statusText:E.statusText,url:e.urlWithParams,headers:E.headers}))}const c=new f(d.headers),p=d.statusText,v=pe(d)??e.urlWithParams;let h=d.status,y=null;if(e.reportProgress&&s.next(new A({headers:c,status:h,statusText:p,url:v})),d.body){const E=d.headers.get("content-length"),l=[],u=d.body.getReader();let K,m,P=0;const L=Zone.current;yield i.ngZone.runOutsideAngular((0,D.Z)(function*(){for(;;){const{done:U,value:ie}=yield u.read();if(U)break;l.push(ie),P+=ie.length,e.reportProgress&&(m="text"===e.responseType?(m??"")+(K??=new TextDecoder).decode(ie,{stream:!0}):void 0,L.run(()=>s.next({type:b.DownloadProgress,total:E?+E:void 0,loaded:P,partialText:m})))}}));const oe=i.concatChunks(l,P);try{y=i.parseBody(e,oe)}catch(U){return void s.error(new x({error:U,headers:new f(d.headers),status:d.status,statusText:d.statusText,url:pe(d)??e.urlWithParams}))}}0===h&&(h=y?200:0),h>=200&&h<300?(s.next(new _({body:y,headers:c,status:h,statusText:p,url:v})),s.complete()):s.error(new x({error:y,headers:c,status:h,statusText:p,url:v}))})()}parseBody(e,r){switch(e.responseType){case"json":const s=(new TextDecoder).decode(r).replace(He,"");return""===s?null:JSON.parse(s);case"text":return(new TextDecoder).decode(r);case"blob":return new Blob([r]);case"arraybuffer":return r.buffer}}createRequestInit(e){const r={},s=e.withCredentials?"include":void 0;if(e.headers.forEach((i,o)=>r[i]=o.join(",")),r.Accept??="application/json, text/plain, */*",!r["Content-Type"]){const i=e.detectContentTypeHeader();null!==i&&(r["Content-Type"]=i)}return{body:e.serializeBody(),method:e.method,headers:r,credentials:s}}concatChunks(e,r){const s=new Uint8Array(r);let i=0;for(const o of e)s.set(o,i),i+=o.length;return s}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();class Ae{}function Q(){}function fe(n,t){return t(n)}function Le(n,t){return(e,r)=>t.intercept(e,{handle:s=>n(s,r)})}const q=new a.InjectionToken(""),F=new a.InjectionToken(""),ye=new a.InjectionToken("");function Be(){let n=null;return(t,e)=>{null===n&&(n=((0,a.inject)(q,{optional:!0})??[]).reduceRight(Le,fe));const r=(0,a.inject)(a.\u0275InitialRenderPendingTasks),s=r.add();return n(t,e).pipe((0,g.finalize)(()=>r.remove(s)))}}let ee,z=(()=>{class n extends w{constructor(e,r){super(),this.backend=e,this.injector=r,this.chain=null,this.pendingTasks=(0,a.inject)(a.\u0275InitialRenderPendingTasks)}handle(e){if(null===this.chain){const s=Array.from(new Set([...this.injector.get(F),...this.injector.get(ye,[])]));this.chain=s.reduceRight((i,o)=>function Ue(n,t,e){return(r,s)=>e.runInContext(()=>t(r,i=>n(i,s)))}(i,o,this.injector),fe)}const r=this.pendingTasks.add();return this.chain(e,s=>this.backend.handle(s)).pipe((0,g.finalize)(()=>this.pendingTasks.remove(r)))}}return n.\u0275fac=function(e){return new(e||n)(a.\u0275\u0275inject(C),a.\u0275\u0275inject(a.EnvironmentInjector))},n.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})(),Xe=0;class me{}function $e(){return"object"==typeof window?window:{}}let te=(()=>{class n{constructor(e,r){this.callbackMap=e,this.document=r,this.resolvedPromise=Promise.resolve()}nextCallback(){return"ng_jsonp_callback_"+Xe++}handle(e){if("JSONP"!==e.method)throw new Error("JSONP requests must use JSONP request method.");if("json"!==e.responseType)throw new Error("JSONP requests must use Json response type.");if(e.headers.keys().length>0)throw new Error("JSONP requests do not support headers.");return new T.Observable(r=>{const s=this.nextCallback(),i=e.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/,`=${s}$1`),o=this.document.createElement("script");o.src=i;let d=null,c=!1;this.callbackMap[s]=y=>{delete this.callbackMap[s],d=y,c=!0};const p=()=>{o.parentNode&&o.parentNode.removeChild(o),delete this.callbackMap[s]};return o.addEventListener("load",y=>{this.resolvedPromise.then(()=>{p(),c?(r.next(new _({body:d,status:200,statusText:"OK",url:i})),r.complete()):r.error(new x({url:i,status:0,statusText:"JSONP Error",error:new Error("JSONP injected script did not invoke callback.")}))})}),o.addEventListener("error",y=>{p(),r.error(new x({error:y,status:0,statusText:"JSONP Error",url:i}))}),this.document.body.appendChild(o),r.next({type:b.Sent}),()=>{c||this.removeListeners(o),p()}})}removeListeners(e){ee||(ee=this.document.implementation.createHTMLDocument()),ee.adoptNode(e)}}return n.\u0275fac=function(e){return new(e||n)(a.\u0275\u0275inject(me),a.\u0275\u0275inject(S.DOCUMENT))},n.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();function ge(n,t){return"JSONP"===n.method?(0,a.inject)(te).handle(n):t(n)}let Ke=(()=>{class n{constructor(e){this.injector=e}intercept(e,r){return this.injector.runInContext(()=>ge(e,s=>r.handle(s)))}}return n.\u0275fac=function(e){return new(e||n)(a.\u0275\u0275inject(a.EnvironmentInjector))},n.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const Ge=/^\)\]\}',?\n/;let ne=(()=>{class n{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new a.\u0275RuntimeError(-2800,!1);const r=this.xhrFactory;return(r.\u0275loadImpl?(0,T.from)(r.\u0275loadImpl()):(0,T.of)(null)).pipe((0,g.switchMap)(()=>new T.Observable(i=>{const o=r.build();if(o.open(e.method,e.urlWithParams),e.withCredentials&&(o.withCredentials=!0),e.headers.forEach((l,u)=>o.setRequestHeader(l,u.join(","))),e.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const l=e.detectContentTypeHeader();null!==l&&o.setRequestHeader("Content-Type",l)}if(e.responseType){const l=e.responseType.toLowerCase();o.responseType="json"!==l?l:"text"}const d=e.serializeBody();let c=null;const p=()=>{if(null!==c)return c;const l=o.statusText||"OK",u=new f(o.getAllResponseHeaders()),P=function Ze(n){return"responseURL"in n&&n.responseURL?n.responseURL:/^X-Request-URL:/m.test(n.getAllResponseHeaders())?n.getResponseHeader("X-Request-URL"):null}(o)||e.url;return c=new A({headers:u,status:o.status,statusText:l,url:P}),c},v=()=>{let{headers:l,status:u,statusText:P,url:K}=p(),m=null;204!==u&&(m=typeof o.response>"u"?o.responseText:o.response),0===u&&(u=m?200:0);let L=u>=200&&u<300;if("json"===e.responseType&&"string"==typeof m){const oe=m;m=m.replace(Ge,"");try{m=""!==m?JSON.parse(m):null}catch(U){m=oe,L&&(L=!1,m={error:U,text:m})}}L?(i.next(new _({body:m,headers:l,status:u,statusText:P,url:K||void 0})),i.complete()):i.error(new x({error:m,headers:l,status:u,statusText:P,url:K||void 0}))},h=l=>{const{url:u}=p(),P=new x({error:l,status:o.status||0,statusText:o.statusText||"Unknown Error",url:u||void 0});i.error(P)};let y=!1;const se=l=>{y||(i.next(p()),y=!0);let u={type:b.DownloadProgress,loaded:l.loaded};l.lengthComputable&&(u.total=l.total),"text"===e.responseType&&o.responseText&&(u.partialText=o.responseText),i.next(u)},E=l=>{let u={type:b.UploadProgress,loaded:l.loaded};l.lengthComputable&&(u.total=l.total),i.next(u)};return o.addEventListener("load",v),o.addEventListener("error",h),o.addEventListener("timeout",h),o.addEventListener("abort",h),e.reportProgress&&(o.addEventListener("progress",se),null!==d&&o.upload&&o.upload.addEventListener("progress",E)),o.send(d),i.next({type:b.Sent}),()=>{o.removeEventListener("error",h),o.removeEventListener("abort",h),o.removeEventListener("load",v),o.removeEventListener("timeout",h),e.reportProgress&&(o.removeEventListener("progress",se),null!==d&&o.upload&&o.upload.removeEventListener("progress",E)),o.readyState!==o.DONE&&o.abort()}})))}}return n.\u0275fac=function(e){return new(e||n)(a.\u0275\u0275inject(S.XhrFactory))},n.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const V=new a.InjectionToken("XSRF_ENABLED"),Ee="XSRF-TOKEN",Te=new a.InjectionToken("XSRF_COOKIE_NAME",{providedIn:"root",factory:()=>Ee}),we="X-XSRF-TOKEN",Ce=new a.InjectionToken("XSRF_HEADER_NAME",{providedIn:"root",factory:()=>we});class W{}let be=(()=>{class n{constructor(e,r,s){this.doc=e,this.platform=r,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,S.\u0275parseCookieValue)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}return n.\u0275fac=function(e){return new(e||n)(a.\u0275\u0275inject(S.DOCUMENT),a.\u0275\u0275inject(a.PLATFORM_ID),a.\u0275\u0275inject(Te))},n.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();function ve(n,t){const e=n.url.toLowerCase();if(!(0,a.inject)(V)||"GET"===n.method||"HEAD"===n.method||e.startsWith("http://")||e.startsWith("https://"))return t(n);const r=(0,a.inject)(W).getToken(),s=(0,a.inject)(Ce);return null!=r&&!n.headers.has(s)&&(n=n.clone({headers:n.headers.set(s,r)})),t(n)}let Pe=(()=>{class n{constructor(e){this.injector=e}intercept(e,r){return this.injector.runInContext(()=>ve(e,s=>r.handle(s)))}}return n.\u0275fac=function(e){return new(e||n)(a.\u0275\u0275inject(a.EnvironmentInjector))},n.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();var I=function(n){return n[n.Interceptors=0]="Interceptors",n[n.LegacyInterceptors=1]="LegacyInterceptors",n[n.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",n[n.NoXsrfProtection=3]="NoXsrfProtection",n[n.JsonpSupport=4]="JsonpSupport",n[n.RequestsMadeViaParent=5]="RequestsMadeViaParent",n[n.Fetch=6]="Fetch",n}(I||{});function M(n,t){return{\u0275kind:n,\u0275providers:t}}function Re(...n){const t=[he,ne,z,{provide:w,useExisting:z},{provide:C,useExisting:ne},{provide:F,useValue:ve,multi:!0},{provide:V,useValue:!0},{provide:W,useClass:be}];for(const e of n)t.push(...e.\u0275providers);return(0,a.makeEnvironmentProviders)(t)}function Ye(n){return M(I.Interceptors,n.map(t=>({provide:F,useValue:t,multi:!0})))}const ke=new a.InjectionToken("LEGACY_INTERCEPTOR_FN");function _e(){return M(I.LegacyInterceptors,[{provide:ke,useFactory:Be},{provide:F,useExisting:ke,multi:!0}])}function re({cookieName:n,headerName:t}){const e=[];return void 0!==n&&e.push({provide:Te,useValue:n}),void 0!==t&&e.push({provide:Ce,useValue:t}),M(I.CustomXsrfConfiguration,e)}function xe(){return M(I.NoXsrfProtection,[{provide:V,useValue:!1}])}function Ie(){return M(I.JsonpSupport,[te,{provide:me,useFactory:$e},{provide:F,useValue:ge,multi:!0}])}function Qe(){return M(I.RequestsMadeViaParent,[{provide:C,useFactory:()=>(0,a.inject)(w,{skipSelf:!0,optional:!0})}])}function qe(){return M(I.Fetch,[Y,{provide:C,useExisting:Y}])}let et=(()=>{class n{static disable(){return{ngModule:n,providers:[xe().\u0275providers]}}static withOptions(e={}){return{ngModule:n,providers:re(e).\u0275providers}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=a.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=a.\u0275\u0275defineInjector({providers:[Pe,{provide:q,useExisting:Pe,multi:!0},{provide:W,useClass:be},re({cookieName:Ee,headerName:we}).\u0275providers,{provide:V,useValue:!0}]}),n})(),tt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=a.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=a.\u0275\u0275defineInjector({providers:[Re(_e())]}),n})(),nt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=a.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=a.\u0275\u0275defineInjector({providers:[Ie().\u0275providers]}),n})();const $=new a.InjectionToken(""),rt=["GET","HEAD"];function st(n,t){const{isCacheActive:e}=(0,a.inject)($);if(!e||!rt.includes(n.method))return t(n);const r=(0,a.inject)(a.TransferState),s=function it(n){const{params:t,method:e,responseType:r,url:s}=n,d=function at(n){let t=0;for(const e of n)t=Math.imul(31,t)+e.charCodeAt(0)<<0;return t+=2147483648,t.toString()}(e+"."+r+"."+s+"?"+t.keys().sort().map(c=>`${c}=${t.getAll(c)}`).join("&"));return(0,a.makeStateKey)(d)}(n),i=r.get(s,null);if(i){let o=i.body;switch(i.responseType){case"arraybuffer":o=(new TextEncoder).encode(i.body).buffer;break;case"blob":o=new Blob([i.body])}return(0,T.of)(new _({body:o,headers:new f(i.headers),status:i.status,statusText:i.statusText,url:i.url}))}return t(n).pipe((0,g.tap)(o=>{o instanceof _&&r.set(s,{body:o.body,headers:ot(o.headers),status:o.status,statusText:o.statusText,url:o.url||"",responseType:n.responseType})}))}function ot(n){const t={};for(const e of n.keys()){const r=n.getAll(e);null!==r&&(t[e]=r)}return t}function ct(){return[{provide:$,useFactory:()=>((0,a.inject)(a.\u0275ENABLED_SSR_FEATURES).add("httpcache"),{isCacheActive:!0})},{provide:ye,useValue:st,multi:!0,deps:[a.TransferState,$]},{provide:a.APP_BOOTSTRAP_LISTENER,multi:!0,useFactory:()=>{const n=(0,a.inject)(a.ApplicationRef),t=(0,a.inject)($);return()=>{n.isStable.pipe((0,g.first)(e=>e)).toPromise().then(()=>{t.isCacheActive=!1})}}}]}},5861:(Se,B,R)=>{function D(T,g,S,w,C,f,j){try{var N=T[f](j),O=N.value}catch(G){return void S(G)}N.done?g(O):Promise.resolve(O).then(w,C)}function a(T){return function(){var g=this,S=arguments;return new Promise(function(w,C){var f=T.apply(g,S);function j(O){D(f,w,C,j,N,"next",O)}function N(O){D(f,w,C,j,N,"throw",O)}j(void 0)})}}R.d(B,{Z:()=>a})}}]);