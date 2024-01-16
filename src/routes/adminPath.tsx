const adminPath = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    element: <h1>Admin Dashbaord</h1>,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "/admin/create-admin",
        element: <h1>Create Admin</h1>,
      },
      {
        name: "Create patient",
        path: "/admin/create-patient",
        element: <h1>Create patient</h1>,
      },
      {
        name: "Create nurse",
        path: "/admin/create-nurse",
        element: <h1>Create nurse</h1>,
      },
      {
        name: "Create staff",
        path: "/admin/create-staff",
        element: <h1>Create staff</h1>,
      },
      {
        name: "Create doctor",
        path: "/admin/create-doctor",
        element: <h1>Create doctor</h1>,
      },
    ],
  },
];

export default adminPath;
