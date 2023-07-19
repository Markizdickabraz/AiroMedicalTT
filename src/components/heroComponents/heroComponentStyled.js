import styled from "styled-components";
import beer from '../../img/beer.jpg'

export const HeroContainer = styled.div`
  background-image: linear-gradient(
      180deg,
      rgba(47, 48, 58, 0.4) 100%,
      rgba(47, 48, 58, 0) 150%
    ),
    url(${beer});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%; 
  height: 100%;
  background-position: center;
`

export const HeroTitles = styled.h1`
display: block;
text-align:center;
padding: 50px;
font-size: 2em;
color: white;
`
