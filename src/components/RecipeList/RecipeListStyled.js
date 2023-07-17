import styled from "styled-components";

export const RecipeListGallery = styled.div`
display: flex;
justify-content:space-around;
`;

export const BtnContainer = styled.div`
position: absolute;
bottom: 0.1;
left: 50%;
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
