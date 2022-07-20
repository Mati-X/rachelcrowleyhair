import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from './Routes/About';
import Home from './Routes/Home';
import Services from './Routes/Services';
import Contact from './Routes/Contact';
import Gallery from './Routes/Gallery';
import NotFound from './Routes/NotFound';
import {Header, Footer} from './Components/index.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter >
  <Header/>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="about" element={<About />} />
    <Route path="services" element={<Services />} />
    <Route path="gallery" element={<Gallery />} />
    <Route path="contact" element={<Contact />} />
    <Route
      path="*"
      element={<NotFound />}
    />
</Routes>
  <Footer/>
  </BrowserRouter>
)
