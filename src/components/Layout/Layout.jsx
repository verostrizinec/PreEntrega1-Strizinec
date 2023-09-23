import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Layout = ({children}) => {
    return (
        <>
        <NavBar />
        <div>
            {children}
        </div>
        <Footer/>
        </>
    )
}

export default Layout