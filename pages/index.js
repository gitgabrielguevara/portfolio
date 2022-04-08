import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div >
      <Head>
        <title>My Portfoli Yo!</title>
        <meta name="description" content="Generated me © " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <h1>My Portfolio </h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>

      </main>

    </div>
  )
}
