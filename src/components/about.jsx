import Group2 from "../assets/img/Group 2.png";
import Download from "../assets/img/Download.png";
import Burts from "../assets/img/Burst-pucker-2.png";

const about = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 items-center gap-x-10 ssm:grid-cols-1 ssm:justify-items-center lg:justify-items-start px-20 ssm:py-6 sm:py-8 sm:gap-y-12 ssm:gap-y-14 md:py-[80px]">
        <div>
          <img src={Group2} alt="" />
        </div>
        <div className="text-white">
          <div className="lg:w-[583px]">
            <img className="justify-self-end" src={Burts} alt="" />
            <h1 className="uppercase clash-display-medium ssm:text-[32px] md:text-[42px] lg:text-[48px]">
              transforming your digital dream into reality
            </h1>
          </div>
          <span className="uppercase font-urbanist font-normal ssm:text-sm md:text-base">
            Hi, I`m Hikaru, I`m a UI/UX designer with 4+ years experience in
            handling website design projects. I really trust my skills to make
            clean, minimalist, and unique designs.
          </span>
          <button className="flex items-center mt-6 clash-display-regular ssm:text-sm md:text-base gap-x-3 ssm:px-7 ssm:py-[14px] md:px-8 md:py-[18px] bg-[#7A0BC0] ssm:rounded-2xl md:rounded-3xl">
            Download CV <img src={Download} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default about;
