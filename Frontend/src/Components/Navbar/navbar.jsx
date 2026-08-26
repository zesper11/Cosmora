import { Search, User, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import "../../index.css";

function Navbar() {
  return (
    <nav className="nav-bar">
      {/* <img src="/logo.png" alt="Cosmora" className="nav-logo" /> */}
      <h2>cosmora</h2>

      <ul className="nav-menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/adult">Adults</NavLink>
        </li>
        <li>
          <NavLink to="/kids">Kids</NavLink>
        </li>
        <li>
          <NavLink to="/gadgets">Gadgets</NavLink>
        </li>
      </ul>

      <div className="nav-actions">
        <div>
          <Search />
        </div>
        <div>
          <User />
        </div>
        <div className="cart-action-btn-holder">
          <ShoppingCart />
          <div className="cart-count">9+</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
