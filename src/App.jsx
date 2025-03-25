import { useState } from "react";
import styles from "./App.module.css";
import { recipes } from "./data/recipes";
import { List } from "./components/List/List";
import { Cookbook } from "./components/Cookbook/Cookbook";
import { RecipeContext } from "./context/RecipeContect";
import { Recipe } from "./components/Recipe/Recipe";
import { TopBar } from "./components/TopBar/TopBar";
import { IsLoggedInContext } from "./context/IsLoggedInContext";

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  return (
    <IsLoggedInContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      <RecipeContext.Provider value={selectedRecipe}>
        <TopBar />
        <div className={styles.container}>
          <List
            recipes={recipes}
            onSelectRecipe={(id) => setSelectedRecipeId(id)}
          />
          <Cookbook heading="Książka kucharksa" />
        </div>
        <RecipeContext.Provider value={recipes[3]}>
          <div className={styles.promoted}>
            <h2>Przepis tygodnia</h2>
            <Recipe />
          </div>
        </RecipeContext.Provider>
      </RecipeContext.Provider>
    </IsLoggedInContext.Provider>
  );
}

export default App;
