import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../public/vite.svg";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleMenuIconClick = ()=>{
    setShowNavbar(!showNavbar);
}
    return ( 
    <div>
     <nav>
        <div className="nav-header"><img src={logo} alt="" width={35} height={35}/><h1>Heart Of Wisdom Aid</h1></div>
        <ul className={showNavbar?"sidebar":"hidden"}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/donate">Donate</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <ul>
          <li className="hide-on-mobile">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hide-on-mobile">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="hide-on-mobile">
            <NavLink to="/donate">Donate</NavLink>
          </li>
          <li className="hide-on-mobile">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="menu-button"><span className="material-symbols-outlined" onClick={handleMenuIconClick}>menu</span></li>
        </ul>
      </nav>
    </div> );
}
 
export default Navbar;

