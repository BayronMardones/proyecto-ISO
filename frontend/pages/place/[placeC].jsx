import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { HStack, Button } from '@chakra-ui/react'

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
        <HStack w={"full"} py={10}>
                <Button colorScheme='yellow' variant='outline' onClick={() => router.push(`/producto/editar/${product._id}`)}>Editar</Button>
                <Button colorScheme='red' variant='outline' onClick={() => router.push()}>Eliminar</Button>
                <Button colorScheme='blue' variant='outline' onClick={() => router.push('/place')}>Cancelar</Button>
        </HStack>
    )
}

export default placeC