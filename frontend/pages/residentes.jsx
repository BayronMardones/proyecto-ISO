import {useState} from 'react'
import { Button, Input, Stack, Container, Heading, FormControl, FormLabel, Textarea, Select} from '@chakra-ui/react'
import axios from 'axios'
import Swal from 'sweetalert2'
import Router from 'next/router'
import {useRouter} from 'next/router'

const residentes = () => {

    const router = useRouter()
    const [values, setValues] = useState({
        name: '',
        numeroHogar: '',
        rol: '',
        sanciones: ''
    })

    const onSubmit = async(e) => {
        e.preventDefault()
        console.log(values)
        try {
            const response = await axios.post(`${process.env.API_URL}/residente`, values)
            console.log(response)
            if(response.status === 200){
                Swal.fire({
                    title: 'Residente creado',
                    text: 'El residente a sido creado de manera exitosa',
                    icon: 'success',
                    confirmButtonText: 'ok'
                }).then((result)=>{
                    if(result.isConfirmed){
                        Router.push('/residente')
                    }
                })
            }else{
                Swal.fire({
                    title: 'Error',
                    text: 'No se ha podido crear el residente',
                    icon: 'error',
                    confirmButtonText: 'ok'
                })
            }
        } catch (err) {
            Swal.fire({
                title: 'Error',
                text: 'no se ha podido crear el residente',
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
            <Heading textAlign={"center"} my={10}>Crear Residentes</Heading>
            <Stack>
                <FormControl>
                    <FormLabel>Nombre Residente</FormLabel>
                    <Input placeholder="ej: Pedro Hurtado" type={"text"} onChange={onChange} name={"name"}/>
                </FormControl>
                <FormControl>
                    <FormLabel>Numero Hogar</FormLabel>
                    <Input placeholder="ej: 101" type={"number"} onChange={onChange} name={"numeroHogar"}/>
                </FormControl>
                <FormControl>
                    <FormLabel>Rol Residente</FormLabel>
                    <Select placeholder="Selecciona una opción" onChange={onChange} name={"rol"}>
                        <option value='Residente'>Residente</option>
                        <option value='Administrador'>Administrador</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>Sanciones Residente</FormLabel>
                    <Textarea placeholder="Sanciones Residente" type={"text"} onChange={onChange} name={"sanciones"}/>
                </FormControl>
                <Button colorScheme='teal' variant='outline' type='submit' onClick={onSubmit}>Crear residente</Button>
                <Button colorScheme='red' variant='outline' onClick={()=>router.push('/residente')}>cancelar</Button>

            </Stack>
        </Container>
    )
    }

export default residentes