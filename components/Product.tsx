import { Rating } from './Rating';
import Link from 'next/link';

interface ProductDetails {
  id: number;
  description: string;
  imgUrl: string;
  textAlt: string;
  title: string;
  rating: number;
}
// tworzenie typu, wyluskujemy z Product Details, nierzemy title, textA;t, imgUrl
//tworzenie podkolekcji - bierzemy ze 3 title,text, i description uzywajac <Pick> z Prduct Details i co bierzemy title lub text lub imgUrl
type ProductListItem = Pick<
  ProductDetails,
  'id' | 'title' | 'imgUrl' | 'textAlt'
>;

interface ProductProps {
  data: ProductDetails;
}
//prawym i klik rename symbol by zmienic nazwe funckji i zmieni sie automatycznie w miejscach gdzie byla uzywana
export const ProductDetails = ({ data }: ProductProps) => {
  return (
    <>
      <img src={data.imgUrl} alt={data.textAlt} />
      <h2 className='p-4 text-3xl font-bold'>{data.title}</h2>
      <p className='p-4'>{data.description}</p>
      <Rating rating={data.rating} />
    </>
  );
};

// type ProductListItem = Pick<ProductDetails, 'title' | 'imgUrl' | 'textAlt'>;

interface ProductListItemProps {
  data: ProductListItem;
}
export const ProductListItem = ({ data }: ProductListItemProps) => {
  return (
    <>
      <img src={data.imgUrl} alt={data.textAlt} />
      <Link href={`/products/${data.id}`}>
        <a>
          <h2 className='p-4 text-3xl font-bold'>{data.title}</h2>
        </a>
      </Link>
    </>
  );
};
