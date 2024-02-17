/* eslint-disable @typescript-eslint/no-explicit-any */
export type TUserPath = {
  name?: string;
  path?: string;
  element?: any;
  children?: TUserPath[];
};

export const routesGenerator = (
  items: TUserPath[],
  parentRole: string,
  parentPath: string = ""
): TUserPath[] => {
  const routes = items?.map((item: TUserPath) => {
    // if (item?.path === "create-admin") {
    //   console.log({ element: item?.element });
    // }

    const fullPath = `${parentPath}/${item?.path}`.replace(/\/+/g, "/");
    // console.log({ parentRole, fullPath });
    const rolePath = parentRole ? `/${parentRole}${fullPath}` : fullPath;

    const routeItem: TUserPath = {
      path: rolePath,
      element: item?.element,
      children:
        item?.children && item?.children?.length > 0
          ? routesGenerator(item?.children, parentRole, fullPath)
          : undefined,
    };

    console.log(`/${item?.path}`);

    return routeItem;
  });

  return routes;
};
