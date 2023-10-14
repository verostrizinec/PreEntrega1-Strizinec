import React from "react";
import { useCartContext } from "../CartWidget/CartContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CartWidget = () => {
  // Se usa el contexto del carrito para acceder a datos y funciones relacionados con el carrito
  const { cart, clearCart, totalPrice } = useCartContext();

  // Obtengo el objeto para navegar a otras páginas
  const navigate = useNavigate();

  // Función para mostrar un resumen del carrito con opciones
  const showCartSummary = () => {
    Swal.fire({
      title: "Resumen del Carrito",
      html: generateCartSummary(cart),
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: "Finalizar compra",
      cancelButtonText: "Cancelar",
      showDenyButton: true,
      denyButtonText: "Vaciar Carrito",
    }).then((result) => {
      if (result.isConfirmed) {

        // Navega a la página de finalización de compra y pasa totalPrice como parte de la navegación
        navigate("/checkout", { totalPrice });
      } else if (result.isDenied) {

        // Limpia el carrito
        clearCart();
        Swal.fire("Carrito Vacío", "El carrito ha sido vaciado.", "info");
      }
    });
  };

  // Función para generar un resumen detallado del carrito
  const generateCartSummary = (cart) => {
    if (cart.length === 0) {
      return "El carrito está vacío";
    }

    // Agrupar los productos del carrito por categoría y calcula los totales
    const groupedByCategory = cart.reduce((grouped, product) => {
      const productCategory = product.categoria;
      if (!grouped[productCategory]) {
        grouped[productCategory] = {
          products: [],
          total: 0,
        };
      }
      const categoryGroup = grouped[productCategory];
      const existingProductIndex = categoryGroup.products.findIndex(
        (p) => p.id === product.id
      );
      if (existingProductIndex !== -1) {
        categoryGroup.products[existingProductIndex].count++;
      } else {
        categoryGroup.products.push({ ...product, count: 1 });
      }
      categoryGroup.total += product.precio;
      return grouped;
    }, {});

    // Generar los detalles del carrito y calcular el precio total
    const cartDetails = Object.entries(groupedByCategory).map(
      ([category, categoryData]) => {
        const categoryProductsDetails = categoryData.products
          .map((product) => `
            <p>${product.nombre} x${product.count}</p>
            <p>Precio: $${product.precio} (Total: $${product.precio * product.count})</p>
          `)
          .join("");
        return `
          <div>
            <h3>${category}</h3>
            ${categoryProductsDetails}
            <p>Total en ${category}: $${categoryData.total}</p>
          </div>
        `;
      }
    );

    const totalPrice = cart.reduce((total, product) => total + product.precio, 0);

    return `
      <div>
        ${cartDetails.join("")}
      </div>
      <p>Total de la compra: $${totalPrice}
    `;
  };

  // Renderizo el icono del carrito y la cantidad de elementos en el carrito
  return (
    <div className="carrito" onClick={showCartSummary}>
      <i className="bi bi-cart4"></i>
      {cart.length}
    </div>
  );
};

export default CartWidget;
