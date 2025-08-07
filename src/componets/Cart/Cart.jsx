import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, totalPrice, deleteServiceById, clearCart } =
    useContext(CartContext);

  return (
    <div>
      <h2>Servicios seleccionados:</h2>

      {cart.map((serviceCart) => (
        <div
          key={serviceCart.id}
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            alignContent: "center",
            margin: "20px 0",
          }}
        >
          <img src={serviceCart.img} alt={serviceCart.name} width={200} height={200} />
          <p>Servicio: {serviceCart.name}</p>
          <p>Precio unitario: ${serviceCart.price}</p>
          <p>Cantidad: {serviceCart.quantity}</p>
          <p>Precio total: ${serviceCart.quantity * serviceCart.price}</p>
          <button onClick={() => deleteServiceById(serviceCart.id)}>Eliminar</button>
        </div>
      ))}

      <h3>Precio final: ${totalPrice()}</h3>

      {cart.length > 0 && (
        <button onClick={clearCart} style={{ marginTop: "20px" }}>
          Vaciar carrito
        </button>

      )}
      <Link to= "/checkout">Contratar servicios</Link>
    </div>
  );
};

export default Cart;