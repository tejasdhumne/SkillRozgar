import { useEffect, useState } from 'react';
import './index.css';
import Cookies from 'js-cookie'; 

const empArr =[
    {
        id:"INTERNSHIP",
        label : "Internship"
    },
     {
        id:"PARTTIME",
        label : "PartTime"
    },
     {
        id:"FULLTIME",
        label : "FullTime"
    },
     {
        id:"FREELANCE",
        label : "FreeLance"
    },
]
const slaryArr= [
    {
        id:1000000,
        label:"10LPA  and Above"
    },
     {
        id:2000000,
        label:"20LPA  and Above"
    },
     {
        id:3000000,
        label:"30LPA  and Above"
    },
     {
        id:4000000,
        label:"40LPA  and Above"
    },
]
const FilterSection =(prop)=>{

    const {myValues,setMyValues }= prop;

    

    const [allValues,setValues] = useState(
        {
           profileDeatils : {}
        }
    );

   useEffect(()=>{

    const getProfile=async ()=>{

    const token = Cookies.get("my-token");

    const api = "https://apis.ccbp.in/profile";

    const options ={
        method:"GET",
        headers:{
             Authorization: `Bearer ${token}`,
        }
       
     }

   try{
           const response = await fetch(api,options);
           const data = await response.json();

           if(response.ok){
            setValues({...allValues,profileDeatils:data.profile_details})
           }
   }
   catch(error){
    console.log(error);
   }
}
 getProfile();

   },[])

   const displayProfile=()=>(
    <div className="profile-box shadow p-3 d-flex align-items-center ms-3" >
        <img src={allValues.profileDeatils.profile_image_url} width={"100px"}/> 
        <div>
            <h1>{allValues.profileDeatils.name}</h1>
            <p>{allValues.profileDeatils.short_bio}</p>
        </div>
    </div>
   )

   const employType=()=>( 
    
   <ul className="filter-box shadow p-3 ms-3">
    <h4>Employeement Type:</h4>
    {
        empArr.map(each=>(
            <li key={each.id} style={{listStyle:"none"} } >
                <input id={each.id} type="checkbox" onChange={onClick} value={each.id}/>
                <label className='ms-3'  htmlFor={each.id}>{each.label} </label>
            </li>
        ))
    }
   </ul>
   )

   const salaryType = ()=>(
    <ul className="filter-box shadow p-3 ms-3" >
    <h4>Sallary Range:</h4>
    {
        slaryArr.map(each=>(
            <li key={each.id} style={{listStyle:"none"}} >
                <input name='salary' id={each.id} type="radio" onChange={onSalaryType} value={each.id} checked={myValues.salary===each.id}/>
                <label className='ms-3'  htmlFor={each.id}>{each.label} </label>
            </li>
        ))
    }
   </ul>

)    
    const onSalaryType=(e)=>{
        
         setMyValues({...myValues,salary:Number(e.target.value)})

         console.log(e.target.value)

    }
    const onClick=(e)=>{
       
        if(e.target.checked){
             setMyValues({...myValues,empType:[...myValues.empType,e.target.value]})
        }
        else{
             setMyValues({...myValues,empType: myValues.empType.filter(each => each!== e.target.value)})
        }
        
    }
   
   return(
   <div className='className="filter-container ' >
    {
        displayProfile()
    }
    <br></br>
    {
        employType()
    }
        <br></br>
    {
        salaryType()
    }
   </div>
   )
}


export default FilterSection;