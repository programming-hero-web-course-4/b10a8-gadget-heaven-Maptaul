import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import ProductCards from "../Components/ProductCards";
import MainLayout from "../Layouts/MainLayout";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import ProductDetails from "../Pages/ProductDetails";
import Statistics from "../Pages/Statistics";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../Category.json"),
        children: [
          {
            path: "/category/:category",
            element: <ProductCards />,
            loader: () => fetch("../AllCategory.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/productdetails",
        element: <ProductDetails />,
      },
    ],
  },
]);

export default routes;
