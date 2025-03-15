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
      className={`${buttonStyle}`}
      onClick={onClick}
      disabled={disabled || isLoading}
      style={otherStyle}
    >
      <span className={`${titleStyle}`}> { title }</span>  
      
    </button>
  );
}
