/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import NavDrawer from "../NavMenu/NavDrawer";

const MainLayout: FC = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <NavDrawer />
      <Outlet />
    </div>
  );
};

export default MainLayout;
