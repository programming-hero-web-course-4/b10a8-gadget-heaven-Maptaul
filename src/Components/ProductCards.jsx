import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const ProductCards = () => {
  const data = useLoaderData();
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const allProducts = data.flatMap((cat) => cat.products);
    console.log("All Products:", allProducts);

    if (category === "all") {
      setProducts(allProducts);
    } else {
      const filteredByCategory = allProducts.filter(
        (product) => product.category === category
      );
      setProducts(filteredByCategory);
    }
  }, [category, data]);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
      {products.map((product) =>
        product && product.product_id && product.product_title ? (
          <Card key={product.product_id} product={product} />
        ) : null
      )}
    </div>
  );
};

export default ProductCards;
