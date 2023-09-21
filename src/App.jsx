import { productos } from "./components/products"
import "./App.css"
import Navbar from './components/NavBar/NavBar'
import "./components/card.css"
import ItemList from "./components/ItemList/ItemList"
import Navigation from "./routes/Navigation"
import Footer from "./components/Footer/Footer"
import Title from "./components/Title/Title"


function App() {

  return (
    <div>
    <Navbar/>
    <Title greeting={"Aportando un granito de harina al mundo.. 🍞"}/>
    <Navigation />
    <Footer />
    </div>
  );
}
  
  export default App;