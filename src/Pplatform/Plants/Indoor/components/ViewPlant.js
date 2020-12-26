import React,{useState,useEffect} from 'react';
import icon from '../../../../Assets/icon';
import {NavLink} from 'react-router-dom';
import {Bar,Doughnut} from 'react-chartjs-2';
import SimpleImageSlider from "react-simple-image-slider";
import '../SCSS/styles.css';
function ViewPlant(props) {
    const [images,setimages] = useState([]);
    console.log(props.images);
    useEffect(()=>{
        setimages([...props.images]);
        console.log(images);
    }
    , [props.images.length !== 0]);
    return(
    <div className= "View-plant-container">
        <div  className= "view-plant-inner-cover">    
            <div  className= "view-plant-inner-cover-left-block">     
                <NavLink
                    to= "/platform/Plants/Indoor">
                    <div style= {{  margin:"1rem" }} className="bavkarrow">
                        <span>
                             {icon.backArrow2}
                             </span>
                  </div>
                  </NavLink> 
                <h1>
                    { props.data.name}
                    </h1>
               {images.length !== 0 ?
               <>
                {(props.wid<650)?<SimpleImageSlider
               style= {{
                margin: "0 auto",
                marginTop: "50px"
            }}
            className="image-slider"
            width={200}
            height={200}
            images= {images}
            showBullets={ props.cred.showBullets}
            showNavs={ props.cred.showNavs}
            useGPURender= {props.cred.useGPURender}
            navStyle= {props.cred.navStyle}
            slideDuration= {props.cred.slideDuration}/>
             :<SimpleImageSlider
               style= {{
                margin: "0 auto",
                marginTop: "50px"
            }}
            className="image-slider"
            width={400}
            height={400}
            images= {images}
            showBullets={ props.cred.showBullets}
            showNavs={ props.cred.showNavs}
            useGPURender= {props.cred.useGPURender}
            navStyle= {props.cred.navStyle}
            slideDuration= {props.cred.slideDuration}/>
            }</>:null}
                <div style= {{margin: "2rem"  }}>
                    <div className="bar-graph">     
                   <Bar
                        data= {props.chartdata}
                        height= {330}
                        width={ 600}
                        options= {props.options}
                    />
                        </div>
                    <span>
                        { props.data.about}
                   </span>
               </div>
               </div>
            <div  className= "view-plant-inner-cover-right-block">            
               <h1>
                    { props.data.name}
               </h1>
               <div className="doughnut-chart">
              < Doughnut
                    height= {130}
                    width= {200}
                    data= {props.chartdata1}
               />
               </div>
                <img
                    src= {props.data.image_url}
                    onClick= {()=>props.expand()}
                    className= "a"
                    />
                <div  style= {{ display:"flex" }}>
                    <div  className= "Indoor-plant-box-Buy">
                         <span>
                            Buy on Amazon {icon.shoppingcart}
                        </span>
                        </div>
                        </div>
                        </div>
      </div>
      </div>);
}
export default ViewPlant;
