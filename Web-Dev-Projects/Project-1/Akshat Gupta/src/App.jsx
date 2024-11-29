import React from 'react';
import { Route, BrowserRouter as Router , Routes } from 'react-router-dom';
import { Home,About,Contact,Projects } from './pages';
import Navbar from './Components/Navbar';
import { ThemeProvider } from './ThemeContext';
import StarsCanvas from './models/StarBackground';
const App = () => {
  console.log("akshat");
  return (
  
    <ThemeProvider>
    
    <main className='min-h-screen absolute top-0 right-0 left-0 bg-slate-300 dark:bg-slate-950 text-black dark:text-white'>
    
    
    <StarsCanvas/>
      <Router>
        <div className='z-[10]'>
        <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
      
    </main>
    </ThemeProvider>
    
  )
}

export default App
