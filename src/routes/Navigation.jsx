import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {HomePage, ContactPage, CheckoutPage} from '../index'
import Card from '../components/Card'
import ItemList from "../components/ItemList/ItemList";
import Item from "../components/Item/Item";
import Title from "../components/Title/Title";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Navigation = () => {

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <ItemListContainer/>
        },
        {
            path: '/product/idProduct',
            element: <Item/>
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
    return (
        <RouterProvider router={routes}/>
    )

}

export default Navigation