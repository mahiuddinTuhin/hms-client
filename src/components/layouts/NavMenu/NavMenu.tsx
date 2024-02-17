import {} from "@ant-design/icons";
import { Button, Menu } from "antd";
import React, { useState } from "react";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import { adminPath } from "../../../routes/adminPath";
import { generateMenuItems } from "../../../utils/nav/generateMenuItems";

const NavMenu: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = generateMenuItems(adminPath, "admin");

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ width: 256 }}>
      <Button
        type="text"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
      >
        {collapsed ? <MdMenu /> : <MdMenuOpen />}
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={menuItems}
        className="ml-4 rounded-md py-1"
      />
    </div>
  );
};

export default NavMenu;
