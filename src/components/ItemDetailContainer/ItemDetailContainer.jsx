import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../products";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { idProduct } = useParams();
  const [itemToShow, setItemToShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula una solicitud de API con un retardo de 2 segundos
    setTimeout(() => {
      const item = productos.find((producto) => producto.id === idProduct);
      if (item) {
        setItemToShow(item);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    }, 2000);
  }, [idProduct]);

  return (
    <div>
      <h1>Detalle del Producto</h1>
      {isLoading ? (
        <div>Cargando...</div>
      ) : itemToShow ? (
        <ItemDetail item={itemToShow} />
      ) : (
        <div>No se encontró el producto.</div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
