import { useState } from "react";
import "./itemcount.css"

const ItemCount = ({ addService }) => {
  const [count, setCount] = useState(1);

  const handleClickDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleClickIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="itemcount-container">
      <button  className="counter-button" onClick={handleClickDecrement}>-</button>
      <p>{count}</p>
      <button className="counter-button"  onClick={handleClickIncrement}>+</button>
      <button className="main-button" onClick={() => addService(count)}>Añadir al carrito</button>
    </div>
  );
};

export default ItemCount;