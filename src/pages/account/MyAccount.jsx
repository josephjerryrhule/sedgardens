import React from "react";
import { Footer, Navbar } from "../components";

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
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MyAccount;
