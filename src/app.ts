import express from 'express';
import { DataBase } from './utils/DataBase';
import { router } from './Routers';
import { InTkuBus_interface } from './interfaces/InTkuBus_interface';
import  mongoose  from 'mongoose';
import {Schema} from 'mongoose';

// Connect to the db
const DB = new DataBase("mongodb://127.0.0.1:27017/BusTCPDB")

const app = express()
const port = 3000

function alert(){

}

//http://localhost:3000
//app.use(express.static('public'));//设置静態文件目录
app.set("view engine", "ejs")

app.get('/',(req:any,res:any)=>{
    res.render("index.ejs"); //渲染ejs模板
})

// async function findnewnew(str:string, res:any) {
//     try {
//         let data = await TkuBusModel.findOne({ RouteName: str }).exec();
//         console.log(`第二個${data}`);
//         return data
//     } catch (e) {
//         console.log(e);
//     }
// }
let data1:any; //回傳回來的公車資料
app.get('/findBus',async(req:any, res:any)=>{
    let { busName } = req.query;
    try {
        data1 = await DataBase.findBusName(<string>busName);
        res.render("test", { busName, data1 });
    } catch (e) {
        //res.send("無效的公車號碼");
        console.log(`他媽的不要亂輸入公車`);
        console.log(e);
    }
    
});

// app.get('/',(res:any, req:any)=>{
//     res.render("index.ejs");
// })



for(const route of router){
    app.use(route.getRouter())
}

app.listen(port, () => {
    console.log('listening on *:' + port)
})