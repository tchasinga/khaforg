import firstContact from '@/app/Data/firstContact.js';
import React from 'react';
import { motion } from 'framer-motion';

export default function Seecontact({ handleClose }) {

  // Animation variants for the container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    exit: { opacity: 0 } // Smooth exit animation
  };

  const containerVariantstwo = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
        duration: 0.5 
      }
    },
    exit: { opacity: 0, transition: { duration: 0.5 } } // Smooth exit
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 50 } // Exit for items too
  };

  return (
    <motion.div 
      className='flex flex-col items-center justify-center w-full h-screen fixed top-0 left-0  bg-black bg-opacity-50 z-[9999]' // Fixed positioning and centering
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      onClick={handleClose} // Handle outside click to close
    >
      <motion.div className="max-w-md w-full bg-white p-5 rounded-xl"
        initial="hidden"
        animate="visible"
        exit="exit" // Add exit here for smooth closing
        variants={containerVariantstwo}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <motion.div className="mygridtemplate">
          {
            firstContact.map((item, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-3 p-3 border-2 border-gray-400 rounded-xl"
                variants={itemVariants}
              >
                <div className='flex items-center gap-3 text-2xl text-blue-600 font-bold'>
                  {item.icons}
                </div>
                <div className="w-full">
                  <h1 className='text-xs w-full'>{item.name}</h1>
                </div>
              </motion.div>
            ))
          }
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
