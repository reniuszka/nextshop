//zapytania z komponentu
import { InferGetStaticPropsType } from 'next';
import { useQuery } from 'react-query';
import { ProductListItem } from '../components/Product';
//w app musimy dodac query client i owrapowac
const getProducts = async () => {
  const response = await fetch(`https://fakestoreapi.com/products/`);
  const data: StoreApiResponse[] = await response.json();

  return data;
};
const ProductsCSRPage = () => {
  //zapytanie wykona sie za kazdego uzytkownika ktory wejdzie na nasza strone
  const { isLoading, data, error } = useQuery('products', getProducts);
  // const result = useQuery('products', getProducts);
  // result.data;
  // result.isLoading;
  // result.error;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || error) {
    return <div>Cos poszlo nie tak</div>;
  }
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

export default ProductsCSRPage;

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
