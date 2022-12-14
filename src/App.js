import React from 'react';
import {Navigate,Link, Route,Routes} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
const HatsPage  =()=> (
  <div><h1>Hats Page</h1></div>
)
function App() {
  return (
    <>
    <nav >
       <Link className='  p-3 mx-3' to="/">Home</Link>
        <Link className='  p-3 mx-3' to="/hats">Hats Page</Link>
    </nav>
    <Routes>
     <Route  path='/' element={<HomePage/>}/>
     <Route  path='/hats' element={<HatsPage/>}/>
     <Route  path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </>
  );
}

export default App;
