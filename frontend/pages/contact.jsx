import {Box, Container, Button, Text, Link} from '@chakra-ui/react'
import Navbar from '../components/navbar'
import {useRouter} from 'next/router'
import LoginBotton from '../components/loginBotton'


export default function Home() {
  const router = useRouter()

  return (
    <Box>
      <Navbar></Navbar>
      <Container maxH maxW backgroundSize="cover" backgroundPosition="center" backgroundRepeat="repeat" height="100vh" width="100vw">
        <Box maxW>
        <Box mr={50} align={"right"}>
            <LoginBotton></LoginBotton>
        </Box>
          <Box spacing={8} align={"center"} mt={10} backdropFilter='auto' backdropContrast='50%' borderRadius='full' >
            <Text bgGradient="linear(to-l, #7920CA, #FF0080)" bgClip="text" fontSize="6xl" fontWeight="extrabold"> ¿Tienes dudas?</Text>
            <Text textColor='#FF0080' fontSize="xl" fontWeight="bold">¡Contáctate con nosotros!</Text>
              <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> <Button colorScheme='purple' textColor='white' size="lg" bgColor='red' mt="24px">Youtube</Button> </Link>
              <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> <Button colorScheme='purple' textColor='white' size="lg" bgColor='cyan.700' mt="24px">Twitter</Button> </Link>
              <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> <Button colorScheme='purple' textColor='white' size="lg" bgColor='blue' mt="24px">Facebook</Button> </Link>
              <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> <Button colorScheme='purple' textColor='white' size="lg" bgColor='#FF0080' mt="24px">Instagram</Button> </Link>
              <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> <Button colorScheme='purple' textColor='white' size="lg" bgColor='black' mt="24px">TikTok</Button> </Link>
              <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> <Button colorScheme='purple' textColor='white' size="lg" bgColor='red.600' mt="24px">Gmail</Button> </Link>
              <div><Text textColor='#FF0080' fontSize="xl" fontWeight="bold">Te responderemos a la brevedad ;)</Text></div>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}