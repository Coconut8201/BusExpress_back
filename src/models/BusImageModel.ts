import { BusImageInterface } from "../interfaces/BusImageInterface";
import  mongoose , {Schema} from "mongoose";

const BusImageSchema = new Schema<BusImageInterface>({
    RouteName:{type:String, required:true},
    RouteMapImageUrl:{type:String, required:false},
})

<<<<<<< HEAD
export const BusImageModel = mongoose.model("busrouteimage",BusImageSchema)
=======
export const BusImageModel = mongoose.model("BusRouteImage",BusImageSchema)
>>>>>>> e40648e6683863ebfb8d35c7a5923e7cc368ecbe
