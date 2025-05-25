import{j as e,L as K,E as H,J as O,r as i,K as W,S as Y,N as q,Q as G,U as z,u as k,W as P,X as I,Y as J,Z as Q,_ as X}from"./vendor-react-C0XjSBZJ.js";import{B as v,c as j,u as N,T as Z,a as ee,C as se}from"./cafelist-DlAPaJ5v.js";import{a as L}from"./vendor-axios-xsH4HHeE.js";import{s as E,o as U,d}from"./vendor-other-Dgvs84rS.js";const re="/assets/bgformainpage-DWnletcE.png",te="/assets/Phone-3CkcLTsY.svg";function ne(){return e.jsx(e.Fragment,{children:e.jsx("section",{className:"w-screen",children:e.jsx("div",{style:{height:"calc(100vh - 64px)"},className:`\r
                    w-[100%]\r
                    flex\r
                    flex-col items-center justify-center gap-8\r
                `,children:e.jsxs("div",{className:`\r
                        relative\r
                        w-full h-full\r
                        flex\r
                        flex-col items-center justify-center gap-2\r
                    `,children:[e.jsx("img",{src:re,alt:"bgformainpage",className:`\r
                            absolute z-[-1]\r
                            w-full h-full\r
                            object-cover\r
                        `}),e.jsx("img",{src:te,alt:"phone",className:`\r
                            absolute z-10 bottom-[-15%] right-[10px]\r
\r
                            hidden\r
                            lg:bottom-[-20%]\r
                            sm:flex\r
                        `}),e.jsx("div",{className:`\r
                            absolute inset-0 z-0\r
                            bg-black\r
                            opacity-50\r
                        `}),e.jsxs("div",{className:`\r
                            relative z-20\r
                            w-7/10\r
                            flex\r
                            flex-col items-center justify-center gap-2\r
                        `,children:[e.jsx("h2",{className:`\r
                                text-white\r
                                text-center\r
                                text-[24px]\r
                            `,children:"Добро пожаловать на сайт,"}),e.jsx("h1",{className:`\r
                                text-white\r
                                text-center\r
                            `,children:"Focus zone"}),e.jsx("h4",{className:`\r
                                text-white\r
                                text-center\r
                            `,children:"Проходите новые маршруты и изучайте новые места"}),e.jsx(K,{to:"/map",children:e.jsx(v,{className:"cursor-pointer",children:"Перейти к использованию"})})]})]})})})})}function ae({className:r,...s}){return e.jsx(H,{"data-slot":"label",className:j("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",r),...s})}const R=O,$=i.createContext({}),x=({...r})=>e.jsx($.Provider,{value:{name:r.name},children:e.jsx(W,{...r})}),S=()=>{const r=i.useContext($),s=i.useContext(D),{getFieldState:n}=q(),l=G({name:r.name}),a=n(r.name,l);if(!r)throw new Error("useFormField should be used within <FormField>");const{id:c}=s;return{id:c,name:r.name,formItemId:`${c}-form-item`,formDescriptionId:`${c}-form-item-description`,formMessageId:`${c}-form-item-message`,...a}},D=i.createContext({});function m({className:r,...s}){const n=i.useId();return e.jsx(D.Provider,{value:{id:n},children:e.jsx("div",{"data-slot":"form-item",className:j("grid gap-2",r),...s})})}function u({className:r,...s}){const{error:n,formItemId:l}=S();return e.jsx(ae,{"data-slot":"form-label","data-error":!!n,className:j("data-[error=true]:text-destructive",r),htmlFor:l,...s})}function h({...r}){const{error:s,formItemId:n,formDescriptionId:l,formMessageId:a}=S();return e.jsx(Y,{"data-slot":"form-control",id:n,"aria-describedby":s?`${l} ${a}`:`${l}`,"aria-invalid":!!s,...r})}function f({className:r,...s}){const{error:n,formMessageId:l}=S(),a=n?String((n==null?void 0:n.message)??""):s.children;return a?e.jsx("p",{"data-slot":"form-message",id:l,className:j("text-destructive text-sm",r),...s,children:a}):null}function g({className:r,type:s,...n}){return e.jsx("input",{type:s,"data-slot":"input",className:j("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",r),...n})}const le=async r=>{try{const s=await L.post("http://localhost:4000/auth/register",r),{user:n}=s.data;return N.getState().setUser(n),s.data}catch(s){console.log(s)}},oe=/^(\+7|8)\s?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,ie=U({name:d().min(1,"Имя пользователя должно быть"),surname:d().min(1,"Фамилия пользователя должно быть"),phone:d().regex(oe,"Неверный формат телефона"),password:d().min(8,"Пароль должен состоять из минимум 8 символов"),login:d().min(1,"Логин пользователя должно быть"),email:d().email("Не верная форма email").min(1,"Почта пользователя должно быть"),description:d().max(300,"Максимум 300 символов"),adress:d()}),ce=()=>{const r=N(t=>t.setUser),s=N(t=>t.setLogin),[n,l]=i.useState(!1),a=z({resolver:E(ie),defaultValues:{name:"",surname:"",phone:"",adress:"",password:"",login:"",email:"",description:""}}),c=k({mutationFn:t=>le(t),onSuccess:t=>{a.reset(),r(t.user),s(!0)},onError:t=>{console.error("Ошибка при отправке:",t)}});function p(t){c.mutate(t)}return e.jsx(e.Fragment,{children:e.jsx("section",{className:`\r
                flex\r
                w-full\r
                flex-col gap-4 items-center justify-center\r
             `,children:e.jsx(R,{...a,children:e.jsxs("form",{onSubmit:a.handleSubmit(p),className:`\r
                        flex\r
                        w-full\r
                        flex-col gap-4\r
                        bg-zinc-900\r
                        px-4 py-4\r
                        rounded-xl\r
                     `,children:[e.jsx("h3",{className:"text-white",children:"Введите свои данные"}),e.jsxs("div",{className:`\r
                            flex\r
                            w-full\r
                            gap-4\r
                         `,children:[e.jsx(x,{control:a.control,name:"surname",render:({field:t})=>e.jsxs(m,{className:"w-1/2",children:[e.jsx(u,{className:"text-white",children:"Фамилия"}),e.jsx(h,{children:e.jsx(g,{className:"text-white",type:"text",...t,placeholder:"Иванов"})}),e.jsx(f,{})]})}),e.jsx(x,{control:a.control,name:"name",render:({field:t})=>e.jsxs(m,{className:"w-1/2",children:[e.jsx(u,{className:"text-white",children:"Имя"}),e.jsx(h,{children:e.jsx(g,{className:"text-white",type:"text",...t,placeholder:"Иван"})}),e.jsx(f,{})]})})]}),e.jsxs("div",{className:`\r
                            flex\r
                            w-full\r
                            gap-4\r
                         `,children:[e.jsx(x,{control:a.control,name:"login",render:({field:t})=>e.jsxs(m,{className:"w-1/2",children:[e.jsx(u,{className:"text-white",children:"Login"}),e.jsx(h,{children:e.jsx(g,{className:"text-white",type:"text",...t,placeholder:"Russian man"})}),e.jsx(f,{})]})}),e.jsx(x,{control:a.control,name:"email",render:({field:t})=>e.jsxs(m,{className:"w-1/2",children:[e.jsx(u,{className:"text-white",children:"Email"}),e.jsx(h,{children:e.jsx(g,{className:"text-white",type:"email",...t,placeholder:"xxx@mail.ru"})}),e.jsx(f,{})]})})]}),e.jsxs("div",{className:`\r
                         flex\r
                         w-full\r
                         gap-4\r
                         `,children:[e.jsx(x,{control:a.control,name:"password",render:({field:t})=>e.jsxs(m,{className:"w-1/2 relative",children:[e.jsx(u,{className:"text-white relative",children:"Пароль"}),e.jsx(h,{className:"relative",children:e.jsx(g,{className:"text-white",type:n?"text":"password",...t,placeholder:"12345678"})}),e.jsx(f,{}),e.jsx("span",{className:"absolute right-2 top-7",children:n?e.jsx(P,{className:"text-white",onClick:()=>l(!n)}):e.jsx(I,{className:"text-white",onClick:()=>l(!n)})})]})}),e.jsx(x,{control:a.control,name:"phone",render:({field:t})=>e.jsxs(m,{className:"w-1/2",children:[e.jsx(u,{className:"text-white",children:"Телефон"}),e.jsx(h,{children:e.jsx(g,{className:"text-white",type:"text",...t,placeholder:"+7 999 999 99 99"})}),e.jsx(f,{})]})})]}),e.jsx(x,{control:a.control,name:"adress",render:({field:t})=>e.jsxs(m,{children:[e.jsx(u,{className:"text-white",children:"Адрес"}),e.jsx(h,{children:e.jsx(g,{className:"text-white",type:"text",...t,placeholder:"г.Москва, ул. Ленина 56"})}),e.jsx(f,{})]})}),e.jsx(x,{control:a.control,name:"description",render:({field:t})=>e.jsxs(m,{children:[e.jsx(u,{className:"text-white",children:"Описание"}),e.jsx(h,{children:e.jsx(Z,{className:"text-white",...t})}),e.jsx(f,{})]})}),e.jsx(v,{variant:"secondary",type:"submit",children:"Отправить информацию"})]})})})})},de=async r=>{try{const s=await L.post("http://localhost:4000/auth/login",r,{withCredentials:!0}),{user:n}=s.data;return N.getState().setUser(n),s.data}catch(s){console.log(s)}},xe=U({password:d().min(8,"Пароль должен состоять из минимум 8 символов"),email:d().email("Не верная форма email").min(1,"Почта пользователя должно быть")}),me=()=>{const[r,s]=i.useState(!1),n=N(t=>t.setUser),l=N(t=>t.setLogin),a=z({resolver:E(xe),defaultValues:{password:"",email:""}}),c=k({mutationFn:t=>de(t),onSuccess:t=>{a.reset(),n(t.user),l(!0)},onError:t=>{console.error("Ошибка при отправке:",t)}});function p(t){c.mutate(t)}return e.jsx(e.Fragment,{children:e.jsx("section",{className:`\r
                    flex\r
                    w-full\r
                    flex-col gap-4 items-center justify-center\r
                `,children:e.jsx(R,{...a,children:e.jsxs("form",{onSubmit:a.handleSubmit(p),className:`\r
                            flex\r
                            w-full\r
                            flex-col gap-4\r
                            bg-zinc-900\r
                            px-4 py-5\r
                            rounded-xl\r
                        `,children:[e.jsx("h3",{className:"text-white",children:"Введите свои данные"}),e.jsx(x,{control:a.control,name:"email",render:({field:t})=>e.jsxs(m,{children:[e.jsx(u,{className:"text-white",children:"Email"}),e.jsx(h,{children:e.jsx(g,{className:"text-white",type:"email",...t,placeholder:"xxx@mail.ru"})}),e.jsx(f,{})]})}),e.jsx(x,{control:a.control,name:"password",render:({field:t})=>e.jsxs(m,{className:"relative",children:[e.jsx(u,{className:"text-white",children:"Пароль"}),e.jsx(h,{children:e.jsx(g,{className:"text-white",type:r?"text":"password",...t,placeholder:"12345678"})}),e.jsx("span",{className:"absolute right-2 top-7",children:r?e.jsx(P,{className:"text-white",onClick:()=>s(!r)}):e.jsx(I,{className:"text-white",onClick:()=>s(!r)})}),e.jsx(f,{})]})}),e.jsx(v,{variant:"secondary",type:"submit",className:"hover:bg-blue-400 hover:text-white",children:"Отправить информацию"})]})})})})},ue=()=>{const[r,s]=i.useState(!1);return e.jsxs("div",{className:`\r
                w-full\r
                flex\r
                flex-col\r
                items-center justify-center\r
                px-[10px]\r
\r
                sm:w-8/10\r
            `,children:[e.jsxs("div",{className:`\r
                    flex\r
                    gap-4\r
                    mt-8\r
                `,children:[e.jsx("h2",{className:`\r
                        cursor-pointer\r
                        border-b-2 border-white\r
                        transition\r
                        hover:border-zinc-900\r
                        `,onClick:()=>s(!r),children:"Регистрация"}),e.jsx("span",{className:`\r
                        w-[2px]\r
                        bg-zinc-800\r
                    `}),e.jsx("h2",{className:`\r
                        cursor-pointer\r
                        border-b-2 border-white\r
                        transition\r
                        hover:border-zinc-900\r
                    `,onClick:()=>s(!r),children:"Вход"})]}),e.jsx("div",{className:`\r
                    w-full\r
                    my-8\r
                `,children:r?e.jsx(ce,{}):e.jsx(me,{})})]})},M=i.createContext(null);function y(){const r=i.useContext(M);if(!r)throw new Error("useCarousel must be used within a <Carousel />");return r}function he({orientation:r="horizontal",opts:s,setApi:n,plugins:l,className:a,children:c,...p}){const[t,o]=J({...s,axis:r==="horizontal"?"x":"y"},l),[_,T]=i.useState(!1),[V,A]=i.useState(!1),b=i.useCallback(w=>{w&&(T(w.canScrollPrev()),A(w.canScrollNext()))},[]),C=i.useCallback(()=>{o==null||o.scrollPrev()},[o]),F=i.useCallback(()=>{o==null||o.scrollNext()},[o]),B=i.useCallback(w=>{w.key==="ArrowLeft"?(w.preventDefault(),C()):w.key==="ArrowRight"&&(w.preventDefault(),F())},[C,F]);return i.useEffect(()=>{!o||!n||n(o)},[o,n]),i.useEffect(()=>{if(o)return b(o),o.on("reInit",b),o.on("select",b),()=>{o==null||o.off("select",b)}},[o,b]),e.jsx(M.Provider,{value:{carouselRef:t,api:o,opts:s,orientation:r||((s==null?void 0:s.axis)==="y"?"vertical":"horizontal"),scrollPrev:C,scrollNext:F,canScrollPrev:_,canScrollNext:V},children:e.jsx("div",{onKeyDownCapture:B,className:j("relative",a),role:"region","aria-roledescription":"carousel","data-slot":"carousel",...p,children:c})})}function fe({className:r,...s}){const{carouselRef:n,orientation:l}=y();return e.jsx("div",{ref:n,className:"overflow-hidden","data-slot":"carousel-content",children:e.jsx("div",{className:j("flex",l==="horizontal"?"-ml-4":"-mt-4 flex-col",r),...s})})}function je({className:r,...s}){const{orientation:n}=y();return e.jsx("div",{role:"group","aria-roledescription":"slide","data-slot":"carousel-item",className:j("min-w-0 shrink-0 grow-0 basis-full",n==="horizontal"?"pl-4":"pt-4",r),...s})}function pe({className:r,variant:s="outline",size:n="icon",...l}){const{orientation:a,scrollPrev:c,canScrollPrev:p}=y();return e.jsxs(v,{"data-slot":"carousel-previous",variant:s,size:n,className:j("absolute size-8 rounded-full",a==="horizontal"?"top-1/2 -left-12 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",r),disabled:!p,onClick:c,...l,children:[e.jsx(Q,{}),e.jsx("span",{className:"sr-only",children:"Previous slide"})]})}function ge({className:r,variant:s="outline",size:n="icon",...l}){const{orientation:a,scrollNext:c,canScrollNext:p}=y();return e.jsxs(v,{"data-slot":"carousel-next",variant:s,size:n,className:j("absolute size-8 rounded-full",a==="horizontal"?"top-1/2 -right-12 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",r),disabled:!p,onClick:c,...l,children:[e.jsx(X,{}),e.jsx("span",{className:"sr-only",children:"Next slide"})]})}function we(){const{data:r}=ee({url:"http://localhost:4000/places/places_filter/estimation/1/6",method:"get",queryKey:"cafe_card"});return e.jsx(e.Fragment,{children:e.jsxs("section",{className:`\r
                relative z-20\r
                flex\r
                w-full\r
                px-[10px] my-10\r
                flex-col items-center justify-center gap-4\r
\r
                md:w-8/10 sm:px-0\r
            `,children:[e.jsx("div",{className:`\r
                    flex\r
                    w-full\r
                    items-start\r
                `,children:e.jsx("h2",{className:"text-zinc-900",children:"Топ лучших мест"})}),e.jsxs(he,{className:"w-full",children:[e.jsx(fe,{className:`\r
                    w-full\r
                    sm:w-[600px]\r
                `,children:r==null?void 0:r.map(s=>e.jsx(je,{children:e.jsx(se,{id:s.id,style:"w-full",title:s.title,adress:s.address,imageUrl:s.imageUrl,description:s.description,favourites:s.favourites,createdAt:s.createdAt,rating:s.rating,locationLat:s.locationLat,locationLng:s.locationLng,showArrow:!1},s.id)},s.id))}),e.jsx(pe,{className:`\r
                    hidden\r
                    sm:flex\r
                `}),e.jsx(ge,{className:`\r
                    hidden\r
                    sm:flex\r
                `})]})]})})}const Ne=()=>{const r=localStorage.getItem("login"),s=N(n=>n.users);return e.jsxs(e.Fragment,{children:[e.jsx(ne,{}),e.jsx(we,{}),r=="false"||(s==null?void 0:s.length)==0&&e.jsx(ue,{})]})},Fe=Object.freeze(Object.defineProperty({__proto__:null,default:Ne},Symbol.toStringTag,{value:"Module"}));export{re as B,je as C,ue as F,g as I,he as a,fe as b,ge as c,pe as d,me as e,ce as f,Fe as p};
