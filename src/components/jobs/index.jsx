import './index.css';
import Header from '../header';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import FilterSection from '../filtersection';
import Jobdetails from '../jobdetails';


    const Jobs =()=> {

    const [allValues,setvalues] = useState({
        jobArr:[],
        empType:[],
        salary:"",
        userin:""
    })
    
        const getJobs = async()=>{
             
            const { empType, salary, userin } = allValues;

            const api = `https://apis.ccbp.in/jobs?employment_type=${empType}&minimum_package=${salary}&search=${userin}`;

            const token = Cookies.get("my-token");

            const options = {
                method: "Get",
                headers:{
                   Authorization: `Bearer ${token}`,
                }
            }
            try{
                const response = await fetch(api,options);
                const data = await response.json();

                console.log(data);
                 if(response.ok){
                
                setvalues({...allValues,jobArr : data.jobs});
                
            }
            }
           
            catch(error){
                console.log(error);
            }
        };
    useEffect(()=>{

        getJobs();
     },[allValues.empType,allValues.salary]);

    const onsubmit=(e)=>{
        e.preventDefault();
        getJobs();
        allValues.userin = "";

    } 

    const onhandle=(e)=>{
        setvalues({...allValues,userin:e.target.value})
    }
     
   

    return(
        <div >
            
            <Header/>
            <br>
            </br>
           <div  style={{display:"flex",justifyContent:"center"}}>
            <form className='w-100'style={{display:"flex",justifyContent:"center"}} onSubmit={onsubmit}>
                 <input  type='text' className='w-75' placeholder='seacrh for job ' value={allValues.userin} onChange={onhandle}></input>
                 <button className='btn btn-primary ms-2' type='submit'>Search</button>
            </form>
           </div>
           <br></br>
            <div className='head'>
            <div className='left'>
            <FilterSection setMyValues= {setvalues} myValues = {allValues}></FilterSection>
            </div>
            <div className='right'>
            {
                allValues.jobArr.map(each => <Jobdetails  jobdetails={each}  key={each.id}/>)
            }
            </div>
            </div>
        </div>
       
    )
}


export default Jobs;