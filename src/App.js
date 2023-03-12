import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./components/store/CartProvider";

function App() {
  const [showcart, setShowCart] = useState(false);

  const showCartHan = () => {
    setShowCart(true);
  };

  const hideCartHan = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {showcart && <Cart onClosed={hideCartHan} />}
      <Header onShowCart={showCartHan} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
