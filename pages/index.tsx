import { ReactNode } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Product } from '../components/Product';
import { Main } from '../components/Main';

const DATA = {
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odit esse molestias quae veritatis modi? Impedit iusto quis aliquid iure, veniam, quos, et eaque alias necessitatibus deleniti consequatur quod. Rerum? Lorem ipsum, dolor sit amet consectetur adipisicing elit.Aliquam, quae?',
  img: 'https://picsum.photos/id/237/436/354',
  text: 'piesek',
  rating: 4.5,
};
//musimy nadac typ propsombo TP nie wie jaki to typ, po prawej stronie piszemy typy, po lewej to jest nasz prop(parametr) i wtedy do komponentu <Rating /> musimy dodac prop by go przekazac, bo przypisalismy ze onst Rating ma przyjąc jeden props o typie RatingProp
// interface RatingProps {
//   rating: number;
// }
// const Rating = ({ rating }: RatingProps) => {
//   return <div className='bg-pink-900 font-bold text-blue-500'>{rating}</div>;
//   // const Rating = (props: RatingProps) => {
//   //   return <div className='font-bold text-blue-500'>{props.rating}</div>;
// };

// interface ProductProps {
//   data: {
//     description: string;
//     img: string;
//     text: string;
//     rating: number;
//   };
// }

// const Product = ({ data }: ProductProps) => {
//   return (
//     <>
//       <img src={data.img} alt={data.text} />
//       <p>{data.description}</p>
//       <Rating rating={data.rating} />
//     </>
//   );
// };

// children to jest to co jest w srodku komponentu, zarowno inny komponent jak i tekst
// interface MainProp {
//   children: ReactNode;
// }

// const Main = ({ children }: MainProp) => {
//   return (
//     <main className='bg-red-50 flex-grow max-w-2xl mx-auto grid p-6 gap-6 sm:grid-cols-2'>
//       {children}
//     </main>
//   );
// };
const Home = () => {
  return (
    <div className='flex flex-col min-h-screen bg-green-100 text-center'>
      {/* <header className='max-w-md mx-auto w-full'>
        <nav className='bg-gray-500 px-4 py-2 text-white'>Nawigacja</nav>
      </header> */}
      <Header />
      {/* <main className='bg-red-50 flex-grow max-w-2xl mx-auto grid p-6 gap-6 sm:grid-cols-2'> */}
      <Main>
        <Product data={DATA} />s
      </Main>
      {/* <img src={DATA.img} alt={DATA.text} />
        <p>{DATA.description}</p>
        <Rating rating={DATA.rating} /> */}
      {/* </main> */}
      {/* <footer className='bg-blue-500 px-4 py-2 text-white max-w-md mx-auto w-full'>
        Footer
      </footer> */}
      <Footer />
    </div>
  );
};

export default Home;
