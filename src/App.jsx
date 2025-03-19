import { LikesCounter } from "./components/LikesCounter";
import { Plot } from "./components/Plot";
import { Form } from "./components/Form";
import { Reviews } from "./components/Reviews";
import { useState } from "react";

const initialReviews = [
  {
    id: 1,
    author: "Adam",
    text: "Mega fajny",
  },
  {
    id: 2,
    author: "Ewa",
    text: "Słaby film!",
  },
];

function App() {
  const [reviews, setReviews] = useState(initialReviews);
  const [counterShown, setCounterShown] = useState(true);
  const [numberOfLikes, setNumberOfLikes] = useState(50);

  function handleLikeButtonClick() {
    setNumberOfLikes((prev) => prev + 1);
  }

  function handleLoveButtonClick() {
    setNumberOfLikes((prev) => prev + 3);
  }

  return (
    <>
      <h1>Gwiezdne wojny V</h1>
      <h2>Rok produkcji: 1980</h2>
      <button onClick={() => setCounterShown((prev) => !prev)}>
        {counterShown ? "Schowaj lajki!" : "Pokaż lajki"}
      </button>
      {counterShown && (
        <LikesCounter
          numberOfLikes={numberOfLikes}
          onLikeButtonClick={handleLikeButtonClick}
          onLoveButtonClick={handleLoveButtonClick}
        />
      )}
      <Plot />
      <Reviews reviews={reviews} />
      <Form
        onReviewSubmit={(author, text) =>
          setReviews((prev) => [
            { author, text, id: reviews.length + 1 },
            ...prev,
          ])
        }
      />
    </>
  );
}

export default App;
