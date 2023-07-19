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
  const [recipesElements, setRecipesElement] = useState(null);
  const swiperRef = useRef(null);
  const [prevBtnDisable, setPrevBtnDisable] = useState(true);
  const [nextBtnDisable, setNextBtnDisable] = useState(false);

  // const [startItem, setStartItem] = useState(0);
  // const [endItem, setEndItem] = useState(15);



  const prevSlide = () => {
    if (!swiperRef.current?.swiper.isBeginning) {
      swiperRef.current?.swiper.slidePrev();
    }
    // console.log(swiperRef.current?.swiper.realIndex)
      // setStartItem((prevStart) => prevStart - 5);
      // setEndItem((prevEnd) => prevEnd - 5);
  };

  const nextSlide = () => {
    if (!swiperRef.current?.swiper.isEnd) {
      swiperRef.current?.swiper.slideNext();
    }
    // console.log(swiperRef.current?.swiper.realIndex)
    // if(swiperRef.current?.swiper.realIndex === 10){
      // setStartItem((prevStart) => prevStart + 5);
      // setEndItem((prevEnd) => prevEnd + 5);
    // }
  };

  swiperRef.current?.swiper.on("slideChange", () => {
    if (swiperRef.current !== null) {
      swiperRef.current?.swiper.isBeginning
        ? setPrevBtnDisable(true)
        : setPrevBtnDisable(false);
      swiperRef.current?.swiper.isEnd
        ? setNextBtnDisable(true)
        : setNextBtnDisable(false);
     }
  });

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
    return <Loader />
  }
  return (
    <>
      {recipesElements !== null &&
        <RecipeListGallery>
          <Swiper
            slidesPerView={5}
            spaceBetween={10}
            freeMode={true} 
            ref={swiperRef}
            initialSlide={0}
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
            <ArrowBtnContainer className="swiper-nav-btns">
            <ArrowBtn onClick={prevSlide} disabled={prevBtnDisable}>
               <FaLongArrowAltLeft />
            </ArrowBtn>
            <ArrowBtn onClick={nextSlide} disabled={nextBtnDisable}>
              <FaLongArrowAltRight />
            </ArrowBtn>
          </ArrowBtnContainer>
         {activeElement.length !== 0 && <BtnContainer><DeleteRecipeBtn onClick={deleteBtn} type="button">delete</DeleteRecipeBtn></BtnContainer>}
    </>
  );
};

export default RecipeList;
