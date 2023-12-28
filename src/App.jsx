import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { useContext, useState } from 'react';
import { ThemeContext } from "./Theme.jsx";
import Home from './pages/home.jsx';
import ToggleTheme from './components/logo.jsx';
import Footer from './components/footer.jsx';
import Project from './pages/projects.jsx';
import Design from './pages/design.jsx';
import Manifesto from './pages/manifesto.jsx';
import DirectU from './pages/directu.jsx';
import BrewCareer from './pages/brewcareer.jsx';
import About from './pages/about.jsx';
import NavBar from './components/nav.jsx';
import './App.css';

function PageRouter(){
  const { theme } = useContext(ThemeContext);

  return (
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

          <div className='flex-container' id='content' style={{ overflowY: 'scroll' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/design" element={<Design />} />
              <Route path="/manifesto" element={<Manifesto />} />
            </Routes>
            <div id='footer'>
              <Footer/>
            </div>
            </div>
        </div>
        <div className='flex-container' id='inner'/>
      </div>
      <div className='flex-container' id='border'/>
      </div>
    );
}

function ProjectRouter(){
  const { theme } = useContext(ThemeContext);

  return (
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
          <div className='flex-container' id='content' style={{ overflowY: 'scroll' }}>
              <Routes>
                <Route path="/" element={<Project />} />
                <Route path="/directu" element={<DirectU />} />
              </Routes>
            </div>
        </div>
        <div className='flex-container' id='inner'/>
      </div>
      <div className='flex-container' id='border'/>
      </div>
    );

}


function DesignRouter(){
  const { theme } = useContext(ThemeContext);

  return (
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
          <div className='flex-container' id='content' style={{ overflowY: 'scroll' }}>
              <Routes>
                <Route path="/" element={<Design />} />
                <Route path="/brewcareer" element={<BrewCareer />} />
              </Routes>

            </div>
        </div>
        <div className='flex-container' id='inner'/>
      </div>
      <div className='flex-container' id='border'/>
      </div>
    );

}

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <div className={`App ${theme}`}>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
      />
      <Routes>
        <Route path="/*" element={<PageRouter />} />
        <Route path="/projects/*" element={<ProjectRouter />}/>
        <Route path="/design/*" element={<DesignRouter />}/>
      </Routes>
      </div>
    </BrowserRouter>
    );
}

export default App
