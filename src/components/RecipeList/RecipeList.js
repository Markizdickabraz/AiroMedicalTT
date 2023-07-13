import useRecipeStore from '../../zustand/RecipesStore';
import { useEffect } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import { RecipeListGallery } from './RecipeListStyled';

const RecipeList = () => {
    const { recipes, isLoading, loadRecipes } = useRecipeStore();
    console.log(recipes)
    useEffect(() => {
      loadRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
      <RecipeListGallery>
          {recipes.slice(0, 15).map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </RecipeListGallery>
  );
};

export default RecipeList;