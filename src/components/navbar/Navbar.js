import React from "react";
import { Link } from "react-router-dom";
// import SearchIcon from "@mui/icons-material/Search";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>CAR RENTAl SERVICE </h1>
      </div>
      <div className="links">
        <div className="link">
          <Link to="/" className="link">
            Home
          </Link>
        </div>
        <div className="link">
          <Link to="/carList" className="link">
            Cars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
