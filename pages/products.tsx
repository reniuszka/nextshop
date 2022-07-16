// import { InferGetStaticPropsType } from 'next';

// //  typu propsow przekazanych z getStaticProsps sa zinferowane (zgarniete) z tego co jest wracane dostarczane przez nexta,mowiy: TP zgadnij to co jest zwracane z getStaticProps
// // InferGetStaticPropsType jest typem dostarczanym przez Nexta. Dzięki niemu, kod w naszej aplikacji będzie spójny, a my nie musimy w dwóch miejscach deklarować kształtu danych.
// const ProductsPage = ({
//   data,
// }: InferGetStaticPropsType<typeof getStaticProps>) => {
//   return <div>{data}</div>;
// };

// export default ProductsPage;

// //generowanie zzawczasu w ssg - getStaticProps
// //propsy tej strony zostana jej przekazane w sposob statyczny czyli wszystko co zostanie zwrocone z tej fcji stanie sie propsami dla tego ckomponentu ProductPage
// //wykonuje sie w czasie budowanie aplikacji czyli wtedy kiedy chcemy sa wrzucic na serwer i ta fucja getStaticProps robi pewne operacje np pobierze dane z api, te dane sa zwrocone, next je zapisuje/przechowuje i kiedy my odwiedzamy strone ProductPage next je automatycznie przekazuje do tego komponentu, i getStaticProps zostanie usuniete z nexta z tego kodu automatycznie przez proces deploymentu ale jej dzialeanie i dane sa gdzies przechowywane, ten kod wykonuje sie w konteksicie node'a, wiec nie ma dostepnych opcji window czy document, bo rendowane po stronie serwera
// export const getStaticProps = async () => {
//   //fetch wbudowane w przegladarke i od niedawna w node'a, fetch zwraca response ->czyli odpowiedz w formie promisa wiec musimy czekiwac na te dane. Promise to obietnica, fetch obiecuje ze dane kiedys przyjdą. Node przygotowywuje sie na te dane a w miedzyczasie moze zrobic co jeszcze, serwer zwraca dane i musimy  powiedzeic w fetchowi, w jakim formacie maja byc te dane, tutaj format JSON() i rowniez to obietnica
//   const response = await fetch(`https://fakestoreapi.com/products/`);
//   //hey typescript zaufaj mi taki typ beda miec te dane, przy graphql nie byloby bledu bo te typy sa scisle powiazanae
//   // pobieramy wszytkie produkty, nie 1
//   const data: StoreApiResponse[] = await response.json();
//   // console.log(data);
//   //zwracamy co oczekuje next, czyli obiekt props i w srodku jest data, te proprs to jest to co bedzie przekazane do tej strony wyzej  do Productsage. getStatcProps wykonuje sie tylkoo raz i te dane sa przygotowywane wczesniej, a potem sa tylko rederowane
//   return {
//     props: {
//       data,
//     },
//   };
// };

import { InferGetStaticPropsType } from 'next';
import { ProductListItem } from '../components/Product';

const ProductsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
      {data.map((product) => {
        return (
          <li key={product.id} className='shadow-xl border-2'>
            {/* {product.title} */}
            <ProductListItem
              data={{
                id: product.id,
                imgUrl: product.image,
                textAlt: product.title,
                title: product.title,
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsPage;
//gdyby byl problem przy fetchowaniu to apka by nie zbuildowala
export const getStaticProps = async () => {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const data: StoreApiResponse[] = await res.json();

  return {
    props: {
      data,
    },
  };
};
//typowanie zwracanego api
interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
