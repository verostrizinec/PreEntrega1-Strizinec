import { useState } from "react"
import './stylesCart.css'


const Contador = () => {

    const [count] = useState(1)

    // const handCount = () => setCount(count + 1)

    return (
        <div>
            <i id="carrito" className="bi bi-cart4"></i>
            {count}
        </div>
    )
}

export default Contador
