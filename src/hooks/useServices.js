import { useEffect, useState } from "react";
import getServicios from "../data/sercivios.js";

const useServices = (categoryId) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getServicios().then((data) => {
      if (categoryId) {
        const filtered = data.filter(
          (item) => item.category === categoryId
        );
        setServices(filtered);
      } else {
        setServices(data);
      }
    }).finally(() => setLoading(false));
  }, [categoryId]);

  return { services, loading };
};

export default useServices;