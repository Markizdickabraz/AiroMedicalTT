import { useLocation } from "react-router-dom";
import BackLink from "../../components/backLink/backLink";

export default function Beer() {
    const location = useLocation();
    const recipeItem = location.state?.recipeItem;
    console.log(recipeItem);
    
    return (
        <>
            <BackLink />
            <div>
            <h2>{recipeItem[0].name}</h2>
            <img src={recipeItem[0].image_url} alt={recipeItem[0].name} />
                <h3>Description: {recipeItem[0].description}</h3>
                <p>First Brewed: {recipeItem[0].first_brewed}</p>
                <h4>Ingredients</h4>
                <div>
                     <h5>Hops</h5>
                {recipeItem[0].ingredients.hops.map((item, index) => (
                    <p key={index}>{item.name}: {item.amount.value} {item.amount.unit }</p>
                ))}
                    <h5>Malt</h5>
                    {recipeItem[0].ingredients.malt.map((item, index) => (
                        <p key={index}>{item.name}: {item.amount.value} {item.amount.unit}</p>
                    ))}
               </div>
            </div>
            
    </>
    )
}