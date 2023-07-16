import styled from "styled-components";
import { Link } from "react-router-dom";

export const RecipeCardStyled = styled.li`
width: 400px;
height: 150px;
list-style:none;
overflow: hidden;

&.active {
border: 1px black solid;
scale: 1.02;
border-radius:4px;
background-color: lightblue;
}
`;

export const LinkStyled = styled(Link)`
text-decoration: none;
color: black;
display: flex;
align-items:center;
`;