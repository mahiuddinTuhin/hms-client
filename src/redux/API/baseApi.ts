import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TRootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    /* send token within header with request */
    const token = (getState() as TRootState).auth.userToken;

    // console.log(token);

    if (token) {
      headers.set("Authorization", `${token}`);
    }

    return headers;
  },
});

const createBaseApi = {
  reducerPath: "baseApi",
  baseQuery,
  endpoints: () => ({}),
};

export const baseApi = createApi(createBaseApi);
