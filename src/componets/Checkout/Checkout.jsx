import { useState, useContext} from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db.js";


const Checkout = () => {

const [dataForm, setDataForm]= useState({
    fullname:"",
    phone:"",
    email:"",
});
const [orderId, setOrderId]=useState(null);

const {   cart, totalPrice }=useContext(CartContext);

const handleChangeInput =(event)=>{
setDataForm({  ...dataForm, [event.target.name] : event.target.value});

}



const sendOrder =(event)=> {
event.preventDefault();


const order ={   
    buyer: {...dataForm}, 
    services: [...cart],
    total:totalPrice()
}
uploadOrder(order);

}


const uploadOrder= async(order)=>{

try {
    
const orderRef = collection(db, "orders");
const response = await addDoc(orderRef, order);

setOrderId(response.id);

} catch (error) {
    console.log(error)
}
}


  return (
    <div>
{
  orderId ? (
    <div>
        <h2>Orden generada correctamente</h2>
        <p>Guarde el identificador de su orden: { orderId} </p>
    </div>
   ) : (  <form onSubmit={sendOrder}>
           <p>Nombre completo:</p> <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput}/>
           <p>Telefono:</p> <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput}/>
            <p>Email:</p><input type="email" name="email" value={dataForm.email} onChange={handleChangeInput}/>

            <button type="submit">Enviar orden</button>
        </form>

   )
 }



       
    </div>
  )
}

export default Checkout