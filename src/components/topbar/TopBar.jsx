import React from 'react';
import '../topbar/topbar.css';
export default function TopBar() {
  return (
    <div className="top">
        <div className="topLeft">
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i> 
            <i className="topIcon fa-brands fa-square-pinterest"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i> 
        </div>
        <div className="topCentre">
                <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">Contact</li>
                <li className="topListItem">Write</li>
                <li className="topListItem">LOGOUT</li>
                </ul>
        </div>
        <div className="topRight">
                <img className="topImg" src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png" alt=""  />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>

    </div>
  )
}
