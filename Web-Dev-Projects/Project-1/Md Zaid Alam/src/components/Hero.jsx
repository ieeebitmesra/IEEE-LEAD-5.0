import { LuImport } from 'react-icons/lu';
import zaid from '../assets/zaid.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className='relative'>
      <div className='flex flex-col items-center justify-center relative'>
        <motion.h1
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5 ,delay: 2 }}
          className='mt-16 overflow-hidden uppercase text-[12vw] font-semibold leading-none'
        >
          Zaid Alam
        </motion.h1>
        <motion.div 
        initial={{ opacity: 0, filter: 'blur(100px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 2, delay: 2 }}
        className='mt-8'>
          <a
            href='/public/zaidresume.pdf'
            target='_blank'
            rel='noopener noreferrer'
            download
            className='flex items-center rounded-xl bg-customText p-2 px-3 font-sans font-medium text-customText2 hover:bg-customText2 hover:text-customText transition-colors duration-300 '
          >
            <span>Download CV</span>
            <LuImport className='ml-2' />
          </a>
        </motion.div>
        <div className='relative w-full'>
          <img
            src={zaid}
            alt='Zaid Alam'
            className='mt-8 w-full h-96 object-cover'
            loading='eager'
            style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }}
            onLoad={(e) => e.currentTarget.style.opacity = 1}
          />
          <div className='absolute inset-0 bg-gradient-to-b from-customText2 via-transparent to-transparent top-8 opacity-75' />
          <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent top-8' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
