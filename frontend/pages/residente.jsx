import React from 'react'
import { useState, useEffect } from 'react'
import { Input, Stack, Table, Thead, Tbody, Tfoot, Tr, Th, Td, Container, Heading, TableCaption, TableContainer } from '@chakra-ui/react'
import axios from 'axios'

export default function residente() {

  const [residentes, setResidentes] = useState([])

  const getResidentes = async () => {
    const response = await axios.get(`${process.env.API_URL}/residentes`)
    setResidentes(response.data)
  }

  useEffect(() => {
    getResidentes()
  }, [])

  const showResidentes = () => {
      return residentes.map(residente => {
        return(
          <Tr key={residente._id}>
            <Td>{residente.name}</Td>
            <Td>{residente.numeroHogar}</Td>
            <Td>{residente.rol}</Td>
            <Td>{residente.sanciones}</Td>
          </Tr>
        )
      })
  }

  return (

    <Container maxW="container.xl" centerContent backgroundColor={"gray"}>
        <Heading textAlign={"center"} my = {10} >RESIDENTES</Heading>
        <Table variant="simple">
            <Thead>
                <Tr>
                    <Td>NOMBRE</Td>
                    <Td>HOGAR</Td>
                    <Td>ROL</Td>
                    <Td>SANCIONES</Td>
                </Tr>
                {showResidentes()}
            </Thead>
        </Table>
    </Container>
  )
}

