import { baseApi } from "../../API/baseApi";

const AuthApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    createAdmin: builder.mutation({
      query: (userInfo) => ({
        url: "/users/create-admin",
        method: "POST",
        body: userInfo,
      }),
    }),
    createPatient: builder.mutation({
      query: (userInfo) => ({
        url: "/users/create-patient",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useCreateAdminMutation,
  useCreatePatientMutation,
} = AuthApi;
