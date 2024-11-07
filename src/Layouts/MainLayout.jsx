import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* <Banner /> */}
      {/* Dynamic Section */}
      <div className="min-h-[calc(100vh-288px)] py-12">
        {/* Dynamic Section */}
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
