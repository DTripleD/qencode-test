import { createSlice } from "@reduxjs/toolkit";
import {
  createPassword,
  loginn,
  refreshUser,
  resetPassword,
} from "./operations";

const handlePending = (state: UserState) => {
  state.isLoading = true;
  state.error = "";
};

const handleRejected = (state: UserState, action: { payload: string }) => {
  state.isLoggedIn = false;
  state.error = action.payload;
};

interface UserState {
  user: {
    access_token: string;
    detail: string;
    error: number;
    refresh_token: string;
    refresh_token_expire: number | null;
    timestamp: number | null;
    token_expire: number | null;
  };
  isLoading: boolean;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  error: string;
}

const initialState: UserState = {
  user: {
    access_token: "",
    detail: "",
    error: 0,
    refresh_token: "",
    refresh_token_expire: null,
    timestamp: null,
    token_expire: null,
  },
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: true,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut(state) {
      state.user = initialState.user;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(loginn.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        // state = action.payload;
      })
      .addCase(createPassword.fulfilled, (state, action) => {
        // state = action.payload;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user.refresh_token = action.payload.refresh_token;
        state.user.access_token = action.payload.access_token;

        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      ),
});

export const { logOut } = userSlice.actions;

export const userReducer = userSlice.reducer;
