import{c as L,j as e,$ as v,a0 as N,a1 as g,r as x,a2 as W,z as T,u as F,a3 as k,a4 as S,a5 as M}from"./vendor-react-CUfAIKzV.js";import{L as h,l as w}from"./vendor-leaflet-B36_YpXq.js";import{a as U}from"./vendor-axios-xsH4HHeE.js";import{B as m,u as z}from"./cafelist-BHm0wkNr.js";import{d as C}from"./vendor-other-o6KZ8C4k.js";const a=L((n,s)=>({points:[],userLocations:null,carWaypoints:!0,walkWaypoints:!1,startPath:!1,time:0,length:"0",speed:"0",titlePlaces:[],flyToUser:!1,fitBounds:!1,urlScreen:"",setCarWaypoints:t=>{n({carWaypoints:t})},setWalkWaypoints:t=>{n({walkWaypoints:t})},setStartPath:t=>{n({startPath:t})},setPoints:t=>{const r=s().points;n({points:[...r,t]})},setFullPoints:t=>{n({points:t})},setTitlePlaces:t=>{const r=s().titlePlaces;n({titlePlaces:[...r,t]})},deletePoints:(t,r)=>{const c=s().points.filter(i=>i!==t);n({points:c}),r.stopPropagation()},setUserLocation:t=>{n({userLocations:t})},setTime:t=>{n({time:t})},setLength:t=>{n({length:t})},setSpeed:t=>{n({speed:t})},setFlyToUser:t=>{n({flyToUser:t})},setFitBounds:t=>{n({fitBounds:t})},setUrlScreen:t=>{n({urlScreen:t})}})),B="/assets/userNavigate-J5gU7lQw.png",R=()=>{const n=a(o=>o.points),s=a(o=>o.deletePoints),t=a(o=>o.userLocations),r=h.icon({iconUrl:B,iconSize:[32,32],iconAnchor:[16,32],popupAnchor:[0,-32]});return e.jsxs(e.Fragment,{children:[n.map((o,c)=>e.jsx(v,{position:o,children:e.jsx(N,{children:e.jsx("span",{className:"cursor-pointer",onClick:i=>s(o,i),children:"Удалить"})})},c)),t&&e.jsx(v,{position:t,icon:r,children:e.jsx(N,{children:e.jsx("span",{className:"cursor-pointer",children:"Вы здесь"})})})]})},E=({waypoints:n})=>{const s=g(),t=a(o=>o.setTime),r=a(o=>o.setLength);return x.useEffect(()=>{if(!s||!n||n.length<2)return;const o=n.map(i=>Array.isArray(i)?h.latLng(i[0],i[1]):h.latLng(i.lat,i.lng)),c=h.Routing.control({waypoints:o,lineOptions:{styles:[{color:"green",opacity:.6,weight:5}],extendToWaypoints:!0,missingRouteTolerance:20},router:h.Routing.osrmv1({serviceUrl:"https://router.project-osrm.org/route/v1",profile:"foot"}),show:!1,addWaypoints:!1,routeWhileDragging:!1}).addTo(s);return c.on("routesfound",i=>{const u=i.routes[0];if(!u)return;const d=(u.summary.totalDistance/1e3).toFixed(2),p=Math.round(u.summary.totalTime/8);t(p),r(d)}),()=>{s.removeControl(c)}},[s,n,t,r]),null},$=({waypoints:n})=>{const s=g(),t=a(o=>o.setTime),r=a(o=>o.setLength);return x.useEffect(()=>{if(!s||n.length<2)return;const o=w.Routing.control({waypoints:n.map(c=>w.latLng(c)),lineOptions:{styles:[{color:"blue",opacity:.6,weight:5}],extendToWaypoints:!0,missingRouteTolerance:20},router:w.Routing.osrmv1({serviceUrl:"https://router.project-osrm.org/route/v1"}),show:!1,addWaypoints:!1}).addTo(s);return o.on("routesfound",function(c){const u=(c.routes[0].summary.totalDistance/1e3).toFixed(2),d=Math.round(Number(u));t(d),r(u)}),()=>{s.removeControl(o)}},[s,n]),null},A=({waypoints:n})=>{const s=a(o=>o.carWaypoints),t=a(o=>o.walkWaypoints),r=a(o=>o.startPath);return e.jsxs(e.Fragment,{children:[s&&r&&e.jsx($,{waypoints:n}),t&&r&&e.jsx(E,{waypoints:n})]})},_=()=>{const n=a(r=>r.titlePlaces),s=a(r=>r.points),t=a(r=>r.deletePoints);return e.jsx("div",{className:`\r
                    flex\r
                    flex-col gap-4\r
                    h-screen\r
                    overflow-hidden\r
                `,children:e.jsx("div",{className:`\r
                        flex-1\r
                        overflow-y-auto\r
                        rounded-md border-2 border-zinc-200\r
                    `,children:s.map((r,o)=>e.jsxs("div",{className:`\r
                                flex\r
                                flex-col\r
                                p-4\r
                            `,children:[e.jsxs("div",{className:`\r
                                    w-full\r
                                    flex\r
                                    items-center justify-between gap-4\r
                                `,children:[e.jsx("span",{children:o+1}),e.jsxs("div",{children:[e.jsx("h6",{children:"Координаты:"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("p",{className:"text-[12px]",children:r.lng.toFixed(4)}),e.jsx("p",{className:"text-[12px]",children:r.lat.toFixed(4)})]})]}),e.jsx(W,{className:"cursor-pointer",onClick:c=>t(r,c)})]}),n[o]=="Маркер"?e.jsxs("h4",{children:["Маркер ",o+1]}):e.jsx("h4",{children:n[o]}),e.jsx("span",{className:`\r
                                    h-[1px] w-full\r
                                    bg-zinc-900\r
                                    mt-2\r
                                `})]},o))})})},I=(n,s,t=20)=>h.latLng(n).distanceTo(h.latLng(s))<=t,P=({setShowInfo:n,showInfo:s})=>e.jsx("div",{className:`\r
                    flex\r
                    items-center justify-center\r
                `,children:e.jsx(m,{onClick:()=>{n(!s)},children:e.jsx(T,{className:`
                        ${s&&"rotate-180"} 
                        text-white 
                        transition-transform duration-300
                    `})})}),O=({children:n})=>{const[s,t]=x.useState(!1),r=a(l=>l.carWaypoints),o=a(l=>l.walkWaypoints),c=a(l=>l.points),i=a(l=>l.userLocations),u=a(l=>l.urlScreen),d=z(l=>l.users),p=a(l=>l.length),f=a(l=>l.time),j=a(l=>l.setFullPoints),{mutate:y}=F({mutationFn:async()=>{if(d)return await U.post("http://localhost:4000/achievement/create_achievement",{userId:d[0].id,url:u,title:`Пройден маршрут длинной ${p}`,description:`Вы прошли путь длинной ${p} км за ${f}. Продолжайте в том же духе`})}});return x.useEffect(()=>{if(!i||c.length===0)return;const l=c.filter(b=>!I(i,b,20));l.length!==c.length&&j(l),l.length==0&&y()},[i,c,r,o]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:`\r
                    w-full\r
                    flex\r
                    bg-black\r
                `,children:[e.jsxs("div",{className:`
                        ${s&&"h-[400px]"}
                        absolute z-1110  right-4 top-4
                        flex 
                        flex-col justify-between gap-4 
                        w-50  h-[116px]  max-h-full
                        bg-white
                        p-4 
                        rounded-xl 
                        transform duration-300
                    `,children:[e.jsx("h4",{children:"Список меток"}),s&&e.jsx(_,{}),e.jsx(P,{setShowInfo:t,showInfo:s})]}),n]})})},D=n=>{const s=Math.floor(n/60),t=n%60;return{hour:s,minutes:t}},H=async()=>{const n=document.getElementById("map_container");if(!n)return;const s=await C(n);if(s)return URL.createObjectURL(s)},K=()=>{const n=a(c=>c.setStartPath),s=a(c=>c.setUrlScreen),t=a(c=>c.setLength),r=a(c=>c.setTime),o=async()=>{const c=await H();c&&s(c)};return e.jsxs("div",{className:`\r
                flex\r
                flex-col gap-2\r
            `,children:[e.jsx(m,{className:`\r
                    w-full\r
                `,onClick:()=>{n(!0),o()},variant:"secondary",children:"Начать"}),e.jsx(m,{className:`\r
                    w-full\r
                `,onClick:()=>{n(!1),t("0"),r(0)},variant:"secondary",children:"Закончить"})]})},G=({hour:n,minutes:s,showInfo:t})=>{const r=a(l=>l.speed),o=a(l=>l.length),c=a(l=>l.walkWaypoints),i=a(l=>l.carWaypoints),u=a(l=>l.setFlyToUser),d=a(l=>l.setCarWaypoints),p=a(l=>l.setWalkWaypoints),f=a(l=>l.setFitBounds),j=()=>{d(!0),p(!1)},y=()=>{p(!0),d(!1)};return e.jsxs("div",{className:`
            ${t?"h-full":"h-0"} 
            flex 
            flex-col gap-2 
            transition-all duration-300
            
            lg:flex-row
        `,children:[e.jsxs("div",{className:`flex-col gap-2 ${t?"flex":"hidden"}`,children:[e.jsxs("div",{className:`\r
                        flex\r
                        items-center\r
                        bg-zinc-200\r
                        p-2\r
                        rounded-lg\r
                    `,children:[e.jsx(m,{className:`w-1/2 rounded-r-none cursor-pointer ${c?"bg-zinc-800":"bg-white text-zinc-900 hover:text-white"}`,onClick:()=>{y(),f(!0)},children:"Пеший"}),e.jsx(m,{className:`w-1/2 rounded-l-none cursor-pointer ${i?"bg-zinc-800":"bg-white text-zinc-900 hover:text-white"}`,onClick:()=>{j(),f(!0)},children:"Машина"})]}),e.jsx(m,{onClick:()=>u(!0),variant:"secondary",children:"Моё местоположение"})]}),e.jsxs("div",{className:`
                        ${t?"flex":"hidden"}
                        justify-between gap-2
                        w-full
                        border-t-2 border-zinc-900
                        
                        sm:gap-2 sm:justify-end
                    `,children:[e.jsxs("div",{className:`\r
                        flex\r
                        flex-col justify-center\r
                        bg-zinc-200\r
                        p-4\r
                        rounded-lg\r
                    `,children:[e.jsx("h5",{className:`\r
                            text-[14px]\r
\r
                            sm:text-[18px]\r
                        `,children:"Общая длина маршрута:"}),e.jsxs("h2",{className:`\r
                            text-[24px]\r
\r
                            sm:text-[32px]\r
                        `,children:[o," км"]})]}),e.jsxs("div",{className:`\r
                        flex\r
                        flex-col justify-center\r
                        bg-zinc-200\r
                        p-4\r
                        rounded-lg\r
                    `,children:[e.jsx("h5",{className:`\r
                            text-[14px]\r
\r
                            sm:text-[18px]\r
                        `,children:"Время прохождения:"}),e.jsxs("h2",{className:`\r
                            text-[24px]\r
\r
                            sm:text-[32px]\r
                        `,children:[n," ч ",s," минут"]})]}),e.jsxs("div",{className:`\r
                        flex\r
\r
                        flex-col gap-2 items-center justify-center\r
                        bg-zinc-200\r
                        p-4\r
                        rounded-lg\r
                    `,children:[e.jsx("h4",{className:`\r
                            text-[14px]\r
\r
                            sm:text-[18px]\r
                        `,children:"Скорость:"}),e.jsxs("h4",{children:[r," км/ч"]})]})]})]})},J=()=>{const[n,s]=x.useState(!1),[t,r]=x.useState(0),[o,c]=x.useState(0),i=a(u=>u.time);return x.useEffect(()=>{const{hour:u,minutes:d}=D(i);r(u),c(d)},[i]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:`\r
                absolute bottom-0 z-1100\r
                flex\r
                flex-col\r
                w-full\r
                bg-zinc-900\r
                p-4\r
                rounded-t-2xl\r
            `,children:[e.jsx(P,{setShowInfo:s,showInfo:n}),e.jsxs("div",{className:`\r
                        flex\r
                        flex-col gap-2\r
                    `,children:[e.jsxs("div",{className:`\r
                            flex\r
                            flex-col gap-2\r
                        `,children:[e.jsx("h6",{className:"text-white",children:"Запуск маршрута"}),e.jsx(K,{})]}),e.jsx(G,{hour:t,minutes:o,showInfo:n})]})]})})},Q=({children:n})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:`\r
                    relative\r
                    w-full h-screen\r
                    flex\r
                    flex-col\r
                `,children:[e.jsx(O,{children:n}),e.jsx(J,{})]})}),V=()=>{const n=a(r=>r.userLocations),s=a(r=>r.setFlyToUser),t=g();return n&&(t.flyTo(n,15),s(!1)),null},X=({positions:n})=>{const s=g(),t=a(r=>r.setFitBounds);return x.useEffect(()=>{if(n.length>0){const r=h.latLngBounds(n.map(o=>[o.lat,o.lng]));s.fitBounds(r,{padding:[50,50]}),t(!1)}},[n,s]),null},Z=()=>{const n=a(i=>i.flyToUser),s=a(i=>i.setPoints),t=a(i=>i.userLocations),r=a(i=>i.points),o=a(i=>i.setTitlePlaces),c=()=>(M({click(i){const u=i.latlng;s(u),o("Маркер")}}),null);return e.jsx(e.Fragment,{children:t&&e.jsx(Q,{children:e.jsx("div",{className:`\r
                            h-screen\r
                            w-full\r
                            flex\r
                            justify-center\r
                        `,id:"map_container",children:e.jsxs(k,{center:t,zoom:13,scrollWheelZoom:!0,style:{width:"100%",height:"100%"},children:[e.jsx(S,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e.jsx(c,{}),e.jsx(R,{}),e.jsx(A,{waypoints:[t,...r]}),n&&e.jsx(V,{}),e.jsx(X,{positions:[t,...r]}),e.jsx("span",{className:`\r
                                    absolute bottom-0 right-0 z-[1100]\r
                                    w-[80px] h-[20px]\r
                                    bg-white\r
                                `,children:t.lng}),e.jsx("span",{className:`\r
                                    absolute bottom-5 right-0 z-[1100]\r
                                    w-[80px] h-[20px]\r
                                    bg-white\r
                                `,children:t.lat})]})})})})},q=()=>{const n=a(t=>t.setUserLocation),s=a(t=>t.setSpeed);return x.useEffect(()=>{if(!navigator.geolocation){alert("Геолокация не поддерживается вашим браузером");return}const t=navigator.geolocation.watchPosition(r=>{const{latitude:o,longitude:c,speed:i}=r.coords,u=i!==null?(i*3.6).toFixed(2):"0";n({lat:o,lng:c}),s(u)},r=>{console.error("Ошибка геолокации:",r),alert("Не удалось определить местоположение")},{enableHighAccuracy:!0,maximumAge:0,timeout:5e3});return()=>{navigator.geolocation.clearWatch(t)}},[n]),null},Y=()=>{q();const n=a(s=>s.userLocations);return e.jsx(e.Fragment,{children:n&&e.jsx("section",{className:`\r
                        relative z-50\r
                        flex\r
                        flex-col items-center justify-center\r
                        w-full h-full\r
\r
                        sm:w-8/10 sm:my-10\r
                    `,children:e.jsx(Z,{})})})};function ee(){return e.jsx(e.Fragment,{children:e.jsx(Y,{})})}const ae=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"}));export{ae as p,a as u};
