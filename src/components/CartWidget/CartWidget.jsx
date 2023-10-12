import React from "react";
import { useCartContext } from "../CartWidget/CartContext"; 
import "./CartWidget.css";
import Swal from "sweetalert2";


const CartWidget = () => {
  const { cart } = useCartContext();

  const showCartSummary = () => {
    Swal.fire({
      title: "Resumen del Carrito",
      html: generateCartSummary(cart), // Función para generar el contenido
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: "Realizar compra",
      cancelButtonText: "Cancelar",
    });
  };

  // Función para generar el contenido del resumen del carrito
  const generateCartSummary = (cart) => {
    if (cart.length === 0) {
      return "El carrito está vacío";
    }

    // Agrupa los productos por ID y calcula la cantidad total de cada producto
    const groupedProducts = cart.reduce((grouped, product) => {
      const productKey = `${product.id}`;
      if (grouped[productKey]) {
        grouped[productKey].count++;
      } else {
        grouped[productKey] = { ...product, count: 1 };
      }
      return grouped;
    }, {});

    // Genera una lista con detalles de productos en el carrito
    const cartDetails = Object.values(groupedProducts).map((product) => `
      <div>
        <p>${product.nombre} x${product.count}</p>
        <p>Precio: $${product.precio} (Total: $${product.precio * product.count})</p>
      </div>
    `);

    // Calcula el valor total del carrito
    const totalPrice = cart.reduce((total, product) => total + product.precio, 0);

    return `
      <div>
        ${cartDetails.join("")}
      </div>
      <p>Total: $${totalPrice}</p>
    `;
  };

  return (
    <div className="carrito" onClick={showCartSummary}>
      <i className="bi bi-cart4"></i>
      {cart.length}
    </div>
  );
};

export default CartWidget;
