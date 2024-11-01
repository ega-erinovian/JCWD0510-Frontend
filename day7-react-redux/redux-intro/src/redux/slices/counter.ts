import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface CounterState {
  value: number;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  //  Biasa disebut action
  reducers: {
    // Action increment
    increment: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    // Action decrement
    decrement: (state) => {
      state.value -= 1;
    },
    // Action increment by mount
    // Use the PayloadAction type to declare the contents of `action.payload` (Seperti passing argument)
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
