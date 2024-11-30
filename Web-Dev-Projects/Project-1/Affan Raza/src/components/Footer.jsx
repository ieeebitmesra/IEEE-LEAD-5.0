import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-black text-white py-8'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
                    <div className='flex-1 mb-4 md:mb-0'>
                        <h3 className='text-2xl font-bold mb-2'>Affan</h3>
                        <p className='text-gray-400'>Second year undergraduate student from Birla Institute of Technology, Mesra, Ranchi, Jharkhand pursuing Mathematics and Computing.</p>
                    </div>
                    <div className='flex-1 w-full'>
                        <form className='flex items-center justify-center'>
                            <input
                                type="email"
                                placeholder='Your Email'
                                className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' />
                            <button
                                type='submit'
                                className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg'>Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center'>
                    <p className='text-gray-400'>
                        &copy; {new Date().getFullYear()} Affan. All rights reserved.
                    </p>
                    <div className='flex space-x-4 my-4 md:my-0'>
                        <a href="https://www.facebook.com/kaify.hoon" className='text-gray-400 hover:text-white'>
                            <FaFacebookF></FaFacebookF>
                        </a>
                        <a href="https://www.linkedin.com/in/mohammad-affan-raza-b6039b288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='text-gray-400 hover:text-white'>
                            <FaLinkedin></FaLinkedin>
                        </a>
                        <a href="https://x.com/AffanRaza485434?t=4ptaWYH-AxeHPs1b5TPnOg&s=09" className='text-gray-400 hover:text-white'>
                            <FaXTwitter></FaXTwitter>
                        </a>
                        <a href="https://github.com/affanraza84" className='text-gray-400 hover:text-white'>
                            <FaGithub></FaGithub>
                        </a>
                    </div>
                    <div className='flex space-x-4'>
                        <a href="#" className='text-gray-400 hover:text-white'>
                            Privacy
                        </a>
                        <a href="#" className='text-gray-400 hover:text-white'>
                            Terms of Services
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer