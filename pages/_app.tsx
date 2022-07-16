import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();
//client zawiera cash, wiec jesli wyslemy zpytanie dwa razy to za drugim razem ma to juz w pamieci i jest w stanie wyslac to do dwoch komponentow ktore tego potrzebuja
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <p className='text-9xl text-bold text-red-500 text-center mt-7 border-b-lime-700 border-8'>
        Heyyy
      </p> */}
      <QueryClientProvider client={client}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
