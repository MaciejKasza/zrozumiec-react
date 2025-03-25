import { Recipe } from "../Recipe/Recipe";
import { Button } from "../Button/Button";
import { useContext } from "react";
import { IsLoggedInContext } from "../../context/IsLoggedInContext";

export function Article() {
  const [isLoggedIn, setIsLoggedIn] = useContext(IsLoggedInContext);
  return (
    <article>
      <Recipe />
      {isLoggedIn ? (
        <Button onClick={() => alert("Przepis polubiony!")}>Lubię to!</Button>
      ) : (
        <>
          <div>Zaloguj się</div>
          <button onClick={() => setIsLoggedIn(true)}>Zaloguj się</button>
        </>
      )}
    </article>
  );
}
