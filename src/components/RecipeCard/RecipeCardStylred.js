import styled from "styled-components";
import { Link } from "react-router-dom";

export const RecipeCardStyled = styled.div`
position: relative;
/* width: 70%; */
height: 100%;
list-style:none;
border: 1px solid black;
border-radius:4px;
padding-left: 10px;

&.active {
border-radius:4px;
background-color: lightblue;
}
`;

export const LinkStyled = styled(Link)`
height: 100%;
padding-top:10px;
text-decoration: none;
color: black;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

&:hover {
    scale: 1.02;
}
`;

export const HandBtn = styled.button`
position: absolute;
bottom: 5px;
right: 5px;
display: flex;
justify-content:center;
align-items:center;
padding: 0;
width: 40px;
height: 40px;
border: none;
border-radius: 50%;
background-color:whitesmoke;
`