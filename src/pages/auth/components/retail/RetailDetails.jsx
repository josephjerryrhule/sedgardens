import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo, loginimage } from "../../../../assets";
import { registerretailWithEmailAndPassword } from "../../../../firebase";

const RetailDetails = ({ values }) => {
  const { email, password } = values;
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const register = () => {
    registerretailWithEmailAndPassword(
      email,
      password,
      firstname,
      lastname,
      address,
      phone
    );
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
        <span className="hidden md:block font-inter text-black font-normal text-[20px] leading-[28px] md:pb-[15px]">
          Provide your company details to complete your account set up
        </span>

        <div className="register">
          <div className="w-full emailarea mb-5">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              autoComplete="email"
              id="registeremail"
              className={`hidden`}
              disabled
              readOnly
            />
            <input
              type="text"
              value={password}
              id="registerpassword"
              className="hidden"
              disabled
              readOnly
            />
          </div>
          <div className="w-full emailarea mb-5">
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              id="registercompanyname"
              className={`w-full bg-gardensform h-[60px] rounded-md pl-7 font-inter text-[16px] leading-[19px] text-[#808080] outline-0 focus:outline-none peer`}
            />
          </div>
          <div className="w-full emailarea mb-5">
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
              id="registercompanyname"
              className={`w-full bg-gardensform h-[60px] rounded-md pl-7 font-inter text-[16px] leading-[19px] text-[#808080] outline-0 focus:outline-none peer`}
            />
          </div>
          <div className="w-full companyaddressarea mb-5">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              id="companyaddress"
              className="w-full bg-gardensform h-[60px] rounded-md pl-7 font-inter text-[16px] leading-[19px] text-[#808080] outline-0 focus:outline-none"
            />
          </div>
          <div className="w-full companyaddressarea mb-5">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              id="companyphone"
              className={`w-full bg-gardensform h-[60px] rounded-md pl-7 font-inter text-[16px] leading-[19px] text-[#808080] outline-0 focus:outline-none peer`}
            />
          </div>
          <div className="w-full buttonarea mb-16">
            <button
              onClick={register}
              type="submit"
              className="
              bg-primary text-white font-ibm font-medium text-center
            text-[16px] leading-[20px] w-full h-[60px] rounded-md"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:block loginimagearea">
        <img src={loginimage} alt="Greens" className="h-full w-full" />
      </div>
    </div>
  );
};

export default RetailDetails;
