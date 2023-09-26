import { useEffect, useState } from "react"
import { productos } from "../products"
import CardCustom from "../Card/Card"
import Card from "../Card/Card.jsx"
import "../Card/Card.css"

const ItemListContainer = () => {
  
  //codigo para filtrado por categoria, despues de la consigna se borra
  const [filterByCategory, setFilterByCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setFilterByCategory(category);
  };

  const filteredProducts = filterByCategory
    ? productos.filter((producto) => producto.categoria === filterByCategory)
    : productos;

    // 
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
      

      {/* codigo para el filtrado por categoria*/}

      <div>
      <h1>Categoria de productos</h1>
      <ul className="Categorias">
        <li onClick={() => handleCategoryClick("Picadas")}>Picadas</li>
        <li onClick={() => handleCategoryClick("Brunchs")}>Brunchs</li>
        <li onClick={() => handleCategoryClick("Panificados")}>Panificados</li>
        <li onClick={() => handleCategoryClick("Pizza")}>Pizza</li>
        <li onClick={() => handleCategoryClick("Catering")}>Catering</li>
      </ul>

      <button onClick={() => setFilterByCategory(null)}>Limpiar filtro</button>

      <div className="Productos">
        {filteredProducts.map((producto) => (
          <div key={producto.id}>
            <h2>{producto.nombre}</h2>
            <p>Categoría: {producto.categoria}</p>
            <p>Precio: ${producto.precio}</p>
            <p>Descripción: {producto.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
)}

export default ItemListContainer