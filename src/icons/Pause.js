import React from "react";

const Pause = ({size=18, color="#ffffff"}) => (
    <svg xmlns="http://www.w3.org/2000/svg" 
        width={size} height={size} 
        viewBox="0 0 24 24" fill="none" 
        stroke={color} strokeWidth="2" 
        strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="4" width="4" height="16"></rect>
        <rect x="14" y="4" width="4" height="16"></rect>
    </svg>
);

export default Pause;