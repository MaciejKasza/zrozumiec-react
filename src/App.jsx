import { useState } from "react";

const initialState = {
  isSpoilerShown: false,
  isWarningShown: true,
  numberOfLikes: 50,
};

function App() {
  const [state, setState] = useState(initialState);

  function handleLikeButtonClick() {
    setState((prev) => ({ ...prev, numberOfLikes: prev.numberOfLikes + 1 }));
  }

  function handleLoveButtonClick() {
    setState((prev) => ({ ...prev, numberOfLikes: prev.numberOfLikes + 3 }));
  }

  function handleShowSpoilerClick() {
    setState((prev) => ({
      ...prev,
      isSpoilerShown: true,
      isWarningShown: false,
    }));
  }

  function handleCloseWarningClick() {
    setState((prev) => ({ ...prev, isWarningShown: false }));
  }

  console.log("<App> - render");

  return (
    <>
      <h1>Gwiezdne wojny V</h1>
      <h2>Rok produkcji: 1980</h2>
      <h2>Liczba polubień: {state.numberOfLikes}</h2>
      <button onClick={handleLikeButtonClick}>Lubię to!</button>
      <button onClick={handleLoveButtonClick}>Kocham to!(+3 like)</button>
      <h2>Fabuła</h2>
      {state.isWarningShown && (
        <p>
          Uwaga! Opis fabuły zawiera spoilery!
          <button onClick={handleCloseWarningClick}>X</button>
        </p>
      )}
      <p>Dobrzy walczą ze złymi. Trzeba wyłączyć pole siłowe.</p>
      {state.isSpoilerShown ? (
        <p>Vader okazuje się być ojcem Luka.</p>
      ) : (
        <button onClick={handleShowSpoilerClick}>Pokaż spoiler</button>
      )}
    </>
  );
}

export default App;
