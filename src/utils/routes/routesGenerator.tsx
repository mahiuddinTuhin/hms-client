/* eslint-disable @typescript-eslint/no-explicit-any */
export type TUserPath = {
  name?: string;
  path?: string;
  element?: any;
  children?: TUserPath[];
};

export const routesGenerator = (items: TUserPath[]): TUserPath[] => {
  const routes = items?.map((item: TUserPath) => {
    // if (item?.path === "create-admin") {
    //   console.log({ element: item?.element });
    // }
    const routeItem: TUserPath = {
      path: item?.path,
      element: item?.element,
      children:
        item?.children && item?.children?.length > 0
          ? routesGenerator(item?.children)
          : undefined,
    };

    return routeItem;
  });

  return routes;
};
