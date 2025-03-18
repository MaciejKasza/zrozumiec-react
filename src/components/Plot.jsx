import { useState } from "react";

const initialState = {
  isSpoilerShown: false,
  isWarningShown: true,
};

export const Plot = () => {
  const [state, setState] = useState(initialState);

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

  return (
    <>
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
};
