import React from "react";

import "./Footer.css"; // Import your custom CSS
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="description">
            <h1 className="Name">SnapAuction</h1>
            <p className="Intro">
              Welcome to SnapAuction – the platform where buyers and sellers{" "}
              <br /> come together in a truly anonymous and thrilling bidding
              experience.
            </p>
          </div>
          <div className="social">
            <div className="pages">
              <button className="pagebtn">Home</button>
              <button className="pagebtn">Market</button>
              <button className="pagebtn">About</button>
            </div>
            <div className="smedia">
              <FaInstagram className="sicon" />
              <FaFacebook className="sicon" />
              <FaSquareXTwitter className="sicon" />
            </div>
            <div className="smedia2">
              <IoMdCall className="phoneicon" />
              <p className="phone">+92 325595429</p>
            </div>
            <div className="smedia2">
              <IoIosMail className="phoneicon" />
              <p className="phone">Snapsauc@gsnap.com</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
