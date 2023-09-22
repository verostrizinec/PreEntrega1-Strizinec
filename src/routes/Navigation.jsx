import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {HomePage, ContactPage, CheckoutPage} from '../index'
import Item from "../components/Item/Item";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Navbar from "../components/NavBar/NavBar";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import ItemList from "../components/ItemList/ItemList";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <ItemListContainer/>
    },
    {
        path: '/product/:idProduct',
        element: <ItemDetail/>
    },
    {
        path: '/home',
        element: <HomePage/>
    },
    {
        path: '/contact',
        element: <ContactPage/>
    }
])

const Navigation = () => {

        return (
        <RouterProvider router={routes}/>
    )

}

export default Navigation