import Item from './components/Item';
import './App.css';

function App() {

  const response = [
    {
      productname : "Nirma",
    },
    {
      productname : "Surf Excel",
    },
    {
      productname : "555",
    }
  ]

  return (
    <div>
    <Item name={response[0].productname}/>

    <div className='App'>
      Hello JI
    </div>

    <Item name={response[1].productname}/>

    <div className='App'>
      KAISE HO
    </div>

    <Item name={response[2].productname}/>
    </div>
  );
}

export default App;
