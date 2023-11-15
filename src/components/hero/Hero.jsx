import { motion } from "framer-motion";

import "./hero.scss";

// sliding text animation variants
const textVariants = {
  initial: { x: -500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Federico Borrometi</motion.h2>
          <motion.h1 variants={textVariants}>Front End Developer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              See my Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <img src="/scroll.png" alt="scroll img" variants={textVariants} />
        </motion.div>
      </div>
      <div className="slidingTextContainer">
        React.js Next.js Javascript Typescript Sass Tailwind.css CSS HTML
      </div>
      <div className="imageContainer">
        <img src="/hero.png" alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;