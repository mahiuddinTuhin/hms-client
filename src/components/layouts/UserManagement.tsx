import { Outlet } from "react-router-dom";

function UserManagement() {
  console.log("user management called");
  return (
    <div>
      This is UserManagement layout
      <Outlet />
    </div>
  );
}

export default UserManagement;
