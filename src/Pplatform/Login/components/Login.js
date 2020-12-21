import React from 'react';
import Button from '@material-ui/core/Button';
import '../SCSS/styles.css';
function Login({email, password, Login}) {
    const id = localStorage.getItem('userid');
    return (
    <div className="Login-Container">
        <div className="Login-inner-cover">
            {!id ?
               <>
                <h1 className="login-head">
                  Login
                  </h1>
                <div className="login-input">
                    <input type= "email"
                        placeholder="emailid"
                        class="form-control"
                        onChange={e=>email(e)}
                        required={true}/>
                  </div>
                <div className="login-input">
                  <input placeholder= "password"
                        class= "form-control"
                        type= "password"
                        onChange= {e=>password(e)}
                        required={true}/>
                  </div>
                  <div
                    className= "login-btn"
                    onClick={()=>Login()}>
                  <Button  variant= "contained"  type= "submit"color="primary"  style= {{fontSize: "0.8rem"}}>
                    Login
                  </Button>
                    </div>
                    </>
                  : 
            <h1 style={{
                    padding: "2rem",
                    fontSize: "0.8rem"
                }}>
                    for that you need to be loggedout.
                </h1>
                }
    </div>
    </div>)
           
}
export default Login;