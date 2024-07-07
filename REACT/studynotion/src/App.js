import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import{Routes , Route} from 'react-router-dom'
import Privaterouter from './components/Privaterouter';
import { useState } from 'react';



function App() {

  const [isloggedin , setisloggedin] = useState(false);

  return (
    <div className='w-full bg-cover min-h-screen bg-gray-900 flex flex-col'>
      <Navbar isloggedin={isloggedin} setisloggedin={setisloggedin}/>

      <Routes>

        <Route path="/" element = {<Home isloggedin={isloggedin}/>}/>
        <Route path="/login" element = {<Login setisloggedin={setisloggedin}/>}/>
        <Route path="/signup" element = {<Signup setisloggedin={setisloggedin}/>}/>
        <Route path="/dashboard" element = {
          <Privaterouter isloggedin = {isloggedin}>
            <Dashboard/>
          </Privaterouter>
          }/>

      </Routes>
      

    </div>
  );
}

export default App;
