import React from "react";
import { facebook, instagram } from "../../assets";

const Footer = () => {
  return (
    <div className="bg-gardensgreen w-full xs:h-[168px] md:h-[119px] flex items-center">
      <div className="mx-auto w-[90%] flex flex-col-reverse md:flex-row md:items-center md:justify-between">
        <div className="copyrightarea">
          <span className="font-ibm xs:text-[#808080] md:text-black font-normal text-[14px] leading-[18px]">
            Micro Gardens © 2022
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <span className="font-ibm text-black font-normal text-[14px] leading-[18px] mr-10 xs:mb-5 md:mb-0">
            Terms & Conditions
          </span>
          <span className="font-ibm text-black font-normal text-[14px] leading-[18px] mr-11 xs:mb-5 md:mb-0">
            Privacy Policy
          </span>
          <div className="flex items-center xs:mb-5 md:mb-0">
            <img src={instagram} alt="Instagram" className="mr-5" />
            <img src={facebook} alt="Facebook" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
