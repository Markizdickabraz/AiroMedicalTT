import useRecipeStore from '../../zustand/RecipesStore';
import { useEffect, useState } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import { RecipeListGallery } from './RecipeListStyled';
import Loader from '../loader/loader';

const RecipeList = () => {
  const { recipes, isLoading, loadRecipes, deleteRecipe } = useRecipeStore();
  const [page, setPage] = useState(1);
  const [activeElement, setActiveEelement] = useState(null);
  
  useEffect(() => {
    if (recipes.length === 0 || recipes === null || recipes === undefined) {
      let nextPage = page + 1;
      loadRecipes(nextPage);
      setPage(nextPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipes.length === 0, recipes === null]);
  
  const activeRecipe = (event) => {
    setActiveEelement(event);
  }
  
  const deleteBtn = (recipeIds) => {
    recipeIds = Array.from(activeElement).map(recipe => recipe.id);
    console.log(recipeIds);
    deleteRecipe(recipeIds);
    console.log('delete')
  }


  if (isLoading) {
    return <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Loader />
    </div>
  }
  return (
    <>
      {activeElement !== null && <button onClick={deleteBtn} type="button">delete</button>}
        <RecipeListGallery>
          {recipes.slice(0, 15).map((recipe) => (
        <RecipeCard activeRecipe={activeRecipe} key={recipe.id} recipe={recipe} />
      ))}
        </RecipeListGallery>
        </>
  );
};

export default RecipeList;
