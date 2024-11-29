import React from 'react'
import Header from "../../components/Header";
import Intro from "./intro";
import About from "./About";
import Experience from "./Experiences"
import Projects from "./Projects"
import Footer from './Footer';
import Education from "./Education"
import LeftSider from './LeftSider';
import Contact from './Contact';
import { useSelector } from 'react-redux';
function Home() {
  const {portfolioData } = useSelector(state => state.root);

  return (
    <div >
        <Header />
        {portfolioData && (
          <div className='bg-primary px-40 sm:px-5'>
          <Intro />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Contact />
          <Footer />
          <LeftSider />
          </div>
        )}
    </div>
  );
}

export default Home
