import { DeleteRecipeBtn, RecipeCardStyled } from "./RecipeCardStylred";
import { useState } from "react";
import useRecipeStore from '../../zustand/RecipesStore';

export default function RecipeCard({ recipe }) { 
    const [isActive, setIsActive] = useState(false);
    const { deleteRecipe } = useRecipeStore();
    
function toggleClass () {
    setIsActive(prevState => !prevState);
  };

    function handleClick(event) {
        if (event.button === 2) {
        event.preventDefault();
            toggleClass();
        }
    }
    
    function deleteBtn() {
        deleteRecipe(recipe.id);
    }

    const isActiveClass = isActive ? 'active' : ' ';
    
    return (
        <RecipeCardStyled className={isActiveClass} onContextMenu={handleClick} id={recipe.id}>
            <img style={{padding:5}} src={recipe.image_url} alt={recipe.name} width={50} height={120} />
            <div style={{paddingLeft:15}}>
                <h4>name: {recipe.name}</h4>
                <p>recipe: </p>
            </div>
            {isActive && <DeleteRecipeBtn id={recipe.id} onClick={deleteBtn}>delete</DeleteRecipeBtn>}
        </RecipeCardStyled>
    )
}