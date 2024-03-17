import { store } from "./store";

type RootState = ReturnType<typeof store.getState>;

export const selectUser = (state: RootState) => state.user;

export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;

export const selectIsRefreshing = (state: RootState) => state.user.isRefreshing;
