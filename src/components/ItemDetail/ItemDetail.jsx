import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useCartContext } from "../CartWidget/CartContext";
import "../ItemDetail/ItemDetail.css";
import "../CartWidget/CartWidget.css";
import { db } from "../../db/db.js";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

const ItemDetail = () => {
  const { idProduct } = useParams(); // Obtiene el parámetro "idProduct" de React Router
  const [product, setProduct] = useState({}); // Estado para almacenar los datos del producto
  const [products, setProducts] = useState([]); // Estado para almacenar la lista de productos
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar la carga de datos
  const { addToCart, removeFromCart, clearCart, cart } = useCartContext(); // Obtiene funciones y datos del contexto del carrito

  useEffect(() => {
    const getProductData = async () => {
      try {
        const productRef = doc(db, "productos", idProduct); // Referencia al documento del producto en la base de datos
        const docSnapshot = await getDoc(productRef); // Obtiene el documento del producto

        if (docSnapshot.exists()) {
          const selectedProduct = docSnapshot.data(); // Obtiene los datos del producto
          setProduct(selectedProduct); // Almacena los datos del producto en el estado
          setIsLoading(false); // Finaliza la carga
        } else {
          console.error("Producto no encontrado"); // Registra un mensaje de error si el producto no existe
          setIsLoading(false); // Finaliza la carga
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error); // Registra un mensaje de error si ocurre un error al obtener el producto
        setIsLoading(false); // Finaliza la carga
      }
    };

    getProductData();
  }, [idProduct]);

  useEffect(() => {
    // Configurar la referencia a la colección "productos" en Firebase.
    const productsRef = collection(db, "productos");

    // Obtener todos los productos de Firebase.
    getDocs(productsRef)
      .then((response) => {
        // Formatear los datos obtenidos en un array de objetos.
        const productsData = response.docs.map((productDoc) => ({
          id: productDoc.id,
          ...productDoc.data(),
        }));

        // Actualizar el estado con los productos obtenidos y marcar la carga como completa.
        setProducts(productsData);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  }, []);

  return (
    <div>
      {isLoading ? ( // Muestra un indicador de carga mientras se obtienen los datos
        <div className="lds-heart">
          <div></div>
        </div>
      ) : (
        <>
          <div className="item-detail">
            <Card sx={{ maxWidth: 500 }}>
              <Link to={`/product/${product.id}`}>
                <CardMedia
                  sx={{ height: 240 }}
                  image={`${product.imagen}`}
                  title={product.nombre}
                />
              </Link>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="bi bi-dot"></i>
                  {product.descripcion}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="bi bi-dot"></i>
                  Precio: $ {product.precio}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="bi bi-dot"></i>
                  {product.contenido}
                </Typography>
              </CardContent>
              <CardActions>
                <i className="bi bi-cart4"></i>
                <Button size="small" onClick={() => addToCart(product)}>
                  +
                </Button>
                <Button size="small" onClick={() => removeFromCart(product.id)}>
                  -
                </Button>
                <Button size="small" onClick={() => clearCart()}>
                  Vaciar Carrito
                </Button>
              </CardActions>
              <Link to="/">Volver a la lista de productos</Link>
            </Card>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemDetail;
