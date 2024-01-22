/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/auth/Login";
import { routesGenerator } from "../utils/routes/routesGenerator";
import { adminPath } from "./adminPath";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "admin",
    element: <App />,
    children: routesGenerator(adminPath),
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "*",
    element: <App />,
  },
]);

export default router;
