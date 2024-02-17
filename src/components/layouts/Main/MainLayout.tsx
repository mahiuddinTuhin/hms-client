/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "antd";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
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
    <div className="flex justify-between ">
      <NavMenu />
      <div className="flex ">
        <h4>{user?.role}</h4>
        <Button onClick={handleLogout} className="ml-4">
          Logout
        </Button>
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
