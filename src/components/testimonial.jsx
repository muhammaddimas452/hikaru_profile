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
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="ssm:py-6 sm:py-8 md:py-[80px] grid grid-cols-1">
      <div className="grid justify-items-center">
        <h1 className="uppercase w-[586px] text-white text-center clash-display-medium text-5xl">
          Client satisfaction is our priority
        </h1>
      </div>
      <div className="py-12 gap-x-10">
        <Carousel
          responsive={responsive}
          infinite={true}
          itemClass="carousel-item-padding-40-px"
        >
          <div className="">
            <img className="w-[90%]" src={Testbg} alt="" />
            <div className="absolute inset-0 flex flex-col justify-between px-11 py-8">
              <h1 className="text-white capitalize font-urbanist font-medium text-[20px] leading-10">
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
          <div>
            <img src={Testbg} alt="" />
            <div className="absolute inset-0 flex flex-col justify-between px-11 py-8">
              <h1 className="text-white capitalize font-urbanist font-medium text-[20px] leading-10">
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
          <div>
            <img src={Testbg} alt="" />
            <div className="absolute inset-0 flex flex-col justify-between px-11 py-8">
              <h1 className="text-white capitalize font-urbanist font-medium text-[20px] leading-10">
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
          <div>
            <img src={Testbg} alt="" />
            <div className="absolute inset-0 flex flex-col justify-between px-11 py-8">
              <h1 className="text-white capitalize font-urbanist font-medium text-[20px] leading-10">
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

          {/* <div
            className="px-11 py-8 w-[90%] h-[420px] bg-cover bg-center flex flex-col justify-between"
            style={{
              backgroundImage: `url(${Testbg})`,
            }}
          >
            <h1 className="text-white capitalize font-urbanist font-medium text-[20px] leading-10">
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
          <div
            className="px-11 py-8 w-[90%] bg-cover bg-center flex flex-col justify-between"
            style={{
              backgroundImage: `url(${Testbg})`,
            }}
          >
            <h1 className="text-white capitalize font-urbanist font-medium text-[20px] leading-10">
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
          <div
            className="px-11 py-8 w-[90%] bg-cover bg-center flex flex-col justify-between"
            style={{
              backgroundImage: `url(${Testbg})`,
            }}
          >
            <h1 className="text-white capitalize font-urbanist font-medium text-[20px] leading-10">
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
          <div
            className="px-11 py-8 w-[90%] bg-cover bg-center flex flex-col justify-between"
            style={{
              backgroundImage: `url(${Testbg})`,
            }}
          >
            <h1 className="text-white capitalize font-urbanist font-medium text-[20px] leading-10">
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
          <div
            className="px-11 py-8 w-[90%] bg-cover bg-center flex flex-col justify-between"
            style={{
              backgroundImage: `url(${Testbg})`,
            }}
          >
            <h1 className="text-white capitalize font-urbanist font-medium text-[20px] leading-10">
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
          <div
            className="px-11 py-8 w-[90%] bg-cover bg-center flex flex-col justify-between"
            style={{
              backgroundImage: `url(${Testbg})`,
            }}
          >
            <h1 className="text-white capitalize font-urbanist font-medium text-[20px] leading-10">
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
          <div
            className="px-11 py-8 w-[90%] bg-cover bg-center flex flex-col justify-between"
            style={{
              backgroundImage: `url(${Testbg})`,
            }}
          >
            <h1 className="text-white capitalize font-urbanist font-medium text-[20px] leading-10">
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
          <div
            className="px-11 py-8 w-[90%] bg-cover bg-center flex flex-col justify-between"
            style={{
              backgroundImage: `url(${Testbg})`,
            }}
          >
            <h1 className="text-white capitalize font-urbanist font-medium text-[20px] leading-10">
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
          </div> */}
        </Carousel>
      </div>
    </div>
  );
};

export default testimonial;
