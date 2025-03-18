export default function FormNumberInput({ placeholder, name, containerStyle, onChange }) {
  const handleInput = (event) => {
    event.target.value = event.target.value.replace(/[^0-9+]/g, ""); // Remove non-numeric characters
  };

  return (
    <input
      type="text" // Keep it as "text" to remove number spinners
      name={name}
      placeholder={placeholder}
      onInput={handleInput} // Prevent non-numeric characters
      className={`p-4 border border-[#539CB7] rounded-md focus:outline-none placeholder-[#539CB7] text-lg ${containerStyle}`}
      onChange={onChange}
    />
  );
}
