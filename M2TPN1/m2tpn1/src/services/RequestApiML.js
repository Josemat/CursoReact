import  { useEffect, useState } from 'react'

export const RequestApiML = (busqueda = "iphone") => {
    const URL = `https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}`
    const [resultado, setResultado] = useState('')

    
    useEffect(()=>{
        try {
            fetch(URL).then(res=>res.json()).then(res=> setResultado(res.results))
        } catch (error) {
            console.log(error)
        }
    },[])
  return resultado
}
