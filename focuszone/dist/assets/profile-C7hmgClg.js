import{j as e,g as b,a6 as y,c as f,r as a,a7 as k,u as j}from"./vendor-react-C0XjSBZJ.js";import{L as _,A as p,b as g,d as N,e as w,f as v,u as c,a as z,C as A}from"./cafelist-DlAPaJ5v.js";import{C as x,a as o,b as d,c as h,d as m,B as $,F as L}from"./home-gjXzndUV.js";import{a as F}from"./vendor-axios-xsH4HHeE.js";const E=({theme:n,content:s,size:r})=>e.jsxs("a",{href:"mailto:"+s,className:"flex items-center gap-2",target:"_blank",children:[e.jsx(b,{size:r,className:`
                ${n=="dark"?"text-zinc-900":"text-white "} 
                mt-1
                `}),e.jsx("span",{className:`
                ${n=="dark"?"text-zinc-900":"text-white "} 
                text-[${r}px]
                `,children:s})]}),D=({theme:n,content:s,size:r})=>e.jsxs("a",{href:"tel:"+(s==null?void 0:s.replace(/\s+/g,"")),className:"flex items-center gap-2",target:"_blank",children:[e.jsx(y,{size:r,className:`
                    ${n=="dark"?"text-zinc-900":"text-white "}
                    mt-1 
                `}),e.jsx("span",{className:`
                    ${n=="dark"?"text-zinc-900":"text-white "} 
                    text-[${r}px]
                `,children:s})]});function P({email:n,adress:s,phone:r}){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:`\r
                h-full w-full\r
                flex\r
                flex-col gap-2\r
            `,children:[e.jsx("h4",{children:"Контактная информация"}),e.jsx(E,{size:28,theme:"dark",content:n}),e.jsx(_,{size:28,theme:"dark",content:s}),e.jsx(D,{size:28,theme:"dark",content:r})]})})}function M({name:n,surname:s,login:r}){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:`\r
                flex\r
                flex-col gap-2\r
                w-full\r
            `,children:[e.jsx(p,{size:"w-[160px] h-[160px]",url:"user"}),e.jsxs("div",{className:`\r
                    h-full\r
                    flex flex-col\r
                `,children:[e.jsx("h4",{children:n+" "+s}),e.jsx("h4",{children:r})]})]})})}const u=f(n=>({achievements:[],setAchievements:s=>{n({achievements:s})}})),T=({url:n,title:s,description:r})=>e.jsx(e.Fragment,{children:e.jsx(x,{children:e.jsxs(g,{className:`\r
                       flex\r
                       w-full h-full\r
                       bg-zinc-900\r
                   `,children:[e.jsx(N,{className:`\r
                           w-full\r
                           text-center text-[18px] text-white\r
                           font-bold\r
                       `,children:s}),e.jsx(w,{className:`\r
                           w-full h-full\r
                       `,children:e.jsx("img",{src:n,alt:"#",className:`\r
                                h-full\r
                                object-cover object-center\r
                                rounded-xl\r
                           `})}),e.jsx(v,{className:"text-center text-white",children:r})]})})}),S=()=>{const n=c(l=>l.users),s=u(l=>l.setAchievements),r=u(l=>l.achievements);if(!n)return null;const{data:t}=z({url:`http://localhost:4000/achievement/get_achievement_user_id/${n[0].id}`,method:"get",queryKey:`achievement_${n[0].id}`});return a.useEffect(()=>{t&&s(t)}),e.jsx(e.Fragment,{children:e.jsxs("div",{className:`\r
                   w-full\r
                   flex\r
                   flex-col gap-4\r
               `,children:[e.jsx("h3",{children:"Достижения и медали"}),e.jsxs(o,{className:`\r
                       w-full h-full\r
                       flex\r
                       flex-col\r
                   `,children:[e.jsx(d,{className:`\r
                           flex\r
\r
                           sm:w-[400px] sm:h-[500px]\r
                       `,children:r.map((l,C)=>e.jsx(T,{url:l.url,title:l.title,description:l.description},C))}),e.jsx(h,{className:`\r
                        hidden\r
\r
                        sm:flex\r
                    `}),e.jsx(m,{className:`\r
                        hidden\r
\r
                        sm:flex\r
                    `})]})]})})},i=f(n=>({discounts:[],setDiscounts:s=>{n({discounts:[...s]})}})),U=()=>{const n=i(s=>s.discounts);return e.jsx(e.Fragment,{children:e.jsxs(o,{className:`\r
                    w-full h-full\r
                    flex\r
                    flex-col\r
                `,children:[e.jsx(d,{className:`\r
                        flex\r
                        w-[400px]\r
                     `,children:n==null?void 0:n.map((s,r)=>e.jsx(x,{children:e.jsxs(g,{className:`\r
                                   flex\r
                                   w-full h-full\r
                                   bg-zinc-900\r
                                `,children:[e.jsxs(N,{className:`\r
                                       flex\r
                                       gap-4\r
                                       w-full h-[32px]\r
                                       text-center text-[18px] text-white\r
                                       font-bold\r
                                    `,children:[e.jsx(p,{url:s.logo,size:"20px"}),e.jsx("h4",{children:s.title})]}),e.jsx(w,{className:`\r
                                       w-full h-full\r
                                    `,children:e.jsx(k,{value:s.url,className:`\r
                                            w-full h-full\r
                                            p-2\r
                                            bg-white\r
                                        `})}),e.jsx(v,{className:`\r
                                        text-center text-white\r
                                        justify-center\r
                                    `,children:s.description})]})},s.id||r))}),e.jsx(h,{className:`\r
                        hidden\r
\r
                        sm:flex\r
                    `}),e.jsx(m,{className:`\r
                        hidden\r
\r
                        sm:flex\r
                    `})]})})},O=()=>{const n=c(l=>l.users),s=i(l=>l.setDiscounts),r=i(l=>l.discounts),{mutate:t}=j({mutationFn:async()=>{try{if(n){const l=await F.get(`http://localhost:4000/discounts/get_discount_user_id/${n[0].id}`);s(l.data)}}catch(l){throw l}}});return a.useEffect(()=>{t()},[]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:`\r
                    w-full\r
                    flex\r
                    flex-col gap-4\r
                `,children:[e.jsx("h3",{children:"Скидки на покупку"}),r?e.jsx(e.Fragment,{children:e.jsx(U,{})}):e.jsx(e.Fragment,{children:e.jsx("p",{children:"У вас пока нет скидочных купонов"})})]})})},R=({favoritePlaces:n})=>e.jsxs(o,{className:`\r
                    w-full h-full\r
                    flex\r
                    flex-col\r
                `,children:[e.jsx(d,{className:`\r
                        flex\r
                     `,children:n==null?void 0:n.map((s,r)=>e.jsx(x,{children:e.jsx(A,{id:s.id,theme:"dark",title:s.title,adress:s.address,imageUrl:s.imageUrl,favourites:s.favourites,createdAt:s.createdAt,rating:s.rating,locationLat:s.locationLat,locationLng:s.locationLng})},s.id||r))}),e.jsx(h,{className:`\r
                        hidden\r
\r
                        sm:flex\r
                    `}),e.jsx(m,{className:`\r
                        hidden\r
\r
                        sm:flex\r
                    `})]}),B=()=>{const[n,s]=a.useState([]),{mutate:r}=j({mutationFn:async()=>{try{const t=await F.get("http://localhost:4000/places/places_filter/favorites/1/5");s([...t.data])}catch(t){throw t}}});return a.useEffect(()=>{r()},[]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:`
                    w-full 
                    flex
                    flex-col gap-4
                    
                    ${n.length==0?"h-[500px]":"h-full"}
                `,children:[e.jsx("h3",{children:"Лучшие места"}),n.length>0?e.jsx(e.Fragment,{children:e.jsx(R,{favoritePlaces:n})}):e.jsx(e.Fragment,{children:e.jsx("h4",{className:`\r
                                flex\r
                                justify-center items-center\r
                                h-full\r
                               text-zinc-900\r
                            `,children:"У вас пока нет избранных мест"})})]})})};function H(){const{users:n,isError:s,isPending:r}=c(),[t,l]=a.useState(null);return a.useEffect(()=>{n&&n.length>0&&l(n[0])},[n]),r||s||(n==null?void 0:n.length)===0?null:e.jsx(e.Fragment,{children:t&&t!==null&&e.jsx("div",{className:`\r
                      flex\r
                      flex-col justify-center\r
                      w-full\r
                      p-4\r
                      mt-[110px]\r
\r
                      sm:w-8/10\r
                   `,children:e.jsx("div",{className:`\r
                          w-full\r
                          flex\r
                          flex-col\r
                          justify-center gap-8\r
                          my-[4%]\r
                      `,children:e.jsxs("div",{className:`\r
                        flex\r
                        flex-col\r
\r
                        lg:flex-row lg:gap-20\r
                      `,children:[e.jsxs("div",{className:`\r
                                flex\r
                                flex-col justify-start gap-2\r
                          `,children:[e.jsx(M,{name:t.name,surname:t.surname,login:t.login}),e.jsx(P,{email:t.email,adress:t.adress,phone:t.phone,description:t.description})]}),e.jsxs("div",{className:`\r
                                flex\r
                                flex-col gap-4\r
                                w-full\r
                                mt-[100px]\r
                              `,children:[e.jsx(S,{}),e.jsx(O,{}),e.jsx(B,{})]})]})})})})}function q(){const n=c(s=>s.users);return e.jsxs("section",{className:`\r
            relative z-50\r
            w-full\r
            flex\r
            flex-col items-center\r
        `,children:[(n==null?void 0:n.length)!==0&&e.jsxs(e.Fragment,{children:[e.jsx("img",{src:$,alt:"bg",className:`\r
                        absolute top-[-20px]\r
                        w-screen h-[260px]\r
                        object-cover\r
                    `}),e.jsx("span",{className:`\r
                        absolute top-[-20px]\r
                        w-screen h-[260px]\r
                        bg-black\r
                        fv opacity-60\r
                     `})]}),(n==null?void 0:n.length)!==0?e.jsx(H,{}):e.jsx(L,{})]})}const J=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"}));export{E as L,D as a,J as p};
