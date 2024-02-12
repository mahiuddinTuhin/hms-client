import { Drawer } from "antd";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";

const NavDrawer: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      {!open && (
        <IoMdMenu
          onClick={showDrawer}
          className="hover:cursor-pointer text-xl ml-4 mt-4"
        />
      )}

      {open && (
        <CiMenuFries className="hover:cursor-pointer text-xl ml-4 mt-4" />
      )}
      <Drawer title="Menu" onClose={onClose} open={open}>
        <NavLink to="create-department">Create Department</NavLink>
        <br />
        <NavLink to="create-admin">Create Admin</NavLink>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default NavDrawer;
