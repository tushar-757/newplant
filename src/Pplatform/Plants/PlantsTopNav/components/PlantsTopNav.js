import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import '../SCSS/styles.css';
function PlantsTopNav(props) {
                return (
                    <div className="companyTopNav-container">
                    <div className="top-nav-cover">
                      <Link
                        to="/platform/Plants/Indoor"
                        className={
                          props.location.pathname.includes("/platform/Plants/Indoor")
                            ? "topnav-common  options-selected"
                            : "topnav-common"
                        }
                        style={{ textDecoration: "none" }}
                      >
                        <div>Indoor</div>
                      </Link>
                      <Link
                        to="/platform/Plants/Outdoor"
                        className={
                          props.location.pathname.includes("/platform/Plants/Outdoor")
                            ? "topnav-common  options-selected"
                            : "topnav-common"
                        }
                        style={{ textDecoration: "none" }}
                      >
                        <div>Outdoor</div>
                      </Link>
                      </div>
                </div>)
                      }
export default withRouter(PlantsTopNav);    