import styled from "styled-components";

export const RecipeListGallery = styled.ul`
justify-content:center;
display: flex;
gap:15px;
flex-wrap: wrap;
`;

export const BtnContainer = styled.div`
padding-top:25px;
padding-bottom: 25px;
/* margin: 0 auto; */
display: flex;
justify-content: center;
`

export const DeleteRecipeBtn = styled.button`
width: 100px;
height: 35px;
cursor: pointer;
background-color: #fff;
border-radius: 4px;
border: 1px solid black;

&:hover{
    background-color: lightskyblue;
}
`;