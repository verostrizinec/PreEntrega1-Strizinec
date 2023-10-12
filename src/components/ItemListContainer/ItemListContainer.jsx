import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../db/db";

const ItemListContainer = () => {
  // Estado para almacenar la lista de productos y el estado de carga…
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState((true));

  // Obtener el parámetro de la categoría desde React Router.
  const { idCategory } = useParams();

  useEffect(() => {

  // Configurar la referencia a la colección "productos" en Firebase.
  const productsRef = collection(db, "productos");

  // Obtener todos los productos de Firebase.
  getDocs (productsRef)
  .then((response) => {
  // Formatear los datos obtenidos en un array de objetos.
  const productsData = response.docs.map((productDoc) => ({
  id: productDoc.id,
  ...productDoc.data(),
  }));

  // Actualizar el estado con los productos obtenidos y marcar la carga como completa.
  setProducts (productsData);
  setLoading (false);
})
  .catch((error) => {  
    console.error ("Error al obtener los productos:", error);
  });

  // Crear una consulta para filtrar los productos por categoria (en este caso,
  const categoryQuery = query(
  productsRef,
  where ("categoria", "==", "Picadas")
  );

  // Obtener los productos filtrados por categoria.
  getDocs (categoryQuery)
  .then((response) => {

  // Formatear los datos obtenidos en un array de objetos.
  const filteredProductsData = response.docs.map((productDoc) => ({
  id: productDoc.id,
  ...productDoc.data(),
  }));

  console. log("Productos filtrados por categoría:", filteredProductsData);
})
  .catch((error) => {
  console.error(
  "Error al obtener los productos filtrados por categoría:", 
  error
  );
  });
 }, [idCategory]);

  return (
    <div className="productos-container">
      {isLoading ? (
        <div className="lds-heart">
          <div></div>
        </div>
      ) : (
        products.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))
      )}
    </div>
  );
};

export default ItemListContainer;
