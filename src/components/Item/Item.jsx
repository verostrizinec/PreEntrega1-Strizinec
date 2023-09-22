import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CartWidget from '../CartWidget/CartWidget';
import '../card.css';

const Item = ( {productos} ) => {

    return (
        <div className='productos-container'>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={productos.imagen}
              title={productos.nombre}
            />
            <CardContent> 
              <Typography gutterBottom variant="h5" component="div">
                {productos.nombre}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                  <i className="bi bi-dot"></i>
                {productos.descripcion}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              <i className="bi bi-dot"></i>
                Precio: $ {productos.precio}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              <i className="bi bi-dot"></i>
                {productos.contenido}
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

   
}

export default Item