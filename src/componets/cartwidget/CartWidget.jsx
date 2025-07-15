import "./cartwidget.css";
import carrito from "../../assets/carrito.png"

const CartWidget = () => {
  return (
    <div className="carrito">
<img src={carrito}alt="Logo de carrito de compras"  />

<h2>3</h2>

    </div>
  )
}

export default CartWidget;