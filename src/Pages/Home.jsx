import React from "react";
import Carts from "../Components/Carts";
import Category from "../Components/Category";
import Headings from "../Components/Headings";

const Home = () => {
  return (
    <div>
      {/* Heading section  */}
      <Headings tittle={"Explore Cutting-Edge Gadgets"} />
      <div className="md:flex gap-4 p-4 mx-auto bg-gray-100">
        <Category />
        <Carts />
      </div>
    </div>
  );
};

export default Home;
