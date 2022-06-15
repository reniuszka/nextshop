import Link from 'next/link';

export const Header = () => {
  return (
    <header className='max-w-md mx-auto w-full'>
      <nav className='bg-gray-900 px-4 py-2 text-white'>
        <Link href='/'>Główna</Link>
        <Link href='/about'>About</Link>
      </nav>
    </header>
  );
};
