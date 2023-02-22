import "./cart.css"
import Modal from "../ui/Modal"
import CartContext from "../../store/cart-context"
import { useContext } from "react"
import CartItem from "./CartItem"

function Cart(props)
{

    const ctx = useContext(CartContext)
    console.log(ctx.items)
    /*const dummy_cart = [
        {
            id:"c1",
            name:"placeholder",
            amount:2,
            price:10
        }
    ]*/

    function removeHandler(id)
    {
        ctx.removeItem(id)
    }

    function addHandler(item)
    {
        //ctx.addItem(item)
        ctx.addItem({...item,amount:1})
        console.log(item)
    }
    const cart_items = ctx.items.map(item=><CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={removeHandler.bind(null,item.id)} onAdd={addHandler.bind(null,item)}/>)
    return(
        <Modal onHideCart={props.onHideCart}>
            <ul className="cart-items">
                {cart_items}
            </ul>
            
            <div className="total">
                <span>Total Amount</span>
                <span>${ctx.totalAmount.toFixed(2)}</span>
            </div>
            <div className="actions">
                <button className="button--alt" onClick = {props.onHideCart}>Close</button>
                {ctx.items.length !== 0 &&<button className="button-con">Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;