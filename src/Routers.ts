import { Route } from "./interfaces/Route";
import { InTkuBusRoute } from "./routers/InTkuBusRoute"; 

export const router:Array<Route> = [
    new InTkuBusRoute(),
]