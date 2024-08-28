import React, { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './output.css';
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Footer from './pages/Footer';

function App() {
  const [mode, setMode] = useState("bg-white")
  const togglMode = () =>{
    if(mode === "bg-white"){
      setMode("bg-zinc-800")
      document.body.classList.add("bg-zinc-700")
    }else{
      setMode("bg-white")
      document.body.classList.remove("bg-zinc-700")
    }
  }

  return (
    <>
    <BrowserRouter>
    <Navbar mode={mode} togglMode={togglMode}/>
    <Routes>
      <Route exact path='/' element={<Home mode={mode}/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/blog' element={<Blog/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer mode={mode}/>
    </BrowserRouter>
    </>
  );
}

export default App;
