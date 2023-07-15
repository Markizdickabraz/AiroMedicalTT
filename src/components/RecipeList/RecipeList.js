import useRecipeStore from '../../zustand/RecipesStore';
import { useEffect } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import { RecipeListGallery } from './RecipeListStyled';
import Loader from '../loader/loader';

const RecipeList = () => {
  const { recipes, isLoading, loadRecipes } = useRecipeStore();
  let page = 1;

 useEffect(() => {
      loadRecipes(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


  useEffect(() => {
    if (recipes.length === 0 || recipes === null || recipes === undefined) {
      let nextPage = page + 1;
      loadRecipes(nextPage);
       }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [recipes.length === 0, recipes === null]);
  
  if (isLoading) {
    return <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Loader />
    </div>
  }
  return (
    <>
        {recipes !== null &&
        <RecipeListGallery>
          {recipes.slice(0, 15).map((recipe) => (
        <RecipeCard recipe={recipe} />
      ))}
        </RecipeListGallery>
          
        }
    </>
  );
};

export default RecipeList;
