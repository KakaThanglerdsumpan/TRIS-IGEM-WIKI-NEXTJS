import '../styles/globals.css'
import Main from '../components/layouts/main'
import Navbar from '../components/navbar'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
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
