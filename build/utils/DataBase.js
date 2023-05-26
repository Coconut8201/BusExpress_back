"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const mongoose_1 = __importStar(require("mongoose"));
const mongoose_2 = require("mongoose");
//DataBase的程式可以到controller中作使用(查詢時)
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
    // 定義 findBusName() 方法
    static findBusName(RouteName) {
        return __awaiter(this, void 0, void 0, function* () {
            //連結collection
            const TkuBusModel = mongoose_1.default.model("TKUBus", new mongoose_2.Schema);
            try {
                const Info = yield TkuBusModel.findById(RouteName);
                if (!Info)
                    return null;
                return Info;
            }
            catch (error) {
                console.error(error);
                return null;
            }
        });
    }
}
exports.DataBase = DataBase;
// 定義 findBusName() 方法
// //進行公車名稱在TKUBus中查詢
// static async findBusName(): Promise<any>{
// }
