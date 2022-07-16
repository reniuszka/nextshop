import { GetStaticPathsResult, GetStaticPropsContext } from 'next';
import { InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { ProductDetails } from '../../components/Product';
import Link from 'next/link';

const ProductIdPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  //hook ktory zaciaga nam params produktu

  const router = useRouter();
  console.log(router);
  if (!data) {
    return <div>Brak danych dla produktu</div>;
  }
  return (
    <div>
      <Link href='/products'>
        <a>Wróc na strone glowna</a>
      </Link>
      {/* {router.query.productId} */}
      <ProductDetails
        data={{
          id: data.id,
          imgUrl: data.image,
          textAlt: data.title,
          title: data.title,
          description: data.description,
          rating: data.rating.rate,
        }}
      />
    </div>
  );
};

export default ProductIdPage;

//[productId] w nazwie to oznacza ze to jest dynamiczny plik i getStaticProps dostanie dodatkowy parametr np id dla konkretnego produktu. [] to konwencja

export type InferGetStaticPaths<T> = T extends () => Promise<{
  paths: Array<{ params: infer R }>;
}>
  ? { params?: R }
  : never;
///getStaticPaths tworzymy bo chcemy stworzyc ograniczona liczbe stron stworzonych za wczasu, musi byc ograniczona do skonczonej liczby przypadkow
//getStaticPaths zwraca tablice
// export const getStaticPaths = () => {
// export const getStaticPaths = async (): GetStaticPathsResult => {
export const getStaticPaths = async () => {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const data: StoreApiResponse[] = await res.json();
  return {
    //czyli tu mowie ze zawczasu przygotujey tylko strone dla produktu 1 wygenerowana
    // paths: [
    //   {
    //     params: {
    //       productId: '1',
    //     },
    //   },
    // ],
    //teraz jako ze sciagam dane z data musze utworzyc nowa tablice  tablice
    paths: data.map((product) => {
      return {
        params: {
          productId: product.id.toString(),
        },
      };
    }),
    fallback: false,
  };
};
//params dostepne bo potrzebujemy przekazac id
export const getStaticProps = async ({
  params,
}: // }: InferGetStaticPaths<typeof getStaticPaths>) => {
GetStaticPropsContext<{ productId: string }>) => {
  //sprawdzamy ze params nie jest undefined
  if (!params?.productId) {
    //zwracamy puste props i ze strona nie istnieje
    return {
      props: {},
      //next bd wiedziec ze strona nie istnieje i wygeneruje 404
      notFound: true,
    };
  }
  const res = await fetch(
    `https://fakestoreapi.com/products/${params.productId}`
  );
  const data: StoreApiResponse | null = await res.json();

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
