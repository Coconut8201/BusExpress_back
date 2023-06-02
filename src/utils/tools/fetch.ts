import axios from "axios";
export async function getBusEstTime(api: string) {
    let config = {
        method: 'get',
        url: api,
        // headers: {
        //     Authorization: 'Basic ' + btoa(username + ':' + password)
        // },
    }
    let res = await axios(config)
    console.log(res.status);
}



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

