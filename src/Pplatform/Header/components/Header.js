import React,{useEffect,useState} from 'react'
import icon from '../../../Assets/icon'
import {withRouter} from 'react-router-dom';
import '../SCSS/styles.css';
function Header({label, icon1, data, setoggle, toggle, gotoview, setvalue, value}) {
    const [id,setid] = useState();
    const userid = localStorage.getItem('userid');
    useEffect(()=>{
        setid(userid);
        console.log("gf");
    }
    , [userid]);
    console.log(userid);
    return (
   <div className="Header-container">
       <div className="header">
            {label}<span style={{margin:"5px"}}>
                {label === "Plants" ? icon.leaf : label === "Tools" ? icon.tools : label === "Review" ? icon.star : label === "Stats" ? icon.Signal : null}
                </span>
            </div>
        <div className="sub-header">
           <span style={{ paddingRight: "2px" }}>Platform</span>{" "}
            /
           <span style={{color: "white", paddingLeft: "2px" }}>
                {label}<span style={{margin:"5px"}}>
                {label === "Plants" ? icon.leaf : label === "Tools" ? icon.tools : label === "Review" ? icon.star : label === "Stats" ? icon.Signal : null}
                </span>
            </span>
        </div>
          {id ? 
          <div className="log-btn" onClick={()=>{ localStorage.removeItem('userid'); window.location.reload();}}>
              <span>
                LogOut
             </span>
           </div>
       : null }
        <div className="header-search-bar">
            <div style={{ display: "flex", flexDirection: "wrap"}}>
                  <input type="text" value={value} className="header-search-bar-input" placeholder="search here..."
                     onClick={()=>setoggle()}
                     onChange={e=>setvalue(e)}/>
            </div> 
               <div className="header-search-bar-icon">
                   <span>{icon.search}</span>
                   </div>
                 {toggle ? 
                <div className="Search-item">
                   {data.map(data=>  
                   <>  
                    {console.log(data)}
                   <div className="Search-item-box" onClick={()=>gotoview(data._id)}>
                       <p>{data.name}</p>
                    </div></>)
                    }
               </div>:null}
               </div>
    </div>)
}

export default withRouter(Header);
