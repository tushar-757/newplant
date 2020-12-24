import React, { Fragment, useLayoutEffect,useState,useEffect } from "react";
import SubNav from "../components/SubNav";
import { Route, withRouter } from "react-router-dom";
import Header from '../../Header';
import routes  from "../../routes";
function RouteWithSubRoutes({ route }) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

function SubNavContainer(props) {
  const [slide,setslide]=useState();
  const [toggle,settoggle]=useState(false);
  useEffect(() => {
    if (props.location.pathname === "/platform") {
        props.history.push("/platform/dashboard");
    } else if (props.location.pathname === "/platform/GreenOplants") {
        props.history.push("/platform/Plants/Indoor");
    }
  }, [props.history.location]);

  useLayoutEffect(() => {
    function updateSize() {
      setslide(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  const handletoggle=()=>{
    settoggle(true)
  }
  const handletoggle1=()=>{
    settoggle(false)
  }
  return (
    <Fragment>
        <SubNav wid={slide} togglefunc={handletoggle} toggle={toggle} togglefunc1={handletoggle1}/> 
        <Header/>
        {routes.map((route, i) => {
          return <RouteWithSubRoutes key={i} route={route} />;
        })}
    </Fragment>
  );
}

export default withRouter(SubNavContainer);
/*  {routes.map((route, i) => {
          return <RouteWithSubRoutes key={i} route={route} />;
        })}*/