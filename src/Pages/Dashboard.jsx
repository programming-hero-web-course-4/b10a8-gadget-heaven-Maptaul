import { useContext, useEffect, useState } from "react";
import { FaSort } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";
import Headings from "../Components/Headings";
import PopUp from "../Components/PopUp";
import { Context } from "../Context/ContextApi";

const Dashboard = () => {
  const { cart, setCart, wishlist, setWishlist } = useContext(Context);
  const [totalCost, setTotalCost] = useState(0);
  const [isAscending, setIsAscending] = useState(true);
  const [activeTab, setActiveTab] = useState("cart");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const calculateTotalCost = () => {
    const total = cart.reduce((sum, product) => sum + product.price, 0);
    setTotalCost(total);
  };

  const handleRemoveItem = (productId) => {
    if (activeTab === "cart") {
      const updatedCart = cart.filter(
        (product) => product.product_id !== productId
      );
      setCart(updatedCart);
      toast.warning("Product removed from cart");
    } else {
      const updatedWishlist = wishlist.filter(
        (product) => product.product_id !== productId
      );
      setWishlist(updatedWishlist);
      toast.warning("Product removed from wishlist");
    }
  };

  const handleSortByPrice = () => {
    const items = activeTab === "cart" ? [...cart] : [...wishlist];
    if (isAscending) {
      items.sort((a, b) => a.price - b.price);
    } else {
      items.sort((a, b) => b.price - a.price);
    }
    if (activeTab === "cart") setCart(items);
    else setWishlist(items);
    setIsAscending(!isAscending);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.product_id !== product.product_id)
    );
    toast.success("Product added to cart");
  };

  useEffect(() => {
    if (activeTab === "cart") calculateTotalCost();
  }, [cart, activeTab]);

  const handlePurchaseClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const activeItems = activeTab === "cart" ? cart : wishlist;

  return (
    <div>
      <div className="-mt-12">
        <div className="bg-[#9538E2] text-white items-center mb-10 py-8 mx-auto">
          <Headings tittle={"Dashboard"} />
          <p className="mb-10 text-center">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to
            <br /> the coolest accessories, we have it all!
          </p>
          <div className="max-lg items-center justify-center text-center">
            <button
              className={`btn mr-3 items-center rounded-full ${
                activeTab === "cart" ? "bg-purple-600" : "bg-gray-200"
              } text-white`}
              onClick={() => handleTabChange("cart")}
            >
              Add To Cart
            </button>
            <button
              className={`btn mr-3 items-center rounded-full ${
                activeTab === "wishlist" ? "bg-purple-600" : "bg-gray-200"
              } text-white`}
              onClick={() => handleTabChange("wishlist")}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 flex p-4 -mt-10">
        <div className="flex items-center text-right justify-start">
          <p>{activeTab === "cart" ? "Cart" : "Wishlist"}</p>
        </div>
        {activeTab === "cart" && (
          <div className="flex justify-center mx-auto items-center gap-2">
            <p>Total cost: ${totalCost.toFixed(2)}</p>
            <button
              onClick={handleSortByPrice}
              className="btn items-center rounded-full text-white bg-[#9538E2] hover:text-purple-800 hover:bg-white"
            >
              Sort by Price
              <FaSort />
            </button>
            <button
              onClick={handlePurchaseClick}
              className="btn mr-3 items-center rounded-full text-white bg-[#9538E2] hover:text-purple-800 hover:bg-white"
            >
              Purchase
            </button>
          </div>
        )}
      </div>

      {activeItems.length > 0 ? (
        activeItems.map((product) => (
          <div key={product.product_id} className="bg-gray-100 py-4">
            <div className="w-3/4 mb-5 container mx-auto px-4 space-y-5">
              <div className="flex items-center bg-white justify-between rounded-lg border p-3">
                <div className="flex items-center gap-4">
                  <figure className="h-16 w-16 overflow-hidden rounded-lg">
                    <img
                      src={product.product_image}
                      alt="Product"
                      className="h-full w-full object-cover"
                    />
                  </figure>
                  <div className="space-y-3">
                    <h2 className="card-title">{product.product_title}</h2>
                    <p className="text-sm text-gray-600">
                      {product.description}
                    </p>
                    <p className="text-xs text-gray-600">
                      Price: ${product.price}
                    </p>
                    {activeTab === "wishlist" && (
                      <button
                        className="btn mr-3 items-center rounded-full bg-purple-600 text-white"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
                <button onClick={() => handleRemoveItem(product.product_id)}>
                  <i className="text-2xl font-bold text-red-500">
                    <IoIosCloseCircleOutline />
                  </i>
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No items in the {activeTab}.</p>
      )}
      {isModalOpen && <PopUp closeModal={closeModal} totalCost={totalCost} />}
    </div>
  );
};

export default Dashboard;
