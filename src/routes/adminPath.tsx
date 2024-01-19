import { Outlet } from "react-router-dom";
import CreateAdmin from "../components/layouts/CreateAdmin";
import CreatePatient from "../components/layouts/CreatePatient";
import Dashboard from "../components/layouts/Dashboard";
import UserManagement from "../components/layouts/UserManagement";

export const adminPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    name: "User Management",
    path: "user-management",
    element: <UserManagement />,
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create patient",
        path: "create-patient",
        element: <CreatePatient />,
      },

      {
        name: "All user",
        path: "all-user",
        element: (
          <h1>
            All user routes <Outlet />{" "}
          </h1>
        ),
        children: [
          {
            name: "Patient",
            path: "patient",
            element: <h1>all patient routes</h1>,
          },

          {
            name: "Admin",
            path: "admin",
            element: <h1>all admin routes</h1>,
          },
          {
            name: "deleted-user",
            path: "deleted-user",
            element: (
              <h1>
                Deleted User routes <Outlet />{" "}
              </h1>
            ),
            children: [
              {
                name: "admin",
                path: "deleted-admin",
                element: <h1>all deleted admin</h1>,
              },
              {
                name: "patient",
                path: "deleted-patient",
                element: <h1>all patient routes</h1>,
              },
            ],
          },
        ],
      },
    ],
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
    children: [
      {
        name: "About Admin",
        path: "About admin",
        element: <h2>About admin layout</h2>,
      },
    ],
  },
];
