import { FaHospitalUser, FaUserDoctor } from "react-icons/fa6";
import { HiLibrary } from "react-icons/hi";
import { LiaUserNurseSolid } from "react-icons/lia";
import { LuUserCog } from "react-icons/lu";
import {
  MdDashboard,
  MdFolderSpecial,
  MdOutlineAdminPanelSettings,
} from "react-icons/md";
import { RiHeartAddFill } from "react-icons/ri";
import { TiUserAddOutline } from "react-icons/ti";
import { Outlet } from "react-router-dom";
import UserManagement from "../components/layouts/UserManagement";
import Dashboard from "../pages/dashboard/Dashboard";
import CreateDepartment from "../pages/department/CreateDepartment";
import CreateSpecialization from "../pages/specialization/CreateSpecialization";
import CreateAdmin from "../pages/users/admin/CreateAdmin";
import CreateNurse from "../pages/users/nurse/CreateNurse";
import CreatePatient from "../pages/users/patient/CreatePatient";
import CreateStaff from "../pages/users/staff/CreateStaff";

export const adminPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: <MdDashboard />,
    element: <Dashboard />,
  },

  {
    name: "Create Department",
    path: "create-department",
    element: <CreateDepartment />,
    icon: <HiLibrary />,
  },
  {
    name: "Create Specialization",
    path: "create-specialization",
    element: <CreateSpecialization />,
    icon: <MdFolderSpecial />,
  },
  {
    name: "User Management",
    path: "user-management",
    element: <UserManagement />,
    icon: <LuUserCog />,
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
        icon: <MdOutlineAdminPanelSettings />,
      },
      {
        name: "Create Doctor",
        path: "create-doctor",
        icon: <RiHeartAddFill />,
        element: <FaUserDoctor />,
      },
      {
        name: "Create patient",
        path: "create-patient",
        icon: <TiUserAddOutline />,
        element: <CreatePatient />,
      },
      {
        name: "Create Nurse",
        path: "create-nurse",
        icon: <LiaUserNurseSolid />,
        element: <CreateNurse />,
      },
      {
        name: "Create Staff",
        path: "create-staff",
        icon: <FaHospitalUser />,
        element: <CreateStaff />,
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
