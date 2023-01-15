import React, { useState } from "react";
import { Link } from "react-router-dom";
import { account, cart, logo, search } from "../../assets";
import { auth, logout } from "../../firebase";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
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
        <div className="account-area relative">
          <img
            src={account}
            alt="Search"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${
              toggle ? "absolute" : "hidden"
            } right-0 bg-white rounded-md`}
          >
            <ul className="list-none flex flex-col p-5">
              <li className="text-black font-ibm font-normal text-[16px] leading-5 cursor-pointer pb-3 pt-3">
                Profile
              </li>
              <li className="text-black font-ibm font-normal text-[16px] leading-5 cursor-pointer pb-3">
                Orders
              </li>
              <li className="text-black font-ibm font-normal text-[16px] leading-5 cursor-pointer pb-3">
                Subscription
              </li>
              <li className="text-black font-ibm font-normal text-[16px] leading-5 cursor-pointer pb-3">
                Security
              </li>
              <li
                onClick={logout}
                className="text-black font-ibm font-normal text-[16px] leading-5 cursor-pointer pb-3"
              >
                Sign Out
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
