import logo from './logo.svg';
import './App.css';
import "./index.css"
import LocomotiveScroll from 'locomotive-scroll';
import Cyl from './components/cyl';
import Firstpage from './components/firstpage';
import Navbar from './components/navbar';
import Marquee from './components/marquee';
import About from './components/about';
import Eyes from './components/eyes';
import Project from './components/project';
import Skills from './components/skills';
import Footer from './components/footer';
import FullAbout from './components/fullAbout';
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    
    <>
    <BrowserRouter>
     <Navbar/>
      <Firstpage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Project/>
      <Skills/>
      <Footer/>
      </BrowserRouter>
      {/* <FullAbout/> */}

      <Router>
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Skills/>}/>
          <Route path='/projects' element={<Project/>}/>
          {/* <Route path='/fullAbout' element={<FullAbout/>}/> */}
        </Routes>
      </Router>
      
      </>
  );
}

export default App;
