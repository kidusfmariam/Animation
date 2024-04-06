import './Hero.css'
import { motion } from 'framer-motion'
const Hero = () =>{
    return(
        <>
        <div className='hero'>
        {/* <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}}
        transition={{duration: .5, delay: 3.5}}
        className='top-header'>Journey Through</motion.h1> */}
        <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}}
        transition={{duration: .9, delay: 3.8}}
        className='bottom-header'>Masterpieces</motion.h1>
        <div className='flex-container'>
        <motion.div 
        initial={{width: '40vw', height:'35vw', y:"-30%"}}
        animate={{x:0, y:0, width: "100%", height: window.innerWidth>1440? 800:600}}
        transition={{duration: 2, delay: 2}}
        className='img-container'>
            <img src="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero-img" />
        </motion.div>
        </div>
        </div>
        </>
    )
}
export default Hero