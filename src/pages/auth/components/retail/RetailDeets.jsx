import React from "react";
import { Link } from "react-router-dom";
import { logo, loginimage } from "../../../../assets";

const RetailDeets = ({ nextStep, handleChange, values }) => {
  //for Continue event Listener
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col w-[90%] md:w-[50%] mx-auto">
        <Link to="/">
          <img src={logo} alt="Logo" className="pt-20 pb-[71px]" />
        </Link>
        <h1 className="font-playfair text-black font-bold text-[50px] leading-[67px] pb-[38px]">
          Sign Up
        </h1>
        <div className="flex items-center justify-between w-full md:w-[375px] h-[42px] border border-[#DCDCDC] rounded-full mb-10 p-1">
          <Link to="/register">
            <button className="text-[#9CA7B8] font-ibm font-medium h-[34px] md:w-[184px]  w-[130px] text-[12px] md:text-[16px]">
              Sign up as Commercial
            </button>
          </Link>
          <Link to="/registerretail">
            <button className="rounded-full bg-primarylight text-primary font-ibm font-medium h-[34px] md:w-[184px] w-[147px] text-[12px] md:text-[16px]">
              Sign up as Retail
            </button>
          </Link>
        </div>
        <span className="hidden md:block font-inter text-black font-normal text-[12px] leading-[14px] md:pb-[15px]">
          Enter your email address and password to create your account
        </span>
        <div className="retailregister">
          <div className="w-full emailarea mb-5">
            <input
              type="email"
              onChange={handleChange("email")}
              defaultValue={values.email}
              autoComplete="email"
              placeholder="Email address"
              id="retailemail"
              className="w-full bg-gardensform h-[60px] rounded-md pl-7 font-inter text-[16px] leading-[19px] text-[#808080] outline-0 focus:outline-none"
            />
          </div>
          <div className="w-full passwordarea mb-5 md:mb-16">
            <input
              type="password"
              onChange={handleChange("password")}
              defaultValue={values.password}
              autoComplete="password"
              placeholder="Enter Password"
              id="retailpassword"
              className="w-full bg-gardensform h-[60px] rounded-md pl-7 font-inter text-[16px] leading-[19px] text-[#808080] outline-0 focus:outline-none"
            />
          </div>
          {/*   <div className="w-full passwordarea mb-5 md:mb-16">
            <input
              type="password"
              name=""
              placeholder="Confirm Password"
              id=""
              className="w-full bg-gardensform h-[60px] rounded-md pl-7 font-inter text-[16px] leading-[19px] text-[#808080] outline-0 focus:outline-none"
            />
          </div> */}
          <div className="w-full buttonarea mb-16">
            <button
              type="submit"
              onClick={Continue}
              className="
              bg-primary text-white font-ibm font-medium text-center
            text-[16px] leading-[20px] w-full h-[60px] rounded-md"
            >
              Continue
            </button>
          </div>
          <div className="flex items-center md:justify-center ">
            <p className="text-black font-normal font-inter text-[16px] leading-[20px] md:text-[20px] md:leading-[24px] pb-[30px]">
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-primary border-b border-primary font-tenor">
                  Sign in
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:block loginimagearea">
        <img src={loginimage} alt="Greens" className="h-full w-full" />
      </div>
    </div>
  );
};

export default RetailDeets;
