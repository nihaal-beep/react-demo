import { Fragment } from "react";
import "./header.css"
import mealsImage from "../../assets/meals.jpg"
import CartButton  from "./CartButton";

function Header(props)
{
    return(
        <Fragment>
            <header className="header">
                <h1>React Meals</h1>
                <CartButton onClick = {props.onShowCart}/>
            </header>
            <div className="main-image">
                <img src = {mealsImage} alt='meh'/>
            </div>
        </Fragment>
    )
}

export default Header;