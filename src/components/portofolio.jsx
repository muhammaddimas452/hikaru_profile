import { BsArrowRight } from "react-icons/bs";
import port1 from "../assets/img/portofolio1.png";
import port2 from "../assets/img/portofolio2.png";
import port3 from "../assets/img/portofolio3.png";
import port4 from "../assets/img/portofolio4.png";
import port5 from "../assets/img/portofolio5.png";

const portofolio = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-10 ssm:grid-cols-1 ssm:justify-items-center lg:justify-items-start ssm:px-8 md:px-10 lg:px-20 ssm:py-6 sm:py-8 sm:gap-y-12 ssm:gap-y-14 md:py-[80px]">
      <div className="text-white">
        <h1 className="uppercase ssm:text-center md:text-start clash-display-medium ssm:text-4xl sm:text-5xl md:text-[64px]">
          My Best Project
        </h1>
        <button className="flex ssm:justify-self-center md:justify-self-start items-center mt-6 clash-display-regular ssm:text-sm md:text-base gap-x-3 ssm:px-7 ssm:py-[14px] md:px-8 md:py-[18px] bg-[#7A0BC0] ssm:rounded-2xl md:rounded-3xl">
          Explore More <BsArrowRight className="text-3xl" />
        </button>
      </div>
      <div className="flex flex-col gap-y-8 md:w-fit ssm:w-[80%]">
        <img className="" src={port1} alt="" />
        <span className="text-white font-urbanist font-bold text-2xl">
          IFCON - Digital Agency
        </span>
        <div className="flex gap-x-2 md:text-sm ssm:text-xs text-[#FFFFFF]">
          <button className="rounded-[25px] border-[1px] border-white opacity-[0.6] ssm:py-2 ssm:px-[14px] md:py-3 md:px-[18px]">
            Website
          </button>
          <button className="rounded-[25px] border-[1px] border-white opacity-[0.6] ssm:py-2 ssm:px-[14px] md:py-3 md:px-[18px]">
            Java Script
          </button>
          <button className="rounded-[25px] border-[1px] border-white opacity-[0.6] ssm:py-2 ssm:px-[14px] md:py-3 md:px-[18px]">
            HTML
          </button>
          <button className="rounded-[25px] border-[1px] border-white opacity-[0.6] ssm:py-2 ssm:px-[14px] md:py-3 md:px-[18px]">
            ...
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-y-8 md:w-fit ssm:w-[80%]">
        <img src={port2} alt="" />
        <span className="text-white font-urbanist font-bold text-2xl">
          Creatif Studio - Online Course
        </span>
        <div className="flex gap-x-2 text-sm text-[#FFFFFF]">
          <button className="rounded-[25px] border-[1px] border-white opacity-[0.6] ssm:py-2 ssm:px-[14px] md:py-3 md:px-[18px]">
            Website
          </button>
          <button className="rounded-[25px] border-[1px] border-white opacity-[0.6] ssm:py-2 ssm:px-[14px] md:py-3 md:px-[18px]">
            Java Script
          </button>
          <button className="rounded-[25px] border-[1px] border-white opacity-[0.6] ssm:py-2 ssm:px-[14px] md:py-3 md:px-[18px]">
            HTML
          </button>
          <button className="rounded-[25px] border-[1px] border-white opacity-[0.6] ssm:py-2 ssm:px-[14px] md:py-3 md:px-[18px]">
            ...
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-y-8 md:w-fit ssm:w-[80%]">
        <img src={port3} alt="" />
        <span className="text-white font-urbanist font-bold text-2xl">
          SRI CHANGGONG - vehicle dealer
        </span>
        <div className="flex gap-x-2 text-sm text-[#FFFFFF]">
          <button className="rounded-[25px] border-[1px] border-white opacity-[0.6] ssm:py-2 ssm:px-[14px] md:py-3 md:px-[18px]">
            Website
          </button>
          <button className="rounded-[25px] border-[1px] border-white opacity-[0.6] ssm:py-2 ssm:px-[14px] md:py-3 md:px-[18px]">
            Java Script
          </button>
          <button className="rounded-[25px] border-[1px] border-white opacity-[0.6] ssm:py-2 ssm:px-[14px] md:py-3 md:px-[18px]">
            HTML
          </button>
          <button className="rounded-[25px] border-[1px] border-white opacity-[0.6] ssm:py-2 ssm:px-[14px] md:py-3 md:px-[18px]">
            ...
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-y-8 md:w-fit ssm:w-[80%]">
        <img src={port4} alt="" />
        <span className="text-white font-urbanist font-bold text-2xl">
          FAO - Travel Agency
        </span>
        <div className="flex gap-x-2 text-sm text-[#FFFFFF]">
          <button className="rounded-[25px] border-[1px] border-white opacity-[0.6] ssm:py-2 ssm:px-[14px] md:py-3 md:px-[18px]">
            Website
          </button>
          <button className="rounded-[25px] border-[1px] border-white opacity-[0.6] ssm:py-2 ssm:px-[14px] md:py-3 md:px-[18px]">
            Java Script
          </button>
          <button className="rounded-[25px] border-[1px] border-white opacity-[0.6] ssm:py-2 ssm:px-[14px] md:py-3 md:px-[18px]">
            HTML
          </button>
          <button className="rounded-[25px] border-[1px] border-white opacity-[0.6] ssm:py-2 ssm:px-[14px] md:py-3 md:px-[18px]">
            ...
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-y-8 md:w-fit ssm:w-[80%]">
        <img src={port5} alt="" />
        <span className="text-white font-urbanist font-bold text-2xl">
          INDOSKY - Digital Marketing
        </span>
        <div className="flex gap-x-2 text-sm text-[#FFFFFF]">
          <button className="rounded-[25px] border-[1px] border-white opacity-[0.6] ssm:py-2 ssm:px-[14px] md:py-3 md:px-[18px]">
            Website
          </button>
          <button className="rounded-[25px] border-[1px] border-white opacity-[0.6] ssm:py-2 ssm:px-[14px] md:py-3 md:px-[18px]">
            Java Script
          </button>
          <button className="rounded-[25px] border-[1px] border-white opacity-[0.6] ssm:py-2 ssm:px-[14px] md:py-3 md:px-[18px]">
            HTML
          </button>
          <button className="rounded-[25px] border-[1px] border-white opacity-[0.6] ssm:py-2 ssm:px-[14px] md:py-3 md:px-[18px]">
            ...
          </button>
        </div>
      </div>
    </div>
  );
};

export default portofolio;
