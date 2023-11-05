import { useRef } from "react";
import CartModal from "./CartModal";
import Logo from "../assets/logo.png";

const Header = ({ cart, onUpdateCartItemQuantity }) => {
  const modal = useRef();
  const cartQuantity = cart.items.length;

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
      <CartModal
        ref={modal}
        cartItems={cart.items}
        onUpdateCartItemQuantity={onUpdateCartItemQuantity}
        title="Your Cart"
        action={modalAction}
      />
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
