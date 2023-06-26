import logo from './logo.svg';
import './App.css';
import Child from './components/Child';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Setting from './components/Setting';
import User from './components/User';

import { Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          
          <Route path='account'> 
              <Route path='profile' element={<Profile />} />
              <Route path='setting' element={<Setting />} />
          </Route>

          <Route path='/user/:userName' element={<User />} />
        </Routes>
        
      </header>
    </div>
  );
}

export default App;
