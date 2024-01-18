import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../topbar/topbar.css";
import Home from "../../pages/home/Home";
export default function TopBar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCentre">
        <nav>
          <ul className="topList">
            <li className="topListItem">
              Home
              </li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">WRITE</li>
            <li className="topListItem">
              {user && "LOGOUT"}
              </li>
          </ul>
        </nav>
      </div>
      <div className="topRight">{
        user ? (<img
        className="topImg"
        src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
        alt=""
      />) :  (<>
            <li className="topListItem">Login</li>
            <li className="topListItem">Register</li>
      </>)
      }
        
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
