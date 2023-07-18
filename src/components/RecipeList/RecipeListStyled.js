import styled from "styled-components";

export const RecipeListGallery = styled.div`
display: flex;
justify-content:space-around;
padding-top:20px;
`;

export const BtnContainer = styled.div`
padding-top:25px;
padding-bottom: 25px;
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

export const ArrowBtnContainer = styled.div`
padding-top: 20px;
display: flex;
gap: 30px;
justify-content:center;
`

export const ArrowBtn = styled.button`
border:none;
background-color: transparent;
width: 80px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
border-radius:4px;

&:hover{
    background-color: lightskyblue;
}
`