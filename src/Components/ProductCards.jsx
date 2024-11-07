import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Context/ContextApi";
import Card from "./Card";

const ProductCards = () => {
  const { products } = useContext(Context);
  const { category } = useParams();

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
      {products
        .filter((p) => p.category === category || !category)
        .map((product) =>
          product && product.product_id && product.product_title ? (
            <Card key={product.product_id} product={product} />
          ) : null
        )}
    </div>
  );
};

export default ProductCards;
