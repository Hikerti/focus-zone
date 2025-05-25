const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/home-IQ_C7b8U.js","assets/vendor-react-CUfAIKzV.js","assets/vendor-other-o6KZ8C4k.js","assets/vendor-leaflet-B36_YpXq.js","assets/vendor-leaflet-PJPjsG9_.css","assets/cafelist-BHm0wkNr.js","assets/vendor-axios-xsH4HHeE.js","assets/map-CV2DY_WC.js","assets/layout-D4Ogse9H.js","assets/profile-ClgjeXKu.js","assets/cafeSinglePage-BQ_bTZPy.js"])))=>i.map(i=>d[i]);
import{j as e,r as u,ae as v,af as P,ag as m,ah as b,ai as w,aj as L,ak as R}from"./vendor-react-CUfAIKzV.js";import{S,u as j}from"./cafelist-BHm0wkNr.js";import{a as x}from"./vendor-axios-xsH4HHeE.js";import{I as O}from"./vendor-other-o6KZ8C4k.js";import"./vendor-leaflet-B36_YpXq.js";import"./map-CV2DY_WC.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=i(r);fetch(r.href,n)}})();const C="modulepreload",A=function(t){return"/"+t},y={},h=function(a,i,s){let r=Promise.resolve();if(i&&i.length>0){let l=function(c){return Promise.all(c.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),g=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=l(i.map(c=>{if(c=A(c),c in y)return;y[c]=!0;const f=c.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${p}`))return;const d=document.createElement("link");if(d.rel=f?"stylesheet":C,f||(d.as="script"),d.crossOrigin="",d.href=c,g&&d.setAttribute("nonce",g),document.head.appendChild(d),f)return new Promise((_,E)=>{d.addEventListener("load",_),d.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${c}`)))})}))}function n(l){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=l,window.dispatchEvent(o),!o.defaultPrevented)throw l}return r.then(l=>{for(const o of l||[])o.status==="rejected"&&n(o.reason);return a().catch(n)})},I=({error:t,resetErrorBoundary:a})=>e.jsx("div",{className:`\r
                flex\r
                items-center justify-center\r
                min-h-screen\r
                bg-gray-100\r
                px-4\r
            `,children:e.jsxs("div",{className:`\r
                    bg-white\r
                    max-w-md\r
                    text-center\r
                    shadow-xl rounded-2xl\r
                    p-8\r
                `,children:[e.jsx("h1",{className:`\r
                    text-3xl font-bold\r
                    text-red-500\r
                     mb-4\r
                     `,children:t.name}),e.jsx("p",{className:`\r
                    text-gray-700\r
                    mb-2\r
                    `,children:"Что-то пошло не так:"}),e.jsx("pre",{className:`\r
                        text-sm text-gray-500\r
                        bg-gray-100\r
                        mb-4 p-3\r
                        rounded overflow-auto\r
                        max-h-40\r
                    `,children:t.message}),e.jsx("button",{onClick:a,className:`\r
                        bg-blue-500\r
                        text-white\r
                        font-semibold\r
                        px-6 py-2\r
                        rounded transition\r
                        hover:bg-blue-700\r
                    `,children:"Попробовать снова"})]})}),N=()=>e.jsx("div",{children:e.jsx(S,{className:"w-9/10 h-screen"})}),U=()=>{const t=j(i=>i.setUser);async function a(){var i;try{const s=await x.get("http://localhost:4000/auth/me",{withCredentials:!0});s.data.status,t(s.data.user)}catch(s){if(x.isAxiosError(s))if(((i=s.response)==null?void 0:i.status)===401)try{const r=await x.post("http://localhost:4000/auth/refresh",{},{withCredentials:!0});t(r.data.user)}catch{console.error(s)}else console.error(s)}}return a},T=u.lazy(()=>h(()=>import("./home-IQ_C7b8U.js").then(t=>t.p),__vite__mapDeps([0,1,2,3,4,5,6,7]))),z=u.lazy(()=>h(()=>import("./layout-D4Ogse9H.js"),__vite__mapDeps([8,1,2,3,4,5,6,7,0,9]))),D=u.lazy(()=>h(()=>import("./map-CV2DY_WC.js").then(t=>t.p),__vite__mapDeps([7,1,2,3,4,6,5]))),V=u.lazy(()=>h(()=>import("./profile-ClgjeXKu.js").then(t=>t.p),__vite__mapDeps([9,1,2,3,4,5,6,7,0]))),k=u.lazy(()=>h(()=>import("./cafelist-BHm0wkNr.js").then(t=>t.p),__vite__mapDeps([5,1,2,3,4,6,7]))),q=u.lazy(()=>h(()=>import("./cafeSinglePage-BQ_bTZPy.js"),__vite__mapDeps([10,1,2,3,4,5,6,7,0])));function B(){const t=j(s=>s.users),a=localStorage.getItem("login"),i=U();return u.useEffect(()=>{a=="true"&&t&&t.length==0&&i()},[]),e.jsx(e.Fragment,{children:e.jsx(v,{FallbackComponent:I,children:e.jsx(u.Suspense,{fallback:e.jsx(N,{}),children:e.jsx(P,{children:e.jsxs(m,{path:"/",element:e.jsx(z,{}),children:[e.jsx(m,{index:!0,element:e.jsx(b,{to:"home",replace:!0})}),e.jsx(m,{path:"home",element:e.jsx(T,{})}),e.jsx(m,{path:"map",element:e.jsx(D,{})}),e.jsx(m,{path:"profile",element:e.jsx(V,{})}),e.jsx(m,{path:"cafelist",element:e.jsx(k,{})}),e.jsx(m,{path:"cafelist/:id",element:e.jsx(q,{})})]})})})})})}const F=new O;w.createRoot(document.getElementById("root")).render(e.jsx(u.StrictMode,{children:e.jsx(L,{children:e.jsx(R,{client:F,children:e.jsx(B,{})})})}));
