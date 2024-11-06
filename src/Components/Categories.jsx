import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="rounded-lg bg-white h-1/2">
      <div className="gap-8 p-4 rounded-lg w-[192px]">
        <Link
          to="/category/all"
          className="tab tab-active btn hover:bg-[#9538E2] hover:text-white rounded-xl mb-3 w-[150px]"
        >
          All Data
        </Link>
        {categories.map((category) => (
          <Link
            key={category.category}
            to={`/category/${category.category}`}
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
