/* eslint-disable @typescript-eslint/no-unused-vars */
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { generateMenuItems } from "../../../utils/nav/sideNavGenerator";
import { adminPath } from "../../../routes/adminPath";
function SiderMenu() {
  return (
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
        items={generateMenuItems(adminPath, "admin")}
      />
    </Sider>
  );
}

export default SiderMenu;
