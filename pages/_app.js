import "@/styles/globals.css";
import "@/styles/footer.css";
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pronicles</title>
        <link rel="icon" href="/new_logo.png"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
