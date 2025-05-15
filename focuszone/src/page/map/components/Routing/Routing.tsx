import RoutingCar from "@/page/map/components/Routing/components/RoutingCar.tsx";
import {RoutingProps} from "@/page/map/interface/interface.ts";
import RoutingWalk from "@/page/map/components/Routing/components/RoutingWalk.tsx";
import {useMap} from "@/page/map/store/store.ts";

export const Routing = ({ waypoints }: RoutingProps) => {
    const carWaypoints = useMap(state => state.carWaypoints)
    const walkWaypoints = useMap(state => state.walkWaypoints)

   return (
       <>
           {
               carWaypoints &&
               <RoutingCar
                   waypoints={waypoints}
               >
               </RoutingCar>
           }
           {
               walkWaypoints &&
               <RoutingWalk
                   waypoints={waypoints}
               >
               </RoutingWalk>
           }
       </>
   )
};
