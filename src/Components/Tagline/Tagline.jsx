import {motion} from 'framer-motion'
import './Tagline.css'
const Tagline = () =>{
    return(
        <div className="tagline-container">
            <div className="tagline-flex">
                <div className="left-flex">
                    <h2 className='top-header-left'>Art is</h2>
                    <h2 className="highlighted-title">
                        <motion.div 
                        initial={{width:"100%"}}
                        whileInView={{width: "0"}}
                        viewport={{once: true}}
                        transition={{duration:1.2, delay: 0.2}}
                        className='overlay'></motion.div>
                        FOR
                        </h2>
                    <h2 className="highlighted-title">
                        <motion.div 
                        initial={{width:"100%"}}
                        whileInView={{width: "0"}}
                        viewport={{once: true}}
                        transition={{duration:1.2, delay: 0.4}}
                        className='overlay'></motion.div>
                        THE
                        </h2>
                    <h2 className="highlighted-title">
                        <motion.div 
                        initial={{width:"100%"}}
                        whileInView={{width: "0"}}
                        viewport={{once: true}}
                        transition={{duration:1.2, delay: 0.6}}
                        className='overlay'></motion.div>
                        PEOPLE</h2>
                </div>

                <div className="right-flex">
                    <div className="quote-box">
                        <h3>01.</h3>
                        <p>At that moment, she realized that she had created her current life. It wasn't the life she wanted, but she took responsibility for how it currently stood. Something clicked and she saw that every choice she made to this point in her life had led to where her life stood at this very moment even if she knew this wasn't where she wanted to be. She determined to choose to change it.</p>
                    </div>
                    <div className="quote-box">
                        <h3>02.</h3>
                        <p>At that moment, she realized that she had created her current life. It wasn't the life she wanted, but she took responsibility for how it currently stood. Something clicked and she saw that every choice she made to this point in her life had led to where her life stood at this very moment even if she knew this wasn't where she wanted to be. She determined to choose to change it.</p>
                    </div>
                    <div className="quote-box">
                        <h3>03.</h3>
                        <p>At that moment, she realized that she had created her current life. It wasn't the life she wanted, but she took responsibility for how it currently stood. Something clicked and she saw that every choice she made to this point in her life had led to where her life stood at this very moment even if she knew this wasn't where she wanted to be. She determined to choose to change it.</p>
                    </div>
                </div>
            </div>

        </div>
    )
} 
export default Tagline