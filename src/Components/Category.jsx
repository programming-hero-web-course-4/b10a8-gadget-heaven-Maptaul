import React from "react";

const Category = () => {
  return (
    <div className=" rounded-lg bg-white">
      <div className="grid gap-4 p-4 rounded-lg  w-[192px]">
        <button className="btn hover:bg-[#9538E2] hover:text-white rounded-full">
          All Product
        </button>
        <button className="btn hover:bg-[#9538E2] hover:text-white rounded-full">
          Laptops
        </button>
        <button className="btn hover:bg-[#9538E2] hover:text-white rounded-full">
          Phones
        </button>
        <button className="btn hover:bg-[#9538E2] hover:text-white rounded-full">
          Accessories
        </button>
        <button className="btn hover:bg-[#9538E2] hover:text-white rounded-full">
          Smart Watches
        </button>
        <button className="btn hover:bg-[#9538E2] hover:text-white rounded-full">
          MacBook
        </button>
        <button className="btn hover:bg-[#9538E2] hover:text-white rounded-full">
          Iphone
        </button>
      </div>
    </div>
  );
};

export default Category;
