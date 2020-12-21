import React from 'react';
import {withRouter} from 'react-router-dom';
import '../SCSS/styles.css';
import icon from '../../../../Assets/icon';

function Outdoor(props) {
    return (
   <div className= "Plant-Container">
       <div className= "Plant-inner-cover">
           {props.data.map(p=>
              <>          
               <div className= "indoor-plant-box">
                   <h1>
                     {p.name}
                   </h1>
                   <img src={ p.image_url}/>
                   <div style= {{display:"flex"
                        }}>
                       <div className= "Indoor-plant-box-know-more" onClick= {()=>props.history.push(`/platform/Plants/Indoor/ViewPlant/${p._id}`)}>  
                           <span>
                               Know More {icon.info}
                           </span>
                          </div>
                        <div className= "Indoor-plant-box-Buy">
                           <span>
                             Buy on Amazon {icon.shoppingcart}
                            </span>
                        </div>
                     </div>
                  </div>
                  </>)}
                  </div>
                  </div>)
}
export default withRouter(Outdoor);