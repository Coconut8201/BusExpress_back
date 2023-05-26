import express from 'express';
import { DataBase } from './utils/DataBase';
import { router } from './Routers';
import { InTkuBus } from './controllers/InTkuBus';

const app = express()
const port = 3000
//http://localhost:3000
//app.use(express.static('public'));//设置静態文件目录
app.set("view engine", "ejs")

app.get('/',(req:any,res:any)=>{
    res.render("index.ejs"); //渲染ejs模板
})

app.get('/findBus',(req:any, res:any)=>{
    let { busName } = req.query;
    res.render("test",{busName});
});

const DB = new DataBase('mongodb://127.0.0.1:27017/BusTCPDB');

for(const route of router){
    app.use(route.getRouter())
}


app.listen(port, () => {
    console.log('listening on *:' + port)
})