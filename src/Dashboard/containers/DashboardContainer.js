 import Dashboard from '../components/Dashboard';
 import React,{useEffect} from 'react';
 import {withRouter} from 'react-router-dom';
 function DashboardContainer(props) {
            useEffect(()=>{
                if (props.location.pathname === "/GreenOplants/Dashboard") {
                    props.history.push("/GreenOplants/Dashboard");
                }
            }
            , [props.location.pathname]);
<<<<<<< HEAD
         
=======
>>>>>>> newherohufront
            return (
               <>
               <Dashboard/>
               </>
        )
        }
export default withRouter(DashboardContainer);

