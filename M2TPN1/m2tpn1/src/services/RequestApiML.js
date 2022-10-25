import  { useEffect, useState } from 'react'

export const RequestApiML = (busqueda = "mouse") => {
    const URL = `https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}`

        try {
            const resu = fetch(URL).then(res=>res.json()).then(res=>res.results)
            return resu
        } catch (error) {
            console.log(error)
        }

}
