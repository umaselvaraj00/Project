// import logo from './logo.svg';
 import {  Route, BrowserRouter, Routes} from 'react-router-dom';
 import './App.css';
import Reg from './Reg';
import Table from './Table';
// import Error from './ Error';
function App() {
  return (
   <div>
    <BrowserRouter >
      <Routes>
            <Route exact path="/" element={<Reg/>}/>
            <Route path="/Table" element={<Table/>} />
            </Routes>
   </BrowserRouter>
  </div>
   );
  }
  export default App;
