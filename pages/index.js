import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import Video from '../components/Video'
import Skills from '../components/Skills'
import Proyects from '../components/Proyects'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yesenia Villar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.png"></link>
      </Head>

      <Navbar />
      <Main />
      <About />
      <Video />
      <Skills />
      <Proyects />
    </div>
  )
}
