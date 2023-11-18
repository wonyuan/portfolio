import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Home from './pages/home.jsx';
import ToggleTheme from './components/logo.jsx';
import Footer from './components/footer.jsx';
import Project from './pages/projects.jsx';
import NavBar from './components/nav.jsx';
import './App.css';
/* 
    <div className='flex-container' id='base'>
        <div className='flex-container' id='nav-bar'>
          </div>
      </div>

          <NavLink 
                to="/" 
                activeStyle={{ color: '#818dc7' }}
                style={{ color: '#1c2554' }}>
                Home
          </NavLink>
*/

function App() {
  return (
    <BrowserRouter>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
      />
      <div className='flex-container' id='border'/>
      <div className='flex-container' id='border'>
        <div className='flex-container' id='inner'/>
        <div className='flex-container' id='inner'>

          <div className='flex-container' id='nav-bar'>
            <div className='flex-container' id='logo'> 
              <ToggleTheme/>
            </div>
              <NavBar/>
            </div>
            <div className='flex-container' id='content'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<Project />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/design" element={<Project />} />
              <Route path="/manifesto" element={<Project />} />
            </Routes>
            <Footer/>
            </div>
        </div>
        <div className='flex-container' id='inner'/>
      </div>
      <div className='flex-container' id='border'/>
    </BrowserRouter>  
    );
}

export default App
