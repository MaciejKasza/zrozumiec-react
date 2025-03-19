import { useState } from "react";

export const Form = ({ onReviewSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const author = inputValue;
    const text = textareaValue;

    onReviewSubmit(author, text);

    setInputValue("");
    setTextareaValue("");
  };

  return (
    <>
      <h2>Dodaj recenzję</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="author">Autor</label>
          <br />
          <input
            type="text"
            id="author"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="text">Tekst</label>
          <br />
          <textarea
            id="text"
            name="text"
            cols={20}
            rows={10}
            value={textareaValue}
            onChange={(e) => {
              setTextareaValue(e.target.value);
            }}
          ></textarea>
        </div>
        <button type="Submit">Dodaj</button>
      </form>
    </>
  );
};
