import React,{useState} from 'react';
import {withRouter} from 'react-router-dom';
import '../SCSS/styles.css';
import icon from '../../../../Assets/icon';

function Indoor(props) {
  const [state,setstate]=useState(props.data);
  console.log(state)
  if(state==="null"){
    console.log("game on")
  }else if(state==="undefined"){
    console.log("game off")
  }
    return (
   <div className= "Plant-Container">
       <div className= "Plant-inner-cover">
           {(state!=="null")?props.data.map(p=>
              <>          
               <div className= "indoor-plant-box">
                   <h1>
                     {p.name}
                   </h1>
                   <img src={ p.image_url} alt={p.name}/>
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
                  </>):<div><p>loading....</p></div>}
                  </div>
                  </div>)
}
export default withRouter(Indoor);