import React,{useEffect} from "react"
import {withRouter} from 'react-router-dom';
import Dashboard from '../src/Dashboard';
import { NotificationContainer } from "react-notifications";
import 'react-notifications/lib/notifications.css';
import SubNav from '../src/Pplatform/SubNav';
import './App.css';
function App(props){
  useEffect(()=>{
      if (props.location.pathname === "/") {
          props.history.push("/GreenOplants/Dashboard");
      }
  }
  , [props.location.pathname]);
  return (
    <>
      <NotificationContainer />
      {props.location.pathname=== "/GreenOplants/Dashboard" ? <Dashboard/>:<SubNav/> }
       </>
  )

}
/* harmony default export */
export default withRouter(App);

/*<NotificationContainer/>*/
