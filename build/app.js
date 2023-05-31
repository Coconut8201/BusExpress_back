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
// Connect to the db
const DB = new DataBase_1.DataBase("mongodb://127.0.0.1:27017/BusTCPDB");
const app = (0, express_1.default)();
const port = 3000;
let isFirsUserLogintRequest;
let isFirstUserCreateRequest;
let isFirst_FindBus_Request;
let isFirst_index_Request;
//http://localhost:3000
//app.use(express.static('public'));//设置静態文件目录
app.set("view engine", "ejs");
//主頁
app.get('/index', (req, res) => {
    isFirsUserLogintRequest = true; /** 是否為第一次訪問\userlogin */
    isFirstUserCreateRequest = true; /** 是否為第一次訪問\userlogin\usercreate */
    isFirst_FindBus_Request = true;
    //isFirst_index_Request = true;
    res.render("index.ejs");
});
let data1;
app.get('/findBus', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { busName } = req.query;
    if (busName == "") {
        res.render("nullBus");
    }
    try {
        data1 = yield DataBase_1.DataBase.findBusName(busName);
        res.render("Bus", { busName, data1 });
    }
    catch (e) { //這邊要寫一個跳出錯誤的方法才行
        console.log(`他媽的不要亂輸入公車`);
        console.log(e);
    }
}));
/**使用者頁面--登入已有的使用者資料 */
app.get('/userlogin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    isFirstUserCreateRequest = true;
    if (isFirsUserLogintRequest) {
        let UserInfo = "1";
        res.render("userlogin", { UserInfo });
        isFirsUserLogintRequest = false;
    }
    else {
        let { UserName, UserPassword } = req.query;
        DataBase_1.DataBase.findUser(UserName, UserPassword).then(UserInfo => {
            (UserInfo == null) ? (console.log(`查無此帳號，請確認您的帳密`), res.render("userlogin", { UserInfo })) : {};
        }).catch(error => {
            console.log(`findUser Error: ${error}`);
        });
    }
}));
/**使用者頁面--建立新的使用者資料 */
app.get('/userlogin/usercreate', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    isFirsUserLogintRequest = true;
    if (isFirstUserCreateRequest) {
        let user = "1";
        res.render("usercreate", { user });
        isFirstUserCreateRequest = false;
    }
    else {
        let { UserName, UserPassword } = req.query;
        //console.log(`UserName = ${UserName}, UserPassword = ${UserPassword}`)
        if (UserName == "" || UserPassword == "") {
            let user = null;
            res.render("usercreate", { user });
        }
        else {
            DataBase_1.DataBase.CreateNewUser(UserName, UserPassword).then(user => {
                (user != null) ? //成功
                    (console.log(`新建使用者資料成功`), res.render("usercreate", { user })) :
                    { /** 創建失敗在else */};
            }).catch(error => {
                console.log(`CreateNewUser Error: ${error}`);
            });
        }
    }
}));
for (const route of Routers_1.router) {
    app.use(route.getRouter());
}
app.listen(port, () => {
    console.log('listening on *:' + port + "\nhttp://localhost:3000/index");
});
