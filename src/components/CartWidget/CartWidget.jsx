import React from "react";
import { useCartContext } from "../CartWidget/CartContext"; 
import "./CartWidget.css";

const CartWidget = () => {
  const { cart } = useCartContext(); 

  const cartCount = cart.length;

  return (
    <div className="carrito">
      <i className="bi bi-cart4"></i>
      {cartCount}
    </div>
  );
};

export default CartWidget;
