import { RecipeCardStyled } from "./RecipeCardStylred";

export default function RecipeCard({recipe}) { 
    // console.log(recipe)
    return (
        <RecipeCardStyled>
            <img src={recipe.image_url} alt={recipe.name} width={150} height={250} />
            <p>{recipe.name}</p>
        </RecipeCardStyled>
    )
}