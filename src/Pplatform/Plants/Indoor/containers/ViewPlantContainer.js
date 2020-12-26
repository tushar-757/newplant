import React,{useState,useEffect,useLayoutEffect} from 'react';
import ViewPlant from "../components/ViewPlant";
import {useParams} from 'react-router-dom';
import api from '../../../../services/api';

  function ViewplantContainer(props) {
                let {id} = useParams();
                const [slide,setslide]=useState();
                const [indoordata,setIndoordata] = useState([]);
                const [images,setimages] = useState([]);
                const [toggle,setoggle] = useState(false);
                const [cred] = useState({
                    useGPURender: true,
                    showNavs: true,
                    showBullets: true,
                    navStyle: 1,
                    slideDuration: 0.2,
                    bgColor: "#000000",
                    slideIndexText: ""
                });
                console.log(id);
                const data = {
                    labels: ['CO2', 'Benzene', 'Formaldehyde', 'Xylene', 'Toluene', 'Trichloroethylene'],
                    datasets: [{
                        label: ['Conc.'],
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(153, 102, 255, 0.5)', 'rgba(255, 159, 64, 0.5)'],
                        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                        borderWidth: 1
                    }]
                };
                const data2 = {
                    labels: ['O2', "o3"],
                    datasets: [{
                        label: ['Conc.'],
                        data: [35, 25],
                        backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)'],
                        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
                        borderWidth: 1
                    }]
                };
                const options = {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                };

                const expandimage = ()=>{
                    setoggle(!toggle);
                }
                ;

              useEffect(()=>{
                    const fetchData = async()=>{
                        const images = [];
                        try {
                            const data = await api.get(`https://fathomless-fortress-06365.herokuapp.com/plant/${id}`);
                            setIndoordata(data.data);
                            console.log(data.data);
                            const images1 = await data.data.images.map(data=>{
                                return images.push({
                                    url: data,
                                    styles: {
                                        width: "50px",
                                        height: "50px"
                                    }
                                });
                            }
                            );
                            console.log(images);
                            setimages(images);
                        } catch (error) {
                            console.log(error);
                        }
                    }
                    ;

                    fetchData();
                }
                , [id]);
                
  useLayoutEffect(() => {
    function updateSize() {
      setslide(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
                return(
               <ViewPlant
                    data={indoordata}
                     chartdata={data}
                    chartdata1={data2}
                    options={options}
                    toggle={toggle}
                    expand={expandimage}
                    images={images}
                    cred={cred}
                    wid={slide} 
              />)
            }
            export default ViewplantContainer;

    