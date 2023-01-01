import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Input, Stack, Table, Thead, Tbody, Tfoot, Tr, Th, Td, Container, Heading, TableCaption, TableContainer } from '@chakra-ui/react'
import axios from 'axios'
import {useRouter} from 'next/router'


export default function place() {

  const [places, setplaces] = useState([])
  const router = useRouter()

  const getplaces = async () => {
    const response = await axios.get(`${process.env.API_URL}/places`)
    setplaces(response.data)
  }

  useEffect(() => {
    getplaces()
  }, [])

  const showplaces = () => {
      return places.map(place => {
        return(
          <Tr key={place._id}>
            <Td>{place.name}</Td>
            <Td>{place.capacidad}</Td>
            <Td>{place.descripcion}</Td>
            <Td>{place.estado}</Td>
          </Tr>
        )
      })
  }

  return (

    <Container maxW="container.xl" centerContent backgroundColor={"gray"}>
        <Heading textAlign={"center"} my = {10} >ESPACIOS</Heading>
        <Button colorScheme='teal' variant='outline' onClick={()=>router.push('/places')}>Crear place</Button>
        <Table variant="simple">
            <Thead>
                <Tr>
                    <Td>NOMBRE</Td>
                    <Td>CAPACIDAD</Td>
                    <Td>DESCRIPCION</Td>
                    <Td>ESTADO</Td>
                </Tr>
                {showplaces()}
            </Thead>
        </Table>
    </Container>
  )
}