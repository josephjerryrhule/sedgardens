import React from "react";
import { CollectionItems } from "../../constants";

const Collections = () => {
  return (
    <div className="md:w-[80%] mx-auto flex flex-col items-center pt-10 pb-20">
      <h2 className="text-center text-black font-playfair font-semibold text-[36px] leading-[47.99px]">
        See Our Collections
      </h2>
      <div className="grid grid-cols-4 pt-10 pb-20 gap-[70px]">
        {CollectionItems.map((item, index) => (
          <div
            key={item.title}
            className="max-w-[217px] h-[217px]
flex flex-col items-center            
            "
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-[217px] h-[217px] object-scale-down pb-5"
            />

            <span className="text-black font-ibm text-center mt-auto">
              {item.title}
            </span>
          </div>
        ))}
      </div>
      <button className="bg-primary font-ibm text-white md:w-[328px] xs:w-[300px] md:h-[60px] xs:h-[45px] rounded-[5px]">
        Shop More
      </button>
    </div>
  );
};

export default Collections;
