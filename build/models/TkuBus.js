"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TkuBusModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
//ID: {type:String,required:true},
const BusTCPSchema = new mongoose_2.Schema({
    RouteUID: { type: String, require: true },
    RouteID: { type: String, require: true },
    RouteName: { type: String, require: true },
});
/*這邊綁定了 TKUBus_DB 的 Schema (檔案結構和屬性)，如果今天要
在TKUBus中新建一個項目的話可以用TKUBus_DB來鍵*/
//export const TKUBus_DB = mongoose.model("TKUBus_DB", BusTCPSchema);
exports.TkuBusModel = mongoose_1.default.model("tkubusdbs", BusTCPSchema);
