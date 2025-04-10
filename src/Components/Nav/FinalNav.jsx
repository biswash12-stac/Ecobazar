
import { useState } from "react";
import { ArrowDownIcon, PhoneIcon, DownArrow } from "../../assets/icons";

const FinalNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-15 mt-2 poppins-thin  bg-transparent md:bg-[#333333] ">
      <nav className="flex items-center  justify-between md:justify-around px-6 py-3">
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-3">
          <li className="text-white">Home</li>
          <img src={DownArrow} alt="" className="w-4" />

          <li className="text-gray-400">Shop</li>
          <img src={ArrowDownIcon} alt="" className="w-4" />

          <li className="text-gray-400">Page</li>
          <img src={ArrowDownIcon} alt="" className="w-4" />

          <li className="text-gray-400">Blog</li>
          <img src={ArrowDownIcon} alt="" className="w-4" />

          <li className="text-gray-400">About Us</li>
          <img src={ArrowDownIcon} alt="" className="w-4" />

          <li className="text-gray-400">Contact Us</li>
          <img src={ArrowDownIcon} alt="" className="w-4" />
        </ul>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl absolute right-6   text-black font-bold"
        >
          {open ? "✖" : "☰"}
        </button>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-34 left-[525px]  bg-green-400 shadow-lg w-[150px] px-4 py-2 rounded-md">
            <ul className="flex items-end flex-col gap-4 text-white font-bold text-lg">
              <li className="focus:text-red-300 active:text-red-400">Home</li>
              <li className="hover:text-gray-500">Shop</li>
              <li className="hover:text-gray-500">Page</li>
              <li className="hover:text-gray-500">Blog</li>
              <li className="hover:text-gray-500">About Us</li>
              <li className="hover:text-gray-500">Contact Us</li>
            </ul>
          </div>
        )}

        {/* Contact Info */}
        <div className="hidden md:flex items-center gap-2 text-white">
          <img src={PhoneIcon} alt="Phone Icon" className="w-5" />
          <span>(219) 555-0114</span>
        </div>
      </nav>
    </div>
  );
};

export default FinalNav;
