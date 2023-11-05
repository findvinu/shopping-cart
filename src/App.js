import { useState } from "react";
import Header from "./components/Header";
import Shop from "./components/Shop";
import { DUMMY_PRODUCTS } from "./dummy-products";

function App() {
  const [shoppingCard, setShoppingCart] = useState({
    item: [],
  });

  return (
    <>
      <Header />
      <Shop />
    </>
  );
}

export default App;
