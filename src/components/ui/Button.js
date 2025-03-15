import React from "react";

export default function Button({
  title,
  titleStyle,
  buttonStyle,
  otherStyle = {},
  isLoading = false,
  disabled = false,
  onClick,
}) {

  return (
    <button
      className={`${buttonStyle} flex justify-center items-center shadow-md hover:from-orange-500 hover:to-orange-700 active:scale-95 transition-all cursor-pointer`}
      onClick={onClick}
      disabled={disabled || isLoading}
      style={otherStyle}
    >
      <span className={`${titleStyle}`}> { title }</span>  
      
    </button>
  );
}
