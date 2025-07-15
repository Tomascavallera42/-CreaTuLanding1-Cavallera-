const ItemDetail = ({ service }) => {
  if (!service) return <p>Producto no encontrado</p>;

  return (
    <div className="item-detail">
      <h2>{service.name}</h2>
      <img src={service.img} alt={service.name} />
      <p>{service.description}</p>
      <p>Categoría: {service.category}</p>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetail;