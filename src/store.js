import { configureStore, createSlice } from "@reduxjs/toolkit";

// Create a slice of state
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

// Export actions
export const { increment, decrement, reset } = counterSlice.actions;

// Create and export the store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
