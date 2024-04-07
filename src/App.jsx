import {motion, AnimatePresence} from 'framer-motion'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Tagline from './Components/Tagline/Tagline'
import './App.css'

function App() {
  return (
    <AnimatePresence 
    // initial={false}
    >
    <motion.div
    initial={{height:"100vh", overflow:"hidden"}}
    animate={{height:"auto", overflow:"visible"}}
    transition={{duration:1, delay: 6}}
    >
    <Header/>
    <Hero/>
    <Tagline/>
    </motion.div>
    </AnimatePresence>
    
  )
}

export default App
