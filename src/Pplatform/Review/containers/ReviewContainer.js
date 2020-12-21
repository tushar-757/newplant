import NotificationManager from "react-notifications/lib/NotificationManager";
import React,{useEffect,useState} from 'react'
import api from '../../../services/api';
import Review from '../components/Review'
function ReviewContainer() {
    const [data,setdata] = useState([]);
    const [value,setvalue] = useState("");
    const [rating,setrating] = useState("");
    const [show,setshow] = useState(false);
    const [show1,setshow1] = useState(false);
    const [userdata,setuserdata] = useState({});
    const [del,setdelete] = useState(false);
    const [save,setsave] = useState(false);
    const [toggle,settoggle] = useState(false);
    const [editvalue,seteditvalue] = useState("");
    const user = localStorage.getItem('user');

    const submithandler = async()=>{
        try {
            const userid = localStorage.getItem('userid') || false;
            if (!userid) {
                setshow(true);
            } else if (value === "" || rating == null) {
                NotificationManager.warning("field is missing!!");
            } else {
                const response = await api.post("/review", {
                    text: value,
                    rating: rating
                }, {
                    headers: {
                        user_id: userid
                    }
                });
                console.log(response);
                setuserdata(response.data.user);
                NotificationManager.success("successfully updated", console.log("done"), 2000);
                window.location.reload();
            }
        } catch (error) {
            console.log("error");
            NotificationManager.warning("Some error has occurred, check your connection", "", 2000);
        }
    }
    ;
    //dsf

    const closeHandler = ()=>{
        setshow(false);
    }
    ;

    const closeHandler1 = ()=>{
        setshow1(false);
    }
    ;

    const loginhandler = ()=>{
        setshow1(true);
    }
    ;
    //edit function

    const togglefunction = id=>{
        const data1 = [...data];
        data1.map(p=>{
            if (p._id == id) {
                p.isediting = true;
                return {
                    ...p
                };
            }
        }
        );
        setdata(data1);
    }
    ;

    useEffect(()=>{
        const fetchdata = async()=>{
            const response = await api.get("/reviews");
            const data = response.data.map(p=>{
                return {
                    ...p,
                    isediting: false
                };
            }
            );
            setdata(data);
            console.log(data);
        } ;
        fetchdata();
    }
    , []);

    const valuehandler = e=>{
        setvalue(e.target.value);
    }
    ;

    const ratingHandler = value=>{
        setrating(value);
    }
    ;
    //togglehandler

    const toggleHandler = ()=>{
        settoggle(!toggle);
    }
    ;

    const editvalueHandler = e=>{
        seteditvalue(e.target.value);
    }
    ;
    //edit handler
    //deletehabdler

    const DeleteHandler = async id=>{
        setdelete(true);
        await api.delete('/deletereview', {
            headers: {
                review_id: id
            }
        });
    }
    ;
    //SavesubmitHandler

    const SavesubmitHandler = async id=>{
        setsave(true);
        const response = await api.put('/updatereview', {
            text: value,
            rating: rating
        }, {
            headers: {
                review_id: id
            }
        });
        console.log(response);
        window.location.reload();
    }
    ;

    useEffect(()=>{
        if (del === true || save === true) {
            window.location.reload();
        }
    }
    , [del === true, save === true]);
    return (
   <Review
        submit= {submithandler}
        data= {data}
        setvalue= {valuehandler}
        setrating= {ratingHandler}
        close= {closeHandler}
        close1= {closeHandler1}
        show= {show}
        show1= {show1}
        login= {loginhandler}
        userdata= {userdata}
        Delete= {DeleteHandler}
        toggle= {toggle}
        togglevalue= {toggleHandler}
        editvalue= {editvalueHandler}
        togglefunction= {togglefunction}
        Savesubmit= {SavesubmitHandler}
        editvalue1= {value}
        editrating= {rating}
   />)
}
export default ReviewContainer;