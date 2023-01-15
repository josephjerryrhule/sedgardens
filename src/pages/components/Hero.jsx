import React from "react";
import { devi, logo } from "../../assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full bg-whitegrad md:h-[1024px] xs:h-[611px] flex flex-col items-center">
      <img src={logo} alt="Micro Gardens Logo" className="pt-10 pb-10" />
      <div className="md:max-w-[665px] xs:max-w-[300px] pb-5">
        <h1 className="text-center text-black font-playfair md:font-semibold md:text-[50px] md:leading-[50px] xs:font-medium xs:text-[28px] xs:leading-[37.32px] ">
          Nutritional value delivered every week
        </h1>
      </div>
      <div className="md:max-w-[537px] xs:max-w-[300px] pb-10">
        <p className="text-center text-black font-ibm font-normal text-[20px] leading-[26px] ">
          Shop your microgreens with an added advantage of freshness
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between md:max-w-[665px] xs:max-w-[300px] gap-2 pb-10">
        <Link to="/login">
          <button className="bg-primary font-ibm text-white md:w-[328px] xs:w-[300px] md:h-[60px] xs:h-[45px] rounded-[5px]">
            Buy Commercial
          </button>
        </Link>
        <Link to="/login">
          <button
            className="
        md:bg-primary 
        font-ibm 
        md:text-white 
        md:w-[328px] 
        md:opacity-20 
        h-[60px] 
        md:rounded-[5px]
        md:no-underline
        xs:text-primary
        xs:underline
        xs:text-[16px]
        xs:leading-[20.8px]
        "
          >
            Shop Retail
          </button>
        </Link>
      </div>
      <div className="mt-auto">
        <img src={devi} alt="Devi" />
      </div>
    </div>
  );
};

export default Hero;
