/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminPath } from "./adminPath";

type TRouteItem = {
  name: string;
  path: string;
  element?: ReactNode;
  children?: TRouteItem[];
};

export const generateRoutes2 = (data: TRouteItem[]): RouteObject[] => {
  const generateRoute = (item: TRouteItem): RouteObject => {
    const route: RouteObject = {
      path: item.path,
      element: item.element,
    };

    if (item.children && item.children.length > 0) {
      route.children = item.children.map(generateRoute);
    }

    return route;
  };

  return [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "admin",
      element: <App />,
      children: data?.map(generateRoute),
    },
    {
      path: "*",
      element: <h1>Not found</h1>,
    },
  ];
};
export const router = createBrowserRouter(generateRoutes2(adminPath));

export default router;
