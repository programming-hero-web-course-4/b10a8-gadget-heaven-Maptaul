import { useContext } from "react";
import { FaSort } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Headings from "../Components/Headings";
import { Context } from "../Context/ContextApi";

const Dashboard = () => {
  const { cart } = useContext(Context);

  return (
    <div>
      <div className="-mt-12  ">
        <div className="bg-[#9538E2] text-white items-center mb-10 py-8 mx-auto">
          <Headings tittle={"Dashboard"} />
          <p className="mb-10 text-center">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
          <div className=" max-lg items-center justify-center text-center ">
            <button className="btn mr-3 items-center rounded-full text-white bg-[#9538E2] hover:text-purple-800 hover:bg-white ">
              Add To Card
            </button>
            <button className='btn mr-3 items-center rounded-full text-white bg-[#9538E2] hover:text-purple-800 hover:bg-white "'>
              wishlist
            </button>
          </div>
        </div>
      </div>
      <div className="  bg-gray-100 flex  p-4 -mt-10">
        <div className="flex items-center text-right justify-start">
          <p>cart</p>
        </div>
        <div className="flex justify-center mx-auto items-center gap-2">
          <p>Total cost:999.99</p>
          <button className="btn  items-center rounded-full text-white bg-[#9538E2] hover:text-purple-800 hover:bg-white ">
            Sort by Price{" "}
            <span>
              <FaSort />
            </span>
          </button>
          <button className='btn mr-3 items-center rounded-full text-white bg-[#9538E2] hover:text-purple-800 hover:bg-white "'>
            Purchase
          </button>
        </div>
      </div>
      {cart.map((product) => (
        <div key={product.product_id} className="bg-gray-100 py-4 ">
          <div className=" w-3/4 mb-5 container mx-auto  px-4 space-y-5">
            <div className="flex items-center bg-white justify-between rounded-lg border p-3">
              <div className="flex items-center gap-4">
                <figure className="h-16 w-16 overflow-hidden rounded-lg">
                  <img
                    src="https://i.ibb.co.com/FhvtQ6R/1680869474654-MLTPCC0004-1.png"
                    alt="Movie"
                    className="h-full w-full object-cover"
                  />
                </figure>
                <div>
                  <h2 className="card-title">Samsung Galaxy S23 Ultra</h2>
                  <p className="text-sm text-gray-600">
                    Ultra-slim, high-performance laptop with 13.4-inch Infinity
                    Edge display.
                  </p>
                  <p className="text-xs text-gray-600">Price:$999.99</p>
                </div>
              </div>
              <button>
                <i className=" text-2xl font-bold text-red-500">
                  <IoIosCloseCircleOutline />
                </i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
