import Head from 'next/head'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Practice NextJs</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <h1>Home Page</h1>
      <h2>
        <Link href="/products" >
          see our products
        </Link>
      </h2>
    </>
  )
}
