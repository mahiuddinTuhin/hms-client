/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactNode } from "react";

export type TRoute = {
  path?: string;
  element?: ReactNode;
  // name?: string;
  children?: TRoute[];
};

export type TUserPath = {
  path?: string;
  element?: ReactNode;
  name?: string;
  children?: TUserPath[];
};

const routesGenerator = (routesPath: TUserPath[]) => {
  return routesPath.reduce((acc: TRoute[], item) => {
    if (!item?.path) {
      return acc;
    }

    const routeItem: TRoute = {
      path: item?.path,
      element: item?.element,
    };

    if (item?.children) {
      routeItem.children = item.children.map((child) => ({
        path: child?.path,
        element: child?.element,
      }));
    }

    acc.push(routeItem);

    return acc;
  }, []);
};

export default routesGenerator;
