import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Careers from './pages/Careers';
import Contact from './pages/Contact'; 
import Pricing from './pages/Pricing';
import NoPage from './pages/NoPage';
import GetStarted from './pages/GetStarted';
import Login from './pages/Login';
import ForgetPass from './pages/ForgetPass';
import Dashboard from './pages/Dashboard'
import Content from './pages/Content';
import Schedule from './pages/Schedule';



function App() {
  return (  
    <div>
      
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/careers' element={<Careers />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/pricing' element={<Pricing />}/>


        <Route path='/getstarted' element={<GetStarted />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/forgetpassword' element={<ForgetPass />}/>


        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/content' element={<Content />}/>
        <Route path='/schedule' element={<Schedule />}/>


        <Route path='*' element={<NoPage />}/>
      

      </Routes>
    </BrowserRouter>




    </div>
  );
}

export default App;
