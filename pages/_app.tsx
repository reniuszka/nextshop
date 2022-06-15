import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <p className='text-9xl text-bold text-red-500 text-center mt-7 border-b-lime-700 border-8'>
        Heyyy
      </p> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
