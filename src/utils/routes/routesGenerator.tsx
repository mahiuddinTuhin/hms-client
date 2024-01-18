/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactNode } from "react";

export type TRouterPath = {
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: TRouterPath[];
};

const routesGenerator = (routesPath: TRouterPath[]) => {
  return routesPath.reduce((acc: TRouterPath[], item) => {
    if (!item?.path) {
      return acc;
    }

    const routeItem: TRouterPath = {
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
