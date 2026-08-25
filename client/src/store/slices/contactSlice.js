import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// Sends the contact form to the Express + MongoDB backend.
export const submitContact = createAsyncThunk(
  "contact/submitContact",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${API_URL}/api/contact`, formData);
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    }
  }
);

const initialState = {
  status: "idle", // idle | loading | succeeded | failed
  error: null,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    resetContactStatus(state) {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContact.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(submitContact.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(submitContact.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { resetContactStatus } = contactSlice.actions;
export default contactSlice.reducer;
