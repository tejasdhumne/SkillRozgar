import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'; 
import Cookies from 'js-cookie';
import './index.css';


const Login =()=> {
    const navigate = useNavigate();
    useEffect(()=>{
     const token = Cookies.get("my-token");
     if(token!==undefined){
      navigate('/');
     }
    },[])
   const [allValues,setvalues] = useState({
      username:"",
      password:"",
      errorMsg:""
    });

    

  const onSubmitUser = async(e)=>{
    e.preventDefault();

   
    const api = "https://apis.ccbp.in/login";

    const userdetails = {
      username: allValues.username,
      password: allValues.password,
     
    }
    const options = {
      method : "Post",
      body:JSON.stringify(userdetails)
    }
    try{
      const response = await fetch(api,options);
      const data = await response.json();

      if(response.ok){
        Cookies.set("my-token",data.jwt_token);
          setvalues({...allValues,errorMsg:""});
          console.log(data);
          navigate('/');
      }else{
         setvalues({...allValues,errorMsg:data.error_msg});
      }
    }
    catch(error){
      console.log(error);
    }

  }

                             
    return(
        <div className='d1'>
                              
               <form className='w-50 p-4 shadow bg-dark' onSubmit={onSubmitUser}>
                
               <div style={{display:'flex',justifyContent:"center"}}>
                   <h1 className='Title'>SkillRozgar</h1> 
               </div>
                 <br></br>
                
  <div className='d2'>
    <label htmlFor="exampleInputEmail1" className="form-label " >Name</label>
    <input onChange={(e)=>setvalues({...allValues,username:e.target.value})} type="text" className="form-control" id="exampleInputEmail1" />
    <div id="emailHelp"className="form-text">We'll never share your email with anyone else.</div>
  </div>
   <br></br>
  <div className='d3'>
    <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
    <input onChange={(e)=>{setvalues({...allValues,password:e.target.value})}} type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
 <br></br>
 <div style={{display:'flex',justifyContent:"center"}}>
   <button type="submit" className="btn btn-primary">Submit</button>
 </div>
   <br></br>
   <h1 className='text-danger' >{allValues.errorMsg}</h1>
</form>
        
        </div>
    )
}


export default Login;