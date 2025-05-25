import{r as i,j as e,H as a,as as x,aD as h}from"./vendor-react-C0XjSBZJ.js";import{a as c,b as o,e as d,d as m,f as u,o as f}from"./cafelist-DlAPaJ5v.js";import{a as j,b as p,C as N,d as w,c as v}from"./home-gjXzndUV.js";import"./vendor-other-Dgvs84rS.js";import"./vendor-leaflet-B36_YpXq.js";import"./vendor-axios-xsH4HHeE.js";import"./map-BZOZ5_80.js";const C=({likeProps:n,setLikeProps:r})=>{const[l,t]=i.useState(n);return e.jsx("button",{onClick:()=>{t(!l),r&&r(!l)},"aria-label":"like-button",children:e.jsx(a,{"data-testid":"heart-icon",className:`
                ${l?"text-red-500":"text-zinc-900"} 
                bg-white 
                mt-1
                transition 
               `})})},_=({messageData:n})=>{const{data:r}=c({url:`http://localhost:4000/user/get_user_by_id/${n==null?void 0:n.userId}`,method:"get",queryKey:`message_${n==null?void 0:n.content}`});return e.jsx(o,{className:`\r
                h-full\r
                bg-zinc-900\r
            `,children:e.jsxs(d,{children:[e.jsx(m,{className:"w-full p-0",children:e.jsxs("div",{className:`\r
                            flex\r
                            items-center gap-4\r
                        `,children:[e.jsx(x,{className:`\r
                                text-white\r
                                w-8 h-8\r
                            `}),e.jsxs("div",{children:[e.jsx("h5",{className:"text-white",children:r==null?void 0:r.name}),e.jsx("h5",{className:"text-white",children:r==null?void 0:r.surname})]})]})}),e.jsxs("div",{className:`\r
                            w-full h-full\r
                        `,children:[e.jsx("p",{className:`\r
                                text-white\r
                                h-30\r
                            `,children:n.content}),e.jsx("div",{className:`\r
                                flex\r
                                items-center justify-center\r
                                h-full w-full\r
                                text-white\r
                            `,children:"Изображения нет"})]}),e.jsx(u,{className:"hidden"})]})})},b=({cafeId:n})=>{const{data:r}=c({url:`http://localhost:4000/message/get_cafe_messages/${n}`,method:"get",queryKey:`message_cafeId_${n}`});return e.jsxs("section",{className:`
                ${(r==null?void 0:r.length)==0?"h-[500px]":"h-full"}
                relative z-20
                flex
                w-full
                px-[10px] my-10
                flex-col items-center gap-4

                md:w-full sm:px-0
            `,children:[e.jsx("div",{className:`\r
                    flex\r
                    w-full\r
                    items-start\r
                `,children:e.jsx("h2",{className:"text-zinc-900",children:"Комментарии"})}),r&&(r==null?void 0:r.length)>0?e.jsxs(j,{className:"w-full",children:[e.jsx(p,{className:`\r
                                w-full\r
                                h-[500px]\r
                                sm:w-[500px]\r
                            `,children:r==null?void 0:r.map(l=>e.jsx(N,{className:`\r
                                            h-[500px]\r
                                        `,children:e.jsx(_,{messageData:l})},l.id))}),e.jsx(w,{className:`\r
                                hidden\r
                                sm:flex\r
                            `}),e.jsx(v,{className:`\r
                                hidden\r
                                sm:flex\r
                            `})]}):e.jsx("h4",{className:`\r
                            flex\r
                            items-center justify-center\r
                            h-full\r
                        `,children:"Комментариев нет"})]})},q=()=>{const{id:n}=h(),{mutate:r}=f(),[l,t]=i.useState(!1),{data:s}=c({url:`http://localhost:4000/places/get_by_id/${n}`,method:"get",queryKey:`places_card_${n}`});return i.useEffect(()=>{s&&t(s.favourites)},[s]),i.useEffect(()=>{(s==null?void 0:s.id)!==void 0&&l!==void 0&&r({id:s==null?void 0:s.id,favourites:l})},[l]),e.jsxs("section",{className:`\r
            relative z-50\r
            w-full\r
            flex\r
            flex-col\r
            mt-10\r
            p-[10px]\r
\r
            sm:w-8/10 sm:p-0\r
        `,children:[e.jsxs("div",{className:`\r
                flex\r
                flex-col gap-8\r
\r
                sm:flex-row\r
            `,children:[e.jsx("img",{className:`\r
                        h-[400px] w-full\r
                        object-cover rounded-xl\r
\r
                        sm:h-[400px] sm:w-[300px]\r
                    `,src:s==null?void 0:s.imageUrl,alt:"#"}),e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("h2",{children:s==null?void 0:s.title}),e.jsx(C,{likeProps:l,setLikeProps:t})]}),e.jsx("h5",{children:s==null?void 0:s.address}),e.jsx("h5",{children:s==null?void 0:s.createdAt.slice(0,10)})]}),e.jsxs("div",{children:[e.jsx("h2",{children:"Описание"}),e.jsx("p",{className:"text-zinc-900",children:s==null?void 0:s.description})]})]})]}),e.jsx(b,{cafeId:Number(n)})]})};export{q as default};
