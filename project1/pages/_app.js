import Layout from '../layouts/layout'
import '../styles/globals.css'
import { Poor_Story } from '@next/font/google'

const poorStory = Poor_Story({ weight: '400', subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component className={poorStory.className} {...pageProps} />
  </Layout>
}

export default MyApp
