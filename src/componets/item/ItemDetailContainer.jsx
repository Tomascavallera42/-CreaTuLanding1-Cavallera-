import { useParams } from "react-router-dom";
import useService from "../../hooks/useService";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  const { service, loading } = useService(itemId);

  return (
    <div>
      {loading ? <p>Cargando detalle...</p> : <ItemDetail service={service} />}
    </div>
  );
};

export default ItemDetailContainer;