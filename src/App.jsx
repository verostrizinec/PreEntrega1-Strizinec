import { productos } from "./components/products"
import "./App.css"
import Navbar from './components/NavBar/NavBar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { useEffect, useState } from "react"
import Card from './components/Card'
import CardCustom from "./components/Card"
import CartWidget from "./components/CartWidget/CartWidget"
import "./components/card.css"

function App() {
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
      <main>
        <Navbar />
        <ItemListContainer greeting={"Aportando un granito de harina al mundo.. 🍞"} />
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
      </main>
    );
  }
  
  export default App;