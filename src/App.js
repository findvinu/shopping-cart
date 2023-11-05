import { useState } from "react";
import Header from "./components/Header";
import Shop from "./components/Shop";
import { DUMMY_PRODUCTS } from "./dummy-products";
import Product from "./components/Product";
import { CartContext } from "./store/shopping-cart-context";

function App() {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  const handleAddItemToCart = () => {
    setShoppingCart = (prevShoppingCart) => {};
  };

  const handleUpdateCartItemQuantity = () => {
    console.log("update cart items quantity");
  };

  return (
    <CartContext.Provider value={shoppingCart}>
      <Header
        cart={shoppingCart}
        onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
      />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={handleAddItemToCart} />
            {console.log("product", product)}
          </li>
        ))}
      </Shop>
    </CartContext.Provider>
  );
}

export default App;
