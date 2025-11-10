import { useParams } from 'react-router-dom';
import './index.css';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Header from '../header';
import { useNavigate } from 'react-router-dom';
import SimilarJobs from '../similarJobs';

  

  const JobFilter=()=>{

    const [allvalues,setValues] = useState({
       
  company: "",
   life_at_company: { description: "", image_url: "" },
  skills: [],
  similarJobs :[],
  
        
    })

   
     const navigate = useNavigate();
    const {id} = useParams();

    

  
     useEffect(()=>{

        const {company,life_at_company,skills,similarJobs} = allvalues;
        
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
         console.log(data.similar_jobs)
         console.log(allvalues);
         setValues(data.job_details)
         }
       }
       catch(error){
        console.log(error);
       }

    }
   


       jobAfterDisplay();

       

    },[]);
    const DisplayImg = ()=>{
     
      if(allvalues.life_at_company.image_url){
         return <img src={allvalues.life_at_company.image_url}></img>
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
             <img src={allvalues.company_logo_url} style={{width:"75px"}}></img>
           <div className='ms-4'>
            <h1 >{allvalues.title}</h1>
            
            <div >
           
             <span >Employment Type:</span>
           <span style={{color:"red",marginLeft:"5px"}}>{allvalues.employment_type}</span>
           
           
           <span className='ms-5' >Package:</span>
           <span style={{color:"red",marginLeft:"5px"}}>{allvalues.package_per_annum}</span>

           <span className='ms-5' >Location:</span>
           <span  style={{color:"red",marginLeft:"5px"}}>{allvalues.location}</span>

            <span className='ms-5' >Rating:</span>
           <span  style={{color:"red",marginLeft:"5px"}}>{allvalues.rating}</span>
           
           </div>
           </div>
          </div>
          <div>
            <hr></hr>
            <h3>Description</h3>
            <p style={{textAlign:"justify"}}>
                {allvalues.job_description}
            </p>

            
           
            <h3>Life At Company:</h3>
            <p>{allvalues.life_at_company.description}</p>
            <h3>skills:</h3>
            <ul  style={{display:"flex",listStyle:"none"}}>
                {allvalues.skills.map(each => (
                     <li key={each.name}>
                      
                    <img style={{marginRight:"40px"}}  src={each.image_url}></img>
                    
                </li>
                ))}
               
            </ul>
          
           
         
           </div>
              <h3>Company Image:</h3>
           {DisplayImg()}<br></br>
        { /*  <div style={{display:"flex",justifyContent:"center"}}>
            {
            allvalues.similarJobs.map(each => (<SimilarJobs similarJobs = {each}  key={each.id}/>))
            }
            <button onClick={OnSimilar} className='btn btn-primary' >Search similar jobs</button>
           </div>
           */}
        </li>
         </div>
         </div>
    )

}



export default JobFilter;