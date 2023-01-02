import React from 'react'
import {Box, Breadcrumb, BreadcrumbLink, BreadcrumbItem, Container, Text, Spacer, Link} from '@chakra-ui/react'


const navbar = () => {
    return (
        <Container bgGradient="linear(to-l, #7920CA, #FF0080)" maxW>
            <Breadcrumb spacing='15px' separator='-' color='white'>
                <Box boxSize=''>
                    <Text fontSize="4xl" fontWeight='bold' color='white'><Link fontSize='4x1' href='/'>REC</Link></Text>
                </Box>
                <Spacer/>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/' color='white' marginLeft='5' >INICIO</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/estados' color='white'>RESERVA</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/place' color='white'>ESPACIOS</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/residente' color='white'>RESIDENTE</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/contact' color='white'>CONTACTO</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Container>
    )
}

export default navbar