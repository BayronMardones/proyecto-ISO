import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import {Container, HStack, Button, Heading } from '@chakra-ui/react'
import { getPlaces } from '../../../data/places'

export async function getServerSideProps(context){
    try{
        const response = await getPlaces(context.query.placeC)

        // await axios.get(`${process.env.API_URL}/place/search/${context.params.placeC}`)
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



const placeC = ( {data} ) => {

    const router = useRouter()
    const {placeC} = router.query
    const [place] = useState(data)
    console.log(place)
    

    return (

        <Container>

            <Heading>{place.name}</Heading>

            <HStack w={"full"} py={10}>
                <Button colorScheme='yellow' variant='outline' onClick={() => router.push(`/producto/editar/${product._id}`)}>Editar</Button>
                <Button colorScheme='red' variant='outline' onClick={() => router.push(`place/delete/${place._id}`)}>Eliminar</Button>
                <Button colorScheme='blue' variant='outline' onClick={() => router.push('/place')}>Cancelar</Button>
            </HStack>

        </Container>

        
    )
}

export default placeC