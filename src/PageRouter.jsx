import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import NavBar from './components/NavBar.jsx';
import './App.css';

function PageRouter() {
  return (
    <>
    <div class='flex-container' id='base'/>
    <div class='flex-container' id='base'>
      <div class='flex-container' id='side'/>
      <div class='flex-container' id='side'>
      <h1> hello</h1>        
      </div>
      <div class='flex-container' id='side'/>
    </div>
    <div class='flex-container' id='base'/>
    </>
  )
}

export default PageRouter;
