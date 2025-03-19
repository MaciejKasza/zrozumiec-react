import { Review } from "./Review";

export const Reviews = ({ reviews }) => {
  const reviewsElements = reviews.map((item) => (
    <Review key={item.id} author={item.author} text={item.text} />
  ));
  return (
    <>
      <hr />
      {reviewsElements};
      <hr />
    </>
  );
};
