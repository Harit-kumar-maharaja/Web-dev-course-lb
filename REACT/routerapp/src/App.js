
import './App.css';
import {NavLink, Route , Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Labs from './components/Labs'
import Support from './components/Support'
import Notfound from './components/Notfound'
import Mainheader from './components/Mainheader';

function App() {
  return (
    <div className='app'>

      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/labs">Labs</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/support">Support</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Mainheader/>}>
          {/* default route */}
          <Route index element={<Home/>}/>
          <Route path="/support" element={<Support/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/labs" element={<Labs/>}/>
          <Route path="/*" element={<Notfound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
