import { useParams } from "react-router-dom";
import useService from "../../hooks/useService";
import ItemDetail from "./ItemDetail";
import "./item.css";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const { service, loading } = useService(itemId);

  return (
    <div className="itemdetail-container">
      {loading ? <p>Cargando detalle...</p> : <ItemDetail service={service} />}
    </div>
  );
};

export default ItemDetailContainer;
