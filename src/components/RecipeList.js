import useRecipeStore from '../zustand/RecipiesStore';
import { useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';

const RecipeList = () => {
    const { recipes, isLoading, loadRecipes } = useRecipeStore();
    
    useEffect(() => {
      loadRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
      <div>
          {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;