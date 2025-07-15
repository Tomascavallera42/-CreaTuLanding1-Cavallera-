import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getServicios from "../../data/sercivios";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getServicios().then((data) => {
      const item = data.find((s) => s.id === parseInt(itemId));
      setService(item);
    }).finally(() => setLoading(false));
  }, [itemId]);

  return (
    <div>
      {loading ? <p>Cargando detalle...</p> : <ItemDetail service={service} />}
    </div>
  );
};

export default ItemDetailContainer;