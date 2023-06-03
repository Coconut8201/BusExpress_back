import express from 'express';
import { DataBase } from './utils/DataBase';
import { router } from './Routers';
import { InTkuBus_interface } from './interfaces/InTkuBus_interface';
import  mongoose  from 'mongoose';
import {Schema} from 'mongoose';
import { error } from 'jquery';
import { getBusEstTime } from './utils/tools/fetch';

// Connect to the db
const DB = new DataBase("mongodb://127.0.0.1:27017/BusTCPDB")

const app = express()
const port = 3000

let isFirsUserLogintRequest:boolean;
let isFirstUserCreateRequest:boolean;
let isFirst_FindBus_Request:boolean;
let isFirst_index_Request:boolean;

//http://localhost:3000/index
//app.use(express.static('public'));//设置静態文件目录
app.set("view engine", "ejs")

//主頁
app.get('/index',(req:any,res:any)=>{
    isFirsUserLogintRequest = true;/** 是否為第一次訪問\userlogin */
    isFirstUserCreateRequest = true;/** 是否為第一次訪問\userlogin\usercreate */
    isFirst_FindBus_Request = true;
    //isFirst_index_Request = true;

    res.render("index.ejs");
});

let data1: any
export let data1RouteName:string
app.get('/findBus', async (req: any, res: any) => {
    let { busName } = req.query;
    if (busName == "") {
        res.render("nullBus")
    }
    else{
        try {
            data1 = await DataBase.findBusName(<string>busName);
            if(data1 == null){
                res.render("nullBus")
            }
            else{
                data1RouteName = data1.RouteName;
                let endpoint: string = `https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/NewTaipei/${data1RouteName}?%24top=100&%24format=JSON`;
                await getBusEstTime(endpoint).then(dataBusBack=>{
                    console.log(`dataBusBack = ${dataBusBack}`)
                }).catch(error=>{
                    console.log(` app_/findBus_getBusEstTime_error: ${error}`)
                })
                console.log(`endpoint = ${endpoint}`)
                console.log(data1RouteName)
                res.render("Bus", { busName, data1 });
            }
        } catch (e) { //這邊要寫一個跳出錯誤的方法才行
            console.log(`他媽的不要亂輸入公車`);
            console.log(e);
        }
    }
    
});



/**使用者頁面--登入已有的使用者資料 */
app.get('/userlogin',async(req:any, res:any)=>{
    isFirstUserCreateRequest = true

    if (isFirsUserLogintRequest){
        let UserInfo="1"
        res.render("userlogin",{UserInfo})
        isFirsUserLogintRequest = false;
    }
    else{
        let { UserName, UserPassword } = req.query
        DataBase.findUser(<string>UserName, <string>UserPassword).then(UserInfo => {
            (UserInfo == null) ? (console.log(`查無此帳號，請確認您的帳密`), res.render("userlogin", { UserInfo })) : {}
        }).catch(error => {
            console.log(`findUser Error: ${error}`)
        });
    }
})
/**使用者頁面--建立新的使用者資料 */
app.get('/userlogin/usercreate', async (req: any, res: any) => {
    isFirsUserLogintRequest = true;

    if (isFirstUserCreateRequest){
        let user="1"
        res.render("usercreate", { user })
        isFirstUserCreateRequest = false;
    }
    else{
        let { UserName, UserPassword } = req.query
        //console.log(`UserName = ${UserName}, UserPassword = ${UserPassword}`)
        if(UserName==""||UserPassword==""){
            let user = null
            res.render("usercreate", { user })
        }
        else{
            DataBase.CreateNewUser(<string>UserName, <string>UserPassword).then(user => {
                (user != null) ? //成功
                    (console.log(`新建使用者資料成功`), res.render("usercreate", { user })) :
                    {/** 創建失敗在else */ }
            }).catch(error => {
                console.log(`CreateNewUser Error: ${error}`)
            });
        }
    }
})


for(const route of router){
    app.use(route.getRouter())
}

app.listen(port, () => {
    console.log('listening on *:' + port +"\nhttp://localhost:3000/index")
})