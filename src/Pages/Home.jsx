import React, { useContext, useEffect } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import Categories from "../Components/Categories";
import Headings from "../Components/Headings";
import { Context } from "../Context/ContextApi";

const Home = () => {
  const categories = useLoaderData();

  const { setProducts } = useContext(Context);

  useEffect(() => {
    setProducts(categories);
  }, [categories, setProducts]); // Assuming you have a context to store user information

  return (
    <div>
      <Banner />
      {/* Heading section  */}
      <Headings tittle={"Explore Cutting-Edge Gadgets"} />
      <div className="md:flex gap-4 p-4 py-10 mx-auto bg-gray-100">
        <Categories categories={categories} />
        <Outlet />
        <Card />
      </div>
    </div>
  );
};

export default Home;
