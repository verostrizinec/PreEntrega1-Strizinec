import './navbar.css'
import CartWidget from '../CartWidget/CartWidget' /* ubico el carrito en navbar */
import logo from '../../../public/img/logo-removebg-preview.png'

const Navbar = () => {
    return (
        <nav className="container">
            <div className="wave">
            <img className="logo" src={logo} alt="Logo Tritato" />
                <ul className='listContainer'>
                    <li>Principal</li>
                    <li>Elaboraciones</li>
                    <li>Nosotros</li>
                    <li>Comprar</li>
                    <li>Contacto</li>
                    <CartWidget />
                </ul>
            </div>
        </nav>
    )
}

export default Navbar