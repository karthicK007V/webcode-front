
import './App.css';
import Login from './reg/login';
import Regsiter from './reg/regsiter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Forget from './reg/forget';

function App() {
  return (
<>
<Router>
  <Routes>
    <Route path='/' element={<Login/>}/>
  </Routes>
  <Routes>
  <Route path='/regi' element={<Regsiter/>}/>
  <Route path='/forget' element={<Forget/>}/>


  </Routes>
</Router>

</>
  );
}

export default App;
