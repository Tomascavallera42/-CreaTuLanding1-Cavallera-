import "./detalles.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
const ItemDetail = ({ service }) => {

const { addServiceInCart }=useContext(CartContext);

const addService = (quantity) => {
const serviceCart={ ...service, quantity };


addServiceInCart(serviceCart);
}



  if (!service) return <p>Producto no encontrado</p>;

  return (
    <div className="item-detail">
      <h2>{service.name}</h2>
      <img className="img-detail" src={service.img} alt={service.name} />
      <p>{service.description}</p>
      <p>Categoría: {service.category}</p>
      <p>Precio: {service.price} </p>
      <ItemCount  addService={addService} />
    </div>
  );
};

export default ItemDetail;