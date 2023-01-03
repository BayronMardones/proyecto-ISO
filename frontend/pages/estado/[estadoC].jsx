import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import {Container, HStack, Button, Heading } from '@chakra-ui/react'
import { getEstado } from '../../data/Estado'

export async function getServerSideProps(context){
    try{
        const response = await getEstado(context.query.estadoC)

        // await axios.get(`${process.env.API_URL}/estado/search/${context.params.estadoC}`)
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



const estadoC = ( {data} ) => {

    const router = useRouter()
    const {estadoC} = router.query
    const [estado] = useState(data)
    console.log(estado)
    

    return (

        <Container>

            <Heading>{estado.name}</Heading>

            <HStack w={"full"} py={10}>
                <Button colorScheme='yellow' variant='outline' onClick={() => router.push(`/producto/editar/${product._id}`)}>Editar</Button>
                <Button colorScheme='red' variant='outline' onClick={() => router.push(`estado/delete/${estado._id}`)}>Eliminar</Button>
                <Button colorScheme='blue' variant='outline' onClick={() => router.push('/estado')}>Cancelar</Button>
            </HStack>

        </Container>

        
    )
}

export default estadoC