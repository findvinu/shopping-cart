import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";

const Cart = () => {
  const { items } = useContext(CartContext);

  return (
    <div id="cart">
      {items.length === 0 && <p>No items in cart!</p>}
      {items.length > 0 && (
        <ul id="cart-items">
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;
            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span>{formattedPrice}</span>
                </div>
                <div className="cart-item-actions">
                  <button>-</button>
                  <span>item quantity</span>
                  <button>+</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>0000</strong>
      </p>
    </div>
  );
};

export default Cart;
