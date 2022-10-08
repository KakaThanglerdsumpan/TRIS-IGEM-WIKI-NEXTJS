import '../styles/globals.sass'
import type { AppProps } from 'next/app'
import Main from '../components/layouts/main'
import Navbar from '../components/navbar.tsx'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Main>
                <Navbar />
                <Component {...pageProps} />
            </Main>
        </div>
    )
}

export default MyApp
