"use strict";
let btn = document.querySelector("#userlogin");
let userlogin = document.querySelector("#userloginDialog");
let closeDialog = document.querySelector("#close");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    userlogin === null || userlogin === void 0 ? void 0 : userlogin.open();
});
