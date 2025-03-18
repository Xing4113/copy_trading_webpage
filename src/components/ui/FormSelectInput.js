import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export default function FormSelectInput({ name, options = [], placeholder, containerStyle }) {
  const [selectedValue, setSelectedValue] = useState(""); // Track selected value

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "reset") {
      setSelectedValue(""); // Reset to placeholder
    } else {
      setSelectedValue(value);
    }
  };

  return (
    <div className={`relative ${containerStyle}`}>
      {/* Select Input */}
      <select
        name={name}
        value={selectedValue}
        onChange={handleChange}
        className={`appearance-none w-full h-full p-4 border border-[#539CB7] rounded-md focus:outline-none cursor-pointer pr-10 text-lg
          ${selectedValue === "" ? "text-[#539CB7]" : "text-white"}`}
      >
        {/* Placeholder Option */}
        <option value="" disabled hidden>
          {placeholder}
        </option>

        {/* Reset Option (Select One) */}
        <option value="reset" className="text-black">
          Select One
        </option>

        {/* Dropdown Options */}
        {options.map((option, index) => (
          <option key={index} value={option} className="text-black">
            {option}
          </option>
        ))}
      </select>

      {/* Custom Dropdown Icon */}
      <IoMdArrowDropdown className="absolute top-1/2 right-5 transform -translate-y-1/2 text-[#9AC6EE] w-5 h-5 pointer-events-none" />
    </div>
  );
}
