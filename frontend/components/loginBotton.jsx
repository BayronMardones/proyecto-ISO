import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton, useDisclosure, Button, Select, onChange} from '@chakra-ui/react'
import Router from 'next/router'
import React , { useState } from 'react'
import {login} from '../data/residente'
import { useRouter } from 'next/router'

function LoginBotton() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const router = useRouter()
    const [rol, setRol] = useState('')
    
    const handleChange = (e) => {
        setRol(e.target.value)
    }

    const onsubmit = async (e) =>{
        e.preventDefault()
        console.log(rol)
        try{
            // const response = await login(rol)
            localStorage.setItem('rol', rol)
            // router.push('../place')
            // console.log(response.data.residente)
            console.log(rol)
        }catch(error){
            console.log(error)
        }
        // const response = await login(rol)
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

            <Select placeholder="Selecciona una opción" onChange={handleChange}>
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