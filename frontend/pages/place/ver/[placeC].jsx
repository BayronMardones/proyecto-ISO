import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import {Container, HStack, Button, Heading, Stack, Td, Tr, Box, Thead, Table } from '@chakra-ui/react'
import Swal from 'sweetalert2'

export async function getServerSideProps(context){
    try{
        const response = await axios.get(`${process.env.API_URL}/place/search/${context.params.placeC}`)

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



const placeC = ( data ) => {

    const router = useRouter()
    // const {placeC} = router.query
    const [place] = useState(data)
    console.log(place)
    

    const deletePlace = (data) =>{
        try {
            axios.delete(`${process.env.API_URL}/place/delete/${place.data._id}`)
            console.log(response.status)
            router.push('/place')
            if(response.status === 200){
                Swal.fire({
                    title: 'Error',
                    text: 'no se ha podido eliminar el espacio',
                    icon: 'error',
                    confirmButtonText: 'ok'
                })
            }
        } catch (err) {
            console.log(err)
            Swal.fire({
                title: 'espacio Eliminado',
                text: 'El espacio a sido eliminado de manera exitosa',
                icon: 'success',
                confirmButtonText: 'ok'
            }).then((result)=>{
                if(result.isConfirmed){
                    router.push('/place')
                }
            })
        }
    }

    return (

        <Container>

            <Heading>{place.data.name}</Heading>
            <Table variant="simple">
            <Thead>
              <Tr>
                <Td>ID</Td>
                <Td>Capacidad</Td>
                <Td>Descripcion</Td>
                <Td>Estado</Td>
                </Tr>
                <Tr>
                    <Td>{place.data._id}</Td>
                    <Td>{place.data.capacidad}</Td>
                    <Td>{place.data.descripcion}</Td>
                    <Td>{place.data.estado}</Td>
                </Tr>
             </Thead>
            </Table>


            <HStack w={"full"} py={10}>
            <Button colorScheme='yellow' variant='outline' onClick={()=>router.push(`../updateP/${place.data._id}`)}>Editar</Button>
                <Button colorScheme='red' variant='outline' onClick={() => deletePlace(place.data._id)}>Eliminar</Button>
                <Button colorScheme='blue' variant='outline' onClick={() => router.push('/place')}>Cancelar</Button>
            </HStack>

        </Container>

        
    )
}

export default placeC