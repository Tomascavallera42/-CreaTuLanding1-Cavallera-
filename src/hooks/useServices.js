import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../db/db.js";

const useServices = (category) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);


  const getServices = async() =>{
   try {
      
    const dataDb = await getDocs(collection(  db, "services"));


const data = dataDb.docs.map((serviceDb)=>{
  
  return { id : serviceDb.id ,...serviceDb.data() }
})
setServices(data);
setLoading(false);
   
   } catch (error) {
    console.log(error)
   }
  }

const getServicesByCategory = async()=> {
try {
  
const q = query(  collection(db, "services") , where("category", "==",category));
const dataDb = await getDocs(q);

const data = dataDb.docs.map((serviceDb)=>{
  
  return { id : serviceDb.id ,...serviceDb.data() }
})
setServices(data);
setLoading(false);
   

} catch (error) {
  console.log(error)
}
}
  useEffect(() => {

if(category){
  getServicesByCategory();
}else{
  getServices();
}

  }, [category]);

  return { services, loading };
};

export default useServices;