import {useState} from 'react'
import { Button, Input, Stack, Container, Heading, FormControl, FormLabel, Textarea, Select, Box} from '@chakra-ui/react'
import axios from 'axios'
import Swal from 'sweetalert2'
import {useRouter} from 'next/router'
import Navbar from '../../../components/navbar'
import LoginBotton from '../../../components/loginBotton'

export async function getServerSideProps(context){
    try{
        const response = await axios.get(`${process.env.API_URL}/place/search/${context.params.placeU}`)
        return {
            props: {
                data: response.data
            }
        }
    }catch(err){
        return {
            props: {
                data: null
            }
        }

    }
}


const placesU = (data, context) => {

    const router = useRouter()
    const [place] = useState(data.data)
    const [values, setValues] = useState({
        name: '',
        capacidad: '',
        descripcion: '',
        estado: ''
    })


    const onSubmit = async(e) => {
        e.preventDefault()

        for (const key in values) {
            if (values[key] === '') {
              values[key] = place[key]
            }
          }

        console.log(values)
        try {
            const response = await axios.put(`${process.env.API_URL}/place/update/${place._id}`, values)
            console.log(response)
            if(response.status === 200){
                Swal.fire({
                    title: 'Espacio creado',
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
                    text: 'No se ha podido editar el espacio',
                    icon: 'error',
                    confirmButtonText: 'ok'
                })
            }
        } catch (err) {
            Swal.fire({
                title: 'Error',
                text: 'No se ha podido editar el espacio',
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
            <Box mr={50} align={"right"}><LoginBotton></LoginBotton></Box>
            <Container maxW="container.sm">
                <Stack>
                    <FormControl>
                    <FormLabel>Nombre espacio</FormLabel>
                        <Input defaultValue={place.name} type={"text"} onChange={onChange} name={"name"}/>
                    </FormControl>
                    <FormControl>
                    <FormLabel>Capacidad espacio</FormLabel>
                        <Input defaultValue={place.capacidad} type={"number"} onChange={onChange} name={"capacidad"}/>
                    </FormControl>
                    <FormControl>
                    <FormLabel>Estado del espacio</FormLabel>
                        <Select defaultValue={place.estado} onChange={onChange} name={"estado"}>
                            <option value='DISPONIBLE'>Disponible</option>
                            <option value='RESERVADO'>Reservado</option>
                            <option value='EN ESPERA'>En espera</option>
                            <option value='EN MANTENCIÓN'>En Mantención</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Descripcion del espacio</FormLabel>
                        <Textarea defaultValue={place.descripcion} type={"text"} onChange={onChange} name={"descripcion"}/>
                    </FormControl>
                    <Button colorScheme='teal' variant='outline' type='submit' onClick={onSubmit}>Actualizar espacio</Button>
                    <Button colorScheme='red' variant='outline' onClick={()=>router.push(`../ver/${place._id}`)}>Cancelar</Button>
                    
                </Stack>
            </Container>
        </Box>
        )
    }

export default placesU