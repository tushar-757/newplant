import React,{useState,useEffect} from 'react';
import Outdoor from '../components/Outdoor';
import api from '../../../../services/api';
function OutdoorContainer() {
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
      <Outdoor data={indoordata}/>
);
}
export default OutdoorContainer;