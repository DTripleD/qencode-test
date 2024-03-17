import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "user",

  storage,
};

export const store = configureStore({
  reducer: {
    user: persistReducer(persistConfig, userReducer),
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
