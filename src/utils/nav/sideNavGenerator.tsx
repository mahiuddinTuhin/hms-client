import { ReactNode } from "react";
import { Link } from "react-router-dom";

export type TMenuItem = {
  name: string;
  path?: string;
  // role?: string;
  icon?: ReactNode;
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
  parentRole: string,
  parentPath: string = ""
): TEnhancedMenuItem[] => {
  return items.map((item, index) => {
    const fullPath = `${parentPath}/${item?.path}`.replace(/\/+/g, "/");
    // console.log({ parentRole, fullPath });
    const rolePath = parentRole ? `/${parentRole}${fullPath}` : fullPath;
    // console.log({ rolePath });

    const menuItem: TEnhancedMenuItem = {
      key: item?.name + index,
      label: <Link to={rolePath}>{item?.name}</Link>,
    };

    if (item?.children && item?.children.length > 0) {
      menuItem.children = generateMenuItems(
        item.children,
        parentRole,
        fullPath
      );
    }

    return menuItem;
  });
};
