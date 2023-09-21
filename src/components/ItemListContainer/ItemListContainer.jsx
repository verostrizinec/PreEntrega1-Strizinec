import { useEffect, useState } from "react"
import { productos } from "../products"
import Card from '../Card'
import CardCustom from "../Card"
import CartWidget from "../CartWidget/CartWidget"
import "../Card.css"

const ItemListContainer = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const getData = async () => {
        return await new Promise((resolve) => {
          setTimeout(() => {
            resolve(productos);
          }, 2000);
        });
      };
    
      useEffect(() => {
        getData().then((res) => {
          setProducts(res);
          setIsLoading(false);
        });
      }, []);

return (
<div className="productos-container">
          {
            isLoading
            ? <div className="lds-heart"><div></div></div>
            : 
            products.map((producto) => (
              <CardCustom
                key={producto.id}
                producto={producto}
              />
            ))}
      </div>
)}

export default ItemListContainer