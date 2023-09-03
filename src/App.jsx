import "./App.css"
import Navbar from './components/NavBar/NavBar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {

    return (
        <main>
            <Navbar />
            <ItemListContainer greeting={"Aportando un granito de harina al mundo"}/>          
          
        </main>
    )
 
}

export default App