import './navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import logo from '/img/logo-removebg-preview.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="container">
            <div className="wave">
                <Link to="/"> {/* Agrega este enlace para redirigir a la página principal */}
                    <img className="logo" src={logo} alt="Logo Tritato" />
                </Link>
                <ul className='listContainer'>
                    <li><Link to="/">Principal</Link></li> {/* Enlace a la página principal */}
                    <li><Link to="/category/:id">Comprar</Link></li> {/* Enlace a la página de compra (ajusta la URL según corresponda) */}
                    <li><Link to="/nosotros">Nosotros</Link></li> {/* Enlace a la página "Nosotros" (ajusta la URL según corresponda) */}
                    <li><Link to="/elaboraciones">Elaboraciones</Link></li> {/* Enlace a la página "Elaboraciones" (ajusta la URL según corresponda) */}
                    <li><Link to="/contacto">Contacto</Link></li> {/* Enlace a la página "Contacto" (ajusta la URL según corresponda) */}
                    <CartWidget />
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
