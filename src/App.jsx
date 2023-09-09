import { productos } from "./components/products"
import "./App.css"
import Navbar from './components/NavBar/NavBar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { useEffect } from "react"
import Card from './components/Card'
import CardCustom from "./components/Card"

function App() {
    return (
        <main>
            <Navbar />
            <ItemListContainer greeting={"Aportando un granito de harina al mundo.. 🍞"}/>  
            <CardCustom />     
            <CardCustom /> 
            <CardCustom /> 
            <CardCustom /> 
            <CardCustom /> 
            <CardCustom /> 
            <CardCustom /> 
            <CardCustom /> 
            <CardCustom /> 
            <CardCustom /> 
            <CardCustom /> 
            <CardCustom /> 
            <CardCustom /> 
            <CardCustom /> 
            <CardCustom />    
          
        </main>
    )
 
}

export default App