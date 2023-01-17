import React from "react";
import { Route, Routes } from "react-router";
import { Footer, Navbar } from "../components";
import Nav from "./Nav";
import Orders from "./Orders";
import Profile from "./Profile";
import Subscriptions from "./Subscriptions";
import Security from "./Security";

const MyAccount = () => {
  return (
    <div>
      <div className="border-b">
        <Navbar />
      </div>
      <div className="w-[90%] mx-auto pt-20 pb-20">
        <h1 className="font-playfair font-semibold text-black text-[50px] leading-6">
          My Account
        </h1>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route path="profile" exact element={<Profile />} />
            <Route path="orders" exact element={<Orders />} />
            <Route path="subscriptions" exact element={<Subscriptions />} />
            <Route path="security" exact element={<Security />} />
          </Route>
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MyAccount;
