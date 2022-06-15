interface RatingProps {
  rating: number;
}
export const Rating = ({ rating }: RatingProps) => {
  return <div className='bg-pink-900 font-bold text-blue-500'>{rating}</div>;
  // const Rating = (props: RatingProps) => {
  //   return <div className='font-bold text-blue-500'>{props.rating}</div>;
};
