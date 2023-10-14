import React, { createContext, useContext, useState } from "react";

// Crear un contexto para el carrito
const CartContext = createContext();

// Crear un hook personalizado para acceder al contexto del carrito
export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  
  // Estado del carrito, inicializado como un array vacío
  const [cart, setCart] = useState([]);

  // Función para agregar un elemento al carrito
  const addToCart = (item) => {
    // Agregar el nuevo elemento al carrito
    setCart([...cart, item]);
  };

  // Función para eliminar un elemento del carrito
  const removeFromCart = (itemId) => {
    // Buscar el producto en el carrito por su ID
    const productIndex = cart.findIndex((item) => item.id === itemId);

    if (productIndex !== -1) {
      // Crear una copia del carrito
      const updatedCart = [...cart];
      // Obtener el producto que se va a eliminar
      const productToRemove = updatedCart[productIndex];

      if (productToRemove.quantity > 1) {
        // Si hay más de un producto, reducir la cantidad en uno
        productToRemove.quantity -= 1;
      } else {
        // Si hay solo uno, eliminarlo del carrito
        updatedCart.splice(productIndex, 1);
      }

      // Actualizar el estado del carrito
      setCart(updatedCart);
    }
  };

  // Función para vaciar completamente el carrito
  const clearCart = () => {
    // Establecer el carrito como un array vacío
    setCart([]);
  };

  // Proporcionar el contexto del carrito a los componentes hijos
  return (
    <CartContext.Provider
      value={{
        cart, // El estado actual del carrito
        addToCart, // Función para agregar elementos al carrito
        removeFromCart, // Función para eliminar elementos del carrito
        clearCart, // Función para vaciar completamente el carrito
      }}
    >
      {children} {/* Los componentes hijos se envuelven con el contexto */}
    </CartContext.Provider>
  );
};
