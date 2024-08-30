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

function App() {
  
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
     <Navbar/>
      <Firstpage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Project/>
      <Skills/>
      <Footer/>
    </>
  );
}

export default App;
