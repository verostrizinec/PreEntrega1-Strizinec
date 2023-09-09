import { useState } from "react"
import './CartWidget.css'


const CartWidget = () => {

    const [count, setCount] = useState(0)

    const handCount = () => setCount(count + 1)

    return (
        <div className="carrito">
            <i className="bi bi-cart4" onClick={handCount}></i>
            {count}
        </div>
    )
}

export default CartWidget
