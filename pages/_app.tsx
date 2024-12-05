import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/layout/Navbar'  // Changed from { Navbar }

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}