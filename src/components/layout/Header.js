import Image from "next/image";
import Button from "../ui/Button";
import Timer from "../ui/Timer";
import { SvgIcon } from "@mui/material";
import Person from "@mui/icons-material/Person";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between px-[136px] rotis-light" style={{ backgroundColor: "var(--header-color)" }}>
    
    {/* Left Section */}
    <Image src="/images/logo.png" width={168} height={80} alt="Logo" className="p-3" />
    
    {/* Center Section */}
    <Timer targetDate="2025-04-16T23:59:59" customStyle="ml-[-120px]"/>

    {/* Right Section */}

    <div className="flex items-center justify-between gap-1.5">
    
      <Button title="REGISTER NOW" titleStyle="text-xs" buttonStyle="px-4 py-2.5 bg-gradient-to-b from-orange-400 to-orange-500 rounded-full"/>

      <SvgIcon component={Person} sx={{ fontSize: '24px', color: "gray", color: "gray"}}/>
    </div>
    
   </div>
  );
}
  
export default Header;