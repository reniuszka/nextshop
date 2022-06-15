import Link from 'next/link';
// import { useRouter } from 'next/router';
import { ActiveLink } from './ActiveLink';
export const Header = () => {
  // const router = useRouter();

  return (
    <header className='max-w-md mx-auto w-full'>
      <nav className='bg-gray-900 px-4 py-2 text-white flex gap-4'>
        <ActiveLink href='/' name='Home' />
        <ActiveLink href='/about' name='About' />
        <ActiveLink href='/details' name='Details' />
        <ActiveLink href='/users' name='Users' />

        {/* <Link href='/'>
          <a className={router.pathname == '/' ? 'active' : ''}>Home</a>
        </Link>
        
        <Link href='/users'>
          <a className={router.pathname == '/users' ? 'active' : ''}>Users</a>
        </Link> */}
      </nav>
    </header>
  );
};
