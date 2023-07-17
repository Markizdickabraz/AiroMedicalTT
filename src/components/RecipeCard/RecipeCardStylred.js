import styled from "styled-components";
import { Link } from "react-router-dom";

export const RecipeCardStyled = styled.li`
width: 230px;
height: 220px;
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
padding-top:10px;
text-decoration: none;
color: black;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;