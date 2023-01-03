import {React, useState, useEffect } from 'react'
import { Button, Table, Thead, Tr, Td, Container, Heading, Box } from '@chakra-ui/react'
import axios from 'axios'
import {useRouter} from 'next/router'
import Navbar from '../components/navbar'
import LoginBotton from '../components/loginBotton'


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
        if(residente.sanciones == null){
          residente.sanciones = 'Sin sanción'
        }
        return(
          <Tr key={residente._id}>
            <Td>{residente.name}</Td>
            <Td>#{residente.numeroHogar}</Td>
            <Td>{residente.rol}</Td>
            <Td>{residente.sanciones}</Td>
            <Td><Button colorScheme='yellow' variant='outline' onClick={()=>router.push(`/residente/${residente._id}`)}>Opciones</Button>  </Td>
          </Tr>
        )
      })
  }

  return (
    <Box>
      <Navbar></Navbar>
      <Box mr={50} align={"right"}><LoginBotton></LoginBotton></Box>
      <Container maxW="container.md" centerContent backgroundColor={"white"}>
        <Heading textAlign={"center"} my = {10} >Residentes</Heading>
        <Button colorScheme='teal' variant='outline' onClick={()=>router.push('/residentes')}>Crear Residente</Button>
        <Table variant="simple">
          <Thead>
              <Tr>
                <Td>Nombre</Td>
                <Td>Hogar</Td>
                <Td>Rol</Td>
                <Td>Sancion</Td>
                </Tr>
                {showResidentes()}
          </Thead>
        </Table>
      </Container>
    </Box>
  )
}

