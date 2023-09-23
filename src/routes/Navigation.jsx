import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {HomePage, ContactPage, CheckoutPage} from '../index'
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetail from "../components/ItemDetail/ItemDetail";
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
        path: '/category/:id',
        element: <ItemListContainer/>
    },
    {
        path: '/item/:id',
        element: <ItemDetailContainer/>
    },
    {
        path: '/nosotros',
        element: <HomePage/>
    },    
    {
        path: '/contact',
        element: <ContactPage/>
    }
])

const Navigation = () => {

        return (
        <RouterProvider router={routes}>
        </RouterProvider>
    )

}

export default Navigation