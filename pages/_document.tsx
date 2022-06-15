import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      {/* anitliased- gladki tekst */}
      <body className='bg-gray-300 antialiased shadow-lg shadow-red-400'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
