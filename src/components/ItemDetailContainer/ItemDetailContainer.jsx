import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    return (
        <div>
            {isLoading ? (
                <div>Cargando...</div>
            ) : (
                <ItemDetail item={item} />
            )}
        </div>
    );
};

export default ItemDetailContainer;