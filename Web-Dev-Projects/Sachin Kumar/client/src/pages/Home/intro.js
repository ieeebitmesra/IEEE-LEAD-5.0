import React from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
function Intro() {
  const { portfolioData } = useSelector(state => state.root);
  const {intro} = portfolioData;
  const {firstName ,lastName,welcomeText,description ,caption} = intro;
  const navigate =useNavigate();
  return (
    <div id="home" className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>

        <h1 className='text-white'>{  welcomeText || '' }  </h1>

        <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>{firstName || ""} {lastName || ""} </h1>

        <h1 className='text-7xl sm:text-3xl text-white font-semibold'> {caption || ""} </h1>

        <p className='text-white w-2/3'>
        {description || ""}
       </p>
        <button onClick={()=>navigate(`/admin-login`)}
         className='border-2 border-tertiary text-tertiary px-10 py-3 rounded sm:hidden '>Get started</button>
    </div>
  )
}

export default Intro;

