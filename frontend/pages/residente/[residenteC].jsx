import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import {Container, HStack, Button, Heading, Stack, Td, Tr, Box, Thead, Table } from '@chakra-ui/react'

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
        try{
            axios.delete(`${process.env.API_URL}/residente/delete/${residente.data._id}`)
        router.reload()
        }catch(err){
            console.log(err)
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
                
                <Button colorScheme='red' variant='outline' onClick={() => deleteResidente(residente.data._id)}>Eliminar</Button>
                <Button colorScheme='blue' variant='outline' onClick={() => router.push('/residente')}>Cancelar</Button>
            </HStack>

        </Container>
    )
}

export default residenteC