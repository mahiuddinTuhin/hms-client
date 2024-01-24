/* eslint-disable @typescript-eslint/no-unused-vars */
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { logout } from "../../../redux/features/auth/authSlice";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { userCurrentUser } from "../../../redux/store";
import { adminPath } from "../../../routes/adminPath";
import { patientPath } from "../../../routes/patientPath";
import { generateMenuItems } from "../../../utils/nav/sideNavGenerator";

const userRole = {
  ADMIN: "admin",
  PATIENT: "patient",
  STAFF: "staff",
  DOCTOR: "doctor",
  NURSE: "nurse",
};

function SiderMenu() {
  const user = useAppSelector(userCurrentUser);

  // set items dynamically for side bar menu by user role

  const items = () => {
    switch (user?.role) {
      case userRole.ADMIN:
        return generateMenuItems(adminPath, "admin");
      // case userRole.DOCTOR:
      //   return generateMenuItems(doctorPath, "doctor");
      case userRole.PATIENT:
        return generateMenuItems(patientPath, "patient");
      default:
        logout();
    }
  };
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
        items={items()}
      />
    </Sider>
  );
}

export default SiderMenu;
