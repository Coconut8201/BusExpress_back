import mongoose, { connect } from 'mongoose';
import { Schema } from 'mongoose';
import { InTkuBus_interface } from '../interfaces/InTkuBus_interface';
import { data } from 'jquery';
import { TkuBusModel } from '../models/TkuBus';
import { UsersModel } from '../models/UserModel';
import { BusImageModel } from '../models/BusImageModel';


export class DataBase{
    DB!: typeof import("mongoose");
    constructor(url: string) {
        this.init(url).then(() => {
            console.log(`suscess: connet to ${url} `);
        }).catch(() => {
            console.log(`error: cannt connet to ${url} `);
        })
    }
    async init(url: string): Promise<void> {
        this.DB = await connect(url)
    }
 
    //資料庫找公車
    static async findBusName(str: string) {   
        try {
            let data = await TkuBusModel.findOne({ RouteName: str }).exec();
            //console.log(`你拿到了${data}`);
            return data
        } catch (e) {
        //console.log(e);
        return null;
        console.log(`他媽的不要亂輸入公車`);
        }

    }

    //查詢使用者帳號
    static async findUser(UserNameIn:string, UserPassword:string) {
        try {
            let data = await UsersModel.findOne({ 
                name: UserNameIn,
                password: UserPassword,
            }).exec();
            console.log(`你拿到了使用者資料(DB)${data}`);
            return data
        } catch (e) {
            console.log(`DB findUser Error: ${e}`);
            //console.log(`他媽的不要亂輸入使用者`);
        }

    }
    //創建新的使用者資料庫項目
    static async CreateNewUser(nameIn: string, passwordIn: string): Promise<any>{
        console.log(`DB: nameIn = ${nameIn}, passwordIn=${passwordIn}`)
        try{
            const user = new UsersModel({
                name: nameIn,
                password: passwordIn,
            });
            await user.save();
            return user;
        }catch{
            /** 如果沒輸入帳號或是密碼就會大爆錯 */
            console.log(`DB 創建帳號失敗`)
            return null; //創建失敗就會回傳null
        }
    }


    //查詢公車路線圖片
    static async findBusImage(RouteName:string): Promise<any>{
        //console.log(`DB findBusImage你輸入的公車名稱是${RouteName}`)
        try{
            let imageSrc = await BusImageModel.findOne({RouteName:RouteName}).exec();
            //console.log(`Database findBusImage try 你拿到了 ${imageSrc}`)
            return imageSrc?.RouteMapImageUrl
        }catch(e) {
            console.log(`Database findBusImage Error: ${e}`);
            //console.log(`他媽的不要亂輸入公車, 找不到地圖位置`);
            return null;
            
        }
    }


}
