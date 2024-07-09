import './App.css';
import Header from './components/Header';
import Pagination from './components/Pagination';
import Blogs from './components/Blogs';
import { useContext, useEffect } from 'react';
import { AppContext1 } from './context/AppContext1';

function App() {

  const {fetchblogposts} = useContext(AppContext1);

  useEffect(() => {
    fetchblogposts()
  } ,[])

    return(
      <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
        <Header/>
        <Blogs/>
        <Pagination/>
      </div>
    )
}

export default App;
