import Logo from "../assets/img/Logo.png";

const footer = () => {
  return (
    <div className="ssm:px-8 md:px-10 lg:px-20 ssm:py-6 sm:py-8 md:py-[50px]">
      <div className="sm:flex ssm:grid ssm:grid-cols-1 ssm:gap-y-5 sm:text-base border-b-[1px] border-white/20 justify-between lg:py-[50px] ssm:py-10 text-white">
        <div className="sm:flex sm:flex-col ssm:grid ssm:justify-items-center ssm:text-center sm:text-start gap-y-7">
          <a href="" className="flex gap-x-2 items-center uppercase">
            <img src={Logo} alt="" />
            <span>Nexidigital</span>
          </a>
          <h1>UI/UX DESIGNER BASED IN INDONESIAN</h1>
          <a
            className="font-urbanist font-semibold ssm:text-2xl sm:text-[28px] md:text-4xl "
            href=""
          >
            hikaruzahraan@gmail.com
          </a>
        </div>
        <div className="grid grid-cols-2 sm:text-base lg:mr-20 ssm:text-sm sm:justify-items-end ssm:justify-items-center ssm:mt-4 lg:gap-x-28 md:gap-x-8 ssm:gap-x-1">
          <div className="flex flex-col font-urbanist ssm:gap-y-3 sm:gap-y-4">
            <h1 className="font-semibold">Pages</h1>
            <ul className="flex flex-col font-normal ssm:gap-y-3 sm:gap-y-4">
              <li className="transition ease-in-out delay-100 hover:-translate-y-2 duration-500">
                <a href="">Home</a>
              </li>
              <li className="transition ease-in-out delay-100 hover:-translate-y-2 duration-500">
                <a href="">About</a>
              </li>
              <li className="transition ease-in-out delay-100 hover:-translate-y-2 duration-500">
                <a href="">Portofolios</a>
              </li>
              <li className="transition ease-in-out delay-100 hover:-translate-y-2 duration-500">
                <a href="">Testimonials</a>
              </li>
              <li className="transition ease-in-out delay-100 hover:-translate-y-2 duration-500">
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col font-urbanist ssm:gap-y-3 sm:gap-y-4">
            <h1 className="font-semibold">Socials</h1>
            <ul className="flex flex-col font-normal ssm:gap-y-3 sm:gap-y-4">
              <li className="transition ease-in-out delay-100 hover:-translate-y-2 duration-500">
                <a href="">Instagram</a>
              </li>
              <li className="transition ease-in-out delay-100 hover:-translate-y-2 duration-500">
                <a href="">LinkedIn</a>
              </li>
              <li className="transition ease-in-out delay-100 hover:-translate-y-2 duration-500">
                <a href="">Upwork</a>
              </li>
              <li className="transition ease-in-out delay-100 hover:-translate-y-2 duration-500">
                <a href="">Dribbble</a>
              </li>
              <li className="transition ease-in-out delay-100 hover:-translate-y-2 duration-500">
                <a href="">Behance</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sm:flex ssm:grid ssm:grid-cols-1 ssm:gap-y-5 sm:text-base items-center justify-items-center justify-between lg:pb-[0px] ssm:py-10 text-white">
        <div className="sm:flex sm:flex-col ssm:grid ssm:justify-items-center ssm:text-center sm:text-start gap-y-7">
          <a className="general-sans font-semibold text-xs" href="">
            ©MaterialDev - All rights reserved
          </a>
        </div>
        <div className="flex font-urbanist font-normal text-base sm:justify-items-end ssm:justify-items-center ssm:mt-4 sm:mt-0 lg:gap-x-12 md:gap-x-8 ssm:gap-x-1">
          <div className="">
            <a href="">Privacy policy</a>
          </div>
          <div className="">
            <a href="">Terms of service</a>
          </div>
          <div className="">
            <a href="">FAQ`s</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
