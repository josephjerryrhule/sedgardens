import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Nav = () => {
  let active = {
    textDecoration: "underline",
    color: "#21a179",
    fontWeight: "500",
  };
  return (
    <div className="flex justify-between pt-20">
      <ul className="list-none font-ibm font-normal text-[18px] leading-6 flex flex-col gap-6 text-[#808080]">
        <NavLink
          to="/myaccount/profile"
          style={({ isActive }) => (isActive ? active : null)}
        >
          <li>Profile</li>
        </NavLink>
        <NavLink
          to="/myaccount/orders"
          style={({ isActive }) => (isActive ? active : null)}
        >
          <li>Orders</li>
        </NavLink>
        <NavLink
          to="/myaccount/subscriptions"
          style={({ isActive }) => (isActive ? active : null)}
        >
          <li>Subscriptions</li>
        </NavLink>
        <NavLink
          to="/myaccount/security"
          style={({ isActive }) => (isActive ? active : null)}
        >
          <li>Security</li>
        </NavLink>
      </ul>
      <div className="bg-white rounded-[10px] drop-shadow-[0_5px_20px_rgba(220,220,220,0.3)] w-[90%]">
        <Outlet />
      </div>
    </div>
  );
};

export default Nav;
