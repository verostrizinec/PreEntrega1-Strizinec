import logo from '../../assets/images/logo-removebg-preview.png'
import "../Footer/footer.css"

const Footer = () => {
    const instagram = "https://www.instagram.com/tritato_/?hl=es"

    return (
        <>
    <footer className="footer-container">
        <div className="footer-logo">
        <img src={logo} alt="logo" width={200} className="tada"/>
        </div>
        
        <div className="footer-social">
            <h3 className="titulo-social" alt="Seguinos en Instagram">Redes Sociales</h3>
        <a href={instagram} target="_blank"><i className="bi bi-instagram"></i></a>
        </div>
        </footer>
        <p className="footer-derechos">2022 Veronica Strizinec, todos los derechos reservados.</p>
        </>

    )
}

export default Footer