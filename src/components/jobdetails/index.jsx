import { Link } from 'react-router-dom';
import './index.css';

  const Jobdetails =(prop)=>{

    

    const {jobdetails} = prop;

    return(
        

         <Link to={`/jobs/${jobdetails.id}`}>
          
          <li  className='w-75 p-4 border shadow ms-5  ' style={{listStyle:"none",marginBottom:"10px"}}>  
          <div style={{display:"flex",alignItems:"center"}}>
             <img src={jobdetails.company_logo_url} style={{width:"75px"}}></img>
           <div className='ms-4'>
            <h1 >{jobdetails.title}</h1>
            
            <div >
           
             <span >Employment Type:</span>
           <span style={{color:"red",marginLeft:"5px"}}>{jobdetails.employment_type}</span>
           
           
           <span className='ms-5' >Package:</span>
           <span style={{color:"red",marginLeft:"5px"}}>{jobdetails.package_per_annum}</span>

           <span className='ms-5' >Location:</span>
           <span  style={{color:"red",marginLeft:"5px"}}>{jobdetails.location}</span>

            <span className='ms-5' >Rating:</span>
           <span  style={{color:"red",marginLeft:"5px"}}>{jobdetails.rating}</span>
           
           </div>
           </div>
          </div>
          <div>
            <hr></hr>
            <h3>Description</h3>
            <p style={{textAlign:"justify"}}>
                {jobdetails.job_description}
            </p>
           
          </div>
        </li>
         
         </Link>
       
      
    )
}

export default Jobdetails;