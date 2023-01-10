import { Modal, ModalOverlay, ModalContent, ModalHeader, Box, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Select, onChange, Link, Stack, FormControl, FormLabel, Input, Textarea, onSubmit } from '@chakra-ui/react'
import React from 'react'

function ComentButton() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)



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
                    <Box mr={50} align={"left"}>Aqui van los comentarios</Box>
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
                                            <FormLabel>Nombre</FormLabel>
                                            <Input placeholder="ej: Pedro Hurtado" type={"text"} onChange={onChange} name={"name"} />
                                        </FormControl>

                                        <FormControl>
                                            <FormLabel>Comentario</FormLabel>
                                            <Textarea placeholder="Ingresa aquí tu comentario" type={"text"} onChange={onChange} name={"comentario"} />
                                        </FormControl>
                                    </Stack>

                                </ModalBody>
                                <ModalFooter>
                                    <Link href='#' onClick={() => window.location.reload()}><Button colorScheme='blue' variant='outline' mr={3} onclick={onClose}>Comentar</Button></Link>
                                    <Button onClick={onClose}>Atrás</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box >
    )
}
export default ComentButton