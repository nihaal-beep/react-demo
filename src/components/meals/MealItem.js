import "./mealItem.css"
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../store/cart-context";


function MealItem(props)
{
    const ctx = useContext(CartContext);
    function addToCartHandler(amount){
        ctx.addItem({
            id:props.item.id,
            name:props.item.name,
            amount:amount,
            price:props.item.price
        })
    }

    return(
        <li className="box">
            <div>
            <h3>
                {props.item.name}
            </h3>
            <p className="description">
                {props.item.description}
            </p>
            
            <h2 className="price">
                ${props.item.price.toString()}
            </h2>
            </div>
            <MealItemForm id={props.item.id} onAddToCart={addToCartHandler}/>
        </li>
    )
}

export default MealItem;