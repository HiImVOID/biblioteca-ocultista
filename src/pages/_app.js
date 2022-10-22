import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import MainComponent from '../components/MainComponent'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />



    </Head>


    <MainComponent>
      <Component {...pageProps} />
    </MainComponent>
  </>)
}

export default MyApp
