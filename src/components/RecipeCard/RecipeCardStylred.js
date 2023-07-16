import styled from "styled-components";
import { Link } from "react-router-dom";

export const RecipeCardStyled = styled.li`
width: 260px;
height: 200px;
list-style:none;
border: 1px solid black;
border-radius:4px;
padding-left: 15px;

&.active {
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