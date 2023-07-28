import { NavLink } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <button className="nav-button">
        <NavLink to="/">Home</NavLink>
      </button>
      <button className="nav-button">
        <NavLink to="/entry">Entry</NavLink>
      </button>
    </div>
  );
};

export default Navbar;
