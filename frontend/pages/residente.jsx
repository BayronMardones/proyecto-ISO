import {React, useState, useEffect } from 'react'
import { Button, Table, Thead, Tr, Td, Container, Heading } from '@chakra-ui/react'
import axios from 'axios'
import {useRouter} from 'next/router'


export default function residente() {

  const [residentes, setResidentes] = useState([])
  const router = useRouter()

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

    <Container maxW="container.xl" centerContent backgroundColor={"white"}>
        <Heading textAlign={"center"} my = {10} >RESIDENTES</Heading>
        <Button colorScheme='teal' variant='outline' onClick={()=>router.push('/residentes')}>Crear Residente</Button>
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

