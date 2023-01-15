import React from "react";
import { smcart } from "../../assets";

const ProductCard = ({ title, excerpt, price, img }) => {
  return (
    <div className="flex flex-col">
      <img
        src={img}
        alt={title}
        className="w-full h-[129px] sm:h-[313px] object-cover rounded-[10px] mb-4"
      />
      <div className="flex items-center justify-between sm:mb-3 mb-1">
        <h3 className="font-ibm sm:font-playfair font-medium text-[20px] sm:text-[28px] text-[#252525]">
          {title}
        </h3>
        <img
          src={smcart}
          alt="Cart Icon"
          className="w-[17px] h-[15.08px] sm:w-[23px] sm:h-[20.41px]"
        />
      </div>
      <p className="font-ibm font-normal text-[12px] sm:text-[16px] leading-4 sm:leading-5 text-[#808080] pb-7">
        {excerpt}
      </p>
      <span className="font-ibm font-normal text-primary text-[16px] sm:text-[24px] leading-5 sm:leading-8">
        {price}
      </span>
    </div>
  );
};

export default ProductCard;
