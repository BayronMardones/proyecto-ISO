import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import {Container, HStack, Button, Heading, Stack, Td, Tr, Box, Thead, Table, Link } from '@chakra-ui/react'
import Swal from 'sweetalert2'


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
    const [residente] = useState(data)
    console.log(residente)

    const deleteResidente = (data) =>{
        try {
            axios.delete(`${process.env.API_URL}/residente/delete/${residente.data._id}`)
            console.log(response.status)
            router.push('/residente')
            if(response.status === 200){
                Swal.fire({
                    title: 'Error',
                    text: 'no se ha podido eliminar el residente',
                    icon: 'error',
                    confirmButtonText: 'ok'
                })
            }
        } catch (err) {
            console.log(err)
            Swal.fire({
                title: 'Residente Eliminado',
                text: 'El residente a sido eliminado de manera exitosa',
                icon: 'success',
                confirmButtonText: 'ok'
            }).then((result)=>{
                if(result.isConfirmed){
                    router.push('/residente')
                }
            })
        }
    }


    return (
        <Container centerContent>

            <Heading>{residente.data.name}</Heading>
            <Table variant="simple">
            <Thead>
              <Tr>
                <Td>ID</Td>
                <Td>Hogar</Td>
                <Td>Rol</Td>
                <Td>Sancion</Td>
                </Tr>
                <Tr>
                    <Td>{residente.data._id}</Td>
                    <Td>{residente.data.numeroHogar}</Td>
                    <Td>{residente.data.rol}</Td>
                    <Td>{residente.data.sanciones}</Td>
                </Tr>
             </Thead>
            </Table>

            <HStack w={"full"} py={10}>
                <Button colorScheme='yellow' variant='outline' onClick={()=>router.push(`/residente/updateR/${residente.data._id}`)}>Editar</Button>
                <Button colorScheme='red' variant='outline' onClick={() => deleteResidente(residente.data._id)}>Eliminar</Button>
                <Button colorScheme='blue' variant='outline' onClick={() => router.push('/residente')}>Cancelar</Button>
            </HStack>

        </Container>
    )
}

export default residenteC