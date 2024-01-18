/* eslint-disable @typescript-eslint/no-explicit-any */

import { NavLink } from "react-router-dom";
import { TRouterPath } from "../../utils/routes/routesGenerator";

export type TMenuItem = {
  key?: string;
  label?: any;
  children?: TMenuItem[];
};

export const sideNavGenerator = (routesPath: TRouterPath[]) => {
  return routesPath.reduce((acc: TRouterPath[], item) => {
    if (!item?.path || !item?.name) {
      return acc;
    }

    const navItem: TMenuItem = {
      key: item?.name,
      label: <NavLink to={`/admin/${item?.path}`} />,
    };

    if (item?.children) {
      navItem.children = item.children.map((child) => ({
        key: child?.name,
        label: <NavLink to={`/admin/${child?.path}`}>{child?.name}</NavLink>,
      }));
    }

    acc.push(navItem);

    return acc;
  }, []);
};
