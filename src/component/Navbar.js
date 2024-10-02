import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"; // Import your custom CSS

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="custom-navbar">
          <div className="pages">
            <ul className="Page-list">
              <li>Home</li>
              <li>Market</li>
              <li>About</li>
            </ul>
          </div>
          <a href="index.js" className="custom-Header-Name">
            SnapAuction
          </a>
          <a href="index.js">
            <button className="login">Login</button>
          </a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
