import './navbar.css'
import CartWidget from '../CartWidget/CartWidget' /* ubico el carrito en navbar */
import logo from '../../../public/img/logo-removebg-preview.png'

const Navbar = () => {
    return (
        <div className="navbar">
            <img className="logo" src={logo} alt="Logo Tritato" />

            <div>
                <ul className='listContainer'>
                    <li>Principal</li>
                    <li>Elaboraciones</li>
                    <li>Nosotros</li>
                    <li>Comprar</li>
                    <li>Contacto</li>
                </ul>
            </div>
            <CartWidget />
        </div>
    )
}

export default Navbar