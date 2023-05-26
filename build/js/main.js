"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { DataBase } from "../utils/DataBase";
const DataBase_1 = require("../utils/DataBase");
//製作搜索功能
let SearchBusName;
//獲得數入的值
var Search = document.getElementById("EnterBusName");
//偵測是否有提交"送出"按鈕
var submitButton = document.getElementById("submit");
//如果偵測到事件:
submitButton.addEventListener('click', function (event) {
    console.log("you click subit button");
    event.preventDefault(); //防止表單被自動繳交
    SearchBusName = Search.value;
    let aa = DataBase_1.DataBase.findBusName(SearchBusName);
    console.log(`aa = ${aa}`);
    //這邊已經能夠送出公車名稱了，我現在要做的是
    //查詢BusTCPDB中的collection TkuBus 中是否有這輛公車 
});
