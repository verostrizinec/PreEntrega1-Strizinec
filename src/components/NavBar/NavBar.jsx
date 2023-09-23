import './navbar.css'
import CartWidget from '../CartWidget/CartWidget' /* ubico el carrito en navbar */
import logo from '/img/logo-removebg-preview.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
        <nav className="container">
            <div className="wave">
<img className="logo" src={logo} alt="Logo Tritato" />

                    <CartWidget />
                
            </div>
        </nav>
        </>
    )
}

export default NavBar