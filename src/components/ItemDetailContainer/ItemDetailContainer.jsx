import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

import { db } from "../../db/db";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  // Estado para almacenar la información del producto y el estado de carga
  const [product, setProduct] = useState({});
  const [isLoading, setLoading] = useState(true);

  // Obtener el ID del producto de los parámetros de la URL
  const { idProduct } = useParams();

  useEffect(() => {
    // Crear una referencia al documento del producto en Firestore
    const productRef = doc(db, "productos", idProduct); // Asegúrate de que la colección sea "productos"

    // Utilizar la función getDoc para obtener la información de un solo producto
    getDoc(productRef).then((response) => {
      // Verificar si el producto con ese ID existe en la base de datos
      if (response.exists()) {
        // Si existe, darle formato y almacenar en el estado
        const productData = { id: response.id, ...response.data() };
        setProduct(productData);
        setLoading(false);
      } else {
        console.log("El producto no existe en la base de datos");
      }
    });
  }, [idProduct]);

  return (
    <div>
      {isLoading ? (
        <div>Cargando...</div>
      ) : (
        <ItemDetail item={product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
