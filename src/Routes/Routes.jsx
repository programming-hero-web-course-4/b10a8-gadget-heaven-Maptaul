import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import MainLayout from "../Layouts/MainLayout";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
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
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default routes;
