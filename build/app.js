"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DataBase_1 = require("./utils/DataBase");
const Routers_1 = require("./Routers");
const app = (0, express_1.default)();
const port = 3000;
//http://localhost:3000
//app.use(express.static('public'));//设置静態文件目录
app.set("view engine", "ejs");
app.get('/', (req, res) => {
    res.render("index.ejs"); //渲染ejs模板
});
app.get('/findBus', (req, res) => {
    let { busName } = req.query;
    res.render("test", { busName });
});
const DB = new DataBase_1.DataBase('mongodb://127.0.0.1:27017/BusTCPDB');
for (const route of Routers_1.router) {
    app.use(route.getRouter());
}
app.listen(port, () => {
    console.log('listening on *:' + port);
});
