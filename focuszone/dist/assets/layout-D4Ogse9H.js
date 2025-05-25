import{j as e,al as I,am as P,an as R,ao as U,ap as W,aq as _,ar as u,as as H,at as $,au as G,av as O,aw as q,ax as M,ay as p,a2 as x,az as J,aA as K,L as i,r as l,d as X,aB as Z,aC as Q}from"./vendor-react-CUfAIKzV.js";import{J as V,T as Y}from"./vendor-other-o6KZ8C4k.js";import{c as d,B as o,L as ee,g,h as w,i as N,j as v,k as b,l as y,u as f,A as m,b as se,d as re,m as ne,e as te,n as z,a as ae}from"./cafelist-BHm0wkNr.js";import{e as le,f as ie,I as oe}from"./home-IQ_C7b8U.js";import{L as C,a as S}from"./profile-ClgjeXKu.js";import{a as ce}from"./vendor-axios-xsH4HHeE.js";import"./vendor-leaflet-B36_YpXq.js";import"./map-CV2DY_WC.js";const de=({...s})=>{const{theme:r="system"}=V();return e.jsx(Y,{theme:r,className:"toaster group",style:{"--normal-bg":"var(--popover)","--normal-text":"var(--popover-foreground)","--normal-border":"var(--border)"},...s})};function T({delayDuration:s=0,...r}){return e.jsx(I,{"data-slot":"tooltip-provider",delayDuration:s,...r})}function xe({...s}){return e.jsx(T,{children:e.jsx(P,{"data-slot":"tooltip",...s})})}function he({...s}){return e.jsx(R,{"data-slot":"tooltip-trigger",...s})}function me({className:s,sideOffset:r=0,children:n,...t}){return e.jsx(U,{children:e.jsxs(W,{"data-slot":"tooltip-content",sideOffset:r,className:d("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",s),...t,children:[n,e.jsx(_,{className:"bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"})]})})}function je(){const s=[{icon:e.jsx(u,{size:20}),label:"Главая страница",href:"/"},{icon:e.jsx(H,{size:20}),label:"Профиль",href:"/profile"},{icon:e.jsx($,{size:20}),label:"Карта",href:"/map"},{icon:e.jsx(G,{size:20}),label:"Список кофе",href:"/cafelist"}];return e.jsx(e.Fragment,{children:e.jsx(T,{children:e.jsx("aside",{className:`\r
              hidden absolute top-0 left-0 z-100\r
              h-screen w-[52px]\r
              flex-col items-center pt-4 gap-2\r
              bg-zinc-900 text-white\r
              rounded-br-3xl shadow-lg shadow-zinc-700/50\r
\r
              sm:flex\r
              lg:gap-4 lg:w-[64px]\r
              xl:w-[72px]\r
            `,children:s.map((r,n)=>e.jsxs(xe,{children:[e.jsx(he,{asChild:!0,children:e.jsx("div",{children:e.jsx("a",{href:r.href,children:e.jsx(o,{variant:"ghost",size:"icon",className:"hover:bg-zinc-100",children:r.icon})})})}),e.jsx(me,{side:"right",children:r.label})]},n))})})})}function L({...s}){return e.jsx(O,{"data-slot":"sheet",...s})}function k({...s}){return e.jsx(q,{"data-slot":"sheet-trigger",...s})}function F({...s}){return e.jsx(p,{"data-slot":"sheet-close",...s})}function fe({...s}){return e.jsx(J,{"data-slot":"sheet-portal",...s})}function ue({className:s,...r}){return e.jsx(K,{"data-slot":"sheet-overlay",className:d("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",s),...r})}function A({className:s,children:r,side:n="right",...t}){return e.jsxs(fe,{children:[e.jsx(ue,{}),e.jsxs(M,{"data-slot":"sheet-content",className:d("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-100 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",n==="right"&&"data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",n==="left"&&"data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",n==="top"&&"data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",n==="bottom"&&"data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",s),...t,children:[r,e.jsxs(p,{className:"ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",children:[e.jsx(x,{className:"size-4"}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]})}function D({className:s,...r}){return e.jsx("div",{"data-slot":"sheet-header",className:d("flex flex-col gap-1.5 p-4",s),...r})}function j({className:s,...r}){return e.jsx("div",{"data-slot":"sheet-footer",className:d("mt-auto flex flex-col gap-2 p-4",s),...r})}const pe=({email:s,adress:r,phone:n})=>e.jsxs("div",{className:`\r
                flex\r
                mt-4\r
                flex-col gap-2\r
            `,children:[e.jsx("h3",{children:"Контактная информация"}),e.jsx(C,{size:16,theme:"dark",content:s}),e.jsx(ee,{size:16,theme:"dark",content:r}),e.jsx(S,{size:16,theme:"dark",content:n})]}),E=()=>e.jsx(e.Fragment,{children:e.jsxs(g,{children:[e.jsx(w,{asChild:!0,children:e.jsx(o,{variant:"secondary",children:"Войти"})}),e.jsxs(N,{children:[e.jsx("div",{children:e.jsx(v,{children:e.jsx(x,{})})}),e.jsx(b,{children:"Войти"}),e.jsx(y,{children:"Пожалуйста, заполните форму входа ниже."}),e.jsx(le,{})]})]})}),B=()=>e.jsxs(g,{children:[e.jsx(w,{asChild:!0,children:e.jsx(o,{variant:"secondary",children:"Зарегистрироваться"})}),e.jsxs(N,{children:[e.jsx("div",{className:`\r
                        flex\r
                        justify-end\r
                    `,children:e.jsx(v,{children:e.jsx(x,{})})}),e.jsx(b,{children:"Зарегистрироваться"}),e.jsx(y,{children:"Пожалуйста, заполните форму регистрации ниже."}),e.jsx(ie,{})]})]}),ge=()=>{const s=f(n=>n.setLogin);return async()=>{try{s(!1),await ce.post("http://localhost:4000/auth/logout",null,{withCredentials:!0}),window.location.reload()}catch(n){throw new Error("Пользователь не смог выйти: "+n)}}},we=()=>{const{users:s,isPending:r}=f(),n=ge();if(!s||s.length===0)return e.jsxs("div",{className:`\r
                    hidden\r
                    gap-4\r
\r
                    sm:flex\r
                `,children:[e.jsx(E,{}),e.jsx(B,{})]});const t=s[0];return e.jsx(e.Fragment,{children:s&&e.jsxs(e.Fragment,{children:[e.jsx(k,{asChild:!0,children:e.jsxs("div",{className:`\r
                                   h-full flex\r
                                   justify-end items-center gap-4\r
                                   cursor-pointer\r
                               `,children:[e.jsx(m,{size:"w-[32px] h-[32px]",url:t.name}),e.jsxs("div",{className:`\r
                                        hidden\r
                                        flex-col\r
\r
                                        sm:flex\r
                                   `,children:[e.jsx("p",{className:"text-white !text-[12px]",children:t.name}),e.jsxs("p",{className:"text-white !text-[12px]",children:["@",t.login]})]})]})}),e.jsxs(A,{children:[e.jsxs(D,{children:[e.jsxs("div",{className:`\r
                                    flex\r
                                    h-full\r
                                    flex-col justify-center gap-2\r
                                `,children:[e.jsxs("div",{className:`\r
                                        flex\r
                                        gap-4\r
                                    `,children:[e.jsx(m,{size:"w-[100px] h-[100px]",url:t.name}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-zinc-900",children:t.name+" "+t.surname}),e.jsxs("h4",{className:"text-zinc-900",children:["@",t.login]})]})]}),e.jsx("div",{className:`\r
                                        flex\r
                                        flex-col\r
                                    `,children:e.jsx(pe,{email:t.email,adress:t.adress,phone:t.phone})})]}),e.jsxs("div",{children:[e.jsx("h2",{className:`\r
                                    text-4xl\r
                                    mt-4`,children:"О себе"}),e.jsx("p",{children:t.description})]})]}),e.jsxs(j,{children:[e.jsx(F,{asChild:!0}),e.jsx(o,{onClick:()=>n(),children:"Выйти из аккаунта"})]})]})]})})},Ne=()=>{const s=localStorage.getItem("login"),r=f(n=>n.users);return e.jsxs(L,{children:[e.jsx(k,{asChild:!0,children:e.jsxs(o,{className:`\r
                flex\r
                w-full h-full\r
                flex-col items-center justify-center gap-1\r
                p-0 m-0\r
                cursor-pointer\r
            `,children:[e.jsx("span",{className:`\r
                    h-[2px] w-full\r
                     bg-white\r
                    rounded-full\r
                `}),e.jsx("span",{className:`\r
                    h-[2px] w-full\r
                    bg-white\r
                    rounded-full\r
                `}),e.jsx("span",{className:`\r
                    h-[2px] w-full\r
                    bg-white\r
                    rounded-full\r
                `})]})}),e.jsxs(A,{className:`\r
                    bg-zinc-900\r
                    flex\r
                `,children:[e.jsx(D,{className:"flex items-end",children:e.jsx(F,{asChild:!0,className:"flex",children:e.jsx(o,{type:"submit",className:`\r
                                w-6 h-6\r
                                p-0 m-0\r
                            `,children:e.jsx(x,{})})})}),e.jsxs("ul",{className:`\r
                        flex\r
                        flex-col items-end gap-2\r
                        pr-4\r
                        text-white text-[16px]\r
                    `,children:[e.jsx(i,{to:"/",children:e.jsx("li",{children:"Главная"})}),e.jsx(i,{to:"/profile",children:e.jsx("li",{children:"Профиль"})}),e.jsx(i,{to:"/map",children:e.jsx("li",{children:"Карта"})}),e.jsx(i,{to:"/cafelist",children:e.jsx("li",{children:"Список мест"})})]}),!s||(r==null?void 0:r.length)==0?e.jsx(j,{children:e.jsxs("div",{className:`\r
                            w-full\r
                            flex\r
                            flex-col gap-2\r
                        `,children:[e.jsx(E,{}),e.jsx(B,{})]})}):e.jsx(j,{className:"hidden"})]})]})},ve=()=>{const[s,r]=l.useState(window.innerWidth);return l.useEffect(()=>{const n=()=>{r(window.innerWidth)};return addEventListener("resize",n),n(),()=>{removeEventListener("resize",n)}}),e.jsxs("div",{className:`\r
                flex\r
                items-center justify-center gap-4\r
            `,children:[e.jsx(L,{children:e.jsx(we,{})}),e.jsx("div",{className:`\r
                    flex\r
                    w-5 h-5\r
                    justify-end\r
\r
                    sm:hidden\r
                `,children:s<640&&e.jsx(Ne,{})})]})},be=({id:s,rating:r,title:n,imageUrl:t})=>e.jsx(i,{to:`/cafelist/${s}`,target:"_blank",className:`\r
                relative top-0\r
                w-9/10\r
            `,children:e.jsxs(se,{className:"w-full",children:[e.jsx(re,{children:e.jsxs(ne,{className:`\r
                            flex\r
                            justify-between items-center\r
                        `,children:[e.jsxs("div",{className:`\r
                                flex\r
                                items-center gap-2\r
                            `,children:[e.jsx("div",{className:`\r
                                    flex\r
                                    items-center gap-2\r
                                    cursor-pointer\r
                                `,children:e.jsx(m,{url:t,size:"text-[12px] w-10 h-10"})}),e.jsx("div",{className:`\r
                                    flex\r
                                    flex-col justify-between\r
                                `,children:e.jsx("div",{className:"text-zinc-900",children:n})})]}),e.jsxs("div",{className:`\r
                            flex\r
                            flex-col items-center\r
                            `,children:[e.jsx(X,{}),e.jsx("p",{className:"text-zinc-900",children:r.length!==0?r.reduce((a,c)=>a+c,0)/r.length:"Нет оценки"})]})]})}),e.jsx(te,{className:`\r
                        w-full h-full\r
                        flex\r
                        flex-col items-center gap-4\r
                    `,children:e.jsx("img",{className:`\r
                            w-full h-[160px]\r
                            object-cover rounded-lg\r
\r
                            sm: h-[300px]\r
                        `,src:t,alt:"img"})})]})}),ye=({searchValue:s})=>{const r=z(a=>a.cards),[n,t]=l.useState(r);return l.useEffect(()=>{t(s?a=>a.filter(c=>c.title.toLowerCase().includes(s.toLowerCase())):r)},[s]),e.jsx("div",{className:`\r
                absolute top-[52px]\r
                flex\r
                flex-col gap-4 items-center\r
                w-[80vw] h-100\r
                bg-white\r
                py-4\r
                border-2 border-zinc-200\r
                overflow-y-scroll rounded-l-xl\r
\r
                sm:w-full\r
            `,children:n.length!==0?n==null?void 0:n.map(a=>e.jsx(be,{id:a.id,rating:a.rating,title:a.title,imageUrl:a.imageUrl},a.id)):e.jsx("h3",{className:"text-zinc-900",children:"Заведение с таким названием не найдено"})})};function ze(){const[s,r]=l.useState(!1),[n,t]=l.useState(""),{data:a}=ae({url:"http://localhost:4000/places/get",method:"get",queryKey:"places_search_get"}),c=z(h=>h.setCards);return l.useEffect(()=>{a&&c(a)},[a]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:`\r
              absolute top-0 right-0 z-90\r
              flex\r
              w-[100vw] h-16\r
              justify-between items-center\r
              px-4\r
              bg-zinc-900\r
          `,children:[e.jsxs("div",{className:`\r
              flex\r
              items-center gap-4\r
              w-7/10\r
\r
              sm:w-full\r
          `,children:[e.jsx(i,{to:"/",children:e.jsx(u,{className:`\r
                        text-white\r
                        flex\r
\r
                        sm:hidden\r
                    `})}),e.jsxs("div",{className:`\r
                    relative\r
                    w-full\r
                    flex\r
\r
                    lg:ml-[72px]\r
                    sm:ml-[56px] sm:w-7/10\r
                  `,children:[e.jsx(Z,{className:`\r
                        absolute left-2 top-1/2\r
                        -translate-y-1/2\r
                        text-white\r
                      `,size:20}),e.jsx(oe,{type:"text",placeholder:"Поиск",className:`\r
                        text-white\r
                        pl-10\r
                       `,onChange:h=>t(h.target.value),onFocus:()=>r(!0),onBlur:()=>{setTimeout(()=>{r(!1)},100)}}),s&&e.jsx(ye,{searchValue:n,setSearch:r})]})]}),e.jsx(ve,{})]})})}function Ce(){return e.jsx(e.Fragment,{children:e.jsxs("header",{className:`\r
                absolute inset-0\r
            `,children:[e.jsx(je,{}),e.jsx(ze,{})]})})}const Se=()=>e.jsx("footer",{className:`\r
                flex\r
                w-full\r
                items-center justify-center\r
                py-2\r
                bg-zinc-900\r
\r
                sm:h-[60px]\r
            `,children:e.jsxs("div",{className:`\r
                    flex\r
                    flex-col\r
                    w-8/10\r
                    justify-between gap-2\r
\r
                    sm:flex-row sm:items-center sm:gap-0\r
                `,children:[e.jsx("p",{className:"text-white",children:"company: Focus Zone"}),e.jsxs("div",{className:`\r
                        flex\r
                        flex-col gap-2\r
\r
                        sm:flex-row sm:gap-4\r
                    `,children:[e.jsx(C,{content:"admin2@mail.ru",theme:"light"}),e.jsx(S,{content:"+7 999 233 99 23",theme:"light"})]})]})}),Ie=()=>e.jsxs(e.Fragment,{children:[e.jsx(Ce,{}),e.jsx("main",{className:`\r
                    relative\r
                    flex\r
                    flex-col items-center\r
                    mt-[64px]\r
                `,children:e.jsx(Q,{})}),e.jsx(de,{}),e.jsx(Se,{})]});export{Ie as default};
