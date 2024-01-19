/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { FC, createElement } from "react";
import { NavLink } from "react-router-dom";
import { adminPath } from "../../routes/adminPath";
import { generateMenuItems } from "../../utils/nav/sideNavGenerator";

const { Header, Content, Footer, Sider } = Layout;

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: createElement(icon),

  label: <NavLink to="/">{`nav ${index + 1}`}</NavLink>,
}));

const MainLayout: FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      {/* //* slider section */}
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          // console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={generateMenuItems(adminPath)}
        />
      </Sider>
      <Layout>
        {/* //! header section */}
        <Header style={{ padding: 0, background: colorBgContainer }} />
        {/* //! main content */}
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <NavLink to="/">Home</NavLink>
          </div>
        </Content>
        {/* //! Footer section */}
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
