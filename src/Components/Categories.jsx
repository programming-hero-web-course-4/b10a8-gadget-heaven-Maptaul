import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    category_id: 1,
    category: "Laptops",
    description: "High-performance laptops suitable for work and play.",
    product_count: 2,
  },
  {
    category_id: 2,
    category: "Phones",
    description:
      "Latest smartphones with advanced features and great performance.",
    product_count: 2,
  },
  {
    category_id: 3,
    category: "Accessories",
    description: "Essential accessories to complement your tech devices.",
    product_count: 2,
  },
  {
    category_id: 4,
    category: "Smart Watches",
    description: "Smartwatches with health tracking and smart features.",
    product_count: 2,
  },
  {
    category_id: 5,
    category: "MacBook",
    description:
      "Apple's MacBook series, known for sleek design and powerful performance.",
    product_count: 2,
  },
  {
    category_id: 6,
    category: "Iphone",
    description:
      "iPhone models with cutting-edge technology and seamless experience.",
    product_count: 2,
  },
];

const Categories = () => {
  return (
    <div className="rounded-lg bg-white h-1/2">
      <div className="gap-8 p-4 rounded-lg w-[192px]">
        <Link
          to="/"
          className="tab tab-active btn hover:bg-[#9538E2] hover:text-white rounded-xl mb-3 w-[150px]"
        >
          All Data
        </Link>
        {categories.map((category) => (
          <Link
            key={category.category}
            to={category.category}
            role="tab"
            className="tab tab-active btn hover:bg-[#9538E2] hover:text-white rounded-xl mb-3 w-[150px]"
          >
            {category.category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
