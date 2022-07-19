import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import Head from 'next/head';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Cửa Hàng Gas Anh Kiệt</title>
        <link rel="icon" href="/logo-gas.png/" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
