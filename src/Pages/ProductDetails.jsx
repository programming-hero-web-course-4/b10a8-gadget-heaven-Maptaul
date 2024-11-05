import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import Headings from "../Components/Headings";

const ProductDetails = () => {
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
      <div className="w-3/4 h-auto relative z-10 mx-auto -mt-20 -mb-10 flex justify-center items-center rounded-xl p-3 bg-gray-200 backdrop-blur-xl border-2 ">
        <div className=" flex gap-4 justify-between items-center">
          <div className="w-2/4">
            <img
              className="w-[300px] h-[300px] rounded-lg"
              src="https://i.ibb.co.com/FhvtQ6R/1680869474654-MLTPCC0004-1.png"
              alt=""
            />
          </div>
          <div className="text-left  space-y-5 ">
            <h1 className="text-2xl font-bold">Samsung Galaxy S23 Ultra</h1>
            <p>Price:$999.99</p>
            <button className="rounded-full bg-green-400 px-4 py-2">
              In stoke
            </button>
            <p className="text-gray-500">
              Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
              display.
            </p>
            <p className="font-bold">Specification:</p>
            <ul>
              <li>1. Intel i7 11th Gen</li>
              <li>2. 16GB RAM</li>
              <li>3. 512GB SSD</li>
              <li>4. Touchscreen</li>
            </ul>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <button className="bg-purple-300 rounded-full p-1">4.8</button>
            </div>
            <div className="flex gap-3 text-3xl">
              <button className="btn rounded-full bg-[#9538E2] text-white">
                Add To Card
                <span className="text-2xl font-bold">
                  <CiShoppingCart />
                </span>
              </button>
              <button className="bg-white text-black  rounded-full p-3">
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
