import { NavLink } from "react-router";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/organization" end>
        Organization
      </NavLink>
      <NavLink to="/employees">Employees</NavLink>
    </nav>
  );
}

export default Navbar;
