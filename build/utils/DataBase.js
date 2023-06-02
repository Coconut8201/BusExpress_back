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
const UserModel_1 = require("../models/UserModel");
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
    //資料庫找公車
    static findBusName(str) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield TkuBus_1.TkuBusModel.findOne({ RouteName: str }).exec();
                //console.log(`你拿到了${data}`);
                return data;
            }
            catch (e) {
                //console.log(e);
                return null;
                console.log(`他媽的不要亂輸入公車`);
            }
        });
    }
    //查詢使用者帳號
    static findUser(UserNameIn, UserPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield UserModel_1.UsersModel.findOne({
                    name: UserNameIn,
                    password: UserPassword,
                }).exec();
                console.log(`你拿到了使用者資料(DB)${data}`);
                return data;
            }
            catch (e) {
                console.log(`DB findUser Error: ${e}`);
                //console.log(`他媽的不要亂輸入使用者`);
            }
        });
    }
    //創建新的使用者資料庫項目
    static CreateNewUser(nameIn, passwordIn) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`DB: nameIn = ${nameIn}, passwordIn=${passwordIn}`);
            try {
                const user = new UserModel_1.UsersModel({
                    name: nameIn,
                    password: passwordIn,
                });
                yield user.save();
                return user;
            }
            catch (_a) {
                /** 如果沒輸入帳號或是密碼就會大爆錯 */
                console.log(`DB 創建帳號失敗`);
                return null; //創建失敗就會回傳null
            }
        });
    }
}
exports.DataBase = DataBase;
