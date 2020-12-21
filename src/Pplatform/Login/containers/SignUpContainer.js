import React,{useState,useEffect} from 'react';
import NotificationManager from "react-notifications/lib/NotificationManager";
import api from '../../../services/api';
import Signup from '../components/Signup'; 
function SignUPContainer() {
    const [username,setusername] = useState("");
    const [email1,setemail] = useState("");
    const [password1,setpassword] = useState("");

    const emailHandler = e=>{
        setemail(e.target.value);
    }
    ;

    const usernameHandler = e=>{
        setusername(e.target.value);
    }
    ;

    const passwordHandler = e=>{
        setpassword(e.target.value);
    }
    ;

    const SignupHandler = async()=>{
        try {
            if (email1 === "" || password1 === "" || username === "") {
               NotificationManager.warning("field is missing!!", "", 1000);
            } else if (email1.includes(true && 'mail.com') && password1.length >= 5 && username.length >= 3) {
                const response = await api.post("/register", {
                    username: username,
                    email: email1,
                    password: password1
                });
                console.log(response);
                localStorage.setItem('userid', response.data._id);
               NotificationManager.success("successfully signedin", "", 2000);
               
            } else if (password1.length <= 5) {
               NotificationManager.warning("password must be >5characters", "", 2000);
                console.log(password1.length, username.length);
            } else if (username.length <= 3) {
               NotificationManager.warning("username must be >3characters", "", 2000);
            } else {
               NotificationManager.warning("invalid inputs", "", 2000);
            }
        } catch (error) {
            console.log("error");
           NotificationManager.warning("already exist", "", 1000);
        }
    }
    ;

    return (
       <div>
           <Signup
            username={usernameHandler}
            email={emailHandler}
            password={passwordHandler}
            Signup={SignupHandler}
            />
            </div>
    )
}
export default SignUPContainer;