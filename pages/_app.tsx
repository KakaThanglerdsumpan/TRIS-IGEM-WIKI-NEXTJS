import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Main from '../components/layouts/main'
import Navbar from '../components/navbar'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <ChakraProvider>
                <Main>
                    <Navbar />
                    <Component {...pageProps} />
                </Main>
            </ChakraProvider>
        </div>
    )
}

export default MyApp
