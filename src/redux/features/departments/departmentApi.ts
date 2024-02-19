/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseQueryApi } from "@reduxjs/toolkit/query";
import {
  TDepartment,
  TSpecializations,
} from "../../../pages/department/interface";
import { baseApi } from "../../API/baseApi";

const departmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allproblems: builder.query({
      query: () => ({
        url: "/department/problems",
        method: "GET",
      }),
    }),
    allDepartments: builder.query({
      query: () => ({
        url: "/department",
        method: "GET",
      }),
      transformResponse: (baseQueryReturnValue: BaseQueryApi, meta, arg) => {
        const response = baseQueryReturnValue as any;
        return response.data;
      },
    }),
    createDepartment: builder.mutation<TDepartment, Partial<TDepartment>>({
      query: (departmentInfo) => ({
        url: "/admin/create-department",
        method: "POST",
        body: departmentInfo,
      }),
      transformErrorResponse: (response: any) => response,
    }),
    createSpecialization: builder.mutation<
      TSpecializations,
      Partial<TSpecializations>
    >({
      query: (specializationData) => ({
        url: "/admin/create-specialization",
        method: "POST",
        body: specializationData,
      }),
      transformErrorResponse: (response: any) => response,
    }),
  }),
});

export const {
  useAllproblemsQuery,
  useCreateDepartmentMutation,
  useCreateSpecializationMutation,
  useAllDepartmentsQuery,
} = departmentApi;
