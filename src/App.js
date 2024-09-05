// import logo from './logo.svg';
/* eslint-disable */
import './App.css';
import "./index.css"
import LocomotiveScroll from 'locomotive-scroll';
// import Cyl from './components/cyl';
import Navbar from './components/navbar';
// import Firstpage from './components/firstpage';
// import Marquee from './components/marquee';
// import About from './components/about';
// import Eyes from './components/eyes';
// import Project from './components/project';
// import Skills from './components/skills';
// import Footer from './components/footer';
// import FullAbout from './components/fullAbout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FullAbout from './components/fullAbout';
import ScrollToTop from './components/scrollTop';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (

    <>
      <BrowserRouter>
      <ScrollToTop/>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' Component={Navbar}/>
          <Route path='/about' Component={FullAbout}/>
        </Routes>
      </BrowserRouter>
      {/* <Firstpage />
      <Marquee />
      <About />
      <Eyes />
      <Project />
      <Skills />
      <Footer />
      <FullAbout /> */}
    </>
  );
}

export default App;
