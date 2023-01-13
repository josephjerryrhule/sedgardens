import React from "react";
import { Link } from "react-router-dom";
import { loginimage, logo } from "../../assets";

const ResetPassword = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col w-[50%] mx-auto">
        <Link to="/">
          <img src={logo} alt="Logo" className="pt-20 pb-[71px]" />
        </Link>
        <h1 className="font-playfair text-black font-bold text-[50px] leading-[67px] pb-[30px]">
          Reset Password
        </h1>
        <span className="font-inter text-black font-normal text-[12px] leading-[14px] pb-[15px]">
          Enter the email address associated with your account. We’ll send you a
          code to reset your password.
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
          <div className="w-full buttonarea mb-10">
            <button
              type="submit"
              className="
              bg-primary text-white font-ibm font-medium text-center
            text-[16px] leading-[20px] w-full h-[60px] rounded-md"
            >
              Send me the code
            </button>
          </div>
          <div className="loginarea flex items-center justify-center">
            <Link to="/login">
              <p className="text-primary font-inter font-normal text-[16px] leading-[19px] border-b border-primary">
                Return to login
              </p>
            </Link>
          </div>
        </form>
      </div>

      <div className="loginimagearea">
        <img src={loginimage} alt="Greens" className="h-full w-full" />
      </div>
    </div>
  );
};

export default ResetPassword;
