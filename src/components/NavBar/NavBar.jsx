import './navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import logo from '/img/logo-removebg-preview.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const toggleMenu = () => {
    const menu = document.querySelector('ul');
    menu.classList.toggle('show');
  };

  return (
    <nav className="container">
      <div className="wave">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo Tritato" />
        </Link>
        <div className="menu-toggle" id="menuToggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul>
          <Link to="/" className="lista">Principal</Link>
          <Link to="/category/:id" className="lista">Comprar</Link>
          <Link to="/nosotros" className="lista">Nosotros</Link>
          <Link to="/elaboraciones" className="lista">Elaboraciones</Link>
          <Link to="/contacto" className="lista">Contacto</Link>
          <CartWidget />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
