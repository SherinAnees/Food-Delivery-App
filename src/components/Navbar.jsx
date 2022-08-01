import React, { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/*Left section */}
      <div className="flex items-center">
        <div className="cursor-pointer ">
          <AiOutlineMenu size={30} onClick={() => setNavOpen(!navOpen)} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden md:flex justify-between items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white p-2 rounded-full">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/*search section */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 sm:w-[400px] w-[200px] lg:w-[500px]">
        <AiOutlineSearch size={22} />
        <input
          type="text"
          placeholder="Search foods"
          className="bg-transparent w-full p-2 focus:outline-none"
        />
      </div>

      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>
      {/*mobile menu */}

      {navOpen ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      <div
        className={
          navOpen
            ? "fixed left-0 top-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed left-[-100%] top-0 w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          size={30}
          className="absolute cursor-pointer  right-3 top-3"
          onClick={() => setNavOpen(!navOpen)}
        />
        <h2 className="text-2xl p-4">
          Best<span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="flex py-2 text-xl">
              <TbTruckDelivery size={25} className="mr-2" />
              Orders
            </li>
            <li className="flex py-2 text-xl">
              <MdFavorite size={25} className="mr-2" />
              Favorites
            </li>
            <li className="flex py-2 text-xl">
              <FaWallet size={25} className="mr-2" />
              Wallet
            </li>
            <li className="flex py-2 text-xl">
              <MdHelp size={25} className="mr-2" />
              Help
            </li>
            <li className="flex py-2 text-xl">
              <AiFillTag size={25} className="mr-2" /> Promotions
            </li>
            <li className="flex py-2 text-xl">
              <BsFillSaveFill size={25} className="mr-2" /> Best One
            </li>
            <li className="flex py-2 text-xl">
              <FaUserFriends size={25} className="mr-2" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
