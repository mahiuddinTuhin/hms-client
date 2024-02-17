/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BaseQueryApi,
  BaseQueryFn,
  DefinitionType,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { logout, setUser } from "../features/auth/authSlice";
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

const baseQueryWithToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  const auth = (api.getState() as TRootState).auth;

  // * checking unauthorizing issue and then get new access token
  if (result.error?.status === 401) {
    const res = await fetch("http://localhost:8080/api/v1/auth/refresh-token", {
      credentials: "include",
      method: "POST",
    });

    const newToken = await res.json();

    // ? if refresh token retrieve failed, then logout the current user
    if (!newToken?.success || !newToken?.data) {
      api.dispatch(logout());
    }

    api.dispatch(
      setUser({
        user: auth.user,
        userToken: newToken.data,
      })
    );
    result = await baseQuery(args, api, extraOptions);
  }

  // console.log(api.getState());

  return result;
};

const createBaseApi = {
  reducerPath: "baseApi",
  baseQuery: baseQueryWithToken,
  endpoints: () => ({}),
};

export const baseApi = createApi(createBaseApi);
