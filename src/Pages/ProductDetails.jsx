import React, { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";
import Headings from "../Components/Headings";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const data = useLoaderData();

  useEffect(() => {
    const allProducts = data.flatMap((cat) => cat.products);

    const selectedProduct = allProducts.find(
      (product) => product.product_id === parseInt(productId)
    );
    setProduct(selectedProduct);
    setLoading(false);
  }, [data, productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found!</div>;
  }

  const {
    product_title,
    product_image,
    price,
    description,
    Specification,
    rating,
    inStock,
  } = product;

  return (
    <div className="-mt-12 text-center ">
      <div className="bg-[#9538E2] text-white mb-10 py-8 mx-auto">
        <Headings tittle={"Product Details"} />
        <p className="mb-10">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
      </div>
      <div className="w-3/4 h-auto relative z-10 mx-auto -mt-20 -mb-10 flex justify-center items-center rounded-xl p-3 bg-gray-200 backdrop-blur-xl border-2">
        <div className=" flex gap-4 justify-between items-center">
          <div className="w-2/4">
            <img
              className="w-[300px] h-[300px] rounded-lg"
              src={product_image}
              alt={product_title}
            />
          </div>
          <div className="text-left space-y-5">
            <h1 className="text-2xl font-bold">{product_title}</h1>
            <p>Price: ${price}</p>
            <button
              className={`rounded-full ${
                inStock ? "bg-green-400" : "bg-red-400"
              } px-4 py-2`}
            >
              {inStock ? "In Stock" : "Out of Stock"}
            </button>
            <p className="text-gray-500">{description}</p>
            <p className="font-bold">Specification:</p>
            <ul>
              {Specification.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <input
                  key={index}
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked={index < Math.round(rating) ? true : false}
                />
              ))}
              <button className="bg-purple-300 rounded-full p-1">
                {rating}
              </button>
            </div>
            <div className="flex gap-3 text-3xl">
              <button className="btn rounded-full bg-[#9538E2] text-white">
                Add To Cart
                <span className="text-2xl font-bold">
                  <CiShoppingCart />
                </span>
              </button>
              <button className="bg-white text-black rounded-full p-3">
                <FaRegHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
