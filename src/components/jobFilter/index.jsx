import { useParams } from 'react-router-dom';
import './index.css';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Header from '../header';
import { useNavigate } from 'react-router-dom';
import SimilarJobs from '../similarJobs';

  

  const JobFilter=()=>{

    const [allValues,setValues] = useState({
       
  jobDetails: {},
  life_at_company: {},
  skills: [],
 
  
        
    })

   
     const navigate = useNavigate();
     const {id} = useParams();

    

  
     useEffect(()=>{

     

         const jobAfterDisplay= async()=>{

        const api = `https://apis.ccbp.in/jobs/${id}`;

        const token = Cookies.get("my-token");

        const options = {
          method:"Get",
          headers:{
            Authorization: `Bearer ${token}`
          }  
        }
       try{
       
            const response = await fetch(api,options);
         const data = await response.json();
           if(response.ok){
         console.log(data.job_details);
          console.log(data.life_at_company);
           console.log(data.job_details.skills);
         
         
         setValues({...allValues,jobDetails:data.job_details,life_at_company:data.job_details.life_at_company,skills:data.job_details.skills});
         
         }
       }
       catch(error){
        console.log(error);
        
       }

    }
   


       jobAfterDisplay();

       

    },[]);
    const DisplayImg = ()=>{
     
      if(allValues.life_at_company.image_url){
         return <img src={allValues.life_at_company.image_url}></img>
      }else{
       return <p>No Image Available</p>
      }
    }

    const OnSimilar=()=>{
      navigate(`/jobs/${id}/similar`)
    }
    return(
       
         <div>
             <Header/>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
           
             <li  className='w-50 p-4 border shadow  ' style={{listStyle:"none",marginBottom:"10px"}}>  
          <div style={{display:"flex",alignItems:"center"}}>
             <img src={allValues.jobDetails.company_logo_url} style={{width:"75px"}}></img>
           <div className='ms-4'>
            <h1 >{allValues.jobDetails.title}</h1>
            
            <div >
           
             <span >Employment Type:</span>
           <span style={{color:"red",marginLeft:"5px"}}>{allValues.jobDetails.employment_type}</span>
           
           
           <span className='ms-5' >Package:</span>
           <span style={{color:"red",marginLeft:"5px"}}>{allValues.jobDetails.package_per_annum}</span>

           <span className='ms-5' >Location:</span>
           <span  style={{color:"red",marginLeft:"5px"}}>{allValues.jobDetails.location}</span>

            <span className='ms-5' >Rating:</span>
           <span  style={{color:"red",marginLeft:"5px"}}>{allValues.jobDetails.rating}</span>
           
           </div>
           </div>
          </div>
          <div>
            <hr></hr>
            <h3>Description</h3>
            <p style={{textAlign:"justify"}}>
                {allValues.jobDetails.job_description}
            </p>

            
           
            <h3>Life At Company:</h3>
          <p>{allValues.life_at_company.description}</p> 
            <h3>skills:</h3>
           <div style={{display:"flex"}}>
            {allValues.skills.map((each)=> (
            <div>
                <img src={each.image_url}></img>
            <p>{each.name}</p>
            </div>
            ))}
           </div>
          
           
         
           </div>
              <h3>Company Image:</h3>
           {DisplayImg()}<br></br>
       
          <div style={{display:"flex",justifyContent:"center"}}>
            <button onClick={OnSimilar} className='btn btn-primary' >Search similar jobs</button>
          </div>
        </li>
         </div>
         </div>
    )

}



export default JobFilter;