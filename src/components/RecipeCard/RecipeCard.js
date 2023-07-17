import { LinkStyled, RecipeCardStyled } from "./RecipeCardStylred";
import { useState, useEffect } from "react";

export default function RecipeCard({ recipe, activeRecipe }) {
  const [isActive, setIsActive] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [recipeItem, setRecipeItem] = useState([recipe]);

  useEffect(() => {
    const activeRecipes = document.querySelectorAll(".active");
    activeRecipe(activeRecipes);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]); // 

  function toggleClass() {
    setIsActive((prevState) => !prevState);
  }

  function handleClick(event) {
    if (event.button === 2) {
      event.preventDefault();
      toggleClass();
    }
  }

  const isActiveClass = isActive ? "active" : "";

  return (
      <RecipeCardStyled
      className={isActiveClass}
      onContextMenu={handleClick}
      id={recipe.id}
    >
      <LinkStyled to={`/beer`} state={{ recipeItem }}>
          <h4>{recipe.name}</h4>
        <img
          style={{ padding: 5 }}
          src={recipe.image_url}
          alt={recipe.name}
          width={'15%'}
        />
          <p
            title={recipe.description}
          >
            Click to read the recipe.
          </p>
      </LinkStyled>
    </RecipeCardStyled>
  );
}
