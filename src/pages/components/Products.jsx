import React from "react";
import { products } from "../../constants";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className="mx-auto w-[90%] pb-36">
      <div className="grid grid-cols-2 md:grid-cols-3 justify-between gap-8">
        {products.map((card) => (
          <ProductCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Products;
