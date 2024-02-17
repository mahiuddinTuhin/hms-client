import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import NotFound from "../pages/notFound/NotFound";
import { routesGenerator } from "../utils/routes/routesGenerator";
import { adminPath } from "./adminPath";
import { patientPath } from "./patientPath";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/",
    element: <App />,
    children: routesGenerator(adminPath, "admin"),
  },
  {
    path: "patient",
    element: <App />,
    children: routesGenerator(patientPath, "patient"),
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
