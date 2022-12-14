import {Box, Container, Stack, Button, Text, Spacer} from '@chakra-ui/react'
import Navbar from '../components/navbar'
import {useRouter} from 'next/router'
import LoginBotton from '../components/loginBotton'
import React, { useState } from 'react'

export default function Home() {
  const router = useRouter()

  // const [login, setLogin] = useState({
  //   rol: ''
  // })
  
  // const handleChange = (e) => {
  //     setLogin({
  //       ...login,
  //       [e.target.name]: e.target.value
  //     })
  //     console.log(login)
  // }

  // const onSubmit = (e) =>{
  //   e.preventDefault()
  //   console.log(login)
  // }


  return (
    <Box>

      <Navbar></Navbar>
      <Container maxH maxW bgImg='gym.jpg' backgroundSize="cover" backgroundPosition="center" backgroundRepeat="repeat" height="100vh" width="100vw">
        <Box maxW>
          <Box mr={50} align={"right"}>
            <LoginBotton></LoginBotton>
          </Box>

          <Stack spacing={8} align={"center"} mt={20} backdropFilter='auto' backdropContrast='30%' borderRadius='full'>
            <Text bgGradient="linear(to-l, #7920CA, #FF0080)" bgClip="text" fontSize="6xl" fontWeight="extrabold"> Reserva de Espacios Comunes</Text>
            <Text textColor='#FF0080' fontSize="xl" fontWeight="bold">Pasa un buen rato junto a tu familia y amigos en nuestros espacios comunes</Text>
            <Button colorScheme='purple' textColor='white' size="lg" bgColor='#FF0080' mt="24px" onClick={()=>router.push('/estados')} >RESERVA YA!</Button>
            <Spacer/>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

