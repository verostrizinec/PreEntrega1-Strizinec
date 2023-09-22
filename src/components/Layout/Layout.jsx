import Navbar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"

const Layout = ({children}) => {
    return (
        <>
        <Navbar />
        <div>
            {children}
        </div>
        <Footer/>
        </>
    )
}

export default Layout