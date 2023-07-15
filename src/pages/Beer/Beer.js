import { useLocation } from "react-router-dom";
import BackLink from "../../components/backLink/backLink";
import { StyleImg } from "./BeerStyled";

export default function Beer() {
    const location = useLocation();
    const recipeItem = location.state?.recipeItem;
    console.log(recipeItem);
    
    return (
        <>
            <BackLink />
            <div style={{paddingBottom: 20}}>
            <h2 style={{textAlign:'center'}}>{recipeItem[0].name}</h2>
                <div style={{ display:'flex', gap: 20, alignItems:'center'}}>
                <StyleImg src={recipeItem[0].image_url} alt={recipeItem[0].name} />
                <div>
                <h3>Description: {recipeItem[0].description}</h3>
                        <p>First Brewed: {recipeItem[0].first_brewed}</p>
                        <h4>Food pairing: </h4>
                        {recipeItem[0].food_pairing.map((item) => 
                            <p>{item}</p>
                        )}
                    </div>
            </div>
                <h4 style={{textAlign:'center'}}>Ingredients</h4>
                <div style={{display:'flex', justifyContent:'center', gap: 100}}>
                    <div>
                        <h5>Hops</h5>
                {recipeItem[0].ingredients.hops.map((item, index) => (
                    <p key={index}>{item.name}: {item.amount.value} {item.amount.unit }</p>
                ))}</div>
                    <div>
                        <h5>Malt</h5>
                    {recipeItem[0].ingredients.malt.map((item, index) => (
                        <p key={index}>{item.name}: {item.amount.value} {item.amount.unit}</p>
                    ))}
                    </div>
                </div>
                    <h4 style={{textAlign:'center'}}>Method</h4>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 100 }} >
                        <p>Fermentation: temp {recipeItem[0].method.fermentation.temp.value} {recipeItem[0].method.fermentation.temp.unit}</p>
                    <p>Mash Temp: Duration {recipeItem[0].method.mash_temp[0].duration}, Temp {recipeItem[0].method.mash_temp[0].temp.value} {recipeItem[0].method.mash_temp[0].temp.unit}</p>
                </div>
                <h3 style={{textAlign:'center'}}>Bon appetit!</h3>
            </div>
            
    </>
    )
}