import mongoose, { connect } from 'mongoose';
import { Schema } from 'mongoose';
import { InTkuBus_interface } from '../interfaces/InTkuBus_interface';
import { data } from 'jquery';
import { TkuBusModel } from '../models/TkuBus';


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

    static async findBusName(str: string) {   
        try {
            let data = await TkuBusModel.findOne({ RouteName: str }).exec();
            console.log(`你拿到了${data}`);
        return data
    } catch (e) {
        //console.log(e);
        console.log(`他媽的不要亂輸入公車`);
    }

}
    
    // 定義 findBusName() 方法
    // static async findBusName(str: string):Promise<any>{
    //     //連結collection
    //     try {
    //         const bus = await TkuBusModel.findOne({ RouteName: str });
    //         if (bus) {
    //             console.log(bus); // 輸出找到的文檔
    //         } else {
    //             console.log('在資料庫中未找到指定的公車資訊');
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

}

// 定義 findBusName() 方法

// //進行公車名稱在TKUBus中查詢
// static async findBusName(): Promise<any>{

// }
