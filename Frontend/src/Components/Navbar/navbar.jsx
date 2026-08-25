import { Search, User, ShoppingCart } from "lucide-react";
import "./navbar.css";
import "../../index.css";

function Navbar() {
  return (
    <nav className="nav-bar">
      {/* <img src="/logo.png" alt="Cosmora" className="nav-logo" /> */}
      <h2>cosmora</h2>

      <ul className="nav-menu">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Adults</a>
        </li>
        <li>
          <a>Kids</a>
        </li>
        <li>
          <a>Gadgets</a>
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
