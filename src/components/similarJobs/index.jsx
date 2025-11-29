import { useEffect, useState } from 'react';
import './index.css';
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';
import Header from '../header';


const SimilarJobs=()=>{

   
  const [allValues,setValues] = useState({
  
  similarJobs :[],
    
 })
    

   const {id} = useParams();
  
  useEffect(()=>{
    const afterDisplay=async()=>{
          const api =  `https://apis.ccbp.in/jobs/${id}`;
    const token = Cookies.get("my-token");

    const options = {
        method :"Get",
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    try{
         const response = await fetch(api,options);
        const data = await response.json();
       if(response.ok){
        
        console.log(data.similar_jobs);
        setValues({...allValues,similarJobs:data.similar_jobs})
       }
    }
    catch(error){
        console.log(error);
         
        console.log(data.similar_jobs);
    }
   
    }

    afterDisplay();
  },[])
    return(
      <div>
        <div>
           <Header/>
        </div>
        <ul style={{listStyle:"none"}} className='ulist'>
            {allValues.similarJobs.map((each) =>{
             return(   <li  className='logo shadow'key={each.id} >  
          <div style={{display:"flex",alignItems:"center"}}>
             <img src={each.company_logo_url} className='image'></img>
           <div className='ms-4'>
            <h1 >{each.title}</h1>
            
            <div  className="job-details" >
           
             <span >Employment Type:</span>
           <span className='emp'>{each.employment_type}</span>

           <span className='ms-5' >Location:</span>
           <span  className='location'>{each.location}</span>

            <span className='ms-5' >Rating:</span>
           <span  className='rating'>{each.rating}</span>
           
           </div>
           </div>
          </div>
          <div>
            <hr></hr>
            <h3>Description</h3>
            <p className='desc'>
                {each.job_description}
            </p>
           
          </div>
        </li>
             )
            })}
        </ul>
        </div>
    )
}


export default SimilarJobs;