import { RecipeCardStyled } from "./RecipeCardStylred";

export default function RecipeCard({ recipe }) { 
    
    function handleClick(event) {
        if (event.button === 2) {
        event.preventDefault();
    // Код, який буде виконуватися при натисканні правою кнопкою миші
      console.log('tratata')
  }
}

    return (
        <RecipeCardStyled onContextMenu={handleClick}>
            <img src={recipe.image_url} alt={recipe.name} width={50} height={120} />
            <div style={{paddingLeft:15}}>
                <h4>name: {recipe.name}</h4>
                <p>recipe: </p>
            </div>
        </RecipeCardStyled>
    )
}