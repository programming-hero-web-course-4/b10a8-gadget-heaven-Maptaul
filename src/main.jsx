import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import ContextApi from "./Context/ContextApi";
import "./index.css";
import routes from "./Routes/Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextApi>
      <RouterProvider router={routes} />
    </ContextApi>
  </StrictMode>
);
