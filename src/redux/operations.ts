import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const instance = axios.create({
  baseURL: "https://auth-qa.qencode.com/v1/auth",
});

export const loginn = createAsyncThunk(
  "user/loginn",
  async (user: { email: string; password: string }, { rejectWithValue }) => {
    console.log(user);
    try {
      const response = await instance.post("login", user);

      return response.data;
    } catch (error) {
      return rejectWithValue({
        payload: (error as { message: string }).message,
      });
    }
  }
);
