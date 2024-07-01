
import './App.css';
import Newproduct from './components/Newproduct';
import Products from './components/Products';

function App() {

  const products = [
    {
      id:'p1',
      title:'Nirma',
      amount : '100',
      date : new Date(2021 , 8 ,9)
    },
    {
      id:'p2',
      title:'Surf excel',
      amount : '110',
      date : new Date(2021 , 10 ,10)
    },
    {
      id:'p3',
      title:'555',
      amount : '100',
      date : new Date(2021 , 7 ,29)
    },
    {
      id:'p4',
      title:'Tide',
      amount : '80',
      date : new Date(2021 , 3 ,19)
    },
  ]

  return (
    <div>
    
    <Products items = {products}/>

    <Newproduct/>
    
    </div>
  );
}

export default App;
