import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {HomePage, ContactPage, ItemListContainer, ItemDetail, Elaboraciones, ItemDetailContainer} from '../index'

const Navigation = () => {

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <ItemListContainer/>
        },
        {
            path: '/product/:idProduct',
            element: <ItemDetail/>
        },
        { //category dps de la consigna se borra
            path: '/category/:id',
            element: <ItemListContainer/>
        },
        {
            path: '/item/:id',
            element: <ItemDetailContainer/>
        },
        {
            path: '/elaboraciones',
            element: <Elaboraciones/>
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

        return (
        <RouterProvider router={routes}>
        </RouterProvider>
    )

}

export default Navigation