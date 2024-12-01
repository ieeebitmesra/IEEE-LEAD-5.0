import { useEffect } from 'react';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { LINKS } from '../constants/index';
import { AnimatePresence , motion} from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        if(isOpen){
            document.body.style.overflow = 'hidden';
        }
        else{
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    const containerVariants = {
        hidden: {opacity: 0, y: '-100%'},
        visible: {opacity: 1, y: 0, 
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const linkVariants = {
        hidden: {opacity: 0, y: -50},
        visible: {opacity: 1, y: 0}
    }

  return (
    <>
        <nav className='fixed right-0 top-0 z-30 p-4'>
            <button onClick={toggleMenu} className='rounded-md p-2 hover:text-customText2'>
                {isOpen ? (
                    <FaTimes className='h-6 w-6'/>
                ):(
                    <FaBars className='h-6 w-6'/>
                )}
            </button>
        </nav>
        <AnimatePresence>
        {isOpen && (
            <motion.div 
                initial='hidden'
                animate='visible'
                exit='hidden'
                variants={containerVariants}

            className='fixed inset-0 z-20 flex flex-col items-center justify-center bg-customBg text-customText'>
                <ul className='space-y-6 text-3xl'>
                    {LINKS.map((link) => (
                        <motion.li 
                        variants={linkVariants}
                        key={link.id}>
                            <a href={`#${link.id}`} onClick={toggleMenu} className='text-5xl font-semibold uppercase tracking-wide hover:text-customText2 lg:text-9xl'>
                                {link.name}
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        )}
        </AnimatePresence>
    </>
  )
}

export default Navbar
