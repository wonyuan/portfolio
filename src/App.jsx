import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { useContext, useState } from 'react';
import { ThemeContext } from "./Theme.jsx";
import Home from './pages/home.jsx';
import ToggleTheme from './components/logo.jsx';
import Footer from './components/footer.jsx';
import Project from './pages/projects.jsx';
import About from './pages/about.jsx';
import NavBar from './components/nav.jsx';
import './App.css';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <div className={`App ${theme}`}>
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
              <Route path="/about" element={<About />} />
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
      </div>
    </BrowserRouter>  
    );
}

export default App
