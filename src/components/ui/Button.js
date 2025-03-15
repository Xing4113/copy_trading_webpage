import React from "react";

export default function Button({
  title,
  titleStyle,
  buttonStyle,
  isLoading = false,
  disabled = false,
  onClick,
}) {

  return (
    <button
      className={`${buttonStyle}`}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      <span className={`${titleStyle}`}> { title }</span>  
      
    </button>
  );
}
