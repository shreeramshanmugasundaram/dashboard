import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Admin from './Components/Home/Admin';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Admin/>}></Route>
      <Route path = "/overall" element = {<>Overall : Under Development</>}></Route>
      <Route path = "/employees" element = {<>Employee : Under Development</>}></Route>
      <Route path = "/today" element = {<>Employee : Under Development</>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
