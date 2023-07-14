import styled from "styled-components";

export const RecipeCardStyled = styled.li`
position: relative;
width: 400px;
height: 150px;
display: flex;
list-style:none;

&.active {
border: 1px black solid;
scale: 1.02;
border-radius:4px;
background-color: lightblue;
}
`;

export const DeleteRecipeBtn = styled.button`
width: 50px;
height: 25px;
cursor: pointer;
position: absolute;
bottom:5px;
right:5px;
background-color: #fff;
border-radius: 4px;
border: 1px solid black;

&:hover{
    background-color: lightskyblue;
    width: 52px;
    height: 27px;
}
`;
