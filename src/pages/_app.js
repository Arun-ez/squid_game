import Head from 'next/head';
import Body from '@/providers/BodyProvider';

const App = ({ Component, pageProps }) => {

  return (
    <>
      <Head>
        <title> Squid Game </title>
        <meta name="description" content="Squid Game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Body>
        <Component {...pageProps} />
      </Body>
    </>
  )
}


export default App;