// eslint-disable-next-line no-unused-vars
import Star from "../assets/img/Group 1000001135.png";
import Image from "../assets/img/image.png";
import Profile from "../assets/img/profile hero.png";
import { BsArrowRight } from "react-icons/bs";

const hero = () => {
  return (
    <div>
      <div className="lg:flex lg:justify-between ssm:grid ssm:grid-cols-1 ssm:justify-items-center lg:justify-items-start ssm:gap-y-14 ssm:px-8 md:px-10 lg:px-20 ssm:py-6 sm:py-8 md:py-[80px]">
        <div data-aos="zoom-in" className="text-white lg:w-[653px]">
          <h1 className="typing-demo uppercase clash-display-medium ssm:text-center lg:text-start ssm:text-4xl sm:text-5xl md:text-[64px]">
            User interface designer based in indonesian
          </h1>
          <div className="lg:w-[524px] ssm:text-center lg:text-start mt-6">
            <span className="uppercase font-urbanist  font-normal ssm:text-sm md:text-base">
              I would be happy to help create a user-friendly and intuitive
              website with a modern interface design
            </span>
          </div>
          <div className="grid grid-cols-1 ssm:justify-items-center lg:justify-items-start">
            <button className="flex items-center shadow-xl shadow-[#7A0BC0]/50 mt-6 clash-display-regular ssm:text-sm md:text-base gap-x-2 ssm:px-7 ssm:py-[14px] md:px-8 md:py-[18px] bg-[#7A0BC0] hover:bg-gradient-to-r hover:from-[#4C0578] hover:to-[#7A0BC0] ssm:rounded-2xl md:rounded-3xl">
              Connect With Me <BsArrowRight className="text-3xl" />
            </button>
            <div className="mt-14 md:w-fit ssm:w-[80%]">
              <img src={Image} alt="" />
            </div>
          </div>
        </div>
        <div
          data-aos="flip-right"
          className="lg:w-fit md:w-[70%] ssm:w-[80%] text-center"
        >
          <img src={Profile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default hero;
