import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton, useDisclosure, Button, Select, onChange} from '@chakra-ui/react'
  import React from 'react'


function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    return (
      <>
        <Button onClick={onOpen} colorScheme='pink' textColor='white' size="lg" bgColor='#7920CA' mt="24px">Inicia Sesión</Button>

        <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader align={"center"}>Inicia Sesión</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>

            <Select placeholder="Selecciona una opción" onChange={onChange} name={"rol"}>
                <option value='ADMINISTRADOR'>Administrador</option>
                <option value='RESIDENTE'>Residente</option>
            </Select>

            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>Accede</Button>
              <Button onClick={onClose}>Atrás</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default Login