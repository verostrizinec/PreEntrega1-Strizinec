import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CartWidget from '../components/CartWidget/CartWidget'
import '../../src/components/card.css';

const CardCustom = ({ producto }) => {
    return (
      <div className='productos-container'>
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={producto.imagen}
            title={producto.nombre}
          />
          <CardContent> 
            <Typography gutterBottom variant="h5" component="div">
              {producto.nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                <i className="bi bi-dot"></i>
              {producto.descripcion}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <i className="bi bi-dot"></i>
              Precio: $ {producto.precio}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <i className="bi bi-dot"></i>
              {producto.contenido}
            </Typography>
          </CardContent>
          <CardActions>
            <CartWidget />
            <Button size="small">Comprar</Button>
            <Button size="small">Vaciar Carrito</Button>
          </CardActions>
        </Card>
      </div>
    );
  };
  
  export default CardCustom;