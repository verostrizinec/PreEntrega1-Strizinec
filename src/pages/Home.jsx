import photo from '../assets/images/nosotros.jpeg'
import "./Home.css"

const Home = () => {

    return (
        <div className='home'>
        <h1 className="home-nosotros">Sobre Nosotros</h1>
        <p className="texto-nosotros">Nuestro amor por la comida, por siempre ser anfitriones, y el deseo de muchos amigos por enviarles algo rico en plena pandemia mundial; nos impulsaron a dar un paso adelante y apostar por este lindo proyecto llamado Tritato 🌾🍞</p>

        <p className="texto-nosotros-part2">Creemos firmemente que no hay demostración mas grande de Amor, que cocinarle a alguien; y también, que no hay amor mas puro por la Familia que uno construye ❤️</p>
        <img className="sobre-nosotros" src={photo} alt="Familia Tritato" />
        </div>
    )
}

export default Home