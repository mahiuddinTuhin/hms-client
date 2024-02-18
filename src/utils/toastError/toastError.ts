/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";

const toastError = (isError: any, error: any) => {
  const err = error?.data?.errors?.map((err: any) => {
    let path = err?.path[err?.path.length - 1];
    if (!Array.isArray(err?.path)) {
      path = Object.keys(err?.path)[0];
    }
    const result = `${err?.message} on ${path}`;
    return result;
  });

  isError && err.map((errItem: string) => toast.error(errItem));
};

export default toastError;
