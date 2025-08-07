import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db.js";
import "./Checkout.css";

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: "",
  });
  const [orderId, setOrderId] = useState(null);

  const { cart, totalPrice } = useContext(CartContext);

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };

  const sendOrder = (event) => {
    event.preventDefault();

    const order = {
      buyer: { ...dataForm },
      services: [...cart],
      total: totalPrice(),
    };
    uploadOrder(order);
  };

  const uploadOrder = async (order) => {
    try {
      const orderRef = collection(db, "orders");
      const response = await addDoc(orderRef, order);
      setOrderId(response.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="checkout-container">
      {orderId ? (
        <div className="order-success">
          <h2>Orden generada correctamente</h2>
          <p>Guarde el identificador de su orden: <strong>{orderId}</strong></p>
        </div>
      ) : (
        <form onSubmit={sendOrder} className="checkout-form">
          <label>Nombre completo:</label>
          <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} />
          <label>Teléfono:</label>
          <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} />
          <label>Email:</label>
          <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} />
          <button type="submit">Enviar orden</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;