import useRecipeStore from '../../zustand/RecipesStore';
import { useEffect } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import { RecipeListGallery } from './RecipeListStyled';
import Loader from '../loader/loader';

const RecipeList = () => {
  const { recipes, isLoading, loadRecipes } = useRecipeStore();

    useEffect(() => {
      if (recipes.length === 0) {
        loadRecipes();
     }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [recipes.length === 0]);
  
  if (isLoading) {
    return <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Loader />
    </div>
  }

  return (
    <>
    {recipes.length !== 0 &&
        <RecipeListGallery>
          {recipes.slice(0, 15).map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
        </RecipeListGallery>
      }
    </>
  );
};

export default RecipeList;