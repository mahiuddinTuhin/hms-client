export const adminPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <h1>Admin Dashbaord</h1>,
  },
  {
    name: "User Management",
    path: "user-management",
    element: <h1>User Management</h1>,
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <h1>Create Admin</h1>,
      },
      {
        name: "Create patient",
        path: "create-patient",
        element: <h1>Create patient</h1>,
      },

      {
        name: "All user",
        path: "all-user",
        element: <h1>All user</h1>,
        children: [
          {
            name: "Patient",
            path: "patient",
            element: <h1>all patient</h1>,
          },

          {
            name: "Admin",
            path: "admin",
            element: <h1>all admin</h1>,
          },
          {
            name: "deleted-user",
            path: "deleted-user",
            element: <h1>Deleted User</h1>,
            children: [
              {
                name: "admin",
                path: "deleted-admin",
                element: <h1>all deleted admin</h1>,
              },
              {
                name: "patient",
                path: "deleted-patient",
                element: <h1>all patient</h1>,
              },
            ],
          },
        ],
      },
    ],
  },
];
