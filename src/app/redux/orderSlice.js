import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const placeOrder = createAsyncThunk(
  "order/placeOrder",
  async (orderData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://admin.refabry.com/api/public/order/create",
        orderData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orderInfo: null,
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    resetOrder: (state) => {
      state.orderInfo = null;
      state.loading = false;
      state.error = null;
      state.success = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orderInfo = action.payload;
        state.success = true;
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { resetOrder } = orderSlice.actions;
export default orderSlice.reducer;
