import './App.css';
import Header from './components/Header';
import Pagination from './components/Pagination';
import Blogs from './components/Blogs';

function App() {
    return(
      <div>
        <Header/>
        <Blogs/>
        <Pagination/>
      </div>
    )
}

export default App;
