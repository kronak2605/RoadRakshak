import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css';
import Navbar from "./Navbar.jsx";
import HomePage from "./landingPage/Home/HomePage.jsx";
import About from "./landingPage/About/About.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <HomePage/>
    <About />
  </StrictMode>,
)
