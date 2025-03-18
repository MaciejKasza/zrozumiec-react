import { useState } from "react";

export const LikesCounter = () => {
  const [numberOfLikes, setNumberOfLikes] = useState(50);

  function handleLikeButtonClick() {
    setNumberOfLikes((prev) => prev + 1);
  }

  function handleLoveButtonClick() {
    setNumberOfLikes((prev) => prev + 3);
  }

  return (
    <>
      <h2>Liczba polubień: {numberOfLikes}</h2>
      <button onClick={handleLikeButtonClick}>Lubię to!</button>
      <button onClick={handleLoveButtonClick}>Kocham to!(+3 like)</button>
    </>
  );
};
