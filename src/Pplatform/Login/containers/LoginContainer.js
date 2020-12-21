import Login from '../components/Login';
import React,{useState} from 'react';
import NotificationManager from "react-notifications/lib/NotificationManager";
import api from '../../../services/api';
function LoginContainer() {
    const [email1,setemail] = useState("");
    const [password1,setpassword] = useState("");

    const emailHandler = e=>{
        setemail(e.target.value);
    }
    ;

    const passwordHandler = e=>{
        setpassword(e.target.value);
    }
    ;

    const LoginHandler = async()=>{
        if (email1 === "" || password1 === "") {
           NotificationManager.warning("field is missing", "", 2000);
        } else {
            try {
                const response = await api.post("/login", {
                    email: email1,
                    password: password1
                });
                 console.log(response)
                if (response.data.user_id) {
                   NotificationManager.success("successfully logged in", console.log("done"), 2000);
                    console.log(response);
                    if(response.data.user_id){
                    localStorage.setItem('userid', response.data.user_id);}        
                } else if(response.data.message==="wrong input"){
                   NotificationManager.warning("Wrong Inputs", console.log("done"), 2000);
                }
            } catch (error) {
               NotificationManager.warning("User not exist,Signup instead", console.log("done"), 2000);
            }
        }
    }
    ;

    return (
        <div>
            <Login
            email={emailHandler}
            password={passwordHandler}
            Login={LoginHandler}/>
            </div>);
}

export default LoginContainer;
/* var decoded = jwt.decode(response.data.user, {
                        complete: true
                    });
                    localStorage.setItem('user', response.data.user);
                    console.log(decoded.header);
                    console.log(decoded.payload);*/ 