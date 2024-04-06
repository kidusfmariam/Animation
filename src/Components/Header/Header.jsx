import { motion } from  "framer-motion";
import Logo from '../../Images/logo.png';
import './Header.css'
const Header = ()=>{
    return(
        <motion.header
        initial={{width: 0}}
        animate={{width: '100%'}}
        transition={{duration: 1.4, delay: 4}}
        >
        <nav>
            <motion.div
            initial={{opacity:0}}
            animate={{opacity: 1}}
            transition={{duration: 1, delay: 5.5}}
            >
                <img src={Logo} alt="logo" />
            </motion.div>
                <ul>
                <motion.li
                initial={{opacity:0}}
            animate={{opacity: 1}}
            transition={{duration: 1, delay: 5.6}}
                >About</motion.li>
                <motion.li
                initial={{opacity:0}}
            animate={{opacity: 1}}
            transition={{duration: 1, delay: 5.7}}
                >Shop</motion.li>
                <motion.li
                initial={{opacity:0}}
            animate={{opacity: 1}}
            transition={{duration: 1, delay: 5.8}}
                >Services</motion.li>
                <motion.li
                initial={{opacity:0}}
            animate={{opacity: 1}}
            transition={{duration: 1, delay: 5.9}}
                >Contact</motion.li>
                </ul>
        </nav>
        </motion.header>
    )
}
export default Header