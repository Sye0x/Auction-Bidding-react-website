import React from "react";
import "./Navbar.css";
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div className="Main-Heading">
            <h1>
              <span className="Heiglight">Snap</span>Auction
            </h1>
          </div>
          <div className="nav">
            <span className="navigators">
              <button>Home</button>
              <button>Market</button>
              <button>About</button>
            </span>
            <span className="login-sign">
              <button>Login</button>
              <button>Register</button>
            </span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
