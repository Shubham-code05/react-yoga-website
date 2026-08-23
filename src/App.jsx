
import './App.css'
import Navbar from "./component/Navbar";
import HeroPage from"./component/HeroPage";
import About from './component/About';
import JoinClass from './component/JoinClass';
import WhyChooseUs from './component/WhyChooseUs';
import Partners from './component/Partners';
import CallToAction from './component/CallToAction';
import Contact from './component/Contact';
import ProgramGuide from './component/ProgramGuide';

function App() {
  

  return (
    <>
      < Navbar />
      <HeroPage />
      <About/>
      <JoinClass/>
      <ProgramGuide />
      <WhyChooseUs/>
       <Partners/>
      <CallToAction/>
      <Contact />
      

    </>
  )
}

export default App
