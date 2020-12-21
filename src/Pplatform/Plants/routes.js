import Indoor from './Indoor/containers/IndoorContainer';
import Outdoor from './Outdoor/containers/OutdoorContainer';
import ViewplantContainer from './Indoor/containers/ViewPlantContainer';
export const routes=[
    {
        path:"/platform/Plants/Indoor",
        exact:true,
        component:Indoor
    },
    {
        path:"/platform/Plants/Outdoor",
        exact:true,
        component:Outdoor
    },
    {
        path:"/platform/Plants/Indoor/ViewPlant/:id",
        component:ViewplantContainer
    }
]