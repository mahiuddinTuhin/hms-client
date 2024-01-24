import { baseApi } from "../../API/baseApi";

const departmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allproblems: builder.query({
      query: () => ({
        url: "/department/problems",
        method: "GET",
      }),
    }),
  }),
});

export const { useAllproblemsQuery } = departmentApi;
