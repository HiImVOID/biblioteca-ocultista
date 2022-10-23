import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ParadicmasSection from '../components/ParadigmasSection'
import Oferta from '../components/Oferta'
import UltimosArtigos from '../components/UltimosArtigos'

export default function Home() {
  return (
    <>
      <Head>
        <title>Biblioteca Ocultista</title>
      </Head>
      <UltimosArtigos />
      <Oferta />
      <ParadicmasSection />

    </>
  )
}
