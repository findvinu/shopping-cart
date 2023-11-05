const Cart = () => {
  return (
    <div id="cart">
      <p>No items in cart!</p>

      <ul id="cart-items">
        <li>
          <div>
            <span>Item Name</span>
            <span>Price</span>
          </div>
          <div className="cart-item-actions">
            <button>-</button>
            <span>item quantity</span>
            <button>+</button>
          </div>
        </li>
      </ul>
      <p id="cart-total-price">
        Cart Total: <strong>0000</strong>
      </p>
    </div>
  );
};

export default Cart;
