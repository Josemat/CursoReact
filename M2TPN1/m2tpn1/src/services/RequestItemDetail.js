import {useState, useEffect} from 'react'

const RequestItemDetail = (id='123') => {
    const URL = `https://api.mercadolibre.com/items/${id}/`
    const [resultado, setResultado] = useState('')

    
    useEffect(()=>{
        try {
            fetch(URL).then(res=>res.json()).then(res=> setResultado(res))
        } catch (error) {
            console.log(error)
        }
    },[])
  return resultado
}

export default RequestItemDetail