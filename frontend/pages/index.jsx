import {Box, Container, Stack, Button, Text} from '@chakra-ui/react'
import Navbar from '../components/navbar'
import {useRouter} from 'next/router'


export default function Home() {
  const router = useRouter()

  return (
    <Box>


      <Navbar></Navbar>
      <Container maxH maxW bgImg='https://i.postimg.cc/q7Z2Fq2W/gym.jpg' backgroundSize="cover" backgroundPosition="center" backgroundRepeat="repeat" height="100vh" width="100vw">
        <Box maxW>
          <Box mr={50} align={"right"}>
            <Button colorScheme='pink' textColor='white' size="lg" bgColor='#7920CA' mt="24px" onClick={()=>router.push('#')} >Inicia Sesión</Button>
          </Box>

          <Stack spacing={8} align={"center"} mt={20} backdropFilter='auto' backdropContrast='50%' borderRadius='full'>
            <Text bgGradient="linear(to-l, #7920CA, #FF0080)" bgClip="text" fontSize="6xl" fontWeight="extrabold"> Reserva de Espacios Comunes</Text>
            <Text textColor='#FF0080' fontSize="xl" fontWeight="bold">Pasa un buen rato junto a tu familia y amigos en nuestros espacios comunes</Text>
            <Button colorScheme='purple' textColor='white' size="lg" bgColor='#FF0080' mt="24px" onClick={()=>router.push('/estados')} >RESERVA YA!</Button>

          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
