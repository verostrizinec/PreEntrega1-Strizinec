import React, { useContext } from "react";
import { useCartContext } from "../components/CartWidget/CartContext";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Checkout = () => {
  const { cart, totalPrice } = useCartContext();
  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: cart,
      total: totalPrice,
    };

    // Muestra los datos del cliente y los productos en la consola
    console.log("Datos del cliente:", pedido.cliente);
    console.log("Productos del pedido:", pedido.productos);

    // Abre el modal SweetAlert2
    Swal.fire({
      title: "Confirmar Compra",
      text: "¿Estás seguro de que deseas finalizar la compra?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, finalizar compra",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        // Realiza aquí la lógica para finalizar la compra, como enviar los datos del pedido al servidor, etc.
        console.log("Compra finalizada");
        // Cierra el modal SweetAlert2
        Swal.fire("¡Compra finalizada!", "Gracias por tu compra.", "success");
      }
    });
  };

  return (
    <div className="container">
      <h1 className="main-title">Finalizar Compra</h1>
      <form className="formulario" onSubmit={handleSubmit(comprar)}>
        <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
        <input type="email" placeholder="Ingresá tu email" {...register("email")} />
        <input type="phone" placeholder="Ingresá tu telefono" {...register("telefono")} />
        <button className="enviar" type="submit">
          Comprar
        </button>
      </form>
    </div>
  );
};

export default Checkout;
