/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseQueryApi } from "@reduxjs/toolkit/query";
import { baseApi } from "../../../API/baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allAdmin: builder.query({
      query: () => ({
        url: "/users/admin",
        method: "GET",
      }),
      transformResponse: (baseQueryReturnValue: BaseQueryApi, meta, arg) => {
        const response = baseQueryReturnValue as any;
        return response.data;
      },
    }),
    createAdmin: builder.mutation({
      query: (data: any) => ({
        url: "/users/create-admin",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAllAdminQuery, useCreateAdminMutation } = adminApi;
