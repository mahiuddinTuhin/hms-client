import { Outlet } from "react-router-dom";

function UserManagement() {
  return (
    <div>
      This is UserManagement layout
      <Outlet />
    </div>
  );
}

export default UserManagement;
