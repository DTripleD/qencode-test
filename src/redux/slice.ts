import { createSlice } from "@reduxjs/toolkit";
import { loginn } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = "";
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  access_token: "",
  detail: "",
  error: 0,
  refresh_token: "",
  refresh_token_expire: null,
  timestamp: null,
  token_expire: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(loginn.fulfilled, (state, action) => {
        state = action.payload;
      })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      ),
});

export const userReducer = userSlice.reducer;
