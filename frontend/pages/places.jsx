import {useState} from 'react'
import { Button, Input, Stack, Container, Heading, FormControl, FormLabel, Textarea, Box, Select} from '@chakra-ui/react'
import axios from 'axios'
import Swal from 'sweetalert2'
import {useRouter, Router} from 'next/router'
import Navbar from '../components/navbar'


const places = () => {

    const router = useRouter()
    const [values, setValues] = useState({
        name: '',
        capacidad: '',
        descripcion: '',
        estado: ''
    })

    const onSubmit = async(e) => {
        e.preventDefault()
        console.log(values)
        try {
            const response = await axios.post(`${process.env.API_URL}/place`, values)
            console.log(response)
            if(response.status === 200){
                Swal.fire({
                    title: 'Place creado',
                    text: 'El espacio a sido creado de manera exitosa',
                    icon: 'success',
                    confirmButtonText: 'ok'
                }).then((result)=>{
                    if(result.isConfirmed){
                        router.push('/place')
                    }
                })
            }else{
                Swal.fire({
                    title: 'Error',
                    text: 'no se ha podido crear el espacio',
                    icon: 'error',
                    confirmButtonText: 'ok'
                })
            }
        } catch (err) {
            Swal.fire({
                title: 'Error',
                text: 'no se ha podido crear el espacio',
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
                <Heading textAlign={"center"} my={10}>Crear espacios</Heading>
                <Stack>
                    <FormControl>
                        <FormLabel>Nombre del espacio</FormLabel>
                        <Input placeholder="ej: Salon de eventos mediano" type={"text"} onChange={onChange} name={"name"}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Capacidad del espacio</FormLabel>
                        <Input placeholder="ej: 20" type={"number"} onChange={onChange} name={"capacidad"}/>
                    </FormControl>
                    <FormControl>
                    <FormLabel>Estado del espacio</FormLabel>
                        <Select placeholder="Selecciona una opción" onChange={onChange} name={"estado"}>
                            <option value='DISPONIBLE'>Disponible</option>
                            <option value='RESERVADO'>Reservado</option>
                            <option value='EN ESPERA'>En espera</option>
                            <option value='EN MANTENCIÓN'>En Mantención</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Descripcion del espacio</FormLabel>
                        <Textarea placeholder="Ideal para cumpleaños" type={"text"} onChange={onChange} name={"descripcion"}/>
                    </FormControl>
                    <Button colorScheme='teal' variant='outline' type='submit' onClick={onSubmit}>Crear espacio</Button>
                    <Button colorScheme='red' variant='outline' onClick={()=>router.push('/place')}>Cancelar</Button>
                </Stack>
            </Container>
        </Box>
    )
    }

export default places