import { ReactNode } from 'react';

interface MainProp {
  children: ReactNode;
}

export const Main = ({ children }: MainProp) => {
  return (
    <main className='bg-red-50 flex-grow max-w-2xl mx-auto grid p-6 gap-6 sm:grid-cols-2'>
      {children}
    </main>
  );
};
