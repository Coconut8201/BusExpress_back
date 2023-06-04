import { BusImageInterface } from "../interfaces/BusImageInterface";
import  mongoose , {Schema} from "mongoose";

const BusImageSchema = new Schema<BusImageInterface>({
    RouteName:{type:String, required:true},
    RouteMapImageUrl:{type:String, required:false},
})

export const BusImageModel = mongoose.model("BusRouteImage",BusImageSchema)