import useRecipeStore from '../../zustand/RecipesStore';
import { BtnContainer, DeleteRecipeBtn, RecipeListGallery } from './RecipeListStyled';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import RecipeCard from '../RecipeCard/RecipeCard';
import Loader from '../loader/loader';

import 'swiper/css';


const RecipeList = () => {
  const { recipes, isLoading, loadRecipes, deleteRecipe } = useRecipeStore();
  const [page, setPage] = useState(1);
  const [activeElement, setActiveEelement] = useState([]);
  const [recipesElements, setRecipesElement] = useState(null);
  useEffect(() => {
  loadRecipes(page)
  setRecipesElement(recipes)
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
  
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
  };
  
  const deleteBtn = (recipeIds) => {
    recipeIds = Array.from(activeElement).map(recipe => parseInt(recipe.id));
    deleteRecipe(recipeIds);
  };

  if (isLoading) {
    return <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Loader />
    </div>
  }
  return (
    <>
      {recipesElements !== null &&
        <RecipeListGallery>
          <Swiper
            slidesPerView={5}
            spaceBetween={20} // Додайте відстань між слайдами
            freeMode={true} // Дозволяємо перетягування слайдів
          >
            {recipes.slice(0, 15).map((recipe) => (
            <SwiperSlide key={recipe.id} >
                  <RecipeCard activeRecipe={activeRecipe}  recipe={recipe} />   
                  </SwiperSlide>
                  ))}
          </Swiper>
        </RecipeListGallery>}
            {activeElement.length !== 0 && <BtnContainer><DeleteRecipeBtn onClick={deleteBtn} type="button">delete</DeleteRecipeBtn></BtnContainer>}
        </>
  );
};

export default RecipeList;
