import { Outlet } from "react-router-dom";
import Dashboard from "../components/layouts/Dashboard";
import AllProblems from "../components/layouts/patients/AllProblems";

export const patientPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    name: "Problems",
    path: "problems",
    element: <AllProblems />,
  },
  {
    name: "Help",
    path: "help",
    element: <h1>This is Help layout</h1>,
  },
  {
    name: "About us",
    path: "about-us",
    element: (
      <h1>
        About us layout
        <Outlet />
      </h1>
    ),
  },
];
