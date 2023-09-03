import PropTypes from 'prop-types';
import './ItemListStyles.css';


const ItemListContainer = ({ greeting }) => {

    return ( 
    
    <h1 className="titulo" onClick={greeting}>Aportando un granito de harina al mundo.. 🍞</h1>
    )
}

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
}

export default ItemListContainer