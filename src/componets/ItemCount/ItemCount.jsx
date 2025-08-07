import { useState } from "react"

const ItemCount = ({addService}) => {
const [count, setCount]= useState(1);

const handleClickDecrement =() => {
    if(count > 1){
        setCount( count - 1);
    }

};


const handleClickIncrement =() =>{
    setCount (count + 1);
};
  return (
    <div>
        <button onClick={handleClickDecrement}>-</button>
        <p>  {count} </p>
        <button onClick={handleClickIncrement}>+</button>

        <button onClick={ ()=> addService (count)} >Añadir al carrito</button>

    </div>
  )
}

export default ItemCount