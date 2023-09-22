import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ productos }) => {
    return (
        <div>
            {productos.map((producto) => (
                <Item key={producto.id} producto={producto} />
            ))}
        </div>
    );
};

export default ItemList;