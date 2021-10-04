import { AppProps } from 'next/app';
import Head from 'next/head';
import EmptyState from '../components/empty-state/empty-state';
import Navbar from '../components/navbar/navbar';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to test-app!</title>
      </Head>
      <Navbar />
      <EmptyState />
    </>
  );
}

export default CustomApp;
