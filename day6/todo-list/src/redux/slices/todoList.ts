import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface TodoState {
  todos: {name: string, isChecked: boolean}[]
}

// Define the initial state using that type
const initialState: TodoState = {
  todos: [
    {name: "Ngencan Awewe", isChecked: false}
  ]
};

export const todoSlice = createSlice({
  name: "todo",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{ name: string; isChecked: boolean }>
    ) => {
      state.todos.push(action.payload);
    },
    checkList: (state, action: PayloadAction<{index: number, value: boolean}>) => {
      const {index, value} = action.payload
      state.todos[index].isChecked = value;
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos.splice(action.payload, 1);
    },
  },
});

export const { addTodo, checkList, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
