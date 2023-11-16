import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./parallax.scss";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scrollText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const scrollBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: scrollText }}>
        {type === "services" ? "My Services" : "My Projects"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        style={{
          y: scrollBg,
          backgroundImage:
            type === "services" ? "url(/planets.png)" : "url(/sun.png)",
        }}
        className="planets"
      ></motion.div>
      <motion.div style={{ x: scrollBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
