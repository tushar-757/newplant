import { withRouter } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ReactStars from "react-rating-stars-component";
import '../SCSS/styles.css';
import React, { useState } from 'react';
function Review({submit, data, setvalue, setrating, show, close, Delete, history, togglefunction, Savesubmit, editvalue1, editrating}) {
    const firstExample = {
        size: 30,
        isHalf: true,
        edit: false
    };
    const thirdExample = {
        size: 40,
        count: 5,
        isHalf: true,
        value: 0,
        color: "lightgrey",
        activeColor: "yellow",
        onChange: newValue=>{
            console.log(`Example 3: new value is ${newValue}`);
        }
    };

    return(
    <div  className= "Review-container">    
        <div className= "Review-inner-cover">
            <Modal show= {show}
                onHide= {show}
                animation= {false}
                centered= {true}
                className= "Modal-container">
                <Modal.Header  className= "Modal-head">
                   <Modal.Title>
                         Login
                   </Modal.Title>
                   </Modal.Header>
                <Modal.Body   className= "Modal-body">
                       you need to be Login for that
                </Modal.Body>
             <Modal.Footer  className= "Modal-footer">
                      <Button  variant= "secondary"
                        onClick= {close}> 
                      "Close"
                      </Button>
                       <Button  variant= "primary"
                        onClick= {()=>history.push("/platform/Login")}>
                            Go for Login
                        </Button>
                  </Modal.Footer>
                  </Modal>
            <div  className= "left-block">
                <div className= "left-block-reviews">
                       {data.map(data=>data.user === null ? null :
                        <div  className= "left-review-divs">
                            <div  style= {{  width: "90%", height: "10rem" }}>
                                <p  style={{
                                        float:"right"
                                    }}>
                                    ~ {data.user.username}
                               </p>
                               {data.user._id === localStorage.getItem('userid') ?
                                <>
                                    {!data.isediting ?
                                    <>
                                        <p>{data.text}</p>  
                                      <ReactStars
                                            {...firstExample}
                                            value= {data.rating}
                                            style={{
                                                marginBottom: "1rem"
                                            }}
                                        />
                                        <span
                                            className= "left-block-edit"
                                            onClick={ ()=>togglefunction(data._id)}>
                                             edit
                                            </span>
                                        <span
                                            className= "left-block-delete"
                                            onClick={ ()=>Delete(data._id)}>
                                            delete
                                            </span>
                                            </>
                                    : <div><span>
                                            <input
                                                onChange= {(e)=>setvalue(e,data.text)}
                                                defaultValue={data.text}
                                                class= "form-control"
                                                className= "input-box-edit"/>
                                                </span>
                                               <ReactStars   {...thirdExample}   onChange={ value=>setrating(value)}  />
                                            <span style= {{
                                                background: "#47de47",
                                                color: "white",
                                                cursor: "pointer",
                                                padding: "5px",
                                                borderRadius: "5px"
                                            }}
                                            onClick={ ()=>Savesubmit(data._id)}>
                                                Save
                                                </span>
                                        </div>
                                        }</>:
                                <div  style={{     width: "80%"  }}>
                                    <p>{ data.text}</p>
                                  <ReactStars
                                        {...firstExample}
                                        value={data.rating}/>    
                               </div>}
                         </div>
                    </div>)}
         </div>
     </div>
     <div className= "right-block">
                              <form>
                               <h1  style={{
                            fontSize: "1rem",
                            color:"blueviolet"
                        }}>
                        Review
                        </h1>
                    <textarea
                        placeholder= "write your review here..."
                        onChange= {e=>setvalue(e)}
                        required= {true}
                     />
                       <ReactStars
                        {...thirdExample}
                        onChange={ value=>setrating(value)}
                        required= {true}/>
                    <div  className= "right-block-submit-button"
                        onClick={ ()=>submit()}>
                        <span>
                              Submit
                        </span>
                    </div>
                    </form>
                    </div>
            </div>
            </div>)
                    }
export default withRouter(Review);