import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex justify-between px-14 h-14 items-center bg-[#212121] opacity-95 sticky text-white">
      <div className="flex gap-8 items-center text-2xl ">
        <div>
          <GiHamburgerMenu />
        </div>
        <div className="flex gap-2 items-center justify-center">
          <FaYoutube className="text-3xl text-red-600" />
          <span className="text-2xl">Youtube</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <form>
          <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl">
            <div className="flex gap-5 items-center pr-5">
              <input
                type="text"
                placeholder="search"
                className="w-96 bg-zinc-900 focus:outline-none border-none"
              />
            </div>
            <button className="h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-3xl">
              <IoSearchOutline className="text-xl" />
            </button>
          </div>
        </form>

        <div className="text-xl p-3 bg-zinc-800 rounded-full">
          <FaMicrophone />
        </div>
      </div>
      <div className="flex gap-8 text-xl items-center justify-center">
        <RiVideoAddLine />
        <div className="relative ">
          <AiOutlineBell />
          <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">9+</span>
        </div>
        <img
          src="https://th.bing.com/th/id/OIP.O9HFDQhMp1kfWIy1IVJjNQHaHa?rs=1&pid=ImgDetMain"
          alt="profile logo"
          className="w-9 h-9 rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
