import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productos } from "../../components/products";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useCartContext } from "../CartWidget/CartContext"; 
import "../ItemDetail/ItemDetail.css";
import "../CartWidget/CartWidget.css";

const ItemDetail = () => {
  const { idProduct } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart, removeFromCart, clearCart, cart } = useCartContext(); 

  useEffect(() => {
    setTimeout(() => {
      const selectedProduct = productos.find(
        (prod) => prod.id === parseInt(idProduct)
      );

      if (selectedProduct) {
        setProduct(selectedProduct);
        setIsLoading(false);
      } else {
        console.error("Producto no encontrado");
      }
    }, 2000);
  }, [idProduct]);

  return (
    <div>
      {isLoading ? (
        <div className="lds-heart">
          <div></div>
        </div>
      ) : (
        <>
          <div className="item-detail">
            <Card sx={{ maxWidth: 500, height: 500 }}>
              <Link to={`/product/${product.id}`}>
                <CardMedia
                  sx={{ height: 240 }}
                  image={product.imagen}
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
