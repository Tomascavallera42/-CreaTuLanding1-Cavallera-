import "./cartwidget.css";
import carrito from "../../assets/carrito.png"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const {totalQuantity }= useContext(CartContext);




  return (
    <Link  to="/cart" className="carrito">
<img src={carrito}alt="Logo de carrito de compras"  />

<h2> {totalQuantity()} </h2>

    </Link>
  )
}

export default CartWidget;