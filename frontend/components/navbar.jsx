import React from 'react'
import {Box, Breadcrumb, BreadcrumbLink, BreadcrumbItem, Container, Image, Spacer, Link} from '@chakra-ui/react'


const navbar = () => {
    return (
        <Container backgroundColor='#5271FF' maxW>
            <Breadcrumb spacing='15px' separator='-' color='white'>
                <Box>
                    <Link href='/'><Image borderRadius='full' boxSize='50px' src='https://i.postimg.cc/MT0N8Y44/Logotipo-de-estudio-de-maquillaje-minimalista-suave-1.png'/> </Link>
                </Box>
                <Spacer/>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/' color='white' marginLeft='5' >INICIO</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#' color='white'>RESERVA</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#' color='white'>ESPACIOS</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/residente' color='white'>RESIDENTE</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#' color='white'>CONTACTO</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Container>
    )
}

export default navbar