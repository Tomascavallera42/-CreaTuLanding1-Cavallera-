import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, totalPrice, deleteServiceById, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return <div className="cart-empty"><h2>Carrito vacío</h2></div>;
  }

  return (
    <div className="cart-container">
      <h2>Servicios seleccionados:</h2>

      {cart.map((serviceCart) => (
        <div className="cart-item" key={serviceCart.id}>
          <img src={serviceCart.img} alt={serviceCart.name} width={200} height={200} />
          <div className="cart-info">
            <p><strong>Servicio:</strong> {serviceCart.name}</p>
            <p><strong>Precio unitario:</strong> ${serviceCart.price}</p>
            <p><strong>Cantidad:</strong> {serviceCart.quantity}</p>
            <p><strong>Precio total:</strong> ${serviceCart.quantity * serviceCart.price}</p>
            <button className="delete-button"  onClick={() => deleteServiceById(serviceCart.id)}>Eliminar</button>
          </div>
        </div>
      ))}

      <h3>Precio final: ${totalPrice()}</h3>

      <button onClick={clearCart} className="clear-button">Vaciar carrito</button>
      <Link to="/checkout" className="checkout-link">Contratar servicios</Link>
    </div>
  );
};

export default Cart;