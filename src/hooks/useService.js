import { useEffect, useState } from "react";

import { doc, getDoc } from "firebase/firestore";
import db from "../db/db.js";


const useService = (serviceId)=>{
    const [service, setService]= useState({});
    const [loading, setLoading]=useState(true);


const getService = async()=>{


    try {
        const docRef = doc(db, "services", serviceId);
        const dataDb = await getDoc(docRef);

        const data ={   id: dataDb.id, ...dataDb.data()  };
        setService(data);
        setLoading(false);

    } catch (error) {
        console.log(error)
    }
}

    useEffect(()=>{


getService();



    },[])
    return {     service, loading };

};
export default useService;