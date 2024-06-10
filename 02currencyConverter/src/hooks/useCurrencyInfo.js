import { useEffect, useState } from "react"


const useCurrencyInfo =  (currency) => {

    const [data,setData] = useState({})

    useEffect( () =>{

        async function fetchData() {
            const response = await fetch(`https://2024-03-06.currency-api.pages.dev/v1/currencies/${currency}.json`)
    
            const result = await response.json()
            setData(result[currency])
        }
        
        fetchData()

    },[currency])

    return data
    
}


export default useCurrencyInfo;