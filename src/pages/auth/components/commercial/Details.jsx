import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo, loginimage } from "../../../../assets";
import { registerWithEmailAndPassword } from "../../../../firebase";
import Input, { getCountries } from "react-phone-number-input/input";
import countryNames from "react-phone-number-input/locale/en.json";

const Details = ({ values }) => {
  const { email, password } = values;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [companyaddress, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const register = () => {
    registerWithEmailAndPassword(
      email,
      password,
      name,
      description,
      companyaddress,
      phone,
      website
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Company name"
              id="registercompanyname"
              className={`w-full bg-gardensform h-[60px] rounded-md pl-7 font-inter text-[16px] leading-[19px] text-[#808080] outline-0 focus:outline-none peer`}
            />
          </div>
          <div className="w-full companydescriptionare mb-5">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell us about your company"
              className="pt-4 resize w-full bg-gardensform h-[60px] rounded-md pl-7 font-inter text-[16px] leading-[19px] text-[#808080] outline-0 focus:outline-none"
            ></textarea>
          </div>
          <div className="w-full companyaddressarea mb-5">
            <input
              type="text"
              value={companyaddress}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Company Address"
              id="companyaddress"
              className="w-full bg-gardensform h-[60px] rounded-md pl-7 font-inter text-[16px] leading-[19px] text-[#808080] outline-0 focus:outline-none"
            />
          </div>
          <div className="w-full companyaddressarea mb-5">
            <Input
              international
              withCountryCallingCode
              defaultCountry="GH"
              value={phone}
              onChange={setPhone}
              placeholder="Company Phone Number"
              id="companyphone"
              className={`w-full bg-gardensform h-[60px] rounded-md pl-7 font-inter text-[16px] leading-[19px] text-[#808080] outline-0 focus:outline-none peer`}
            />
          </div>
          <div className="w-full companywebsite mb-5">
            <input
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="Website"
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

export default Details;
