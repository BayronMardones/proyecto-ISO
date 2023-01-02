import { useState, useEffect, React } from 'react'
import { Tr, Td, Container, Heading, Box, Button, Table, Thead } from '@chakra-ui/react'
import {useRouter} from 'next/router'
import Navbar from '../components/navbar'
import axios from 'axios'




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
            <Td>{estado.fechaReserva}</Td>
            <Td>{estado.estado}</Td>
            {/* <Td>{place.name}</Td>*/}
            {/* <Td>{estado.residente}</Td> */}
            {/* <Tr key={estado.place}>
                <Td {...place.name}/>
            </Tr> */}
            {/* <Tr key={estado.residente._id}>
                <Td {residente.name}/>
            </Tr> */}
          </Tr>
        )
      })
  }

  return (
    <Box>
      <Navbar></Navbar>
      <Container maxW="container.xl" centerContent backgroundColor={"white"}>
        <Heading textAlign={"center"} my = {10} >RESERVA</Heading>
        <Button colorScheme='teal' variant='outline' onClick={()=>router.push('/estados')}>Realizar reserva</Button>
        <Table variant="simple">
          <Thead>
            <Tr>
            <Td>FECHA RESERVA</Td>
            <Td>ESTADO</Td>
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