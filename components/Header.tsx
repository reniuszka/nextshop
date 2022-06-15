import Link from 'next/link';
import { useRouter } from 'next/router';
export const Header = () => {
  const router = useRouter();

  return (
    <header className='max-w-md mx-auto w-full'>
      <nav className='bg-gray-900 px-4 py-2 text-white flex gap-4'>
        {/* <Link href='/'>Główna</Link> */}
        <Link href='/'>
          <a className={router.pathname == '/' ? 'active' : ''}>Home</a>
        </Link>
        <Link href='/about'>
          <a className={router.pathname == '/about' ? 'active' : ''}>About</a>
        </Link>
        <Link href='/details'>
          <a className={router.pathname == '/details' ? 'active' : ''}>
            Details
          </a>
        </Link>
      </nav>
    </header>
  );
};
