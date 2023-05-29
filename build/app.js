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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DataBase_1 = require("./utils/DataBase");
const Routers_1 = require("./Routers");
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
// Connect to the db
const DB = new DataBase_1.DataBase("mongodb://127.0.0.1:27017/BusTCPDB");
//DataBase.test()
const TkuBusModel = mongoose_1.default.model("tkubusdb", new mongoose_2.Schema);
const app = (0, express_1.default)();
const port = 3000;
function alert() {
}
//http://localhost:3000
//app.use(express.static('public'));//设置静態文件目录
app.set("view engine", "ejs");
app.get('/', (req, res) => {
    res.render("index.ejs"); //渲染ejs模板
});
// async function findnewnew(str:string, res:any) {
//     try {
//         let data = await TkuBusModel.findOne({ RouteName: str }).exec();
//         console.log(`第二個${data}`);
//         return data
//     } catch (e) {
//         console.log(e);
//     }
// }
let data1; //回傳回來的公車資料
app.get('/findBus', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { busName } = req.query;
    try {
        data1 = yield DataBase_1.DataBase.findBusName(busName);
        res.render("test", { busName, data1 });
    }
    catch (e) {
        //res.send("無效的公車號碼");
        console.log(`他媽的不要亂輸入公車`);
        console.log(e);
    }
}));
// app.get('/',(res:any, req:any)=>{
//     res.render("index.ejs");
// })
for (const route of Routers_1.router) {
    app.use(route.getRouter());
}
app.listen(port, () => {
    console.log('listening on *:' + port);
});
