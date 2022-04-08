import '../styles/globals.css'
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <main> 
      <Component {...pageProps} />
    </main>

    <footer> 
      © Gabe {new Date().getFullYear()}
    </footer>
    </>
  )
}

export default MyApp
