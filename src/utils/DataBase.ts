import mongoose, { connect } from 'mongoose';
import { Schema } from 'mongoose';
import { InTkuBus_interface } from '../interfaces/InTkuBus_interface';
//DataBase的程式可以到controller中作使用(查詢時)
export class DataBase{
    DB!:typeof import("mongoose");

    constructor(url:string){
        this.init(url).then(()=>{
            console.log(`suscess: connet to ${url} `);
        }).catch(()=>{
            console.log(`error: cannt connet to ${url} `);
        })
    }
    async init(url:string):Promise<void>{
        this.DB = await connect(url)
    }

    // 定義 findBusName() 方法
    static async findBusName(RouteName: string):Promise<any>{
        //連結collection
        const TkuBusModel = mongoose.model("TKUBus", new Schema<InTkuBus_interface>);
        try{
            const Info = await TkuBusModel.findById(RouteName);
            if(!Info) return null;
            return Info;
        }catch(error){
            console.error(error);
            return null;
        }
    }

}

// 定義 findBusName() 方法

// //進行公車名稱在TKUBus中查詢
// static async findBusName(): Promise<any>{

// }
