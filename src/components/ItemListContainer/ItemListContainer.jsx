import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import { db } from "../../db/db";
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productCollection = collection(db, "productos"); // Asegúrate de que la colección sea "productos"
        const response = await getDocs(productCollection);

        const productsData = response.docs.map((productDoc) => ({
          id: productDoc.id,
          ...productDoc.data(),
        }));

        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
