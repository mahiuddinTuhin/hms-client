/* eslint-disable @typescript-eslint/no-unused-vars */
import { Layout, theme } from "antd";
import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";
import SiderMenu from "./Slider";

const { Header, Content, Footer, Sider } = Layout;

const MainLayout: FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="h-screen">
      {/* //* slider section */}
      <SiderMenu />
      <Layout>
        {/* //! header section */}
        {/* <Header style={{ padding: 0 }} /> */}
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
