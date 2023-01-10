import {useState} from 'react'
import { Button, Input, Stack, Container, Heading, FormControl, FormLabel, Textarea, Select, Box} from '@chakra-ui/react'
import axios from 'axios'
import Swal from 'sweetalert2'
import {useRouter} from 'next/router'
import Navbar from '../../../components/navbar'
import LoginBotton from '../../../components/loginBotton'

export async function getServerSideProps(context){
    try{
        const response = await axios.get(`${process.env.API_URL}/residente/search/${context.params.residenteU}`)
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


const ResidentesU = (data, context) => {

    const router = useRouter()
    const [residente] = useState(data.data)
    const [values, setValues] = useState({
        name: '',
        numeroHogar: '',
        rol: '',
        sanciones: ''
    })


    const onSubmit = async(e) => {
        e.preventDefault()

        for (const key in values) {
            if (values[key] === '') {
              values[key] = residente[key]
            }
          }

        console.log(values)
        try {
            const response = await axios.put(`${process.env.API_URL}/residente/update/${residente._id}`, values)
            console.log(response)
            if(response.status === 200){
                Swal.fire({
                    title: 'Residente creado',
                    text: 'El residente a sido creado de manera exitosa',
                    icon: 'success',
                    confirmButtonText: 'ok'
                }).then((result)=>{
                    if(result.isConfirmed){
                        router.push('/residente')
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
        <Box>
            <Navbar></Navbar>
            <Box mr={50} align={"right"}><LoginBotton></LoginBotton></Box>
            <Container maxW="container.sm">
                <Stack>
                    <FormControl>
                    <FormLabel>Nombre Residente</FormLabel>
                        <Input defaultValue={residente.name} type={"text"} onChange={onChange} name={"name"}/>
                    </FormControl>
                    <FormControl>
                    <FormLabel>Numero Hogar</FormLabel>
                        <Input defaultValue={residente.numeroHogar} type={"number"} onChange={onChange} name={"numeroHogar"}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Rol Residente</FormLabel>
                        <Select defaultValue={residente.rol} onChange={onChange} name={"rol"}>
                            <option value='RESIDENTE'>Residente</option>
                            <option value='ADMINISTRADOR'>Administrador</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Sanciones Residente</FormLabel>
                        <Textarea defaultValue={residente.sanciones} type={"text"} onChange={onChange} name={"sanciones"}/>
                    </FormControl>
                    <Button colorScheme='teal' variant='outline' type='submit' onClick={onSubmit}>Actualizar residente</Button>
                    <Button colorScheme='red' variant='outline' onClick={()=>router.push(`../${residente._id}`)}>Cancelar</Button>
                </Stack>
            </Container>
        </Box>
        )
    }

export default ResidentesU