import { Rating } from './Rating';

interface ProductProps {
  data: {
    description: string;
    img: string;
    text: string;
    rating: number;
  };
}

export const Product = ({ data }: ProductProps) => {
  return (
    <>
      <img src={data.img} alt={data.text} />
      <p>{data.description}</p>
      <Rating rating={data.rating} />
    </>
  );
};
