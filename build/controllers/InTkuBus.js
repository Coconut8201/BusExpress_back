"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InTkuBus = void 0;
const Controller_1 = require("../interfaces/Controller");
const DataBase_1 = require("../utils/DataBase");
class InTkuBus extends Controller_1.Contorller {
    test() { }
    findBusInTkuNus(Request, Response) {
        DataBase_1.DataBase.findBusName(Request.query.RouteName).then(path => {
            console.log('在資料庫中有這裡資料');
        }).catch(error => {
            console.log('資料庫中沒有這筆資料');
        });
    }
}
exports.InTkuBus = InTkuBus;
