import Button from "../ui/Button";
import Timer from "../ui/Timer";
import PersonIcon from "@mui/icons-material/Person";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between px-[136px]" style={{ backgroundColor: "var(--header-color)" }}>
    
    {/* Left Section */}
    <img src="/images/logo.png" className="w-[168px] p-3" />
    
    {/* Center Section */}
    <Timer targetDate="2025-04-16T23:59:59" customStyle="ml-[-120px]"/>

    {/* Right Section */}

    <div className="flex items-center justify-between gap-1.5">
    
      <Button title="REGISTER NOW" titleStyle="font-semibold text-sm" buttonStyle="px-6 py-2 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full shadow-md hover:from-orange-500 hover:to-orange-700 active:scale-95 transition-all"/>

      <PersonIcon className="w-6 h-6 text-gray-500" />

    </div>
    
   </div>
  );
}
  
export default Header;