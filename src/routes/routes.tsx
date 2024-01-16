import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "contact",
        element: <h1>contact found</h1>,
      },
      {
        path: "about",
        element: <h1>about found</h1>,
      },
      {
        path: "*",
        element: <h1>Routes not found</h1>,
      },
    ],
  },
  {
    path: "register",
    element: <h1>register found</h1>,
  },
  {
    path: "login",
    element: <h1>login found</h1>,
  },
  {
    path: "*",
    element: <h1>Routes not found</h1>,
  },
]);

export default router;
