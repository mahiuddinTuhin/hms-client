/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

export type TMenuItem = {
  name: string;
  icon?: ReactNode;
  path: string;
  children?: TMenuItem[];
};

export type TEnhancedMenuItem = {
  key: string;
  icon?: ReactNode;
  label: ReactNode;
  children?: TEnhancedMenuItem[];
};

export const generateMenuItems = (
  items: TMenuItem[],
  parentPath = ""
): TEnhancedMenuItem[] => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return items.map((item, index) => {
    const fullPath = `${parentPath}/${item?.path}`.replace(/\/+/g, "/");

    const menuItem: TEnhancedMenuItem = {
      key: item?.name + index,
      label: <NavLink to={fullPath}>{item?.name}</NavLink>,
    };

    if (item?.children && item?.children.length > 0) {
      menuItem.children = generateMenuItems(item.children, fullPath);
    }

    return menuItem;
  });
};
