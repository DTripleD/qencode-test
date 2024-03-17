import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { selectUser } from "./selectors";
import { useSelector } from "react-redux";

export const instance = axios.create({
  baseURL: "https://auth-qa.qencode.com/v1/auth",
});

export const loginn = createAsyncThunk(
  "user/loginn",
  async (user: { email: string; password: string }, { rejectWithValue }) => {
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

export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async (
    user: {
      email: "user@example.com";
      redirect_url: "https://auth-qa.qencode.com/password-set";
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await instance.post("/password-reset", user);

      return response.data;
    } catch (error) {
      return rejectWithValue({
        payload: (error as { message: string }).message,
      });
    }
  }
);

export const createPassword = createAsyncThunk(
  "user/createPassword",
  async (
    user: {
      password: "string";
      password_confirm: "string";
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await instance.post("/password-set", {
        token: "user@example.com",
        secret: "https://auth-qa.qencode.com/password-set",
        ...user,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue({
        payload: (error as { message: string }).message,
      });
    }
  }
);

export const refreshUser = createAsyncThunk(
  "user/refreshUser",
  async (refresh_token: string, { rejectWithValue }) => {
    try {
      const response = await instance.post("/refresh-token", {
        refresh_token,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue({
        payload: (error as { message: string }).message,
      });
    }
  }
);
