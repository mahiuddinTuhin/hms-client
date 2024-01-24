/* eslint-disable @typescript-eslint/no-unused-vars */
import { Layout, theme } from "antd";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

import { toast } from "sonner";
import { logout } from "../../../redux/features/auth/authSlice";
import SiderMenu from "./Slider";

const { Header, Content, Footer, Sider } = Layout;

const MainLayout: FC = () => {
  const dispatch = useDispatch();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  

  const handleLogout = () => {
    dispatch(logout());
    toast.error("Sign out", { duration: 2000 });
  };

  return (
    <Layout className="h-screen">
      {/* //* slider section */}
      <SiderMenu />
      <Layout>
        {/* //! header section */}
        <Header style={{ padding: 0 }}>
          <button className="bg-slate-200 px-12" onClick={handleLogout}>
            Logout
          </button>
        </Header>
        {/* //! main content */}
        <Content style={{}}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
            <NavLink to="/">Home</NavLink>
          </div>
        </Content>
        {/* //! Footer section */}
      </Layout>
    </Layout>
  );
};

export default MainLayout;
