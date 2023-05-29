import mongoose from "mongoose";
import { Schema } from "mongoose";
import { InTkuBus_interface } from '../interfaces/InTkuBus_interface';
//ID: {type:String,required:true},
const BusTCPSchema = new Schema<InTkuBus_interface>({
    RouteUID: { type:String, require:true},
    RouteID: { type:String, require:true},
    RouteName: { type: String , require:true},
});

/*這邊綁定了 TKUBus_DB 的 Schema (檔案結構和屬性)，如果今天要
在TKUBus中新建一個項目的話可以用TKUBus_DB來鍵*/
//export const TKUBus_DB = mongoose.model("TKUBus_DB", BusTCPSchema);
export const TkuBusModel = mongoose.model("tkubusdbs", new Schema<InTkuBus_interface>);