import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Home = () => {
    const [showTitle, setShowTitle] = useState(true);

    // uncomment this if we want to make the "title" dissapear after 10 seconds... No exit animations at this moment.

    // setTimeout(() => {
    //     setShowTitle(false);
    // }, 10000)

    const buttonVariants = {
        slideX: {
            opacity: 0,
            x: 0,
            
        },
        animation: {
            opacity: 1, 
            x: [0, -10,  0,],
            transition: {
                x: {
                    ease: "easeInOut",
                    duration: 1,
                    delay: 5
                }              
            }
        },
    }

    const titleVariants = {
        animation: {
            color: '#ff2994',
            transition: {
                delay: 2
            }
        }
    }

   


  return (
    <>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="        
        text-3xl
        text-white 
        font-bold 
        h-screen
        w-screen
        grid 
        md:grid-cols-3
        grid-cols-1
        md:gap-y-16
        content-center
        bg-gradient-to-r 
        from-indigo-500 
        via-purple-500 
        to-indigo-500
        justify-items-center">
            <AnimatePresence>
                {showTitle && (
                    <motion.h1
                    variants={titleVariants}
                    animate='animation'                 
                    className='md:col-span-3 text-white font-bold text-7xl'>Choose Your Sign</motion.h1>
                )}
            </AnimatePresence>

         
            <motion.button
            className='rounded-full p-5 border-2 border-white w-72'
            variants={buttonVariants}
            initial='slideX'
            animate='animation'
            whileHover={{ 
                scale: 1.5,
                textShadow: "0px 0px 8px rgba(255, 255, 255)",
                boxShadow: "0px 0px 8px rgba(255, 255, 255)",
                color: '#f8e112',
                transition:{yoyo: Infinity, duration: 0.5 }            
            }}
            
            whileTap={{ scale: 0.9 }}
            >Aquarius</motion.button>

            <motion.button
            className='rounded-full p-5 border-2 border-white w-72'
            variants={buttonVariants}
            initial='slideX'
            animate='animation'
            whileHover={{ 
                scale: 1.5,
                textShadow: "0px 0px 8px rgba(255, 255, 255)",
                boxShadow: "0px 0px 8px rgba(255, 255, 255)",
                color: '#f8e112',
                transition:{yoyo: Infinity, duration: 0.5}            
            }}
            whileTap={{ scale: 0.9 }}
            >Aries</motion.button>

            <motion.button 
            className='rounded-full p-5 border-2 border-white w-72'
            variants={buttonVariants}
            initial='slideX'
            animate='animation'
            whileHover={{ 
                scale: 1.5,
                textShadow: "0px 0px 8px rgba(255, 255, 255)",
                boxShadow: "0px 0px 8px rgba(255, 255, 255)",
                color: '#f8e112',
                transition:{yoyo: Infinity, duration: 0.5}            
            }}
            whileTap={{ scale: 0.9 }}
            >Cancer</motion.button>

            <motion.button 
            className='rounded-full p-5 border-2 border-white w-72'
            variants={buttonVariants}
            initial='slideX'
            animate='animation'
            whileHover={{ 
                scale: 1.5,
                textShadow: "0px 0px 8px rgba(255, 255, 255)",
                boxShadow: "0px 0px 8px rgba(255, 255, 255)",
                color: '#f8e112',
                transition:{yoyo: Infinity, duration: 0.5}            
            }}
            whileTap={{ scale: 0.9 }}
            >Capricorn</motion.button>

            <motion.button 
            className='rounded-full p-5 border-2 border-white w-72'
            variants={buttonVariants}
            initial='slideX'
            animate='animation'
            whileHover={{ 
                scale: 1.5,
                textShadow: "0px 0px 8px rgba(255, 255, 255)",
                boxShadow: "0px 0px 8px rgba(255, 255, 255)",
                color: '#f8e112',
                transition:{yoyo: Infinity, duration: 0.5}            
            }}
            whileTap={{ scale: 0.9 }}
            >Gemini</motion.button>

            <motion.button 
            className='rounded-full p-5 border-2 border-white w-72'
            variants={buttonVariants}
            initial='slideX'
            animate='animation'
            whileHover={{ 
                scale: 1.5,
                textShadow: "0px 0px 8px rgba(255, 255, 255)",
                boxShadow: "0px 0px 8px rgba(255, 255, 255)",
                color: '#f8e112',
                transition:{yoyo: Infinity, duration: 0.5}            
            }}
            whileTap={{ scale: 0.9 }}
            >Leo</motion.button>

            <motion.button 
            className='rounded-full p-5 border-2 border-white w-72'
            variants={buttonVariants}
            initial='slideX'
            animate='animation'
            whileHover={{ 
                scale: 1.5,
                textShadow: "0px 0px 8px rgba(255, 255, 255)",
                boxShadow: "0px 0px 8px rgba(255, 255, 255)",
                color: '#f8e112',
                transition:{yoyo: Infinity, duration: 0.5}            
            }}
            whileTap={{ scale: 0.9 }}
            >Libra</motion.button>

            <motion.button 
            className='rounded-full p-5 border-2 border-white w-72'
            variants={buttonVariants}
            initial='slideX'
            animate='animation'
            whileHover={{ 
                scale: 1.5,
                textShadow: "0px 0px 8px rgba(255, 255, 255)",
                boxShadow: "0px 0px 8px rgba(255, 255, 255)",
                color: '#f8e112',
                transition:{yoyo: Infinity, duration: 0.5}            
            }}
            whileTap={{ scale: 0.9 }}
            >Pisces</motion.button>

            <motion.button 
            className='rounded-full p-5 border-2 border-white w-72'
            variants={buttonVariants}
            initial='slideX'
            animate='animation'
            whileHover={{ 
                scale: 1.5,
                textShadow: "0px 0px 8px rgba(255, 255, 255)",
                boxShadow: "0px 0px 8px rgba(255, 255, 255)",
                color: '#f8e112',
                transition:{
                    yoyo: Infinity,
                    duration: 0.5
                }            
            }}
            whileTap={{ scale: 0.9 }}
            >Sagittarius</motion.button>

            <motion.button 
            className='rounded-full p-5 border-2 border-white w-72'
            variants={buttonVariants}
            initial='slideX'
            animate='animation'
            whileHover={{ 
                scale: 1.5,
                textShadow: "0px 0px 8px rgba(255, 255, 255)",
                boxShadow: "0px 0px 8px rgba(255, 255, 255)",
                color: '#f8e112',
                transition:{
                    yoyo: Infinity,
                    duration: 0.5
                }            
            }}
            whileTap={{ scale: 0.9 }}
            >Scorpio</motion.button>

            <motion.button 
            className='rounded-full p-5 border-2 border-white w-72'
            variants={buttonVariants}
            initial='slideX'
            animate='animation'
            whileHover={{ 
                scale: 1.5,
                textShadow: "0px 0px 8px rgba(255, 255, 255)",
                boxShadow: "0px 0px 8px rgba(255, 255, 255)",
                color: '#f8e112',
                transition:{
                    yoyo: Infinity,
                    duration: 0.5
                }            
            }}
            whileTap={{ scale: 0.9 }}
            >Taurus</motion.button>

            <motion.button 
            className='rounded-full p-5 border-2 border-white w-72'
            variants={buttonVariants}
            initial='slideX'
            animate='animation'
            whileHover={{ 
                scale: 1.5,
                textShadow: "0px 0px 8px rgba(255, 255, 255)",
                boxShadow: "0px 0px 8px rgba(255, 255, 255)",
                color: '#f8e112',
                transition:{
                    yoyo: Infinity,
                    duration: 0.5
                }            
            }}
            whileTap={{ scale: 0.9 }}
            >Virgo</motion.button>
           
            
        </motion.div>
        
    </>
  )
}

export default Home