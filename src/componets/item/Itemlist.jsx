import Item from "./Item";

export const Itemlist = ({ services }) => {
  return (
    <ul className="card-list">
      {services.map((service) => (
        <Item service={service} key={service.id} />
      ))}
    </ul>
  );
};