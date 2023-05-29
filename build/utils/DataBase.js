"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBase = void 0;
const mongoose_1 = require("mongoose");
const TkuBus_1 = require("../models/TkuBus");
class DataBase {
    constructor(url) {
        this.init(url).then(() => {
            console.log(`suscess: connet to ${url} `);
        }).catch(() => {
            console.log(`error: cannt connet to ${url} `);
        });
    }
    init(url) {
        return __awaiter(this, void 0, void 0, function* () {
            this.DB = yield (0, mongoose_1.connect)(url);
        });
    }
    // static async test(){
    //     const TkuBusModel = mongoose.model("tkubusdbs", new Schema<InTkuBus_interface>);
    //     TkuBusModel.find({})
    //         .exec()
    //         .then((data) => {
    //             console.log(data);
    //         }).catch((e) => {
    //             console.log(e);
    //         })
    // }
    static findBusName(str) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield TkuBus_1.TkuBusModel.findOne({ RouteName: str }).exec();
                console.log(`你拿到了${data}`);
                return data;
            }
            catch (e) {
                //console.log(e);
                console.log(`他媽的不要亂輸入公車`);
            }
        });
    }
}
exports.DataBase = DataBase;
// 定義 findBusName() 方法
// //進行公車名稱在TKUBus中查詢
// static async findBusName(): Promise<any>{
// }
