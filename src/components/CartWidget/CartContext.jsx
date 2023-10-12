import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
  // Buscar el producto en el carrito
  const productIndex = cart.findIndex((item) => item.id === itemId);
    
  if (productIndex !== -1) {
    const updatedCart = [...cart];
    const productToRemove = updatedCart[productIndex];

    if (productToRemove.quantity > 1) {
      // Si hay más de un producto, reducir la cantidad en uno
      productToRemove.quantity -= 1;
    } else {
      // Si hay solo uno, eliminarlo del carrito
      updatedCart.splice(productIndex, 1);
    }

    setCart(updatedCart);
  }
};

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
