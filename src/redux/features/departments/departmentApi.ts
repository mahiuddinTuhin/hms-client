/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TDepartment } from "../../../pages/department/interface";
import { baseApi } from "../../API/baseApi";

const departmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allproblems: builder.query({
      query: () => ({
        url: "/department/problems",
        method: "GET",
      }),
    }),
    createDepartment: builder.mutation<TDepartment, Partial<TDepartment>>({
      query: (departmentInfo) => ({
        url: "/admin/create-department",
        method: "POST",
        body: departmentInfo,
      }),
      transformErrorResponse: (response: any, meta, arg) => response,
    }),
  }),
});

export const { useAllproblemsQuery, useCreateDepartmentMutation } =
  departmentApi;
