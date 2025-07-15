import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ service }) => {
  return (
    <li className="card">
      <img className="card-img" src={service.img} alt={service.name} />
      <div className="card-content">
        <h3>{service.name}</h3>
        <p>{service.description}</p>
        <Link to={`/item/${service.id}`}>
          <button className="card-button">Ver más</button>
        </Link>
      </div>
    </li>
  );
};

export default Item;