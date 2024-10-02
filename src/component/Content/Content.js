import React from "react";
import "./Content.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="message">
          <h1 className="m1" data-text="Welcome">
            Welcome
          </h1>
          <h1 className="m2" data-text="TO">
            To
          </h1>
          <h1 className="m3" data-text="SnapAuction">
            SnapAuction
          </h1>
        </div>
      </div>
    );
  }
}

export default Navbar;
