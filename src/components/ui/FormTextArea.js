export default function FormTextArea({ name, placeholder, containerStyle, rows = 4 }) {
    return (
      <div className={`relative ${containerStyle}`}>
        <textarea
          name={name}
          placeholder={placeholder}
          rows={rows}
          className={`w-full h-full p-4 border border-[#539CB7] rounded-md focus:outline-none placeholder-[#539CB7] text-lg resize-none`}
        ></textarea>
      </div>
    );
  }
  