import React,{useEffect}from 'react';
import {Route,useParams,withRouter} from 'react-router-dom';
import PlantsTopNav from '../components/PlantsTopNav';
import {routes} from '../../routes'
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

function PlantsTopNavContainer(props) {
    let {id} = useParams();
    useEffect(()=>{
        console.log(id);
        if (props.location.pathname == "/platform/Plants") {
            props.history.push("/platform/Plants/Indoor");
        } else if (props.location.pathname == `/platform/Plants/Indoor/${id}`) {
            props.history.push("/platform/Plants/Indoor");
        }
    },[props.location.pathname]);
    return ( <>
     <PlantsTopNav/>
    {routes.map((route, i) => {
      return <RouteWithSubRoutes key={i} route={route} />;
    })}
</>)
        }
     


export default withRouter(PlantsTopNavContainer);