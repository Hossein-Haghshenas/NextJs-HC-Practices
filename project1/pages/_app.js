import Layout from '../layouts/layout'
import '../styles/globals.css'
import { Poppins } from '@next/font/google'

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800"], subsets: ['latin', 'latin-ext'] })

function MyApp({ Component, pageProps }) {
  return <Layout className={poppins.className} >
    <Component  {...pageProps} />
  </Layout>
}

export default MyApp
