import React, { useState } from "react";

export const Button = ({text}) => {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 300);
    };
    return(
    <button 
    className={`btn ${isClicked ? 'btn-clicked' : ''}`}
    onClick={handleClick}
  >
    {text}
  </button>
    );
};