import { useRef, useContext } from "react";
import CartModal from "./CartModal";
import Logo from "../assets/logo.png";
import { CartContext } from "../store/shopping-cart-context";

const Header = () => {
  const { items } = useContext(CartContext);
  const modal = useRef();
  const cartQuantity = items.length;

  const handleOpenCartClick = () => {
    modal.current.open();
  };

  let modalAction = <button>Close</button>;

  if (cartQuantity > 0) {
    modalAction = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal ref={modal} title="Your Cart" actions={modalAction} />
      <header id="main-header">
        <div id="main-title">
          <img src={Logo} alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
};

export default Header;
