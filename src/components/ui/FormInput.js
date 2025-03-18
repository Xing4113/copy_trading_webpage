
export default function FormInput({ type = "text", placeholder, name, containerStyle, onChange }) {
    return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`p-4 border border-[#539CB7] rounded-md focus:outline-none placeholder-[#539CB7] text-lg ${containerStyle}`}
        onChange={onChange}
      />
    );
  }
  