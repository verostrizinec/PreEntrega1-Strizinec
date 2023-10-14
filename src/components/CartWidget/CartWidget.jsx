import React from "react";
import { useCartContext } from "../CartWidget/CartContext"; 
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CartWidget = () => {
  const { cart, clearCart } = useCartContext();
  const navigate = useNavigate();

  const showCartSummary = () => {
    Swal.fire({
      title: "Resumen del Carrito",
      html: generateCartSummary(cart), 
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: "Finalizar compra",
      cancelButtonText: "Cancelar",
      showDenyButton: true, // Agregamos el botón para vaciar el carrito
      denyButtonText: "Vaciar Carrito",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/checkout");
      } else if (result.isDenied) {
        clearCart();
        Swal.fire("Carrito Vacío", "El carrito ha sido vaciado.", "info");
      }
    });
  };

  const generateCartSummary = (cart) => {
    if (cart.length === 0) {
      return "El carrito está vacío";
    }

    const groupedByCategory = cart.reduce((grouped, product) => {
      const productCategory = product.categoria;
      if (!grouped[productCategory]) {
        grouped[productCategory] = [];
      }
      grouped[productCategory].push(product);
      return grouped;
    }, {});

    const cartDetails = Object.entries(groupedByCategory).map(([category, products]) => {
      const categoryDetails = products.map((product) => `
        <p>${product.nombre} x${product.count}</p>
        <p>Precio: $${product.precio} (Total: $${product.precio * product.count})</p>
      `).join("");

      return `
        <div>
          <h3>${category}</h3>
          ${categoryDetails}
        </div>
      `;
    });

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
