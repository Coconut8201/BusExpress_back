export async function getBusEstTime(api: string) {
    try {
        const res: Response = await fetch(api, {
            method: 'GET',
            headers: new Headers({
            })
        })
        console.log(typeof res)
        try {
            let dataBusBack = res.clone().json() //res.json()
            console.log(`dataBusBack 222= ${dataBusBack}`)
            return dataBusBack
        } catch (error) {
            console.log(`fetch getBusEstTime fetch() error: ${error}`)
            return null
        }
    } catch (error) {
        console.log(`fetch getBusEstTime error: ${error}`)
        return null
    }
}