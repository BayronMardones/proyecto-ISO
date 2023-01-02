import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

export async function getServerSideProps(context){
    try{
        const response = await axios.get(`${process.env.API_URL}/residente/search/${context.params.residenteC}`)
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



const residenteC = (data) => {

    const router = useRouter()
    const {residenteC} = router.query
    const [residente] = useState(data)
    console.log(residente)

    return (
        <h1>La pagina es {residente.data.name}</h1>
    )
}

export default residenteC