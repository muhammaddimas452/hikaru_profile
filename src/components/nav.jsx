/* eslint-disable react-hooks/rules-of-hooks */
import Logo from "../assets/img/Logo.png";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import Group1 from "../assets/img/Group 1.png";

const nav = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

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
        <div className=" justify-center">
          <button onClick={toggleNavbar}>
            {mobileDrawerOpen ? (
              <IoClose className="text-3xl" />
            ) : (
              <RiMenu3Line className="text-3xl" />
            )}
          </button>
        </div>
      </div>
      {mobileDrawerOpen && (
        <div className="fixed right-0 z-20 w-full overflow-hidden bg-[#03001c] text-white h-screen block lg:hidden">
          <ul>
            <li className="flex flex-col gap-5">
              <a className="flex helveticalNeue  hover:opacity-100 uppercase px-3 py-2 bg-[#03001C] border-y-[1px] border-[#828282] items-center">
                Home
              </a>
            </li>
            <li className="flex flex-col  gap-5">
              <a className="flex helveticalNeue  hover:opacity-100 uppercase px-3 py-2 bg-[#03001C] border-y-[1px] border-[#828282] items-center">
                Contribution
              </a>
            </li>
            <li className="flex flex-col  gap-5">
              <a className="flex helveticalNeue  hover:opacity-100 uppercase px-3 py-2 bg-[#03001C] border-y-[1px] border-[#828282] items-center">
                Our Mission
              </a>
            </li>
            <li className="flex flex-col  gap-5">
              <a className="flex helveticalNeue  hover:opacity-100 uppercase px-3 py-2 bg-[#03001C] border-y-[1px] border-[#828282] items-center">
                Projects
              </a>
            </li>
            <li className="flex flex-col  gap-5">
              <a className="flex helveticalNeue  hover:opacity-100 uppercase px-3 py-2 bg-[#03001C] border-y-[1px] border-[#828282] items-center">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
      <></>
    </nav>
  );
};

export default nav;
