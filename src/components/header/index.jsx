import { useEffect } from 'react';
import './index.css';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Header = ()=>{
   
    const naviagte = useNavigate();
   
  const loginToHomePage = ()=>{
 
    Cookies.remove("my-token");
    naviagte("/login");
    
  }

    return(
       
         <nav >

            <Link className='skill' to="/jobs" > SkillRozgar</Link>

            <ul className='nav-cont'>
                <li className='list'> 
                    <Link className='Home' to="/">HOME</Link>
                </li>
                <br></br>
                 <li  className='list'>
                    <Link className='job' to="/jobs">Jobs</Link>
                </li>
            </ul>

            <button onClick={loginToHomePage} className= 'btn btn-primary'>LOGOUT</button>

            
        </nav>
     
    )
}



export default Header;