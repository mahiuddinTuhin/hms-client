/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";

const toastError = (isError: any, error: any) => {
  const err = error?.data?.errors?.map(
    (err: any) => `${err?.message} on ${Object.keys(err?.path)[0]}`
  );

  isError && err.map((errItem: string) => toast.error(errItem));
};

export default toastError;
