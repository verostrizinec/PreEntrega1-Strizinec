// Checkout.jsx
import React, { useContext } from "react";
import { useCartContext } from "../components/CartWidget/CartContext";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../db/db";

const Checkout = () => {
  const { cart } = useCartContext(); // No necesitas totalPrice aquí
  const { register, handleSubmit } = useForm();

  const comprar = async (data) => {
    const pedido = {
      cliente: data,
      productos: cart,
    };

    // Guarda el pedido en Firebase y obtén el ID del documento generado
    const orderDocRef = await addDoc(collection(db, "orders"), pedido);

    // Obtiene el ID del pedido
    const orderId = orderDocRef.id;

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
        // Muestra el ID del pedido en el mensaje
        Swal.fire(`¡Compra finalizada! Order ID: ${orderId}`, "Gracias por tu compra.", "success");
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
