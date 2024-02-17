/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "antd";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { Toaster } from "sonner";
import { logout } from "../../../redux/features/auth/authSlice";
import { useAppSelector } from "../../../redux/hooks/hooks";
import NavMenu from "../NavMenu/NavMenu";

const MainLayout: FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  // !isLoggedIn && navigate("/login");

  return (
    <div className="grid grid-cols-12 ">
      <div className="col-span-1">
        <NavMenu />
      </div>
      <div className="col-span-11">
        <div className="flex items-center justify-center">
          <h4>{user?.role}</h4>
          <Button onClick={handleLogout} className="ml-4">
            Logout
          </Button>
        </div>
        <div className="min-h-screen mt-12">
          <Outlet />
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default MainLayout;
