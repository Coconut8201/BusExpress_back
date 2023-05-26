import { Contorller } from "../interfaces/Controller";
import { Request, Response } from "express";
import { DataBase } from "../utils/DataBase";
import { error } from "jquery";

export class InTkuBus extends Contorller {
    public test(){}
    public findBusInTkuNus(Request:Request, Response:Response){
        DataBase.findBusName(<string>Request.query.RouteName).then(path =>{
            console.log('在資料庫中有這裡資料');
        }).catch(error=>{
            console.log('資料庫中沒有這筆資料');
        })
    }
}

