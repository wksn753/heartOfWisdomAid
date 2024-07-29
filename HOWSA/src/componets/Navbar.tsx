import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../public/vite.svg";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const handleMenuIconClick = () => {
    setShowNavbar(!showNavbar);
  }
  const handleMenuButtonClick = () => {
    setShowMobileMenu(!showMobileMenu);
  }
  return (
    <header className="primary-header">
      <div className="wd-100 padding16px">
        <div className="nav-wrapper">
          <Link to="/" className="nav-header nav-title"><img src={logo} alt="" width={35} height={35} /><h1 className="fs-secondary-heading fw-bold">HEART OF WISDOM</h1></Link>
          <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false" onClick={()=>{handleMenuButtonClick()}}>
            <span className="material-symbols-outlined icon-hamburger">
              menu
            </span>
            <span className="material-symbols-outlined icon-close">
              close
            </span>
            <span className="visually-hidden">Menu</span>
          </button>
          <nav id="primary-navigation"  className={showMobileMenu?"opened":"primary-navigation"}>
            <ul role="list" aria-label="Primary" className="nav-list">
              <li className="">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="">
                <NavLink to="/programs">Programs</NavLink>
              </li>
              <li className="">
                <NavLink to="/donate">Donate</NavLink>
              </li>
              <li className="">
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
          <button className="button hide-on-mobile">Donate</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

