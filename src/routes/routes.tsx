import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "admin",
    element: <App />,
    // children: generateRoutes(adminPath),
  },
  {
    path: "*",
    element: <App />,
  },
]);

export default router;
