import Login from './Login/containers/LoginContainer'
import Signup from './Login/containers/SignUpContainer'
import PlantsTopNav from './Plants/PlantsTopNav';
import Stats from './Stats';
import Review from './Review';
import Tool from './Tools';
 const routes=[
    {
        path:"/platform/Login",
        component:Login
    },
    {
        path:"/platform/Signup",
        component:Signup
    },
    {
        path:"/platform/Plants",
        component:PlantsTopNav
    },
    {
        path:"/platform/Stats",
        component:Stats
    },
    {
        path:"/platform/Reviews",
        component:Review
    },
    {
        path:"/platform/Tools",
        component:Tool
    }
]
export default routes;