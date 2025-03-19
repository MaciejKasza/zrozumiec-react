export const Review = ({ id, author, text }) => {
  return (
    <article>
      <strong>Autor: {author}</strong>
      <p>Recenzja: {text}</p>
    </article>
  );
};
