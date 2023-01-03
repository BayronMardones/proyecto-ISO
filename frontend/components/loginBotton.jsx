import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton, useDisclosure, Button, Select, onChange, Link} from '@chakra-ui/react'
import Router from 'next/router'
import React , { useState } from 'react'
import {login} from '../data/residente'
import { useRouter } from 'next/router'

function LoginBotton() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const router = useRouter()
    const [rol, setRol] = useState('RESIDENTE')

    const handleChange = (e) => {
        setRol(e.target.value)
    }

    const onsubmit = async (e) =>{
        e.preventDefault()
        console.log(rol)
        try{
            localStorage.setItem('rol', rol)
            console.log(rol)
        }catch(error){
            console.log(error)
        }
    }

    return (
      <>
        <Button onClick={onOpen} colorScheme='pink' textColor='white' size="lg" bgColor='#7920CA' mt="24px">Inicia Sesión</Button>

        <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader align={"center"}>Sesión</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>

            <Select placeholder="Selecciona una opción" onChange={handleChange} onClick={onsubmit}>
                <option value='RESIDENTE'>Residente</option>
                <option value='ADMINISTRADOR'>Administrador</option>
            </Select>

            </ModalBody>
            <ModalFooter>
              <Link href='#' onClick={() => window.location.reload()}><Button  colorScheme='green' mr={3} onclick={onClose}>Accede</Button></Link>
              <Button onClick={onClose}>Atrás</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default LoginBotton