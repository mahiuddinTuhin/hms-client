/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../API/baseApi";

const departmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allproblems: builder.query({
      query: () => ({
        url: "/department/problems",
        method: "GET",
      }),
    }),
    createDepartment: builder.mutation({
      query: (departmentInfo) => ({
        url: "/admin/create-department",
        method: "POST",
        body: departmentInfo,
      }),
    }),
  }),
});

export const { useAllproblemsQuery, useCreateDepartmentMutation } =
  departmentApi;
