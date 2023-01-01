
import {Box, Container, Stack, Button, Text} from '@chakra-ui/react'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <Box>
      <Navbar></Navbar>
      <Container maxH maxW centerContent bgImg='https://i.postimg.cc/q7Z2Fq2W/gym.jpg' backgroundSize="cover" backgroundPosition="center" backgroundRepeat="no-repeat" height="100vh" width="100vw">
      <Box maxW>
        <Stack spacing={8} align={"center"} mt={20}>
          <Text bgGradient="linear(to-l, #7920CA, #FF0080)" bgClip="text" fontSize="6xl" fontWeight="extrabold"> Reserva de Espacios Comunes</Text>
          <Text fontSize="xl">Pasa un buen rato junto a tu familia y amigos en nuestros espacios comunes.</Text>
          <Button size="lg" bgColor='#5271FF' mt="24px">RESERVA YA!</Button>
        </Stack>
      </Box>
      </Container>
    </Box>

  )
}
