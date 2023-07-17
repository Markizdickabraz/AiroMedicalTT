import useRecipeStore from '../../zustand/RecipesStore';
import { BtnContainer, DeleteRecipeBtn, RecipeListGallery } from './RecipeListStyled';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import RecipeCard from '../RecipeCard/RecipeCard';
import Loader from '../loader/loader';
import 'swiper/css';
import beer from '../../img/beer.jpg';


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
            spaceBetween={10}
            freeMode={true} 
            breakpoints={{
            320: {
              slidesPerView: 2,
              slidesPerGroup: 1,
            },
            1024: {
              slidesPerView: 5,
              slidesPerGroup: 1,
            },
          }}
          >
      {recipes && recipes.slice(0, 15).map((recipe) => (
      recipe && recipe.id ? (
      <SwiperSlide key={recipe.id}>
        <RecipeCard activeRecipe={activeRecipe} recipe={recipe} />
      </SwiperSlide>
    ) : null
  ))}
          </Swiper>
        </RecipeListGallery>}
      <div style={{position:'relative', paddingTop:25}}>
         {activeElement.length !== 0 && <BtnContainer><DeleteRecipeBtn onClick={deleteBtn} type="button">delete</DeleteRecipeBtn></BtnContainer>}
       <div style={{display:'flex', justifyContent:'center'}}><img src={beer} alt='beerImage' style={{width:'80%',height: 450, objectFit:"contain"}} /></div>
        </div>
    </>
  );
};

export default RecipeList;
