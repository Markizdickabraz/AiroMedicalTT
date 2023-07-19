import { useRef, useState } from 'react';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import { ArrowBtnContainer, ArrowBtn } from '../RecipeList/RecipeListStyled';

export default function SlideArrow () {

    const swiperRef = useRef(null);
    const [prevBtnDisable, setPrevBtnDisable] = useState(true);
    const [nextBtnDisable, setNextBtnDisable] = useState(false);
  
    const prevSlide = () => {
      if (!swiperRef.current?.swiper.isBeginning) {
        swiperRef.current?.swiper.slidePrev();
      }
    };
  
    const nextSlide = () => {
      if (!swiperRef.current?.swiper.isEnd) {
        swiperRef.current?.swiper.slideNext();
      }
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


    return (
        <>
        <ArrowBtnContainer className="swiper-nav-btns">
            <ArrowBtn onClick={prevSlide} disabled={prevBtnDisable}>
               <FaLongArrowAltLeft />
            </ArrowBtn>
            <ArrowBtn onClick={nextSlide} disabled={nextBtnDisable}>
              <FaLongArrowAltRight />
            </ArrowBtn>
          </ArrowBtnContainer>
    </>
    )
}