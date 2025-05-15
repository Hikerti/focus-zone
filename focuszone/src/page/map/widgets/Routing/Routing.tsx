import {RoutingProps} from "@/page/map/interface/interface.ts";
import {useMapData} from "@/page/map/store/store.ts";
import RoutingWalk from "@/page/map/entites/RoutingWalk.tsx";
import RoutingCar from "@/page/map/entites/RoutingCar.tsx";

export const Routing = ({ waypoints }: RoutingProps) => {
    const carWaypoints = useMapData(state => state.carWaypoints)
    const walkWaypoints = useMapData(state => state.walkWaypoints)
    const startPath = useMapData(state => state.startPath);

   return (
       <>
           {
               carWaypoints && startPath &&
               <RoutingCar
                   waypoints={waypoints}
               >
               </RoutingCar>
           }
           {
               walkWaypoints && startPath &&
               <RoutingWalk
                   waypoints={waypoints}
               >
               </RoutingWalk>
           }
       </>
   )
};
