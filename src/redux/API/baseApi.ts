import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TRootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    /* send token within header with request */
    const token = (getState() as TRootState).auth.userToken;
    if (token) {
      headers.set("Authorization", `${token}`);
    }
    return headers;
  },
});

const baseQueryWithToken = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  console.log(result.error);
};

const createBaseApi = {
  reducerPath: "baseApi",
  baseQuery: baseQueryWithToken,
  endpoints: () => ({}),
};

export const baseApi = createApi(createBaseApi);
