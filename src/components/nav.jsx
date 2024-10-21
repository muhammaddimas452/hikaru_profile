/* eslint-disable react-hooks/rules-of-hooks */
import Logo from "../assets/img/Logo.png";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import Group1 from "../assets/img/Group 1.png";

const nav = () => {
  const [nav, setNav] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handlerScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handlerScroll);
    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, []);

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
          <RiMenu3Line
            onClick={() => setNav((prev) => !prev)}
            className="cursor-pointer text-4xl"
          />
        </div>
      </div>
      <div
        className={`${
          nav ? "right-0" : "-right-full"
        } w-full md:w-[50%]  bg-[#03001c] z-40 text-white h-screen absolute  top-0 p-8 block md:hidden`}
      >
        <IoClose
          className="text-4xl mb-3"
          onClick={() => setNav((prev) => !prev)}
        />
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
      <></>
    </nav>
  );
};

export default nav;
