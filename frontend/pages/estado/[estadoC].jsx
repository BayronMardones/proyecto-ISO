import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import {Container, HStack, Button, Heading, Stack, Td, Tr, Box, Thead, Table } from '@chakra-ui/react'
import Swal from 'sweetalert2'

export async function getServerSideProps(context){
    try{
        const response = await axios.get(`${process.env.API_URL}/estado/search/${context.params.estadoC}`)

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



const estadoC = ( data ) => {

    const router = useRouter()
  
    const [estado] = useState(data)
    console.log(estado)
    
    const deleteEstado = (data) =>{
        try {
            axios.delete(`${process.env.API_URL}/estado/delete/${estado.data._id}`)
            console.log(response.status)
            router.push('/estado')
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
                    router.push('/estado')
                }
            })
        }
    }

    return (

        <Container>

            <Heading>{estado.data.estado} </Heading>

            <Table variant="simple">
            <Thead>
              <Tr>
                <Td>ID</Td>
                
                
                </Tr>
                <Tr>
                    <Td>{estado.data._id}</Td>
                    
                    
                </Tr>
             </Thead>
            </Table>

            <HStack w={"full"} py={10}>
                <Button colorScheme='red' variant='outline' onClick={() => deleteEstado(estado.data._id)}>Eliminar</Button>
                <Button colorScheme='blue' variant='outline' onClick={() => router.push('/estado')}>Cancelar</Button>
            </HStack>

        </Container>

        
    )
}

export default estadoC