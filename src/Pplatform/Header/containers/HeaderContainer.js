import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Header from '../components/Header';
import {withRouter,useParams} from 'react-router-dom';
 function HeaderContainer(props) {
                const [label,setLabel] =useState("");
                const [data,setdata] =useState([]);
                const [filterData,setfilterdata] =useState([]);
                const [toggle,settoggle] =useState(false);
                const [value,setvalue] =useState("");
                const {id} = useParams();
               useEffect(()=>{
                    if (props.history.location.pathname.includes("Plants")) {
                        setLabel("Plants");
                    } else if (props.history.location.pathname.includes("Tools")) {
                        setLabel("Tools");
                    } else if (props.history.location.pathname.includes("Stats")) {
                        setLabel("Stats");
                    } else if (props.history.location.pathname.includes("Review")) {
                        setLabel("Review");
                    } else if (props.history.location.pathname.includes("Login")) {
                        setLabel("Login");
                    } else if (props.history.location.pathname.includes("Signup")) {
                        setLabel("SignUp");
                    }
                }
                , [props.history.location]);
                //data

               useEffect(async()=>{
                    const data = await axios.get("https://fathomless-fortress-06365.herokuapp.com/plants");
                    console.log(props.history.location);
                    console.log(data.data);
                    setdata(data.data);
                }
                , [props.history.location]);

                const togglefunction = ()=>{
                    settoggle(!toggle);
                }
                ;

                const setvalueHandler = e=>{
                    setvalue(e.target.value);
                }
                ;

                const gotoview = async id=>{
                    await props.history.push(`/platform/Plants/Indoor/ViewPlant/${id}`);
                    window.location.reload();
                }
                ;

               useEffect(()=>{
                    const filterdatafunction = ()=>{
                        const filterdata = data.filter(d=>d.name.toLowerCase().includes(value.toLowerCase())).map(data=>data);
                        console.log(filterdata);
                        setfilterdata([...filterdata]);
                    };
                    filterdatafunction();
                }
                , [value]);
                return (
                    <Header
                    label= {label}
                    data={value === "" ? data : filterData}
                    setoggle={togglefunction}
                    toggle={toggle}
                    gotoview={gotoview}
                    setvalue={setvalueHandler}
                    value={value}/>
                )
            }

export default withRouter(HeaderContainer);