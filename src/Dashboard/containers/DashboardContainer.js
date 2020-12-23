 import Dashboard from '../components/Dashboard';
 import React,{useEffect} from 'react';
 import Socketio from 'socket.io-client';
 import {withRouter} from 'react-router-dom';
 function DashboardContainer(props) {
            useEffect(()=>{
                if (props.location.pathname === "/GreenOplants/Dashboard") {
                    props.history.push("/GreenOplants/Dashboard");
                }
            }
            , [props.location.pathname]);
            useEffect(()=>{
                  const socket=Socketio("https://fathomless-fortress-06365.herokuapp.com/",{ transport : ['websocket'] })
                  socket.emit('chat message', "hello");
                  socket.on("message",(msg)=>{console.log(msg)})
            },[])
            return (
               <>
               <Dashboard/>
               </>
        )
        }
export default withRouter(DashboardContainer);

