import { Modal, ModalOverlay, ModalContent, ModalHeader, Box, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Select, onChange, Link, Stack, FormControl, FormLabel, Input, Textarea, onSubmit } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'


function ComentButton() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [residentes, setResidentes] = useState([])
    const [estados, setEstados] = useState([])
    const [comentario, setComentario] = useState([])
    const router = useRouter()

    const [values, setValues] = useState({
        estado: '',
        nombreResidente: '',
        comentario: ''
    })

    const getResidentes = async () => {
        const response = await axios.get(`${process.env.API_URL}/residentes`)
        setResidentes(response.data)
    }

    useEffect(() => {
        getResidentes()
    }, [])

    const getComentario = async () => {
        const response = await axios.get(`${process.env.API_URL}/comentarios`)
        setComentario(response.data)
    }

    useEffect(() => {
        getEstados()
    }, [])

    const getEstados = async () => {
        const response = await axios.get(`${process.env.API_URL}/estados`)
        setEstados(response.data)
    }

    useEffect(() => {
        getComentario()
    }, [])

    const showResidentes = () => {
        return residentes.map(residente => {
            return (
                <option key={residente._id} value={residente._id}>{residente.name}</option>
            )
        })
    }

    const showEstado = () => {
        return estados.map(estado => {
            return (
                <option key={estado._id} value={estado._id}>{estado.estado}</option>
            )
        })
    }

    const showComentario = (id) => {
        const filteredComments = comentario.filter(c => c._id === id);

        return comentario.map(c => {
            return (
                    <Box key={c._id} >{c.comentario}</Box>
            )
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(values)
        try {
            const response = await axios.post(`${process.env.API_URL}/comentario`, values)
            console.log(response)
            if (response.status === 200) {
                Swal.fire({
                    title: 'Place creado',
                    text: 'El la reserva a sido creada de manera exitosa',
                    icon: 'success',
                    confirmButtonText: 'ok'
                }).then((result) => {
                    if (result.isConfirmed) {
                        router.push('/estado')
                    }
                })
            } else {
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
        <Box mr={50} align={"right"}>
            <Accordion allowMultiple defaultIsOpen={false} >
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>Ver Comentarios</Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        <Box mr={50} align={"left"}>{showComentario()}</Box>
                        <Button onClick={onOpen} colorScheme='blue' variant='outline' size="md" mt="24px">Crear Comentario</Button>
                        <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader fontSize='3xl' align={"center"}>Crea tu comentario</ModalHeader>
                                <ModalHeader fontSize='1xl' align={"center"}>Recuerda que todos podran leer tu comentario, sé respetuoso</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody pb={6}>

                                    <Stack>
                                        <FormControl>
                                            <FormLabel>Su id</FormLabel>
                                            <Select onChange={onChange} name={"estado"} >
                                                {showEstado()}
                                            </Select>
                                        </FormControl>

                                        <FormControl>
                                            <FormLabel>Su nombre</FormLabel>
                                            <Select onChange={onChange} name={"nombreResidente"} >
                                                {showResidentes()}
                                            </Select>
                                        </FormControl>


                                        <FormControl>
                                            <FormLabel>Comentario</FormLabel>
                                            <Textarea placeholder="Ingresa aquí tu comentario" type={"text"} onChange={onChange} name={"comentario"} />
                                        </FormControl>
                                    </Stack>

                                </ModalBody>
                                <ModalFooter>
                                    <Link href='#' onClick={onSubmit} ><Button colorScheme='blue' variant='outline' mr={3} onclick={onClose}>Comentar</Button></Link>
                                    <Button onClick={onClose}>Atrás</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box >
    )
}export default ComentButton
