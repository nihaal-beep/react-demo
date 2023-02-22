import { useState } from "react";
import Cart from "./components/cart/Cart"
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {

  const[cartVisible,setCartVisible] = useState(false);

  function showCartHandler()
  {
    setCartVisible(true)
  }

  function hideCartHandler()
  {
    setCartVisible(false)
  }
  return (
    <CartProvider>

      <Header  onShowCart = {showCartHandler} />
      {cartVisible && <Cart onHideCart ={hideCartHandler}/>}
      <Meals />
    </CartProvider>
  );
}

export default App;
