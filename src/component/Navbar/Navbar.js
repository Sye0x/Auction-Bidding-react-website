import React from "react";

import "./Navbar.css"; // Import your custom CSS

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="custom-navbar">
          <div className="pages">
            <div className="Page-list">
              <button className="login">Home</button>
              <button className="login">Market</button>
              <button className="login">About</button>
            </div>
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
