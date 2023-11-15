import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* SIDEBAR */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Federico Dev
        </motion.span>
        <div className="social">
          <a href="github.com/federico-init">
            <img src="/github.png" alt="github" />
          </a>
          <a href="linkedin.com/in/federico-borrometi/">
            <img src="/linkedin.png" alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
