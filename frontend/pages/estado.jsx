import { useState, useEffect, React } from 'react'
import { Tr, Td, Container, Heading, Box, Button, Table, Thead } from '@chakra-ui/react'
import {useRouter} from 'next/router'
import Navbar from '../components/navbar'
import axios from 'axios'
import LoginBotton from '../components/loginBotton'




export default function estado() {

  const [estados, setEstados] = useState([])
  const router = useRouter()

  const getEstados = async () => {
    const response = await axios.get(`${process.env.API_URL}/estados`)
    setEstados(response.data)
  }

  useEffect(() => {
    getEstados()

  }, [])

  const showestados = () => {
      return estados.map(estado => {
        return(
          <Tr key={estado._id}>
            <Td>{(new Date(estado.fechaReserva)).toLocaleString('es')}</Td>
            <Td>{estado.estado} </Td>
            <Td>{estado.place.map(place => place.name)}</Td>
            <Td>{estado.residente.map(residente => residente.name)}</Td>
          </Tr>

        )
      })
  }

  return (
    <Box>
      <Navbar></Navbar>
      <Box mr={50} align={"right"}><LoginBotton></LoginBotton></Box>
      <Container maxW="container.xl" centerContent backgroundColor={"white"}>
        
        <Heading textAlign={"center"} my = {10} >RESERVA</Heading>
        <Button colorScheme='teal' variant='outline' onClick={()=>router.push('/estados')}>Realizar reserva</Button>
        <Table variant="simple">
          <Thead>
            <Tr>
            <Td>FECHA RESERVA</Td>
            <Td>MOTIVO DE USO</Td>
            <Td>ESPACIO</Td>
            <Td>RESIDENTE</Td>
            </Tr>
            {showestados()}
          </Thead>
        </Table>
      </Container>
    </Box>
  )
}