import React from 'react';
import '../SCSS/styles.css';
import {NavLink,Link,withRouter} from 'react-router-dom';
function SubNav(props) {
    return (
   <div className="subnav-container">
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
             </div>
             </div>
    )}

export default withRouter(SubNav);