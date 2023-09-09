import { useState } from "react"
import './CartWidget.css'


const CartWidget = () => {

    const [count] = useState(1)

    // const handCount = () => setCount(count + 1)

    return (
        <div>
            <i className="bi bi-cart4 carrito"></i>
            {count}
        </div>
    )
}

export default CartWidget
