import React from "react";
import { Link } from "react-router-dom";
import { account, cart, logo, search } from "../../assets";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[230px] bg-white mx-auto w-[90%]">
      <div className="logoarea">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="flex items-center gap-10">
        <Link to="/microgreens">
          <span className="font-ibm font-normal text-[#808080] text-[18px] leading-6">
            Microgreens
          </span>
        </Link>
        <Link to="/microgreenmixes">
          <span className="font-ibm font-normal text-[#808080] text-[18px] leading-6">
            Microgreen mixes{" "}
          </span>
        </Link>
        <Link to="/herbs">
          <span className="font-ibm font-normal text-[#808080] text-[18px] leading-6">
            Herbs
          </span>
        </Link>
        <Link to="/shoots">
          <span className="font-ibm font-normal text-[#808080] text-[18px] leading-6">
            Shoots
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-10">
        <img src={search} alt="Search" />

        <Link to="/search">
          <img src={cart} alt="Search" />
        </Link>
        <Link to="/search">
          <img src={account} alt="Search" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
