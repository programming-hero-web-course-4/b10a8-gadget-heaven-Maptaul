import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const ProductCards = () => {
  const data = useLoaderData();
  const { category } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    const filteredByCategory = [...data].filter(
      (product) => product.category === category
    );
    setProduct(filteredByCategory);
  }, [category, data]);
  // console.log(category);
  return (
    <div className="w-3/4 grid">
      {product.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductCards;
