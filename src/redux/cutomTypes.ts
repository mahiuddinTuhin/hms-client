import { Store } from "@reduxjs/toolkit";
import store, { TRootState } from "./store";

export type TMyStore = Store & {
  dispatch: typeof store.dispatch;
  getState: () => TRootState;
};
