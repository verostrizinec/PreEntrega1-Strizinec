import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulamos una llamada asincrónica a un mock después de 2 segundos
        setTimeout(() => {
            const mockItem = {
                id: '1',
                nombre: 'Producto 1',
                descripcion: 'Descripción del Producto 1',
                imagen: 'url-de-la-imagen',
                precio: 10.99,
            };
            setItem(mockItem);
            setIsLoading(false);
        }, 2000);
    }, []);

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