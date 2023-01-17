import React from "react";
import { Link } from "react-router-dom";
import Flickity from "react-flickity-component";
import { CollectionItems } from "../../constants";

const flickityOptions = {
  prevNextButtons: false,
  pageDots: false,
  autoPlay: true,
};

const Collections = () => {
  return (
    <div className="md:w-[80%] mx-auto flex flex-col items-center pt-10 pb-20">
      <h2 className="text-center text-black font-playfair font-semibold text-[36px] leading-[47.99px]">
        See Our Collections
      </h2>
      <div className="hidden md:grid xs:grid-cols-1 md:grid-cols-4 pt-10 pb-20 gap-[70px]">
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

      <div className="lg:hidden">
        {CollectionItems.map((collect, index) => (
          <Flickity
            className={"collectionacarousel"}
            elementType={"div"}
            options={flickityOptions}
            key={collect.title}
          >
            <img src={collect.img} alt={collect.title} className="w-full" />

            <span className="text-black font-ibm text-center mt-auto">
              {collect.title}
            </span>
          </Flickity>
        ))}
      </div>
      <Link to="/shop">
        <button className="bg-primary font-ibm text-white md:w-[328px] xs:w-[300px] md:h-[60px] xs:h-[45px] rounded-[5px]">
          Shop More
        </button>
      </Link>
    </div>
  );
};

export default Collections;
