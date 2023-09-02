import { useState } from "react"
import './stylesCart.css'


const Contador = () => {

    const [count , setCount] = useState(0)

    const handCount = () => setCount(count + 1)

    return (
        <div>
            <i id="carrito" className="bi bi-cart4" onClick={handCount}></i>
            {count}
        </div>
    )
}

export default Contador
