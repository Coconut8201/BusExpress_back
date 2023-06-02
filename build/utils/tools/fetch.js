"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBusEstTime = void 0;
const axios_1 = __importDefault(require("axios"));
function getBusEstTime(api) {
    return __awaiter(this, void 0, void 0, function* () {
        let config = {
            method: 'get',
            url: api,
            // headers: {
            //     Authorization: 'Basic ' + btoa(username + ':' + password)
            // },
        };
        let res = yield (0, axios_1.default)(config);
        console.log(res.status);
    });
}
exports.getBusEstTime = getBusEstTime;
// export async function getBusEstTime(api: string) {
//     try {
//         const res: Response = await fetch(api)
//         console.log(typeof res)
//         try {
//             let dataBusBack = res.clone().json() //res.json()
//             console.log(`dataBusBack 222= ${dataBusBack}`)
//             return dataBusBack
//         } catch (error) {
//             console.log(`fetch getBusEstTime fetch() error: ${error}`)
//             return null
//         }
//     } catch (error) {
//         console.log(`fetch getBusEstTime error: ${error}`)
//         return null
//     }
// }
// export async function getBusEstTime(api: string) {
//     try {
//         const res: Response = await fetch(api);
//         console.log(typeof res);
//         try {
//             let dataBusBack = await res.json();
//             console.log(`dataBusBack = ${JSON.stringify(dataBusBack)}`);
//             return dataBusBack;
//         } catch (error) {
//             console.log(`fetch getBusEstTime fetch() error: ${error}`);
//             return null;
//         }
//     } catch (error) {
//         console.log(`fetch getBusEstTime error: ${error}`);
//         return null;
//     }
// }
