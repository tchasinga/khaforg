import firstContact from '@/app/Data/firstContact.js';
import React from 'react';
import { motion } from 'framer-motion';

export default function Seecontact() {

  // Animation variants for the container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const containerVariantstwo = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
        duration: 0.5 // Move duration into the transition object
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      className='flex flex-col items-center justify-center w-full h-screen bg-black opacity-100 absolute z-[-9999]'
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
    >
      <motion.div className="max-w-md w-full bg-white p-5 rounded-xl"
        initial="hidden"
        animate="visible"
        variants={containerVariantstwo} // Corrected variants
      >
        <motion.div className="mygridtemplate">
          {
            firstContact.map((item, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-3 p-3 border-2 border-gray-400 rounded-xl"
                variants={itemVariants} // Apply animation to each item
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
