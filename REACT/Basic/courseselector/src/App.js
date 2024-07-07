import './App.css';
import {filterdata , apiurl} from './data'
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import {toast} from 'react-toastify'
import { useEffect, useState } from 'react';
import Spinner from './components/Spinner';

function App() {

  const [courses , setcourses] = useState(null)
  const [loading , setloading] = useState(true)
  const [category , setcategory] = useState(filterdata[0].title)

  

  useEffect(() => {
    const fetchdata = async() => {
      setloading(true);
      try {
        const response = await fetch(apiurl);
        const output = await response.json();
        //save the data into a variable
        setcourses(output.data);
  
      } catch (error) {
        toast.error("Something went wrong")
      }
      setloading(false);
    }
    fetchdata();
  } , []);

  return (
    
      <div className='min-h-screen flex flex-col'>
        <div >
        <Navbar/>
        </div>

        <div className='bg-slate-400'>
        <div>
        <Filter filterdata = {filterdata} category={category} setcategory = {setcategory}/>
        </div>
        <div className='w-11/12 max-w[1200px] mx-auto flex flex-wrap justify-center items-centermin-h-[50vh]'>
        {
          loading ? (<Spinner/>) : (<Cards courses = {courses} category = {category}/>)
        }
        </div>
        </div>
      </div>
    
  );
}

export default App;
