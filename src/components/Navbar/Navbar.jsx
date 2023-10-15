import React, { useEffect, useState } from "react";
import "./Navbar.css"; // Import the CSS file for styling
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update window width in state
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="left-section">
        <img src={logo} alt="" className="logo" />
      </div>
      {windowWidth > 700 && (
        <div className="center-section">
          <ul>
            <li>
              Men's Shoes
              <ul className="submenu">
                <li>Sneakers</li>
                <hr />
                <li>Formal Shoes</li>
                <li>Boots</li>
              </ul>
            </li>
            <li>
              Women's Shoes
              <ul className="submenu">
                <li>Sandals</li>
                <li>Heels</li>
                <li>Flats</li>
              </ul>
            </li>
            <li>
              Kids' Shoes
              <ul className="submenu">
                <li>Sneakers</li>
                <li>Boots</li>
                <li>Sandals</li>
              </ul>
            </li>
          </ul>
        </div>
      )}
      <div className="right-section">
        <button className="login-button">Cart</button>
        {/* <button className="signup-button">Sign Up</button> */}
      </div>
    </div>
  );
};

export default Navbar;
