import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart";

const CartModal = forwardRef(
  ({ cartItems, onUpdateCartItemQuantity, title, action }, ref) => {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
      return {
        open: () => {
          dialog.current.showModal();
        },
      };
    });
    return (
      <dialog id="modal" ref={dialog}>
        <h2>Modal</h2>
        <Cart />
        <form>fORMS</form>
      </dialog>
    );
  }
);

export default CartModal;
