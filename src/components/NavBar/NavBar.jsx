import './navbar.css'
import Contador from '../CartWidget/CartWidget' /* ubico el carrito en navbar */

const Navbar = () => {
    return (
        <div className="navbar">
            <h3>Logo Tritato</h3>

            <div>
                <ul className='listContainer'>
                    <li>Principal</li>
                    <li>Elaboraciones</li>
                    <li>Nosotros</li>
                    <li>Comprar</li>
                    <li>Contacto</li>
                </ul>
            </div>
            <Contador />
        </div>
    )
}

export default Navbar