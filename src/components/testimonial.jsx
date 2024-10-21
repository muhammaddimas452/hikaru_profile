import Testbg from "../assets/img/testbg.png";
import Test1 from "../assets/img/test1.png";
// eslint-disable-next-line no-unused-vars
import Test2 from "../assets/img/test2.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const testimonial = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 0, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="ssm:py-6 sm:py-8 md:py-[80px] grid grid-cols-1">
      <div data-aos="zoom-in" className="grid justify-items-center">
        <h1 className="uppercase ssm:w-[70%] md:w-[586px] text-white text-center clash-display-medium ssm:text-4xl sm:text-5xl">
          Client satisfaction is our priority
        </h1>
      </div>
      <div className="py-12">
        <Carousel responsive={responsive} infinite={true}>
          <div data-aos="zoom-in" className="">
            <img
              className="ssm:w-full sm:w-[430px] h-[420px]"
              src={Testbg}
              alt=""
            />
            <div className="absolute inset-0 flex flex-col justify-between ssm:w-[90%] sm:w-fit ssm:px-6 md:px-11 py-8">
              <h1 className="text-white capitalize font-urbanist font-medium ssm:leading-10 md:leading-10 ssm:text-lg md:text-[20px] ">
                “We are very satisfied with the work of this agency`s digital
                team. They succeeded in developing our website and mobile
                application in a very professional and timely manner.”
              </h1>
              <div className="flex gap-x-2 items-center">
                <img className="w-12 h-w-12" src={Test1} alt="" />
                <div>
                  <h1 className="font-urbanist font-bold text-[#7A0BC0] text-[18px]">
                    Dianne Russell
                  </h1>
                  <span className="font-urbanist font-medium text-white text-base">
                    Art Advisor
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" className="">
            <img
              className="ssm:w-full sm:w-[430px] h-[420px]"
              src={Testbg}
              alt=""
            />
            <div className="absolute inset-0 flex flex-col justify-between ssm:w-[90%] sm:w-fit ssm:px-6 md:px-11 py-8">
              <h1 className="text-white capitalize font-urbanist font-medium ssm:leading-10 md:leading-10 ssm:text-lg md:text-[20px] ">
                “We are very satisfied with the work of this agency`s digital
                team. They succeeded in developing our website and mobile
                application in a very professional and timely manner.”
              </h1>
              <div className="flex gap-x-2 items-center">
                <img className="w-12 h-w-12" src={Test2} alt="" />
                <div>
                  <h1 className="font-urbanist font-bold text-[#7A0BC0] text-[18px]">
                    Dianne Russell
                  </h1>
                  <span className="font-urbanist font-medium text-white text-base">
                    Art Advisor
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" className="">
            <img
              className="ssm:w-full sm:w-[430px] h-[420px]"
              src={Testbg}
              alt=""
            />
            <div className="absolute inset-0 flex flex-col justify-between ssm:w-[90%] sm:w-fit ssm:px-6 md:px-11 py-8">
              <h1 className="text-white capitalize font-urbanist font-medium ssm:leading-10 md:leading-10 ssm:text-lg md:text-[20px] ">
                “We are very satisfied with the work of this agency`s digital
                team. They succeeded in developing our website and mobile
                application in a very professional and timely manner.”
              </h1>
              <div className="flex gap-x-2 items-center">
                <img className="w-12 h-w-12" src={Test1} alt="" />
                <div>
                  <h1 className="font-urbanist font-bold text-[#7A0BC0] text-[18px]">
                    Dianne Russell
                  </h1>
                  <span className="font-urbanist font-medium text-white text-base">
                    Art Advisor
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" className="">
            <img
              className="ssm:w-full sm:w-[430px] h-[420px]"
              src={Testbg}
              alt=""
            />
            <div className="absolute inset-0 flex flex-col justify-between ssm:w-[90%] sm:w-fit ssm:px-6 md:px-11 py-8">
              <h1 className="text-white capitalize font-urbanist font-medium ssm:leading-10 md:leading-10 ssm:text-lg md:text-[20px] ">
                “We are very satisfied with the work of this agency`s digital
                team. They succeeded in developing our website and mobile
                application in a very professional and timely manner.”
              </h1>
              <div className="flex gap-x-2 items-center">
                <img className="w-12 h-w-12" src={Test2} alt="" />
                <div>
                  <h1 className="font-urbanist font-bold text-[#7A0BC0] text-[18px]">
                    Dianne Russell
                  </h1>
                  <span className="font-urbanist font-medium text-white text-base">
                    Art Advisor
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default testimonial;
