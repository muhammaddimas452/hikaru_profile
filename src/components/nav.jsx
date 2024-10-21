/* eslint-disable react-hooks/rules-of-hooks */
import Logo from "../assets/img/Logo.png";
import Group1 from "../assets/img/Group 1.png";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const nav = () => {
  const [nav, setNav] = useState(false);

  function openMenu() {
    setNav(true);
  }
  function closeMenu() {
    setNav(false);
  }

  return (
    <nav className="">
      <img className="group-1 z-10" src={Group1} alt="" />
      <div className="z-50 flex ssm:hidden lg:flex text-white uppercase items-center justify-between px-20 ssm:py-6 sm:py-8 md:py-[36px]">
        <div className="flex gap-x-2">
          <button className="flex helveticalNeue opacity-[0.6] hover:opacity-100 uppercase px-3 py-2 bg-[#ffffff1a] rounded-[100px] border-[1px] border-[#828282] items-center">
            Home
          </button>
          <button className="flex helveticalNeue opacity-[0.6] hover:opacity-100 uppercase px-3 py-2 bg-[#ffffff1a] rounded-[100px] border-[1px] border-[#828282] items-center">
            Contribution
          </button>
          <button className="flex helveticalNeue opacity-[0.6] hover:opacity-100 uppercase px-3 py-2 bg-[#ffffff1a] rounded-[100px] border-[1px] border-[#828282] items-center">
            Our Mission
          </button>
        </div>
        <a href="" className="flex gap-x-2 items-center">
          <img src={Logo} alt="" />
          <span>Nexidigital</span>
        </a>
        <div className="flex gap-x-2">
          <button className="flex helveticalNeue opacity-[0.6] hover:opacity-100 uppercase px-3 py-2 bg-[#ffffff1a] rounded-[100px] border-[1px] border-[#828282] items-center">
            Projects
          </button>
          <button className="flex helveticalNeue opacity-[0.6] hover:opacity-100 uppercase px-3 py-2 bg-[#ffffff1a] rounded-[100px] border-[1px] border-[#828282] items-center">
            Contact Us
          </button>
        </div>
      </div>
      <div className="ssm:flex items-center justify-between lg:hidden text-white uppercase ssm:px-5 md:px-10 ssm:py-6 sm:py-8 md:py-[36px]">
        <div className="flex gap-x-2 items-center">
          <img src={Logo} alt="" />
          <span>Nexidigital</span>
        </div>
        <div className="ssm:block lg:hidden">
          {nav ? (
            <IoClose onClick={closeMenu} className="cursor-pointer text-4xl" />
          ) : (
            <RiMenu3Line
              onClick={openMenu}
              className="cursor-pointer text-4xl"
            />
          )}
        </div>
      </div>
      {nav ? (
        <div className="flex-col ssm:block lg:hidden gap-4 ssm:pt-1 md:pt-5 px-5 text-white absolute delay-1000 top-[12%] right-0 w-full">
          <a className="flex helveticalNeue  hover:opacity-100 uppercase px-3 py-2 bg-[#03001C] border-y-[1px] border-[#828282] items-center">
            Home
          </a>
          <a className="flex helveticalNeue  hover:opacity-100 uppercase px-3 py-2 bg-[#03001C] border-y-[1px] border-[#828282] items-center">
            Contribution
          </a>
          <a className="flex helveticalNeue  hover:opacity-100 uppercase px-3 py-2 bg-[#03001C] border-y-[1px] border-[#828282] items-center">
            Our Mission
          </a>
          <a className="flex helveticalNeue  hover:opacity-100 uppercase px-3 py-2 bg-[#03001C] border-y-[1px] border-[#828282] items-center">
            Projects
          </a>
          <a className="flex helveticalNeue  hover:opacity-100 uppercase px-3 py-2 bg-[#03001C] border-y-[1px] border-[#828282] items-center">
            Contact Us
          </a>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default nav;
