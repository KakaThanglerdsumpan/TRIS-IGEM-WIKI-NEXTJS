import '../styles/globals.css'
import NavBar from '../components/navbarstuff/navbar'
import Bottombar from '../components/Bottombar'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <ChakraProvider>
                <NavBar />
            </ChakraProvider>
            <Component {...pageProps} />
            <Bottombar />
        </>
    )
}

export default MyApp
