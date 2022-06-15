import Link from 'next/link';
import { useRouter } from 'next/router';
interface LinkProps {
  href: string;
  name: string;
}
export const ActiveLink = ({ href, name }: LinkProps) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <a className={router.pathname === href ? 'active' : ''}>{name}</a>
    </Link>
  );
};
