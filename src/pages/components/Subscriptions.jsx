import React from "react";
import { petrmegra } from "../../assets";

const Subscriptions = () => {
  return (
    <div className="md:w-[70%] mx-auto flex items-center justify-between pt-20 pb-20">
      <div className="max-w-[328px] flex flex-col">
        <h2 className="font-playfair text-black font-semibold text-[36px] leading-[47.99px]">
          Subscriptions
        </h2>
        <p className="text-black font-ibm">
          Subscribe to our weekly deliveries. No need to order multiple times.
        </p>
      </div>
      <img src={petrmegra} alt="PertrMegra" />
    </div>
  );
};

export default Subscriptions;
