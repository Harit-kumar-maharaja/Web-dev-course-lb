import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className='background w-full relative min-h-screen flex flex-col items-center'>
      <h1 className='w-11/12 text-center mt-[40px] px-10 py-2 text-3xl font-bold bg-white rounded-sm '>RANDOM GIFTS</h1>
      <div className=' flex flex-col w-full items-center gap-y-10 mt-[30px]' >
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
