import {useState} from 'react'
import { Button, Input, Stack, Container, Heading, FormControl, FormLabel, Textarea } from '@chakra-ui/react'
import axios from 'axios'
import Swal from 'sweetalert2'
import Router from 'next/router'
import {useRouter} from 'next/router'

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
                        Router.push('/place')
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
                    <FormLabel>Descripcion del espacio</FormLabel>
                    <Textarea placeholder="Ideal para cumpleaños" type={"text"} onChange={onChange} name={"descripcion"}/> 
                </FormControl>
                <FormControl>
                    <FormLabel>Estado del espacio</FormLabel>
                    <Input placeholder="disponible para su uso" type={"text"} onChange={onChange} name={"estado"}/> 
                </FormControl>
                <Button colorScheme='teal' variant='outline' type='submit' onClick={onSubmit}>crear espacio</Button>
                <Button colorScheme='red' variant='outline' onClick={()=>router.push('/place')}>cancelar</Button>

            </Stack>
        </Container>
    )
    }

export default places