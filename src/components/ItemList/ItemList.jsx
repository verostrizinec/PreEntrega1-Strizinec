import Item from "../Item/Item"

const ItemList = ( {productos} ) => {
    return (
        <div>
            {
                productos.length > 0 &&
                productos.map((productos) => {
                    return (
                        <Item productos={productos}/>
                    )
                })
            }
        </div>
    )
}

export default ItemList