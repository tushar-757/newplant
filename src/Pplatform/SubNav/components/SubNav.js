import React from 'react';
import '../SCSS/styles.css';
import { makeStyles } from '@material-ui/core/styles';
import icon from '../../../Assets/icon';
import {NavLink,Link,withRouter} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    toolbar: {
      minHeight: 128,
      alignItems: 'flex-start',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      alignSelf: 'flex-end',
    },
  }));
function SubNav(props) {
    const classes = useStyles();
    return (
        <>
     {(props.wid<650)?
        <div className="nav-head" >
            {!props.toggle?<button className="nav-btn"onClick={()=>props.togglefunc()}>{icon.bars}</button>:
            <>
            <button className="nav-btn" onClick={()=>props.togglefunc1()}>{icon.cross}</button>
              <div className="nav-head-cont">
                    <NavLink to="/"
            activeClassName="subnav-common  options-selected"
            className= "subnav-common"
            style={{
                textDecoration: "none"
            }}>
                <div className="subnav-header">GreenOplants</div>
            </NavLink>
       <div className="platform">
            Platform
       </div>
        <div className="subnav-options">
           <NavLink
                to="/platform/Plants"
                className={props.location.pathname.includes("/platform/Plants") ? "subnav-common  options-selected" : "subnav-common"}
                style={{
                    textDecoration: "none"
                }}>
               <span  onClick={()=>props.togglefunc1()}>
                   Plants
               </span>
                </NavLink>    
               <Link
                to="/platform/Tools"
                className={props.location.pathname.includes("/platform/Tools") ? "subnav-common  options-selected" : "subnav-common"}
                style={{
                    textDecoration: "none"
                }}>
               <div>
                   <span  onClick={()=>props.togglefunc1()}>
                       Tools
                    </span>
               </div>
                </Link>
             <NavLink
                to="/platform/Stats"
                activeClassName= "subnav-common  options-selected"
                className= "subnav-common"
                style={{
                    textDecoration: "none"
                }}>
               <div>
                   <span  onClick={()=>props.togglefunc1()}>  
                     Stats
                    </span> 
               </div>
              </NavLink>
              <Link
                to="/platform/Reviews"
                className={props.location.pathname.includes("/platform/Reviews") ? "subnav-common  options-selected" : "subnav-common"}
                style={{
                    textDecoration: "none"
                }}>
               <div>
                   <span  onClick={()=>props.togglefunc1()}>
                       Reviews
                    </span>
               </div>
                </Link>
    
              <div className="Sub-nav-login" onClick={()=>props.history.push("/platform/Login")}>
               <span  onClick={()=>props.togglefunc1()}>  
                 Login
                </span> 
              </div>
          <div  className="Sub-nav-signup" onClick={()=>props.history.push("/platform/Signup")}>
              <span  onClick={()=>props.togglefunc1()}>
                  SignUp
              </span>
          </div>
             </div>
              </div>
              </>
            }
         </div>:
           <div className="subnav-container">
           <>
             <NavLink to="/"
            activeClassName="subnav-common  options-selected"
            className= "subnav-common"
            style={{
                textDecoration: "none"
            }}>
                <div className="subnav-header">GreenOplants</div>
            </NavLink>
       <div className="platform">
            Platform
       </div>
        <div className="subnav-options">
           <NavLink
                to="/platform/Plants"
                className={props.location.pathname.includes("/platform/Plants") ? "subnav-common  options-selected" : "subnav-common"}
                style={{
                    textDecoration: "none"
                }}>
               <span>
                   Plants
               </span>
                </NavLink>    
               <Link
                to="/platform/Tools"
                className={props.location.pathname.includes("/platform/Tools") ? "subnav-common  options-selected" : "subnav-common"}
                style={{
                    textDecoration: "none"
                }}>
               <div>
                   <span>
                       Tools
                    </span>
               </div>
                </Link>
             <NavLink
                to="/platform/Stats"
                activeClassName= "subnav-common  options-selected"
                className= "subnav-common"
                style={{
                    textDecoration: "none"
                }}>
               <div>
                   <span>  
                     Stats
                    </span> 
               </div>
              </NavLink>
              <Link
                to="/platform/Reviews"
                className={props.location.pathname.includes("/platform/Reviews") ? "subnav-common  options-selected" : "subnav-common"}
                style={{
                    textDecoration: "none"
                }}>
               <div>
                   <span>
                       Reviews
                    </span>
               </div>
                </Link>
    
              <div className="Sub-nav-login" onClick={()=>props.history.push("/platform/Login")}>
               <span>  
                 Login
                </span> 
              </div>
          <div  className="Sub-nav-signup" onClick={()=>props.history.push("/platform/Signup")}>
              <span>
                  SignUp
              </span>
          </div>
             </div></>
             </div>}</>
    )}

export default withRouter(SubNav);