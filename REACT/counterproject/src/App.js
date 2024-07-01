import './App.css';
import {useState} from 'react'

function App() {

  const [count , setcount] = useState(0);

  function decresehandler(){
    setcount(count-1)
  }
  function increasehandler(){
    setcount(count+1)
  }
  function resethandler(){
    setcount(0);
  }

  return (
    <div className= "w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-[#0398d4] font-medium text-3xl">
        Increment &  Decrement
      </div>
      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344251]"> 
        <button className='border-r-2 text-center w-20 border-[#bfbfbf] text-5xl' onClick = {decresehandler}>
          -
        </button>
        <div className='font-bold gap-12 text-5xl'>
          {count}
        </div>
        <button className='border-l-2 text-center w-20 border-[#bfbfbf] text-5xl' onClick = {increasehandler}>
          +
        </button>
      </div>
      <button onClick={resethandler} className='bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg'>
        RESET
      </button>
    </div>
  );
}

export default App;
