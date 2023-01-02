import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

export async function getServerSideProps(context){
    try{
        const response = await axios.get(`${process.env.API_URL}/place/search/${context.params.placeC}`)
        return {
            props: {
                data: response.data
            }
        }
    }catch(err){
        return {
            props: {
                data: null
            }
        }

    }
}



const placeC = (data) => {

    const router = useRouter()
    const {placeC} = router.query
    const [place] = useState(data)
    console.log(place)

    return (
        <h1>La pagina es {place.data.name}</h1>
    )
}

export default placeC