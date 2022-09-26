import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const handleOpenCart = () => {
    setCartIsShown(true);
  };

  const handleCloseCart = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={handleCloseCart} />}
      <Header onShowCart={handleOpenCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
