import { useParams } from "react-router-dom";
import useServices from "../../hooks/useServices.js";
import { Itemlist } from "./itemlist.jsx";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const { services, loading } = useServices(categoryId);

  return (
    <div>
      <h2>Bienvenidos a Omega</h2>
      {loading ? <div>cargando...</div> : <Itemlist services={services} />}
    </div>
  );
};

export default ItemListContainer;
