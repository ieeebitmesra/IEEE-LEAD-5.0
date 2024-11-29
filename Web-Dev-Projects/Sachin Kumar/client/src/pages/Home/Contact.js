import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from "react-redux";
function Contact() {
  
  const {portfolioData } = useSelector(state => state.root);
  const {contact} = portfolioData;
                                 
    return (
        <div>
            <SectionTitle title="Say Hello " />
            <div className='flex items-center justify-between sm:flex-col'>
                <div className='flex flex-col gap-1'>
                    <p className='text-tertiary '> {'{'} </p>
                    {
                        Object.keys(contact).map((key,index) => 
                            key!=="_id" && ( <p key={index} className='ml-5 '>
                                <span className='text-tertiary'> {key} : </span>  {" "}
                                <span className='text-tertiary'> {contact[key]} </span>
                            </p>
                        ))
                    }
                    <p className='text-tertiary '> {'}'} </p>
                </div>
                <div className='h-[400px] '>
                    <dotlottie-player src="https://lottie.host/17e76870-dff0-4fbb-a0b3-ceb7c634473a/C1xRhbtG0t.json" background="transparent" speed="1"autoplay></dotlottie-player>
                </div>
            </div>
        </div>
    )
}

export default Contact