import React,{useState,useEffect} from 'react';
import Indoor from '../components/Indoor';
import api from '../../../../services/api';

function IndoorContainer() {
    const [indoordata,setIndoordata] = useState([]);
    useEffect(async()=>{
        try {
            const data = await api.get("/plants");
            console.log(data.data);
            setIndoordata(data.data);
        } catch (error) {
            console.log(error);
        }
    }
    , []);
 
    return (
      <Indoor data={indoordata}/>
);
}
export default IndoorContainer;