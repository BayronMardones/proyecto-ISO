import {useState} from 'react'
import { Button, Input, Stack, Container, Heading, FormControl, FormLabel, Textarea, Box} from '@chakra-ui/react'
import axios from 'axios'
import Swal from 'sweetalert2'
import {useRouter, Router} from 'next/router'
import Navbar from '../components/navbar'


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

    return (
        <Box>
            <Navbar></Navbar>
            <Container maxW="container.md">
                <Heading textAlign={"center"} my={10}>Reserva de espacios</Heading>
                <Stack>
                    <FormControl>
                        <FormLabel>Fecha de reserva</FormLabel>
                        <Input placeholder="ej: 2022,08,13" type={"date"} onChange={onChange} name={"fechaReserva"}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Estado del espacio</FormLabel>
                        <Input placeholder="ej: Para fiestas" type={"text"} onChange={onChange} name={"estado"}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Codigo de espacio</FormLabel>
                        <Input placeholder="ID del espacio" type={"id"} onChange={onChange} name={"place"}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Codigo de usuario</FormLabel>
                        <Input placeholder="ID del usuario" type={"id"} onChange={onChange} name={"residente"}/>
                    </FormControl>
                    <Button colorScheme='teal' variant='outline' type='submit' onClick={onSubmit}>Crear espacio</Button>
                    <Button colorScheme='red' variant='outline' onClick={()=>router.push('/estado')}>Cancelar</Button>
                </Stack>
            </Container>
        </Box>
    )
    }

export default estados