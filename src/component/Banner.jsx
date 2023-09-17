import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../Assets/capsul-1.avif";
import img2 from "../Assets/capsul-2.avif";
import img3 from "../Assets/capsul-3.avif";

const Banner = () => {
  return (
    <div id='Home' className="w-full ">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showThumbs={false}
        interval={1000}
      >
        <div>
          <div className="relative">
            <img
              src={img1}
              alt="Item1"
              className="w-full lg:h-[95vh] h-[70vh]"
            ></img>
          </div>
          <div className="absolute flex flex-col lg:top-[50%] lg:left-[6%] top-[50%] left-[13%] sm:top-[30%] md:top-[50%] ">
            <span className="text-white lg:text-lg text-xl font-semibold uppercase tracking-wide mb-2">
              RECENT LAUNCH
            </span>
            <h1 className="text-white lg:text-3xl text-xl font-bold uppercase tracking-wide mb-2">
              Falcon9 and Dragon
            </h1>
            <p className="text-white lg:text-xl text-base font-normal mb-2">
              {" "}
              Beyond borders, beyond imagination
            </p>
            <div className="mt-4">
              <button className="lg:px-4 lg:py-2 px-3 py-1 bg-transparent text-white uppercase text-xl border-[2px] hover:bg-white hover:text-black border-white ">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <img
              src={img2}
              alt="Item2"
              className="w-full lg:h-[95vh] h-[70vh]"
            ></img>
          </div>
          <div className="absolute flex flex-col top-[50%] left-[8%]  sm:top-[35%] md:top-[50%] ">
            <span className="text-white lg:text-lg text-xl font-semibold uppercase tracking-wide mb-2">
              COMPLETED MISSION
            </span>
            <h1 className="text-white lg:text-3xl text-xl font-bold uppercase tracking-wide mb-2">
              DRAGON RETURN TO EARTH
            </h1>
            <p className="text-white lg:text-xl text-base font-normal mb-2">
              {" "}
              One Planet, One Universe, One Future.
            </p>
            <div className="mt-4">
              <button className="lg:px-4 lg:py-2 px-3 py-1 bg-transparent text-white uppercase text-xl border-[2px] hover:bg-white hover:text-black border-white ">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <img
              src={img3}
              alt="Item3"
              className="w-full lg:h-[95vh] h-[70vh]"
            ></img>
          </div>
          <div className="absolute flex flex-col top-[50%] left-[6%] lg:w-[40%] w-[90%] sm:top-[30%] md:top-[50%] ">
            <span className="text-white lg:text-lg text-xl font-semibold uppercase tracking-wide mb-2">
              TAKING HUMANS TO SPACE
            </span>
            <h1 className="text-white lg:text-3xl text-xl font-bold uppercase tracking-wide mb-2">
              Dragon 1.1{" "}
            </h1>
            <p className="text-white lg:text-xl lg:block hidden text-base font-normal mb-2">
              {" "}
              In 2020, SpaceX returned America’s ability to fly NASA astronauts
              to and from the International Space Station on American vehicles
              for the first time since 2011. In addition to flying astronauts to
              space for NASA, SpaceX’s Dragon spacecraft can also carry
              commercial astronauts to Earth orbit, the ISS or beyond.
            </p>
            <div className="mt-4">
              <button className="lg:px-4 lg:py-2 px-3 py-1 bg-transparent text-white uppercase text-xl border-[2px] hover:bg-white hover:text-black border-white ">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
