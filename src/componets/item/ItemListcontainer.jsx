import { useParams } from "react-router-dom";
import useServices from "../../hooks/useServices.js";
import { Itemlist } from "./itemlist.jsx";
import "./item.css";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const { services, loading } = useServices(categoryId);

  return (
    <div className="itemlist-container">
      <h2>Bienvenidos a Omega</h2>
      {loading ? <div>Cargando...</div> : <Itemlist services={services} />}
    </div>
  );
};

export default ItemListContainer;
