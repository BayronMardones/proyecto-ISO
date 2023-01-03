import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton, useDisclosure, Button, Select, onChange} from '@chakra-ui/react'
import React , { useState } from 'react'


function LoginBotton() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [login, setLogin] = useState({
      rol: ''
    })
    
    const handleChange = (e) => {
        setLogin({
          ...login,
          [e.target.name]: e.target.value
          
        })
        
    }

    const onsubmit = (e) =>{
        e.preventDefault()
        console.log(login)
    }

    return (
      <>
        <Button onClick={onOpen} colorScheme='pink' textColor='white' size="lg" bgColor='#7920CA' mt="24px">Inicia Sesión</Button>

        <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader align={"center"}>Inicia Sesión</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>

            <Select placeholder="Selecciona una opción" onChange={handleChange} name={"rol"}>
              {/* no se entrega en el select la variable correpondiente asi que se dieron vuelta */}
                <option value='administrador'>Administrador</option>
                <option value='residente'>Residente</option>
            </Select>

            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onsubmit}>Accede</Button>
              <Button onClick={onClose}>Atrás</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default LoginBotton