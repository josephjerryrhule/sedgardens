import React from "react";
import { Link } from "react-router-dom";
import { logo, loginimage } from "../../assets";

const Login = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col w-[90%] md:w-[50%] mx-auto">
        <Link to="/">
          <img src={logo} alt="Logo" className="pt-20 pb-[71px]" />
        </Link>
        <h1 className="font-playfair text-black font-bold text-[50px] leading-[67px] pb-[38px]">
          Sign In
        </h1>
        <p className="text-black font-normal font-inter text-[16px] leading-[20px] md:text-[20px] md:leading-[24px] pb-[30px]">
          New to Microgardens?{" "}
          <Link to="/register">
            <span className="text-primary border-b border-primary font-tenor">
              Sign up here
            </span>
          </Link>
        </p>
        <span className="hidden md:block font-inter text-black font-normal text-[12px] leading-[14px] md:pb-[15px]">
          Enter your email and password to start shopping
        </span>
        <form action="">
          <div className="w-full emailarea mb-5">
            <input
              type="email"
              name=""
              placeholder="Email address"
              id=""
              className="w-full bg-gardensform h-[60px] rounded-md pl-7 font-inter text-[16px] leading-[19px] text-[#808080] outline-0 focus:outline-none"
            />
          </div>
          <div className="w-full passwordarea mb-5 md:mb-16">
            <input
              type="password"
              name=""
              placeholder="Password"
              id=""
              className="w-full bg-gardensform h-[60px] rounded-md pl-7 font-inter text-[16px] leading-[19px] text-[#808080] outline-0 focus:outline-none"
            />
          </div>
          <div className="w-full buttonarea mb-16">
            <button
              type="submit"
              className="
              bg-primary text-white font-ibm font-medium text-center
            text-[16px] leading-[20px] w-full h-[60px] rounded-md"
            >
              Sign In
            </button>
          </div>
          <div className="resetarea">
            <Link to="/resetpassword">
              <p className="text-primary font-inter font-normal text-[16px] leading-[19px] underline">
                Forgot your password?
              </p>
            </Link>
          </div>
        </form>
      </div>

      <div className="hidden md:block loginimagearea">
        <img src={loginimage} alt="Greens" className="h-full w-full" />
      </div>
    </div>
  );
};

export default Login;