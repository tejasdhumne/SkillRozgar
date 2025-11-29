import Header from '../header';
import './index.css';
import { useNavigate } from 'react-router-dom';


const Home =()=> {

    const navigate = useNavigate();

    const navigatetoJob =()=>{
        navigate("/jobs");

    }


    return(
        <div className='d1'>
            
            <div className='upper'>
                <Header></Header>
            </div>
            <div className='lower'>
                <div className='left'>
                    <h6>Welcome to SkillRozgar</h6><br></br>
             <p className='font'>
           Welcome to SkillRozgar, your gateway to exciting job opportunities and career success.
           We connect talented individuals with top companies looking for skilled professionals.
           Whether you’re a fresher or an experienced candidate, SkillRozgar helps you take the next big step in your career.

           Explore thousands of job openings across industries like IT, marketing, design, finance, and more.
            Build a strong profile, upload your resume, and let employers discover your potential.
           We make the job application process simple, transparent, and effective.

          At SkillRozgar, we believe your skills deserve the right platform to shine.
          Our mission is to bridge the gap between talent and opportunity — helping you find the job that matches your passion and abilities.
          Get job alerts, interview tips, and guidance to stay ahead in today’s competitive job market.

           Your dream career is just a few clicks away.
            Start your journey today — apply for jobs, connect with employers, and grow with SkillRozgar!
             </p>
          <button onClick={navigatetoJob} className='btn btn-primary'>Explore Jobs</button>

                </div>
                <div className='right'>
                  <img  src='https://cdn9.dissolve.com/p/D538_365_007/D538_365_007_1200.jpg' style={{width:"100%"}}></img> 

                </div>

            </div>
            
        </div>
    )
}


export default Home;