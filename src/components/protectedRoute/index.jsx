import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from 'js-cookie';

const PrtotectedRoute = (prop)=>{
   
    const {Component}=prop ;
    const navigate = useNavigate();
    useEffect(()=>{
        const token = Cookies.get("my-token");
        if(token===undefined){
         navigate("/login");   
        }
    },[])

    return(
       <Component/>
    )
}

export default PrtotectedRoute;