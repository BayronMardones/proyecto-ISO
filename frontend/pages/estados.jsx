import {useState, useEffect} from 'react'
import { Button, Input, Stack, Container, Heading, FormControl, FormLabel, Textarea, Box, Select} from '@chakra-ui/react'
import axios from 'axios'
import Swal from 'sweetalert2'
import {useRouter, Router} from 'next/router'
import Navbar from '../components/navbar'
import LoginBotton from '../components/loginBotton'


const estados = () => {

    const router = useRouter()
    const [values, setValues] = useState({
        fechaReserva: '',
        estado: '',
        place: '',
        residente: ''
    })

    const onSubmit = async(e) => {
        e.preventDefault()
        console.log(values)
        try {
            const response = await axios.post(`${process.env.API_URL}/estado`, values)
            console.log(response)
            if(response.status === 200){
                Swal.fire({
                    title: 'Place creado',
                    text: 'El la reserva a sido creada de manera exitosa',
                    icon: 'success',
                    confirmButtonText: 'ok'
                }).then((result)=>{
                    if(result.isConfirmed){
                        router.push('/estado')
                    }
                })
            }else{
                Swal.fire({
                    title: 'Error',
                    text: 'no se ha podido crear la reserva',
                    icon: 'error',
                    confirmButtonText: 'ok'
                })
            }
        } catch (err) {
            Swal.fire({
                title: 'Error',
                text: 'no se ha podido crear la reserva',
                icon: 'error',
                confirmButtonText: 'ok'
            })
        }
    }

    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const [places, setplaces] = useState([])
  
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
            
            <option key={place._id} value = {place._id}>{place.name}</option>

          )
        })
    }

    return (
        <Box>
            <Navbar></Navbar>
            <Box mr={50} align={"right"}><LoginBotton></LoginBotton></Box>
            <Container maxW="container.md">
                <Heading textAlign={"center"} my={10}>Reserva de espacios</Heading>
                <Stack>
                    <FormControl>
                        <FormLabel>Fecha de reserva</FormLabel>
                        <Input placeholder="ej: 2022,08,13" type={"date"} onChange={onChange} name={"fechaReserva"}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Codigo de espacio</FormLabel>
                        <Select onChange={onChange} name={"place"} >
                            {showplaces()}
                        </Select>
                        
                        {/* <Input placeholder="ID del espacio" type={"id"} onChange={onChange} name={"place"}/> */}
                    </FormControl>
                    <FormControl>
                        <FormLabel>Codigo de usuario</FormLabel>
                        <Input placeholder="ID del usuario" type={"id"} onChange={onChange} name={"residente"}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>¿Para que usarás el espacio?</FormLabel>
                        <Textarea placeholder="ej: Para fiestas" type={"text"} onChange={onChange} name={"estado"}/>
                    </FormControl>
                    <Button colorScheme='teal' variant='outline' type='submit' onClick={onSubmit}>Crear espacio</Button>
                    <Button colorScheme='red' variant='outline' onClick={()=>router.push('/estado')}>Cancelar</Button>
                </Stack>
            </Container>
        </Box>
    )
    }

export default estados