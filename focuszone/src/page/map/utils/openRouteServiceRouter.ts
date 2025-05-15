// import L from "leaflet";
//
// export class OpenRouteServiceRouter implements L.Routing.IRouter {
//     private apiKey: string;
//     private profile: string;
//
//     constructor(apiKey: string, profile = "foot-walking") {
//         this.apiKey = apiKey;
//         this.profile = profile;
//     }
//
//     route(waypoints: L.Routing.Waypoint[], callback: any, context: any) {
//         const coordinates = waypoints.map(wp => [wp.latLng.lng, wp.latLng.lat]);
//
//         fetch(`https://api.openrouteservice.org/v2/directions/${this.profile}`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json",
//                 "Authorization": this.apiKey
//             },
//             body: JSON.stringify({ coordinates })
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (!data.routes || data.routes.length === 0) {
//                     callback.call(context, new Error("No routes found"), null);
//                     return;
//                 }
//
//                 const route = data.routes[0];
//                 const coordinates = route.geometry.coordinates.map((c: number[]) => L.latLng(c[1], c[0]));
//
//                 callback.call(context, null, [{
//                     name: "Route",
//                     coordinates,
//                     instructions: [],
//                     summary: {
//                         totalDistance: route.summary.distance,
//                         totalTime: route.summary.duration,
//                     }
//                 }]);
//             })
//             .catch(err => callback.call(context, err));
//     }
// }
