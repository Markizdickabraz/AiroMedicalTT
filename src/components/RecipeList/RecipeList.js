import useRecipeStore from '../../zustand/RecipesStore';
import { ArrowBtn, ArrowBtnContainer, BtnContainer, DeleteRecipeBtn, RecipeListGallery } from './RecipeListStyled';
import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import RecipeCard from '../RecipeCard/RecipeCard';
import Loader from '../loader/loader';
import 'swiper/css';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

const RecipeList = () => {
  const { recipes, isLoading, loadRecipes, deleteRecipe } = useRecipeStore();
  const [page, setPage] = useState(1);
  const [activeElement, setActiveEelement] = useState([]);
  const [recipesElements, setRecipesElements] = useState([]);
  const swiperRef = useRef(null);
  const [prevBtnDisable, setPrevBtnDisable] = useState(true);
  const [nextBtnDisable, setNextBtnDisable] = useState(false);

  const [startItem, setStartItem] = useState(0);
  const [endItem, setEndItem] = useState(15);

 useEffect(() => {
   if (recipes !== null && recipes !== undefined) {
     setRecipesElements(recipes.slice(startItem, endItem));
     if (startItem === 0) {
       setPrevBtnDisable(true);
     }
     if (endItem === 25) { 
       setNextBtnDisable(true)
     }
  }
}, [page, loadRecipes, recipes, startItem, endItem]);
  
  useEffect(() => {
    if (recipes.length === 0 || recipes === null || recipes === undefined) {
      let nextPage = page + 1;
      loadRecipes(nextPage);
      setPage(nextPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipes.length === 0, recipes === null]);
  
  const prevSlide = () => {
    setNextBtnDisable(false);
  if (!swiperRef.current?.swiper.isBeginning) {
    swiperRef.current?.swiper.slidePrev();
  } else {
    setStartItem(startItem => startItem -5);
    setEndItem((prevEnd) => prevEnd - 5);
  }
};

  const nextSlide = () => {
    setPrevBtnDisable(false)
    if (!swiperRef.current?.swiper.isEnd) {
    swiperRef.current?.swiper.slideNext();
  } else {
    setStartItem(startItem => startItem + 5);
    setEndItem((prevEnd) => prevEnd + 5);
    }
};

  const activeRecipe = (event) => {
    setActiveEelement(event);
  };
  
  const deleteBtn = (recipeIds) => {
    recipeIds = Array.from(activeElement).map(recipe => parseInt(recipe.id));
    deleteRecipe(recipeIds);
  };
  
  if (isLoading) {
    return <Loader />
  }
  return (
    <>
      {recipesElements !== null &&
        <RecipeListGallery>
          <Swiper
            spaceBetween={10}
            freeMode={true} 
            ref={swiperRef}
            initialSlide={0}
            breakpoints={{
            320: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            1024: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
          }}
          >
       {recipesElements.map((recipe) => (
      recipe && recipe.id ? (
        <SwiperSlide key={recipe.id}>
           <RecipeCard activeRecipe={activeRecipe} recipe={recipe} />
        </SwiperSlide>
      ) : null
    ))}
         </Swiper>
        </RecipeListGallery>}
            <ArrowBtnContainer className="swiper-nav-btns">
            <ArrowBtn onClick={prevSlide} disabled={prevBtnDisable} >
               <FaLongArrowAltLeft />
            </ArrowBtn>
            <ArrowBtn onClick={nextSlide} disabled={nextBtnDisable} >
              <FaLongArrowAltRight />
            </ArrowBtn>
          </ArrowBtnContainer>
         {activeElement.length !== 0 && <BtnContainer><DeleteRecipeBtn onClick={deleteBtn} type="button">delete</DeleteRecipeBtn></BtnContainer>}
    </>
  );
};

export default RecipeList;
