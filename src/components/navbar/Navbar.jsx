import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* SIDEBAR */}
      <div className="wrapper">
        <span>Federico Dev</span>
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
