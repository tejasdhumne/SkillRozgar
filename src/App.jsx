import './App.css'
import {Route,Routes} from "react-router-dom";
import Home from "./components/home";
import Login from './components/login';
import Jobs from './components/jobs';
import Notfound from './components/Notfound';
import PrtotectedRoute from './components/protectedRoute';
import JobFilter from './components/jobFilter';
import SimilarJobs from './components/similarJobs';
const App = ()=>{
    return(
      <Routes>
        <Route path='/' element={<PrtotectedRoute Component={Home}/>}></Route>

        <Route path='/login' element={<Login/>}></Route>

        <Route path='/jobs' element={<PrtotectedRoute Component={Jobs}/>}></Route>

        <Route path='/jobs/:id' element={<PrtotectedRoute Component={JobFilter}/>}></Route>

        <Route path='/jobs/:id/similar' element={<PrtotectedRoute Component={SimilarJobs}/>}></Route>

        <Route path='/*' element={<Notfound/>}></Route>
      </Routes>
    )
}

export default App
