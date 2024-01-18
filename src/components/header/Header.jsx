import React from 'react';
import '../header/header.css';

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm"> my-daily-life</span>
            <span className="headerTitleLg"> Blog</span>
        </div>
        <img 
        className="headerImg"
        src="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_640.jpg" alt="" />
    </div>
  )
}
